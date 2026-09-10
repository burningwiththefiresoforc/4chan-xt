import { g, Conf, E } from "../globals/globals";
import h, { isEscaped } from "../globals/jsx";
import Icon from "../Icons/icon";
import ImageCommon from "../Images/ImageCommon";
import $ from "../platform/$";
import $$ from "../platform/$$";
import { shortFilename } from "../site/shortFilename";

const FileInfoFormat = {
  formatters: {
    t() { return { innerHTML: E(this.file.url.slice(this.file.url.lastIndexOf('/') + 1)), [isEscaped]: true }; },
    T() { return <a href={this.file.url} target="_blank">{FileInfoFormat.formatters.t.call(this)}</a> },
    l() { return <a href={this.file.url} target="_blank">{FileInfoFormat.formatters.n.call(this)}</a> },
    L() { return <a href={this.file.url} target="_blank">{FileInfoFormat.formatters.N.call(this)}</a> },
    n() {
      const fullname  = this.file.name;
      const shortname = shortFilename(this.file.name, this.isReply);
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
  },

  getTokens(formatString) {
    if (FileInfoFormat._tokensKey === formatString) return FileInfoFormat._tokens;
    const tokens = [];
    const FORMAT_REGEX = /%(.)|[^%]+/g;
    formatString.replace(FORMAT_REGEX, (s, c) => {
      tokens.push($.hasOwn(FileInfoFormat.formatters, c) ? FileInfoFormat.formatters[c] : {innerHTML: E(s)});
      return '';
    });
    FileInfoFormat._tokensKey = formatString;
    FileInfoFormat._tokens = tokens;
    return tokens;
  },

  // onQuickFilterMD5 is injected so this module never needs to import Filter.
  bindFileButtons(container, onQuickFilterMD5) {
    for (const a of $$('.download-button, .quick-filter-md5', container)) {
      if (a.classList.contains('download-button')) {
        $.on(a, 'click', ImageCommon.download);
      } else if (onQuickFilterMD5) {
        $.on(a, 'click', onQuickFilterMD5);
      }
    }
  },

  format(formatString, post, outputNode, onQuickFilterMD5) {
    const tokens = FileInfoFormat.getTokens(formatString);
    const output = tokens.map(t => typeof t === 'function' ? t.call(post) : t);
    $.extend(outputNode, {innerHTML: E.cat(output)});
    FileInfoFormat.bindFileButtons(outputNode, onQuickFilterMD5);
  },
};

export default FileInfoFormat;
