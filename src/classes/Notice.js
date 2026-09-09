import { d } from "../globals/globals";
import { ready, SECOND } from "../platform/helpers";
import Icon from '../Icons/icon';

export const noticesRoot = document.createElement('div');
noticesRoot.id = 'notifications';

export default class Notice {
  constructor(type, content, timeout, onclose) {
    this.add = this.add.bind(this);
    this.close = this.close.bind(this);
    this.timeout = timeout;
    this.onclose = onclose;

    this.el = document.createElement('div');
    this.el.innerHTML = `<a href="javascript:;" class="close" title="Close">${Icon.get('xmark')}</a><div class="message"></div>`;
    this.el.style.opacity = 0;
    this.setType(type);

    this.el.firstElementChild.addEventListener('click', this.close);

    if (typeof content === 'string') {
      content = document.createTextNode(content);
    }
    this.el.lastElementChild.appendChild(content);

    ready(this.add);
  }

  setType(type) { this.el.className = `notification ${type}`; }

  add() {
    if (this.closed) return;
    if (d.hidden) {
      d.addEventListener('visibilitychange', this.add);
      return;
    }
    d.removeEventListener('visibilitychange', this.add);
    noticesRoot.appendChild(this.el);
    this.el.clientHeight; // force reflow
    this.el.style.opacity = 1;
    if (this.timeout) this.timeoutId = setTimeout(this.close, this.timeout * SECOND);
  }

  close() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.closed = true;
    d.removeEventListener('visibilitychange', this.add);
    this.el.remove();
    this.onclose?.();
  }

  resetTimer() {
    if (this.timeout) {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(this.close, this.timeout * SECOND);
    }
  }
}
