import Callbacks from "../classes/Callbacks";
import Get from "../General/Get";
import { g, Conf } from "../globals/globals";
import $ from "../platform/$";
import $$ from "../platform/$$";

/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
const ExpandComment = {
  init() {
    if ((g.VIEW !== 'index') || !Conf['Comment Expansion'] || Conf['JSON Index']) { return; }

    Callbacks.Post.push({
      name: 'Comment Expansion',
      cb:   this.node
    });
  },

  node() {
    let a;
    if (a = $('.abbr > a:not([onclick])', this.nodes.comment)) {
      $.on(a, 'click', ExpandComment.cb);
    }
  },

  callbacks: [],

  cb(e) {
    e.preventDefault();
    ExpandComment.expand(Get.postFromNode(this));
  },

  expand(post) {
    let a;
    if (post.nodes.longComment && !post.nodes.longComment.parentNode) {
      $.replace(post.nodes.shortComment, post.nodes.longComment);
      post.nodes.comment = post.nodes.longComment;
      return;
    }
    if (!(a = $('.abbr > a', post.nodes.comment))) { return; }
    a.textContent = `Post No.${post} Loading...`;
    return $.cache(g.SITE.urls.threadJSON({boardID: post.boardID, threadID: post.threadID}), function() { return ExpandComment.parse(this, a, post); });
  },

  contract(post) {
    if (!post.nodes.shortComment) { return; }
    const a = $('.abbr > a', post.nodes.shortComment);
    a.textContent = 'here';
    $.replace(post.nodes.longComment, post.nodes.shortComment);
    return post.nodes.comment = post.nodes.shortComment;
  },

  parse(req, a, post) {
    let spoilerRange;
    const {status} = req;
    if (![200, 304].includes(status)) {
      a.textContent = status ? `Error ${req.statusText} (${status})` : 'Connection Error';
      return;
    }

    const { posts } = req.response;
    if (spoilerRange = posts[0].custom_spoiler) {
      g.SITE.Build.spoilerRange[g.BOARD] = spoilerRange;
    }

    const postObj = posts.find(p => p.no === post.ID);
    if (!postObj) {
      a.textContent = `Post No.${post.ID} not found.`;
      return;
    }

    const {comment} = post.nodes;
    const clone = comment.cloneNode(false);
    clone.innerHTML = postObj.com;

    const pathParts = a.pathname.split(/\/+/);
    const threadBase = pathParts.slice(0, 4).join('/');
    const boardBase  = pathParts.slice(0, 3).join('/');
    // Fix pathnames
    for (const quote of $$('.quotelink', clone)) {
      const href = quote.getAttribute('href');
      if (!href || href[0] === '/') { continue; }

      quote.href = href[0] === '#' ? `${threadBase}${href}` : `${boardBase}/${href}`;
    }

    post.nodes.shortComment = comment;
    $.replace(comment, clone);
    post.nodes.comment = (post.nodes.longComment = clone);
    post.parseComment();
    post.parseQuotes();

    for (const callback of ExpandComment.callbacks) {
      callback.call(post);
    }
  }
};
export default ExpandComment;;
