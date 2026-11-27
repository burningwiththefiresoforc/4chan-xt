import Callbacks from "../classes/Callbacks";
import Filter from "../Filtering/Filter";
import { g, Conf, E } from "../globals/globals";
import h, { isEscaped } from "../globals/jsx";
import Icon from "../Icons/icon";
import ImageCommon from "../Images/ImageCommon";
import $ from "../platform/$";
import $$ from "../platform/$$";
import FileInfoFormat from "./FileInfoFormat";

/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */

var FileInfo = {
  init() {
    if (!['index', 'thread', 'archive'].includes(g.VIEW) || !Conf['File Info Formatting']) return;

    Callbacks.Post.push({
      name: 'File Info Formatting',
      cb:   this.node
    });
  },

  node() {
    if (!this.file) return;
    if (this.isClone) {
      FileInfoFormat.bindFileButtons(this.file.text);
      return;
    }

    const oldInfo = $.el('span', {className: 'fileText-original'});
    $.prepend(this.file.link.parentNode, oldInfo);
    $.add(oldInfo, [this.file.link.previousSibling, this.file.link, this.file.link.nextSibling]);

    const info = $.el('span', {className: 'file-info'});
    FileInfoFormat.format(Conf.fileInfo, this, info);
    $.prepend(this.file.text, info);
  },
};
export default FileInfo;
