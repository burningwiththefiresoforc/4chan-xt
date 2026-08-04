import Redirect from "../Archive/Redirect";
import Notice from "../classes/Notice";
import { g, Conf, d } from "../globals/globals";
import $ from "../platform/$";
import CrossOrigin from "../platform/CrossOrigin";
import ImageHost from "./ImageHost";
import Volume from "./Volume";

/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS104: Avoid inline assignments
 * DS204: Change includes calls to have a more natural evaluation order
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
var ImageCommon = {
  // Pause and mute video in preparation for removing the element from the document.
  pause(video) {
    if (video.nodeName !== 'VIDEO') return;
    video.pause();
    $.off(video, 'volumechange', Volume.change);
    return video.muted = true;
  },

  rewind(el) {
    if (el.nodeName === 'VIDEO') {
      if (el.readyState >= el.HAVE_METADATA) return el.currentTime = 0;
    } else if (/\.gif$/.test(el.src)) {
      return $.queueTask(() => el.src = el.src);
    }
  },

  pushCache(el) {
    ImageCommon.cache = el;
    $.on(el, 'error', ImageCommon.cacheError);
  },

  popCache() {
    const el = ImageCommon.cache;
    $.off(el, 'error', ImageCommon.cacheError);
    delete ImageCommon.cache;
    return el;
  },

  cacheError() { if (ImageCommon.cache === this) delete ImageCommon.cache; },

  decodeError(file, fileObj) {
    if (file.error?.code !== MediaError.MEDIA_ERR_DECODE) return false;
    let message = $('.warning', fileObj.thumb.parentNode);
    if (!message) {
      message = $.el('div', {className: 'warning'});
      $.after(fileObj.thumb, message);
    }
    message.textContent = 'Error: Corrupt or unplayable video';
    return true;
  },

  isFromArchive: (file) => (g.SITE.software === 'yotsuba') && !ImageHost.test(file.src.split('/')[2]),

  error(file, post, fileObj, delay, cb) {
    const src = fileObj.url.split('/');
    let url = null;
    if ((g.SITE.software === 'yotsuba') && Conf['404 Redirect']) {
      url = Redirect.to('file', {
        boardID:  post.board.ID,
        filename: src[src.length - 1]
      });
    }
    if (!url || !Redirect.securityCheck(url)) url = null;

    if ((post.isDead || fileObj.isDead) && !ImageCommon.isFromArchive(file)) return cb(url);

    let timeoutID;
    if (delay) timeoutID = setTimeout((() => cb(url)), delay);
    if (post.isDead || fileObj.isDead) return;
    const redirect = () => {
      if (!ImageCommon.isFromArchive(file)) {
        if (delay) clearTimeout(timeoutID);
        return cb(url);
      }
    };

    const threadJSON = g.SITE.urls.threadJSON?.(post);
    if (!threadJSON) return;
    var parseJSON = function(isArchiveURL) {
      let needle, postObj;
      if (this.status === 404) {
        let archivedThreadJSON;
        if (!isArchiveURL && (archivedThreadJSON = g.SITE.urls.archivedThreadJSON?.(post))) {
          $.ajax(archivedThreadJSON, {onloadend() { return parseJSON.call(this, true); }});
        } else {
          post.kill(!post.isClone, fileObj.index);
        }
      }
      if (this.status !== 200) return redirect();
      for (postObj of this.response.posts) {
        if (postObj.no === post.ID) break;
      }
      if (postObj.no !== post.ID) {
        post.kill();
        return redirect();
      } else if ((needle = fileObj.docIndex, g.SITE.Build.parseJSON(postObj, post.board).filesDeleted.includes(needle))) {
        post.kill(true);
        return redirect();
      } else {
        return url = fileObj.url;
      }
    };
    $.ajax(threadJSON, {onloadend() { return parseJSON.call(this); }});
  },

  // XXX Estimate whether clicks are on the video controls and should be ignored.
  onControls: (e) => (Conf['Show Controls'] && Conf['Click Passthrough'] && (e.target.nodeName === 'VIDEO')) || (e.target.controls && ((e.target.getBoundingClientRect().bottom - e.clientY) < 35)),

  download(e) {
    if (this.protocol === 'blob:') return true;
    e.preventDefault();
    const {href, download} = this;
    CrossOrigin.file(href, (blob) => {
      if (blob) {
        const a = $.el('a', {
          href: URL.createObjectURL(blob),
          download,
          hidden: true
        });
        $.add(d.body, a);
        a.click();
        $.rm(a);
      } else {
        new Notice('warning', `Could not download ${href}`, 20);
      }
    });
  }
};
export default ImageCommon;
