// Only one bundled icon set now — everything else is user-supplied via Conf.
import Original_unreadDead   from './Favicon/Original.unreadDead.png';
import Original_unreadDeadY  from './Favicon/Original.unreadDeadY.png';
import Original_unreadSFW    from './Favicon/Original.unreadSFW.png';
import Original_unreadSFWY   from './Favicon/Original.unreadSFWY.png';
import Original_unreadNSFW   from './Favicon/Original.unreadNSFW.png';
import Original_unreadNSFWY  from './Favicon/Original.unreadNSFWY.png';
import dead  from './Favicon/dead.gif';
import empty from './Favicon/empty.gif';
import $ from '../platform/$';
import { Conf, d } from '../globals/globals';

/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */

const FIELDS = [
  {key: 'favicon-unread-dead',   prop: 'unreadDead'},
  {key: 'favicon-unread-dead-y', prop: 'unreadDeadY'},
  {key: 'favicon-unread-sfw',    prop: 'unreadSFW'},
  {key: 'favicon-unread-sfw-y',  prop: 'unreadSFWY'},
  {key: 'favicon-unread-nsfw',   prop: 'unreadNSFW'},
  {key: 'favicon-unread-nsfw-y', prop: 'unreadNSFWY'},
];

const presets = {
  Original: {
    unreadDead:   Original_unreadDead,
    unreadDeadY:  Original_unreadDeadY,
    unreadSFW:    Original_unreadSFW,
    unreadSFWY:   Original_unreadSFWY,
    unreadNSFW:   Original_unreadNSFW,
    unreadNSFWY:  Original_unreadNSFWY,
  },
};

function resolveIconSrc(value) {
  if (!value) return null;
  if (/^(https?:)?\/\//.test(value) || /^data:/.test(value)) {
    return value;
  }
  return `data:image/png;base64,${value}`;
}

// Hosts allowed for remote icons. Edit this list as needed.
const ALLOWED_HOSTS = [
  'i.imgur.com',
  'imgur.com',
];

const URL_RE  = /^(https?:)?\/\//i;
const DATA_RE = /^data:image\/[a-z0-9.+-]+;base64,/i;
const B64_RE  = /^[A-Za-z0-9+/]+=*$/;

function checkHost(url) {
  try {
    return ALLOWED_HOSTS.includes(new URL(url, location.href).hostname);
  } catch (e) {
    return false;
  }
}

function validateIcon(value) {
  if (!value) return {src: null, error: null};

  if (URL_RE.test(value)) {
    if (!checkHost(value)) {
      let host;
      try { host = new URL(value, location.href).hostname; } catch (e) { host = value; }
      return {src: null, error: `"${host}" is not a whitelisted host.`};
    }
    return {src: value, error: null};
  }

  if (DATA_RE.test(value)) return {src: value, error: null};
  if (B64_RE.test(value))  return {src: `data:image/png;base64,${value}`, error: null};

  return {src: null, error: `Not a URL, data URI, or base64 string.`};
}

var Favicon = {
  init() {
    $.asap((() => d.head && (Favicon.el = $('link[rel="shortcut icon"]', d.head))), Favicon.initAsap);
  },

  set(status) {
    Favicon.status = status;
    if (Favicon.el) {
      Favicon.el.href = Favicon[status];
      // `favicon.href = href` doesn't work on Firefox.
      $.add(d.head, Favicon.el);
    }
  },

  initAsap() {
    Favicon.el.type = 'image/x-icon';
    const {href}          = Favicon.el;
    Favicon.isSFW   = /ws\.ico$/.test(href);
    Favicon.default = href;
    Favicon.switch();
    if (Favicon.status) Favicon.set(Favicon.status);
  },

  switch() {
    const f = Favicon;
    for (const {key, prop} of FIELDS) {
      const {src} = validateIcon(Conf[key]);
      f[prop] = src || resolveIconSrc(presets.Original[prop]);
    }

    f.update();
  },

  update() {
    if (this.isSFW) {
      this.unread  = this.unreadSFW;
      this.unreadY = this.unreadSFWY;
    } else {
      this.unread  = this.unreadNSFW;
      this.unreadY = this.unreadNSFWY;
    }
  },

  SFW:  '//s.4cdn.org/image/favicon-ws.ico',
  NSFW: '//s.4cdn.org/image/favicon.ico',
  dead: `data:image/gif;base64,${dead}`,
  logo: `data:image/png;base64,${empty}`,
};

Favicon.fields        = FIELDS;
Favicon.validateIcon  = validateIcon;
Favicon.resolveIconSrc = resolveIconSrc;
Favicon.allowedHosts  = ALLOWED_HOSTS;

export default Favicon;
