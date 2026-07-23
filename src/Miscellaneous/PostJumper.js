import Callbacks from "../classes/Callbacks";
import { Conf, g, E } from "../globals/globals";
import $ from "../platform/$";
import $$ from "../platform/$$";
import Icon from "../Icons/icon";

/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
const PostJumper = {
  init() {
    if (!Conf['Unique ID and Capcode Navigation'] || !['index', 'thread'].includes(g.VIEW)) { return; }

    this.buttons = this.makeButtons();
    Icon.set(this.buttons.firstChild, 'arrowUpLong');
    Icon.set(this.buttons.lastChild, 'arrowDownLong');

    Callbacks.Post.push({
      name: 'Post Jumper',
      cb:   this.node
    });
  },

  node() {
    if (this.isClone) {
      for (const buttons of $$('.postJumper', this.nodes.info)) {
        PostJumper.addListeners(buttons);
      }
      return;
    }

    if (this.nodes.uniqueIDRoot) {
      PostJumper.addButtons(this,'uniqueID');
    }

    if (this.nodes.capcode) {
      PostJumper.addButtons(this,'capcode');
    }
  },

  addButtons(post,type) {
    const value = post.info[type];
    const buttons = PostJumper.buttons.cloneNode(true);
    $.extend(buttons.dataset, {type, value});
    $.after(post.nodes[type+(type === 'capcode' ? '' : 'Root')], buttons);
    PostJumper.addListeners(buttons);
  },

  addListeners(buttons) {
    $.on(buttons.firstChild, 'click', PostJumper.buttonClick);
    $.on(buttons.lastChild, 'click', PostJumper.buttonClick);
  },

  buttonClick() {
    const dir = $.hasClass(this, 'prev') ? -1 : 1;
    const toJumper = PostJumper.find(this.parentNode, dir);
    if (toJumper) {
      PostJumper.scroll(this.parentNode, toJumper);
    }
  },

  find(jumper, dir) {
    const {type, value} = jumper.dataset;
    const xpath = `span[contains(@class,"postJumper") and @data-value="${value}" and @data-type="${type}"]`;
    const axis = dir < 0 ? 'preceding' : 'following';
    let node = jumper;
    let wrapped = false;
    while (true) {
      node = $.x(`${axis}::${xpath}`, node);
      if (!node) {
        if (wrapped) { return null; } // full circle
        node = $.x(`(//${xpath})[${dir < 0 ? 'last()' : '1'}]`);
        wrapped = true;
        if (!node) { return null; }
      }
      if (node === jumper) { return null; } // full circle
      if (node.getBoundingClientRect().height) { return node; }
    }
  },

  makeButtons() {
    const charPrev = '\u23EB';
    const charNext = '\u23EC';
    const classPrev = 'prev';
    const classNext = 'next';
    const span = $.el('span', {className: 'postJumper'});
    $.extend(span, {innerHTML: "<a href=\"javascript:;\" class=\""
      + E(classPrev) + "\">" + E(charPrev) + "</a><a href=\"javascript:;\" class=\""
      + E(classNext) + "\">" + E(charNext) + "</a>"});
    return span;
  },

  scroll(fromJumper, toJumper) {
    const prevPos = fromJumper.getBoundingClientRect().top;
    const destPos = toJumper.getBoundingClientRect().top;
    window.scrollBy(0, destPos-prevPos);
  }
};
export default PostJumper;
