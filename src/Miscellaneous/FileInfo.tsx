import Callbacks from "../classes/Callbacks";
import Filter from "../Filtering/Filter";
import { g, Conf, E } from "../globals/globals";
import h, { isEscaped } from "../globals/jsx";
import Icon from "../Icons/icon";
import ImageCommon from "../Images/ImageCommon";
import $ from "../platform/$";
import $$ from "../platform/$$";
import SW from "../site/SW";

/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */

var FileInfo = {
  init() {
    if (!['index', 'thread', 'archive'].includes(g.VIEW) || !Conf['File Info Formatting']) { return; }

    Callbacks.Post.push({
      name: 'File Info Formatting',
      cb:   this.node
    });
  },

  node() {
    let a;
    if (!this.file) { return; }
    if (this.isClone) {
      for (a of $$('.file-info .download-button', this.file.text)) {
        $.on(a, 'click', ImageCommon.download);
      }
      for (a of $$('.file-info .quick-filter-md5', this.file.text)) {
        $.on(a, 'click', Filter.quickFilterMD5);
      }
      return;
    }

    const oldInfo = $.el('span', {className: 'fileText-original'});
    $.prepend(this.file.link.parentNode, oldInfo);
    $.add(oldInfo, [this.file.link.previousSibling, this.file.link, this.file.link.nextSibling]);

    const info = $.el('span', {className: 'file-info'});
    FileInfo.format(Conf.fileInfo, this, info);
    $.prepend(this.file.text, info);
  },

  format(formatString, post, outputNode) {
    const tokens = FileInfo.getTokens(formatString);
    const output = tokens.map(t => typeof t === 'function' ? t.call(post) : t);
    $.extend(outputNode, {innerHTML: E.cat(output)});
    FileInfo.bindFileButtons(outputNode);
  },

  getTokens(formatString) {
    if (FileInfo._tokensKey === formatString) return FileInfo._tokens;
    const tokens = [];
    const FORMAT_REGEX = /%(.)|[^%]+/g;
    formatString.replace(FORMAT_REGEX, (s, c) => {
      tokens.push($.hasOwn(FileInfo.formatters, c) ? FileInfo.formatters[c] : {innerHTML: E(s)});
      return '';
    });
    FileInfo._tokensKey = formatString;
    FileInfo._tokens = tokens;
    return tokens;
  },

  bindFileButtons(container) {
    for (const a of $$('.download-button, .quick-filter-md5', container)) {
      if (a.classList.contains('download-button')) {
        $.on(a, 'click', ImageCommon.download);
      } else {
        $.on(a, 'click', Filter.quickFilterMD5);
      }
    }
  },

  formatters: {
    t() { return { innerHTML: E(this.file.url.slice(this.file.url.lastIndexOf('/') + 1)), [isEscaped]: true }; },
    T() { return <a href={this.file.url} target="_blank">{FileInfo.formatters.t.call(this)}</a> },
    l() { return <a href={this.file.url} target="_blank">{FileInfo.formatters.n.call(this)}</a> },
    L() { return <a href={this.file.url} target="_blank">{FileInfo.formatters.N.call(this)}</a> },
    n() {
      const fullname  = this.file.name;
      const shortname = SW.yotsuba.Build.shortFilename(this.file.name, this.isReply);
      if (fullname === shortname) {
        return { innerHTML: E(fullname), [isEscaped]: true };
      } else {
        return <span class="fnswitch">
          <span class="fntrunc">{shortname}</span>
          <span class="fnfull">{fullname}</span>
        </span>;
      }
    },
    N() { return { innerHTML: E(this.file.name), [isEscaped]: true }; },
    d() {
      return <a href={this.file.url} download={this.file.name} class="download-button">{Icon.raw('download')}</a>;
    },
    f() {
      return {
        innerHTML: `<a href="javascript:;" class="quick-filter-md5">${Icon.get('xmark')}</a>`,
        [isEscaped]: true,
      };
    },
    p() { return { innerHTML: ((this.file.isSpoiler) ? "Spoiler, " : ""), [isEscaped]: true }; },
    s() { return { innerHTML: E(this.file.size), [isEscaped]: true }; },
    B() { return { innerHTML: Math.round(this.file.sizeInBytes) + " Bytes", [isEscaped]: true }; },
    K() { return { innerHTML: (Math.round(this.file.sizeInBytes / 1024)) + " KB", [isEscaped]: true }; },
    M() { return { innerHTML: (Math.round(this.file.sizeInBytes / 1048576 * 100) / 100) + " MB", [isEscaped]: true }; },
    r() { return { innerHTML: E(this.file.dimensions || "PDF"), [isEscaped]: true }; },
    g() { return { innerHTML: ((this.file.tag) ? ", " + E(this.file.tag) : ""), [isEscaped]: true }; },
    '%'() { return { innerHTML: "%", [isEscaped]: true }; }
  }
};
export default FileInfo;
