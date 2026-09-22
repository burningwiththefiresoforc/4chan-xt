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

const KEY_MAP = {
  'unread-dead':    'unreadDead',
  'unread-dead-y':  'unreadDeadY',
  'unread-sfw':     'unreadSFW',
  'unread-sfw-y':   'unreadSFWY',
  'unread-nsfw':    'unreadNSFW',
  'unread-nsfw-y':  'unreadNSFWY',
};

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

function parseSettings(raw) {
  const icons  = {};
  const errors = [];

  (raw || '').split('\n').forEach((line, i) => {
    const lineNum = i + 1;
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;

    const sep = trimmed.indexOf(':');
    if (sep === -1) {
      errors.push(`Line ${lineNum}: expected "key: value".`);
      return;
    }

    const key   = trimmed.slice(0, sep).trim().toLowerCase();
    const value = trimmed.slice(sep + 1).trim();

    if (!(key in KEY_MAP)) {
      errors.push(`Line ${lineNum}: unknown option "${key}".`);
      return;
    }
    if (!value) {
      errors.push(`Line ${lineNum}: "${key}" has no value.`);
      return;
    }

    if (URL_RE.test(value)) {
      if (!checkHost(value)) {
        let host;
        try { host = new URL(value, location.href).hostname; } catch (e) { host = value; }
        errors.push(`Line ${lineNum}: "${host}" is not a whitelisted host.`);
        return;
      }
    } else if (!DATA_RE.test(value) && !B64_RE.test(value)) {
      errors.push(`Line ${lineNum}: "${key}" isn't a URL, data URI, or base64 string.`);
      return;
    }

    icons[key] = value;
  });

  return {icons, errors};
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
    const {icons: overrides} = parseSettings(Conf.favicon);

    const f = Favicon;
    for (const settingKey in KEY_MAP) {
      const prop = KEY_MAP[settingKey];
      const custom = overrides[settingKey];
      f[prop] = custom
        ? resolveIconSrc(custom)
        : (presets.Original[prop] ? resolveIconSrc(presets.Original[prop]) : null);
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

// Exposed for the settings menu (see Settings.favicon).
Favicon.keys           = Object.keys(KEY_MAP);
Favicon.parseSettings  = parseSettings;
Favicon.resolveIconSrc = resolveIconSrc;
Favicon.allowedHosts   = ALLOWED_HOSTS;

export default Favicon;
