import $ from "../platform/$";
import Callbacks from "../classes/Callbacks";
import { g } from "../globals/globals";

/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
const ModContact = {
  init() {
    if ((g.SITE.software !== 'yotsuba') || !['index', 'thread'].includes(g.VIEW)) return;
    Callbacks.Post.push({
      name: 'Mod Contact Links',
      cb:   this.node
    });
  },

  node() {
    if (this.isClone || !$.hasOwn(ModContact.specific, this.info.capcode)) return;
    const links = $.el('span', {className: 'contact-links brackets-wrap'});
    $.extend(links, ModContact.template(this.info.capcode));
    $.after(this.nodes.capcode, links);
    let moved = this.info.comment.match(/This thread was moved to >>>\/(\w+)\//);
    if (moved && $.hasOwn(ModContact.moveNote, moved[1])) {
      const moveNote = $.el('div', {className: 'move-note'});
      $.extend(moveNote, ModContact.moveNote[moved[1]]);
      $.add(this.nodes.post, moveNote);
    }
  },

  template: (capcode) => {innerHTML: "<a href=\"https://www.4chan.org/feedback\" target=\"_blank\">feedback</a>" + (ModContact.specific[capcode]()).innerHTML},

  specific: {
    Mod: () => ({innerHTML: " <a href=\"https://www.4chan-x.net/4chan-irc.html\" target=\"_blank\">IRC</a>"}),
    Manager: () => ModContact.specific.Mod(),
    Developer: () => ({innerHTML: " <a href=\"https://github.com/4chan\" target=\"_blank\">github</a>"}),
    Admin: () => ({innerHTML: " <a href=\"https://x.com/hiroyuki_ni\" target=\"_blank\">twitter</a>"}),
  },

  moveNote: {}
};
export default ModContact;
