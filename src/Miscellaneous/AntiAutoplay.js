import Callbacks from "../classes/Callbacks";
import { Conf, d, doc } from "../globals/globals";
import $ from "../platform/$";
import $$ from "../platform/$$";

/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
var AntiAutoplay = {
  init() {
    if (!Conf['Disable Autoplaying Sounds']) return;
    $.addClass(doc, 'anti-autoplay');
    for (var audio of $$('audio[autoplay]', doc)) { this.stop(audio); }
    window.addEventListener('loadstart', (e => this.stop(e.target)), true);
    Callbacks.Post.push({
      name: 'Disable Autoplaying Sounds',
      cb:   this.node
    });
    $.ready(() => this.process(d.body));
  },

  stop(audio) {
    if (!audio.autoplay) return;
    audio.pause();
    audio.autoplay = false;
    if (audio.controls) return;
    audio.controls = true;
    $.addClass(audio, 'controls-added');
  },

  node() {
    AntiAutoplay.process(this.nodes.comment);
  },

  process(root) {
    const elements = $$('iframe[src*="youtube"][src*="autoplay=1"], object[data*="youtube"][data*="autoplay=1"]', root);
    for (const el of elements) {
      const attr = el.tagName === 'IFRAME' ? 'src' : 'data';
      this.processVideo(el, attr);
    }
  },

  processVideo(el, attr) {
    el[attr] = el[attr].replace(/\?autoplay=1&?/, '?').replace('&autoplay=1', '');
    if (window.getComputedStyle(el).display === 'none') el.style.display = 'block';
    $.addClass(el, 'autoplay-removed');
  }
};
export default AntiAutoplay;
