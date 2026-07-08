// ==UserScript==
// @name         4chan XT
// @version      2.29.0
// @minGMVer     4.00
// @minFFVer     115
// @namespace    4chan-XT
// @description  4chan XT is a script that adds various features to anonymous imageboards.
// @license      MIT; https://github.com/burningwiththefiresoforc/4chan-xt/blob/project-XT/LICENSE
// @include      https://boards.4chan.org/*
// @include      https://sys.4chan.org/*
// @include      https://www.4chan.org/*
// @include      https://i.4cdn.org/*
// @include      https://is.4chan.org/*
// @include      https://is2.4chan.org/*
// @include      https://erischan.org/*
// @include      https://www.erischan.org/*
// @include      https://kakashinenpo.com/*
// @include      https://www.kakashinenpo.com/*
// @include      https://kissu.moe/*
// @include      https://www.kissu.moe/*
// @include      https://original.kissu.moe/*
// @include      https://lainchan.org/*
// @include      https://www.lainchan.org/*
// @include      https://merorin.com/*
// @include      https://ota-ch.com/*
// @include      https://www.ota-ch.com/*
// @include      https://sportschan.org/*
// @include      https://www.sportschan.org/*
// @include      https://sushigirl.cafe/*
// @include      https://www.sushigirl.cafe/*
// @exclude      https://www.4chan.org/advertise
// @exclude      https://www.4chan.org/advertise?*
// @exclude      https://www.4chan.org/donate
// @exclude      https://www.4chan.org/donate?*
// @exclude      https://www.4chan.org/
// @connect      4chan.org
// @connect      4cdn.org
// @connect      4chenz.github.io
// @connect      archive.4plebs.org
// @connect      warosu.org
// @connect      desuarchive.org
// @connect      boards.fireden.net
// @connect      arch.b4k.dev
// @connect      archived.moe
// @connect      archive.palanq.win
// @connect      api.clyp.it
// @connect      api.dailymotion.com
// @connect      api.github.com
// @connect      soundcloud.com
// @connect      api.streamable.com
// @connect      vimeo.com
// @connect      www.youtube.com
// @connect      *
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_addValueChangeListener
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.openInTab
// @grant        GM.xmlHttpRequest
// @run-at       document-start
// @updateURL    https://github.com/burningwiththefiresoforc/4chan-xt/raw/refs/heads/project-XT/builds/4chan-XT.meta.js
// @downloadURL  https://github.com/burningwiththefiresoforc/4chan-xt/raw/refs/heads/project-XT/builds/4chan-XT.user.js
// @homepageURL  https://github.com/burningwiththefiresoforc/4chan-xt/
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAACVBMVEUAAGcAAABmzDNZt9VtAAAAAXRSTlMAQObYZgAAAF1JREFUeNrtkYEGwDAUxLb9/0cPNJB6BqLYobhc4PX6nj/3yoAagepZAWxRIMzAZSEIgLdlIBAv7DMOBLJ1mPaCHda9cOyV5p/uBV/TTS+YuewFXpexAOYdykA4Ly/hJQbBjgt3/wAAAABJRU5ErkJggg==
// @license      MIT
// ==/UserScript==
/*
* 4chan XT
*
* Licensed under the MIT license.
* https://github.com/TuxedoTako/4chan-xt/blob/project-XT/LICENSE
*
* 4chan X Copyright © 2009-2023 ccd0
* https://github.com/ccd0/4chan-x
* Appchan X Copyright © 2013-2016 Zixaphir <zixaphirmoxphar@gmail.com>
* http://zixaphir.github.io/appchan-x/ 
* 4chan x Copyright © 2009-2011 James Campos <james.r.campos@gmail.com>
* https://github.com/aeosynth/4chan-x
* 4chan x Copyright © 2012-2014 Nicolas Stepien <stepien.nicolas@gmail.com>
* https://4chan-x.just-believe.in/
* 4chan x Copyright © 2013-2014 Jordan Bates <saudrapsmann@gmail.com>
* http://seaweedchan.github.io/4chan-x/
* 4chan x Copyright © 2012-2013 ihavenoface
* http://ihavenoface.github.io/4chan-x/
* 4chan SS Copyright © 2011-2013 Ahodesuka
* https://github.com/ahodesuka/4chan-Style-Script/ 
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*
* Contributors:
* aeosynth
* mayhemydg
* noface
* !K.WeEabo0o
* blaise
* that4chanwolf
* desuwa
* seaweed
* e000
* ahodesuka
* Shou
* ferongr
* xat
* Ongpot
* thisisanon
* Anonymous
* Seiba
* herpaderpderp
* WakiMiko
* btmcsweeney
* AppleBloom
* detharonil
* TuxedoTako
*
* All the people who've taken the time to write bug reports.
*
* Thank you.
*/

/*
* Contains data from external sources:
*
* src/Monitoring/ThreadUpdater/beep.wav from http://freesound.org/people/pierrecartoons1979/sounds/90112/
*   cc-by-nc-3.0
*
* Font Awesome (https://fontawesome.com)
*   license: CC BY 4.0 (https://fontawesome.com/license/free#icons)
*
* Icons used to identify various websites are property of the respective websites.
*/

(function () {
  'use strict';

  var version = {
    "version": "2.29.0",
    "date": "2026-07-08T09:09:09Z"
  }
  ;

  var meta = {
   "name": "4chan XT",
   "path": "4chan-XT",
   "fork": "burningwiththefiresoforc",
   "page": "https://github.com/burningwiththefiresoforc/4chan-xt",
   "downloads": "https://github.com/burningwiththefiresoforc/4chan-xt",
   "oldVersions": "https://raw.githubusercontent.com/ccd0/4chan-x/",
   "faq": "https://github.com/TuxedoTako/4chan-xt/wiki/Frequently-Asked-Questions",
   "upstreamFaq": "https://github.com/ccd0/4chan-x/wiki/Frequently-Asked-Questions",
   "captchaFAQ": "https://github.com/ccd0/4chan-x/wiki/Captcha-FAQ",
   "cssGuide": "https://github.com/ccd0/4chan-x/wiki/Styling-Guide",
   "license": "https://github.com/burningwiththefiresoforc/4chan-xt/blob/project-XT/LICENSE",
   "changelog": "https://github.com/burningwiththefiresoforc/4chan-xt/blob/project-XT/CHANGELOG.md",
   "issues": "https://github.com/burningwiththefiresoforc/4chan-xt/issues",
   "newIssue": "https://github.com/burningwiththefiresoforc/4chan-xt/issues",
   "newIssueMaxLength": 8181,
   "alternatives": "https://www.4chan-x.net/4chan_alternatives.html",
   "appid": "lacclbnghgdicfifcamcmcnilckjamag",
   "appidGecko": "4chan-x@4chan-x.net",
   "recaptchaKey": "6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc",
   "min": {
    "chrome": "90",
    "firefox": "115",
    "greasemonkey": "4.00"
   }
  };

  const Conf = Object.create(null);
  const g = {
    VERSION: version.version,
    VERSION_DATE: new Date(version.date),
    NAMESPACE: meta.name,
    sites: Object.create(null),
    boards: Object.create(null)
  };
  const E = (function () {
    const str = {
      '&': '&amp;',
      "'": '&#039;',
      '"': '&quot;',
      '<': '&lt;',
      '>': '&gt;'
    };
    const regex = /[&"'<>]/g;
    const fn = function (x) {
      return str[x];
    };
    const output = function (text) {
      return text.toString().replace(regex, fn);
    };
    output.cat = function (templates) {
      let html = '';
      for (let i = 0; i < templates.length; i++) {
        html += templates[i].innerHTML;
      }
      return html;
    };
    return output;
  })();
  const d = document;
  const doc = d.documentElement;
  const c = console;
  const docSet = function () {
    // return (doc = d.documentElement);
    return doc;
  };

  // This file was created because these functions on $ were sometimes not initialized yet because of circular
  // dependencies, so try to keep this file without dependencies, so these functions don't have to wait for something else
  /**
   * @param wait Time to wait in milliseconds.
   * @param fn The function to execute
   * @param leading Wether to run immediately, otherwise it waits for timeout even if there is no older call.
   */
  const debounce = (wait, fn, leading = true) => {
    let lastCall = 0;
    let timeout = null;
    let that = null;
    let args = null;
    const exec = function () {
      lastCall = Date.now();
      return fn.apply(that, args);
    };
    return function () {
      args = arguments;
      that = this;
      if (leading && lastCall < (Date.now() - wait)) {
        exec();
        return;
      }
      // stop current reset
      if (timeout !== null)
        clearTimeout(timeout);
      // after wait, let next invocation execute immediately
      timeout = setTimeout(exec, wait);
    };
  };
  const dict = () => Object.create(null);
  dict.clone = function (obj) {
    if ((typeof obj !== 'object') || (obj === null)) {
      return obj;
    } else if (obj instanceof Array) {
      const arr = [];
      for (let i = 0, end = obj.length; i < end; i++) {
        arr.push(dict.clone(obj[i]));
      }
      return arr;
    } else {
      const map = Object.create(null);
      for (var key in obj) {
        var val = obj[key];
        map[key] = dict.clone(val);
      }
      return map;
    }
  };
  dict.json = (str) => dict.clone(JSON.parse(str));
  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const platform = window.GM_xmlhttpRequest ? 'userscript' : 'crx';

  /**
   * Because of increased security in manifest v3, scripts can no longer just inject a script tag into the main page.
   * Functions to be called in the main context must be predefined. Those functions should be in this file, and they will
   * be loaded in the worker context in the extension version.
   *
   * These are the functions for `$.global`. They will be called by name.
   *
   * They are stringified, so don't use the short `fnName() {` notation.
   */
  const PageContextFunctions = {
    stubCloneTopNav: () => { window.cloneTopNav = function () { }; },
    disableNativeExtension: () => {
      try {
        const settings = JSON.parse(localStorage.getItem('4chan-settings')) || {};
        if (settings.disableAll)
          return;
        settings.disableAll = true;
        localStorage.setItem('4chan-settings', JSON.stringify(settings));
      } catch (error) {
        Object.defineProperty(window, 'Config', { value: { disableAll: true } });
      }
    },
    disableNativeExtensionNoStorage: () => { Object.defineProperty(window, 'Config', { value: { disableAll: true } }); },
    prettyPrint: ({ id }) => {
      // @ts-ignore
      window.prettyPrint?.((function () { }), document.getElementById(id).parentNode);
    },
    exposeVersion: ({ buildDate, version }) => {
      const date = +buildDate;
      Object.defineProperty(window, 'fourchanXT', {
        value: Object.freeze({
          version,
          // Getter to prevent mutations.
          get buildDate() { return new Date(date); },
        }),
        writable: false,
      });
    },
    initMain: () => {
      document.documentElement.classList.add('js-enabled');
      window.FCX = {};
    },
    initFlash: () => {
      if (JSON.parse(localStorage['4chan-settings'] || '{}').disableAll)
        window.SWFEmbed.init();
    },
    initFlashNoStorage: () => { window.SWFEmbed.init(); },
    setThreadId: () => { window.Main.tid = location.pathname.split(/\/+/)[3]; },
    fourChanPrettyPrintListener: () => {
      window.addEventListener('prettyprint', (e) => window.dispatchEvent(new CustomEvent('prettyprint:cb', {
        detail: { ID: e.detail.ID, i: e.detail.i, html: window.prettyPrintOne(e.detail.html) }
      })), false);
    },
    fourChanMathjaxListener: () => {
      window.addEventListener('mathjax', function (e) {
        if (window.MathJax) {
          window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, e.target]);
        } else {
          if (!document.querySelector('script[src^="//cdn.mathjax.org/"]')) { // don't load MathJax if already loading
            window.loadMathJax();
            window.loadMathJax = function () { };
          }
          // 4chan only handles post comments on MathJax load; anything else (e.g. the QR preview) must be queued explicitly.
          if (!e.target.classList.contains('postMessage')) {
            document.querySelector('script[src^="//cdn.mathjax.org/"]').addEventListener('load', () => window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, e.target]), false);
          }
        }
      }, false);
    },
    disable4chanIdHl: () => {
      window.clickable_ids = false;
      for (var node of document.querySelectorAll('.posteruid, .capcode')) {
        node.removeEventListener('click', window.idClick, false);
      }
    },
    initTinyBoard: ({ boardID, threadID }) => {
      threadID = +threadID;
      const form = document.querySelector('form[name="post"]');
      window.$(document).ajaxComplete(function (event, request, settings) {
        let postID;
        if (settings.url !== form.action)
          return;
        if (!(postID = +request.responseJSON?.id))
          return;
        const detail = { boardID, threadID, postID };
        try {
          const { redirect, noko } = request.responseJSON;
          if (redirect && (originalNoko != null) && !originalNoko && !noko) {
            detail.redirect = redirect;
          }
        } catch (error) { }
        event = new CustomEvent('QRPostSuccessful', { bubbles: true, detail });
        document.dispatchEvent(event);
      });
      var originalNoko = window.tb_settings?.ajax?.always_noko_replies;
      let base;
      (((base = window.tb_settings || (window.tb_settings = {}))).ajax || (base.ajax = {})).always_noko_replies = true;
    },
    setupCaptcha: ({ recaptchaKey }) => {
      const render = function () {
        const { classList } = document.documentElement;
        const container = document.querySelector('#qr .captcha-container');
        container.dataset.widgetID = window.grecaptcha.render(container, {
          sitekey: recaptchaKey,
          theme: classList.contains('tomorrow') || classList.contains('spooky') || classList.contains('dark-captcha') ? 'dark' : 'light',
          callback(response) {
            window.dispatchEvent(new CustomEvent('captcha:success', { detail: response }));
          }
        });
      };
      if (window.grecaptcha) {
        render();
      } else {
        const cbNative = window.onRecaptchaLoaded;
        window.onRecaptchaLoaded = function () {
          render();
          cbNative();
        };
        if (!document.head.querySelector('script[src^="https://www.google.com/recaptcha/api.js"]')) {
          const script = document.createElement('script');
          script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoaded&render=explicit';
          document.head.appendChild(script);
        }
      }
    },
    resetCaptcha: () => {
      window.grecaptcha.reset(document.querySelector('#qr .captcha-container').dataset.widgetID);
    },
    setupTCaptcha: ({ boardID, threadID, autoLoad }) => {
      const { TCaptcha } = window;
      TCaptcha.init(document.querySelector('#qr .captcha-container'), boardID, +threadID);
      TCaptcha.setErrorCb(err => window.dispatchEvent(new CustomEvent('CreateNotification', {
        detail: { type: 'warning', content: '' + err }
      })));
      if (autoLoad === '1')
        TCaptcha.load(boardID, threadID);
    },
    destroyTCaptcha: () => { window.TCaptcha.destroy(); },
    TCaptchaClearChallenge: () => { window.TCaptcha.clearChallenge(); },
    setupQR: () => {
      window.FCX.oekakiCB = () => window.Tegaki.flatten().toBlob(function (file) {
        const source = `oekaki-${Date.now()}`;
        window.FCX.oekakiLatest = source;
        document.dispatchEvent(new CustomEvent('QRSetFile', {
          bubbles: true,
          detail: { file, name: window.FCX.oekakiName, source }
        }));
      });
      if (window.Tegaki) {
        document.querySelector('#qr .oekaki').hidden = false;
      }
    },
    qrTegakiDraw: () => {
      const { Tegaki, FCX } = window;
      if (Tegaki.bg) {
        Tegaki.destroy();
      }
      FCX.oekakiName = 'tegaki.png';
      Tegaki.open({
        onDone: FCX.oekakiCB,
        onCancel() { Tegaki.bgColor = '#ffffff'; },
        width: +document.querySelector('#qr [name=oekaki-width]').value,
        height: +document.querySelector('#qr [name=oekaki-height]').value,
        bgColor: document.querySelector('#qr [name=oekaki-bg]').checked ?
          document.querySelector('#qr [name=oekaki-bgcolor]').value :
          'transparent'
      });
    },
    qrTegakiLoad: () => {
      const { Tegaki, FCX } = window;
      const name = document.getElementById('qr-filename').value.replace(/\.\w+$/, '') + '.png';
      const { source } = document.getElementById('file-n-submit').dataset;
      const error = content => document.dispatchEvent(new CustomEvent('CreateNotification', {
        bubbles: true,
        detail: { type: 'warning', content, lifetime: 20 }
      }));
      var cb = function (e) {
        if (e) {
          this.removeEventListener('QRMetadata', cb, false);
        }
        const selected = document.getElementById('selected');
        if (!selected?.dataset.type)
          return error('No file to edit.');
        if (!/^(image|video)\//.test(selected.dataset.type)) {
          return error('Not an image.');
        }
        if (!selected.dataset.height)
          return error('Metadata not available.');
        if (selected.dataset.height === 'loading') {
          selected.addEventListener('QRMetadata', cb, false);
          return;
        }
        if (Tegaki.bg) {
          Tegaki.destroy();
        }
        FCX.oekakiName = name;
        Tegaki.open({
          onDone: FCX.oekakiCB,
          onCancel() { Tegaki.bgColor = '#ffffff'; },
          width: +selected.dataset.width,
          height: +selected.dataset.height,
          bgColor: 'transparent'
        });
        const canvas = document.createElement('canvas');
        canvas.width = (canvas.naturalWidth = +selected.dataset.width);
        canvas.height = (canvas.naturalHeight = +selected.dataset.height);
        canvas.hidden = true;
        document.body.appendChild(canvas);
        canvas.addEventListener('QRImageDrawn', function () {
          this.remove();
          Tegaki.onOpenImageLoaded.call(this);
        }, false);
        canvas.dispatchEvent(new CustomEvent('QRDrawFile', { bubbles: true }));
      };
      if (Tegaki.bg && (Tegaki.onDoneCb === FCX.oekakiCB) && (source === FCX.oekakiLatest)) {
        FCX.oekakiName = name;
        Tegaki.resume();
      } else {
        cb();
      }
    },
    testNativeExtension: (output = {}) => {
      if (window.Parser?.postMenuIcon)
        output.enabled = 'true';
      return output;
    },
  };

  // loosely follows the jquery api:
  // http://api.jquery.com/
  // not chainable
  const $ = (selector, root = document.body) => root.querySelector(selector);
  $.id = id => d.getElementById(id);
  $.ready = function (fc) {
    if (d.readyState !== 'loading') {
      $.queueTask(fc);
      return;
    }
    var cb = function () {
      $.off(d, 'DOMContentLoaded', cb);
      fc();
    };
    $.on(d, 'DOMContentLoaded', cb);
  };
  $.formData = function (form) {
    if (form instanceof HTMLFormElement) {
      return new FormData(form);
    }
    const fd = new FormData();
    for (var key in form) {
      var val = form[key];
      if (val) {
        if ((typeof val === 'object') && 'newName' in val) {
          fd.append(key, val, val.newName);
        } else {
          fd.append(key, val);
        }
      }
    }
    return fd;
  };
  $.extend = function (object, properties) {
    for (var key in properties) {
      var val = properties[key];
      object[key] = val;
    }
  };
  $.hasOwn = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
  $.getOwn = function (obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return obj[key];
    } else {
      return undefined;
    }
  };
  $.ajax = (function () {
    let pageXHR = XMLHttpRequest;
    if (window.wrappedJSObject && !XMLHttpRequest.wrappedJSObject) {
      try {
        pageXHR = XPCNativeWrapper(window.wrappedJSObject.XMLHttpRequest);
      } catch (e) { }
    }
    return function (url, options = {}) {
      if (options.responseType == null) {
        options.responseType = 'json';
      }
      if (!options.type) {
        options.type = (options.form && 'post') || 'get';
      }
      // XXX https://forums.lanik.us/viewtopic.php?f=64&t=24173&p=78310
      // url = url.replace(/^((?:https?:)?\/\/(?:\w+\.)?(?:4chan(?:nel)?|4cdn)\.org)\/adv\//, '$1//adv/');
      url = url.replace(/^((?:https?:)?\/\/(?:\w+\.)?(?:4chan|4cdn)\.org)\/adv\//, '$1//adv/');
      const { onloadend, timeout, responseType, withCredentials, type, onprogress, form, headers } = options;
      const r = new pageXHR();
      try {
        r.open(type, url, true);
        const object = headers || {};
        for (var key in object) {
          var value = object[key];
          r.setRequestHeader(key, value);
        }
        $.extend(r, { onloadend, timeout, responseType, withCredentials });
        $.extend(r.upload, { onprogress });
        // connection error or content blocker
        $.on(r, 'error', function () { if (!r.status) {
          c.warn(`${meta.name} failed to load: ${url}`);
        } });
        r.send(form);
      } catch (err) {
        // XXX Some content blockers in Firefox (e.g. Adblock Plus and NoScript) throw an exception instead of simulating a connection error.
        if (err.result !== 0x805e0006) {
          throw err;
        }
        r.onloadend = onloadend;
        $.queueTask($.event, 'error', null, r);
        $.queueTask($.event, 'loadend', null, r);
      }
      return r;
    };
  })();
  // Status Code 304: Not modified
  // With the `If-Modified-Since` header we only receive the HTTP headers and no body for 304 responses.
  // This saves a lot of bandwidth and CPU time for both the users and the servers.
  $.lastModified = dict();
  $.whenModified = function (url, bucket, cb, options = {}) {
    let t;
    const { timeout, ajax } = options;
    const headers = dict();
    if ((t = $.lastModified[bucket]?.[url]) != null) {
      headers['If-Modified-Since'] = t;
    }
    const r = (ajax || $.ajax)(url, {
      onloadend() {
        ($.lastModified[bucket] || ($.lastModified[bucket] = dict()))[url] = this.getResponseHeader('Last-Modified');
        return cb.call(this);
      },
      timeout,
      headers
    });
    return r;
  };
  (function () {
    const reqs = dict();
    $.cache = function (url, cb, options = {}) {
      let req;
      const { ajax } = options;
      if (req = reqs[url]) {
        if (req.callbacks) {
          req.callbacks.push(cb);
        } else {
          $.queueTask(() => cb.call(req, { isCached: true }));
        }
        return req;
      }
      const onloadend = function () {
        if (!this.status) {
          delete reqs[url];
        }
        for (cb of this.callbacks) {
          (cb => $.queueTask(() => cb.call(this, { isCached: false })))(cb);
        }
        return delete this.callbacks;
      };
      req = (ajax || $.ajax)(url, { onloadend });
      req.callbacks = [cb];
      return reqs[url] = req;
    };
    return $.cleanCache = function (testf) {
      for (var url in reqs) {
        if (testf(url)) {
          delete reqs[url];
        }
      }
    };
  })();
  $.cb = {
    checked() {
      if ($.hasOwn(Conf, this.name)) {
        $.set(this.name, this.checked);
        return Conf[this.name] = this.checked;
      }
    },
    value() {
      if ($.hasOwn(Conf, this.name)) {
        $.set(this.name, this.value.trim());
        return Conf[this.name] = this.value;
      }
    }
  };
  $.asap = function (test, cb) {
    if (test()) {
      return cb();
    } else {
      return setTimeout($.asap, 25, test, cb);
    }
  };
  $.onExists = function (root, selector, cb) {
    let el;
    if (el = $(selector, root)) {
      cb(el);
      return;
    }
    var observer = new MutationObserver(function () {
      if (el = $(selector, root)) {
        observer.disconnect();
        cb(el);
      }
    });
    observer.observe(root, { childList: true, subtree: true });
  };
  $.addStyle = function (css, id, test = 'head') {
    const style = $.el('style', { textContent: css });
    if (id != null) {
      style.id = id;
    }
    $.onExists(doc, test, () => $.add(d.head, style));
    return style;
  };
  $.addCSP = function (policy) {
    const meta = $.el('meta', {
      httpEquiv: 'Content-Security-Policy',
      content: policy
    });
    if (d.head) {
      $.add(d.head, meta);
      return $.rm(meta);
    } else {
      const head = $.add((doc || d), $.el('head'));
      $.add(head, meta);
      return $.rm(head);
    }
  };
  $.x = function (path, root) {
    if (!root) {
      root = d.body;
    }
    // XPathResult.ANY_UNORDERED_NODE_TYPE === 8
    return d.evaluate(path, root, null, 8, null).singleNodeValue;
  };
  $.X = function (path, root) {
    if (!root) {
      root = d.body;
    }
    // XPathResult.ORDERED_NODE_SNAPSHOT_TYPE === 7
    return d.evaluate(path, root, null, 7, null);
  };
  $.addClass = function (el, ...classNames) {
    el.classList.add(...classNames);
  };
  $.rmClass = function (el, ...classNames) {
    el.classList.remove(...classNames);
  };
  $.toggleClass = (el, className) => el.classList.toggle(className);
  $.hasClass = (el, className) => el.classList.contains(className);
  $.rm = el => el?.remove();
  $.rmAll = root => root.textContent = null;
  $.tn = s => d.createTextNode(s);
  $.frag = () => d.createDocumentFragment();
  $.nodes = function (nodes) {
    if (!(nodes instanceof Array)) {
      return nodes;
    }
    const frag = $.frag();
    for (var node of nodes) {
      frag.appendChild(node);
    }
    return frag;
  };
  $.add = (parent, el) => parent.appendChild($.nodes(el));
  $.prepend = (parent, el) => parent.insertBefore($.nodes(el), parent.firstChild);
  $.after = (root, el) => root.parentNode.insertBefore($.nodes(el), root.nextSibling);
  $.before = (root, el) => root.parentNode.insertBefore($.nodes(el), root);
  $.replace = (root, el) => root.parentNode.replaceChild($.nodes(el), root);
  $.el = function (tag, properties, properties2) {
    const el = d.createElement(tag);
    if (properties)
      $.extend(el, properties);
    if (properties2)
      $.extend(el, properties2);
    return el;
  };
  $.on = function (el, events, handler) {
    for (var event of events.split(' ')) {
      el.addEventListener(event, handler, false);
    }
  };
  $.off = function (el, events, handler) {
    for (var event of events.split(' ')) {
      el.removeEventListener(event, handler, false);
    }
  };
  $.one = function (el, events, handler) {
    var cb = function (e) {
      $.off(el, events, cb);
      return handler.call(this, e);
    };
    $.on(el, events, cb);
  };
  $.event = function (event, detail, root = d) {
    if (!globalThis.chrome?.extension) {
      if ((detail != null) && (typeof cloneInto === 'function')) {
        detail = cloneInto(detail, d.defaultView);
      }
    }
    root.dispatchEvent(new CustomEvent(event, { bubbles: true, cancelable: true, detail }));
  };
  //
  //   // XXX Make $.event work in Pale Moon with GM 3.x (no cloneInto function).
  //   (function() {
  //     if (!/PaleMoon\//.test(navigator.userAgent) || (+GM_info?.version?.split('.')[0] < 2) || (typeof cloneInto !== 'undefined')) { return; }
  //
  //     try {
  //       return new CustomEvent('x', {detail: {}});
  //     } catch (err) {
  //       const unsafeConstructors = {
  //         Object: unsafeWindow.Object,
  //         Array:  unsafeWindow.Array
  //       };
  //       var clone = function(obj) {
  //         let constructor;
  //         if ((obj != null) && (typeof obj === 'object') && (constructor = unsafeConstructors[obj.constructor.name])) {
  //           const obj2 = new constructor();
  //           for (var key in obj) { var val = obj[key]; obj2[key] = clone(val); }
  //           return obj2;
  //         } else {
  //           return obj;
  //         }
  //       };
  //       return $.event = (event, detail, root=d) => root.dispatchEvent(new CustomEvent(event, {bubbles: true, cancelable: true, detail: clone(detail)}));
  //     }
  //   })();
  //
  $.modifiedClick = e => e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || (e.button !== 0);
  if (!globalThis.chrome?.extension) {
    $.open =
      (GM?.openInTab != null) ?
        GM.openInTab
        : (typeof GM_openInTab !== 'undefined' && GM_openInTab !== null) ?
          GM_openInTab
          :
            url => window.open(url, '_blank');
  } else {
    $.open =
      url => window.open(url, '_blank');
  }
  $.debounce = function (wait, fn) {
    let lastCall = 0;
    let timeout = null;
    let that = null;
    let args = null;
    const exec = function () {
      lastCall = Date.now();
      return fn.apply(that, args);
    };
    return function () {
      args = arguments;
      that = this;
      if (lastCall < (Date.now() - wait)) {
        return exec();
      }
      // stop current reset
      clearTimeout(timeout);
      // after wait, let next invocation execute immediately
      return timeout = setTimeout(exec, wait);
    };
  };
  $.queueTask = (function () {
    const taskQueue = [];
    const execTask = function () {
      const [func, ...args] = taskQueue.shift();
      func(...args);
    };
    return function () {
      taskQueue.push(arguments);
      // setTimeout is throttled in background tabs on firefox
      Promise.resolve().then(execTask);
    };
  })();

  /**
   * Runs a function on the page instead of the user script or extension context.
   * @param fn The name of the function in pageContext.ts. It must be defined there to run in a manifest V3 context.
   * @param data Data to pass to the function. Will be passed as `this`.
   * @returns A promise with the data object, which might be mutated by the function. If you're not using that, you can
   * still await it to make sure the function is done.
   */
  $.global = async function (fn, data) {
    if (platform === 'crx' && chrome.runtime.getManifest().manifest_version === 3) {
      return $.eventPageRequest({ type: 'runInPageContext', fn, data });
    } else {
      if (doc) {
        const script = $.el('script', { textContent: `(${PageContextFunctions[fn]})(document.currentScript.dataset);` });
        if (data) {
          $.extend(script.dataset, data);
        }
        $.add((d.head || doc), script);
        $.rm(script);
        return script.dataset;
      } else {
        // XXX dwb
        try {
          PageContextFunctions[fn](data);
        } catch (error) {
          console.error(error);
        }
        return data;
      }
    }
  };
  $.bytesToString = function (size) {
    let unit = 0; // Bytes
    while (size >= 1024) {
      size /= 1024;
      unit++;
    }
    // Remove trailing 0s.
    size =
      unit > 1 ?
        // Keep the size as a float if the size is greater than 2^20 B.
        // Round to hundredth.
        Math.round(size * 100) / 100
        :
          // Round to an integer otherwise.
          Math.round(size);
    return `${size} ${['B', 'KB', 'MB', 'GB'][unit]}`;
  };
  $.minmax = (value, min, max) => value < min ?
    min
    :
      value > max ?
        max
        :
          value;
  $.hasAudio = video => video.mozHasAudio || !!video.webkitAudioDecodedByteCount ||
    video.nextElementSibling?.tagName === 'AUDIO'; // sound posts
  $.luma = rgb => (rgb[0] * 0.299) + (rgb[1] * 0.587) + (rgb[2] * 0.114);
  $.unescape = function (text) {
    if (text == null) {
      return text;
    }
    return text.replace(/<[^>]*>/g, '').replace(/&(amp|#039|quot|lt|gt|#44);/g, c => ({ '&amp;': '&', '&#039;': "'", '&quot;': '"', '&lt;': '<', '&gt;': '>', '&#44;': ',' })[c]);
  };
  $.isImage = url => /\.(jpe?g|jfif|png|gif|bmp|webp|avif|jxl)$/i.test(url);
  $.isVideo = url => /\.(webm|mp4|ogv)$/i.test(url);
  $.engine = (function () {
    if (/Edge\//.test(navigator.userAgent)) {
      return 'edge';
    }
    if (/Chrome\//.test(navigator.userAgent)) {
      return 'blink';
    }
    if (/WebKit\//.test(navigator.userAgent)) {
      return 'webkit';
    }
    if (/Gecko\/|Goanna/.test(navigator.userAgent)) {
      return 'gecko';
    } // Goanna = Pale Moon 26+
  })();
  $.hasStorage = (function () {
    try {
      if (localStorage.getItem(g.NAMESPACE + 'hasStorage') === 'true') {
        return true;
      }
      localStorage.setItem(g.NAMESPACE + 'hasStorage', 'true');
      return localStorage.getItem(g.NAMESPACE + 'hasStorage') === 'true';
    } catch (error) {
      return false;
    }
  })();
  $.item = function (key, val) {
    const item = dict();
    item[key] = val;
    return item;
  };
  $.oneItemSugar = fn => (function (key, val, cb) {
    if (typeof key === 'string') {
      return fn($.item(key, val), cb);
    } else {
      return fn(key, val);
    }
  });
  $.syncing = dict();
  $.securityCheck = function (data) {
    if (location.protocol !== 'https:') {
      return delete data['Redirect to HTTPS'];
    }
  };

    // http://wiki.greasespot.net/Main_Page
    // https://tampermonkey.net/documentation.php
    if ((GM?.deleteValue != null) && window.BroadcastChannel && (typeof GM_addValueChangeListener === 'undefined' || GM_addValueChangeListener === null)) {
      $.syncChannel = new BroadcastChannel(g.NAMESPACE + 'sync');
      $.on($.syncChannel, 'message', e => (() => {
        const result = [];
        for (var key in e.data) {
          var cb;
          var val = e.data[key];
          if (cb = $.syncing[key]) {
            result.push(cb(dict.json(JSON.stringify(val)), key));
          }
        }
        return result;
      })());
      $.sync = (key, cb) => $.syncing[key] = cb;
      $.forceSync = function () { };
      $.delete = function (keys, cb) {
        let key;
        if (!(keys instanceof Array)) {
          keys = [keys];
        }
        Promise.all(keys.map(key => GM.deleteValue(g.NAMESPACE + key))).then(function () {
          const items = dict();
          for (key of keys)
            items[key] = undefined;
          $.syncChannel.postMessage(items);
          cb?.();
        });
      };
      $.get = $.oneItemSugar(function (items, cb) {
        const keys = Object.keys(items);
        return Promise.all(keys.map((key) => GM.getValue(g.NAMESPACE + key))).then(function (values) {
          for (let i = 0; i < values.length; i++) {
            var val = values[i];
            if (val) {
              items[keys[i]] = dict.json(val);
            }
          }
          return cb(items);
        });
      });
      $.set = $.oneItemSugar(function (items, cb) {
        $.securityCheck(items);
        return Promise.all((() => {
          const result = [];
          for (var key in items) {
            var val = items[key];
            result.push(GM.setValue(g.NAMESPACE + key, JSON.stringify(val)));
          }
          return result;
        })()).then(function () {
          $.syncChannel.postMessage(items);
          return cb?.();
        });
      });
      $.clear = cb => GM.listValues().then(keys => $.delete(keys.map(key => key.replace(g.NAMESPACE, '')), cb)).catch(() => $.delete(Object.keys(Conf).concat(['previousversion', 'QR Size', 'QR.persona']), cb));
    } else {
      if (typeof GM_deleteValue !== 'undefined' && GM_deleteValue !== null) {
        $.getValue = GM_getValue;
        $.listValues = () => GM_listValues(); // error when called if missing
      } else if ($.hasStorage) {
        $.getValue = key => localStorage.getItem(key);
        $.listValues = () => (() => {
          const result = [];
          for (var key in localStorage) {
            if (key.slice(0, g.NAMESPACE.length) === g.NAMESPACE) {
              result.push(key);
            }
          }
          return result;
        })();
      } else {
        $.getValue = function () { };
        $.listValues = () => [];
      }
      if (typeof GM_addValueChangeListener !== 'undefined' && GM_addValueChangeListener !== null) {
        $.setValue = GM_setValue;
        $.deleteValue = GM_deleteValue;
      } else if (typeof GM_deleteValue !== 'undefined' && GM_deleteValue !== null) {
        $.oldValue = dict();
        $.setValue = function (key, val) {
          GM_setValue(key, val);
          if (key in $.syncing) {
            $.oldValue[key] = val;
            if ($.hasStorage) {
              return localStorage.setItem(key, val);
            } // for `storage` events
          }
        };
        $.deleteValue = function (key) {
          GM_deleteValue(key);
          if (key in $.syncing) {
            delete $.oldValue[key];
            if ($.hasStorage) {
              return localStorage.removeItem(key);
            } // for `storage` events
          }
        };
        if (!$.hasStorage) {
          $.cantSync = true;
        }
      } else if ($.hasStorage) {
        $.oldValue = dict();
        $.setValue = function (key, val) {
          if (key in $.syncing) {
            $.oldValue[key] = val;
          }
          return localStorage.setItem(key, val);
        };
        $.deleteValue = function (key) {
          if (key in $.syncing) {
            delete $.oldValue[key];
          }
          return localStorage.removeItem(key);
        };
      } else {
        $.setValue = function () { };
        $.deleteValue = function () { };
        $.cantSync = ($.cantSet = true);
      }
      if (typeof GM_addValueChangeListener !== 'undefined' && GM_addValueChangeListener !== null) {
        $.sync = (key, cb) => $.syncing[key] = GM_addValueChangeListener(g.NAMESPACE + key, function (key2, oldValue, newValue, remote) {
          if (remote) {
            if (newValue !== undefined) {
              newValue = dict.json(newValue);
            }
            return cb(newValue, key);
          }
        });
        $.forceSync = function () { };
      } else if ((typeof GM_deleteValue !== 'undefined' && GM_deleteValue !== null) || $.hasStorage) {
        $.sync = function (key, cb) {
          key = g.NAMESPACE + key;
          $.syncing[key] = cb;
          return $.oldValue[key] = $.getValue(key);
        };
        (function () {
          const onChange = function ({ key, newValue }) {
            let cb;
            if (!(cb = $.syncing[key])) {
              return;
            }
            if (newValue != null) {
              if (newValue === $.oldValue[key]) {
                return;
              }
              $.oldValue[key] = newValue;
              return cb(dict.json(newValue), key.slice(g.NAMESPACE.length));
            } else {
              if ($.oldValue[key] == null) {
                return;
              }
              delete $.oldValue[key];
              return cb(undefined, key.slice(g.NAMESPACE.length));
            }
          };
          $.on(window, 'storage', onChange);
          return $.forceSync = function (key) {
            // Storage events don't work across origins
            // e.g. http://boards.4chan.org and https://boards.4chan.org
            // so force a check for changes to avoid lost data.
            key = g.NAMESPACE + key;
            return onChange({ key, newValue: $.getValue(key) });
          };
        })();
      } else {
        $.sync = function () { };
        $.forceSync = function () { };
      }
      $.delete = function (keys) {
        if (!(keys instanceof Array)) {
          keys = [keys];
        }
        for (var key of keys) {
          $.deleteValue(g.NAMESPACE + key);
        }
      };
      $.get = $.oneItemSugar((items, cb) => $.queueTask($.getSync, items, cb));
      $.getSync = function (items, cb) {
        for (var key in items) {
          var val2;
          if (val2 = $.getValue(g.NAMESPACE + key)) {
            try {
              items[key] = dict.json(val2);
            } catch (err) {
              // XXX https://github.com/ccd0/4chan-x/issues/2218
              if (!/^(?:undefined)*$/.test(val2)) {
                throw err;
              }
            }
          }
        }
        return cb(items);
      };
      $.set = $.oneItemSugar(function (items, cb) {
        $.securityCheck(items);
        return $.queueTask(function () {
          for (var key in items) {
            var value = items[key];
            $.setValue(g.NAMESPACE + key, JSON.stringify(value));
          }
          return cb?.();
        });
      });
      $.clear = function (cb) {
        // XXX https://github.com/greasemonkey/greasemonkey/issues/2033
        // Also support case where GM_listValues is not defined.
        $.delete(Object.keys(Conf));
        $.delete(['previousversion', 'QR Size', 'QR.persona']);
        try {
          $.delete($.listValues().map(key => key.replace(g.NAMESPACE, '')));
        } catch (error) { }
        return cb?.();
      };
    }

  /*
   * This file has the code for the jsx to { innerHTML: "safe string" }
   *
   * Usage: import h from this file.
   * Attributes are stringified raw, so the names must be like html text: eg class and not className.
   * Boolean values are stringified as followed: true will mean the attribute is there, false means it will be omitted.
   * Strings bound to attributes and children will be escaped automatically.
   * It returns interface EscapedHtml { innerHTML: "safe string", [isEscaped]: true }
   *
   * For strings that don't have a parent element you can use fragments: <></>.
   * Note that you need to import hFragment, which for some reason isn't auto imported on "add all missing imports"
   */
  /**
   * The symbol indicating that a string is safely escaped.
   * This is a symbol so it can't be faked by a json blob from the internet.
   */
  const isEscaped = Symbol('isEscaped');
  const voidElements = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr',]);
  const hFragment = Symbol('hFragment');
  /** Function that jsx/tsx will be compiled to. */
  function h(tag, attributes, ...children) {
    let innerHTML = tag === hFragment ? '' : `<${tag}`;
    if (attributes) {
      for (const [attribute, value] of Object.entries(attributes)) {
        if (!value && value !== 0)
          continue;
        innerHTML += ` ${attribute}`;
        if (value === true)
          continue;
        innerHTML += `="${E(value.toString())}"`;
      }
    }
    if (tag !== hFragment)
      innerHTML += '>';
    const isVoid = tag !== hFragment && voidElements.has(tag);
    if (isVoid) {
      if (children.length)
        throw new TypeError(`${tag} is a void html element and can't have child elements`);
    } else {
      for (const child of children) {
        if (child === null || child === undefined || child === '')
          continue;
        if (child instanceof Object && "innerHTML" in child && child[isEscaped]) {
          innerHTML += child.innerHTML;
          continue;
        }
        innerHTML += E(child.toString());
      }
    }
    if (!isVoid && tag !== hFragment)
      innerHTML += `</${tag}>`;
    return { innerHTML, [isEscaped]: true };
  }

  const ImageSvg = 'M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z';
  const ImageW = 512, ImageH = 512;

  const EyeSvg = 'M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z';
  const EyeW = 576, EyeH = 512;

  const UpRightAndDownLeftFromCenterSvg = 'M344 0L488 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512L24 512c-13.3 0-24-10.7-24-24L0 344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z';
  const UpRightAndDownLeftFromCenterW = 512, UpRightAndDownLeftFromCenterH = 512;

  const CommentSvg = 'M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z';
  const CommentW = 512, CommentH = 512;

  const RotateSvg = 'M142.9 142.9c-17.5 17.5-30.1 38-37.8 59.8c-5.9 16.7-24.2 25.4-40.8 19.5s-25.4-24.2-19.5-40.8C55.6 150.7 73.2 122 97.6 97.6c87.2-87.2 228.3-87.5 315.8-1L455 55c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 128c0 13.3-10.7 24-24 24l-8.4 0c0 0 0 0 0 0L344 224c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l41.1-41.1c-62.6-61.5-163.1-61.2-225.3 1zM16 312c0-13.3 10.7-24 24-24l7.6 0 .7 0L168 288c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-41.1 41.1c62.6 61.5 163.1 61.2 225.3-1c17.5-17.5 30.1-38 37.8-59.8c5.9-16.7 24.2-25.4 40.8-19.5s25.4 24.2 19.5 40.8c-10.8 30.6-28.4 59.3-52.9 83.8c-87.2 87.2-228.3 87.5-315.8 1L57 457c-6.9 6.9-17.2 8.9-26.2 5.2S16 449.7 16 440l0-119.6 0-.7 0-7.6z';
  const RotateW = 512, RotateH = 512;

  const WrenchSvg = 'M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z';
  const WrenchW = 512, WrenchH = 512;

  const BoltSvg = 'M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z';
  const BoltW = 448, BoltH = 512;

  const PencilSvg = 'M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z';
  const PencilW = 512, PencilH = 512;

  const ClipboardSvg = 'M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z';
  const ClipboardW = 384, ClipboardH = 512;

  const ClockSvg = 'M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z';
  const ClockW = 512, ClockH = 512;

  const LinkSvg = 'M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z';
  const LinkW = 640, LinkH = 512;

  const ShuffleSvg = 'M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z';
  const ShuffleW = 512, ShuffleH = 512;

  const RotateLeftSvg = 'M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z';
  const RotateLeftW = 512, RotateLeftH = 512;

  const RotateRightSvg = 'M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z';
  const RotateRightW = 512, RotateRightH = 512;

  const DownloadSvg = 'M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 242.7-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7 288 32zM64 352c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-101.5 0-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352 64 352zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z';
  const DownloadW = 512, DownloadH = 512;

  const BookOpenSvg = 'M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5l0-377.4c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8L0 454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5l0-370.3c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11L304 456c0 11.4 11.7 19.3 22.4 15.5z';
  const BookOpenW = 576, BookOpenH = 512;

  const DownLeftAndUpRightToCenterSvg = 'M439 7c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8l-144 0c-13.3 0-24-10.7-24-24l0-144c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39L439 7zM72 272l144 0c13.3 0 24 10.7 24 24l0 144c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39L73 505c-9.4 9.4-24.6 9.4-33.9 0L7 473c-9.4-9.4-9.4-24.6 0-33.9l87-87L55 313c-6.9-6.9-8.9-17.2-5.2-26.2s12.5-14.8 22.2-14.8z';
  const DownLeftAndUpRightToCenterW = 512, DownLeftAndUpRightToCenterH = 512;

  const HeartSvg = 'M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z';
  const HeartW = 512, HeartH = 512;

  const CaretRightSvg = 'M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z';
  const CaretRightW = 256, CaretRightH = 512;

  const CaretLeftSvg = 'M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z';
  const CaretLeftW = 256, CaretLeftH = 512;

  const CaretDownSvg = 'M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z';
  const CaretDownW = 320, CaretDownH = 512;

  const ScissorsSvg = 'M256 192l-39.5-39.5c4.9-12.6 7.5-26.2 7.5-40.5C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c14.3 0 27.9-2.7 40.5-7.5L192 256l-39.5 39.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-14.3-2.7-27.9-7.5-40.5L499.2 76.8c7.1-7.1 7.1-18.5 0-25.6c-28.3-28.3-74.1-28.3-102.4 0L256 192zm22.6 150.6L396.8 460.8c28.3 28.3 74.1 28.3 102.4 0c7.1-7.1 7.1-18.5 0-25.6L342.6 278.6l-64 64zM64 112a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 240a48 48 0 1 1 0 96 48 48 0 1 1 0-96z';
  const ScissorsW = 512, ScissorsH = 512;

  const XmarkSvg = 'M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z';
  const XmarkW = 384, XmarkH = 512;

  const ArrowRightLongSvg = 'M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z';
  const ArrowRightLongW = 512, ArrowRightLongH = 512;

  const PlusSvg = 'M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z';
  const PlusW = 448, PlusH = 512;

  const SquarePlusSvg = 'M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z';
  const SquarePlusW = 448, SquarePlusH = 512;

  const SquareMinusSvg = 'M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM152 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z';
  const SquareMinusW = 448, SquareMinusH = 512;

  const PlaySvg = 'M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z';
  const PlayW = 384, PlayH = 512;

  const StopSvg = 'M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z';
  const StopW = 384, StopH = 512;

  const ArrowUpLongSvg = 'M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z';
  const ArrowUpLongW = 384, ArrowUpLongH = 512;

  const ArrowDownLongSvg = 'M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z';
  const ArrowDownLongW = 384, ArrowDownLongH = 512;

  const width$5 = 24;
  const height$5 = 24;
  const body$5 = "<path d=\"M3,0v12l9-6L3,0z M3,12v12l9-6L3,12z M12,6v12l9-6L12,6z\"/>\n";

  const width$4 = 30;
  const height$4 = 30;
  const body$4 = "<path d=\"M14.943 30C23.195 30 29.885 23.284 29.885 15C29.885 6.716 23.195 0 14.943 0C6.69 0 0 6.715 0 15C0 23.285 6.69 30 14.943 30ZM18.009 8.82C18.678 8.359 19.24 8.126 19.994 7.987C20.565 7.884 22.06 8.009 22.676 8.211C23.572 8.507 24.165 8.802 24.83 9.286C26.079 10.202 26.988 11.51 27.413 13.003C27.721 14.091 27.721 15.506 27.409 16.689C27.114 17.799 26.325 19.161 25.459 20.039C24.745 20.759 23.679 21.422 22.738 21.722C21.722 22.049 20.842 22.148 19.899 22.036C19.203 21.955 19.029 21.919 18.418 21.722C17.575 21.452 16.169 20.625 16.263 20.455C16.281 20.419 16.678 19.819 17.142 19.12L17.99 17.849L18.19 18.029C18.489 18.299 19.016 18.588 19.416 18.719C20.741 19.135 22.133 18.817 23.127 17.868C23.658 17.366 24.002 16.788 24.194 16.072C24.313 15.624 24.305 14.639 24.176 14.164C23.77 12.659 22.744 11.669 21.361 11.45C19.964 11.226 18.925 11.92 17.511 14.012C17.328 14.282 16.873 15.006 16.494 15.624C14.795 18.405 13.974 19.494 12.836 20.456C12.038 21.137 11.36 21.5 10.386 21.768C9.984 21.881 9.899 21.888 9.021 21.888C8.191 21.888 8.034 21.88 7.66 21.785C6.644 21.539 6.031 21.279 5.264 20.765C3.703 19.722 2.69 18.159 2.297 16.184C2.208 15.723 2.222 14.24 2.324 13.743C2.45 13.163 2.636 12.597 2.877 12.055C3.565 10.568 4.889 9.295 6.424 8.656C8.061 7.966 9.873 7.939 11.586 8.58C12.112 8.772 13.067 9.337 13.451 9.677L13.638 9.847L12.768 11.146C12.29 11.858 11.88 12.449 11.854 12.458C11.827 12.467 11.764 12.428 11.711 12.364C11.523 12.162 11.001 11.794 10.707 11.657C9.636 11.155 8.495 11.159 7.468 11.67C7.009 11.898 6.718 12.118 6.353 12.512C6.024 12.87 5.835 13.211 5.688 13.721C5.608 13.999 5.594 14.169 5.594 14.729C5.599 15.351 5.608 15.427 5.733 15.803C5.947 16.453 6.211 16.883 6.696 17.375C7.446 18.132 8.362 18.476 9.446 18.405C10.035 18.37 10.419 18.222 10.958 17.828C11.444 17.474 11.971 16.932 12.417 16.319C12.988 15.539 13.171 15.257 14.126 13.685C15.818 10.893 16.827 9.627 18.009 8.82Z\"/>\n";

  const width$3 = 16;
  const height$3 = 16;
  const body$3 = "<path d=\"M6.567 15.91c-1.469-.334-2.404-.76-3.464-1.561C1.75 13.322.649 11.669.207 9.991c-.276-1.035-.276-2.988 0-4.007.342-1.235.801-2.137 1.628-3.155C2.769 1.677 4.43.625 5.983.208 6.576.05 6.901.016 7.986.016c1.47 0 2.212.15 3.34.676.642.3 1.669.943 1.669 1.052 0 .033-.634.568-1.41 1.185L10.182 4.065l-.493-.217c-.409-.192-.651-.234-1.419-.267-1.628-.067-2.354.208-3.456 1.318-.568.568-.76.826-.96 1.294-.242.559-.25.634-.259 1.87l-.008 1.293-1.269 1.036c-.692.576-1.252 1.051-1.235 1.068.017.017.752-.158 1.636-.392l1.611-.434.534.543c.927.926 1.711 1.235 3.164 1.235 1.377 0 2.087-.284 3.072-1.244.651-.634 1.094-1.402 1.252-2.195l.11-.518 1.66-.442c.919-.242 1.72-.442 1.778-.442.067 0 .1.184.1.668 0 2.112-1.152 4.508-2.813 5.86-.985.885-1.786 1.302-3.064 1.661-.75.209-2.796.301-3.455.15z\" fill=\"#FF00FF\"/>\n";

  const width$2 = 24;
  const height$2 = 24;
  const body$2 = "<path d=\"M12 17.958a1.137 1.137 0 01-1.138-1.136V7.233a1.137 1.137 0 012.276 0v9.59c0 .627-.51 1.135-1.138 1.135m7.439 2.44A1.137 1.137 0 0118.3 19.26V4.794a1.137 1.137 0 012.276 0v14.467c0 .627-.51 1.136-1.138 1.136M15.719 24a1.137 1.137 0 01-1.138-1.136V1.136a1.137 1.137 0 012.276 0v21.728c0 .627-.509 1.136-1.138 1.136m-7.438-3.16a1.137 1.137 0 01-1.138-1.136V4.296a1.137 1.137 0 012.276 0v15.408c0 .628-.51 1.137-1.138 1.137m-3.72-4.989a1.137 1.137 0 01-1.138-1.136V9.284a1.137 1.137 0 012.276 0v5.432c0 .627-.51 1.136-1.138 1.136Z\"/>\n";

  const width$1 = 24;
  const height$1 = 24;
  const body$1 = "<path d=\"M17.02 0a2.096 2.096 0 00-.722.123L2.624 5.003A2.1 2.1 0 001.35 7.69l5.324 14.915a2.101 2.101 0 002.685 1.272l7.746-2.765c.792-.307 1.345-.534 1.464-.608.543-.314.962-.817 1.964-2.334.904-1.362 1.859-3.323 2.097-4.28.24-.97.239-1.48-.502-3.674l-3.146-8.82A2.102 2.102 0 0017.02 0zm-.083.414c.72-.031 1.4.403 1.657 1.12l3.68 10.357c.103.433-.281 1.147-.736 1.35-.2.1-.71.293-1.142.429-1.397.463-2.05.878-2.458 1.547-.363.591-.315 1.18.16 2.377.462 1.142.533 1.864.225 2.4-.113.188-.301.322-1.354.733l-.002-.005-7.746 2.765a1.68 1.68 0 01-2.157-1.022L1.74 7.55a1.68 1.68 0 011.022-2.157L16.437.513c.165-.06.334-.092.5-.099zM15.9 2.25l-1.203.885.187.519.523-.316.803 2.235-.696.249c.045.145.216.642.238.664l2.166-.78-.238-.662-.687.248zm-3.29 1.182l-1.203.885.186.519.524-.316.803 2.235-.697.25c.046.144.216.64.238.663l2.167-.778-.238-.663-.687.247zM9.085 4.786c-.283 0-.56.076-.8.223-.732.448-.85 1.383-.332 2.558.337.776.873 1.218 1.462 1.215 1.345-.007 1.86-1.4 1.085-2.95-.307-.66-.837-1.036-1.415-1.046zm-.191.672c.168-.01.357.085.539.279.145.155.347.51.437.787.35.998.164 1.688-.414 1.546C8.855 7.93 8.21 6 8.62 5.585a.407.407 0 01.273-.127zm-3.765.75c-.283 0-.56.076-.8.223-.732.448-.85 1.382-.332 2.557.337.777.873 1.218 1.462 1.215 1.344-.007 1.86-1.398 1.085-2.95-.307-.66-.838-1.036-1.415-1.045zm-.192.672c.168-.01.358.085.54.278.145.155.347.51.437.787.35.999.164 1.689-.415 1.547-.6-.141-1.243-2.072-.834-2.485a.407.407 0 01.272-.127zm13.362.655c-.283 0-.56.076-.8.223-.732.448-.85 1.382-.332 2.558.337.776.873 1.218 1.462 1.215 1.345-.007 1.86-1.4 1.085-2.95-.307-.66-.837-1.036-1.415-1.046zm-.191.672c.168-.01.357.085.539.278.145.155.347.51.437.787.35.999.164 1.689-.414 1.547-.601-.141-1.244-2.072-.835-2.485a.407.407 0 01.273-.127zm-3.766.75a1.532 1.532 0 00-.8.222c-.73.448-.848 1.383-.331 2.558.337.776.873 1.218 1.462 1.215 1.344-.007 1.86-1.398 1.085-2.95-.307-.66-.838-1.036-1.416-1.045zm-.19.67c.167-.008.357.086.539.28.145.155.347.51.437.787.35.998.164 1.688-.415 1.547-.6-.142-1.244-2.072-.835-2.485a.408.408 0 01.273-.128zm-3.746.744c-.283-.001-.56.076-.8.223-.732.448-.85 1.382-.332 2.557.337.777.873 1.218 1.462 1.215 1.345-.007 1.86-1.398 1.085-2.95-.307-.66-.838-1.036-1.415-1.045zm-.192.672c.169-.01.358.085.54.278.145.155.347.51.437.787.35.999.164 1.689-.414 1.547-.601-.141-1.244-2.072-.835-2.485a.407.407 0 01.272-.127zm-3.515.616l-1.203.884.187.52.524-.316.802 2.233-.696.25c.045.145.216.641.238.663l2.166-.778-.238-.663-.687.247zm15.664 1.33c.034 0 .049.047.064.135.023.11-.064.545-.195.957-.47 1.435-2.052 4.223-3.08 5.396l-.407.47.05-.667c.03-.567-.015-.812-.376-1.71-.496-1.263-.533-1.73-.158-2.31.34-.514 1.028-.907 2.448-1.37.72-.238 1.175-.463 1.385-.664.132-.145.207-.22.253-.235a.048.048 0 01.015-.003zm-6.43 1.476l-1.202.885.187.52.523-.317.803 2.235-.696.25c.045.144.216.641.238.663l2.166-.779-.238-.662-.687.247-1.093-3.042zm-3.578 1.33c-.283 0-.56.077-.8.223-.731.448-.85 1.382-.332 2.558.337.776.873 1.218 1.462 1.215 1.345-.007 1.86-1.399 1.086-2.95-.307-.66-.838-1.036-1.416-1.046zm-.191.672c.168-.009.358.085.54.28.144.153.346.51.437.786.35.998.164 1.688-.415 1.546-.6-.14-1.244-2.072-.835-2.485a.407.407 0 01.273-.127zm-3.515.616l-1.204.885.187.52.524-.317.803 2.234-.697.25c.045.145.216.642.238.664l2.166-.779-.238-.663-.687.248-1.092-3.042z\"/>\n";

  const width = 512;
  const height = 512;
  const body = "<rect width=\"512\" height=\"512\" rx=\"15%\" fill=\"#6441a4\"/><path d=\"m115 101-22 56v228h78v42h44l41-42h63l85-85v-199zm260 185-48 48h-78l-42 42v-42h-65v-204h233zm-48-100v85h-30v-85zm-78 0v85h-29v-85z\" fill=\"#fff\"/>\n";

  const MicrophoneSvg = 'M192 0C139 0 96 43 96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z';
  const MicrophoneW = 384, MicrophoneH = 512;

  const FileAudioSvg = 'M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zm2 226.3c37.1 22.4 62 63.1 62 109.7s-24.9 87.3-62 109.7c-7.6 4.6-17.4 2.1-22-5.4s-2.1-17.4 5.4-22C269.4 401.5 288 370.9 288 336s-18.6-65.5-46.5-82.3c-7.6-4.6-10-14.4-5.4-22s14.4-10 22-5.4zm-91.9 30.9c6 2.5 9.9 8.3 9.9 14.8l0 128c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5L113.4 376 80 376c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16l33.4 0 35.3-35.3c4.6-4.6 11.5-5.9 17.4-3.5zm51 34.9c6.6-5.9 16.7-5.3 22.6 1.3C249.8 304.6 256 319.6 256 336s-6.2 31.4-16.3 42.7c-5.9 6.6-16 7.1-22.6 1.3s-7.1-16-1.3-22.6c5.1-5.7 8.1-13.1 8.1-21.3s-3.1-15.7-8.1-21.3c-5.9-6.6-5.3-16.7 1.3-22.6z';
  const FileAudioW = 384, FileAudioH = 512;

  const FileVideoSvg = 'M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM64 288c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32l0-96zM300.9 397.9L256 368l0-64 44.9-29.9c2-1.3 4.4-2.1 6.8-2.1c6.8 0 12.3 5.5 12.3 12.3l0 103.4c0 6.8-5.5 12.3-12.3 12.3c-2.4 0-4.8-.7-6.8-2.1z';
  const FileVideoW = 384, FileVideoH = 512;

  const XTwitterSvg = 'M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z';
  const XTwitterW = 448, XTwitterH = 512;

  const SoundcloudSvg = 'M640.2 298.6c-1.3 23.1-11.5 44.8-28.4 60.5s-39.2 24.4-62.3 24.1l-218 0c-4.8 0-9.4-2-12.8-5.4s-5.3-8-5.3-12.8l0-234.8c-.2-4 .9-8 3.1-11.4s5.3-6.1 9-7.7c0 0 20.1-13.9 62.3-13.9 25.8 0 51.1 6.9 73.3 20.1 17.3 10.2 32.3 23.8 44.1 40.1s20 34.8 24.2 54.4c7.5-2.1 15.3-3.2 23.1-3.2 11.7-.1 23.3 2.2 34.2 6.7s20.5 11.3 28.7 19.7 14.6 18.3 18.9 29.3 6.3 22.6 5.9 34.3zm-354-153.5c.1-1 0-2-.3-2.9s-.8-1.8-1.5-2.6-1.5-1.3-2.4-1.7c-1.8-.8-4-.8-5.8 0-.9 .4-1.7 1-2.4 1.7s-1.2 1.6-1.5 2.6-.4 1.9-.3 2.9c-6 78.9-10.6 152.9 0 231.6 .2 1.7 1 3.3 2.3 4.5 2.6 2.4 6.8 2.4 9.4 0 1.3-1.2 2.1-2.8 2.3-4.5 11.3-79.4 6.6-152 0-231.6l.2 0zm-44 27.3c-.2-1.8-1.1-3.5-2.4-4.7s-3.1-1.9-5-1.9-3.6 .7-5 1.9-2.2 2.9-2.4 4.7c-7.9 67.9-7.9 136.5 0 204.4 .3 1.8 1.2 3.4 2.5 4.5s3.1 1.8 4.8 1.8 3.5-.6 4.8-1.8 2.2-2.8 2.5-4.5c8.8-67.8 8.8-136.5 .1-204.4l.1 0zm-44.3-6.9c-.2-1.8-1-3.4-2.3-4.6s-3-1.8-4.8-1.8-3.5 .7-4.8 1.8-2.1 2.8-2.3 4.6c-6.7 72-10.2 139.3 0 211.1 0 1.9 .7 3.7 2.1 5s3.1 2.1 5 2.1 3.7-.7 5-2.1 2.1-3.1 2.1-5c10.5-72.8 7.3-138.2 .1-211.1l-.1 0zm-44 20.6c0-1.9-.8-3.8-2.1-5.2s-3.2-2.1-5.2-2.1-3.8 .8-5.2 2.1-2.1 3.2-2.1 5.2c-8.1 63.3-8.1 127.5 0 190.8 .2 1.8 1 3.4 2.4 4.6s3.1 1.9 4.8 1.9 3.5-.7 4.8-1.9 2.2-2.8 2.4-4.6c8.8-63.3 8.9-127.5 .3-190.8l-.1 0zm-44.5 47.6c0-1.9-.8-3.8-2.1-5.1s-3.2-2.1-5.1-2.1-3.8 .8-5.1 2.1-2.1 3.2-2.1 5.1c-10.5 49.2-5.5 93.9 .4 143.6 .3 1.6 1.1 3.1 2.3 4.2s2.8 1.7 4.5 1.7 3.2-.6 4.5-1.7 2.1-2.5 2.3-4.2c6.6-50.4 11.6-94.1 .4-143.6zm-44.1-7.5c-.2-1.8-1.1-3.5-2.4-4.8s-3.2-1.9-5-1.9-3.6 .7-5 1.9-2.2 2.9-2.4 4.8c-9.3 50.2-6.2 94.4 .3 144.5 .7 7.6 13.6 7.5 14.4 0 7.2-50.9 10.5-93.8 .3-144.5l-.2 0zM20.7 250.8c-.2-1.8-1.1-3.5-2.4-4.8s-3.2-1.9-5-1.9-3.6 .7-5 1.9-2.3 2.9-2.4 4.8c-8.5 33.7-5.9 61.6 .6 95.4 .2 1.7 1 3.3 2.3 4.4s2.9 1.8 4.7 1.8 3.4-.6 4.7-1.8 2.1-2.7 2.3-4.4c7.5-34.5 11.2-61.8 .4-95.4l-.2 0z';
  const SoundcloudW = 640, SoundcloudH = 512;

  const DailymotionSvg = 'M298.9 267c-7.4-4.2-15.8-6.3-24.4-6.2-13.2 0-24.4 4.4-33.4 13.3s-13.6 20-13.6 33.4c0 14.1 4.4 25.6 13.3 34.6s20 13.4 33.4 13.4c13.7 0 25-4.6 34.1-13.8S322 321.1 322 307.5c0-8.2-2.1-16.3-6.1-23.5-4-7.1-9.8-13-17-17zM0 32l0 448 448 0 0-448-448 0zM374.7 405.3l-53.1 0 0-23.9-.7 0c-10.5 17.5-29.1 26.2-55.8 26.2-18.4 0-34.7-4.4-48.9-13.1-14.1-8.6-25.5-21-32.9-35.8-7.7-15.1-11.6-32.1-11.6-50.9 0-18.4 3.9-35.1 11.8-50.2 7.5-14.7 18.9-27.1 32.9-35.8 14.1-8.7 30-13.1 47.7-13.1 10.2-.1 20.2 1.6 29.7 5.2 8.9 3.5 17.2 9.1 25 17l0-77.9 55.8-12.1 0 264.4z';
  const DailymotionW = 448, DailymotionH = 512;

  const GithubSvg = 'M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z';
  const GithubW = 512, GithubH = 512;

  const VimeoSvg = 'M403.2 32L44.8 32C20.1 32 0 52.1 0 76.8L0 435.2C0 459.9 20.1 480 44.8 480l358.4 0c24.7 0 44.8-20.1 44.8-44.8l0-358.4C448 52.1 427.9 32 403.2 32zM377 180.8c-1.4 31.5-23.4 74.7-66 129.4-44 57.2-81.3 85.8-111.7 85.8-18.9 0-34.8-17.4-47.9-52.3-25.5-93.3-36.4-148-57.4-148-2.4 0-10.9 5.1-25.4 15.2L53.4 191.3c37.3-32.8 72.9-69.2 95.2-71.2 25.2-2.4 40.7 14.8 46.5 51.7 20.7 131.2 29.9 151 67.6 91.6 13.5-21.4 20.8-37.7 21.8-48.9 3.5-33.2-25.9-30.9-45.8-22.4 15.9-52.1 46.3-77.4 91.2-76 33.3 .9 49 22.5 47.1 64.7z';
  const VimeoW = 448, VimeoH = 512;

  const YoutubeSvg = 'M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z';
  const YoutubeW = 576, YoutubeH = 512;

  // import linkifyInstallgentoo from './linkify.installgentoo.png';
  const toSvg = (data, w, h) => {
    if (data.trimStart().startsWith('<svg')) {
      return data.replace(/fill="[^"]*"/g, 'fill="currentColor"');
    } else if (data.trimStart().startsWith('<')) {
      return `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 ${w} ${h}" fill="currentColor">${data}</svg>`;
    } else {
      return `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 ${w} ${h}">` +
        `<path d="${data}" fill="currentColor"/></svg>`;
    }
  };
  const icons = {
    image: toSvg(ImageSvg, ImageW, ImageH),
    eye: toSvg(EyeSvg, EyeW, EyeH),
    expand: toSvg(UpRightAndDownLeftFromCenterSvg, UpRightAndDownLeftFromCenterW, UpRightAndDownLeftFromCenterH),
    comment: toSvg(CommentSvg, CommentW, CommentH),
    refresh: toSvg(RotateSvg, RotateW, RotateH),
    wrench: toSvg(WrenchSvg, WrenchW, WrenchH),
    bolt: toSvg(BoltSvg, BoltW, BoltH),
    link: toSvg(LinkSvg, LinkW, LinkH),
    pencil: toSvg(PencilSvg, PencilW, PencilH),
    clipboard: toSvg(ClipboardSvg, ClipboardW, ClipboardH),
    clock: toSvg(ClockSvg, ClockW, ClockH),
    shuffle: toSvg(ShuffleSvg, ShuffleW, ShuffleH),
    undo: toSvg(RotateLeftSvg, RotateLeftW, RotateLeftH),
    rotateLeft: toSvg(RotateLeftSvg, RotateLeftW, RotateLeftH),
    rotateRight: toSvg(RotateRightSvg, RotateRightW, RotateRightH),
    download: toSvg(DownloadSvg, DownloadW, DownloadH),
    bookOpen: toSvg(BookOpenSvg, BookOpenW, BookOpenH),
    shrink: toSvg(DownLeftAndUpRightToCenterSvg, DownLeftAndUpRightToCenterW, DownLeftAndUpRightToCenterH),
    heart: toSvg(HeartSvg, HeartW, HeartH),
    caretRight: toSvg(CaretRightSvg, CaretRightW, CaretRightH),
    caretLeft: toSvg(CaretLeftSvg, CaretLeftW, CaretLeftH),
    caretDown: toSvg(CaretDownSvg, CaretDownW, CaretDownH),
    scissors: toSvg(ScissorsSvg, ScissorsW, ScissorsH),
    xmark: toSvg(XmarkSvg, XmarkW, XmarkH),
    arrowRightLong: toSvg(ArrowRightLongSvg, ArrowRightLongW, ArrowRightLongH),
    plus: toSvg(PlusSvg, PlusW, PlusH),
    squarePlus: toSvg(SquarePlusSvg, SquarePlusW, SquarePlusH),
    squareMinus: toSvg(SquareMinusSvg, SquareMinusW, SquareMinusH),
    play: toSvg(PlaySvg, PlayW, PlayH),
    stop: toSvg(StopSvg, StopW, StopH),
    arrowUpLong: toSvg(ArrowUpLongSvg, ArrowUpLongW, ArrowUpLongH),
    arrowDownLong: toSvg(ArrowDownLongSvg, ArrowDownLongW, ArrowDownLongH)
  };
  const linkifyIcons = {
    peertube: toSvg(body$5, width$5, height$5),
    streamable: toSvg(body$4, width$4, height$4),
    bitchute: toSvg(body$3, width$3, height$3),
    clyp: toSvg(body$2, width$2, height$2),
    pastebin: toSvg(body$1, width$1, height$1),
    twitchtv: toSvg(body, width, height),
    vocaroo: toSvg(MicrophoneSvg, MicrophoneW, MicrophoneH),
    vidlii: toSvg(PlaySvg, PlayW, PlayH),
    image: toSvg(ImageSvg, ImageW, ImageH),
    video: toSvg(FileVideoSvg, FileVideoW, FileVideoH),
    audio: toSvg(FileAudioSvg, FileAudioW, FileAudioH),
    youtube: toSvg(YoutubeSvg, YoutubeW, YoutubeH),
    twitter: toSvg(XTwitterSvg, XTwitterW, XTwitterH),
    soundcloud: toSvg(SoundcloudSvg, SoundcloudW, SoundcloudH),
    dailymotion: toSvg(DailymotionSvg, DailymotionW, DailymotionH),
    gist: toSvg(GithubSvg, GithubW, GithubH),
    vimeo: toSvg(VimeoSvg, VimeoW, VimeoH),
  };
  var Icon = {
    /** Sets an icon in an HTML element */
    set(node, name, altText) {
      const html = icons[name];
      if (!html)
        throw new Error(`Icon "${name}" not found.`);
      if (altText) {
        node.innerHTML = `<span class="icon--alt-text">${E(altText)}</span>${html}`;
      } else {
        node.innerHTML = html;
      }
    },
    setLinkify(el) {
      if (el.querySelector('.linkify-icon'))
        return;
      const iconName = [...el.classList].find(c => c in linkifyIcons);
      if (!iconName)
        return;
      $.prepend(el, $.el('span', {
        className: 'linkify-icon icon',
        innerHTML: linkifyIcons[iconName],
      }));
    },
    /** Get the raw SVG string for an icon. */
    get(name) {
      return icons[name];
    },
    /** Get the raw SVG string for an icon wrapped for use in JSX. */
    raw(name) {
      return { innerHTML: icons[name], [isEscaped]: true };
    },
  };

  const noticesRoot = $.el('div', { id: 'notifications' });
  class Notice {
      constructor(type, content, timeout, onclose) {
          this.add = this.add.bind(this);
          this.close = this.close.bind(this);
          this.timeout = timeout;
          this.onclose = onclose;
          this.el = $.el('div', {
              innerHTML: `<a href="javascript:;" class="close" title="Close">${Icon.get('xmark')}</a><div class="message"></div>`
          });
          this.el.style.opacity = 0;
          this.setType(type);
          $.on(this.el.firstElementChild, 'click', this.close);
          if (typeof content === 'string') {
              content = $.tn(content);
          }
          $.add(this.el.lastElementChild, content);
          $.ready(this.add);
      }
      setType(type) {
          this.el.className = `notification ${type}`;
      }
      add() {
          if (this.closed)
              return;
          if (d.hidden) {
              $.on(d, 'visibilitychange', this.add);
              return;
          }
          $.off(d, 'visibilitychange', this.add);
          $.add(noticesRoot, this.el);
          this.el.clientHeight; // force reflow
          this.el.style.opacity = 1;
          if (this.timeout) {
              this.timeoutId = setTimeout(this.close, this.timeout * SECOND);
          }
      }
      close() {
          if (this.timeoutId)
              clearTimeout(this.timeoutId);
          this.closed = true;
          $.off(d, 'visibilitychange', this.add);
          $.rm(this.el);
          this.onclose?.();
      }
      resetTimer() {
          if (this.timeout) {
              clearTimeout(this.timeoutId);
              this.timeoutId = setTimeout(this.close, this.timeout * SECOND);
          }
      }
  }

  // import QR from "../Posting/QR";
  var CrossOrigin = {
    binary(url, cb, headers = dict()) {
      // XXX https://forums.lanik.us/viewtopic.php?f=64&t=24173&p=78310
      // url = url.replace(/^((?:https?:)?\/\/(?:\w+\.)?(?:4chan(?:nel)?|4cdn)\.org)\/adv\//, '$1//adv/');
      url = url.replace(/^((?:https?:)?\/\/(?:\w+\.)?(?:4chan|4cdn)\.org)\/adv\//, '$1//adv/');

        const fallback = function () {
          return $.ajax(url, {
            headers,
            responseType: 'arraybuffer',
            onloadend() {
              if (this.status && this.response) {
                return cb(new Uint8Array(this.response), this.getAllResponseHeaders());
              } else {
                return cb(null);
              }
            }
          });
        };
        if ((typeof window.GM_xmlhttpRequest === 'undefined' || window.GM_xmlhttpRequest === null)) {
          fallback();
          return;
        }
        const gmOptions = {
          method: "GET",
          anonymous: true,
          url,
          headers,
          responseType: 'arraybuffer',
          overrideMimeType: 'text/plain; charset=x-user-defined',
          onload(xhr) {
            let data;
            if (xhr.response instanceof ArrayBuffer) {
              data = new Uint8Array(xhr.response);
            } else {
              const r = xhr.responseText;
              data = new Uint8Array(r.length);
              let i = 0;
              while (i < r.length) {
                data[i] = r.charCodeAt(i);
                i++;
              }
            }
            return cb(data, xhr.responseHeaders);
          },
          onerror() {
            return cb(null);
          },
          onabort() {
            return cb(null);
          }
        };
        try {
          return (GM?.xmlHttpRequest || GM_xmlhttpRequest)(gmOptions);
        } catch (error) {
          return fallback();
        }

    },
    file(url, cb) {
      return CrossOrigin.binary(url, function (data, headers) {
        if (data == null) {
          return cb(null);
        }
        let name = url.match(/([^\/?#]+)\/*(?:$|[?#])/)?.[1];
        const contentType = headers.match(/Content-Type:\s*(.*)/i)?.[1];
        const contentDisposition = headers.match(/Content-Disposition:\s*(.*)/i)?.[1];
        let mime = contentType?.match(/[^;]*/)[0] || 'application/octet-stream';
        const match = contentDisposition?.match(/\bfilename\s*=\s*"((\\"|[^"])+)"/i)?.[1] ||
          contentType?.match(/\bname\s*=\s*"((\\"|[^"])+)"/i)?.[1];
        if (match) {
          name = match.replace(/\\"/g, '"');
        }
        // if (/^text\/plain;\s*charset=x-user-defined$/i.test(mime)) {
        //   // In JS Blocker (Safari) content type comes back as 'text/plain; charset=x-user-defined'; guess from filename instead.
        //   mime = $.getOwn(QR.typeFromExtension, name.match(/[^.]*$/)[0].toLowerCase()) || 'application/octet-stream';
        // } This appears to be have been deprecated
        cb(new File([data], name, { type: mime }));
      });
    },
    Request: (function () {
      const Request = class Request {
        static initClass() {
          this.prototype.status = 0;
          this.prototype.statusText = '';
          this.prototype.response = null;
          this.prototype.responseHeaderString = null;
        }
        getResponseHeader(headerName) {
          if ((this.responseHeaders == null) && (this.responseHeaderString != null)) {
            this.responseHeaders = dict();
            for (var header of this.responseHeaderString.split('\r\n')) {
              var i;
              if ((i = header.indexOf(':')) >= 0) {
                var key = header.slice(0, i).trim().toLowerCase();
                var val = header.slice(i + 1).trim();
                this.responseHeaders[key] = val;
              }
            }
          }
          return this.responseHeaders?.[headerName.toLowerCase()] ?? null;
        }
        abort() { }
        onloadend() { }
      };
      Request.initClass();
      return Request;
    })(),
    // Attempts to fetch `url` using cross-origin privileges, if available.
    // Interface is a subset of that of $.ajax.
    // Options:
    //   `onloadend` - called with the returned object as `this` on success or error/abort/timeout.
    //   `timeout` - time limit for request
    //   `responseType` - expected response type, 'json' by default; 'json' and 'text' supported
    //   `headers` - request headers
    // Returned object properties:
    //   `status` - HTTP status (0 if connection not successful)
    //   `statusText` - HTTP status text
    //   `response` - decoded response body
    //   `abort` - function for aborting the request (silently fails on some platforms)
    //   `getResponseHeader` - function for reading response headers
    ajax(url, options = {}) {
      let gmReq;
      let { onloadend, timeout, responseType, headers } = options;
      responseType ?? (responseType = 'json');
      const req = new CrossOrigin.Request();
      req.onloadend = onloadend;

        if (window.GM?.xmlHttpRequest == null && window.GM_xmlhttpRequest == null) {
          return $.ajax(url, options);
        }
        const gmOptions = {
          method: 'GET',
          anonymous: true,
          url,
          headers,
          timeout,
          onload(xhr) {
            try {
              let response = xhr.responseText;
              if (responseType === 'json') {
                try {
                  response = JSON.parse(xhr.responseText);
                } catch (error) {
                  console.error(error);
                  console.error(xhr);
                }
              }
              $.extend(req, {
                url,
                headers,
                response,
                status: xhr.status,
                statusText: xhr.statusText,
                responseHeaderString: xhr.responseHeaders
              });
            } catch (error) { }
            return req.onloadend();
          },
          onerror() { return req.onloadend(); },
          onabort() { return req.onloadend(); },
          ontimeout() { return req.onloadend(); }
        };
        try {
          gmReq = (GM?.xmlHttpRequest || GM_xmlhttpRequest)(gmOptions);
        } catch (error) {
          return $.ajax(url, options);
        }
        if (gmReq && (typeof gmReq.abort === 'function')) {
          req.abort = function () {
            try {
              return gmReq.abort();
            } catch (error1) { }
          };
        }

      return req;
    },
    ajaxPromise(url, options = {}) {
      return new Promise((resolve) => CrossOrigin.ajax(url, { ...options, onloadend() { resolve(this); } }));
    },
    cache(url, cb) {
      return $.cache(url, cb, { ajax: CrossOrigin.ajax });
    },
    cachePromise(url) {
      return new Promise(resolve => {
        CrossOrigin.cache(url, function () { resolve(this); });
      });
    },
    permission(cb, cbFail, origins) {

      return cb();
    },
  };

  var archives = [{
    "uid": 3,
    "name": "4plebs",
    "domain": "archive.4plebs.org",
    "http": true,
    "https": true,
    "software": "foolfuuka",
    "boards": ["adv", "f", "hr", "mlpol", "mo", "o", "pol", "s4s", "sp", "tg", "trv", "tv", "x"],
    "files": ["adv", "f", "hr", "mlpol", "mo", "o", "pol", "s4s", "sp", "tg", "trv", "tv", "x"],
    "reports": true
  }, {
    "uid": 10,
    "name": "warosu",
    "domain": "warosu.org",
    "http": false,
    "https": true,
    "software": "fuuka",
    "boards": ["3", "biz", "cgl", "ck", "diy", "fa", "ic", "jp", "lit", "sci", "vr", "vt"],
    "files": ["3", "biz", "cgl", "ck", "diy", "fa", "ic", "jp", "lit", "sci", "vr", "vt"],
    "search": ["biz", "cgl", "ck", "diy", "fa", "ic", "jp", "lit", "sci", "vr", "vt"]
  }, {
    "uid": 23,
    "name": "Desuarchive",
    "domain": "desuarchive.org",
    "http": true,
    "https": true,
    "software": "foolfuuka",
    "boards": ["a", "aco", "an", "c", "cgl", "co", "d", "fit", "g", "his", "int", "k", "m", "mlp", "mu", "q", "qa", "r9k", "tg", "trash", "vr", "wsg"],
    "files": ["a", "aco", "an", "c", "cgl", "co", "d", "fit", "g", "his", "int", "k", "m", "mlp", "mu", "q", "qa", "r9k", "tg", "trash", "vr"],
    "reports": true
  }, {
    "uid": 24,
    "name": "fireden.net",
    "domain": "boards.fireden.net",
    "http": false,
    "https": true,
    "software": "foolfuuka",
    "boards": ["cm", "co", "ic", "sci", "vip", "y"],
    "files": ["cm", "co", "ic", "sci", "vip", "y"],
    "search": ["cm", "co", "ic", "sci", "y"]
  }, {
    "uid": 25,
    "name": "not arch.b4k.co",
    "domain": "arch.b4k.dev",
    "http": true,
    "https": true,
    "software": "foolfuuka",
    "boards": ["g", "mlp", "qb", "v", "vg", "vm", "vmg", "vp", "vrpg", "vst"],
    "files": ["qb", "v", "vg", "vm", "vmg", "vp", "vrpg", "vst"],
    "search": ["qb", "v", "vg", "vm", "vmg", "vp", "vrpg", "vst"]
  }, {
    "uid": 29,
    "name": "Archived.Moe",
    "domain": "archived.moe",
    "http": true,
    "https": true,
    "software": "foolfuuka",
    "boards": ["3", "a", "aco", "adv", "an", "asp", "b", "bant", "biz", "c", "can", "cgl", "ck", "cm", "co", "cock", "con", "d", "diy", "e", "f", "fa", "fap", "fit", "fitlit", "g", "gd", "gif", "h", "hc", "his", "hm", "hr", "i", "ic", "int", "jp", "k", "lgbt", "lit", "m", "mlp", "mlpol", "mo", "mtv", "mu", "n", "news", "o", "out", "outsoc", "p", "po", "pol", "pw", "q", "qa", "qb", "qst", "r", "r9k", "s", "s4s", "sci", "soc", "sp", "spa", "t", "tg", "toy", "trash", "trv", "tv", "u", "v", "vg", "vint", "vip", "vm", "vmg", "vp", "vr", "vrpg", "vst", "vt", "w", "wg", "wsg", "wsr", "x", "xs", "y"],
    "files": ["can", "cock", "con", "fap", "fitlit", "gd", "mlpol", "mo", "mtv", "outsoc", "po", "q", "qb", "qst", "spa", "vint", "vip"],
    "search": ["aco", "adv", "an", "asp", "b", "bant", "biz", "c", "can", "cgl", "ck", "cm", "cock", "con", "d", "diy", "e", "f", "fap", "fitlit", "gd", "gif", "h", "hc", "his", "hm", "hr", "i", "ic", "lgbt", "lit", "mlpol", "mo", "mtv", "n", "news", "o", "out", "outsoc", "p", "po", "pw", "q", "qa", "qst", "r", "s", "soc", "spa", "trv", "u", "vint", "vip", "vrpg", "w", "wg", "wsg", "wsr", "x", "y"],
    "reports": true
  }, {
    "uid": 36,
    "name": "palanq.win",
    "domain": "archive.palanq.win",
    "http": false,
    "https": true,
    "software": "foolfuuka",
    "boards": ["bant", "c", "con", "e", "i", "n", "news", "out", "p", "pw", "qst", "toy", "vip", "vp", "vt", "w", "wg", "wsr"],
    "files": ["bant", "c", "e", "i", "n", "news", "out", "p", "pw", "qst", "toy", "vip", "vp", "vt", "w", "wg", "wsr"],
    "reports": true
  }]
  ;

  const Redirect = {
    archives,
    /** List of archives by compatible functions. */
    data: null,
    init() {
      this.selectArchives();
      if (Conf.archiveAutoUpdate) {
        const now = Date.now();
        if (now - (2 * DAY) >= Conf.lastarchivecheck || Conf.lastarchivecheck > now)
          this.update();
      }
    },
    selectArchives() {
      const o = {
        thread: new Map(),
        threadJSON: new Map(),
        post: new Map(),
        file: new Map(),
      };
      const archives = dict();
      for (const data of Conf.archives) {
        for (const key of ['boards', 'files']) {
          if (!(data[key] instanceof Array)) {
            data[key] = [];
          }
        }
        const { uid, name, boards, files, software } = data;
        if (!['fuuka', 'foolfuuka'].includes(software)) {
          continue;
        }
        archives[JSON.stringify(uid ?? name)] = data;
        for (const boardID of boards) {
          if (!o.thread.has(boardID))
            o.thread.set(boardID, data);
          if (!o.file.has(boardID) && files.includes(boardID))
            o.file.set(boardID, data);
          if (software === 'foolfuuka') {
            if (!o.threadJSON.has(boardID))
              o.threadJSON.set(boardID, data);
            if (!o.post.has(boardID))
              o.post.set(boardID, data);
          }
        }
      }
      for (const boardID in Conf.selectedArchives) {
        const record = Conf.selectedArchives[boardID];
        for (const [type, id] of Object.entries(record)) {
          let archive;
          if ((archive = archives[JSON.stringify(id)]) && $.hasOwn(o, type)) {
            const boards = type === 'file' ? archive.files : archive.boards;
            if (boards.includes(boardID)) {
              o[type].set(boardID, archive);
            }
          }
        }
      }
      Redirect.data = o;
    },
    update(cb) {
      let url;
      const urls = [];
      const responses = [];
      let nloaded = 0;
      for (url of Conf.archiveLists.split('\n')) {
        if (url[0] !== '#') {
          url = url.trim();
          if (url) {
            urls.push(url);
          }
        }
      }
      const fail = (url, action, msg) => new Notice('warning', `Error ${action} archive data from\n${url}\n${msg}`, 20);
      const load = i => (function () {
        if (this.status !== 200) {
          return fail(urls[i], 'fetching', (this.status ? `Error ${this.statusText} (${this.status})` : 'Connection Error'));
        }
        let { response } = this;
        if (!(response instanceof Array)) {
          response = [response];
        }
        responses[i] = response;
        nloaded++;
        if (nloaded === urls.length) {
          return Redirect.parse(responses, cb);
        }
      });
      if (urls.length) {
        for (let i = 0; i < urls.length; i++) {
          url = urls[i];
          if (['[', '{'].includes(url[0])) {
            let response;
            try {
              response = JSON.parse(url);
            } catch (err) {
              fail(url, 'parsing', err.message);
              continue;
            }
            load(i).call({ status: 200, response });
          } else {
            CrossOrigin.ajax(url, { onloadend: load(i) });
          }
        }
      } else {
        Redirect.parse([], cb);
      }
    },
    parse(responses, cb) {
      const archives = [];
      const archiveUIDs = dict();
      for (const response of responses) {
        for (const data of response) {
          const uid = JSON.stringify(data.uid ?? data.name);
          if (uid in archiveUIDs) {
            $.extend(archiveUIDs[uid], data);
          } else {
            archiveUIDs[uid] = dict.clone(data);
            archives.push(data);
          }
        }
      }
      const items = { archives, lastarchivecheck: Date.now() };
      $.set(items);
      $.extend(Conf, items);
      Redirect.selectArchives();
      return cb?.();
    },
    to(dest, data) {
      const archive = (['search', 'board'].includes(dest) ? Redirect.data.thread : Redirect.data[dest]).get(data.boardID);
      if (!archive) {
        return '';
      }
      return Redirect[dest](archive, data);
    },
    protocol(archive) {
      let { protocol } = location;
      if (!$.getOwn(archive, protocol.slice(0, -1))) {
        protocol = protocol === 'https:' ? 'http:' : 'https:';
      }
      return `${protocol}//`;
    },
    thread(archive, { boardID, threadID, postID }) {
      // Keep the post number only if the location.hash was sent f.e.
      let path = threadID ?
        `${boardID}/thread/${threadID}`
        :
          `${boardID}/post/${postID}`;
      if (archive.software === 'foolfuuka') {
        path += '/';
      }
      if (threadID && postID) {
        path += archive.software === 'foolfuuka' ? `#${postID}` : `#p${postID}`;
      }
      return `${Redirect.protocol(archive)}${archive.domain}/${path}`;
    },
    threadJSON(archive, { boardID, threadID }) {
      return `${Redirect.protocol(archive)}${archive.domain}/_/api/chan/thread/?board=${boardID}&num=${threadID}`;
    },
    post(archive, { boardID, postID }) {
      // For fuuka-based archives:
      // https://github.com/eksopl/fuuka/issues/27
      const protocol = Redirect.protocol(archive);
      const url = `${protocol}${archive.domain}/_/api/chan/post/?board=${boardID}&num=${postID}`;
      if (!Redirect.securityCheck(url)) {
        return '';
      }
      return url;
    },
    file(archive, { boardID, filename }) {
      if (!filename) {
        return '';
      }
      if (boardID === 'f') {
        filename = encodeURIComponent($.unescape(decodeURIComponent(filename)));
      } else {
        if (/[sm]\.jpg$/.test(filename)) {
          return '';
        }
      }
      if (archive.name.endsWith('arch.b4k.co') || archive.name.endsWith('Desuarchive')) {
        const [timeStamp, ext] = filename.split('.');
        if (timeStamp.length > 13) {
          // remove last 3 digits
          filename = `${timeStamp.slice(0, -3)}.${ext}`;
        }
      }
      return `${Redirect.protocol(archive)}${archive.domain}/${boardID}/full_image/${filename}`;
    },
    board(archive, { boardID }) {
      return `${Redirect.protocol(archive)}${archive.domain}/${boardID}/`;
    },
    search(archive, { boardID, type, value }) {
      type = type === 'name' ? 'username' : type === 'MD5' ? 'image' : type;
      if (type === 'capcode') {
        // https://github.com/pleebe/FoolFuuka/blob/bf4224eed04637a4d0bd4411c2bf5f9945dfec0b/src/Model/Search.php#L363
        value = $.getOwn({
          'Developer': 'dev',
          'Verified': 'ver'
        }, value) || value.toLowerCase();
      } else if (type === 'image') {
        value = value.replace(/[+/=]/g, c => ({ '+': '-', '/': '_', '=': '' })[c]);
      }
      value = encodeURIComponent(value);
      const path = archive.software === 'foolfuuka' ?
        `${boardID}/search/${type}/${value}/`
        : type === 'image' ? `${boardID}/image/${value}`
          : `${boardID}/?task=search2&search_${type}=${value}`;
      return `${Redirect.protocol(archive)}${archive.domain}/${path}`;
    },
    report(boardID) {
      const urls = [];
      for (const archive of Conf.archives) {
        const { software, https, reports, boards, name, domain } = archive;
        if ((software === 'foolfuuka') && https && reports && boards instanceof Array && boards.includes(boardID)) {
          urls.push([name, `https://${domain}/_/api/chan/offsite_report/`]);
        }
      }
      return urls;
    },
    securityCheck(url) {
      return /^https:\/\//.test(url) ||
        (location.protocol === 'http:') ||
        Conf['Exempt Archives from Encryption'];
    },
    navigate(dest, data, alternative) {
      if (!Redirect.data) {
        Redirect.init();
      }
      const url = Redirect.to(dest, data);
      if (url && (Redirect.securityCheck(url) ||
        confirm(`Redirect to ${url}?\n\nYour connection will not be encrypted.`))) {
        return location.replace(url);
      } else if (alternative) {
        return location.replace(alternative);
      }
    }
  };

  var BoardConfig = {
      cbs: [],
      init() {
          let middle;
          if (g.SITE.software !== 'yotsuba') {
              return;
          }
          const now = Date.now();
          if (now - (2 * HOUR) >= ((middle = Conf.boardConfig.lastChecked || 0)) || middle > now) {
              return $.ajax(`${location.protocol}//a.4cdn.org/boards.json`, { onloadend: this.load });
          }
          else {
              const { boards } = Conf.boardConfig;
              return this.set(boards);
          }
      },
      load() {
          let boards;
          if ((this.status === 200) && this.response && this.response.boards) {
              boards = dict();
              for (var board of this.response.boards) {
                  boards[board.board] = board;
              }
              $.set('boardConfig', { boards, lastChecked: Date.now() });
          }
          else {
              ({ boards } = Conf.boardConfig);
              const err = (() => {
                  switch (this.status) {
                      case 0: return 'Connection Error';
                      case 200: return 'Invalid Data';
                      default: return `Error ${this.statusText} (${this.status})`;
                  }
              })();
              new Notice('warning', `Failed to load board configuration. ${err}`, 20);
          }
          return BoardConfig.set(boards);
      },
      set(boards) {
          this.boards = boards;
          for (var ID in g.boards) {
              var board = g.boards[ID];
              board.config = this.boards[ID] || {};
          }
          for (var cb of this.cbs) {
              $.queueTask(cb);
          }
      },
      ready(cb) {
          if (this.boards) {
              return cb();
          }
          else {
              return this.cbs.push(cb);
          }
      },
      sfwBoards(sfw) {
          return (() => {
              const result = [];
              const object = this.boards || Conf.boardConfig.boards;
              for (var board in object) {
                  var data = object[board];
                  if (!!data.ws_board === sfw) {
                      result.push(board);
                  }
              }
              return result;
          })();
      },
      // isSFW(board) {
      //   return !!(this.boards || Conf.boardConfig.boards)[board]?.ws_board;
      // },
      //
      // domain(board) {
      //   // return `boards.${BoardConfig.isSFW(board) ? '4channel' : '4chan'}.org`;
      //   return 'boards.4chan.org';
      // },
      isArchived(board) {
          // assume archive exists if no data available to prevent cleaning of archived threads
          const data = (this.boards || Conf.boardConfig.boards)[board];
          return !data || data.is_archived;
      },
      noAudio(boardID) {
          if (g.SITE.software !== 'yotsuba') {
              return false;
          }
          const boards = this.boards || Conf.boardConfig.boards;
          return boards && boards[boardID] && !boards[boardID].webm_audio;
      },
      title(boardID) {
          return (this.boards || Conf.boardConfig.boards)?.[boardID]?.title || '';
      }
  };

  class SimpleDict {
    constructor() {
      this.keys = [];
    }
    push(key, data) {
      key = `${key}`;
      if (!this[key]) {
        this.keys.push(key);
      }
      this[key] = data;
    }
    insert(key, data, compare = (lastKey, key) => (+lastKey) < (+key)) {
      const keyString = key.toString();
      if (keyString in this) {
        this[keyString] = data;
        return this.keys.indexOf(keyString);
      }
      const length = this.keys.length;
      if (!length || compare(this.lastKey(), key)) {
        this.push(key, data);
        return length;
      }
      let indexOfNext = this.keys.findIndex(k => !compare(k, key));
      if (indexOfNext === -1) {
        this.push(key, data);
      } else {
        this[keyString] = data;
        this.keys.splice(indexOfNext, 0, keyString);
      }
      return indexOfNext;
    }
    insertAt(key, index, data) {
      this[key] = data;
      this.keys.splice(index, 0, key);
    }
    rm(key) {
      let i;
      key = `${key}`;
      if ((i = this.keys.indexOf(key)) !== -1) {
        this.keys.splice(i, 1);
        delete this[key];
      }
    }
    forEach(fn) {
      for (var key of this.keys) {
        fn(this[key]);
      }
    }
    get(key) {
      if (key === 'keys') {
        return undefined;
      } else {
        return $.getOwn(this, key);
      }
    }
    lastKey() {
      return this.keys[this.keys.length - 1];
    }
    last() {
      return this.keys.length ? this[this.keys.length - 1] : undefined;
    }
  }

  class Board {
    toString() { return this.ID; }
    constructor(ID) {
      this.ID = ID;
      this.boardID = this.ID;
      this.siteID = g.SITE.ID;
      this.threads = new SimpleDict();
      this.posts = new SimpleDict();
      this.config = BoardConfig.boards?.[this.ID] || {};
      g.boards[this] = this;
    }
    cooldowns() {
      const c2 = (this.config || {}).cooldowns || {};
      const c = {
        thread: c2.threads || 0,
        reply: c2.replies || 0,
        image: c2.images || 0,
        thread_global: 300 // inter-board thread cooldown
      };
      // Pass users have reduced cooldowns.
      if (d.cookie.indexOf('pass_enabled=1') >= 0) {
        for (var key of ['reply', 'image']) {
          c[key] = Math.ceil(c[key] / 2);
        }
      }
      return c;
    }
  }

  class Callbacks {
      static initClass() {
          this.Post = new Callbacks('Post');
          this.Thread = new Callbacks('Thread');
          this.CatalogThread = new Callbacks('Catalog Thread');
          this.CatalogThreadNative = new Callbacks('Catalog Thread');
      }
      constructor(type) {
          this.type = type;
          this.keys = [];
      }
      push({ name, cb }) {
          if (!this[name]) {
              this.keys.push(name);
          }
          return this[name] = cb;
      }
      execute(node, keys = this.keys, force = false) {
          let errors;
          if (node.callbacksExecuted && !force) {
              return;
          }
          node.callbacksExecuted = true;
          for (var name of keys) {
              try {
                  this[name]?.call(node);
              }
              catch (err) {
                  if (!errors) {
                      errors = [];
                  }
                  errors.push({
                      message: ['"', name, '" crashed on node ', this.type, ' No.', node.ID, ' (', node.board, ').'].join(''),
                      error: err,
                      html: node.nodes?.root?.outerHTML
                  });
              }
          }
          if (errors) {
              return Main.handleErrors(errors);
          }
      }
  }
  Callbacks.initClass();

  class Thread {
    toString() { return this.ID; }
    constructor(ID, board) {
      this.board = board;
      this.ID = +ID;
      this.threadID = this.ID;
      this.boardID = this.board.ID;
      this.siteID = g.SITE.ID;
      this.fullID = `${this.board}.${this.ID}`;
      this.posts = new SimpleDict();
      this.isDead = false;
      this.isHidden = false;
      this.isSticky = false;
      this.isClosed = false;
      this.isArchived = false;
      this.postLimit = false;
      this.fileLimit = false;
      this.lastPost = 0;
      this.ipCount = undefined;
      this.json = null;
      this.OP = null;
      this.catalogView = null;
      this.nodes =
        { root: null };
      this.board.threads.push(this.ID, this);
      g.threads.push(this.fullID, this);
    }
    setPage(pageNum) {
      let icon;
      const { info, reply } = this.OP.nodes;
      if (!(icon = $('.page-num', info))) {
        icon = $.el('span', { className: 'page-num' });
        $.replace(reply.parentNode.previousSibling, [$.tn(' '), icon, $.tn(' ')]);
      }
      icon.title = `This thread is on page ${pageNum} in the original index.`;
      icon.textContent = `[${pageNum}]`;
      if (this.catalogView) {
        return this.catalogView.nodes.pageCount.textContent = pageNum;
      }
    }
    setCount(type, count, reachedLimit) {
      if (!this.catalogView) {
        return;
      }
      const el = this.catalogView.nodes[`${type}Count`];
      el.textContent = count;
      return (reachedLimit ? $.addClass : $.rmClass)(el, 'warning');
    }
    setStatus(type, status) {
      const name = `is${type}`;
      if (this[name] === status) {
        return;
      }
      this[name] = status;
      if (!this.OP) {
        return;
      }
      this.setIcon('Sticky', this.isSticky);
      this.setIcon('Closed', this.isClosed && !this.isArchived);
      return this.setIcon('Archived', this.isArchived);
    }
    setIcon(type, status) {
      const typeLC = type.toLowerCase();
      let icon = $(`.${typeLC}Icon`, this.OP.nodes.info);
      if (!!icon === status) {
        return;
      }
      if (!status) {
        $.rm(icon.previousSibling);
        $.rm(icon);
        if (this.catalogView) {
          $.rm($(`.${typeLC}Icon`, this.catalogView.nodes.icons));
        }
        return;
      }
      icon = $.el('img', {
        src: `${g.SITE.Build.staticPath}${typeLC}${g.SITE.Build.gifIcon}`,
        alt: type,
        title: type,
        className: `${typeLC}Icon retina`
      });
      if (g.BOARD.ID === 'f') {
        icon.style.cssText = 'height: 18px; width: 18px;';
      }
      const root = (type !== 'Sticky') && this.isSticky ?
        $('.stickyIcon', this.OP.nodes.info)
        :
          $('.page-num', this.OP.nodes.info) || this.OP.nodes.quote;
      $.after(root, [$.tn(' '), icon]);
      if (!this.catalogView) {
        return;
      }
      return ((type === 'Sticky') && this.isClosed ? $.prepend : $.add)(this.catalogView.nodes.icons, icon.cloneNode());
    }
    kill() {
      return this.isDead = true;
    }
    collect() {
      let n = 0;
      this.posts.forEach(function (post) {
        if (post.clones.length) {
          return n++;
        } else {
          return post.collect();
        }
      });
      if (!n) {
        g.threads.rm(this.fullID);
        return this.board.threads.rm(this);
      }
    }
  }

  class CatalogThreadNative {
      toString() { return this.ID; }
      constructor(root) {
          this.nodes = {
              root,
              thumb: $(g.SITE.selectors.catalog.thumb, root)
          };
          this.siteID = g.SITE.ID;
          this.boardID = this.nodes.thumb.parentNode.pathname.split(/\/+/)[1];
          this.board = g.boards[this.boardID] || new Board(this.boardID);
          this.ID = (this.threadID = +(root.dataset.id || root.id).match(/\d*$/)[0]);
          this.thread = this.board.threads.get(this.ID) || new Thread(this.ID, this.board);
      }
  }

  /**
   * This class handles data related to specific threads or posts. This data is automatically cleaned up when the thread
   * ages out.
   * TODO At this moment, .get and .set aren't fully typed yet.
   */
  class DataBoard {
    constructor(key, sync, dontClean = false) {
      this.changes = [];
      this.onSync = this.onSync.bind(this);
      this.key = key;
      this.initData(Conf[this.key]);
      $.sync(this.key, this.onSync);
      if (!dontClean)
        this.clean();
      if (!sync)
        return;
      // Chrome also fires the onChanged callback on the current tab,
      // so we only start syncing when we're ready.
      var init = () => {
        $.off(d, '4chanXInitFinished', init);
        this.sync = sync;
      };
      $.on(d, '4chanXInitFinished', init);
    }
    initData(data) {
      let boards;
      this.data = data;
      if (this.data.boards) {
        let lastChecked;
        ({ boards, lastChecked } = this.data);
        this.data['4chan.org'] = { boards, lastChecked };
        delete this.data.boards;
        delete this.data.lastChecked;
      }
      return this.data[g.SITE.ID] || (this.data[g.SITE.ID] = { boards: dict() });
    }
    save(change, cb) {
      change();
      this.changes.push(change);
      return $.get(this.key, { boards: dict() }, (items) => {
        if (!this.changes.length) {
          return;
        }
        const needSync = ((items[this.key].version || 0) > (this.data.version || 0));
        if (needSync) {
          this.initData(items[this.key]);
          for (change of this.changes) {
            change();
          }
        }
        this.changes = [];
        this.data.version = (this.data.version || 0) + 1;
        return $.set(this.key, this.data, () => {
          if (needSync) {
            this.sync?.();
          }
          return cb?.();
        });
      });
    }
    forceSync(cb) {
      return $.get(this.key, { boards: dict() }, (items) => {
        if ((items[this.key].version || 0) > (this.data.version || 0)) {
          this.initData(items[this.key]);
          for (var change of this.changes) {
            change();
          }
          this.sync?.();
        }
        return cb?.();
      });
    }
    delete({ siteID, boardID, threadID, postID }, cb) {
      if (!siteID) {
        siteID = g.SITE.ID;
      }
      if (!this.data[siteID]) {
        return;
      }
      this.save(() => {
        if (postID) {
          if (!this.data[siteID].boards[boardID]?.[threadID]) {
            return;
          }
          delete this.data[siteID].boards[boardID][threadID][postID];
          this.deleteIfEmpty({ siteID, boardID, threadID });
        } else if (threadID) {
          if (!this.data[siteID].boards[boardID]) {
            return;
          }
          delete this.data[siteID].boards[boardID][threadID];
          this.deleteIfEmpty({ siteID, boardID });
        } else {
          delete this.data[siteID].boards[boardID];
        }
      }, cb);
    }
    deleteIfEmpty({ siteID, boardID, threadID }) {
      if (!this.data[siteID]) {
        return;
      }
      if (threadID) {
        if (!Object.keys(this.data[siteID].boards[boardID][threadID]).length) {
          delete this.data[siteID].boards[boardID][threadID];
          this.deleteIfEmpty({ siteID, boardID });
        }
      } else if (!Object.keys(this.data[siteID].boards[boardID]).length) {
        delete this.data[siteID].boards[boardID];
      }
    }
    set(data, cb) {
      this.save(() => {
        this.setUnsafe(data);
      }, cb);
    }
    setUnsafe({ siteID, boardID, threadID, postID, val }) {
      if (!siteID) {
        siteID = g.SITE.ID;
      }
      if (!this.data[siteID])
        this.data[siteID] = { boards: dict() };
      const boards = this.data[siteID].boards;
      if (postID !== undefined) {
        let base;
        (((base = boards[boardID] || (boards[boardID] = dict())))[threadID] || (base[threadID] = dict()))[postID] = val;
      } else if (threadID !== undefined) {
        (boards[boardID] || (boards[boardID] = dict()))[threadID] = val;
      } else {
        boards[boardID] = val;
      }
    }
    extend({ siteID, boardID, threadID, postID, val }, cb) {
      this.save(() => {
        const oldVal = this.get({ siteID, boardID, threadID, postID, defaultValue: dict() });
        for (var key in val) {
          var subVal = val[key];
          if (typeof subVal === 'undefined') {
            delete oldVal[key];
          } else {
            oldVal[key] = subVal;
          }
        }
        this.setUnsafe({ siteID, boardID, threadID, postID, val: oldVal });
      }, cb);
    }
    setLastChecked(key = 'lastChecked') {
      this.save(() => {
        this.data[key] = Date.now();
      });
    }
    get({ siteID, boardID, threadID, postID, defaultValue }) {
      let board, val;
      if (!siteID) {
        siteID = g.SITE.ID;
      }
      if (board = this.data[siteID]?.boards[boardID]) {
        let thread;
        if (threadID == null) {
          if (postID != null) {
            for (thread = 0; thread < board.length; thread++) {
              if (postID in thread) {
                val = thread[postID];
                break;
              }
            }
          } else {
            val = board;
          }
        } else if (thread = board[threadID]) {
          val = (postID != null) ? thread[postID] : thread;
        }
      }
      return val || defaultValue;
    }
    clean() {
      let boardID, middle;
      const siteID = g.SITE.ID;
      for (boardID in this.data[siteID].boards) {
        this.deleteIfEmpty({ siteID, boardID });
      }
      const now = Date.now();
      if (now - (2 * HOUR) >= ((middle = this.data[siteID].lastChecked || 0)) || middle > now) {
        this.data[siteID].lastChecked = now;
        for (boardID in this.data[siteID].boards) {
          this.ajaxClean(boardID);
        }
      }
    }
    ajaxClean(boardID) {
      const that = this;
      const siteID = g.SITE.ID;
      const threadsList = g.SITE.urls.threadsListJSON?.({ siteID, boardID });
      if (!threadsList) {
        return;
      }
      $.cache(threadsList, function () {
        if (this.status !== 200) {
          return;
        }
        const archiveList = g.SITE.urls.archiveListJSON?.({ siteID, boardID });
        if (!archiveList)
          return that.ajaxCleanParse(boardID, this.response);
        const response1 = this.response;
        $.cache(archiveList, function () {
          if ((this.status !== 200) && (!!g.SITE.archivedBoardsKnown || (this.status !== 404))) {
            return;
          }
          that.ajaxCleanParse(boardID, response1, this.response);
        });
      });
    }
    ajaxCleanParse(boardID, response1, response2) {
      let board, ID;
      const siteID = g.SITE.ID;
      if (!(board = this.data[siteID].boards[boardID]))
        return;
      const threads = dict();
      if (response1) {
        for (var page of response1) {
          for (var thread of page.threads) {
            ID = thread.no;
            if (ID in board) {
              threads[ID] = board[ID];
            }
          }
        }
      }
      if (response2) {
        for (ID of response2) {
          if (ID in board)
            threads[ID] = board[ID];
        }
      }
      this.data[siteID].boards[boardID] = threads;
      this.deleteIfEmpty({ siteID, boardID });
      $.set(this.key, this.data);
    }
    onSync(data) {
      if ((data.version || 0) <= (this.data.version || 0)) {
        return;
      }
      this.initData(data);
      this.sync?.();
    }
  }
  DataBoard.keys = [
    'hiddenThreads',
    'hiddenPosts',
    'hiddenPosterIds',
    'lastReadPosts',
    'yourPosts',
    'watchedThreads',
    'watcherLastModified',
    'customTitles',
  ];

  var Get = {
      url(type, IDs, ...args) {
          let f, site;
          if ((site = g.sites[IDs.siteID]) && (f = $.getOwn(site.urls, type))) {
              return f(IDs, ...args);
          }
          else {
              return undefined;
          }
      },
      threadExcerpt(thread) {
          const { OP } = thread;
          const excerpt = (`/${decodeURIComponent(thread.board.ID)}/ - `) + (OP.info.subject?.trim() ||
              OP.commentDisplay().replace(/\n+/g, ' // ') ||
              OP.file?.name ||
              `No.${OP}`);
          if (excerpt.length > 73) {
              return `${excerpt.slice(0, 70)}...`;
          }
          return excerpt;
      },
      threadFromRoot(root) {
          if (root == null) {
              return null;
          }
          const { board } = root.dataset;
          return g.threads.get(`${board ? encodeURIComponent(board) : g.BOARD.ID}.${root.id.match(/\d*$/)[0]}`);
      },
      threadFromNode(node) {
          return Get.threadFromRoot($.x(`ancestor-or-self::${g.SITE.xpath.thread}`, node));
      },
      postFromRoot(root) {
          if (root == null) {
              return null;
          }
          const post = g.posts.get(root.dataset.fullID);
          const index = root.dataset.clone;
          if (index) {
              return post.clones[+index];
          }
          else {
              return post;
          }
      },
      postFromNode(root) {
          return Get.postFromRoot($.x(`ancestor-or-self::${g.SITE.xpath.postContainer}[1]`, root));
      },
      postDataFromLink(link) {
          let boardID, postID, threadID;
          if (link.dataset.postID) { // resurrected quote
              ({ boardID, threadID, postID } = link.dataset);
              if (!threadID) {
                  threadID = 0;
              }
          }
          else {
              const match = link.href.match(g.SITE.regexp.quotelink);
              [boardID, threadID, postID] = match.slice(1);
              if (!postID) {
                  postID = threadID;
              }
          }
          return {
              boardID,
              threadID: +threadID,
              postID: +postID
          };
      },
      allQuotelinksLinkingTo(post) {
          // Get quotelinks & backlinks linking to the given post.
          const quotelinks = [];
          const { posts } = g;
          const { fullID } = post;
          const handleQuotes = function (qPost, type) {
              quotelinks.push(...(qPost.nodes[type] || []));
              for (var clone of qPost.clones) {
                  quotelinks.push(...(clone.nodes[type] || []));
              }
          };
          // First: In every posts, if it did quote this post, get all their backlinks.
          posts.forEach(function (qPost) {
              if (qPost.quotes.includes(fullID)) {
                  return handleQuotes(qPost, 'quotelinks');
              }
          });
          // Second: If we have quote backlinks: in all posts this post quoted and their clones, get all of their backlinks.
          if (Conf['Quote Backlinks']) {
              for (var quote of post.quotes) {
                  var qPost;
                  if ((qPost = posts.get(quote))) {
                      handleQuotes(qPost, 'backlinks');
                  }
              }
          }
          // Third: Filter out irrelevant quotelinks.
          return quotelinks.filter(function (quotelink) {
              const { boardID, postID } = Get.postDataFromLink(quotelink);
              return (boardID === post.board.ID) && (postID === post.ID);
          });
      }
  };

  var userCss = `/* Board title rice */
div.boardTitle {
  font-weight: 400 !important;
}
:root.yotsuba div.boardTitle {
  font-family: sans-serif !important;
  text-shadow: 1px 1px 1px rgba(100,0,0,0.6);
}
:root.yotsuba-b div.boardTitle {
  font-family: sans-serif !important;
  text-shadow: 1px 1px 1px rgba(105,10,15,0.6);
}
:root.photon div.boardTitle {
  font-family: sans-serif !important;
  text-shadow: 1px 1px 1px rgba(0,74,153,0.6);
}
:root.tomorrow div.boardTitle {
  font-family: sans-serif !important;
  text-shadow: 1px 1px 1px rgba(167,170,168,0.6);
}`;

  var banners = ["0.jpg", "1.jpg", "2.jpg", "4.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "24.jpg", "25.jpg", "26.jpg", "28.jpg", "29.jpg", "33.jpg", "38.jpg", "39.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg", "52.jpg", "54.jpg", "57.jpg", "59.jpg", "60.jpg", "61.jpg", "64.jpg", "66.jpg", "67.jpg", "69.jpg", "71.jpg", "72.jpg", "76.jpg", "77.jpg", "81.jpg", "82.jpg", "83.jpg", "84.jpg", "88.jpg", "90.jpg", "91.jpg", "96.jpg", "98.jpg", "99.jpg", "100.jpg", "104.jpg", "106.jpg", "116.jpg", "119.jpg", "137.jpg", "140.jpg", "148.jpg", "149.jpg", "150.jpg", "154.jpg", "156.jpg", "157.jpg", "158.jpg", "159.jpg", "161.jpg", "162.jpg", "164.jpg", "165.jpg", "166.jpg", "167.jpg", "168.jpg", "169.jpg", "170.jpg", "171.jpg", "172.jpg", "173.jpg", "174.jpg", "175.jpg", "176.jpg", "178.jpg", "179.jpg", "180.jpg", "181.jpg", "182.jpg", "183.jpg", "186.jpg", "189.jpg", "190.jpg", "192.jpg", "193.jpg", "194.jpg", "197.jpg", "198.jpg", "200.jpg", "201.jpg", "202.jpg", "203.jpg", "205.jpg", "206.jpg", "207.jpg", "208.jpg", "210.jpg", "213.jpg", "214.jpg", "215.jpg", "216.jpg", "218.jpg", "219.jpg", "220.jpg", "221.jpg", "222.jpg", "223.jpg", "224.jpg", "227.jpg", "0.png", "1.png", "2.png", "3.png", "5.png", "6.png", "9.png", "10.png", "11.png", "12.png", "14.png", "16.png", "19.png", "20.png", "21.png", "22.png", "23.png", "24.png", "26.png", "27.png", "28.png", "29.png", "30.png", "31.png", "32.png", "33.png", "34.png", "37.png", "39.png", "40.png", "41.png", "42.png", "43.png", "44.png", "45.png", "48.png", "49.png", "50.png", "51.png", "52.png", "53.png", "57.png", "58.png", "59.png", "64.png", "66.png", "67.png", "68.png", "69.png", "70.png", "71.png", "72.png", "76.png", "78.png", "79.png", "81.png", "82.png", "85.png", "86.png", "87.png", "89.png", "95.png", "98.png", "100.png", "101.png", "102.png", "105.png", "106.png", "107.png", "109.png", "110.png", "111.png", "112.png", "113.png", "114.png", "115.png", "116.png", "118.png", "119.png", "120.png", "121.png", "122.png", "123.png", "126.png", "128.png", "130.png", "134.png", "136.png", "138.png", "139.png", "140.png", "142.png", "145.png", "146.png", "149.png", "150.png", "151.png", "152.png", "153.png", "154.png", "155.png", "156.png", "157.png", "158.png", "159.png", "160.png", "163.png", "164.png", "165.png", "166.png", "167.png", "168.png", "169.png", "170.png", "171.png", "172.png", "173.png", "174.png", "178.png", "179.png", "180.png", "181.png", "182.png", "184.png", "186.png", "188.png", "190.png", "192.png", "193.png", "194.png", "195.png", "196.png", "197.png", "198.png", "200.png", "202.png", "203.png", "205.png", "206.png", "207.png", "209.png", "212.png", "213.png", "214.png", "216.png", "217.png", "218.png", "219.png", "220.png", "221.png", "222.png", "223.png", "224.png", "225.png", "226.png", "229.png", "231.png", "232.png", "233.png", "234.png", "235.png", "237.png", "238.png", "239.png", "240.png", "241.png", "242.png", "244.png", "245.png", "246.png", "247.png", "248.png", "249.png", "250.png", "253.png", "254.png", "255.png", "256.png", "257.png", "258.png", "259.png", "260.png", "262.png", "268.png", "0.gif", "1.gif", "2.gif", "3.gif", "4.gif", "5.gif", "6.gif", "7.gif", "8.gif", "9.gif", "10.gif", "12.gif", "13.gif", "14.gif", "15.gif", "16.gif", "18.gif", "19.gif", "20.gif", "21.gif", "22.gif", "23.gif", "24.gif", "28.gif", "29.gif", "30.gif", "33.gif", "34.gif", "35.gif", "36.gif", "37.gif", "39.gif", "40.gif", "42.gif", "44.gif", "45.gif", "46.gif", "48.gif", "50.gif", "52.gif", "54.gif", "55.gif", "57.gif", "58.gif", "59.gif", "60.gif", "61.gif", "63.gif", "64.gif", "66.gif", "67.gif", "68.gif", "69.gif", "70.gif", "72.gif", "73.gif", "75.gif", "76.gif", "77.gif", "78.gif", "80.gif", "81.gif", "82.gif", "83.gif", "86.gif", "87.gif", "88.gif", "92.gif", "93.gif", "94.gif", "95.gif", "96.gif", "97.gif", "98.gif", "99.gif", "100.gif", "101.gif", "102.gif", "103.gif", "104.gif", "105.gif", "106.gif", "108.gif", "109.gif", "110.gif", "111.gif", "112.gif", "113.gif", "115.gif", "116.gif", "117.gif", "118.gif", "119.gif", "120.gif", "122.gif", "123.gif", "124.gif", "127.gif", "129.gif", "130.gif", "131.gif", "134.gif", "135.gif", "136.gif", "138.gif", "139.gif", "141.gif", "144.gif", "146.gif", "148.gif", "149.gif", "153.gif", "154.gif", "155.gif", "157.gif", "158.gif", "159.gif", "160.gif", "161.gif", "162.gif", "164.gif", "166.gif", "167.gif", "168.gif", "169.gif", "170.gif", "171.gif", "172.gif", "173.gif", "174.gif", "175.gif", "176.gif", "177.gif", "178.gif", "181.gif", "182.gif", "183.gif", "185.gif", "186.gif", "187.gif", "188.gif", "189.gif", "190.gif", "191.gif", "192.gif", "193.gif", "195.gif", "196.gif", "197.gif", "200.gif", "201.gif", "202.gif", "203.gif", "204.gif", "205.gif", "206.gif", "207.gif", "208.gif", "209.gif", "210.gif", "211.gif", "212.gif", "213.gif", "214.gif", "215.gif", "216.gif", "217.gif", "219.gif", "220.gif", "221.gif", "222.gif", "224.gif", "225.gif", "226.gif", "227.gif", "228.gif", "230.gif", "232.gif", "233.gif", "234.gif", "235.gif", "238.gif", "240.gif", "241.gif", "243.gif", "244.gif", "245.gif", "246.gif", "247.gif", "249.gif", "250.gif", "251.gif", "253.gif"];

  const Config = {
      main: {
          'Miscellaneous': {
              'JSON Index': [
                  true,
                  'Replace the original board index with one supporting searching, sorting, infinite scrolling, and a catalog mode.'
              ],
              [`Use ${meta.name} Catalog`]: [
                  true,
                  `Link to ${meta.name}'s catalog instead of the native 4chan one.`,
                  1
              ],
              'Index Refresh Notifications': [
                  false,
                  'Show a notice at the top of the page when the index is refreshed.',
                  1
              ],
              'Follow Cursor': [
                  true,
                  'Image Hover and Quote Preview move with the mouse cursor.'
              ],
              'Open Threads in New Tab': [
                  false,
                  `Make links to threads in the index / ${meta.name} catalog open in a new tab.`
              ],
              'External Catalog': [
                  false,
                  'Link to external catalog instead of the internal one.'
              ],
              'Catalog Links': [
                  false,
                  'Add toggle link in header menu to turn Navigation links into links to each board\'s catalog.'
              ],
              'Announcement Hiding': [
                  true,
                  'Add button to hide 4chan announcements.'
              ],
              'Desktop Notifications': [
                  true,
                  `Enables desktop notifications across various ${meta.name} features.`
              ],
              '404 Redirect': [
                  true,
                  'Redirect dead threads and images to the archives.'
              ],
              'Archive Report': [
                  true,
                  'Enable reporting posts to supported archives.'
              ],
              'Exempt Archives from Encryption': [
                  false,
                  'Permit loading content from, and warningless redirects to, HTTP-only archives from HTTPS pages.'
              ],
              'Keybinds': [
                  true,
                  'Bind actions to keyboard shortcuts.'
              ],
              'Time Formatting': [
                  true,
                  'Localize and format timestamps. Has more options on the "Advanced" tab.'
              ],
              'Comment Expansion': [
                  true,
                  'Expand comments that are too long to display on the index. Not applicable with JSON Index.'
              ],
              'File Info Formatting': [
                  true,
                  'Reformat the file information.'
              ],
              'Thread Expansion': [
                  true,
                  'Add buttons to expand threads.'
              ],
              'Index Navigation': [
                  false,
                  'Add buttons to navigate between threads.'
              ],
              'Reply Navigation': [
                  false,
                  'Add buttons to navigate to top / bottom of thread.'
              ],
              'Unique ID and Capcode Navigation': [
                  false,
                  'Add buttons to navigate to posts having the same unique ID or capcode.'
              ],
              'Custom Board Titles': [
                  true,
                  'Allow editing of the board title and subtitle by ctrl/\u2318+clicking them.'
              ],
              'Persistent Custom Board Titles': [
                  false,
                  'Force custom board titles to be persistent, even if the board titles are updated.',
                  1
              ],
              'Show Updated Notifications': [
                  true,
                  `Show notifications when ${meta.name} is successfully updated.`
              ],
              'Color User IDs': [
                  true,
                  'Assign unique colors to user IDs on boards that use them'
              ],
              'Count Posts by ID': [
                  true,
                  'Display number of posts in the thread when hovering over an ID.'
              ],
              'Remove Spoilers': [
                  false,
                  'Remove all spoilers in text.'
              ],
              'Reveal Spoilers': [
                  false,
                  'Indicate spoilers if Remove Spoilers is enabled, or make the text appear hovered if Remove Spoiler is disabled.'
              ],
              'Normalize URL': [
                  true,
                  'Rewrite the URL of the current page, removing slugs and excess slashes, and changing /res/ to /thread/.'
              ],
              'Disable Autoplaying Sounds': [
                  false,
                  'Prevent sounds on the page from autoplaying.'
              ],
              'Disable Native Extension': [
                  true,
                  `${meta.name} is NOT designed to work with the native extension.`
              ],
              'Enable Native Flash Embedding': [
                  true,
                  'Activate the native extension\'s Flash embedding if the native extension is disabled.'
              ],
              'Export History': [
                  true,
                  'Export last read, your posts, etc. when exporting the setting'
              ],
              'Ask to Export History': [
                  true,
                  'Ask if history should be exported when settings are exported.'
              ],
              'Scroll Markers': [
                  true,
                  'Mark your posts and replies to them on the scroll bar. Relies on the "Highlight Posts Quoting You" and ' +
                      '"Highlight Own Posts" settings'
              ],
          },
          'Linkification': {
              'Linkify': [
                  true,
                  'Convert text into links where applicable.'
              ],
              'Link Title': [
                  true,
                  'Replace the link of a supported site with its actual title.',
                  1
              ],
              'Link Title in the catalog': [
                  false,
                  'Replace the link of a supported site with its actual title in the catalog too. ' +
                      'Speed up performance for boards that have many embeds (e.g /vt/) if turned off',
                  2
              ],
              'Cover Preview': [
                  true,
                  'Show preview of supported links on hover.',
                  1
              ],
              'Embedding': [
                  true,
                  'Embed supported services. Note: Some services don\'t work on HTTPS.',
                  1
              ],
              'Auto-embed': [
                  false,
                  'Auto-embed Linkify Embeds.',
                  2
              ],
              'Floating Embeds': [
                  false,
                  'Embed content in a frame that remains in place when the page is scrolled.',
                  2
              ],
          },
          'Filtering': {
              'Anonymize': [
                  false,
                  'Make everyone Anonymous.'
              ],
              'Filter': [
                  true,
                  'Self-moderation placebo.'
              ],
              'Filtered Backlinks': [
                  false,
                  'When enabled, shows backlinks to filtered posts with a line-through decoration. Otherwise, hides the backlinks.',
                  1
              ],
              'Filter in Native Catalog': [
                  true,
                  'Apply 4chan X filters in native catalog.',
                  1
              ],
              'MD5 Quick Filter Notifications': [
                  true,
                  'Show notification when quick filtering MD5s using the button or keybind.',
                  1
              ],
              'MD5 Quick Filter in the Catalog': [
                  true,
                  'Quick filter by MD5 when clicking a thumbnail in the catalog and holding Shift. Disabling falls back on just hiding the thread.',
                  1
              ],
              'MD5 Quick Filter in Threads': [
                  true,
                  'Quick filter by MD5 when clicking a thumbnail in a thread while holding shift.',
                  1
              ],
              'Recursive Hiding': [
                  true,
                  'Hide replies of hidden posts, recursively.'
              ],
              'Thread Hiding Buttons': [
                  true,
                  'Add buttons to hide entire threads.'
              ],
              'Reply Hiding Buttons': [
                  true,
                  'Add buttons to hide single replies.'
              ],
              'Stubs': [
                  true,
                  'Show stubs of hidden threads / replies.'
              ],
              'Filter Reason': [
                  true,
                  'Show the reason the post was hidden in the stub. If disabled, you can hover over the stub to see the reason.'
              ],
          },
          'Images and Videos': {
              'Image Expansion': [
                  true,
                  'Expand images / videos.'
              ],
              'Image Media Controls': [
                  true,
                  'Show additional media controls when hovering over expanded images.'
              ],
              'Image Hover': [
                  true,
                  'Show full image / video on mouseover.'
              ],
              'Image Hover in Catalog': [
                  true,
                  `Show full image / video on mouseover in ${meta.name} catalog.`
              ],
              'Gallery': [
                  true,
                  'Adds a simple and cute image gallery. Has more options in the gallery menu.'
              ],
              'Fullscreen Gallery': [
                  false,
                  'Open gallery in fullscreen mode.',
                  1
              ],
              'PDF in Gallery': [
                  false,
                  'Show PDF files in gallery.',
                  1
              ],
              'Image Resolution': [
                  false,
                  'Shows the dimensions of the image you\'re viewing in the gallery.',
                  1
              ],
              'Sauce': [
                  true,
                  'Add sauce links to images.'
              ],
              // 'WEBM Metadata': [
              //   true,
              //   'Add link to fetch title metadata from webm videos.'
              // ],
              'Reveal Spoiler Thumbnails': [
                  false,
                  'Replace spoiler thumbnails with the original image.'
              ],
              'Replace GIF': [
                  false,
                  'Replace gif thumbnails with the actual image.'
              ],
              'Replace JPG': [
                  false,
                  'Replace jpg thumbnails with the actual image.'
              ],
              'Replace PNG': [
                  false,
                  'Replace png thumbnails with the actual image.'
              ],
              'Replace WEBM': [
                  false,
                  'Replace webm, mp4, and ogv thumbnails with the actual video. Probably will degrade browser performance ;)'
              ],
              'Image Prefetching': [
                  true,
                  'Add a shortcut icon to the header to turn on image preloading.'
              ],
              'Fappe Tyme': [
                  true,
                  'Hide posts without images when header menu item is checked. *hint* *hint*'
              ],
              'Werk Tyme': [
                  true,
                  'Hide all post images when header menu item is checked.'
              ],
              'Autoplay': [
                  true,
                  'Videos begin playing immediately when opened.'
              ],
              'Restart when Opened': [
                  false,
                  'Restart GIFs and WebMs when you hover over or expand them.'
              ],
              'Show Controls': [
                  true,
                  'Show controls on videos expanded inline.'
              ],
              'Click Passthrough': [
                  false,
                  'Clicks on videos trigger your browser\'s default behavior. Videos can be contracted with button / dragging to the left.',
                  1
              ],
              'Allow Sound': [
                  true,
                  'Open videos with the sound unmuted.'
              ],
              'Mouse Wheel Volume': [
                  true,
                  'Adjust volume of videos with the mouse wheel over the thumbnail/filename/gallery.'
              ],
              'Loop in New Tab': [
                  true,
                  'Loop videos opened in their own tabs.'
              ],
              'Volume in New Tab': [
                  true,
                  `Apply ${meta.name} mute and volume settings to videos opened in their own tabs.`
              ],
              'Enable sound posts': [
                  true,
                  'Enable loading audio from [sound=] file names. This audio is fetched from third parties.'
              ],
          },
          'Menu': {
              'Menu': [
                  true,
                  'Add a drop-down menu to posts.'
              ],
              'Report Link': [
                  true,
                  'Add a report link to the menu.',
                  1
              ],
              'Copy Text Link': [
                  true,
                  'Add a link to copy the post\'s text.',
                  1
              ],
              'Thread Hiding Link': [
                  true,
                  'Add a link to hide entire threads.',
                  1
              ],
              'Reply Hiding Link': [
                  true,
                  'Add a link to hide single replies.',
                  1
              ],
              'Delete Link': [
                  true,
                  'Add post and image deletion links to the menu.',
                  1
              ],
              'Archive Link': [
                  true,
                  'Add an archive link to the menu.',
                  1
              ],
              'Edit Link': [
                  true,
                  'Add a link to edit the image in Tegaki, /i/\'s painting program. Requires Quick Reply.',
                  1
              ],
              'Download Link': [
                  false,
                  'Add a download with original filename link to the menu.',
                  1
              ]
          },
          'Monitoring': {
              'Thread Updater': [
                  true,
                  'Fetch and insert new replies. Has more options in the header menu and the "Advanced" tab.'
              ],
              'Unread Count': [
                  true,
                  'Show the unread posts count in the tab title.'
              ],
              'Quoted Title': [
                  false,
                  'Change the page title to reflect you\'ve been quoted.',
                  1
              ],
              'Hide Unread Count at (0)': [
                  false,
                  'Hide the unread posts count in the tab title when it reaches 0.',
                  1
              ],
              'Unread Favicon': [
                  true,
                  'Show a different favicon when there are unread posts.'
              ],
              'Unread Line': [
                  true,
                  'Show a line to distinguish read posts from unread ones.'
              ],
              'Remember Last Read Post': [
                  true,
                  'Remember how far you\'ve read after you close the thread.'
              ],
              'Scroll to Last Read Post': [
                  true,
                  'Scroll back to the last read post when reopening a thread.',
                  1
              ],
              'Unread Line in Index': [
                  false,
                  'Show a line between read and unread posts in threads in the index.',
                  1
              ],
              'Remove Thread Excerpt': [
                  false,
                  'Replace the excerpt of the thread in the tab title with the board title.'
              ],
              'Thread Stats': [
                  true,
                  'Display reply and image count.'
              ],
              'IP Count in Stats': [
                  true,
                  'Display the unique IP count in the thread stats.',
                  1
              ],
              'Page Count in Stats': [
                  true,
                  'Display the page count in the thread stats.',
                  1
              ],
              'Purge Position': [
                  false,
                  'Update stats more often and add purge position when a thread is close to getting purged, for anons who manage general threads.',
                  2
              ],
              'Updater and Stats in Header': [
                  true,
                  'Places the thread updater and thread stats in the header instead of floating them.'
              ],
              'Thread Watcher': [
                  true,
                  'Bookmark threads. Has more options in the thread watcher menu.'
              ],
              'Fixed Thread Watcher': [
                  true,
                  'Makes the thread watcher scroll with the page.',
                  1
              ],
              'Persistent Thread Watcher': [
                  false,
                  'The thread watcher will be visible when the page is loaded.',
                  1
              ],
              'Mark New IPs': [
                  false,
                  'Label each post from a new IP with the thread\'s current IP count.'
              ],
              'Reply Pruning': [
                  true,
                  'Add option in header menu to hide old replies in long threads. Activated by default in stickies.'
              ],
              'Prune All Threads': [
                  false,
                  'Activate Reply Pruning by default in all threads.',
                  1
              ]
          },
          'Posting and Captchas': {
              'Quick Reply': [
                  true,
                  'All-in-one form to reply, create threads, automate dumping and more.'
              ],
              'Persistent QR': [
                  false,
                  'The Quick reply won\'t disappear after posting.',
                  1
              ],
              'Auto Hide QR': [
                  true,
                  'Automatically hide the quick reply when posting.',
                  2
              ],
              'Open Post in New Tab': [
                  true,
                  'Open new threads in a new tab, and open replies in a new tab if you\'re not already in the thread.',
                  1
              ],
              'Remember QR Size': [
                  false,
                  'Remember the size of the Quick reply.',
                  1
              ],
              'Remember Spoiler': [
                  false,
                  'Remember the spoiler state, instead of resetting after posting.',
                  1
              ],
              'Randomize Filename': [
                  false,
                  'Set the filename to a random timestamp within the past year. Disabled on /f/.',
                  1
              ],
              'Show New Thread Option in Threads': [
                  true,
                  'Show the option to post a new / different thread from inside a thread.',
                  1
              ],
              'Show Upload Progress': [
                  true,
                  'Track progress of file uploads as percentage in submit button.',
                  1
              ],
              'Cooldown': [
                  true,
                  'Indicate the remaining time before posting again.',
                  1
              ],
              'Posting Success Notifications': [
                  true,
                  'Show notifications on successful post creation or file uploading.',
                  1
              ],
              'Auto-load captcha': [
                  false,
                  'Automatically load the captcha in the QR even if your post is empty.',
                  1
              ],
              'Post on Captcha Completion': [
                  false,
                  'Submit the post immediately when the captcha is completed.',
                  1
              ],
              // 'Force Noscript Captcha': [
              //   false,
              //   'Use the non-Javascript fallback captcha even if Javascript is enabled.'
              // ],
          },
          'Quote Links': {
              'Quote Backlinks': [
                  true,
                  'Add quote backlinks.'
              ],
              'OP Backlinks': [
                  true,
                  'Add backlinks to the OP.',
                  1
              ],
              'Bottom Backlinks': [
                  false,
                  'Place backlinks at the bottom of posts.',
                  1
              ],
              'Quote Inlining': [
                  true,
                  'Inline quoted post on click.'
              ],
              'Inline Cross-thread Quotes Only': [
                  false,
                  'Don\'t inline quote links when the posts are visible in the thread.',
                  1
              ],
              'Quote Hash Navigation': [
                  false,
                  'Include an extra link after quotes for autoscrolling to quoted posts.',
                  1
              ],
              'Forward Hiding': [
                  true,
                  'Hide original posts of inlined backlinks.',
                  1
              ],
              'Quote Previewing': [
                  true,
                  'Show quoted post on hover.'
              ],
              'Quote Highlighting': [
                  true,
                  'Highlight the previewed post.',
                  1
              ],
              'Resurrect Quotes': [
                  true,
                  'Link dead quotes to the archives, and support inlining/previewing of archive links like quote links.'
              ],
              'Remember Your Posts': [
                  true,
                  'Remember your posting history.'
              ],
              'Mark Quotes of You': [
                  true,
                  'Add \'(You)\' to quotes linking to your posts.',
                  1
              ],
              'Highlight Posts Quoting You': [
                  true,
                  'Highlights any posts that contain a quote to your post.',
                  1
              ],
              'Highlight Own Posts': [
                  true,
                  'Highlights own posts.',
                  1
              ],
              'Mark OP Quotes': [
                  true,
                  'Add \'(OP)\' to OP quotes.'
              ],
              'Mark Cross-thread Quotes': [
                  true,
                  'Add \'(Cross-thread)\' to cross-threads quotes.'
              ],
              'Quote Threading': [
                  true,
                  'Add option in header menu to thread conversations.'
              ]
          }
      },
      imageExpansion: {
          'Fit width': [
              true,
              ''
          ],
          'Fit height': [
              false,
              ''
          ],
          'Scroll into view': [
              true,
              'Scroll down when expanding images to bring the full image into view.'
          ],
          'Expand spoilers': [
              true,
              'Expand all images along with spoilers.'
          ],
          'Expand videos': [
              true,
              'Expand all images also expands videos.'
          ],
          'Expand from here': [
              false,
              'Expand all images only from current position to thread end.'
          ],
          'Expand thread only': [
              false,
              'In index, expand all images only within the current thread.'
          ],
          'Advance on contract': [
              false,
              'Advance to next post when contracting an expanded image.'
          ]
      },
      imageMediaControlsPosition: 'top-left',
      gallery: {
          'Hide Thumbnails': [
              false
          ],
          'Fit Width': [
              true
          ],
          'Fit Height': [
              true
          ],
          'Stretch to Fit': [
              false
          ],
          'Scroll to Post': [
              true
          ],
          'Slide Delay': [
              6.0
          ]
      },
      'Default Volume': 1.0,
      threadWatcher: {
          'Current Board': [
              false,
              'Only show watched threads from the current board.'
          ],
          'Auto Update Thread Watcher': [
              true,
              'Periodically check status of watched threads.'
          ],
          'Auto Watch': [
              true,
              'Automatically watch threads you start.'
          ],
          'Auto Watch Reply': [
              true,
              'Automatically watch threads you reply to.'
          ],
          'Auto Prune': [
              false,
              'Automatically remove dead threads.'
          ],
          'Show Page': [
              true,
              'Show what page watched threads are on.'
          ],
          'Show Unread Count': [
              true,
              'Show number of unread posts in watched threads.'
          ],
          'Show Site Prefix': [
              true,
              'When multiple sites are shown in the thread watcher, add a prefix to board names to distinguish them.'
          ],
          'Require OP Quote Link': [
              false,
              'For purposes of thread watcher highlighting, only consider posts with a quote link to the OP as replies to the OP.'
          ]
      },
      filter: {
          general: '',
          postID: `\
# Highlight dubs on [s4s]:
#/(\\d)\\1$/;highlight;top:no;boards:s4s\
`,
          name: `\
# Filter any namefags:
#/^(?!Anonymous$)/\
`,
          uniqueID: `\
# Filter a specific ID:
#/Txhvk1Tl/\
`,
          tripcode: `\
# Filter any tripfag
#/^!/\
`,
          capcode: `\
# Set a custom class for mods:
#/Mod$/;highlight:mod;op:yes
# Set a custom class for admins:
#/Admin$/;highlight:admin;op:yes\
`,
          pass: `\
# Filter anyone using since4pass:
#/./\
`,
          email: '',
          subject: `\
# Filter Generals on /v/:
#/general/i;boards:v;op:only\
`,
          comment: `\
# Filter Stallman copypasta on /g/:
#/what you\'re refer+ing to as linux/i;boards:g
# Filter posts with 20 or more quote links:
#/(?:>>\\d(?:(?!>>\\d)[^])*){20}/
# Filter posts like T H I S / H / I / S:
#/^>?\\s?\\w\\s?(\\w)\\s?(\\w)\\s?(\\w).*$[\\s>]+\\1[\\s>]+\\2[\\s>]+\\3/im\
`,
          flag: '',
          filename: '',
          dimensions: `\
# Highlight potential wallpapers:
#/1920x1080/;op:yes;highlight;top:no;boards:w,wg\
`,
          filesize: '',
          MD5: ''
      },
      sauces: `\
# Known filename formats:
https://www.pixiv.net/member_illust.php?mode=medium&illust_id=%$1;regexp:/^(\\d+)_p\\d+/
javascript:void(open("https://www.deviantart.com/"+%$1.replace(/_/g,"-")+"/art/"+parseInt(%$2,36)));regexp:/^\\w+_by_(\\w+)[_-]d([\\da-z]{6})\\b/
https://imgur.com/%$1;regexp:/^(?![a-zA-Z][a-z]{6})(?![A-Z]{7})(?!\\d{7})([\\da-zA-Z]{7})(?: \\(\\d+\\))?\\.\\w+$/
https://flickr.com/photo.gne?id=%$1;regexp:/^(\\d+)_[\\da-f]{10}(?:_\\w)*\\b/
https://www.facebook.com/photo.php?fbid=%$1;regexp:/^\\d+_(\\d+)_\\d+_[no]\\b/

# Reverse image search:
https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%IMG&safe=off
https://yandex.com/images/search?rpt=imageview&url=%IMG
#//tineye.com/search?url=%IMG
#//www.bing.com/images/search?q=imgurl:%IMG&view=detailv2&iss=sbi#enterInsights
#https://lens.google.com/uploadbyurl?url=%IMG;text:lens

# Specialized reverse image search:
//iqdb.org/?url=%IMG
https://trace.moe/?auto&url=%IMG;text:wait
#//3d.iqdb.org/?url=%IMG
#//saucenao.com/search.php?url=%IMG

# "View Same" in archives:
http://eye.swfchan.com/search/?q=%name;types:swf
#https://desuarchive.org/_/search/image/%sMD5/
#https://archive.4plebs.org/_/search/image/%sMD5/
#https://boards.fireden.net/_/search/image/%sMD5/
#https://foolz.fireden.net/_/search/image/%sMD5/

# Other tools:
#http://exif.regex.info/exif.cgi?imgurl=%URL
#//imgops.com/start?url=%URL;types:gif,jpg,png
#//www.gif-explode.com/%URL;types:gif\
`,
      FappeT: {
          werk: false
      },
      'Custom CSS': true,
      Index: {
          'Index Mode': 'paged',
          'Previous Index Mode': 'paged',
          'Index Size': 'small',
          'Show Replies': [true, 'Show replies in the index, and also in the catalog if "Catalog hover expand" is checked.'],
          'Catalog Hover Expand': [false, 'Expand the comment and show more details when you hover over a thread in the catalog.'],
          'Catalog Hover Toggle': [true, 'Turn "Catalog hover expand" on and off by clicking in the catalog.'],
          'Pin Watched Threads': [false, 'Move watched threads to the start of the index.'],
          'Anchor Hidden Threads': [true, 'Move hidden threads to the end of the index.'],
          'Refreshed Navigation': [false, 'Refresh index when navigating through pages.']
      },
      Header: {
          'Fixed Header': true,
          'Header auto-hide': false,
          'Header auto-hide on scroll': false,
          'Bottom Header': false,
          'Centered links': false,
          'Header catalog links': false,
          'Bottom Board List': true,
          'Shortcut Icons': true,
          'Custom Board Navigation': true
      },
      archives: {
          archiveLists: 'https://4chenz.github.io/archives.json/archives.json',
          lastarchivecheck: 0,
          archiveAutoUpdate: true
      },
      externalCatalogURLs: `\
//catalog.neet.tv/%board/;boards:4chan.org:3,a,adv,an,asp,biz,c,cgl,ck,cm,co,diy,f,fa,fit,g,gd,his,i,int,jp,k,lgbt,lit,m,mlp,mu,n,news,o,out,p,po,pol,s4s,sci,sp,tg,toy,trv,tv,v,vg,vip,vp,vr,w,wg,wsg,wsr,x\
`,
      boardnav: `\
[ toggle-all ]
[current-index-text:"Index"
current-catalog-text:"Catalog"
current-expired-text:"Expired"
current-archive-text:"Archive"]
[external-text:"FAQ","${meta.faq}"]\
`,
      QR: {
          'QR.personas': `\
#options:"sage";boards:jp;always\
`,
          sjisPreview: false
      },
      jsWhitelist: '',
      captchaLanguage: '',
      time: '%m/%d/%y(%a)%H:%M:%S',
      timeLocale: '',
      RelativeTime: 'Hover',
      backlink: '>>%id',
      pastedname: 'file',
      fileInfo: '%l %d (%p%s, %r%g)',
      favicon: 'ferongr',
      usercss: userCss,
      hotkeys: {
          // QR & Options
          'Toggle board list': [
              'Ctrl+b',
              'Toggle the full board list.'
          ],
          'Toggle header': [
              'Shift+h',
              'Toggle the auto-hide option of the header.'
          ],
          'Open empty QR': [
              'q',
              'Open QR without post number inserted.'
          ],
          'Open QR': [
              'Shift+q',
              'Open QR with post number inserted.'
          ],
          'Open settings': [
              'Alt+o',
              'Open Settings.'
          ],
          'Close': [
              'Esc',
              'Close dialogs or notifications.'
          ],
          'Spoiler tags': [
              'Ctrl+s',
              'Insert spoiler tags.'
          ],
          'Code tags': [
              'Alt+c',
              'Insert code tags.'
          ],
          'Eqn tags': [
              'Alt+e',
              'Insert eqn tags.'
          ],
          'Math tags': [
              'Alt+m',
              'Insert math tags.'
          ],
          'SJIS tags': [
              'Alt+a',
              'Insert SJIS tags.'
          ],
          'Toggle sage': [
              'Alt+s',
              'Toggle sage in options field.'
          ],
          'Toggle Cooldown': [
              'Alt+Comma',
              'Toggle custom cooldown timer.'
          ],
          'Post from URL': [
              'Alt+l',
              'Post from URL.'
          ],
          'Add new post': [
              'Alt+n',
              'Add new post to the QR dump list.'
          ],
          'Submit QR': [
              'Ctrl+Enter',
              'Submit post.'
          ],
          // Thread related
          'Watch': [
              'w',
              'Watch thread.'
          ],
          'Update': [
              'r',
              'Update the thread / refresh the index.'
          ],
          'Update thread watcher': [
              'Shift+r',
              'Manually refresh thread watcher.'
          ],
          'Toggle thread watcher': [
              't',
              'Toggle visibility of thread watcher.'
          ],
          'Toggle threading': [
              'Shift+t',
              'Toggle threading.'
          ],
          'Mark thread read': [
              'Ctrl+0',
              'Mark thread read from index (requires "Unread Line in Index").'
          ],
          // Images
          'Expand image': [
              'Shift+e',
              'Expand selected image.'
          ],
          'Expand images': [
              'e',
              'Expand all images.'
          ],
          'Open Gallery': [
              'g',
              'Opens the gallery.'
          ],
          'Next Gallery Image': [
              'Right',
              'Go to the next image in gallery mode.'
          ],
          'Previous Gallery Image': [
              'Left',
              'Go to the previous image in gallery mode.'
          ],
          'Advance Gallery': [
              'Enter',
              'Go to next image or, if Autoplay is off, play video.'
          ],
          'Pause': [
              'p',
              'Pause/play videos in the gallery.'
          ],
          'Slideshow': [
              'Ctrl+Right',
              'Toggle the gallery slideshow mode.'
          ],
          'Rotate image clockwise': [
              'Shift+Right',
              'Rotate image clockwise in gallery.'
          ],
          'Rotate image anticlockwise': [
              'Shift+Left',
              'Rotate image anticlockwise in gallery.'
          ],
          'Download Gallery Image': [
              'Shift+j',
              'Download current image in gallery.'
          ],
          'fappeTyme': [
              'f',
              'Toggle Fappe Tyme.'
          ],
          'werkTyme': [
              'Shift+w',
              'Toggle Werk Tyme.'
          ],
          // Board Navigation
          'Front page': [
              '1',
              'Jump to front page.'
          ],
          'Open front page': [
              'Shift+1',
              'Open front page in a new tab.'
          ],
          'Next page': [
              'Ctrl+Right',
              'Jump to the next page.'
          ],
          'Previous page': [
              'Ctrl+Left',
              'Jump to the previous page.'
          ],
          'Paged mode': [
              'Alt+1',
              'Open the index in paged mode.'
          ],
          'Infinite scrolling mode': [
              'Alt+2',
              'Open the index in infinite scrolling mode.'
          ],
          'All pages mode': [
              'Alt+3',
              'Open the index in all threads mode.'
          ],
          'Open catalog': [
              'Shift+c',
              'Open the catalog of the current board.'
          ],
          'Search form': [
              'Ctrl+Alt+s',
              'Focus the search field on the board index.'
          ],
          'Cycle sort type': [
              'Alt+x',
              'Cycle through index sort types.'
          ],
          // Thread Navigation
          'Next thread': [
              'Ctrl+Down',
              'See next thread.'
          ],
          'Previous thread': [
              'Ctrl+Up',
              'See previous thread.'
          ],
          'Expand thread': [
              'Ctrl+e',
              'Expand thread.'
          ],
          'Open thread': [
              'o',
              'Open thread in current tab.'
          ],
          'Open thread tab': [
              'Shift+o',
              'Open thread in new tab.'
          ],
          // Reply Navigation
          'Next reply': [
              'j',
              'Select next reply.'
          ],
          'Previous reply': [
              'k',
              'Select previous reply.'
          ],
          'Deselect reply': [
              'Shift+d',
              'Deselect reply.'
          ],
          'Hide': [
              'x',
              'Hide thread.'
          ],
          'Quick Filter MD5': [
              '5',
              'Add the MD5 of the selected image to the filter list.'
          ],
          'Previous Post Quoting You': [
              'Alt+Up',
              'Scroll to the previous post that quotes you.'
          ],
          'Next Post Quoting You': [
              'Alt+Down',
              'Scroll to the next post that quotes you.'
          ]
      },
      updater: {
          checkbox: {
              'Beep': [
                  false,
                  'Beep on new post to completely read thread.'
              ],
              'Beep Quoting You': [
                  false,
                  'Beep on new post quoting you.'
              ],
              'Auto Scroll': [
                  false,
                  'Scroll updated posts into view. Only enabled at bottom of page.'
              ],
              'Bottom Scroll': [
                  false,
                  'Always scroll to the bottom, not the first new post. Useful for event threads.'
              ],
              'Scroll BG': [
                  false,
                  'Auto-scroll background tabs.'
              ],
              'Auto Update': [
                  true,
                  'Automatically fetch new posts.'
              ],
              'Optional Increase': [
                  false,
                  'Increase the intervals between updates on threads without new posts.'
              ]
          },
          'Interval': 5
      },
      customCooldown: 0,
      customCooldownEnabled: true,
      'Thread Quotes': false,
      'Max Replies': 1000,
      'Autohiding Scrollbar': false,
      position: {
          'embedding.position': 'top: 50px; right: 0px;',
          'thread-stats.position': 'bottom: 0px; right: 0px;',
          'updater.position': 'bottom: 0px; left: 0px;',
          'thread-watcher.position': 'top: 50px; left: 0px;',
          'qr.position': 'top: 50px; right: 0px;'
      },
      fourchanImageHost: 'i.4cdn.org',
      hiddenPSAList: [{}],
      knownBanners: banners.join(','),
      passMessageClosed: false,
      'PSAseen': [[]],
      XEmbedder: 'fxt',
      fxtLang: '',
      fxtUrl: 'https://api.fxtwitter.com',
      fxtMaxReplies: 5,
      beepSource: '',
      beepVolume: 1,
  };

  const PageReady = {
      isThisPageLegit() {
          if (!('thisPageIsLegit' in PageReady)) {
              PageReady.thisPageIsLegit = g.SITE.isThisPageLegit ?
                  g.SITE.isThisPageLegit()
                  :
                      !/^[45]\d\d\b/.test(document.title) && !/\.(?:json|rss)$/.test(location.pathname);
          }
          return PageReady.thisPageIsLegit;
      },
      ready(cb) {
          return $.ready(function () {
              if (PageReady.isThisPageLegit()) {
                  return cb();
              }
          });
      }
  };

  // \u00A0 is non breaking space
  const separator = '\u00A0|\u00A0';
  const settingsHtml = h("div", { id: "fourchanx-settings", class: "dialog" },
    h("nav", null,
      h("div", { class: "sections-list" }),
      h("p", { class: "imp-exp-result warning" }),
      h("div", { class: "credits" },
        h("a", { href: "javascript:;", class: "export" }, "Export"),
        separator,
        h("a", { href: "javascript:;", class: "import" }, "Import"),
        separator,
        h("a", { href: "javascript:;", class: "reset" }, "Reset Settings"),
        separator,
        h("input", { type: "file", hidden: true, accept: ".json,application/json" }),
        h("a", { href: meta.page, target: "_blank" }, meta.name),
        separator,
        h("a", { href: meta.changelog, target: "_blank" }, g.VERSION),
        separator,
        h("a", { href: meta.issues, target: "_blank" }, "Issues"),
        separator,
        h("a", { href: "javascript:;", class: "close", title: "Close" }, "\u2715"))),
    h("div", { class: "section-container" },
      h("section", null)));

  var FilterGuidePage = `<div class="warning"><code>Filter</code> is disabled.</div>
<p>
  Use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank">regular expressions</a>, one per line.<br>
  Lines starting with a <code>#</code> will be ignored.<br>
  For example, <code>/weeaboo/i</code> will filter posts containing the string \`<code>weeaboo</code>\`, case-insensitive.<br>
  MD5 and Unique ID filtering use exact string matching, not regular expressions.
</p>
<ul>You can use these settings with each regular expression, separate them with semicolons:
  <li>
    Per boards, separate them with commas. It is global if not specified. Use <code>sfw</code> and <code>nsfw</code> to reference all worksafe or not-worksafe boards.<br>
    For example: <code>boards:a,jp;</code>.<br>
    To specify boards on a particular site, put the beginning of the domain and a slash character before the list.<br>
    Any initial <code>www.</code> should not be included, and all 4chan domains are considered <code>4chan.org</code>.<br>
    For example: <code>boards:4:a,jp,sama:a,z;</code>.<br>
    An asterisk can be used to specify all boards on a site.<br>
    For example: <code>boards:4:*;</code>.<br>
  </li>
  <li>
    Show a custom reason in the stub. If not given, the type and regex will be shown.<br>
    For example: <code>reason:This is bait;</code>
  </li>
  <li>
    Select boards to be excluded from the filter. The syntax is the same as for the <code>boards:</code> option above.<br>
    For example: <code>exclude:vg,v;</code>.
  </li>
  <li>
    Filter OPs only along with their threads (\`only\`) or replies only (\`no\`).<br>
    For example: <code>op:only;</code> or <code>op:no;</code>.
  </li>
  <li>
    Filter only posts with files (\`only\`) or only posts without files (\`no\`).<br>
    For example: <code>file:only;</code> or <code>file:no;</code>.
  </li>
  <li>
    Overrule the \`Show Stubs\` setting if specified: create a stub (\`yes\`) or not (\`no\`).<br>
    For example: <code>stub:yes;</code> or <code>stub:no;</code>.
  </li>
  <li>
    Highlight instead of hiding. You can specify a class name to use with a userstyle.<br>
    For example: <code>highlight;</code> or <code>highlight:wallpaper;</code>.
  </li>
  <li>
    Highlighted OPs will have their threads put on top of the board index by default.<br>
    For example: <code>top:yes;</code> or <code>top:no;</code>.
  </li>
  <li>Show a desktop notification instead of hiding: <code>notify;</code>.</li>
  <li>Hide all posts from this poster: <code>poster;</code>.</li>
  <li>Recursively hide replies: <code>replies;</code>.</li>
  <li>Hide anyway even if highlighting. The highlight class will be applied to the stub: <code>hide;</code>.</li>
  <li>
    Filters in the "General" section apply to multiple fields, by default <code>subject,name,filename,comment</code>.<br>
    The fields can be specified with the <code>type</code> option, separated by commas.<br>
    For example: <code id="filterTypes"></code>.<br>
    Types can also be combined with a <code>+</code> sign; this indicates the filter applies to the given fields joined by newlines.<br>
    For example: <code>type:filename+filesize+dimensions;</code>.<br>
  </li>
</ul>`;

  var SaucePage = `<div class="warning"><code>Sauce</code> is disabled.</div>
<input id="sauce-doc-expand" type="checkbox" hidden>
<div id="sauce-doc">
  <label for="sauce-doc-expand">[expand]</label>
  <div>These parameters will be replaced by their corresponding values in the URL and displayed text:</div>
  <ul>
    <li><code>%IMG</code>: Full image URL for GIF, JPG, and PNG; thumbnail URL for other types.</li>
    <li><code>%URL</code>: Full image URL.</li>
    <li><code>%TURL</code>: Thumbnail URL.</li>
    <li><code>%name</code>: Original file name.</li>
    <li><code>%board</code>: Current board.</li>
    <li><code>%MD5</code>: MD5 hash in base64.</li>
    <li><code>%sMD5</code>: MD5 hash in base64 using <code>-</code> and <code>_</code>.</li>
    <li><code>%hMD5</code>: MD5 hash in hexadecimal.</li>
    <li><code>%$0</code>: Matched regular expression within the filename.</li>
    <li><code>%$1</code>, <code>%$2</code>, <code>%$3</code>, ... : Subexpressions within the matched regular expression.</li>
    <li><code>%%</code>, <code>%semi</code>: Literal <code>%</code> and <code>;</code>.</li>
  </ul>
  <div>Lines starting with a <code>#</code> will be ignored.</div>
  <div>You can specify a display text by appending <code>;text:[text]</code> to the URL.</div>
  <div>You can specify the applicable boards/sites by appending <code>;boards:[board1],[board2]</code>. See the Filter guide for details.</div>
  <div>You can specify the applicable file types by appending <code>;types:[extension1],[extension2]</code>.</div>
  <div>You can specify a regular expression the filename must match by appending <code>;regexp:[regular expression]</code>.</div>
</div>
<textarea hidden name="sauces" class="field" spellcheck="false"></textarea>`;

  var AdvancedPage = `<fieldset>
  <legend>Archives</legend>
  <div class="warning" data-feature="404 Redirect"><code>404 Redirect</code> is disabled.</div>
  <select id="archive-board-select"></select>
  <table id="archive-table">
    <thead>
      <th>Thread redirection</th>
      <th>Thread fetching</th>
      <th>Post fetching</th>
      <th>File redirection</th>
    </thead>
    <tbody></tbody>
  </table>
  <br>
  <div>
    <b>Archive Lists</b>: Each line below should be an archive list in <a href="https://github.com/4chenz/archives.json/blob/gh-pages/CONTRIBUTING.md" target="_blank">this format</a> or a URL to load an archive list from.<br>
    Archive properties can be overriden by another item with the same <code>uid</code> (or if absent, its <code>name</code>).
  </div>
  <textarea hidden name="archiveLists" class="field" spellcheck="false"></textarea>
  <button id="update-archives">Update now</button> Last updated: <time id="lastarchivecheck"></time> <label><input type="checkbox" name="archiveAutoUpdate"> Auto-update</label>
</fieldset>

<fieldset>
  <legend>External Catalog</legend>
  <div class="warning" data-feature="External Catalog"><code>External Catalog</code> is disabled. This will be used only as a fallback.</div>
  <div>
    URLs of external catalog sites, where <code>%board</code> is to be replaced by the board name.<br>
    Each URL should be followed by <code>;boards:</code> and optionally <code>;exclude:</code> and a list of supported/excluded boards in the format explained in the Filter guide.
  </div>
  <textarea hidden name="externalCatalogURLs" class="field" spellcheck="false"></textarea>
</fieldset>

<fieldset>
  <legend>Override 4chan Image Host</legend>
  <div>Change 4chan image links to this domain. Leave blank for no change.</div>
  <div><input name="fourchanImageHost" class="field" spellcheck="false" list="list-fourchanImageHost"></div>
  <datalist id="list-fourchanImageHost"></datalist>
</fieldset>

<fieldset>
  <legend>Captcha Language</legend>
  <div>Choose from <a href="https://developers.google.com/recaptcha/docs/language" target="_blank">list of language codes</a>. Leave blank to autoselect.</div>
  <div><input name="captchaLanguage" class="field" spellcheck="false"></div>
</fieldset>

<fieldset>
  <legend>Custom Board Navigation</legend>
  <div><textarea hidden name="boardnav" class="field" spellcheck="false"></textarea></div>
  <span class="note">New lines will be converted into spaces.</span><br><br>
  <div class="note">In the following examples for /g/, <code>g</code> can be changed to a different board ID (<code>a</code>, <code>b</code>, etc...), the current board (<code>current</code>), or the Twitter link (<code>@</code>).</div>
  <div>Board link: <code>g</code></div>
  <div>Archive link: <code>g-archive</code></div>
  <div>Internal archive link: <code>g-expired</code></div>
  <div>Title link: <code>g-title</code></div>
  <div>Board link (Replace with title when on that board): <code>g-replace</code></div>
  <div>Full text link: <code>g-full</code></div>
  <div>Custom text link: <code>g-text:&quot;Install Gentoo&quot;</code></div>
  <div>Index-only link: <code>g-index</code></div>
  <div>Catalog-only link: <code>g-catalog</code></div>
  <div>Index mode: <code>g-mode:&quot;infinite scrolling&quot;</code></div>
  <div>Index sort: <code>g-sort:&quot;creation date rev&quot;</code></div>
  <div>External link: <code>external-text:&quot;Google&quot;,&quot;http://www.google.com&quot;</code></div>
  <div>Open in new tab: <code>g-nt</code></div>
  <div>Combinations are possible: <code>g-index-text:&quot;Technology Index&quot;</code></div>
  <div>Full board list toggle: <code>toggle-all</code></div>
  <br>
  <div class="note">
    <code>[ toggle-all ] [current-title] [g-title / a-title / jp-title] [x / wsg / h] [t-text:&quot;Piracy&quot;]</code><br>
    will give you<br>
    <code>[ + ] [Technology] [Technology / Anime & Manga / Otaku Culture] [x / wsg / h] [Piracy]</code><br>
    if you are on /g/.
  </div>
  <div class="note">
    For custom styling, you can wrap groups or individual links in <code>{{</code> and <code>}}</code>, to wrap them in
    a span. You can also add classes in double quotes right after the {{. For example: <br />
    <code>[g-title] {{"favorites"[a-title / jp-title]}}</code><br />
    Results in:<br />
    <code>[&lt;a [...] &gt;Technology&lt;/a&gt;] &lt;span class="favorites"&gt;[&lt;a [...] &gt;Anime &amp;amp;
      Manga&lt;/a&gt; / &lt;a [...] &gt;Otaku Culture&lt;/a&gt;]&lt;/span&gt;</code>
  </div>
</fieldset>

<fieldset>
  <legend>
    Time Formatting
    <span class="warning" data-feature="Time Formatting">is disabled, relative time setting still applies.</span>
  </legend>
  <div><input name="time" class="field" spellcheck="false">: <span class="time-preview"></span></div>
  <div>Supported <a href="http://man7.org/linux/man-pages/man1/date.1.html" target="_blank">format specifiers</a>:</div>
  <div>Day: <code>%a</code>, <code>%A</code>, <code>%d</code>, <code>%e</code></div>
  <div>Month: <code>%m</code>, <code>%b</code>, <code>%B</code>, <code>%n</code> (Not zero padded)</div>
  <div>Year: <code>%y</code>, <code>%Y</code></div>
  <div>Hour: <code>%k</code>, <code>%H</code>, <code>%l</code>, <code>%I</code>, <code>%p</code>, <code>%P</code></div>
  <div>Minute: <code>%M</code></div>
  <div>Second: <code>%S</code></div>
  <div>Literal <code>%</code>: <code>%%</code></div>
  <div><a href="https://www.w3.org/International/articles/language-tags/" target="_blank">Language tag</a>: <input name="timeLocale" class="field" spellcheck="false"></div>
  <div>Relative time, like "3 minutes ago":
    <select name="RelativeTime">
      <option value="No">Disabled</option>
      <option value="Hover">Show when hovering on the date</option>
      <option value="Show">Show relative time, and time and date on hover</option>
      <option value="Both">Show both timestamp and relative date</option>
      <option value="BothRelativeFirst">Show both relative date and timestamp</option>
    </select>
  </div>
</fieldset>

<fieldset>
  <legend>Quote Backlinks formatting <span class="warning" data-feature="Quote Backlinks">is disabled.</span></legend>
  <div><input name="backlink" class="field" spellcheck="false">: <span class="backlink-preview"></span></div>
</fieldset>

<fieldset>
  <legend>Default pasted content filename</legend>
  <div><input name="pastedname" class="field" spellcheck="false">.png</div>
</fieldset>

<fieldset>
  <legend>File Info Formatting <span class="warning" data-feature="File Info Formatting">is disabled.</span></legend>
  <div><input name="fileInfo" class="field" spellcheck="false">: <span class="file-info file-info-preview"></span></div>
  <div>Link: <code>%l</code> (truncated), <code>%L</code> (untruncated), <code>%T</code> (4chan filename)</div>
  <div>Filename: <code>%n</code> (truncated), <code>%N</code> (untruncated), <code>%t</code> (4chan filename)</div>
  <div>Download button: <code>%d</code></div>
  <div>Quick filter MD5: <code>%f</code></div>
  <div>Spoiler indicator: <code>%p</code></div>
  <div>Size: <code>%B</code> (Bytes), <code>%K</code> (KB), <code>%M</code> (MB), <code>%s</code> (4chan default)</div>
  <div>Resolution: <code>%r</code> (Displays &#039;PDF&#039; for PDF files)</div>
  <div>Tag: <code>%g</code>
  <div>Literal <code>%</code>: <code>%%</code></div>
</fieldset>

<fieldset>
  <legend>Quick Reply Personas</legend>
  <textarea hidden class="personafield field" name="QR.personas" spellcheck="false"></textarea>
  <p>
    One item per line.<br>
    Items will be added in the relevant input&#039;s auto-completion list.<br>
    Password items will always be used, since there is no password input.<br>
    Lines starting with a <code>#</code> will be ignored.
  </p>
  <ul>You can use these settings with each item, separate them with semicolons:
    <li>Possible items are: <code>name</code>, <code>options</code> (or equivalently <code>email</code>), <code>subject</code> and <code>password</code>.</li>
    <li>Wrap values of items with quotes, like this: <code>options:&quot;sage&quot;</code>.</li>
    <li>Force values as defaults with the <code>always</code> keyword, for example: <code>options:&quot;sage&quot;;always</code>.</li>
    <li>Select specific boards for an item, separated with commas, for example: <code>options:&quot;sage&quot;;boards:jp;always</code>.</li>
  </ul>
</fieldset>

<fieldset>
  <legend>Unread Favicon <span class="warning" data-feature="Unread Favicon">is disabled.</span></legend>
  <select name="favicon">
    <option value="ferongr">ferongr</option>
    <option value="xat-">xat-</option>
    <option value="4chanJS">4chanJS</option>
    <option value="Mayhem">Mayhem</option>
    <option value="Original">Original</option>
    <option value="Metro">Metro</option>
  </select>
  <span class="favicon-preview"></span>
</fieldset>

<fieldset>
  <legend>Image Media Controls <span class="warning" data-feature="Image Media Controls">is disabled.</span></legend>
  <label>Media Controls Position
    <select name="imageMediaControlsPosition">
      <option value="top-left">Top left</option>
      <option value="top-right">Top right</option>
      <option value="bottom-left">Bottom left</option>
      <option value="bottom-right">Bottom right</option>
    </select>
  </label>
  <span class="favicon-preview"></span>
</fieldset>

<fieldset>
  <legend>Thread Updater <span class="warning" data-feature="Thread Updater">is disabled.</span></legend>
  <div>
    Interval: <input type="number" name="Interval" class="field" min="1"> seconds
  </div>
</fieldset>

<fieldset>
    <legend>Custom Cooldown Time</legend>
    <div>
        Seconds: <input type="number" name="customCooldown" class="field" min="0">
    </div>
</fieldset>

<fieldset>
  <legend>
    <label><input type="checkbox" name="Custom CSS"> Custom CSS</label>
  </legend>
  <div>For more information about customizing 4chan X&#039;s CSS, see the <a href="https://github.com/ccd0/4chan-x/wiki/Styling-Guide" target="_blank">styling guide</a>.</div>
  <button id="apply-css">Apply CSS</button>
  <textarea hidden name="usercss" class="field" spellcheck="false"></textarea>
</fieldset>

<fieldset>
  <legend>Javascript Whitelist</legend>
  <div>
    Sources from which Javascript is allowed to be loaded by <a href="http://content-security-policy.com/#source_list" target="_blank">Content Security Policy</a>.<br>
    Lines starting with a <code>#</code> will be ignored. Remove or comment out all lines to allow everything.
  </div>
  <textarea hidden name="jsWhitelist" class="field" spellcheck="false"></textarea>
</fieldset>

<fieldset>
  <legend>Known Banners</legend>
  <div>List of known banners, used for click-to-change feature.</div>
  <textarea hidden name="knownBanners" class="field" spellcheck="false"></textarea>
</fieldset>

<fieldset>
  <legend>X (formerly Twitter) embeds</legend>
  <div>Only applies if embeds are enabled in the main settings</div>
  <label>Service to use for embeds
    <select name="XEmbedder">
      <option value="fxt">FxTwitter</option>
      <option value="tf">Twitframe</option>
    </select>
  </label><br />
  <label>
    Language to translate FxTwitter embeds to, as a two character ISO code, like <code>en</code>.
    Leave empty for no translation.
    <input name="fxtLang" maxlength="2" class="field" />
  </label><br />
  <label>FxTwitter endpoint <input name="fxtUrl" type="url" class="field" /></label><br />
  <label>FxTwitter maximum amount of replies include
    <input name="fxtMaxReplies" type="number" min="0" step="1" max="100" class="field" />
  </label>
</fieldset>

<fieldset>
  <legend>Thread updater sound</legend>
  <label>
    Sound volume, between 0 and 1:
    <input name="beepVolume" type="number" min=".01" max="1" step=".01" class="field" />
  </label><br />
  <label>
    Sound url. Can be a base64 one starting with <code>data:</code>. Leave empty for the default beep.
    <input type="string" name="beepSource" class="field wide" />
  </label>
</fieldset>`;

  var KeybindsPage = `<div class="warning"><code>Keybinds</code> are disabled.</div>
<div>Allowed keys: <kbd>a-z</kbd>, <kbd>0-9</kbd>, <kbd>Ctrl</kbd>, <kbd>Shift</kbd>, <kbd>Alt</kbd>, <kbd>Meta</kbd>, <kbd>Enter</kbd>, <kbd>Esc</kbd>, <kbd>Up</kbd>, <kbd>Down</kbd>, <kbd>Right</kbd>, <kbd>Left</kbd>.</div>
<div>Press <kbd>Backspace</kbd> to disable a keybind.</div>
<table><tbody>
  <tr><th>Actions</th><th>Keybinds</th></tr>
</tbody></table>
<button type="button" id="reset-keys">Reset keybinds</button>`;

  var FilterSelectPage = `<select name="filter">
  <option value="guide">Guide</option>
  <option value="general">General</option>
  <option value="postID">Post number</option>
  <option value="name">Name</option>
  <option value="uniqueID">Unique ID</option>
  <option value="tripcode">Tripcode</option>
  <option value="capcode">Capcode</option>
  <option value="pass">Pass Date</option>
  <option value="email">Email</option>
  <option value="subject">Subject</option>
  <option value="comment">Comment</option>
  <option value="flag">Flag</option>
  <option value="filename">Filename</option>
  <option value="dimensions">Image dimensions</option>
  <option value="filesize">Filesize</option>
  <option value="MD5">Image MD5</option>
  </select>
<div></div>`;

  var ExportDialog = `<form id="export-form">
  <div class="move">Export settings</div>
  <label><input name="history" type="checkbox" />Export history (last read, your posts, etc)</label><br />
  <label><input name="ask" type="checkbox" checked />Ask every time.</label><br />
  <button type="submit">Export</button>
  <button type="button" id="cancel-export">Cancel</button>
</form>`;

  const $$ = (selector, root = d.body) => Array.from(root.querySelectorAll(selector));

  const ImageHost = {
      init() {
          if ((!(this.useFaster = /\S/.test(Conf.fourchanImageHost))) || (g.SITE.software !== 'yotsuba') || !['index', 'thread'].includes(g.VIEW)) {
              return;
          }
          Callbacks.Post.push({
              name: 'Image Host Rewriting',
              cb: this.node
          });
      },
      suggestions: ['i.4cdn.org', 'is2.4chan.org'],
      host() {
          return Conf.fourchanImageHost.trim() || 'i.4cdn.org';
      },
      flashHost() {
          return 'i.4cdn.org';
      },
      thumbHost() {
          return 'i.4cdn.org';
      },
      test(hostname) {
          return (hostname === 'i.4cdn.org') || ImageHost.regex.test(hostname);
      },
      regex: /^is\d*\.4chan(?:nel)?\.org$/,
      node() {
          if (this.isClone) {
              return;
          }
          const host = ImageHost.host();
          if (this.file && ImageHost.test(this.file.url.split('/')[2]) && !/\.swf$/.test(this.file.url)) {
              this.file.link.hostname = host;
              if (this.file.thumbLink) {
                  this.file.thumbLink.hostname = host;
              }
              this.file.url = this.file.link.href;
          }
          return ImageHost.fixLinks($$('a', this.nodes.comment));
      },
      fixLinks(links) {
          for (const link of links) {
              if (ImageHost.test(link.hostname) && !/\.swf$/.test(link.pathname)) {
                  const host = ImageHost.host();
                  if (link.hostname !== host) {
                      link.hostname = host;
                  }
              }
          }
      }
  };

  var variableBase = `/* General */
.dialog {
  background-color: var(--xt-background);
  border-color: var(--xt-border);
}
.field:focus,
.field.focus {
  border-color: var(--xt-border-field-focus);
}

/* 4chan style fixes */
:root:not(.oneechan).highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid var(--xt-border-highlight) !important;
}
:root:not(.oneechan).highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed var(--xt-border-highlight) !important;
}

/* Header */
#header-bar.dialog {
  background-color: var(--xt-header-dialog-bg);
}
:root:not(.fixed) #header-bar, #notifications {
  font-size: var(--xt-notification-size, 9pt);
}
#header-bar, #notifications {
  color: var(--xt-header-dialog-fg);
}
#board-list a, #shortcuts a {
  color: var(--xt-header-link, unset);
}

/* Settings */
#fourchanx-settings fieldset, .section-main div::before {
  border-color: var(--xt-border);
}
.suboption-list > div:last-of-type {
  background-color: var(--xt-background);
}

/* Catalog */
:root.catalog-hover-expand .catalog-container:hover > .post {
  background-color: var(--xt-background);
}
:root.werkTyme .catalog-thread:not(:hover),
:root.werkTyme:not(.catalog-hover-expand) .catalog-thread,
:root.catalog-hover-expand .catalog-container:hover > .post,
:root.catalog-hover-expand .catalog-container:hover .catalog-reply {
  border-color: var(--xt-border);
}

/* Quote */
.backlink.deadlink {
  color: var(--xt-dead-link) !important;
}
.inline {
  border-color: var(--xt-border);
  background-color: var(--xt-inline, rgba(255, 255, 255, .14));
}

/* Fappe and Werk Tyme */
.indicator {
  color: var(--xt-background);
}

/* QR */
#dump-list::-webkit-scrollbar-thumb {
  background-color: var(--xt-background);
  border-color: var(--xt-border);
}
.qr-preview {
  background-color: var(--xt-qr-preview-bg, rgba(0, 0, 0, .15));
}
.qr-link {
  border-color: var(--xt-qr-link-border);
  background: var(--xt-qr-bg);
}
.qr-link:hover {
  background: var(--xt-link-hover-bg, var(--xt-background));
}

/* Menu */
#menu {
  color: var(--xt-menu-fg, var(--xt-header-link));
}
.entry {
  font-size: var(--xt-entry-size, 10pt);
}
.focused.entry {
  background: var(--xt-entry-focus-bg);
}

/* Unread */
.unread-mark-read {
  background-color: var(--xt-unread);
}

/* Thread Watcher */
.replies-quoting-you > a, #watcher-link.replies-quoting-you, .last-page > a > .watcher-page {
  color: var(--xt-watcher-quoting-you, #F00) !important;
}

/* Moved from style.css */

/* Highlighting */
.qphl {
  outline: 2px solid var(--xt-qphl, rgba(216, 94, 49, .8));
}
:root.highlight-you .quotesYou$site$highlightable$op,
:root.highlight-you .quotesYou$site$highlightable$reply {
  border-left: 3px solid var(--xt-border-highlight);
}
:root.highlight-own .yourPost$site$highlightable$op,
:root.highlight-own .yourPost$site$highlightable$reply {
  border-left: 3px dashed var(--xt-border-highlight) ;
}
.filter-highlight$site$highlightable$op,
.filter-highlight$site$highlightable$reply {
  box-shadow: inset 5px 0 var(--xt-filter-highlight, rgba(221, 0, 0, .5));
}
:root.highlight-own .yourPost > $site$sideArrows,
:root.highlight-you .quotesYou > $site$sideArrows,
.filter-highlight > $site$sideArrows {
  color: var(--xt-highlight-side-arrow, rgba(221, 0, 0, .8));
}

:root:not(.werkTyme) .catalog-thread.filter-highlight .catalog-thumb,
:root.werkTyme .catalog-thread.filter-highlight:not(:hover),
:root.werkTyme:not(.catalog-hover-expand) .catalog-thread.filter-highlight,
:root.werkTyme.catalog-hover-expand .catalog-thread.filter-highlight > .catalog-container:hover > .catalog-post,
:root.catalog $site$catalog$thread.filter-highlight$site$highlightable$catalog {
  box-shadow: 0 0 3px 3px var(--xt-highlight-shadow, rgba(255, 0, 0, .5));
}
:root:not(.werkTyme) .catalog-thread.watched .catalog-thumb,
:root:root.werkTyme .catalog-thread.watched:not(:hover),
:root:root.werkTyme:not(.catalog-hover-expand) .catalog-thread.watched,
:root.werkTyme.catalog-hover-expand .catalog-thread.watched > .catalog-container:hover > .catalog-post {
  border: 2px solid var(--xt-watched-border, rgba(255, 0, 0, .75));
}

.unread-line {
  border-color: var(--xt-unread-line, rgb(255,0,0));
}

:root.tomorrow,
:root.spooky {
  color-scheme: dark;
}

:root.tomorrow .field,
:root.spooky .field {
  background-color: unset;
  color: unset;
  border-color: unset;
}

:root.tomorrow input[type="button"],
:root.spooky input[type="button"] {
  filter: brightness(80%);
}`;

  var photon = `:root.photon {
  --xt-background: #DDD;
  --xt-border: #CCC;
  --xt-border-field-focus: #EA8;
  --xt-border-highlight: rgba(221, 0, 0, .8);
  --xt-header-dialog-bg: rgba(221, 221, 221, 0.98);
  --xt-header-dialog-fg: #333;
  --xt-dead-link: #F60;
  --xt-qr-link-border: rgb(206, 206, 206) rgb(206, 206, 206) rgb(191, 191, 191);
  --xt-qr-bg: linear-gradient(#ECECEC, #DDD) repeat scroll 0% 0% transparent;
  --xt-menu-fg: #333;
  --xt-entry-focus-bg: rgba(255, 255, 255, .33);
  --xt-unread: rgba(221, 221, 221, 0.5);
  --xt-watcher-quoting-you: #00F;
  --xt-watcher: #333;

  --xt-fxt-fg: #333;
}

/* 4chan style fixes */
:root.photon #arc-list tr:nth-of-type(odd) span.quote {
  color: #C0E17A;
}`;

  var report = `#g-recaptcha,
:root:not(.js-enabled) #captchaContainerAlt {
  height: auto;
}
#captchaContainerAlt td:nth-child(2) {
  display: table-cell !important;
}

/* Archive reports */
#archive-report {
  padding: 3px;
}
#archive-report-enabled {
  vertical-align: middle;
}
#archive-report > label {
  display: block;
}
#archive-report-reason {
  display: block;
  width: 98%;
}
.archive-report-success {
  color: green;
}
.archive-report-error {
  color: red;
}`;

  var spooky = `:root.spooky {
  --xt-background: #171526;
  --xt-link-hover-bg: #1A1829;
  --xt-border: #707070;
  --xt-border-field-focus: #98E;
  --xt-border-highlight: rgba(145, 182, 214, .8);
  --xt-header-dialog-bg: rgba(23, 21, 38, 0.98);
  --xt-header-dialog-fg: #C49756;
  --xt-header-link: #FE9600;
  --xt-dead-link: #FE9600;
  --xt-qr-link-border: rgb(8, 6, 23) rgb(8, 6, 23) rgb(0, 0, 8);
  --xt-qr-bg: linear-gradient(#262435, #171526) repeat scroll 0% 0% transparent;
  --xt-entry-focus-bg: rgba(255, 255, 255, .33);
  --xt-unread: rgba(23, 21, 38, 0.5);
  --xt-watcher: #fe9600;

  --xt-unread-line: rgb(197, 200, 198);
  --xt-filter-highlight: rgba(145, 182, 214, .5);
  --xt-qphl: rgba(145, 182, 214, .8);
  --xt-highlight-side-arrow: rgb(155, 185, 210);

  --xt-fxt-fg: #f0f8ffd1;
}

/* 4chan style fixes */
:root.spooky #arc-list span.quote {
  color: #634C2C;
}

:root.spooky.shortcut-icons .native-settings {
  background-image: url('//s.4cdn.org/image/favicon-ws.ico');
}

:root.spooky #qr .field {
  background-color: rgb(26, 27, 29);
  color: rgb(197,200,198);
  border-color: rgb(40, 41, 42);
}
:root.spooky #qr .field:focus,
:root.spooky #qr .field.focus {
  border-color: rgb(254, 150, 0) !important;
  background-color: rgb(30,32,36);
}
:root.spooky #qr select {
  border-color: rgb(40, 41, 42);
  background: unset;
}
:root.spooky #qr-filename {
  color: rgb(197,200,198);
}

/* Unread */
:root.spooky .unread-line {
  visibility: visible;
  opacity: 1;
}`;

  var style = `/* General */
.dialog {
  border: 1px solid;
  display: block;
  background-color: inherit;
}
.dialog:not(#qr):not(#thread-watcher):not(#header-bar) {
  box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
}
#qr,
#thread-watcher {
  box-shadow: -1px 2px 2px rgba(0, 0, 0, 0.25);
}
.field {
  background-color: #FFF;
  padding: 2px 4px 3px;
  border: 1px solid #CCC;
  box-sizing: border-box;
  color: #333;
  font: 13px sans-serif;
  outline: none;
  margin: 0px;
  transition: color .25s, border-color .25s;
}
.field::placeholder {
  color: #AAA;
  opacity: 1;
}
.field:hover {
  border-color: #999;
}
.field:hover, .field:focus, .field.focus {
  color: #000;
}
.field[disabled] {
  background-color: #F2F2F2;
  color: #888;
}
.move {
  cursor: move;
  overflow: hidden;
}
label {
  cursor: pointer;
}
a[href="javascript:;"] {
  text-decoration: none;
}
.warning {
  color: red;
}
:root.sw-yotsuba #boardNavDesktop, :root.sw-yotsuba #boardNavMobile {
  display: none !important;
}
:root.hide-bottom-board-list $site$boardListBottom {
  display: none;
}
body.hasDropDownNav{
  margin-top: 5px;
}
.painted {
  border-radius: 3px;
  padding: 0px 2px;
}
[hidden] {
  display: none !important;
}

/* 4chan style fixes */
/* overrides 4chan CSS on div.opContainer, div.op */
:root.sw-yotsuba .opContainer, :root.sw-yotsuba .op {
  display: block;
  overflow: visible;
}
:root.sw-yotsuba .reply > .file > .fileText {
  margin: 0 20px;
}
:root.sw-yotsuba #arc-list span.quote {
  color: #789922;
}
:root.sw-yotsuba .fileText a {
  unicode-bidi: isolate;
}
:root.sw-yotsuba #g-recaptcha {
  min-height: 78px;
  height: auto;
}
:root.sw-yotsuba:not(.js-enabled) #postForm {
  display: table;
}
:root.sw-yotsuba #captchaContainerAlt td:nth-child(2) {
  display: table-cell !important;
}
:root.sw-yotsuba canvas#tegaki-canvas {
  background: none;
}
/* Disable obnoxious captcha fade-in. */
:root.sw-yotsuba > body > div:last-of-type {
  transition: none !important;
}
/* Fix captcha scrolling to top of page. */
:root.sw-yotsuba > body > div[style*=" top: -10000px;"] {
  visibility: hidden !important;
}
/* Make long filenames wrap properly: https://github.com/ccd0/4chan-x/issues/1082 */
:root.sw-yotsuba .post > .file {
  word-break: break-word;
}
:root.sw-yotsuba:not(.ua-webkit):not(.ua-blink) .fileText {
  word-wrap: break-word;
  max-width: calc(100vw - 90px);
}
:root.sw-yotsuba > body.is_catalog .thread > a > img {
  display: inline-block;
}
/* Links to NSFW boards */
:root.sw-yotsuba .nwsb {
  display: inline;
}
:root.sw-yotsuba .fileText {
  white-space: normal;
}

/* Ads */
:root.sw-yotsuba .ad-cnt > *, :root.sw-yotsuba .adg-rects > *, :root.sw-yotsuba .bsa-cnt {
  height: auto !important;
}
:root.sw-yotsuba:not(.ads-loaded) hr.abovePostForm,
:root.sw-yotsuba:not(.ads-loaded) .adg-rects > hr,
:root.sw-yotsuba #adg-ol + hr,
:root.sw-yotsuba .danbo-slot:empty {
  display: none;
}
:root.sw-yotsuba .adg-rects {
  margin: 0;
  font-size: 0;
}
:root.sw-yotsuba div.center[style] {
  display: none !important;
}

/* Tinyboard / vichan conflicts */
#menu > .hide-thread-link {
  width: auto;
  height: auto;
  overflow: visible;
  background-image: none;
}
#menu label.entry {
  display: block;
}
#fourchanx-settings label {
  display: inline;
}
.intro a[href="javascript:;"],
#menu a {
  margin: 0;
}
.gal-buttons.gal-buttons a {
  font-size: inherit;
}
:root.sw-tinyboard.fixed.top-header:not(.autohide) .boardlist,
:root.sw-tinyboard.fixed.top-header:not(.autohide) .bar.top {
  position: static;
}
:root.sw-tinyboard.fixed.top-header:not(.autohide) div.pages.top {
  top: auto;
  bottom: 0;
}
:root.sw-tinyboard.fixed.top-header.autohide .boardlist,
:root.sw-tinyboard.fixed.top-header.autohide .bar.top {
  z-index: 3;
}

/* Tinyboard site style conflicts */
:root[data-host="merorin.com"].fixed.top-header:not(.autohide) span.settings {
  top: 26px;
}
:root[data-host="lainchan.org"]:not(.fixed) #header-bar {
  margin-top: 17px;
}

/* Anti-autoplay */
audio.controls-added {
  display: block;
  margin: auto;
  white-space: normal;
}
:root.anti-autoplay div.embed {
  position: static;
  width: auto;
  height: auto;
  text-align: center;
}
:root.anti-autoplay .autoplay-removed {
  visibility: visible !important;
  min-width: 640px;
  min-height: 360px;
}

/* fixed, z-index */
#overlay,
#qp, #ihover,
#navlinks, .fixed #header-bar,
:root.float #updater,
:root.float #thread-stats,
#qr,
#export-dialog {
  position: fixed;
}
#overlay {
  z-index: 999;
}
#qp, #ihover {
  z-index: 60;
}
#menu, .gal-buttons {
  z-index: 50;
}
#updater, #thread-stats {
  z-index: 40;
}
:root.fixed #header-bar, #notifications {
  z-index: 35;
}
#a-gallery {
  z-index: 30;
}
#navlinks {
  z-index: 25;
}
#qr {
  z-index: 20;
}
#embedding {
  z-index: 11;
}
#export-dialog {
  z-index: 1001;
}
:root.fixed-watcher #thread-watcher {
  z-index: 10;
}
:root.fixed:not(.gallery-open) #header-bar:not(:hover) {
  z-index: 8;
}
#thread-watcher {
  z-index: 5;
}

/* Header */
.fixed.top-header body {
  padding-top: 2em;
}
.fixed.bottom-header body {
  padding-bottom: 2em;
}
.fixed #header-bar {
  right: 0;
  left: 0;
  padding: 4px;
  font-size: 13px;
}
.fixed.top-header #header-bar {
  top: 0;
}
.fixed.bottom-header #header-bar {
  bottom: 0;
}
#header-bar {
  border-width: 0;
  transition: all .1s .05s ease-in-out;
}
:root.fixed #header-bar {
  box-shadow: -5px 1px 10px rgba(0, 0, 0, 0.20);
}
:root.centered-links #shortcuts {
  width: 300px;
  text-align: right;
  justify-content: right;
}
:root.centered-links #header-bar {
  text-align: center;
}
:root.centered-links #custom-board-list {
  position: relative;
  left: 150px;
}
.fixed.top-header #header-bar {
  border-bottom-width: 1px;
}
.fixed.bottom-header #header-bar {
  box-shadow: 0 -1px 2px rgba(0, 0, 0, .15);
  border-top-width: 1px;
}
.fixed.bottom-header #header-bar .menu-button .icon {
  transform: rotate(180deg) translateY(-.125em);
}
.fixed #header-bar.autohide:not(:hover) {
  box-shadow: none;
  transition: all .8s .6s cubic-bezier(.55, .055, .675, .19);
}
.fixed.top-header #header-bar.autohide:not(:hover) {
  margin-bottom: -1em;
  transform: translateY(-100%);
}
.fixed.bottom-header #header-bar.autohide:not(:hover) {
  transform: translateY(100%);
}
#scroll-marker {
  left: 0;
  right: 0;
  height: 10px;
  position: absolute;
}
#header-bar:not(.autohide) #scroll-marker {
  pointer-events: none;
}
#header-bar #scroll-marker {
  display: none;
}
.fixed #header-bar #scroll-marker {
  display: block;
}
.fixed.top-header #header-bar #scroll-marker {
  top: 100%;
}
.fixed.bottom-header #header-bar #scroll-marker {
  bottom: 100%;
}
#board-list a {
  text-decoration: none;
  padding: 1px;
}
#shortcuts:empty {
  display: none;
}
.dead-thread,
.disabled:not(.replies-quoting-you) {
  opacity: .45;
}
#shortcuts {
  float: right;
  display: flex;
  gap: 4px;
}
#shortcuts .icon {
  font-size: 14px;
}
:root.autohiding-scrollbar #shortcuts {
  margin-right: 12px;
}
:root.shortcut-icons .native-settings {
  font-size: 0;
  color: transparent;
  display: inline-block;
  vertical-align: top;
  height: 14px;
  width: 14px;
  background: url('//s.4cdn.org/image/favicon.ico') -1px -1px no-repeat;
}
#navbotright,
#navtopright {
  display: none;
}
#toggleMsgBtn {
  display: none !important;
}
.current,
:root.sw-yotsuba div#boardNavDesktopFoot a.current {
  font-weight: bold;
}
/* 4chan X link brackets */
.brackets-wrap::before {
  content: "[";
}
.brackets-wrap::after {
  content: "]";
}
/* Notifications */
#notifications {
  position: fixed;
  top: 0;
  height: 0;
  text-align: center;
  right: 0;
  left: 0;
  visibility: visible;
}
#notifications:empty {
  display: none;
}
:root.fixed.top-header:not(.gallery-open) #header-bar #notifications,
:root.fixed.top-header #header-bar.autohide #notifications {
  position: absolute;
  top: 100%;
}
.notification {
  color: #FFF;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, .5);
  box-shadow: 0 1px 2px rgba(0, 0, 0, .15);
  border-radius: 2px;
  margin: 1px auto;
  width: 550px;
  max-width: 100%;
  position: relative;
  transition: all .25s ease-in-out;
  padding: 6px 5px 6px 20px;
  display: flex;
  gap: 5px;
  align-items: center;
}
.notification.error {
  background-color: hsla(0, 100%, 38%, .9);
}
.notification.warning {
  background-color: hsla(36, 100%, 38%, .9);
}
.notification.info {
  background-color: hsla(200, 100%, 38%, .9);
}
.notification.success {
  background-color: hsla(104, 100%, 38%, .9);
}
.notification a {
  color: white;
}
.notification > .close {
  order: 1;
}
.message {
  overflow-wrap: break-word;
  box-sizing: border-box;
  padding: 0 5px;
  max-height: 200px;
  width: 100%;
  overflow: auto;
  white-space: pre-line;
}
.message a {
  text-decoration: underline;
}
:root.tainted .report-error {
  display: none;
}

/* Settings */
:root.fourchan-x body {
  box-sizing: border-box;
}
#overlay {
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
#fourchanx-settings {
  box-sizing: border-box;
  box-shadow: 0 0 15px rgba(0, 0, 0, .15);
  height: 600px;
  max-height: 100%;
  width: 900px;
  max-width: 100%;
  margin: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
}
#fourchanx-settings > nav {
  padding: 2px 2px 8px;
  display: flex;
}
#fourchanx-settings > nav a {
  text-decoration: underline;
}
#fourchanx-settings > nav a.close {
  text-decoration: none;
  padding: 0 2px;
  margin: 0;
}
.section-container {
  flex: 1;
  position: relative;
  overflow: auto;
  padding-right: 5px;
  overscroll-behavior: contain;
}
.sections-list {
  flex: 1;
}
.export, .import, .reset {
  cursor: pointer;
  text-decoration: none !important;
}
.tab-selected {
  font-weight: 700;
}
.section-sauce ul,
.section-advanced ul {
  list-style: none;
  margin: 0;
}
.section-sauce ul {
  padding: 8px;
}
.section-advanced ul {
  padding: 0px;
}
.section-sauce li,
.section-advanced li {
  padding-left: 4px;
}
.section-main ul {
  margin: 0;
  padding: 0 0 0 16px;
}
.section-main li {
  white-space: pre-line;
  list-style: disc;
}
.section-main li:not(:first-of-type) {
  margin-top: 4px;
}
.section-main label {
  text-decoration: underline;
}
div[data-checked="false"] > .suboption-list {
  display: none;
}
.suboption-list {
  position: relative;
}
.suboption-list::before {
  content: "";
  display: inline-block;
  position: absolute;
  left: .7em;
  width: 0;
  height: 100%;
  border-left: 1px solid;
}
.suboption-list > div {
  position: relative;
  padding-left: 1.4em;
}
.suboption-list > div::before {
  content: "";
  display: inline-block;
  position: absolute;
  left: .7em;
  width: .7em;
  height: .6em;
  border-left: 1px solid;
  border-bottom: 1px solid;
}
#fourchanx-settings .section-main p {
  margin: .5em 0 0;
}
.section-filter ul {
  padding: 0;
}
.section-filter li {
  margin: 10px 40px;
  list-style: disc;
}
.section-filter textarea {
  height: 500px;
}
.section-main a, .section-filter a, .section-advanced a {
  text-decoration: underline;
}
#sauce-doc-expand:not(:checked) ~ #sauce-doc {
  max-height: 130px;
  overflow: auto;
}
#sauce-doc > label {
  float: right;
  margin: 0 5px;
}
/* XXX for OneeChan */
#sauce-doc-expand + .riceCheck {
  display: none;
}
.section-sauce textarea {
  height: 430px;
}
.section-advanced .field.wide {
  width: 100%;
}
.section-advanced textarea {
  height: 150px;
}
.section-advanced textarea[name="archiveLists"],
.section-advanced textarea[name="externalCatalogURLs"],
.section-advanced textarea[name="knownBanners"] {
  height: 75px;
}
.section-advanced .archive-cell {
  min-width: 160px;
  text-align: center;
}
.section-advanced #archive-board-select {
  position: absolute;
}
.section-advanced .note {
  font-size: 0.8em;
  font-style: italic;
  margin-left: 10px;
}
.section-advanced .note code {
  font-style: normal;
  font-size: 11px;
}
.favicon-preview > img {
    vertical-align: middle;
}
.favicon-preview > img:nth-of-type(3n+1) {
    margin-left: 4px;
}
.section-keybinds .field {
  font-family: monospace;
}
#fourchanx-settings fieldset {
  border: 1px solid;
  border-radius: 3px;
  padding: 0.35em 0.625em 0.75em;
  margin: 0px 2px;
}
#fourchanx-settings legend {
  font-weight: 700;
  color: inherit;
}
#fourchanx-settings textarea {
  font-family: monospace;
  width: 100%;
  resize: vertical;
}
#fourchanx-settings code {
  color: #000;
  background-color: #FFF;
  padding: 0 2px;
}
#fourchanx-settings th {
  text-align: center;
  font-weight: bold;
}
#fourchanx-settings p {
  margin: 1em 0px;
}
#fourchanx-settings table {
  margin: auto;
}

/* Index */
:root.index-loading .navLinks:not(.json-index),
:root.index-loading .board:not(.json-index),
:root.index-loading .pagelist:not(.json-index),
:root.infinite-mode .pagelist,
:root.all-pages-mode .pagelist,
:root.catalog-mode .pagelist,
:root:not(.catalog-mode) .indexlink,
:root.catalog-mode .cataloglink,
:root:not(.catalog-mode) #hidden-label,
:root:not(.catalog-mode) #index-size {
  display: none;
}
#index-search {
  padding-right: 1.5em;
  width: 100px;
  transition: color .25s, border-color .25s, width .25s;
}
#index-search:focus,
#index-search[data-searching] {
  width: 200px;
}
#index-search-clear {
  color: gray;
  position: relative;
  left: -1.5em;
}
#index-search::-webkit-search-cancel-button {
  display: none;
}
#index-search:not([data-searching]) + #index-search-clear {
  display: none;
}
#index-options {
  float: right;
}
#lastlong-options {
  display: inline-block;
  vertical-align: middle;
  height: 28px;
  margin: -14px 0;
}
#lastlong-options > input {
  padding: 0;
  border: 0 !important;
  text-align: center;
  background: transparent;
  display: block;
  font-size: 12px;
  height: 12px;
  width: 30px;
  margin: 1px 0;
}
.summary {
  text-decoration: none;
}

/* Catalog */
:root.catalog-mode .board {
  text-align: center;
}
.catalog-thread {
  display: inline-block;
  box-sizing: border-box;
  border: 1px solid transparent;
  word-wrap: break-word;
  vertical-align: top;
  position: relative;
}
/* overrides 4chan CSS on div.thread */
.catalog-thread.catalog-thread {
  margin: 2px;
}
.catalog-small > .catalog-thread {
  width: 165px;
  height: 320px;
}
.catalog-large > .catalog-thread {
  width: 270px;
  height: 410px;
}
:root.catalog-hover-expand .catalog-thread:hover {
  z-index: 1;
}
.catalog-container {
  position: absolute;
  top: -4px;
  left: 0;
  right: 0;
  bottom: 0;
}
.catalog-container:not(:hover),
:root:not(.catalog-hover-expand) .catalog-container {
  overflow: hidden;
}
.catalog-post {
  position: absolute;
  top: 4px;
  left: 0;
  right: 0;
  border: 1px solid transparent;
  padding-top: 20px;
}
/* overrides inline CSS from Index.cb.hoverAdjust */
:root:not(.catalog-hover-expand) .catalog-post {
  left: 0 !important;
  right: 0 !important;
}
/* overrides 4chan CSS on div.post */
.catalog-post.catalog-post {
  margin: -21px -1px -1px;
  overflow: visible;
}
.catalog-thread.noFile > * > .catalog-post {
  margin-top: -7px;
  padding-top: 6px;
}
:root.catalog-hover-expand .catalog-container:hover > .catalog-post {
  margin-left: -61px;
  margin-right: -61px;
}
:root.catalog-hover-expand .catalog-container:hover > * > :not(.catalog-replies) {
  padding-left: 2px;
  padding-right: 2px;
}
.catalog-link {
  display: block;
  position: relative;
}
.catalog-thumb {
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .25);
  vertical-align: top;
}
.catalog-thumb.spoiler-file {
  width: 100px;
  height: 100px;
}
.catalog-thumb.deleted-file {
  width: 127px;
  height: 13px;
  padding: 20px 11px;
}
.catalog-thumb.no-file {
  width: 77px;
  height: 13px;
  padding: 20px 36px;
}
.catalog-icons > img,
.catalog-stats > .menu-button {
  width: 1em;
  height: 1em;
  margin: 0;
  vertical-align: text-top;
  padding-left: 2px;
}
.catalog-stats > .menu-button > .icon {
  height: 10px;
}
.catalog-stats {
  font-size: 10px;
  font-weight: 700;
  padding-top: 2px;
}
.catalog-stats > [title] {
  cursor: help;
}
.catalog-post > .postMessage {
  margin: 0;
  padding-bottom: .3em;
}
.catalog-container:not(:hover) > * > .file,
.catalog-container:not(:hover) > * > .postInfo > :not(.subject),
.catalog-container:not(:hover) > * > .catalog-replies,
.catalog-container:not(:hover) .extra-linebreak,
.catalog-container:not(:hover) .abbr,
:root:not(.catalog-hover-expand) .catalog-container > * > .file,
:root:not(.catalog-hover-expand) .catalog-container > * > .postInfo > :not(.subject),
:root:not(.catalog-hover-expand) .catalog-container > * > .catalog-replies,
:root:not(.catalog-hover-expand) .catalog-container .extra-linebreak,
:root:not(.catalog-hover-expand) .catalog-container .abbr,
.catalog-thread > .catalog-container > :not(.catalog-post),
.preview-summary,
.catalog-post > .file > :not(.fileText),
.catalog-post > * > .fileText > :not(:first-child),
.catalog-post > .postInfo > :not(.subject):not(.nameBlock):not(.dateTime),
.catalog-post > .postInfo > .nameBlock > .contact-links,
.catalog-post > * > * > .posteruid,
.catalog-post > * > * > .postJumper,
:root.bottom-backlinks .catalog-post > .container,
.post:not(.catalog-post) > .catalog-link,
.post:not(.catalog-post) > .catalog-stats,
.post:not(.catalog-post) > .catalog-replies {
  display: none;
}
.catalog-post > .file {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  min-height: 20px;
  background-color: inherit;
}
.catalog-post > * > .fileText {
  position: relative;
  padding: 2px;
  background-color: inherit;
}
.catalog-small .catalog-post > * .fileText {
  font-size: 10px;
}
.catalog-post > * > .fileText:not(:hover) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.catalog-post > * > .fileText:hover {
  z-index: 1;
}
/* overrides 4chan CSS on div.post div.postInfo */
.catalog-post > .postInfo.postInfo {
  width: auto;
}
.catalog-post > * > .subject {
  display: block;
}
.catalog-post > * > .dateTime {
  display: inline-block;
  font-style: italic;
}
:root.catalog-hover-expand .catalog-container:hover > * > * > .nameBlock,
:root.catalog-hover-expand .catalog-container:hover > * > * > .dateTime,
:root.catalog-hover-expand .catalog-container:hover > * > .postMessage:not(:empty) {
  padding-top: .3em;
}
.catalog-post .extra-linebreak {
  content: ''; /* makes this work in Blink/WebKit */
  display: block;
  margin-top: .3em;
}
.catalog-reply {
  text-align: left;
  white-space: nowrap;
  border-top: 1px solid transparent;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.catalog-reply > * {
  padding: 3px;
  overflow: hidden;
  flex: none;
}
.catalog-reply > span {
  font-style: italic;
  font-weight: bold;
}
.catalog-reply-excerpt {
  flex: 1 1 auto;
}
.catalog-post .prettyprinted {
  max-width: 100%;
  box-sizing: border-box;
}
.catalog-post .MathJax_Display {
  text-align: center !important;
}
.catalog-container:not(:hover) .exif,
:root:not(.catalog-hover-expand) .catalog-container .exif {
  display: none !important;
}
.catalog-post > * > .exif {
  border-collapse: collapse;
}
:root.catalog-hover-expand .catalog-container:hover .exif[style*="display: block;"] {
  display: inline-block !important;
}
.catalog-post > * > .exif,
.catalog-post > * > .exif > tbody {
  background-color: inherit;
}
.catalog-post > * > .exif,
.catalog-post > * > .exif td {
  min-width: 0;
}
.catalog-post > * > .exif td {
  padding-top: 1px;
}
:root.hats-enabled .catalog-thread::after {
  content: '';
  pointer-events: none;
  position: absolute;
  background-size: contain;
}
:root.hats-enabled .catalog-small > .catalog-thread::after {
  left: -8px;
  top: -59px;
  width: 96px;
  height: 96px;
}
:root.hats-enabled:not(.werkTyme) .catalog-small > .catalog-thread:not(.noFile)::after {
  left: calc(67px - .3px * var(--tn-w));
}
:root.hats-enabled .catalog-large > .catalog-thread::after {
  left: -15px;
  top: -98px;
  width: 160px;
  height: 160px;
}
:root.hats-enabled:not(.werkTyme) .catalog-large > .catalog-thread:not(.noFile)::after {
  left: calc(110px - .5px * var(--tn-w));
}

/* Copy Text Link's textarea element */
textarea.copy-text-element {
  height: 0;
  width: 0;
  position: absolute;
  top: -10000px;
}

/* Announcement Hiding */
:root.hide-announcement $site$psa {
  display: none;
}
.hide-announcement-button {
  opacity: 0.4;
  float: left;
}

/* Unread */
.unread-line {
  margin: 0;
}
.unread-line + br {
  display: none;
}
.unread-mark-read {
  float: right;
  clear: both;
  width: 100%;
  text-align: right;
}
:not(.unread-thread) > .unread-mark-read {
  display: none;
}

/* Thread Updater */
#updater {
  background: none;
  border: none;
  box-shadow: none;
}
#updater > .move {
  position: absolute;
  top: -5px;
  bottom: -5px;
  left: -5px;
  right: -5px;
  z-index: -1;
}
#updater > div:last-child {
  text-align: center;
}
#updater input[type="number"] {
  width: 4em;
}
:root.float #updater {
  padding: 0px 3px;
}
:root:not(.float).shortcut-icons #updater {
  display: inline-block;
  min-width: 12pt;
  text-align: right;
}
.new {
  color: limegreen;
}
#update-status:not(.empty) + #update-timer:not(.empty):not(.loading) {
  margin-left: 5px;
}
#update-timer {
  cursor: pointer;
}

/* Thread Watcher */
#thread-watcher {
  position: absolute;
}
#thread-watcher {
  padding-bottom: 3px;
  padding-left: 3px;
  white-space: nowrap;
  min-width: 146px;
}
#watched-threads {
  overflow-x: hidden;
  overflow-y: auto;
}
:root.fixed-watcher #thread-watcher {
  position: fixed;
}
:root.fixed-watcher #watched-threads {
  max-height: calc(100vh - 75px);
}
:root:not(.fixed-watcher) #watched-threads:not(:hover) {
  max-height: 210px;
  overflow-y: hidden;
}
#thread-watcher > .move {
  padding-top: 3px;
  display: flex;
  align-items: center;
  gap: 3px;
}
#watched-threads > div {
  padding-left: 3px;
  padding-right: 3px;
}
#watched-threads .watcher-link {
  max-width: 250px;
  display: inline-flex;
  flex-direction: row;
}
#watched-threads .watcher-page,
#watched-threads .watcher-unread {
  flex: 0 0 auto;
  margin-right: 2px;
}
#watched-threads .watcher-title {
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 0 1 auto;
}
#watched-threads .watcher-title:not(:first-child) {
  margin-left: 2px;
}
.replies-quoting-you > a, #watcher-link.replies-quoting-you, .last-page > a > .watcher-page {
  color: #F00;
}
#thread-watcher a {
  text-decoration: none;
}
#thread-watcher .move > .close {
  margin-left: auto;
}
.watch-thread-link {
  width: 18px;
  height: 18px;
  background: none;
  border: none;
  padding: 2px;
  opacity: 0.2;
  filter: none;
  cursor: pointer;
  color: var(--xt-watcher, #000);
}
.watch-thread-link.watched {
  opacity: 1;
}
:root.oneechan .watch-thread-link > svg {
  display: none;
}


/* Thread Stats */
#thread-stats {
  background: none;
  border: none;
  box-shadow: none;
}
:root.float #thread-stats > .move > :not(#page-count) {
  pointer-events: none;
}
:root.float #thread-stats {
  padding: 0px 3px;
}
#page-count {
  cursor: pointer;
}

/* Quote */
.hashlink::before {
  content: ' ';
  visibility: hidden;
}
.inline + .hashlink {
  display: none !important;
}
:root.resurrect-quotes .deadlink {
  text-decoration: none !important;
}
.catalog-post .qmark-ct {
  display: none;
}
.backlink.deadlink:not(.forwardlink),
.quotelink.deadlink:not(.forwardlink) {
  text-decoration: underline !important;
}
:root:not(.catalog-mode) .inlined {
  opacity: .5;
}
#qp input, .forwarded {
  display: none;
}
.quotelink.forwardlink,
.backlink.forwardlink {
  text-decoration: underline dashed;
}
.filtered {
  text-decoration: underline line-through;
}
:root.hide-backlinks .backlink.filtered,
:root.hide-backlinks .backlink.filtered + .hashlink.filtered {
  display: none;
}
.postNum + .container::before {
  content: " ";
}
:root.bottom-backlinks .container {
  display: block;
  clear: both;
  margin: 0 4px;
}
:root.bottom-backlinks .backlink {
  font-size: 90%;
}
.inline {
  border: 1px solid;
  display: table;
  margin: 2px 0;
}
.container ~ .inline {
  margin-left: 20px;
}
:root.catalog-mode .inline {
  display: none;
}
.inline .post {
  border: 0 !important;
  background-color: transparent !important;
  display: table !important;
  margin: 0 !important;
  padding: 1px 2px !important;
}
#qp > .opContainer::after {
  content: '';
  clear: both;
  display: table;
}
#qp .post {
  border: none;
  margin: 0;
  padding: 2px 2px 5px;
}
#qp img {
  max-height: 80vh;
  max-width: 50vw;
}
#qp .preview-summary {
  display: block;
}

/* Quote Threading */
.threadContainer {
  margin-left: 20px;
  border-left: 1px solid rgba(128,128,128,.3);
}
.threadOP {
  clear: both;
}

/* File */
.expanded-image > .post > .file > .fileThumb {
  display: flex;
  flex-direction: column;
}
.fileText-original,
.fnswitch:hover > .fntrunc,
.fnswitch:not(:hover) > .fnfull,
.expanded-image > .post > .file > .fileThumb > video[data-md5],
.expanded-image > .post > .file > .fileThumb > img[data-md5] {
  display: none;
}
.full-image[data-file-i-d] {
  display: none;
  cursor: pointer;
}
.expanded-image > .post > .file > .fileThumb .full-image {
  display: inline;
}
.expanded-image > .post > .file > .fileThumb > audio {
  height: 30px;
  width: 100%;
  min-width: 300px;
}
.expanded-image {
  clear: left;
}
.expanding {
  opacity: .5;
}
:root.fit-height .full-image {
  max-height: 100vh;
}
:root.fit-height.fixed .full-image {
  max-height: calc(100vh - 35px);
}
:root.fit-width .full-image {
  max-width: 100%;
}
:root.ua-gecko.fit-width .full-image {
  width: 100%;
}
.fileThumb > .warning {
  clear: both;
}
#ihover {
  pointer-events: none;
  max-height: calc(100vh - 25px);
  max-width: 100vw;
}
/* /* WEBM Metadata */ */
/* .webm-title > a::before { */
/*   content: "title"; */
/*   text-decoration: underline; */
/* } */
/* .webm-title.loading > a::after { */
/*   content: "..."; */
/* } */
/* .webm-title.error > a:hover::before, */
/* .webm-title.error > a:focus::before { */
/*   content: "error"; */
/*   text-decoration: none; */
/* } */
/* .webm-title > span { */
/*   cursor: text; */
/* } */
/* .webm-title.not-found > span::before { */
/*   content: "not found"; */
/* } */
/* .webm-title:not(:hover):not(:focus) > span, */
/* .webm-title:hover > span + a, */
/* .webm-title:focus > span + a { */
/*   display: none; */
/* } */
/* Volume control */
input[name="Default Volume"] {
  width: 4em;
  height: 1ex;
  vertical-align: middle;
  margin: 0px;
}
/* Fappe and Werk Tyme */
:root.fappeTyme $site$replyOriginal.noFile,
:root.fappeTyme $site$replyOriginal.noFile + br {
  display: none;
}
:root.werkTyme $site$thumbLink,
:root.werkTyme $site$file$thumb,
:root.werkTyme .catalog-thumb:not(.deleted-file):not(.no-file),
:root:not(.werkTyme) .werkTyme-filename {
  display: none;
}
.werkTyme-filename {
  font-weight: bold;
  font-size: 110%;
}
:root.werkTyme .catalog-link {
  box-shadow: 0 0 5px rgba(0, 0, 0, .25);
  padding: 8px;
  text-align: center;
}
:root.werkTyme .catalog-thumb {
  box-shadow: none;
  padding: 0;
  vertical-align: middle;
}
.indicator {
  background: rgba(255,0,0,0.8);
  font-weight: bold;
  display: inline-block;
  min-width: 9px;
  padding: 0px 2px;
  margin: 0 1px;
  text-align: center;
  color: white;
  border-radius: 2px;
  cursor: pointer;
}
:root:not(.fappeTyme) #shortcut-fappe,
:root:not(.werkTyme) #shortcut-werk {
  display: none !important;
}

/* Index/Reply Navigation */
#navlinks {
  top: 25px;
  right: 10px;
}
:root.catalog-mode #navlinks {
  display: none;
}
:root.highlight-own .yourPost$site$highlightable$op::after,
:root.highlight-you .quotesYou$site$highlightable$op::after,
.filter-highlight$site$highlightable$op::after {
  content: "";
  display: block;
  clear: both;
}

/* Spoiler text */
:root.reveal-spoilers $site$spoiler,
:root.reveal-spoilers $site$spoiler > a {
  color: white !important;
}
:root.reveal-spoilers .removed-spoiler::before {
  content: "[spoiler]";
}
:root.reveal-spoilers .removed-spoiler::after {
  content: "[/spoiler]";
}

/* Thread & Reply Hiding */
.hide-thread-button,
.hide-reply-button {
  float: left;
  margin-right: 4px;
  padding: 2px;
}
$site$infoRoot a.hide-reply-button {
  margin-right: 6px;
  padding: 0;
}
.replacedSideArrows {
  float: left;
}
.hide-thread-button:not(:hover),
.hide-reply-button:not(:hover) {
  opacity: 0.4;
}
.threadContainer .hide-reply-button {
  margin-left: 2px !important;
  position: relative;
  left: 1px;
}
.hide-thread-button {
  margin-top: -1px;
  width: 11px;
}
.stub ~ :not(.threadDivider) {
  display: none !important;
}
.stub input {
  display: inline-block;
}
.stub .stub-icon,
.stub-subject {
  margin-right: 1ch;
}
.stub-replies {
  margin-left: 1ch;
}
.stub-reasons::before { content: ' ('; }
.stub-reasons::after { content: ')'; }
.stub-reason:not(:last-of-type)::after { content: ' & '; }
$site$thread[hidden] + hr {
  display: none;
}
:root.reply-hide $site$sideArrows {
  display: none;
}
:root.sw-yotsuba.thread-hide .party-hat {
  left: 19px;
}

/* Anonymize */
:root.anonymize $site$info$name,
:root.sw-yotsuba.anonymize .post-author:not([class*=capcode]) {
  font-size: 0;
}
:root.anonymize $site$info$tripcode,
:root.sw-yotsuba.anonymize .n-pu {
  display: none;
}
:root.anonymize $site$info$name::before,
:root.sw-yotsuba.anonymize .post-author:not([class*=capcode])::before {
  content: "Anonymous";
  font-size: 10pt;
}
:root.sw-yotsuba.anonymize .flashListing .name::before,
:root.sw-yotsuba.anonymize .post-last > .post-author:not([class*=capcode])::before {
  font-size: 9pt;
}

/* QR */
:root.hide-original-post-form #togglePostFormLink,
#qr.autohide:not(.focus):not(:hover):not(:active) > form,
:root.thread-view #qr:not(.show-new-thread-option) select[data-name="thread"],
#file-n-submit:not(.has-file) #qr-filerm {
  display: none;
}
:root.hide-original-post-form #postForm {
  display: none !important;
}
#qr select,
#qr-filename-container > a,
.remove {
  cursor: pointer;
}
#qr {
  position: fixed;
  padding: 1px;
  border: 1px solid transparent;
  min-width: 300px;
  border-radius: 3px 3px 0 0;
}
#qr > form {
  max-height: calc(100vh - 75px);
  overflow: hidden auto;
}
.qr-link-container {
  text-align: center;
  margin: 16px 0;
}
.qr-link-container-bottom {
  position: absolute;
  margin-left: 50%;
  transform: translateX(-50%);
}
.qr-link {
  border-radius: 3px;
  padding: 6px 10px 5px;
  font-weight: bold;
  vertical-align: middle;
  border-style: solid;
  border-width: 1px;
  font-size: 10pt;
}
.qr-link-container + #togglePostFormLink {
  font-size: 10pt;
  font-weight: normal;
  margin: -8px 0 3.5px;
}
.persona {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.persona .field {
  flex: 1;
  width: 0;
}
#qr.forced-anon :is(input[data-name="name"]:not(.force-show), input[data-name="sub"]:not(.force-show)),
#qr.reply-to-thread input[data-name="sub"]:not(.force-show),
body:not(.board_f) #qr select[name="filetag"],
#qr.reply-to-thread select[name="filetag"],
#qr:not(.has-sjis) #sjis-toggle,
#qr:not(.has-math) #tex-preview-button,
#qr.tex-preview .textarea > :not(#tex-preview),
#qr:not(.tex-preview) #tex-preview {
  display: none;
}
#sjis-toggle, #qr.sjis-preview textarea.field {
  font-family: "IPAMonaPGothic","Mona","MS PGothic",monospace;
  font-size: 16px;
  line-height: 17px;
}
#tex-preview-button {
  font-size: 10px;
}
#tex-preview {
  white-space: pre-line;
}
.textarea {
  position: relative;
  display: flex;
}
#qr textarea.field {
  height: 14.8em;
  min-height: 9em;
  min-width: 300px;
  resize: both;
}
#qr.has-captcha textarea.field {
  height: 9em;
}
#char-count {
  color: #000;
  background: hsla(0, 0%, 100%, .5);
  font-size: 8pt;
  position: absolute;
  bottom: 1px;
  right: 1px;
  pointer-events: none;
}
#char-count.warning {
  color: red;
}
input.field.tripped:not(:hover):not(:focus) {
  color: transparent !important;
  text-shadow: none !important;
}

#qr > .move {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#qr > .move label {
  display: inline-flex;
  align-items: center;
}
#qr > .move .close {
  order: 2;
}

/* Recaptcha v2 */
/* #qr .captcha-root { */
/*   position: relative; */
/* } */
/* #qr .captcha-container > div { */
/*   margin: auto; */
/*   width: 304px; */
/* } */

/* XXX scrollable with scroll bar hidden; prevents scroll on space press */
:root.ua-blink #qr .captcha-container > div,
:root.ua-edge #qr .captcha-container > div {
  overflow: hidden;
}
:root.ua-blink #qr .captcha-container > div > div:first-of-type,
:root.ua-edge #qr .captcha-container > div > div:first-of-type {
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 30px;
  height: 99%;
  width: 100%;
}
#qr .captcha-counter {
  display: block;
  width: 100%;
  text-align: center;
  pointer-events: none;
}
#qr.captcha-open .captcha-counter {
  position: absolute;
  bottom: 3px;
}
#qr .captcha-counter > a {
  pointer-events: auto;
  display: inline-block; /* XXX https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8851747/ */
}
#qr:not(.captcha-open) .captcha-counter > a {
  display: block;
  width: 100%;
}
/* #qr.captcha-v2 #qr-captcha-iframe { */
#qr-captcha-iframe {
  width: 302px;
  height: 423px;
  border: 0;
  display: block;
  margin: auto;
}
.goog-bubble-content {
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
}
.goog-bubble-content iframe {
  position: static !important;
}
#overlay.media-preview {
  display: flex;
  overflow: auto;
  align-items: center;
}
#overlay.media-preview :is(img, video) {
  margin: auto;
}
#overlay.media-preview video {
  max-height: 100%;
  max-width: 100%;
}

/* File Input, Submit Button, Oekaki */
#file-n-submit, #qr .oekaki {
  display: flex;
  align-items: stretch;
  margin-top: 1px;
}
#qr-file-button, #qr-draw-button {
  width: 15%;
}
#file-n-submit input[type="submit"] {
  width: 25%;
}
#qr-filename-container {
  flex: 1 1 auto;
  width: 0;
  display: flex;
  align-items: center;
  position: relative;
  padding: 1px;
}
input#qr-filename {
  border: none !important;
  background: none !important;
  outline: none;
}
#qr-filename,
.has-file #qr-no-file {
  display: none;
}
#qr-no-file,
.has-file #qr-filename {
  flex: 1 1 auto;
  width: 0px; /* XXX Fixes filename not shrinking to allow space for buttons in Edge */
  display: inline-block;
  padding: 0;
  padding-left: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#qr-no-file {
  color: #AAA;
}
#qr .oekaki.has-file {
  display: none;
}
#qr .oekaki > label {
  flex: 1 1 auto;
  width: 0;
  display: flex;
  align-items: center;
}
#qr .oekaki > label > span {
  margin: 0 3px;
}
#qr .oekaki > label > input {
  flex: 1 1 auto;
  width: 0;
}
#qr .oekaki-bg {
  position: relative;
  display: inline-block;
  width: 10%;
  margin-left: 3px;
}
#qr .oekaki-bg > * {
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
}
#qr .oekaki-bg > :not([name="oekaki-bgcolor"]) {
  z-index: 1;
}
#qr [name="oekaki-bgcolor"] {
  height: 100%;
  width: 100%;
  border: none;
  padding: 0;
}
#qr [name="oekaki-bg"]:not(:checked) ~ [name="oekaki-bgcolor"] {
  visibility: hidden;
}
#qr input[type="file"] {
  visibility: hidden;
  position: absolute;
}

/* Spoiler Checkbox, QR Icons */
#qr-filename-container > label, #qr-filename-container > a {
  flex: none;
  margin: 0;
  margin-right: 3px;
}
#qr:not(.has-spoiler) #qr-spoiler-label,
#file-n-submit:not(.has-file) :is(#qr-spoiler-label, #qr-randomize, #qr-restore-name),
#file-n-submit:not(.has-image) #qr-jpg,
#file-n-submit:not(.has-image):not(.has-video) #qr-view,
#file-n-submit.has-file :is(#paste-area, #url-button),
#file-n-submit:not(.custom-cooldown) #custom-cooldown-button {
  display: none;
}
#qr-filename-container > label {
  position: relative;
}
#qr-filename-container input[type="checkbox"] {
  margin: 0;
}
.checkbox-letter {
  font-size: 13px;
  font-weight: bold;
}
#qr-filename-container label:not(:hover) > input[type="checkbox"]:not(:focus):not(:checked),
#qr-filename-container label:not(:hover) > input[type="checkbox"]:not(:focus):not(:checked) ~ :not(.checkbox-letter),
#qr-filename-container label:hover > .checkbox-letter,
input[type="checkbox"]:focus ~ .checkbox-letter,
input[type="checkbox"]:checked ~ .checkbox-letter {
  /* not displayed but still focusable */
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.checkbox-letter, #paste-area, #url-button, #custom-cooldown-button, #dump-button, #split-post {
  opacity: 0.6;
}
#paste-area {
  font-size: 0;
}
#paste-area:focus {
  opacity: 1;
}
#custom-cooldown-button.disabled {
  opacity: 0.27;
}

/* Thread and Flash Tag Select */
#qr select {
  background: white;
  border: 1px solid #CCC;
}
#qr select[data-name="thread"] {
  float: right;
}
#qr > form > select {
  margin-top: 1px;
}

/* Dumping UI */
.dump #dump-list-container {
  display: block;
}
#dump-list-container {
  display: none;
  position: relative;
  overflow-y: hidden;
  margin-top: 1px;
}
#dump-list {
  overflow: auto;
  white-space: nowrap;
  width: 248px;
  max-height: 248px;
  min-height: 90px;
  max-width: 100%;
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.qr-preview {
  box-sizing: border-box;
  counter-increment: thumbnails;
  cursor: move;
  display: inline-block;
  height: 90px;
  width: 90px;
  padding: 2px;
  opacity: .5;
  overflow: hidden;
  position: relative;
  text-shadow: 0 0 2px #000;
  transition: opacity .25s ease-in-out, transform .25s ease-in-out;
  vertical-align: top;
  background-size: cover;
  flex: none;
}
.qr-preview:hover,
.qr-preview:focus {
  opacity: .9;
}
.qr-preview::before {
  content: counter(thumbnails);
  color: #fff;
  position: absolute;
  top: 3px;
  right: 3px;
  text-shadow: 0 0 3px #000, 0 0 8px #000;
}
.qr-preview#selected {
  opacity: 1;
}
.qr-preview.drag {
  box-shadow: 0 0 10px rgba(0,0,0,.5);
  transform: scale(.8);
}
.qr-preview.over {
  border-color: #fff;
  transform: scale(1.1);
  opacity: 0.9;
  z-index: 10;
}
.qr-preview > span {
  color: #fff;
}
.remove {
  background: none;
  color: #e00;
  padding: 1px;
}
.qr-preview:only-of-type > .remove {
  display: none;
}
.remove:hover::after {
  content: " Remove";
}
.qr-preview:not(.has-file) label,
#qr:not(.has-spoiler) .qr-preview-spoiler {
  display: none;
}
.qr-preview > label {
  background: rgba(0,0,0,.5);
  color: #fff;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  text-align: center;
}
.qr-preview > label > input {
  margin: 0;
}
#add-post {
  cursor: pointer;
  font-size: 1.5em;
  position: absolute;
  bottom: 20px;
  right: 10px;
  transform: translateY(calc(-50% - .75em));
}
#file-n-submit {
  display: flex;
  flex-direction: column;
}
#file-n-submit .row {
  display: flex;
  flex-direction: row;
}
#file-n-submit .row.space {
  justify-content: space-between;
}
#qr-actions {
  align-items: center;
  gap: 6px;
  padding: 0 3px;
}
#qr-actions .qr-action-button {
  display: inline-flex;
  align-items: center;
}

/* Menu */
.menu-button {
  position: relative;
  cursor: pointer;
}
.postInfo > .menu-button {
  margin: 0 4px;
}
#menu {
  position: fixed;
  outline: none;
  font-weight: normal;
}
#menu, .submenu {
  border-radius: 3px;
  padding-top: 1px;
  padding-bottom: 3px;
}
.entry {
  cursor: pointer;
  display: block;
  outline: none;
  padding: 2px 10px;
  position: relative;
  text-decoration: none;
  white-space: nowrap;
  min-width: 70px;
  text-align: left;
  text-shadow: none;
  font-size: 10pt;
}
.entry input[type="checkbox"],
.entry input[type="radio"] {
  margin: 0px;
  position: relative;
  top: 2px;
}
.entry input[type="number"] {
  width: 4.5em;
}
.entry.has-shortcut-text,
.entry.has-submenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.entry .shortcut-text {
  opacity: 0.5;
  font-size: 70%;
  margin-left: 5px;
}
.menu-indicator {
  pointer-events: none;
  position: relative;
  right: -7px;
}
.left .menu-indicator > .icon {
  transform: rotate(180deg);
}
.submenu {
  display: none;
  position: absolute;
  left: 100%;
  top: -1px;
  margin-left: 0px;
  margin-top: -2px;
}
.focused > .submenu {
  display: block;
}
.imp-exp-result {
  position: absolute;
  text-align: center;
  margin: auto;
  right: 0px;
  left: 0px;
  width: 200px;
}

/* Custom Board Titles */
.boardTitle, .boardSubtitle {
  white-space: pre-line;
}
.boardTitle[contenteditable="true"],
.boardSubtitle[contenteditable="true"] {
  cursor: text !important;
}

/* Embedding */
.embedder:not(.embedded) > span {
  display: none;
}
#embedding {
  padding: 1px 4px;
  position: fixed;
}
#embedding.empty {
  display: none;
}
#embedding > .move {
  display: flex;
  justify-content: flex-end;
  gap: 4px;
}

/* Gallery */
#a-gallery {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  background: rgba(0,0,0,0.7);
}
.gal-viewport {
  display: flex;
  align-items: stretch;
  flex-direction: row;
  flex: 1 1 auto;
  overflow: hidden;
}
.gal-thumbnails {
  flex: 0 0 150px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  background: rgba(0,0,0,.5);
  border-left: 1px solid #222;
}
.gal-hide-thumbnails .gal-thumbnails {
  display: none;
}
.gal-thumb img,
.gal-thumb video {
  max-width: 125px;
  max-height: 125px;
  height: auto;
  width: auto;
}
.gal-thumb {
  flex: 0 0 auto;
  padding: 3px;
  line-height: 0;
  transition: background .2s linear;
}
.gal-highlight {
  background: rgba(0, 190, 255,.8);
}
.gal-prev {
  border-right: 1px solid #222;
}
.gal-next {
  border-left: 1px solid #222;
}
.gal-prev,
.gal-next {
  flex: 0 0 20px;
  position: relative;
  cursor: pointer;
  opacity: 0.7;
  background-color: rgba(0, 0, 0, 0.3);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
}
.gal-prev:hover,
.gal-next:hover {
  opacity: 1;
}
.gal-image {
  flex: 1 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  overflow: hidden;
  /* Flex > Non-Flex child max-width and overflow fix (Firefox only?) */
  width: 1%;
}
:root:not(.gal-fit-height):not(.gal-pdf) .gal-image {
  overflow-y: scroll !important;
}
:root:not(.gal-fit-width):not(.gal-pdf) .gal-image {
  overflow-x: scroll !important;
}
.gal-image a {
  display: flex;
  align-items: flex-start;
  margin: auto;
  line-height: 0;
  max-width: 100%;
}
:root.gal-pdf .gal-image a {
  width: 100%;
  height: 100%;
}
.gal-image img,
.gal-image video {
  flex: none;
}
.gal-fit-width .gal-image img,
.gal-fit-width .gal-image video {
  max-width: 100%;
}
.gal-fit-height .gal-image img,
.gal-fit-height .gal-image video {
  max-height: calc(100vh - 25px);
}
.gal-image iframe {
  width: 100%;
  height: 100%;
}
.gal-buttons {
  font-size: 1.5em;
  margin-right: 3px;
  padding-left: 7px;
  padding-right: 7px;
  top: 5px;
}
:root.gal-pdf .gal-buttons {
  top: 40px;
  background: rgba(0,0,0,0.6) !important;
  border-radius: 3px;
}
.gal-buttons a {
  color: #ffffff;
  text-shadow: 0px 0px 1px #000000;
}
.gal-buttons.gal-playing > .gal-start,
.gal-buttons:not(.gal-playing) > .gal-stop {
  display: none;
}
.gal-labels {
  position: fixed;
  bottom: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
:root:not(.show-sauce) .gal-sauce {
  display: none;
}
.gal-name,
.gal-dimensions
.gal-count,
.gal-sauce {
  background: rgba(0,0,0,0.6) !important;
  border-radius: 3px;
  padding: 1px 5px 2px 5px;
  margin-top: 3px;
  color: #ffffff !important;
  text-decoration: none !important;
}
.gal-sauce a {
  color: #ffffff !important;
}
.gal-dimensions:empty {
  display: none;
}
.gal-name:hover,
.gal-buttons a:hover,
.gal-sauce a:hover {
  color: rgb(95, 95, 101) !important;
}
:root.gal-pdf .gal-buttons a:hover {
  color: rgb(204, 204, 204) !important;
}
.gal-buttons,
.gal-labels {
  position: fixed;
  right: 195px;
}
.gal-hide-thumbnails .gal-buttons,
.gal-hide-thumbnails .gal-labels {
  right: 44px;
}
:root:not(.gal-fit-width):not(.gal-pdf) .gal-labels {
  bottom: 23px !important;
}
:root.gal-fit-height:not(.gal-pdf):not(.gal-hide-thumbnails) .gal-buttons,
:root.gal-fit-height:not(.gal-pdf):not(.gal-hide-thumbnails) .gal-labels {
  right: 178px !important;
}
:root.gal-hide-thumbnails.gal-fit-height:not(.gal-pdf) .gal-buttons,
:root.gal-hide-thumbnails.gal-fit-height:not(.gal-pdf) .gal-labels {
  right: 28px !important;
}
:root.gallery-open.fixed #header-bar:not(.autohide) {
  visibility: hidden;
}

/* Mod Contact Links */
.contact-links {
  margin-left: 2px;
}
.move-note > a {
  text-decoration: underline;
}
.invisible {
  font-size: 0;
}

/* PSA */
.fcx-announcement {
  text-align: center;
}
.fcx-announcement a {
  text-decoration: underline;
}

.spin > .icon {
  animation: spin 2s infinite linear;
}

/* To not scroll posts behind the header */
div.post {
  overflow: auto;
  scroll-margin-top: 30px;
}

/* (you) markers on the scrollbar */
.post-scroll-marker {
  border: none;
  padding: 0;
  position: fixed;
  right: -5px;
  background-color: var(
    --xt-scroll-maker-you,
    var(--xt-border-highlight, currentColor)
  );
  border-radius: 3px;
  width: 10px;
  min-height: 5px;
  top: calc(var(--top) * 1vh);
  height: calc(var(--height) * 1vh);
}

.post-scroll-marker.you-scroll-marker {
  opacity: 50%;
}

.scroll-marker-container {
  display: contents;
}

/* Media Controls */
.media-controls-container {
  position: relative;
}

.media-controls-wrapper {
  display: table;
}

.media-controls-wrapper[rotation] {
  transform-origin: top left;
}

.media-controls-wrapper[rotation="0"] {
	transform: initial;
}

.media-controls-wrapper[rotation="1"] {
	transform: rotate(90deg) translateY(-100%);
}

.media-controls-wrapper[rotation="2"] {
	transform: rotate(180deg) translate(-100%, -100%);
}

.media-controls-wrapper[rotation="3"] {
	transform: rotate(270deg) translateX(-100%);
}

.fileThumb:hover > .media-controls-container > .media-controls {
  opacity: 1;
}

.media-controls {
  position: absolute;
  opacity: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3);
}

.media-controls-top {
  top: 10px;
}

.media-controls-left {
  left: 10px;
}

.media-controls-bottom {
  bottom: 10px;
}

.media-controls-right {
  right: 10px;
}

.media-controls > button {
  background: transparent;
  margin: 0;
  border-style: none;
  border-color: initial;
  line-height: 0;
  filter: saturate(0);
  cursor: pointer;
  padding: 6px;
}

.media-controls > button > svg {
  color: rgb(238, 238, 238);
}

.media-controls > button:hover > svg {
  color: rgb(185, 185, 185);
}

.expanded-image > .post > .file > .fileThumb .media-controls-wrapper > .full-image {
  width: inherit;
}`;

  var tomorrow = `:root.tomorrow {
  --xt-background: #282A2E;
  --xt-border: #111;
  --xt-border-field-focus: rgb(129, 162, 190);
  --xt-border-highlight: rgba(145, 182, 214, .8);
  --xt-header-dialog-bg: rgba(40,42,46,0.9);
  --xt-header-dialog-fg: #C5C8C6;
  --xt-header-link: #81A2BE;
  --xt-dead-link: #81A2BE;
  --xt-inline: rgba(0, 0, 0, .14);
  --xt-qr-preview-bg: rgba(255, 255, 255, .15);
  --xt-qr-link-border: rgb(25, 27, 31) rgb(25, 27, 31) rgb(10, 12, 16);
  --xt-qr-bg: linear-gradient(#37393D, #282A2E) repeat scroll 0% 0% transparent;
  --xt-menu-fg: #C5C8C6;
  --xt-entry-focus-bg: rgba(0, 0, 0, .33);
  --xt-unread: rgba(40, 42, 46, 0.5);
  --xt-watcher: #c5c8c6;

  --xt-unread-line: rgb(197, 200, 198);
  --xt-filter-highlight: rgba(145, 182, 214, .5);
  --xt-highlight-shadow: rgba(64, 192, 255, .7);
  --xt-watched-border: rgb(64, 192, 255);
  --xt-qphl: rgba(145, 182, 214, .8);
  --xt-highlight-side-arrow: rgb(155, 185, 210);

  --xt-fxt-fg: #c5c8c6;
}

/* 4chan style fixes */
:root.tomorrow #arc-list span.quote {
  color: #B5BD68;
}

:root.tomorrow #header-bar a, :root.tomorrow #notifications a {
  color: #81A2BE;
}
:root.tomorrow.shortcut-icons .native-settings {
  background-image: url('//s.4cdn.org/image/favicon-ws.ico');
}


:root.tomorrow #qr .field {
  background-color: rgb(26, 27, 29);
  color: rgb(197,200,198);
  border-color: rgb(40, 41, 42);
}
:root.tomorrow #qr .field:focus,
:root.tomorrow #qr .field.focus {
  border-color: var(--xt-border-field-focus) !important;
  background-color: rgb(30,32,36);
}
:root.tomorrow #qr select {
  border-color: rgb(40, 41, 42);
  background: unset;
}
:root.tomorrow #qr select > option {
  background-color: var(--xt-background);
}
:root.tomorrow #qr-filename {
  color: rgb(197,200,198);
}`;

  var www = `#captcha-cnt {
  height: auto;
}
:root:not(.js-enabled) #form {
  display: block;
}
#bd > div[style], #bd > div[style] > * {
  height: auto !important;
  margin: 0 !important;
  font-size: 0;
}`;

  var yotsubaB = `:root.yotsuba-b {
  --xt-background: #D6DAF0;
  --xt-link-hover-bg: #D9DDF3;
  --xt-border: #B7C5D9;
  --xt-border-field-focus: #98E;
  --xt-border-highlight: rgba(221, 0, 0, .8);
  --xt-header-dialog-bg: rgba(214,218,240,0.98);
  --xt-header-dialog-fg: #89A;
  --xt-header-link: #34345C;
  --xt-dead-link: #34345C;
  --xt-qr-link-border: rgb(199, 203, 225) rgb(199, 203, 225) rgb(184, 188, 210);
  --xt-qr-bg: linear-gradient(#E5E9FF, #D6DAF0) repeat scroll 0% 0% transparent;
  --xt-menu-fg: #000;
  --xt-entry-focus-bg: rgba(255, 255, 255, .33);
  --xt-unread: rgba(214, 218, 240, 0.5);
}`;

  var yotsuba = `:root.yotsuba {
  --xt-background: #F0E0D6;
  --xt-border: #D9BFB7;
  --xt-border-field-focus: #EA8;
  --xt-border-highlight: rgba(221, 0, 0, .8);
  --xt-header-dialog-bg: rgba(240,224,214,0.98);
  --xt-header-dialog-fg: #B86;
  --xt-header-link: #800000;
  --xt-dead-link: #00E;
  --xt-qr-link-border: rgb(225, 209, 199) rgb(225, 209, 199) rgb(210, 194, 184);
  --xt-qr-bg: linear-gradient(#FFEFE5, #F0E0D6) repeat scroll 0% 0% transparent;
  --xt-entry-focus-bg: rgba(255, 255, 255, .33);
  --xt-unread: rgba(240, 224, 214, 0.5);
  --xt-watcher: #800000;

  --xt-fxt-fg: #800000;
}`;

  var burichan = `:root.burichan {
  --xt-background: #D6DAF0;
  --xt-border: #B7C5D9;
  --xt-border-field-focus: #98E;
  --xt-border-highlight: rgba(221, 0, 0, .8);
  --xt-header-dialog-bg: rgba(214, 218, 240, 0.98);
  --xt-notification-size: 11pt;
  --xt-header-dialog-fg: #89A;
  --xt-header-link: #34345C;
  --xt-dead-link: #34345C;
  --xt-qr-link-border: rgb(199, 203, 225) rgb(199, 203, 225) rgb(184, 188, 210);
  --xt-qr-bg: linear-gradient(#E5E9FF, #D6DAF0) repeat scroll 0% 0% transparent;
  --xt-menu-fg: #000;
  --xt-entry-size: 12pt;
  --xt-entry-focus-bg: rgba(255, 255, 255, .33);
  --xt-link-hover-bg: #D9DDF3;
  --xt-unread: rgba(214, 218, 240, 0.5);
}

/* Anonymize */
:root.burichan.anonymize $site$info$name::before {
  font-size: 12pt;
}`;

  var futaba = `:root.futaba {
  --xt-background: #F0E0D6;
  --xt-border: #D9BFB7;
  --xt-border-field-focus: #EA8;
  --xt-border-highlight: rgba(221, 0, 0, .8);
  --xt-notification-size: 11pt;
  --xt-header-dialog-fg: #B86;
  --xt-dead-link: #00E;
  --xt-header-dialog-bg: rgba(240,224,214,0.98);
  --xt-header-link: #800000;
  --xt-qr-link-border: rgb(225, 209, 199) rgb(225, 209, 199) rgb(210, 194, 184);
  --xt-qr-bg: linear-gradient(#FFEFE5, #F0E0D6) repeat scroll 0% 0% transparent;
  --xt-entry-size: 12pt;
  --xt-entry-focus-bg: rgba(255, 255, 255, .33);
  --xt-unread: rgba(240, 224, 214, 0.5);
  --xt-watcher: #800000;

  --xt-fxt-fg: #800000;
}

/* Anonymize */
:root.futaba.anonymize $site$info$name::before {
  font-size: 12pt;
}`;

  var iconCss = `/* Icons */
svg.icon {
  height: 1em;
  width: 1em;
  display: inline-flex;
  vertical-align: -.125em;
}
/* Override catalog.css */
:root.catalog svg.icon {
  position: static;
}
:root.shortcut-icons #shortcuts .icon--alt-text,
:root:not(.shortcut-icons) .shortcut .icon {
  display: none;
}
:root.shortcut-icons .shortcut.brackets-wrap::before,
:root.shortcut-icons .shortcut.brackets-wrap::after {
  display: none;
}
@keyframes spin {
  100% {transform:rotate(1turn)}
}

/* linkify */
.linkify.peertube,
.linkify.streamable,
.linkify.bitchute,
.linkify.clyp,
.linkify.pastebin,
.linkify.twitchtv,
.linkify.vocaroo,
.linkify.vidlii,
.linkify.image,
.linkify.video,
.linkify.audio,
.linkify.youtube,
.linkify.twitter,
.linkify.soundcloud,
.linkify.dailymotion,
.linkify.gist,
.linkify.vimeo {
  position: relative;
  padding-left: 18px;
}
.linkify-icon {
  position: absolute;
  left: 0;
  top: var(--linkify-icon-top, 0);
  line-height: inherit;
  width: 14px;
  height: 1lh;
  display: flex;
  align-items: center;
  pointer-events: none;
}
.linkify.youtube .linkify-icon svg {
  color: red;
}
.linkify.twitter .linkify-icon svg {
  background-color: black;
  color: white;
  height: 14px;
  width: 14px;
}
.linkify.pastebin .linkify-icon svg {
  fill: blue;
}
.linkify.bitchute .linkify-icon svg {
  color: red;
}
.linkify.twitchtv .linkify-icon svg {
  color: #9146ff;
}
.linkify.gist .linkify-icon svg {
  color: white;
  background-color: black;
}
.linkify.soundcloud .linkify-icon svg {
  color: orange;
}
.linkify.vocaroo .linkify-icon svg {
  color: #d5f97e;
}`;

  var fxTwitterCss = `:root {
  --xt-fxt-bg: var(--xt-background);
  --xt-fxt-border: var(--xt-border);
}

.fxt-card {
  color: var(--xt-fxt-fg, #000);
  background-color: var(--xt-fxt-bg, #D6DAF0);
  padding: 16px;
  border: 1px solid var(--xt-fxt-border, #B7C5D9);
  border-radius: 12px;
  gap: 8px;
  width: 550px;
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  grid-template-rows: max-content max-content max-content;
  grid-template-areas:
    "meta meta"
    "content content"
    "stats stats"
}
.fxt-meta {
  display: flex;
  flex-direction: row;
  gap: 8px;
  grid-area: meta;
}
.fxt-meta_profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}
.fxt-meta_avatar {
  display: flex;
  align-items: center;
}
.fxt-meta_profile img {
  height: 48px;
  width: 48px;
  aspect-ratio: 1;
  border-radius: 100%;
  background-color: var(--xt-fxt-border, #B7C5D9);
}
.fxt-meta_author {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}
.fxt-meta_author_username {
  font-weight: bold;
}
.fxt-stats_meta {
  padding-top: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 8px;
}
.fxt-stats_meta span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.fxt-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  grid-area: content;
}
.fxt-text {
  white-space: pre-wrap;
  word-break: break-word;
}
.fxt-poll {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.fxt-choice {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 75%;
  height: 24px;
}
.fxt-choice.highlight {
  font-weight: bold;
}

.fxt-choice_label {
  margin-left: 6px;
  z-index: 1;
}
.fxt-choice_percentage {
  margin-right: 6px;
  z-index: 1;
}
.fxt-choice .fxt-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  border-radius: 4px;
  background-color: currentColor;
  opacity: .3;
  z-index: 0;
}

.fxt-total-votes {
  font-size: 75%;
  opacity: .5;
}
.fxt-media {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
}
.fxt-media_container {
  --maxHeightMedia: 300px;
}
.fxt-media_container :is(img, video) {
  display: block;
  width: 100%;
  height: 100%;
  max-height: var(--maxHeightMedia);
  max-width: none;
  object-fit: contain;
  object-position: center;
}
.fxt-media_container {
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-auto-flow: dense;
  aspect-ratio: 16 / 9;
}
.fxt-media_container .fxt-media:only-child {
  grid-column: span 2 / auto;
  grid-row: span 2 / auto;
}
.fxt-media_contains_3 .fxt-media:first-child {
  grid-row: span 2 / auto;
}
.fxt-media_contains_3 .fxt-media :is(img, video) {
  max-height: calc(var(--maxHeightMedia) / 2);
}
.fxt-media_contains_3 .fxt-media:first-child :is(img, video) {
  max-height: calc(var(--maxHeightMedia) + 4px);
  /* weird spacing even though img/video has block... */
}
.fxt-media_video {
  background-color: #000;
}
.fxt-tweet-quote {
  width: fit-content;
  padding: 8px;
}
.fxt-tweet-quote .fxt-meta_profile img {
  height: 24px;
  width: 24px;
}
.fxt-tweet-quote .fxt-meta_author {
  font-size: 80%;
}
.fxt-tweet-quote .fxt-meta {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 4px;
}
.fxt-community_note {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--xt-fxt-border, #B7C5D9);
  border-radius: .25rem;
}
.fxt-community_note-header {
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .25rem .5rem;
  background-color: var(--xt-fxt-border, #B7C5D9);
}
.fxt-community_note-text {
  padding: .5rem;
  white-space: pre-wrap;
}
.fxt-tweet-reply {
  grid-template-areas:
    "meta meta"
    "line content"
    "line stats"
}
.fxt-tweet-reply::before {
  grid-area: line;
  content: '';
  display: block;
  background-color: var(--xt-fxt-border, #B7C5D9);
  height: calc(100% + 18px);
  width: 5px;
  margin: auto;
  position: relative;
  top: -5px;
}
.fxt-stats {
  grid-area: stats;
}
.fxt-reply_container>.fxt-tweet-reply,
.fxt-reply_container+.fxt-tweet-original {
  border: 0;
  border-radius: 0;
  padding-top: 8px;
  padding-bottom: 8px;
}
.fxt-reply_container>.fxt-tweet-reply:first-child {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border: 1px solid var(--xt-fxt-border, #B7C5D9);
  border-bottom: 0;
}
.fxt-reply_container>.fxt-tweet-reply:not(:first-child) {
  border: 1px solid var(--xt-fxt-border, #B7C5D9);
  border-top: 0;
  border-bottom: 0;
}
.fxt-reply_container+.fxt-tweet-original {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border: 1px solid var(--xt-fxt-border, #B7C5D9);
  border-top: 0;
}
.fxt-text_translated-label,
.fxt-stats {
  color: var(--xt-dead-link);
}
.fxt-card:is(.warning, .loading) {
  display: flex;
}
.fxt-card_container {
  max-block-size: 90dvh;
  overflow: hidden auto;
  scrollbar-width: thin;
  width: fit-content;
}`;

  // cSpell:ignore installGentoo, webfont
  const mainCSS = style + variableBase + yotsuba + yotsubaB + futaba + burichan + tomorrow + photon + spooky + iconCss + fxTwitterCss;
  const CSS$1 = {
    boards: mainCSS,
    report,
    www,
    sub: function (css) {
      var variables = {
        site: g.SITE.selectors
      };
      return css.replace(/\$[\w\$]+/g, function (name) {
        var words = name.slice(1).split('$');
        var sel = variables;
        for (var i = 0; i < words.length; i++) {
          if (typeof sel !== 'object')
            return ':not(*)';
          sel = $.getOwn(sel, words[i]);
        }
        if (typeof sel !== 'string')
          return ':not(*)';
        return sel;
      });
    }
  };

  const CustomCSS = {
      init() {
          if (!Conf['Custom CSS']) {
              return;
          }
          this.addStyle();
      },
      addStyle() {
          return this.style = $.addStyle(CSS$1.sub(Conf.usercss), 'custom-css', '#fourchanx-css');
      },
      rmStyle() {
          if (this.style) {
              $.rm(this.style);
              delete this.style;
          }
      },
      update() {
          if (!this.style) {
              return this.addStyle();
          }
          return this.style.textContent = CSS$1.sub(Conf.usercss);
      }
  };

  const dialog = function (id, properties) {
      const el = $.el('div', {
          className: 'dialog',
          id
      });
      $.extend(el, properties);
      el.style.cssText = Conf[`${id}.position`];
      const move = $('.move', el);
      $.on(move, 'touchstart mousedown', dragstart);
      for (var child of move.children) {
          if (!child.tagName) {
              continue;
          }
          $.on(child, 'touchstart mousedown', e => e.stopPropagation());
      }
      return el;
  };
  var Menu$1 = (function () {
      let currentMenu = undefined;
      let lastToggledButton = undefined;
      Menu$1 = class Menu {
          static initClass() {
              currentMenu = null;
              lastToggledButton = null;
          }
          constructor(type) {
              // XXX AddMenuEntry event is deprecated
              this.setPosition = this.setPosition.bind(this);
              this.close = this.close.bind(this);
              this.keybinds = this.keybinds.bind(this);
              this.onFocus = this.onFocus.bind(this);
              this.addEntry = this.addEntry.bind(this);
              this.type = type;
              $.on(d, 'AddMenuEntry', ({ detail }) => {
                  if (detail.type !== this.type) {
                      return;
                  }
                  delete detail.open;
                  return this.addEntry(detail);
              });
              this.entries = [];
          }
          makeMenu() {
              const menu = $.el('div', {
                  className: 'dialog',
                  id: 'menu',
                  tabIndex: 0
              });
              menu.dataset.type = this.type;
              $.on(menu, 'click', e => e.stopPropagation());
              $.on(menu, 'keydown', this.keybinds);
              return menu;
          }
          toggle(e, button, data) {
              e.preventDefault();
              e.stopPropagation();
              if (currentMenu) {
                  // Close if it's already opened.
                  // Reopen if we clicked on another button.
                  const previousButton = lastToggledButton;
                  currentMenu.close();
                  if (previousButton === button) {
                      return;
                  }
              }
              if (!this.entries.length) {
                  return;
              }
              this.open(button, data);
          }
          open(button, data) {
              let entry;
              const menu = (this.menu = this.makeMenu());
              currentMenu = this;
              lastToggledButton = button;
              this.entries.sort((first, second) => first.order - second.order);
              for (entry of this.entries) {
                  this.insertEntry(entry, menu, data);
              }
              $.addClass(lastToggledButton, 'active');
              $.on(d, 'click CloseMenu', this.close);
              $.on(d, 'scroll', this.setPosition);
              $.on(window, 'resize', this.setPosition);
              $.after(button, menu);
              this.setPosition();
              entry = $('.entry', menu);
              // We've removed flexbox, so we don't use order anymore.
              // while prevEntry = @findNextEntry entry, -1
              //   entry = prevEntry
              this.focus(entry);
              menu.focus();
          }
          setPosition() {
              const mRect = this.menu.getBoundingClientRect();
              const bRect = lastToggledButton.getBoundingClientRect();
              const cHeight = doc.clientHeight;
              const cWidth = doc.clientWidth;
              const [top, bottom] = (bRect.top + bRect.height + mRect.height) < cHeight ?
                  [`${bRect.bottom}px`, ''] : ['', `${cHeight - bRect.top}px`];
              const [left, right] = (bRect.left + mRect.width) < cWidth ?
                  [`${bRect.left}px`, ''] : ['', `${cWidth - bRect.right}px`];
              $.extend(this.menu.style, { top, right, bottom, left });
              this.menu.classList.toggle('left', right);
          }
          insertEntry(entry, parent, data) {
              let submenu;
              if (typeof entry.open === 'function') {
                  try {
                      if (!entry.open(data)) {
                          return;
                      }
                  }
                  catch (err) {
                      Main.handleErrors({
                          message: `Error in building the ${this.type} menu.`,
                          error: err
                      });
                      return;
                  }
              }
              $.add(parent, entry.el);
              if (!entry.subEntries) {
                  return;
              }
              if (submenu = $('.submenu', entry.el)) {
                  // Reset sub menu, remove irrelevant entries.
                  $.rm(submenu);
              }
              submenu = $.el('div', { className: 'dialog submenu' });
              for (var subEntry of entry.subEntries) {
                  this.insertEntry(subEntry, submenu, data);
              }
              $.add(entry.el, submenu);
          }
          close() {
              $.rm(this.menu);
              delete this.menu;
              $.rmClass(lastToggledButton, 'active');
              currentMenu = null;
              lastToggledButton = null;
              $.off(d, 'click scroll CloseMenu', this.close);
              $.off(d, 'scroll', this.setPosition);
              $.off(window, 'resize', this.setPosition);
          }
          findNextEntry(entry, direction) {
              const entries = [...entry.parentNode.children];
              entries.sort((first, second) => first.style.order - second.style.order);
              return entries[entries.indexOf(entry) + direction];
          }
          keybinds(e) {
              let subEntry;
              let next, submenu;
              let entry = $('.focused', this.menu);
              while ((subEntry = $('.focused', entry))) {
                  entry = subEntry;
              }
              switch (e.keyCode) {
                  case 27: // Esc
                      lastToggledButton.focus();
                      this.close();
                      break;
                  case 13:
                  case 32: // Enter, Space
                      entry.click();
                      break;
                  case 38: // Up
                      if (next = this.findNextEntry(entry, -1)) {
                          this.focus(next);
                      }
                      break;
                  case 40: // Down
                      if (next = this.findNextEntry(entry, 1)) {
                          this.focus(next);
                      }
                      break;
                  case 39: // Right
                      if ((submenu = $('.submenu', entry)) && (next = submenu.firstElementChild)) {
                          let nextPrev;
                          while ((nextPrev = this.findNextEntry(next, -1))) {
                              next = nextPrev;
                          }
                          this.focus(next);
                      }
                      break;
                  case 37: // Left
                      if (next = $.x('parent::*[contains(@class,"submenu")]/parent::*', entry)) {
                          this.focus(next);
                      }
                      break;
                  default: return;
              }
              e.preventDefault();
              e.stopPropagation();
          }
          onFocus(e) {
              e.stopPropagation();
              this.focus(e.target);
          }
          focus(entry) {
              let focused, submenu;
              while ((focused = $.x('parent::*/child::*[contains(@class,"focused")]', entry))) {
                  $.rmClass(focused, 'focused');
              }
              for (focused of $$('.focused', entry)) {
                  $.rmClass(focused, 'focused');
              }
              $.addClass(entry, 'focused');
              // Submenu positioning.
              if (!(submenu = $('.submenu', entry))) {
                  return;
              }
              const sRect = submenu.getBoundingClientRect();
              const eRect = entry.getBoundingClientRect();
              const cHeight = doc.clientHeight;
              const cWidth = doc.clientWidth;
              const [top, bottom] = (eRect.top + sRect.height) < cHeight ?
                  ['0px', 'auto'] : ['auto', '0px'];
              const [left, right] = (eRect.right + sRect.width) < (cWidth - 150) ?
                  ['100%', 'auto'] : ['auto', '100%'];
              const { style } = submenu;
              style.top = top;
              style.bottom = bottom;
              style.left = left;
              style.right = right;
          }
          addEntry(entry) {
              this.parseEntry(entry);
              this.entries.push(entry);
          }
          parseEntry(entry) {
              const { el, subEntries } = entry;
              $.addClass(el, 'entry');
              $.on(el, 'focus mouseover', this.onFocus);
              el.style.order = entry.order || 100;
              if (!subEntries) {
                  return;
              }
              $.addClass(el, 'has-submenu');
              for (var subEntry of subEntries) {
                  this.parseEntry(subEntry);
              }
              const span = $.el('span', { className: 'menu-indicator' });
              Icon.set(span, 'caretRight');
              $.add(el, span);
          }
      };
      Menu$1.initClass();
      return Menu$1;
  })();
  var dragstart = function (e) {
      let isTouching;
      if ((e.type === 'mousedown') && (e.button !== 0)) {
          return;
      } // not LMB
      // prevent text selection
      e.preventDefault();
      if (isTouching = e.type === 'touchstart') {
          e = e.changedTouches[e.changedTouches.length - 1];
      }
      // distance from pointer to el edge is constant; calculate it here.
      const el = $.x('ancestor::div[contains(@class,"dialog")][1]', this);
      const rect = el.getBoundingClientRect();
      const screenHeight = doc.clientHeight;
      const screenWidth = doc.clientWidth;
      const o = {
          id: el.id,
          style: el.style,
          dx: e.clientX - rect.left,
          dy: e.clientY - rect.top,
          height: screenHeight - rect.height,
          width: screenWidth - rect.width,
          screenHeight,
          screenWidth,
          isTouching
      };
      [o.topBorder, o.bottomBorder] = Conf['Header auto-hide'] || !Conf['Fixed Header'] ? [0, 0]
          : Conf['Bottom Header'] ? [0, Header.bar.getBoundingClientRect().height]
              : [Header.bar.getBoundingClientRect().height, 0];
      if (isTouching) {
          o.identifier = e.identifier;
          o.move = touchmove.bind(o);
          o.up = touchend.bind(o);
          $.on(d, 'touchmove', o.move);
          return $.on(d, 'touchend touchcancel', o.up);
      }
      else { // mousedown
          o.move = drag.bind(o);
          o.up = dragend.bind(o);
          $.on(d, 'mousemove', o.move);
          $.on(d, 'mouseup', o.up);
      }
  };
  var touchmove = function (e) {
      for (var touch of e.changedTouches) {
          if (touch.identifier === this.identifier) {
              drag.call(this, touch);
              return;
          }
      }
  };
  var drag = function (e) {
      const { clientX, clientY } = e;
      let left = clientX - this.dx;
      left = left < 10 ? 0 : (this.width - left) < 10 ? ''
          : ((left / this.screenWidth) * 100) + '%';
      let top = clientY - this.dy;
      top = top < (10 + this.topBorder) ? this.topBorder + 'px'
          : (this.height - top) < (10 + this.bottomBorder) ? ''
              : ((top / this.screenHeight) * 100) + '%';
      const right = left === '' ? 0 : '';
      const bottom = top === '' ? this.bottomBorder + 'px' : '';
      const { style } = this;
      style.left = left;
      style.right = right;
      style.top = top;
      style.bottom = bottom;
  };
  var touchend = function (e) {
      for (var touch of e.changedTouches) {
          if (touch.identifier === this.identifier) {
              dragend.call(this);
              return;
          }
      }
  };
  var dragend = function () {
      if (this.isTouching) {
          $.off(d, 'touchmove', this.move);
          $.off(d, 'touchend touchcancel', this.up);
      }
      else { // mouseup
          $.off(d, 'mousemove', this.move);
          $.off(d, 'mouseup', this.up);
      }
      if (this.style.length === 2) { // assume only left or right and top or bottom
          $.set(`${this.id}.position`, this.style.cssText);
      }
      else { // only include position data.
          const { left, right, top, bottom } = this.style;
          let position = '';
          if (left)
              position += `left:${left};`;
          if (right)
              position += `right:${right};`;
          if (top)
              position += `top:${top};`;
          if (bottom)
              position += `bottom:${bottom};`;
          $.set(`${this.id}.position`, position);
      }
  };
  const hoverstart = function ({ root, el, latestEvent, endEvents, height, width, cb, noRemove }) {
      const rect = root.getBoundingClientRect();
      const o = {
          root,
          el,
          style: el.style,
          isImage: ['IMG', 'VIDEO'].includes(el.nodeName),
          cb,
          endEvents,
          latestEvent,
          clientHeight: doc.clientHeight,
          clientWidth: doc.clientWidth,
          height,
          width,
          noRemove,
          clientX: (rect.left + rect.right) / 2,
          clientY: (rect.top + rect.bottom) / 2
      };
      o.hover = hover.bind(o);
      o.hoverend = hoverend.bind(o);
      o.hover(o.latestEvent);
      new MutationObserver(function () {
          if (el.parentNode) {
              return o.hover(o.latestEvent);
          }
      }).observe(el, { childList: true });
      $.on(root, endEvents, o.hoverend);
      if ($.x('ancestor::div[contains(@class,"inline")][1]', root)) {
          $.on(d, 'keydown', o.hoverend);
      }
      $.on(root, 'mousemove', o.hover);
      // Workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=674955
      o.workaround = function (e) { if (!root.contains(e.target)) {
          return o.hoverend(e);
      } };
      $.on(doc, 'mousemove', o.workaround);
  };
  hoverstart.padding = 25;
  var hover = function (e) {
      this.latestEvent = e;
      const height = (this.height || this.el.offsetHeight) + hoverstart.padding;
      const width = (this.width || this.el.offsetWidth);
      const { clientX, clientY } = Conf['Follow Cursor'] ? e : this;
      const top = this.isImage ?
          Math.max(0, (clientY * (this.clientHeight - height)) / this.clientHeight)
          :
              Math.max(0, Math.min(this.clientHeight - height, clientY - 120));
      let threshold = this.clientWidth / 2;
      if (!this.isImage) {
          threshold = Math.max(threshold, this.clientWidth - 400);
      }
      let marginX = (clientX <= threshold ? clientX : this.clientWidth - clientX) + 45;
      if (this.isImage) {
          marginX = Math.min(marginX, this.clientWidth - width);
      }
      marginX += 'px';
      const [left, right] = clientX <= threshold ? [marginX, ''] : ['', marginX];
      const { style } = this;
      style.top = top + 'px';
      style.left = left;
      style.right = right;
  };
  var hoverend = function (e) {
      if (((e.type === 'keydown') && (e.keyCode !== 13)) || (e.target.nodeName === "TEXTAREA")) {
          return;
      }
      if (!this.noRemove) {
          $.rm(this.el);
      }
      $.off(this.root, this.endEvents, this.hoverend);
      $.off(d, 'keydown', this.hoverend);
      $.off(this.root, 'mousemove', this.hover);
      // Workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=674955
      $.off(doc, 'mousemove', this.workaround);
      if (this.cb) {
          return this.cb.call(this);
      }
  };
  const checkbox = function (name, text, checked) {
      if (checked == null) {
          checked = Conf[name];
      }
      const label = $.el('label');
      const input = $.el('input', { type: 'checkbox', name, checked });
      $.add(label, [input, $.tn(` ${text}`)]);
      return label;
  };
  const UI = {
      dialog,
      Menu: Menu$1,
      hover: hoverstart,
      checkbox
  };

  const Volume = {
      init() {
          if (!['index', 'thread'].includes(g.VIEW) ||
              (!Conf['Image Expansion'] && !Conf['Image Hover'] && !Conf['Image Hover in Catalog'] && !Conf.Gallery)) {
              return;
          }
          $.sync('Allow Sound', function (x) {
              Conf['Allow Sound'] = x;
              if (Volume.inputs)
                  Volume.inputs.unmute.checked = x;
          });
          $.sync('Default Volume', function (x) {
              Conf['Default Volume'] = x;
              if (Volume.inputs)
                  Volume.inputs.volume.value = x;
          });
          if (Conf['Mouse Wheel Volume']) {
              Callbacks.Post.push({
                  name: 'Mouse Wheel Volume',
                  cb: this.node
              });
          }
          if (g.SITE.noAudio?.(g.BOARD)) {
              return;
          }
          if (Conf['Mouse Wheel Volume']) {
              Callbacks.CatalogThread.push({
                  name: 'Mouse Wheel Volume',
                  cb: this.catalogNode
              });
          }
          const unmuteEntry = UI.checkbox('Allow Sound', 'Allow Sound');
          unmuteEntry.title = Config.main['Images and Videos']['Allow Sound'][1];
          const volumeEntry = $.el('label', { title: 'Default volume for videos.' });
          $.extend(volumeEntry, { innerHTML: "<input name=\"Default Volume\" type=\"range\" min=\"0\" max=\"1\" step=\"0.01\" value=\"" + E(Conf["Default Volume"]) + "\"> Volume" });
          this.inputs = {
              unmute: unmuteEntry.firstElementChild,
              volume: volumeEntry.firstElementChild
          };
          $.on(this.inputs.unmute, 'change', $.cb.checked);
          $.on(this.inputs.volume, 'change', $.cb.value);
          Header.menu.addEntry({ el: unmuteEntry, order: 200 });
          Header.menu.addEntry({ el: volumeEntry, order: 201 });
      },
      setup(video) {
          video.muted = !Conf['Allow Sound'];
          video.volume = Conf['Default Volume'];
          $.on(video, 'volumechange', Volume.change);
      },
      change() {
          const { muted, volume } = this;
          const items = {
              'Allow Sound': !muted,
              'Default Volume': volume
          };
          for (const key in items) {
              const val = items[key];
              if (Conf[key] === val) {
                  delete items[key];
              }
          }
          $.set(items);
          $.extend(Conf, items);
          if (Volume.inputs) {
              Volume.inputs.unmute.checked = !muted;
              Volume.inputs.volume.value = volume;
          }
      },
      node() {
          if (g.SITE.noAudio?.(this.board)) {
              return;
          }
          for (const file of this.files) {
              if (file.isVideo) {
                  if (file.thumb) {
                      $.on(file.thumb, 'wheel', Volume.wheel.bind(Header.hover));
                  }
                  $.on(($('.file-info', file.text) || file.link), 'wheel', Volume.wheel.bind(file.thumbLink));
              }
          }
      },
      catalogNode() {
          const file = this.thread.OP.files[0];
          if (!file?.isVideo) {
              return;
          }
          $.on(this.nodes.thumb, 'wheel', Volume.wheel.bind(Header.hover));
      },
      wheel(e) {
          let el;
          if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
              return;
          }
          if (!(el = $('video:not([data-md5])', this))) {
              return;
          }
          if (el.muted || !$.hasAudio(el)) {
              return;
          }
          let volume = el.volume + 0.1;
          if (e.deltaY < 0) {
              volume *= 1.1;
          }
          if (e.deltaY > 0) {
              volume /= 1.1;
          }
          el.volume = $.minmax(volume - 0.1, 0, 1);
          e.preventDefault();
      }
  };

  var ImageCommon = {
      // Pause and mute video in preparation for removing the element from the document.
      pause(video) {
          if (video.nodeName !== 'VIDEO') {
              return;
          }
          video.pause();
          $.off(video, 'volumechange', Volume.change);
          return video.muted = true;
      },
      rewind(el) {
          if (el.nodeName === 'VIDEO') {
              if (el.readyState >= el.HAVE_METADATA) {
                  return el.currentTime = 0;
              }
          }
          else if (/\.gif$/.test(el.src)) {
              return $.queueTask(() => el.src = el.src);
          }
      },
      pushCache(el) {
          ImageCommon.cache = el;
          $.on(el, 'error', ImageCommon.cacheError);
      },
      popCache() {
          const el = ImageCommon.cache;
          $.off(el, 'error', ImageCommon.cacheError);
          delete ImageCommon.cache;
          return el;
      },
      cacheError() {
          if (ImageCommon.cache === this) {
              return delete ImageCommon.cache;
          }
      },
      decodeError(file, fileObj) {
          let message;
          if (file.error?.code !== MediaError.MEDIA_ERR_DECODE) {
              return false;
          }
          if (!(message = $('.warning', fileObj.thumb.parentNode))) {
              message = $.el('div', { className: 'warning' });
              $.after(fileObj.thumb, message);
          }
          message.textContent = 'Error: Corrupt or unplayable video';
          return true;
      },
      isFromArchive(file) {
          return (g.SITE.software === 'yotsuba') && !ImageHost.test(file.src.split('/')[2]);
      },
      error(file, post, fileObj, delay, cb) {
          let timeoutID;
          const src = fileObj.url.split('/');
          let url = null;
          if ((g.SITE.software === 'yotsuba') && Conf['404 Redirect']) {
              url = Redirect.to('file', {
                  boardID: post.board.ID,
                  filename: src[src.length - 1]
              });
          }
          if (!url || !Redirect.securityCheck(url)) {
              url = null;
          }
          if ((post.isDead || fileObj.isDead) && !ImageCommon.isFromArchive(file)) {
              return cb(url);
          }
          if (delay) {
              timeoutID = setTimeout((() => cb(url)), delay);
          }
          if (post.isDead || fileObj.isDead) {
              return;
          }
          const redirect = function () {
              if (!ImageCommon.isFromArchive(file)) {
                  if (delay) {
                      clearTimeout(timeoutID);
                  }
                  return cb(url);
              }
          };
          const threadJSON = g.SITE.urls.threadJSON?.(post);
          if (!threadJSON) {
              return;
          }
          var parseJSON = function (isArchiveURL) {
              let needle, postObj;
              if (this.status === 404) {
                  let archivedThreadJSON;
                  if (!isArchiveURL && (archivedThreadJSON = g.SITE.urls.archivedThreadJSON?.(post))) {
                      $.ajax(archivedThreadJSON, { onloadend() { return parseJSON.call(this, true); } });
                  }
                  else {
                      post.kill(!post.isClone, fileObj.index);
                  }
              }
              if (this.status !== 200) {
                  return redirect();
              }
              for (postObj of this.response.posts) {
                  if (postObj.no === post.ID) {
                      break;
                  }
              }
              if (postObj.no !== post.ID) {
                  post.kill();
                  return redirect();
              }
              else if ((needle = fileObj.docIndex, g.SITE.Build.parseJSON(postObj, post.board).filesDeleted.includes(needle))) {
                  post.kill(true);
                  return redirect();
              }
              else {
                  return url = fileObj.url;
              }
          };
          $.ajax(threadJSON, { onloadend() { return parseJSON.call(this); } });
      },
      // XXX Estimate whether clicks are on the video controls and should be ignored.
      onControls(e) {
          return (Conf['Show Controls'] && Conf['Click Passthrough'] && (e.target.nodeName === 'VIDEO')) ||
              (e.target.controls && ((e.target.getBoundingClientRect().bottom - e.clientY) < 35));
      },
      download(e) {
          if (this.protocol === 'blob:') {
              return true;
          }
          e.preventDefault();
          const { href, download } = this;
          return CrossOrigin.file(href, function (blob) {
              if (blob) {
                  const a = $.el('a', {
                      href: URL.createObjectURL(blob),
                      download,
                      hidden: true
                  });
                  $.add(d.body, a);
                  a.click();
                  return $.rm(a);
              }
              else {
                  return new Notice('warning', `Could not download ${href}`, 20);
              }
          });
      }
  };

  var ReportPage = `<legend><label><input id="archive-report-enabled" type="checkbox">Report illegal content to archives</label></legend>
<label for="archive-report-reason">Details</label>
<textarea id="archive-report-reason" disabled>Illegal content</textarea>
<button id="archive-report-submit" hidden>Submit</button>`;

  var QuickReplyPage = `<div class="move">
  <label>
    <input type="checkbox" id="autohide" title="Auto-hide">
    Quick Reply
  </label>
  <a href="javascript:;" class="close" title="Close">✕</a>
  <select data-name="thread" title="Create a new thread / Reply">
    <option value="new">New thread</option>
  </select>
</div>
<form>
  <div class="persona">
    <button type="button" id="sjis-toggle" class="qr-button" title="Toggle Mona font">∀</button>
    <button type="button" id="tex-preview-button" class="qr-button" title="Preview TeX">T<sub>E</sub>X</button>
    <input name="name" data-name="name" list="list-name" placeholder="Name" class="field" size="1">
    <input name="email" data-name="email" list="list-email" placeholder="Options" class="field" size="1">
    <input name="sub" data-name="sub" list="list-sub" placeholder="Subject" class="field" size="1" maxlength="100">
  </div>
  <div class="textarea">
    <textarea data-name="com" placeholder="Comment" class="field"></textarea>
    <span id="char-count"></span>
    <div id="tex-preview"></div>
  </div>
  <div id="dump-list-container">
    <div id="dump-list"></div>
    <a id="add-post" href="javascript:;" title="Add a post">+</a>
  </div>
  <div class="oekaki" hidden>
    <input type="button" id="qr-draw-button" class="qr-button" value="Draw">
    <label><span>Width:</span><input name="oekaki-width" value="400" type="number" class="field" size="1"></label>
    <label><span>Height:</span><input name="oekaki-height" value="400" type="number" class="field" size="1"></label>
    <span class="oekaki-bg" title="Background Color"><input name="oekaki-bg" type="checkbox" checked><input name="oekaki-bgcolor" type="color" value="#ffffff"></span>
  </div>
  <div id="file-n-submit">
    <span id="qr-file" class="row">
      <input type="button" id="qr-file-button" class="qr-button" value="Files">
      <span id="qr-filename-container" class="field">
        <span id="qr-no-file">No selected file</span>
        <input id="qr-filename" data-name="filename" spellcheck="false">
        <label id="qr-spoiler-label">
          <input type="checkbox" id="qr-file-spoiler" title="Spoiler image">
          <a class="checkbox-letter">S</a>
        </label>
      </span>
    </span>
    <span id="qr-actions-container" class="row space">
      <span id="qr-actions" class="row">
        <a href="javascript:;" id="qr-oekaki-button" class="qr-action-button" title="Edit in Tegaki">✎︎</a>
        <a href="javascript:;" id="qr-jpg" class="qr-action-button" title="Compress to jpg">C</a>
        <a href="javascript:;" id="qr-view" class="qr-action-button" title="Preview">V</a>
        <a href="javascript:;" id="qr-randomize" class="qr-action-button" title="Randomize filename">R</a>
        <a href="javascript:;" id="qr-restore-name" class="qr-action-button" title="Reset filename">U</a>
        <a href="javascript:;" id="qr-filerm" class="qr-action-button" title="Remove file">✕</a>
        <a href="javascript:;" id="url-button" class="qr-action-button" title="Post from URL">🔗︎</a>
        <a href="javascript:;" hidden id="paste-area" class="qr-action-button" title="Select to paste images" tabindex="-1" contentEditable="true">📋︎</a>
        <a href="javascript:;" id="custom-cooldown-button" class="qr-action-button" title="Toggle custom cooldown" class="disabled">🕒︎</a>
        <a href="javascript:;" id="split-post" class="qr-action-button" title="Split into multiple posts" hidden>✂️</a>
        <a href="javascript:;" id="dump-button" class="qr-action-button" title="Dump list">➕︎</a>
      </span>
      <input class="qr-button" type="submit">
    </span>
  </div>
  <select data-default="4" name="filetag">
    <option value="0">Hentai</option>
    <option value="6">Porn</option>
    <option value="1">Japanese</option>
    <option value="2">Anime</option>
    <option value="3">Game</option>
    <option value="5">Loop</option>
    <option value="4" selected>Other</option>
  </select>
  <input type="file" multiple>
</form>
<datalist id="list-name"></datalist>
<datalist id="list-email"></datalist>
<datalist id="list-sub"></datalist>`;

  var ferongr_unreadDead = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAFVBMVEX///9zBQC/AADpDAP/gID/q6voCwJJTwpOAAAAAXRSTlMAQObYZgAAAFNJREFUeNptjQUCQCEIQ4XJ7n9ji/hpvj2D9tNIPoAicgdKt/4CYMHKgGfVTdurusm39Rl53x1jzZxPmNm8irmJelH9CKRACF2dvsWb1Ws7pvHaJi3gAk+U2XRGAAAAAElFTkSuQmCC';

  var ferongr_unreadDeadY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAxElEQVR42q2TAQYCURCG//dWKQWyUICEAJQIoFN0kC6w6DaLjhCgI3SFOsVkX35+z06vaPhN+r/5mTcWf6vHJBr1E0PjNAClQJmhYU1j1rapK1BkFHhOqyQFZJh+//AVb+VQFk6uP4RSs+wL9OkSl1GwTURS9xteeQHdIAvAzR32VphBA3B3h/Mz8f91XRtrFZDv75+K3lZWmIfsEfVUXsB5GGwMJB2iE8D7smvAXt5gGeB/D9rVO1awXYQtgnNGguzfei/okTkjgCMZiwAAAABJRU5ErkJggg==';

  var ferongr_unreadSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAFVBMVEX///8AcH4AtswA2PJ55fKi6fIA1/FtpPADAAAAAXRSTlMAQObYZgAAAFNJREFUeNptjQUCQCEIQ4XJ7n9ji/hpvj2D9tNIPoAicgdKt/4CYMHKgGfVTdurusm39Rl53x1jzZxPmNm8irmJelH9CKRACF2dvsWb1Ws7pvHaJi3gAk+U2XRGAAAAAElFTkSuQmCC';

  var ferongr_unreadSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAv0lEQVR42mOgHrj+8T8Mk6IGIVFQB8MIBYTVICQqn376v+jlJxCNpoCwGoTpNz4BMZoChGaoPC7N286AMIYiNMNh6nAYgulHwvLIivDGxKJt/xn0TcAYzMYFcBkA0ggDQN5xXJpxe0FQGNmA67g0Y0QTTFxIWRVhgKIq1HDMeMYdC/qmCAMkpFFdiIgqPAZUdf5n4OCEYHt3HAZsOwOjMQ0ws0H2Au78gEyjyIXE/2cwNP/PICmLGY3ICmE0sXIAYT+TvkUROOYAAAAASUVORK5CYII=';

  var ferongr_unreadNSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAFVBMVEX///8oeQBJ3ABV/wHM/7Lu/+ZU/gAqUP3dAAAAAXRSTlMAQObYZgAAAFNJREFUeNptjQUCQCEIQ4XJ7n9ji/hpvj2D9tNIPoAicgdKt/4CYMHKgGfVTdurusm39Rl53x1jzZxPmNm8irmJelH9CKRACF2dvsWb1Ws7pvHaJi3gAk+U2XRGAAAAAElFTkSuQmCC';

  var ferongr_unreadNSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR42mOgGgj5x/AfhklQg5DQqIRjhALCahASZ/5v+v/u/zMQjaqAsBqEgtD/jCCMogBJM0weu2bPO2CMoQjNcJg6bIbg8CNheYQifDFhf4Dhv5A5BIPYBKMTXRykEQaA3OM4NOP2ApsQigHXcWnGiCaYuIKGNNwAXnU0F+KLKpickAXCBRxSCBeipwOcBhhMZPjPzAXBYi44DPC8A6cxDBB1RLiAWwVPfkCmkeXkohn+C1sx/OeUxhqNCIUwmlg5ABb/Y7V8eEcdAAAAAElFTkSuQmCC';

  var xat_unreadDead = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAG1BMVEX+AACLkZFub2yfaF3zZGIAAAD/AAD/iYr/zs8IPcF6AAAABXRSTlMAeprJ7xzg6IEAAABUSURBVHjaYiAGAOocCwMAgRCKUh/cf2L1Ot8FHQBYPhhAst0d+pGU5jGbbEfEJ6vnIz5QepCoRTxPhKncHLWkOBi1KZhOY+tmo+M7IklQAt+pYucFkFsDARa59ZMAAAAASUVORK5CYII=';

  var xat_unreadDeadY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAPFBMVEUAAACEgoBva2ilamDxcG7IaWYgFBNOSEf//f0PDQwBAAA7LCwAAAD/AAD+hIX+m5z+zc5HAADPAAAGAADl032uAAAADHRSTlMAzNv0/vz+6v3+7ALrmfyXAAAAZUlEQVR42oxNxQHAIAzE9ZLa/rNW0V9xTsWfAUBKpaQE8P6JCPoe76Mhxkx/AjOoIffgZWGUDKG04WVdF+ucnwAXQnwBqYulAfhCtwrU2htAB7TGfhwVuKdSXSEg8F4J+RoWrwIAQKkGZfFYhZ4AAAAASUVORK5CYII=';

  var xat_unreadSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIVBMVEUAAACRjop4dXVpZ2tdcI9dfKdisfMAAAAumMN9xv+s2/+PADT2AAAAB3RSTlMAepGdv83v3HIc4QAAAFdJREFUeNqNTYUBAyEMjF/C/vu27244p/RlAGBRFQYw/DMT5m7DY0Eidv9E1XhPGajWClMGqUf375BwvQbEZovJADDmUDBd1E6A+xbopupw0YgQ5uti/AEjcAQde9z08gAAAABJRU5ErkJggg==';

  var xat_unreadSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAMFBMVEUAAACAgYVlc4ljsu4AAAAAAAAAAAAumMODyP6b1P6e1f/g8v89msgSIiwNFxwbPU3tQYj5AAAABnRSTlMAxej+9VTmD9ciAAAAY0lEQVR42ozNUQ4DIQiEYRmbH6xde//bdkMsiW/Li/LFGduTAcwkMyB3d0f35KWk92N3IvASIMY72B1N6jHmHJ9r6YBrzpVg2pECspS1ob69IxQg8YU/kFAvGo08XvzGisWrAAQRBA+DRjP7AAAAAElFTkSuQmCC';

  var xat_unreadNSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEUfJSCRi5Frbm9dn19082KR/30AAABmzDOq/5vZ/9Gt/vt2AAAABnRSTlMAe5rJ7/4vxEp4AAAAU0lEQVR42mIgBgDqHAsDCGIQgKGB7j/wy7mmggug9kOBya4q/MekbJ6Ik11kUpsHyO5k6SHmkT1GZ7i9OdaSxaGsTVF5GrtudnRQmE1CJhBW8cAXuLsDUS249XUAAAAASUVORK5CYII=';

  var xat_unreadNSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAM1BMVEUAAACBj39tfm1qj2RepFlu2VQAAQAAAAAAAABmyzOX/oSr/pus/pzk/98PGgtatC4CBAI1ENblAAAACHRSTlMA09/p9v77ig0SBcQAAABkSURBVHjajE2FDQAhDKSWXIvuv+y7EX2c0/RnACDeBgE4/u4OUZXj8SBm098RAX+QbUQugSsjsVrkWrO1xhPQam0nIJflBghn6KO4azcAL6CKPsYNbJP5VSSkdRD3sHGwY/EqAIxSBSCMVsKoAAAAAElFTkSuQmCC';

  var Mayhem_unreadDead = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABFklEQVR42p2SAYf0MBCGo/3UqlqVpqn1qarYOGtV63Dc//9fdzPrUbm4wIVHat73HZOkRlYjtEIvWPZOuAj/4EIt9bSvLIIXFiEIq3DD2IHVGlrA69GM0+JXssZx3Oq6VuMEi9ZSj2bImv9UTnQ553Y1SaOo3795NCuYWTgKhjfv/bOgHWTzCYoNihN44Z6er3iEZGmGrLlyw1HYGW3DMMOd2oEnkrka3tPxNA+Mz7wBtQ3PQqZNGwThHJVArKrqkR7BWvuux0obdIzz47Josmsgr3M/N7KmF9bCU330ff9Z0FayxgrhDw0C2VeX5TSxY9qGYTgK2kLWtLxnQDjYo7BCzLRARrOm4TIcf9bMPlFTpkxzZJpvFGg1bzaJAWwAAAAASUVORK5CYII=';

  var Mayhem_unreadDeadY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABRklEQVR42oWSgWb0QBDHx+UTn4iKzSanKiKiEedEomg0r5AHKAV9pDxSXqDVAlB9lHT+/J3BxS0/O2bnNze3G9EVKpGSKI57rPxX/hHEsa2hEwoPcqVUaqVS7lkYE8dcxZoSDs/EI7mZlWVZFwQBCo+kRM7WwKErD8xcwPLe9yjSRg3iazVwFSmUYaegzfP8vHM20LUT3GiwM0GuPG527fwFu+DQlTvecKP0HK1jQUEQvyvf5I0OXIkUz6c5UT5fafBlfv2DTmQb1MplVDZpDofDCX+hbVs7/o9tEHMce1kMpXfOPSFumWP+Fw5dSZRq56mekyR5QTyaBuM4bnDoilPqWw0WzUVkWRZ+ieqyS4kiirZBl6bpgHg2E8zzvMGhKxHfs6Y0cG+UijTruiL3OU0T9lc4dCXkZXh+WQX3I3OesT3zdMI/nyk9ocCqsEIAAAAASUVORK5CYII=';

  var Mayhem_unreadSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR42p3RgWbEQBSF4Ytaa4yKiI2IGDEStSIS0EftA/XB2hP+rnEZ6PIZO/eckWRMv5sEaaRljXKXN9wlukyga1EekiTLLAPBiJa9mUyiE8U6yT/FT/+fhHokebpMpmvjtbF/fb8Q2CRjq2RGsUnOSuDjUpmddP0T1A+oPcFDlvL9Kq/g5wtde5dBVjl4tJ3AhIW9k8wqA10L0hlfmuDmD2BvJ5PohPKALId7hRVbsX9ILg+IMvireoXF73P4QNcamStX9XmpzGa61kr+xwGZrjWS/kLlykfbK7NE1wL3mRmcrKvMWN0s0wliN4nSySgTay8dejfr6Nx+ARmXRvbmqvoaAAAAAElFTkSuQmCC';

  var Mayhem_unreadSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVR42oWTRVJEMRiEg8OrcXd3nw16hVnirLgAd3krroOs0S1ylUf/U50ilbFUfdHuP66QtoEDQiDC0gd2wabAus/SOFMvBxKgCKqgDNIU+kiEfWVqivT4gIqBqmcktDsUJYnUO5amSq/KSsfg/lmjBT1QJb0FmixQeTBeIGgJC8bG9NorWB3AXkEC1D0jLdqCNV6nVwV4wg0w4tIGFOQF1m/BJ7mhJ6B4nzF90jT35gT4MGZ/pccxA1TByNpCg/RarZa5/G8zgA+k7auicKSD7iQLZoBfenyKz7K84KoOBKk75f93dHh46ImHXhUB1VUBMmd33trWzhTXdfkS4WWUog5gljzQgdT9/WNPp8lk4omHXuXwPqs0jVk2QJk0Hh8fpe/t5OREykt6HP2dfTzVLMizTIIYSVpjMXq2/wDfYUr8wN0YOAAAAABJRU5ErkJggg==';

  var Mayhem_unreadNSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA/ElEQVR42p3RAWfEMBjG8RdTJ2Kq6qqqoqIxp6o17Bvt0+47bU/570QI3PETl/d5om1Mv0actNKxernJG27ii4yja17uEiTKIiNBj469hUyg48V6ib/ZT/8fhAYEeRSZSNema+P75/OJwCYRWyUzic1yVgIfl8rspFs+Qf2A2hPcZc3fr/IK5Xyla+8ySpKDR9sJzFjZO8kkGemak9740gS38gD2djKBjssPiHIUr5CwZfuHxPwAL2N5Vc+wlPscPtK1VpbKVX1dKrOFrnUSXzgg0rVWwn8oX/loe2UW6JrjPiODkzXJglTMIh0n1oiXXiaZWQfpMRSznk7zB4RaQX4rJ6lsAAAAAElFTkSuQmCC';

  var Mayhem_unreadNSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVR4AYWS0UqFQBCGhziImNRBRImDmUgiIaF0kWSP4AMEXXXTE/QiPpL3UdR19Crb/PAvLEtyFj5mmfn/cdxd0RUokbJXEsZYCZUd4D72NBG8wkKmlEqtVMoFhTFJmKuoKelBTVIkjbNE5IainJTIeZqaXjkg8fp+Z7GCjiLQbWgOihTKsCFowUZtoNef4HgDf4JMuTbe8n/Br8NDr5zxhBul52i3FBQE+xflmzzTA69ESmpPmubunwZfztc/6IncBrXSe7/QkK5tW3f8H7dBjHH8q6Kwt033V6Hb4JeeWPgsq42rugfYZ92psWscRwMPvZIo9bEGD2+F2YUnBizLwpeoXnYpbQM34kAB9peP58aueZ4NPPRKxPusaRoYG6UizbquyH1O04T4RA+8EvAwUr6sgjFnDuReLaUn+ANygUa7+9SCWgAAAABJRU5ErkJggg==';

  var fourChanJS_unreadDead = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUBAAAAAAD/AABnZ2f///8nFk05AAAAAXRSTlMAQObYZgAAAEFJREFUeNqNjgEKACAMAjvX/98cAkkxgmSgO8Bt/Ai4ApJ6KKhzF3OiEMDASrGB/QWgPEHsUpN+Ng9xAETMYhDrWmeHAMcmvycWAAAAAElFTkSuQmCC';

  var fourChanJS_unreadDeadY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUAAAAAAAD/AABmZmYA/wBD99DBAAAAAXRSTlMAQObYZgAAAERJREFUeNpiIAYA6pwDDApiGAig/yW9/5m/YEdXbGDSh2nwWlTVXpq+3+UcFcEApHhg8gtoWshTOrK/zUEuUBIzfhJ7/meHAMdsgg3zAAAAAElFTkSuQmCC';

  var fourChanJS_unreadSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUBAAAAAAAul8NnZ2f////82iC9AAAAAXRSTlMAQObYZgAAAEFJREFUeNqNjgEKACAMAjvX/98cAkkxgmSgO8Bt/Ai4ApJ6KKhzF3OiEMDASrGB/QWgPEHsUpN+Ng9xAETMYhDrWmeHAMcmvycWAAAAAElFTkSuQmCC';

  var fourChanJS_unreadSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUAAAAAAAAul8NnZ2f/AAD7B+mqAAAAAXRSTlMAQObYZgAAAERJREFUeNpiIAYA6pwDDApiGAig/yW9/5m/YEdXbGDSh2nwWlTVXpq+3+UcFcEApHhg8gtoWshTOrK/zUEuUBIzfhJ7/meHAMdsgg3zAAAAAElFTkSuQmCC';

  var fourChanJS_unreadNSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAElBMVEUBAAAAAABmzDNlyjJnZ2f///+6o7dfAAAAAXRSTlMAQObYZgAAAERJREFUeF6NjkEKADEIA51o///lJZfQxUsHITogWi8AvwZJuxmYa25xDooBLEwOWFTYAsYVhdorLZt9Ng9xCUTCUCQ2H3F4ANrZ2WNiAAAAAElFTkSuQmCC';

  var fourChanJS_unreadNSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAD1BMVEUAAAAAAABmzDNmZmb/AAC8/wCMAAAAAXRSTlMAQObYZgAAAERJREFUeNpiIAYA6pwDDApiGAig/yW9/5m/YEdXbGDSh2nwWlTVXpq+3+UcFcEApHhg8gtoWshTOrK/zUEuUBIzfhJ7/meHAMdsgg3zAAAAAElFTkSuQmCC';

  var Original_unreadDead = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAADFBMVEX/////AAD///8AAABBZmS3AAAAAXRSTlMAQObYZgAAAEJJREFUeNp1jQEKwEAIwzT9/58Hk3ATbgVoG6jWRcAKJPkG0t23sLpA4tZjwPGRoOxOsHt0yH77AzIgbkLQXlEcewCo8AFNs8H5UAAAAABJRU5ErkJggg==';

  var Original_unreadDeadY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAhElEQVR42q1RwQnAMAjMu5M4guAKXa4j5dUROo5tipSDcrFChUONd0di2m/hEGVOHDyIPufgwAFASDkpoSzmBrkJ2UMyR9LsJ3rvrqo3Rt1YMIMhhNnOxLMnoMFBxHyJAr2IOBFzA8U+6pLBdmEJTA0aMVjpDd6Loks0s5HZNwYx8tfZCZ0kll7ORffZAAAAAElFTkSuQmCC';

  var Original_unreadSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAADFBMVEX///8ul8P///8AAACaqgkzAAAAAXRSTlMAQObYZgAAAEJJREFUeNp1jQEKwEAIwzT9/58Hk3ATbgVoG6jWRcAKJPkG0t23sLpA4tZjwPGRoOxOsHt0yH77AzIgbkLQXlEcewCo8AFNs8H5UAAAAABJRU5ErkJggg==';

  var Original_unreadSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEUAAAAAAAAAAAAAAAABBQcHFx4KISoNLToaVW4oKCgul8M4ODg7OzvBwcH///8uS/CdAAAAA3RSTlMAx9dmesIgAAAAV0lEQVR42m2PgQqAIAxErVmV5vv/zw3arRQUwLsHe2Np8oAhYGZ9wEopszD2ACIx+8lkb7U2LXZQYVHXCKzqLt3gUnewg9GDM+cA9oID4gZcepvWkvi/BwR+Bfo8YGYaAAAAAElFTkSuQmCC';

  var Original_unreadNSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAADFBMVEX///9mzDP///8AAACT0n1lAAAAAXRSTlMAQObYZgAAAEJJREFUeNp1jQEKwEAIwzT9/58Hk3ATbgVoG6jWRcAKJPkG0t23sLpA4tZjwPGRoOxOsHt0yH77AzIgbkLQXlEcewCo8AFNs8H5UAAAAABJRU5ErkJggg==';

  var Original_unreadNSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEUAAAAAAAAAAAAAAAAECAIQIAgWLAsePA8oKCg4ODg6dB07OztmzDPBwcH///+rsf3XAAAAA3RSTlMAx9dmesIgAAAAV0lEQVR42m2PgQqAIAxErVll6fv/zw3arRQUwLsHe2Np8oAhYGZ9wGqtszD2ACIx+8lkb6U0LXZQYFHXCKzqLt3gVHewg9GDK+cA9oID4gZcepvWkvi/ByUyBjCqN1XpAAAAAElFTkSuQmCC';

  var Metro_unreadDead = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAC/AABrZQDiAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==';

  var Metro_unreadDeadY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAAC/AAD///8dAAApAABsAAAHAAA4AACQAAAsAABMCpCvAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII=';

  var Metro_unreadSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAAA1/GhpCidAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==';

  var Metro_unreadSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAAAA1/H///8AISUALzQAeokACAkAQEcAorYAMTcE9WFNAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII=';

  var Metro_unreadNSFW = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAABV/wErM5hwAAAAAXRSTlMAQObYZgAAABJJREFUCB1jZGBgrMNAQEEc4gCSfAX5bRw/NQAAAABJRU5ErkJggg==';

  var Metro_unreadNSFWY = 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAAAAAAAAABV/wH///8NKAASOAAwkQADCgAZTABAwQATOwC5e3VGAAAAA3RSTlMAPse+s4iwAAAAMklEQVQI12NggAFmY2MDECaNAQZCilAzVJyg5oS4GqAxUtygjIp2KGOKJ5SxepcB3BUAcdYRqxAtgFoAAAAASUVORK5CYII=';

  var dead = 'R0lGODlhEAAQAKECAAAAAP8AAP///////yH5BAEKAAIALAAAAAAQABAAAAIslI+pq+D9DAgUoFnPrDLkHnxYJgFReTLqyqSpJn5w/HXx101ApyeWdfixGAUAOw==';

  var empty = 'R0lGODlhEAAQAPD/AAAAANvb2yH5BAUAAAIALAAAAAAQABAAAAIslI+pq+D9DAgUoFnPrDLkHnxYJgFReTLqyqSpJn5w/HXx101ApyeWdfixGAUAOw==';

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
          const { href } = Favicon.el;
          Favicon.isSFW = /ws\.ico$/.test(href);
          Favicon.default = href;
          Favicon.switch();
          if (Favicon.status) {
              Favicon.set(Favicon.status);
          }
      },
      switch() {
          let items = {
              ferongr: [
                  ferongr_unreadDead,
                  ferongr_unreadDeadY,
                  ferongr_unreadSFW,
                  ferongr_unreadSFWY,
                  ferongr_unreadNSFW,
                  ferongr_unreadNSFWY,
              ],
              'xat-': [
                  xat_unreadDead,
                  xat_unreadDeadY,
                  xat_unreadSFW,
                  xat_unreadSFWY,
                  xat_unreadNSFW,
                  xat_unreadNSFWY,
              ],
              Mayhem: [
                  Mayhem_unreadDead,
                  Mayhem_unreadDeadY,
                  Mayhem_unreadSFW,
                  Mayhem_unreadSFWY,
                  Mayhem_unreadNSFW,
                  Mayhem_unreadNSFWY,
              ],
              '4chanJS': [
                  fourChanJS_unreadDead,
                  fourChanJS_unreadDeadY,
                  fourChanJS_unreadSFW,
                  fourChanJS_unreadSFWY,
                  fourChanJS_unreadNSFW,
                  fourChanJS_unreadNSFWY,
              ],
              Original: [
                  Original_unreadDead,
                  Original_unreadDeadY,
                  Original_unreadSFW,
                  Original_unreadSFWY,
                  Original_unreadNSFW,
                  Original_unreadNSFWY,
              ],
              'Metro': [
                  Metro_unreadDead,
                  Metro_unreadDeadY,
                  Metro_unreadSFW,
                  Metro_unreadSFWY,
                  Metro_unreadNSFW,
                  Metro_unreadNSFWY,
              ]
          };
          items = $.getOwn(items, Conf.favicon);
          const f = Favicon;
          const t = 'data:image/png;base64,';
          let i = 0;
          while (items[i]) {
              items[i] = t + items[i++];
          }
          [f.unreadDead, f.unreadDeadY, f.unreadSFW, f.unreadSFWY, f.unreadNSFW, f.unreadNSFWY] = items;
          f.update();
      },
      update() {
          if (this.isSFW) {
              this.unread = this.unreadSFW;
              this.unreadY = this.unreadSFWY;
          }
          else {
              this.unread = this.unreadNSFW;
              this.unreadY = this.unreadNSFWY;
          }
      },
      SFW: '//s.4cdn.org/image/favicon-ws.ico',
      NSFW: '//s.4cdn.org/image/favicon.ico',
      dead: `data:image/gif;base64,${dead}`,
      logo: `data:image/png;base64,${empty}`,
  };

  var Menu = {
      init() {
          if (!['index', 'thread'].includes(g.VIEW) || !Conf.Menu) {
              return;
          }
          this.button = $.el('a', {
              className: 'menu-button',
              href: 'javascript:;'
          });
          Icon.set(this.button, 'caretDown');
          this.menu = new UI.Menu('post');
          Callbacks.Post.push({
              name: 'Menu',
              cb: this.node
          });
          Callbacks.CatalogThread.push({
              name: 'Menu',
              cb: this.catalogNode
          });
      },
      node() {
          if (this.isClone) {
              const button = $('.menu-button', this.nodes.info);
              $.rmClass(button, 'active');
              $.rm($('.dialog', this.nodes.info));
              Menu.makeButton(this, button);
              return;
          }
          $.add(this.nodes.info, Menu.makeButton(this));
      },
      catalogNode() {
          return $.after(this.nodes.icons, Menu.makeButton(this.thread.OP));
      },
      makeButton(post, button) {
          if (!button) {
              button = Menu.button.cloneNode(true);
          }
          $.on(button, 'click', function (e) { Menu.menu.toggle(e, this, post); });
          return button;
      }
  };

  var QR = {
    postingIsEnabled: false,
    // will be set at init
    // captcha: undefined as typeof Captcha.v2 | typeof Captcha.t,
    captcha: null,
    min_width: 0,
    min_height: 0,
    max_width: 0,
    max_height: 0,
    max_size: 0,
    max_size_video: 0,
    max_comment: 0,
    max_width_video: 0,
    max_height_video: 0,
    max_duration_video: 0,
    forcedAnon: false,
    spoiler: false,
    link: undefined,
    post: undefined,
    posts: undefined,
    nodes: undefined,
    shortcut: undefined,
    hasFocus: false,
    req: undefined,
    selected: undefined,
    mimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'application/vnd.adobe.flash.movie', 'application/x-shockwave-flash', 'video/webm', 'video/mp4'],
    validExtension: /\.(jpe?g|png|gif|pdf|swf|webm|mp4)$/i,
    typeFromExtension: {
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'pdf': 'application/pdf',
      'swf': 'application/vnd.adobe.flash.movie',
      'webm': 'video/webm',
      'mp4': 'video/mp4'
    },
    extensionFromType: {
      'image/jpeg': 'jpg',
      'image/png': 'png',
      'image/gif': 'gif',
      'application/pdf': 'pdf',
      'application/vnd.adobe.flash.movie': 'swf',
      'application/x-shockwave-flash': 'swf',
      'video/webm': 'webm',
      'video/mp4': 'mp4'
    },
    init() {
      let sc;
      if (!Conf['Quick Reply']) {
        return;
      }
      this.posts = [];
      $.on(d, '4chanXInitFinished', () => BoardConfig.ready(QR.initReady));
      Callbacks.Post.push({
        name: 'Quick Reply',
        cb: this.node
      });
      this.shortcut = (sc = $.el('a', {
        className: 'disabled',
        title: 'Quick Reply',
        href: 'javascript:;',
      }));
      Icon.set(this.shortcut, 'comment', 'Quick Reply');
      $.on(sc, 'click', function () {
        if (!QR.postingIsEnabled) {
          return;
        }
        if (Conf['Persistent QR'] || !QR.nodes || QR.nodes.el.hidden) {
          QR.open();
          QR.nodes.com.focus();
        } else {
          QR.close();
        }
      });
      Header.addShortcut('qr', sc, 540);
      window.addEventListener('message', event => {
        if (event.data?.twister?.error) {
          QR.error($.el('div', { innerHTML: event.data.twister.error }));
        }
      });
    },
    initReady() {
      let origToggle;
      // const captchaVersion = $('#g-recaptcha, #captcha-forced-noscript') ? 'v2' : 't';
      // QR.captcha = Captcha[captchaVersion];
      QR.captcha = Captcha.t;
      QR.postingIsEnabled = true;
      const { config } = g.BOARD;
      const prop = (key, def) => +(config[key] ?? def);
      QR.min_width = prop('min_image_width', 1);
      QR.min_height = prop('min_image_height', 1);
      QR.max_width = (QR.max_height = 10000);
      QR.max_size = prop('max_filesize', 4194304);
      QR.max_size_video = prop('max_webm_filesize', QR.max_size);
      QR.max_comment = prop('max_comment_chars', 2000);
      QR.max_width_video = (QR.max_height_video = 2048);
      QR.max_duration_video = prop('max_webm_duration', 120);
      QR.forcedAnon = !!config.forced_anon;
      QR.spoiler = !!config.spoilers;
      if (origToggle = $.id('togglePostFormLink')) {
        const link = $.el('h1', { className: "qr-link-container" });
        $.extend(link, {
          innerHTML: `<a href="javascript:;" class="qr-link">${g.VIEW === "thread" ? "Reply to Thread" : "Start a Thread"}</a>`
        });
        QR.link = link.firstElementChild;
        $.on(link.firstChild, 'click', function () {
          QR.open();
          QR.nodes.com.focus();
        });
        $.before(origToggle, link);
        origToggle.firstElementChild.textContent = 'Original Form';
      }
      if (g.VIEW === 'thread') {
        let navLinksBot;
        const linkBot = $.el('div', { className: "brackets-wrap qr-link-container-bottom" });
        $.extend(linkBot, { innerHTML: '<a href="javascript:;" class="qr-link-bottom">Reply to Thread</a>' });
        $.on(linkBot.firstElementChild, 'click', function () {
          QR.open();
          QR.nodes.com.focus();
        });
        if (navLinksBot = $('.navLinksBot')) {
          $.prepend(navLinksBot, linkBot);
        }
      }
      $.on(d, 'QRGetFile', QR.getFile);
      $.on(d, 'QRDrawFile', QR.drawFile);
      $.on(d, 'QRSetFile', QR.setFile);
      $.on(d, 'paste', QR.paste);
      $.on(d, 'dragover', QR.dragOver);
      $.on(d, 'drop', QR.dropFile);
      $.on(d, 'dragstart dragend', QR.drag);
      $.on(d, 'IndexRefreshInternal', QR.generatePostableThreadsList);
      $.on(d, 'ThreadUpdate', QR.statusCheck);
      if (!Conf['Persistent QR']) {
        return;
      }
      QR.open();
      if (Conf['Auto Hide QR']) {
        return QR.hide();
      }
    },
    statusCheck() {
      if (!QR.nodes) {
        return;
      }
      const { thread } = QR.posts[0];
      if ((thread !== 'new') && g.threads.get(`${g.BOARD}.${thread}`).isDead) {
        return QR.abort();
      } else {
        return QR.status();
      }
    },
    node() {
      $.on(this.nodes.quote, 'click', QR.quote);
      if (this.isFetchedQuote) {
        return QR.generatePostableThreadsList();
      }
    },
    open() {
      if (QR.nodes) {
        if (QR.nodes.el.hidden) {
          QR.captcha.setup();
        }
        QR.nodes.el.hidden = false;
        QR.unhide();
      } else {
        try {
          QR.dialog();
        } catch (err) {
          delete QR.nodes;
          Main.handleErrors({
            message: 'Quick Reply dialog creation crashed.',
            error: err
          });
          return;
        }
      }
      return $.rmClass(QR.shortcut, 'disabled');
    },
    close() {
      if (QR.req) {
        QR.abort();
        return;
      }
      QR.nodes.el.hidden = true;
      QR.cleanNotifications();
      QR.blur();
      $.rmClass(QR.nodes.el, 'dump');
      $.addClass(QR.shortcut, 'disabled');
      new QR.post(true);
      for (var post of QR.posts.splice(0, QR.posts.length - 1)) {
        post.delete();
      }
      QR.cooldown.auto = false;
      QR.status();
      return QR.captcha.destroy();
    },
    focus() {
      return $.queueTask(function () {
        // if (!QR.inBubble()) {
        QR.hasFocus = d.activeElement && QR.nodes.el.contains(d.activeElement);
        return QR.nodes.el.classList.toggle('focus', QR.hasFocus);
        // }
      });
    },
    // inBubble() {
    //   const bubbles = $$('iframe[src^="https://www.google.com/recaptcha/api2/frame"]');
    //   return bubbles.includes(d.activeElement) || bubbles.some(el => (getComputedStyle(el).visibility !== 'hidden') && (el.getBoundingClientRect().bottom > 0));
    // },
    hide() {
      QR.blur();
      $.addClass(QR.nodes.el, 'autohide');
      return QR.nodes.autohide.checked = true;
    },
    unhide() {
      $.rmClass(QR.nodes.el, 'autohide');
      return QR.nodes.autohide.checked = false;
    },
    toggleHide() {
      if (this.checked) {
        return QR.hide();
      } else {
        return QR.unhide();
      }
    },
    blur() {
      if (QR.nodes.el.contains(d.activeElement)) {
        return d.activeElement.blur();
      }
    },
    toggleSJIS(e) {
      e.preventDefault();
      Conf.sjisPreview = !Conf.sjisPreview;
      $.set('sjisPreview', Conf.sjisPreview);
      return QR.nodes.el.classList.toggle('sjis-preview', Conf.sjisPreview);
    },
    texPreviewShow() {
      if ($.hasClass(QR.nodes.el, 'tex-preview')) {
        return QR.texPreviewHide();
      }
      $.addClass(QR.nodes.el, 'tex-preview');
      QR.nodes.texPreview.textContent = QR.nodes.com.value;
      $.event('mathjax', null, QR.nodes.texPreview);
    },
    texPreviewHide() {
      return $.rmClass(QR.nodes.el, 'tex-preview');
    },
    addPost() {
      const wasOpen = (QR.nodes && !QR.nodes.el.hidden);
      QR.open();
      if (wasOpen) {
        $.addClass(QR.nodes.el, 'dump');
        new QR.post(true);
      }
      QR.nodes.com.focus();
    },
    setCustomCooldown(enabled) {
      Conf.customCooldownEnabled = enabled;
      QR.cooldown.customCooldown = enabled;
      return QR.nodes.customCooldown.classList.toggle('disabled', !enabled);
    },
    toggleCustomCooldown() {
      const enabled = $.hasClass(QR.nodes.customCooldown, 'disabled');
      QR.setCustomCooldown(enabled);
      return $.set('customCooldownEnabled', enabled);
    },
    error(err, focusOverride) {
      let el;
      QR.open();
      if (typeof err === 'string') {
        el = $.tn(err);
      } else {
        el = err;
        el.removeAttribute('style');
      }
      const notice = new Notice('warning', el);
      QR.notifications.push(notice);
      if (!Header.areNotificationsEnabled) {
        if (d.hidden && !QR.cooldown.auto) {
          return alert(el.textContent);
        }
      } else if (d.hidden || !(focusOverride || d.hasFocus())) {
        const notif = new Notification(el.textContent, {
          body: el.textContent,
          icon: Favicon.logo
        });
        notif.onclick = () => window.focus();
        if ($.engine !== 'gecko') {
          // Firefox automatically closes notifications
          // so we can't control the onclose properly.
          notif.onclose = () => notice.close();
          return notif.onshow = () => setTimeout(function () {
            notif.onclose = null;
            return notif.close();
          }, 7 * SECOND);
        }
      }
    },
    connectionError() {
      return $.el('span', { innerHTML: 'Connection error while posting. ' +
          '[<a href="' + E(meta.upstreamFaq) + '#connection-errors" target="_blank">More info</a>]'
      });
    },
    notifications: [],
    cleanNotifications() {
      for (var notification of QR.notifications) {
        notification.close();
      }
      return QR.notifications = [];
    },
    /* Returns true if the QR is disabled. */
    status() {
      let disabled, value;
      if (!QR.nodes) {
        return;
      }
      const { thread } = QR.posts[0];
      if ((thread !== 'new') && g.threads.get(`${g.BOARD}.${thread}`).isDead) {
        value = 'Dead';
        disabled = true;
        QR.cooldown.auto = false;
      }
      value = QR.req ?
        QR.req.progress
        :
          QR.cooldown.seconds || value;
      const { status } = QR.nodes;
      status.value = !value ?
        'Submit'
        : QR.cooldown.auto ?
          `Auto ${value}`
          :
            value;
      status.disabled = disabled || false;
      return status.disabled;
    },
    openPost() {
      QR.open();
      if (QR.selected.isLocked) {
        const index = QR.posts.indexOf(QR.selected);
        (QR.posts[index + 1] || new QR.post()).select();
        $.addClass(QR.nodes.el, 'dump');
        return QR.cooldown.auto = true;
      }
    },
    quote(e) {
      let range;
      e?.preventDefault();
      if (!QR.postingIsEnabled) {
        return;
      }
      const sel = d.getSelection();
      const post = Get.postFromNode(this);
      const { root } = post.nodes;
      const postRange = new Range();
      postRange.selectNode(root);
      let text = post.board.ID === g.BOARD.ID ? `>>${post}\n` : `>>>/${post.board}/${post}\n`;
      for (let i = 0; i < sel.rangeCount; i++) {
        try {
          var insideCode, node;
          range = sel.getRangeAt(i);
          // Trim range to be fully inside post
          if (range.compareBoundaryPoints(Range.START_TO_START, postRange) < 0) {
            range.setStartBefore(root);
          }
          if (range.compareBoundaryPoints(Range.END_TO_END, postRange) > 0) {
            range.setEndAfter(root);
          }
          if (!range.toString().trim()) {
            continue;
          }
          var frag = range.cloneContents();
          var ancestor = range.commonAncestorContainer;
          // Quoting the insides of a spoiler/code tag.
          if ($.x('ancestor-or-self::*[self::s or contains(@class,"removed-spoiler")]', ancestor)) {
            $.prepend(frag, $.tn('[spoiler]'));
            $.add(frag, $.tn('[/spoiler]'));
          }
          if (insideCode = $.x('ancestor-or-self::pre[contains(@class,"prettyprint")]', ancestor)) {
            $.prepend(frag, $.tn('[code]'));
            $.add(frag, $.tn('[/code]'));
          }
          for (node of $$((insideCode ? 'br' : '.prettyprint br'), frag)) {
            $.replace(node, $.tn('\n'));
          }
          for (node of $$('br', frag)) {
            if (node !== frag.lastChild) {
              $.replace(node, $.tn('\n>'));
            }
          }
          g.SITE.insertTags?.(frag);
          for (node of $$('.linkify[data-original]', frag)) {
            $.replace(node, $.tn(node.dataset.original));
          }
          for (node of $$('.embedder', frag)) {
            if (node.previousSibling?.nodeValue === ' ') {
              $.rm(node.previousSibling);
            }
            $.rm(node);
          }
          text += `>${frag.textContent.trim()}\n`;
        } catch (error) { }
      }
      QR.openPost();
      const { com, thread } = QR.nodes;
      if (!com.value) {
        thread.value = Get.threadFromNode(this);
      }
      const wasOnlyQuotes = QR.selected.isOnlyQuotes();
      const caretPos = com.selectionStart;
      // Replace selection for text.
      com.value = com.value.slice(0, caretPos) + text + com.value.slice(com.selectionEnd);
      // Move the caret to the end of the new quote.
      range = caretPos + text.length;
      com.setSelectionRange(range, range);
      com.focus();
      // This allows us to determine if any text other than quotes has been typed.
      if (wasOnlyQuotes) {
        QR.selected.quotedText = com.value;
      }
      QR.selected.save(com);
      return QR.selected.save(thread);
    },
    characterCount() {
      const counter = QR.nodes.charCount;
      const count = QR.nodes.com.value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '_').length;
      counter.textContent = count.toString();
      counter.hidden = count < (QR.max_comment / 2);
      const splitPost = QR.nodes.splitPost;
      splitPost.hidden = count < QR.max_comment;
      return (count > QR.max_comment ? $.addClass : $.rmClass)(counter, 'warning');
    },
    splitPost() {
      if (QR.selected.isLocked)
        return;
      const count = QR.nodes.com.value.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '_').length;
      if (count < QR.max_comment)
        return;
      const text = QR.nodes.com.value;
      let lastPostLength = 0;
      let splitCount = 0;
      const idx = QR.posts.indexOf(QR.selected);
      QR.selected.setComment("");
      for (const line of text.split("\n")) {
        const currentLength = line.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '_').length + 1; // +1 for newline at end
        if (currentLength + lastPostLength > QR.max_comment) {
          const post = new QR.post(true);
          post.setComment(line);
          lastPostLength = currentLength;
          splitCount++;
        } else {
          const newComment = [QR.selected.com, line].filter(el => el !== null).join('\n');
          QR.selected.setComment(newComment);
          lastPostLength += currentLength;
        }
      }
      const newPostIdx = QR.posts.length - splitCount;
      const newPosts = QR.posts.splice(newPostIdx, splitCount);
      QR.posts.splice(idx + 1, 0, ...newPosts);
      const rearrangedDumpList = [...QR.nodes.dumpList.children];
      const newDumps = rearrangedDumpList.splice(newPostIdx, splitCount);
      rearrangedDumpList.splice(idx + 1, 0, ...newDumps);
      for (const e of rearrangedDumpList) {
        QR.nodes.dumpList.appendChild(e);
      }
      QR.nodes.el.classList.add('dump');
    },
    getFile() {
      $.event('QRFile', QR.selected?.file);
    },
    drawFile(e) {
      const file = QR.selected?.file;
      if (!file || !/^(image|video)\//.test(file.type)) {
        return;
      }
      const isVideo = /^video\//.test(file);
      const el = $.el((isVideo ? 'video' : 'img'));
      $.on(el, 'error', () => QR.openError());
      $.on(el, (isVideo ? 'loadeddata' : 'load'), function () {
        e.target.getContext('2d').drawImage(el, 0, 0);
        URL.revokeObjectURL(el.src);
        return $.event('QRImageDrawn', null, e.target);
      });
      return el.src = URL.createObjectURL(file);
    },
    openError() {
      const div = $.el('div');
      $.extend(div, {
        innerHTML: 'Could not open file. [<a href="' + E(meta.upstreamFaq) + '#error-reading-metadata" target="_blank">More info</a>]'
      });
      return QR.error(div);
    },
    setFile(e) {
      const { file, name, source } = e.detail;
      if (name != null) {
        file.name = name;
      }
      if (source != null) {
        file.source = source;
      }
      QR.open();
      return QR.handleFiles([file]);
    },
    drag(e) {
      // Let it drag anything from the page.
      const toggle = e.type === 'dragstart' ? $.off : $.on;
      toggle(d, 'dragover', QR.dragOver);
      return toggle(d, 'drop', QR.dropFile);
    },
    dragOver(e) {
      e.preventDefault();
      return e.dataTransfer.dropEffect = 'copy';
    }, // cursor feedback
    dropFile(e) {
      // Let it only handle files from the desktop.
      if (!e.dataTransfer.files.length) {
        return;
      }
      e.preventDefault();
      QR.open();
      return QR.handleFiles(e.dataTransfer.files);
    },
    paste(e) {
      if (!e.clipboardData.items) {
        return;
      }
      let file = null;
      let score = -1;
      for (var item of e.clipboardData.items) {
        var file2;
        if ((item.kind === 'file') && (file2 = item.getAsFile())) {
          var score2 = (2 * +(file2.size <= QR.max_size)) + +(file2.type === 'image/png');
          if (score2 > score) {
            file = file2;
            score = score2;
          }
        }
      }
      if (file) {
        const { type } = file;
        const blob = new Blob([file], { type });
        blob.name = `${Conf.pastedname}.${$.getOwn(QR.extensionFromType, type) || 'jpg'}`;
        QR.open();
        QR.handleFiles([blob]);
      }
    },
    handleUrl(urlDefault) {
      QR.open();
      const { selected } = QR;
      selected.preventAutoPost();
      CrossOrigin.permission(function () {
        const url = prompt('Enter a URL:', urlDefault);
        if (!url)
          return;
        QR.nodes.fileButton.focus();
        CrossOrigin.file(url, function (blob) {
          if (blob && !/^text\//.test(blob.type)) {
            selected.setFile(blob);
            $.addClass(QR.nodes.el, 'dump');
          } else {
            QR.error("Can't load file.");
          }
        });
      });
    },
    handleFiles(files) {
      if (this !== QR) { // file input
        files = [...this.files];
        this.value = null;
      }
      if (!files.length) {
        return;
      }
      QR.cleanNotifications();
      for (var file of files) {
        QR.handleFile(file, files.length);
      }
      $.addClass(QR.nodes.el, 'dump');
      if ((d.activeElement === QR.nodes.fileButton) && $.hasClass(QR.nodes.fileSubmit, 'has-file')) {
        return QR.nodes.filename.focus();
      }
    },
    handleFile(file, nfiles) {
      let post;
      const isText = /^text\//.test(file.type);
      if (nfiles === 1) {
        post = QR.selected;
      } else {
        post = QR.posts[QR.posts.length - 1];
        if (isText ? post.com || post.pasting : post.file) {
          post = new QR.post();
        }
      }
      return post[isText ? 'pasteText' : 'setFile'](file);
    },
    openFileInput() {
      if (QR.nodes.fileButton.disabled) {
        return;
      }
      QR.nodes.fileInput.click();
      return QR.nodes.fileButton.focus();
    },
    generatePostableThreadsList() {
      if (!QR.nodes) {
        return;
      }
      const list = QR.nodes.thread;
      const options = [list.firstElementChild];
      for (var thread of g.BOARD.threads.keys) {
        options.push($.el('option', {
          value: thread,
          textContent: `Thread ${thread}`
        }));
      }
      const val = list.value;
      $.rmAll(list);
      $.add(list, options);
      list.value = val;
      if (list.value === val) {
        return;
      }
      // Fix the value if the option disappeared.
      list.value = g.VIEW === 'thread' ?
        g.THREADID
        :
          'new';
      return (g.VIEW === 'thread' ? $.addClass : $.rmClass)(QR.nodes.el, 'reply-to-thread');
    },
    dialog() {
      let dialog, event, nodes;
      let name;
      QR.nodes = (nodes = {
        el: (dialog = UI.dialog('qr', { innerHTML: QuickReplyPage }))
      });
      const setNode = (name, query) => nodes[name] = $(query, dialog);
      setNode('move', '.move');
      setNode('autohide', '#autohide');
      setNode('close', '.close');
      setNode('thread', 'select');
      setNode('form', 'form');
      setNode('sjisToggle', '#sjis-toggle');
      setNode('texButton', '#tex-preview-button');
      setNode('name', '[data-name=name]');
      setNode('email', '[data-name=email]');
      setNode('sub', '[data-name=sub]');
      setNode('com', '[data-name=com]');
      setNode('charCount', '#char-count');
      setNode('texPreview', '#tex-preview');
      setNode('dumpList', '#dump-list');
      setNode('addPost', '#add-post');
      setNode('oekaki', '.oekaki');
      setNode('drawButton', '#qr-draw-button');
      setNode('randomizeButton', '#qr-randomize');
      setNode('compress', '#qr-jpg');
      setNode('view', '#qr-view');
      setNode('restoreNameButton', '#qr-restore-name');
      setNode('fileSubmit', '#file-n-submit');
      setNode('fileButton', '#qr-file-button');
      setNode('noFile', '#qr-no-file');
      setNode('filename', '#qr-filename');
      setNode('spoiler', '#qr-file-spoiler');
      setNode('oekakiButton', '#qr-oekaki-button');
      setNode('fileRM', '#qr-filerm');
      setNode('urlButton', '#url-button');
      setNode('customCooldown', '#custom-cooldown-button');
      setNode('dumpButton', '#dump-button');
      setNode('status', '[type=submit]');
      setNode('flashTag', '[name=filetag]');
      setNode('fileInput', '[type=file]');
      setNode('splitPost', '#split-post');
      const { config } = g.BOARD;
      const { classList } = QR.nodes.el;
      classList.toggle('forced-anon', QR.forcedAnon);
      classList.toggle('has-spoiler', QR.spoiler);
      classList.toggle('has-sjis', !!config.sjis_tags);
      classList.toggle('has-math', !!config.math_tags);
      classList.toggle('sjis-preview', !!config.sjis_tags && Conf.sjisPreview);
      classList.toggle('show-new-thread-option', Conf['Show New Thread Option in Threads']);
      if (parseInt(Conf.customCooldown, 10) > 0) {
        $.addClass(QR.nodes.fileSubmit, 'custom-cooldown');
        $.get('customCooldownEnabled', Conf.customCooldownEnabled, function ({ customCooldownEnabled }) {
          QR.setCustomCooldown(customCooldownEnabled);
          return $.sync('customCooldownEnabled', QR.setCustomCooldown);
        });
      }
      QR.flagsInput();
      $.on(nodes.autohide, 'change', QR.toggleHide);
      $.on(nodes.close, 'click', QR.close);
      $.on(nodes.status, 'click', QR.submit);
      $.on(nodes.form, 'submit', QR.submit);
      $.on(nodes.sjisToggle, 'click', QR.toggleSJIS);
      $.on(nodes.texButton, 'mousedown', QR.texPreviewShow);
      $.on(nodes.texButton, 'mouseup', QR.texPreviewHide);
      $.on(nodes.addPost, 'click', () => new QR.post(true));
      $.on(nodes.drawButton, 'click', QR.oekaki.draw);
      $.on(nodes.fileButton, 'click', QR.openFileInput);
      $.on(nodes.noFile, 'click', QR.openFileInput);
      $.on(nodes.randomizeButton, 'click', () => { QR.selected.randomizeName(); });
      $.on(nodes.compress, 'click', async () => { QR.handleFiles([await QR.convert(QR.selected.file)]); });
      $.on(nodes.view, 'click', QR.preview);
      $.on(nodes.restoreNameButton, 'click', () => { QR.selected.restoreName(); });
      $.on(nodes.filename, 'focus', function () { return $.addClass(this.parentNode, 'focus'); });
      $.on(nodes.filename, 'blur', function () { return $.rmClass(this.parentNode, 'focus'); });
      $.on(nodes.spoiler, 'change', () => QR.selected.nodes.spoiler.click());
      $.on(nodes.oekakiButton, 'click', QR.oekaki.button);
      $.on(nodes.fileRM, 'click', () => QR.selected.rmFile());
      $.on(nodes.urlButton, 'click', () => QR.handleUrl(''));
      $.on(nodes.customCooldown, 'click', QR.toggleCustomCooldown);
      $.on(nodes.dumpButton, 'click', () => nodes.el.classList.toggle('dump'));
      $.on(nodes.fileInput, 'change', QR.handleFiles);
      $.on(nodes.splitPost, 'click', QR.splitPost);
      window.addEventListener('focus', QR.focus, true);
      window.addEventListener('blur', QR.focus, true);
      // We don't receive blur events from captcha iframe.
      $.on(d, 'click', QR.focus);
      // save selected post's data
      const items = ['thread', 'name', 'email', 'sub', 'com', 'filename', 'flag'];
      let i = 0;
      const save = function () { QR.selected.save(this); };
      while ((name = items[i++])) {
        var node;
        if (!(node = nodes[name])) {
          continue;
        }
        event = node.nodeName === 'SELECT' ? 'change' : 'input';
        $.on(nodes[name], event, save);
      }
      if (Conf['Remember QR Size']) {
        $.get('QR Size', '', item => nodes.com.style.cssText = item['QR Size']);
        $.on(nodes.com, 'mouseup', function (e) {
          if (e.button !== 0) {
            return;
          }
          $.set('QR Size', this.style.cssText);
        });
      }
      QR.generatePostableThreadsList();
      QR.persona.load();
      new QR.post(true);
      QR.status();
      QR.cooldown.setup();
      QR.captcha.init();
      $.add(d.body, dialog);
      QR.captcha.setup();
      QR.oekaki.setup();
      // Create a custom event when the QR dialog is first initialized.
      // Use it to extend the QR's functionalities, or for XTRM RICE.
      $.event('QRDialogCreation', null, dialog);
      Icon.set(nodes.oekakiButton, 'pencil');
      Icon.set(nodes.urlButton, 'link');
      Icon.set(nodes.customCooldown, 'clock');
      Icon.set(nodes.randomizeButton, 'shuffle');
      Icon.set(nodes.compress, 'shrink');
      Icon.set(nodes.view, 'eye');
      Icon.set(nodes.restoreNameButton, 'undo');
      Icon.set(nodes.splitPost, 'scissors');
      Icon.set(nodes.fileRM, 'xmark');
      Icon.set(nodes.close, 'xmark');
      Icon.set(nodes.dumpButton, 'squarePlus');
      Icon.set(nodes.addPost, 'plus');
    },
    flags() {
      const select = $.el('select', {
        name: 'flag',
        className: 'flagSelector'
      });
      const addFlag = (value, textContent) => $.add(select, $.el('option', { value, textContent }));
      addFlag('0', (g.BOARD.config.country_flags ? 'Geographic Location' : 'None'));
      for (var value in g.BOARD.config.board_flags) {
        var textContent = g.BOARD.config.board_flags[value];
        addFlag(value, textContent);
      }
      return select;
    },
    flagsInput() {
      const { nodes } = QR;
      if (!nodes) {
        return;
      }
      if (nodes.flag) {
        $.rm(nodes.flag);
        delete nodes.flag;
      }
      if (g.BOARD.config.board_flags) {
        const flag = QR.flags();
        flag.dataset.name = 'flag';
        flag.dataset.default = '0';
        nodes.flag = flag;
        return $.add(nodes.form, flag);
      }
    },
    submit(e) {
      let captcha, err, filetag;
      e?.preventDefault();
      const force = e?.shiftKey;
      if (QR.req) {
        QR.abort();
        return;
      }
      $.forceSync('cooldowns');
      if (QR.cooldown.seconds) {
        if (force) {
          QR.cooldown.clear();
        } else {
          QR.cooldown.auto = !QR.cooldown.auto;
          QR.status();
          return;
        }
      }
      const post = QR.posts[0];
      delete post.quotedText;
      post.forceSave();
      let threadID = post.thread;
      const thread = g.BOARD.threads.get(threadID);
      if ((g.BOARD.ID === 'f') && (threadID === 'new')) {
        filetag = QR.nodes.flashTag.value;
      }
      // prevent errors
      if (threadID === 'new') {
        threadID = null;
        if (!!g.BOARD.config.require_subject && !post.sub) {
          err = 'New threads require a subject.';
        } else if (!!!g.BOARD.config.text_only && !post.file) {
          err = 'No file selected.';
        }
      } else if (g.BOARD.threads.get(threadID).isClosed) {
        err = 'You can\'t reply to this thread anymore.';
      } else if (!post.com && !post.file) {
        err = 'No comment or file.';
      } else if (post.file && thread.fileLimit) {
        err = 'Max limit of image replies has been reached.';
      }
      if ((g.BOARD.ID === 'r9k') && !post.com?.match(/[a-z-]/i)) {
        if (!err) {
          err = 'Original comment required.';
        }
      }
      // if (QR.captcha.isEnabled && !((QR.captcha === Captcha.v2) && /\b_ct=/.test(d.cookie) && threadID) && !(err && !force)) {
      if (QR.captcha.isEnabled && !(err && !force)) {
        captcha = QR.captcha.getOne(!!threadID);
        // if (QR.captcha === Captcha.v2) {
        //   if (!captcha) { captcha = Captcha.cache.request(!!threadID); }
        // }
        if (!captcha) {
          err = 'No valid captcha.';
          QR.captcha.setup(!QR.cooldown.auto || (d.activeElement === QR.nodes.status));
        }
      }
      QR.cleanNotifications();
      if (err && !force) {
        // stop auto-posting
        QR.cooldown.auto = false;
        QR.status();
        QR.error(err);
        return;
      }
      // Enable auto-posting if we have stuff to post, disable it otherwise.
      QR.cooldown.auto = QR.posts.length > 1;
      post.lock();
      const formData = {
        MAX_FILE_SIZE: QR.max_size,
        mode: 'regist',
        pwd: QR.persona.getPassword(),
        resto: threadID,
        name: (!QR.forcedAnon ? post.name : undefined),
        email: post.email,
        sub: (!QR.forcedAnon && !threadID ? post.sub : undefined),
        com: post.com,
        upfile: post.file,
        filetag,
        spoiler: post.spoiler,
        flag: post.flag,
      };
      const options = {
        responseType: 'document',
        withCredentials: true,
        onloadend: QR.response,
        form: $.formData(formData)
      };
      if (Conf['Show Upload Progress']) {
        options.onprogress = function (e) {
          if (this !== QR.req?.upload) {
            return;
          } // aborted
          if (e.loaded < e.total) {
            // Uploading...
            QR.req.progress = `${Math.round((e.loaded / e.total) * 100)}%`;
          } else {
            // Upload done, waiting for server response.
            QR.req.isUploadFinished = true;
            QR.req.progress = '...';
          }
          return QR.status();
        };
      }
      let cb = function (response) {
        if (response != null) {
          QR.currentCaptcha = response;
          // if (QR.captcha === Captcha.v2) {
          //   if (response.challenge != null) {
          //     options.form.append('recaptcha_challenge_field', response.challenge);
          //     options.form.append('recaptcha_response_field', response.response);
          //   } else {
          //     options.form.append('g-recaptcha-response', response.response);
          //   }
          // } else {
          for (var key in response) {
            var val = response[key];
            options.form.append(key, val);
          }
          // }
        }
        QR.req = $.ajax(`https://sys.${location.hostname.split('.')[1]}.org/${g.BOARD}/post`, options);
        QR.req.progress = '...';
      };
      if (typeof captcha === 'function') {
        // Wait for captcha to be verified before submitting post.
        QR.req = {
          progress: '...',
          abort() {
            // if (QR.captcha === Captcha.v2) {
            //   Captcha.cache.abort();
            // }
            cb = null;
          }
        };
        captcha(function (response) {
          // if ((QR.captcha === Captcha.v2) && Captcha.cache.haveCookie()) {
          //   cb?.();
          //   if (response) { return Captcha.cache.save(response); }
          // } else if (response) {
          if (response) {
            cb?.(response);
          } else {
            delete QR.req;
            post.unlock();
            QR.cooldown.auto = !!Captcha.cache.getCount();
            QR.status();
          }
        });
      } else {
        cb(captcha);
      }
      // Starting to upload might take some time.
      // Provide some feedback that we're starting to submit.
      QR.status();
    },
    response() {
      let connErr, err;
      if (this !== QR.req) {
        return;
      } // aborted
      delete QR.req;
      const post = QR.posts[0];
      post.unlock();
      if (err = this.response?.getElementById('errmsg')) { // error!
        const el = $('a', err);
        if (el)
          el.target = '_blank'; // duplicate image link
      } else if (connErr = (!this.response || (this.response.title !== 'Post successful!'))) {
        err = QR.connectionError();
        //   if ((QR.captcha === Captcha.v2) && QR.currentCaptcha) { Captcha.cache.save(QR.currentCaptcha); }
      } else if (this.status !== 200) {
        err = `Error ${this.statusText} (${this.status})`;
      }
      if (!connErr) {
        QR.captcha.setUsed?.();
      }
      delete QR.currentCaptcha;
      if (err) {
        let m;
        QR.errorCount = (QR.errorCount || 0) + 1;
        if (/captcha|verification/i.test(err.textContent)) {
          // Remove the obnoxious 4chan Pass ad.
          if (/mistyped/i.test(err.textContent)) {
            err = 'You mistyped the CAPTCHA, or the CAPTCHA malfunctioned.';
          } else if (/expired/i.test(err.textContent)) {
            err = 'This CAPTCHA is no longer valid because it has expired.';
          }
          // Do not auto post with a wrong captcha.
          QR.cooldown.auto = false;
        } else if (connErr) {
          if (QR.errorCount >= 5) {
            // Too many posting errors can ban you. Stop autoposting after 5 errors.
            QR.cooldown.auto = false;
          } else {
            // Something must've gone terribly wrong if you get captcha errors without captchas.
            // Don't auto-post indefinitely in that case.
            QR.cooldown.auto = QR.captcha.isEnabled || connErr;
            // Too many frequent mistyped captchas will auto-ban you!
            // On connection error, the post most likely didn't go through.
            // If the post did go through, it should be stopped by the duplicate reply cooldown.
            QR.cooldown.addDelay(post, 2);
          }
        } else if (err.textContent && (m = err.textContent.match(/\d+\s+(?:minute|second)/gi)) && !/duplicate|hour/i.test(err.textContent)) {
          QR.cooldown.auto = !/have\s+been\s+muted/i.test(err.textContent);
          let seconds = 0;
          for (var mi of m) {
            seconds += (/minute/i.test(mi) ? 60 : 1) * (+mi.match(/\d+/)[0]);
          }
          if (/muted/i.test(err.textContent)) {
            QR.cooldown.addMute(seconds);
          } else {
            QR.cooldown.addDelay(post, seconds);
          }
        } else { // stop auto-posting
          QR.cooldown.auto = false;
        }
        QR.captcha.setup(QR.cooldown.auto && [QR.nodes.status, d.body].includes(d.activeElement));
        QR.status();
        QR.error(err);
        return;
      }
      delete QR.errorCount;
      const h1 = $('h1', this.response);
      let [_, threadID, postID] = h1.nextSibling.textContent.match(/thread:(\d+),no:(\d+)/);
      postID = +postID;
      threadID = +threadID || postID;
      const isReply = threadID !== postID;
      // Post/upload confirmed as successful.
      $.event('QRPostSuccessful', {
        boardID: g.BOARD.ID,
        threadID,
        postID
      });
      // XXX deprecated
      $.event('QRPostSuccessful_', { boardID: g.BOARD.ID, threadID, postID });
      // Enable auto-posting if we have stuff left to post, disable it otherwise.
      const postsCount = QR.posts.length - 1;
      QR.cooldown.auto = postsCount && isReply;
      const lastPostToThread = !((function () { for (var p of QR.posts.slice(1)) {
        if (p.thread === post.thread) {
          return true;
        }
      } })());
      if (postsCount) {
        post.rm();
        QR.captcha.setup(d.activeElement === QR.nodes.status);
      } else if (Conf['Persistent QR']) {
        post.rm();
        if (Conf['Auto Hide QR']) {
          QR.hide();
        } else {
          QR.blur();
        }
      } else {
        QR.close();
      }
      QR.cleanNotifications();
      if (Conf['Posting Success Notifications']) {
        QR.notifications.push(new Notice('success', h1.textContent, 5));
      }
      QR.cooldown.add(threadID, postID);
      const URL = threadID === postID ? ( // new thread
      `${window.location.origin}/${g.BOARD}/thread/${threadID}`) : (threadID !== g.THREADID) && lastPostToThread && Conf['Open Post in New Tab'] ? ( // replying from the index or a different thread
      `${window.location.origin}/${g.BOARD}/thread/${threadID}#p${postID}`) : undefined;
      if (URL) {
        const open = Conf['Open Post in New Tab'] || postsCount ?
          () => $.open(URL)
          :
            () => location.href = URL;
        if (threadID === postID) {
          // XXX 4chan sometimes responds before the thread exists.
          QR.waitForThread(URL, open);
        } else {
          open();
        }
      }
      QR.status();
    },
    waitForThread(url, cb) {
      let attempts = 0;
      var check = function () {
        $.ajax(url, {
          onloadend() {
            attempts++;
            if ((attempts >= 6) || (this.status === 200)) {
              return cb();
            } else {
              return setTimeout(check, attempts * SECOND);
            }
          },
          responseType: 'text',
          type: 'HEAD'
        });
      };
      check();
    },
    abort() {
      let oldReq;
      if ((oldReq = QR.req) && !QR.req.isUploadFinished) {
        delete QR.req;
        oldReq.abort();
        // if ((QR.captcha === Captcha.v2) && QR.currentCaptcha) { Captcha.cache.save(QR.currentCaptcha); }
        delete QR.currentCaptcha;
        QR.posts[0].unlock();
        QR.cooldown.auto = false;
        QR.notifications.push(new Notice('info', 'QR upload aborted.', 5));
      }
      QR.status();
    },
    getMaxSize(file) {
      let max = QR.max_size;
      if (file.type.startsWith('video/'))
        max = Math.min(max, QR.max_size_video);
      return max;
    },
    async convert(file, type = 'jpeg', options) {
      const maxSize = options?.maxSize || this.getMaxSize(file);
      const img = options?.img || await createImageBitmap(file);
      const width = options?.width || img.width;
      const height = options?.height || img.height;
      const newName = file.name.replace(/\.[a-z]+$/i, '.' + type);
      const mime = 'image/' + type;
      const canvas = new OffscreenCanvas(width, height);
      const toBlob = (mime, quality) => canvas.convertToBlob({ type: mime, quality });
      let newFile;
      let quality = .9;
      canvas.getContext("2d").drawImage(img, 0, 0, width, height);
      do {
        newFile = new File([await toBlob(mime, quality)], newName, { type: mime });
        quality -= .1;
      } while (type === 'jpeg' && newFile.size > maxSize && quality >= .1);
      if (newFile.size >= file.size && newFile.type === file.type) {
        new Notice('warning', "New jpeg file isn't smaller than the old one, so it won't be used.", 3);
        return file;
      }
      return newFile;
    },
    previewUrl: undefined,
    preview() {
      if (!QR.selected.file)
        return;
      QR.nodes.preview = $.el('div', { id: 'overlay', className: 'media-preview' });
      $.add(d.body, QR.nodes.preview);
      QR.previewUrl = URL.createObjectURL(QR.selected.file);
      if (QR.selected.file.type.startsWith('video/')) {
        const video = $.el('video', { controls: true, src: QR.previewUrl, autoplay: true });
        $.add(QR.nodes.preview, video);
        video.focus();
      } else {
        $.add(QR.nodes.preview, $.el('img', { src: QR.previewUrl }));
      }
      QR.nodes.preview.addEventListener('click', (e) => {
        if (e.target.tagName !== 'VIDEO')
          QR.closePreview();
      });
    },
    closePreview() {
      QR.nodes.preview.remove();
      URL.revokeObjectURL(QR.previewUrl);
    },
    cooldown: {
      seconds: 0,
      delays: {
        deletion: 60
      }, // cooldown for deleting posts/files
      // set in setup
      maxDelay: 0,
      isSetup: false,
      auto: false,
      data: {},
      // Called from Main
      init() {
        if (!Conf['Quick Reply']) {
          return;
        }
        this.data = Conf.cooldowns;
        this.changes = dict();
        $.sync('cooldowns', this.sync);
      },
      // Called from QR
      setup() {
        // Read cooldown times
        $.extend(QR.cooldown.delays, g.BOARD.cooldowns());
        // The longest reply cooldown, for use in pruning old reply data
        QR.cooldown.maxDelay = 0;
        for (var type in QR.cooldown.delays) {
          var delay = QR.cooldown.delays[type];
          if (!['thread', 'thread_global'].includes(type)) {
            QR.cooldown.maxDelay = Math.max(QR.cooldown.maxDelay, delay);
          }
        }
        QR.cooldown.isSetup = true;
        QR.cooldown.start();
      },
      start() {
        const { data } = QR.cooldown;
        if (!Conf.Cooldown ||
          !QR.cooldown.isSetup ||
          !!QR.cooldown.isCounting ||
          ((Object.keys(data[g.BOARD.ID] || {}).length + Object.keys(data.global || {}).length) <= 0)) {
          return;
        }
        QR.cooldown.isCounting = true;
        QR.cooldown.count();
      },
      sync(data) {
        QR.cooldown.data = data || dict();
        QR.cooldown.start();
      },
      add(threadID, postID) {
        if (!Conf.Cooldown) {
          return;
        }
        const start = Date.now();
        const boardID = g.BOARD.ID;
        QR.cooldown.set(boardID, start, { threadID, postID });
        if (threadID === postID) {
          QR.cooldown.set('global', start, { boardID, threadID, postID });
        }
        QR.cooldown.save();
        QR.cooldown.start();
      },
      addDelay(post, delay) {
        if (!Conf.Cooldown) {
          return;
        }
        const cooldown = QR.cooldown.categorize(post);
        cooldown.delay = delay;
        QR.cooldown.set(g.BOARD.ID, Date.now(), cooldown);
        QR.cooldown.save();
        QR.cooldown.start();
      },
      addMute(delay) {
        if (!Conf.Cooldown) {
          return;
        }
        QR.cooldown.set(g.BOARD.ID, Date.now(), { type: 'mute', delay });
        QR.cooldown.save();
        QR.cooldown.start();
      },
      delete(post) {
        let cooldown;
        if (!QR.cooldown.data) {
          return;
        }
        const cooldowns = (QR.cooldown.data[post.board.ID] || (QR.cooldown.data[post.board.ID] = dict()));
        for (var id in cooldowns) {
          cooldown = cooldowns[id];
          if ((cooldown.delay == null) && (cooldown.threadID === post.thread.ID) && (cooldown.postID === post.ID)) {
            QR.cooldown.set(post.board.ID, id, null);
          }
        }
        QR.cooldown.save();
      },
      secondsDeletion(post) {
        if (!QR.cooldown.data || !Conf.Cooldown) {
          return 0;
        }
        const cooldowns = QR.cooldown.data[post.board.ID] || dict();
        for (var start in cooldowns) {
          var cooldown = cooldowns[start];
          if ((cooldown.delay == null) && (cooldown.threadID === post.thread.ID) && (cooldown.postID === post.ID)) {
            var seconds = QR.cooldown.delays.deletion - Math.floor((Date.now() - start) / SECOND);
            return Math.max(seconds, 0);
          }
        }
        return 0;
      },
      categorize(post) {
        if (post.thread === 'new') {
          return { type: 'thread' };
        } else {
          return {
            type: !!post.file ? 'image' : 'reply',
            threadID: +post.thread
          };
        }
      },
      mergeChange(data, scope, id, value) {
        if (value) {
          (data[scope] || (data[scope] = dict()))[id] = value;
        } else if (scope in data) {
          delete data[scope][id];
          if (Object.keys(data[scope]).length === 0)
            delete data[scope];
        }
      },
      set(scope, id, value) {
        QR.cooldown.mergeChange(QR.cooldown.data, scope, id, value);
        (QR.cooldown.changes[scope] || (QR.cooldown.changes[scope] = dict()))[id] = value;
      },
      save() {
        const { changes } = QR.cooldown;
        if (!Object.keys(changes).length) {
          return;
        }
        $.get('cooldowns', dict(), function ({ cooldowns }) {
          for (var scope in QR.cooldown.changes) {
            for (var id in QR.cooldown.changes[scope]) {
              var value = QR.cooldown.changes[scope][id];
              QR.cooldown.mergeChange(cooldowns, scope, id, value);
            }
            QR.cooldown.data = cooldowns;
          }
          $.set('cooldowns', cooldowns, () => QR.cooldown.changes = dict());
        });
      },
      clear() {
        QR.cooldown.data = dict();
        QR.cooldown.changes = dict();
        QR.cooldown.auto = false;
        QR.cooldown.update();
        $.queueTask($.delete, 'cooldowns');
      },
      update() {
        let cooldown;
        if (!QR.cooldown.isCounting) {
          return;
        }
        let save = false;
        let nCooldowns = 0;
        const now = Date.now();
        const { type, threadID } = QR.cooldown.categorize(QR.posts[0]);
        let seconds = 0;
        if (Conf.Cooldown) {
          for (var scope of [g.BOARD.ID, 'global']) {
            var cooldowns = (QR.cooldown.data[scope] || (QR.cooldown.data[scope] = dict()));
            for (var start in cooldowns) {
              cooldown = cooldowns[start];
              start = +start;
              var elapsed = Math.floor((now - start) / SECOND);
              if (elapsed < 0) { // clock changed since then?
                QR.cooldown.set(scope, start, null);
                save = true;
                continue;
              }
              // Explicit delays from error messages
              if (cooldown.delay != null) {
                if (cooldown.delay <= elapsed) {
                  QR.cooldown.set(scope, start, null);
                  save = true;
                } else if (((cooldown.type === type) && (cooldown.threadID === threadID)) || (cooldown.type === 'mute')) {
                  // Delays only apply to the given post type and thread.
                  seconds = Math.max(seconds, cooldown.delay - elapsed);
                }
                continue;
              }
              // Clean up expired cooldowns
              var maxDelay = cooldown.threadID !== cooldown.postID ?
                QR.cooldown.maxDelay
                :
                  QR.cooldown.delays[scope === 'global' ? 'thread_global' : 'thread'];
              if (QR.cooldown.customCooldown) {
                maxDelay = Math.max(maxDelay, parseInt(Conf.customCooldown, 10));
              }
              if (maxDelay <= elapsed) {
                QR.cooldown.set(scope, start, null);
                save = true;
                continue;
              }
              if (((type === 'thread') === (cooldown.threadID === cooldown.postID)) && (cooldown.boardID !== g.BOARD.ID)) {
                // Only cooldowns relevant to this post can set the seconds variable:
                //   reply cooldown with a reply, thread cooldown with a thread.
                // Inter-board thread cooldowns only apply on boards other than the one they were posted on.
                var suffix = scope === 'global' ?
                  '_global'
                  :
                    '';
                seconds = Math.max(seconds, QR.cooldown.delays[type + suffix] - elapsed);
                // If additional cooldown is enabled, add the configured seconds to the count.
                if (QR.cooldown.customCooldown) {
                  seconds = Math.max(seconds, parseInt(Conf.customCooldown, 10) - elapsed);
                }
              }
            }
            nCooldowns += Object.keys(cooldowns).length;
          }
        }
        if (save) {
          QR.cooldown.save;
        }
        if (nCooldowns) {
          clearTimeout(QR.cooldown.timeout);
          QR.cooldown.timeout = setTimeout(QR.cooldown.count, SECOND);
        } else {
          delete QR.cooldown.isCounting;
        }
        // Update the status when we change posting type.
        // Don't get stuck at some random number.
        // Don't interfere with progress status updates.
        const update = seconds !== QR.cooldown.seconds;
        QR.cooldown.seconds = seconds;
        if (update)
          QR.status();
      },
      count() {
        QR.cooldown.update();
        if ((QR.cooldown.seconds === 0) && QR.cooldown.auto && !QR.req)
          QR.submit();
      }
    },
    oekaki: {
      menu: {
        init() {
          if (!['index', 'thread'].includes(g.VIEW) || !Conf.Menu || !Conf['Edit Link'] || !Conf['Quick Reply']) {
            return;
          }
          const a = $.el('a', {
            className: 'edit-link',
            href: 'javascript:;',
            textContent: 'Edit image'
          });
          $.on(a, 'click', this.editFile);
          Menu.menu.addEntry({
            el: a,
            order: 90,
            open(post) {
              QR.oekaki.menu.post = post;
              const { file } = post;
              return QR.postingIsEnabled && !!file && (file.isImage || file.isVideo);
            }
          });
        },
        editFile() {
          const { post } = QR.oekaki.menu;
          QR.quote.call(post.nodes.post);
          const { isVideo } = post.file;
          const currentTime = post.file.fullImage?.currentTime || 0;
          return CrossOrigin.file(post.file.url, function (blob) {
            if (!blob) {
              QR.error("Can't load file.");
            } else if (isVideo) {
              const video = $.el('video');
              $.on(video, 'loadedmetadata', function () {
                $.on(video, 'seeked', function () {
                  const canvas = $.el('canvas', {
                    width: video.videoWidth,
                    height: video.videoHeight
                  });
                  canvas.getContext('2d').drawImage(video, 0, 0);
                  canvas.toBlob(function (snapshot) {
                    snapshot.name = post.file.name.replace(/\.\w+$/, '') + '.png';
                    QR.handleFiles([snapshot]);
                    QR.oekaki.edit();
                  });
                });
                video.currentTime = currentTime;
              });
              $.on(video, 'error', () => QR.openError());
              video.src = URL.createObjectURL(blob);
            } else {
              blob.name = post.file.name;
              QR.handleFiles([blob]);
              QR.oekaki.edit();
            }
          });
        }
      },
      setup() {
        $.global('setupQR');
      },
      load(cb) {
        if ($('script[src^="//s.4cdn.org/js/tegaki"]', d.head)) {
          cb();
        } else {
          const style = $.el('link', {
            rel: 'stylesheet',
            href: `//s.4cdn.org/css/tegaki.${Date.now()}.css`
          });
          const script = $.el('script', { src: `//s.4cdn.org/js/tegaki.min.${Date.now()}.js` });
          let n = 0;
          const onload = function () {
            if (++n === 2)
              cb();
          };
          $.on(style, 'load', onload);
          $.on(script, 'load', onload);
          $.add(d.head, [style, script]);
        }
      },
      draw() {
        return $.global('qrTegakiDraw');
      },
      button() {
        if (QR.selected.file) {
          QR.oekaki.edit();
        } else {
          QR.oekaki.toggle();
        }
      },
      edit() {
        QR.oekaki.load(() => $.global('qrTegakiLoad'));
      },
      toggle() {
        QR.oekaki.load(() => QR.nodes.oekaki.hidden = !QR.nodes.oekaki.hidden);
      }
    },
    persona: {
      always: {},
      types: {
        name: [],
        email: [],
        sub: []
      },
      init() {
        if (!Conf['Quick Reply'] && (!Conf.Menu || !Conf['Delete Link'])) {
          return;
        }
        for (var item of Conf['QR.personas'].split('\n')) {
          QR.persona.parseItem(item.trim());
        }
      },
      parseItem(item) {
        if (item[0] === '#')
          return;
        const regexMatch = item.match(/(name|options|email|subject|password):"(.*)"/i);
        if (!regexMatch)
          return;
        let needle;
        let [match, type, val] = regexMatch;
        // Don't mix up item settings with val.
        item = item.replace(match, '');
        const boards = item.match(/boards:([^;]+)/i)?.[1].toLowerCase() || 'global';
        if ((boards !== 'global') && (needle = g.BOARD.ID, !boards.split(',').includes(needle))) {
          return;
        }
        if (type === 'password') {
          QR.persona.pwd = val;
          return;
        }
        if (type === 'options') {
          type = 'email';
        }
        if (type === 'subject') {
          type = 'sub';
        }
        if (/always/i.test(item)) {
          QR.persona.always[type] = val;
        }
        if (!QR.persona.types[type].includes(val)) {
          QR.persona.types[type].push(val);
        }
      },
      load() {
        for (var type in QR.persona.types) {
          var arr = QR.persona.types[type];
          var list = $(`#list-${type}`, QR.nodes.el);
          for (var val of arr) {
            if (val) {
              $.add(list, $.el('option', { textContent: val }));
            }
          }
        }
      },
      getPassword() {
        let m;
        if (QR.persona.pwd != null) {
          return QR.persona.pwd;
        } else if (m = d.cookie.match(/4chan_pass=([^;]+)/)) {
          return decodeURIComponent(m[1]);
        } else {
          return '';
        }
      },
      get(cb) {
        $.get('QR.persona', {}, ({ 'QR.persona': persona }) => cb(persona));
      },
      set(post) {
        $.get('QR.persona', {}, function ({ 'QR.persona': persona }) {
          persona = {
            name: post.name,
            flag: post.flag
          };
          $.set('QR.persona', persona);
        });
      }
    },
  };
  // moved outside QR for type inference
  class post {
    constructor(select) {
      this.select = this.select.bind(this);
      const el = $.el('a', {
        className: 'qr-preview',
        draggable: true,
        href: 'javascript:;'
      });
      $.extend(el, {
        innerHTML: `<a href="javascript:;" class="remove" title="Remove">${Icon.get('xmark')}</a>` +
          '<label class="qr-preview-spoiler"><input type="checkbox"> Spoiler</label>' +
          '<span id="qr-preview-comment"></span><br /><span id="qr-preview-name"></span>'
      });
      const [rm, spoiler, span, /*br*/ , spanFileName] = el.childNodes;
      this.nodes = {
        el,
        rm,
        spoiler: spoiler.firstChild,
        span,
        spanFileName,
      };
      $.on(el, 'click', this.select);
      $.on(this.nodes.rm, 'click', e => { e.stopPropagation(); this.rm(); });
      $.on(this.nodes.spoiler, 'change', e => {
        this.spoiler = e.target.checked;
        if (this === QR.selected) {
          QR.nodes.spoiler.checked = this.spoiler;
        }
        return this.preventAutoPost();
      });
      for (var label of $$('label', el)) {
        $.on(label, 'click', e => e.stopPropagation());
      }
      $.add(QR.nodes.dumpList, el);
      for (var event of ['dragStart', 'dragEnter', 'dragLeave', 'dragOver', 'dragEnd', 'drop']) {
        $.on(el, event.toLowerCase(), this[event]);
      }
      this.thread = g.VIEW === 'thread' ?
        g.THREADID
        :
          'new';
      const prev = QR.posts[QR.posts.length - 1];
      QR.posts.push(this);
      this.nodes.spoiler.checked = (this.spoiler = prev && Conf['Remember Spoiler'] ?
        prev.spoiler
        :
          false);
      QR.persona.get(persona => {
        this.name = 'name' in QR.persona.always ?
          QR.persona.always.name
          : prev ?
            prev.name
            :
              persona.name;
        this.email = 'email' in QR.persona.always ?
          QR.persona.always.email
          :
            '';
        this.sub = 'sub' in QR.persona.always ?
          QR.persona.always.sub
          :
            '';
        if (QR.nodes.flag) {
          this.flag = (() => {
            if (prev) {
              return prev.flag;
            } else if (persona.flag && persona.flag in g.BOARD.config.board_flags) {
              return persona.flag;
            }
          })();
        }
        if (QR.selected === this)
          this.load();
      }); // load persona
      if (select) {
        this.select();
      }
      this.unlock();
      QR.captcha.moreNeeded();
    }
    rm() {
      this.delete();
      const index = QR.posts.indexOf(this);
      if (QR.posts.length === 1) {
        new QR.post(true);
        $.rmClass(QR.nodes.el, 'dump');
      } else if (this === QR.selected) {
        (QR.posts[index - 1] || QR.posts[index + 1]).select();
      }
      QR.posts.splice(index, 1);
      QR.status();
      QR.captcha.updateThread?.();
    }
    delete() {
      $.rm(this.nodes.el);
      URL.revokeObjectURL(this.URL);
      this.dismissErrors();
    }
    lock(lock = true) {
      this.isLocked = lock;
      if (this !== QR.selected) {
        return;
      }
      for (var name of ['thread', 'name', 'email', 'sub', 'com', 'fileButton', 'filename', 'spoiler', 'flag']) {
        var node;
        if ((node = QR.nodes[name])) {
          node.disabled = lock;
        }
      }
      this.nodes.rm.style.visibility = lock ? 'hidden' : '';
      this.nodes.spoiler.disabled = lock;
      this.nodes.el.draggable = !lock;
    }
    unlock() {
      this.lock(false);
    }
    select() {
      if (QR.selected) {
        QR.selected.nodes.el.removeAttribute('id');
        QR.selected.forceSave();
      }
      QR.selected = this;
      this.lock(this.isLocked);
      this.nodes.el.id = 'selected';
      // Scroll the list to center the focused post.
      const rectEl = this.nodes.el.getBoundingClientRect();
      const rectList = this.nodes.el.parentNode.getBoundingClientRect();
      this.nodes.el.parentNode.scrollLeft += (rectEl.left + (rectEl.width / 2)) - rectList.left - (rectList.width / 2);
      this.load();
    }
    load() {
      // Load this post's values.
      for (var name of ['thread', 'name', 'email', 'sub', 'com', 'filename', 'flag']) {
        var node;
        if (!(node = QR.nodes[name])) {
          continue;
        }
        node.value = this[name] || node.dataset.default || '';
      }
      (this.thread !== 'new' ? $.addClass : $.rmClass)(QR.nodes.el, 'reply-to-thread');
      this.showFileData();
      QR.characterCount();
    }
    save(input, forced) {
      if (input.type === 'checkbox') {
        this.spoiler = input.checked;
        return;
      }
      const { name } = input.dataset;
      if (!['thread', 'name', 'email', 'sub', 'com', 'filename', 'flag'].includes(name)) {
        return;
      }
      const prev = this[name] || input.dataset.default || null;
      this[name] = input.value || input.dataset.default || null;
      switch (name) {
        case 'thread':
          (this.thread !== 'new' ? $.addClass : $.rmClass)(QR.nodes.el, 'reply-to-thread');
          QR.status();
          QR.captcha.updateThread?.();
          break;
        case 'com':
          this.updateComment();
          break;
        case 'filename':
          if (!this.file) {
            return;
          }
          this.saveFilename();
          this.updateFilename();
          break;
        case 'name':
        case 'flag':
          if (this[name] !== prev) { // only save manual changes, not values filled in by persona settings
            QR.persona.set(this);
          }
          break;
      }
      if (!forced)
        this.preventAutoPost();
    }
    forceSave() {
      if (this !== QR.selected) {
        return;
      }
      // Do this in case people use extensions
      // that do not trigger the `input` event.
      for (var name of ['thread', 'name', 'email', 'sub', 'com', 'filename', 'spoiler', 'flag']) {
        var node;
        if (!(node = QR.nodes[name])) {
          continue;
        }
        this.save(node, true);
      }
    }
    preventAutoPost() {
      // Disable auto-posting if you're editing the first post
      // during the last 5 seconds of the cooldown.
      if (QR.cooldown.auto && (this === QR.posts[0])) {
        QR.cooldown.update(); // adding/removing file can change cooldown
        if (QR.cooldown.seconds <= 5)
          QR.cooldown.auto = false;
      }
    }
    setComment(com) {
      this.com = com || null;
      if (this === QR.selected) {
        QR.nodes.com.value = this.com;
      }
      return this.updateComment();
    }
    updateComment() {
      if (this === QR.selected) {
        QR.characterCount();
      }
      this.nodes.span.textContent = this.com;
      QR.captcha.moreNeeded();
    }
    isOnlyQuotes() {
      return (this.com || '').trim() === (this.quotedText || '').trim();
    }
    static rmErrored(e) {
      e.stopPropagation();
      for (let i = QR.posts.length - 1; i >= 0; i--) {
        var errors;
        var post = QR.posts[i];
        if ((errors = post.errors)) {
          for (var error of errors) {
            if (doc.contains(error)) {
              post.rm();
              break;
            }
          }
        }
      }
    }
    error(className, message, link) {
      const div = $.el('div', { className });
      $.extend(div, {
        innerHTML: message + (link ? ` [<a href="${E(link)}" target="_blank">More info</a>]` : '') +
          `<br>[<a href="javascript:;">delete post</a>] [<a href="javascript:;">delete all</a>]`
      });
      (this.errors || (this.errors = [])).push(div);
      const [rm, rmAll] = $$('a', div);
      $.on(div, 'click', () => {
        if (QR.posts.includes(this))
          this.select();
      });
      $.on(rm, 'click', e => {
        e.stopPropagation();
        if (QR.posts.includes(this))
          this.rm();
      });
      $.on(rmAll, 'click', QR.post.rmErrored);
      QR.error(div, true);
    }
    fileError(message, link) {
      this.error('file-error', `${this.filename}: ${message}`, link);
    }
    dismissErrors(test = () => true) {
      if (this.errors) {
        for (var error of this.errors) {
          if (doc.contains(error) && test(error)) {
            error.parentNode.previousElementSibling.click();
          }
        }
      }
    }
    /**
    * Checks if the mime type and file size are valid. For images, it will convert unsupported files to png, shrinks
    * files with a resolution that is too big, and converts to jpeg if the file size is too big.
    * It will not attempt to convert files that aren't images.
    * @param file The old file.
    * @returns A promise with the old file if it was valid, or a new file if it wasn't.
    */
    async validateFile(file) {
      // Do not check on altchans, those might support types 4chan doesn't
      if (location.hostname.endsWith('4chan.org') && !QR.mimeTypes.includes(file.type)) {
        if (file.type.startsWith('image/')) {
          const msg = `The ${file.type.slice(6)} image was converted to png.`;
          file = await QR.convert(file, 'png');
          new Notice('info', msg, 3);
        } else {
          throw new Error('Unsupported file type.');
        }
      }
      const maxSize = QR.getMaxSize(file);
      if (file.type.startsWith('image/')) {
        let img = await createImageBitmap(file);
        const { width: originalW, height: originalH } = img;
        let width = originalW, height = originalH;
        if (width > QR.max_width) {
          height = Math.round(height * (QR.max_width / width));
          width = QR.max_width;
        }
        if (height > QR.max_height) {
          width = Math.round(width * (QR.max_height / height));
          height = QR.max_height;
        }
        if (width !== originalW || height !== originalH) {
          file = await QR.convert(file, file.type === 'image/jpeg' ? 'jpeg' : 'png', { width, height, img });
          img = undefined; // just in case the file size shrinkage also needs to run using the new file
          new Notice('warning', `Image was too large got shrunk from ${originalW} * ${originalH} to ${width} * ${height}.` +
            'It might have lost animation.');
        }
        if (file.size > maxSize) {
          const originalSize = file.size;
          file = await QR.convert(file, 'jpeg', { maxSize, img });
          new Notice('warning', `Image was too large (${$.bytesToString(originalSize)}) and got converted to jpg (` +
            `${$.bytesToString(file.size)}). It might have lost transparency or animation.`);
        }
      } else if (file.size > maxSize) {
        throw new Error(`File too large (file: ${$.bytesToString(file.size)}, max: ${$.bytesToString(maxSize)}).`);
      }
      return file;
    }
    async setFile(file) {
      try {
        // Needs to be set before the validation for some error messages.
        this.file = file;
        this.filename = file.name;
        this.originalName = file.name;
        this.file = await this.validateFile(file);
        this.originalName = file.name;
        if (Conf['Randomize Filename'] && (g.BOARD.ID !== 'f') && (!this.file.name.toLowerCase().includes('[sound='))) {
          this.randomizeName(false);
        } else {
          this.filename = this.file.name;
        }
        this.filesize = $.bytesToString(this.file.size);
        $.addClass(this.nodes.el, 'has-file', 'has-' + this.file.type.split('/')[0]);
        QR.captcha.moreNeeded();
        URL.revokeObjectURL(this.URL);
        this.saveFilename();
        if (this === QR.selected) {
          this.showFileData();
        } else {
          this.updateFilename();
        }
        this.rmMetadata();
        this.nodes.el.dataset.type = this.file.type;
        this.nodes.el.style.backgroundImage = '';
        if (/^(image|video)\//.test(this.file.type)) {
          this.nodes.spanFileName.textContent = '';
          this.readFile();
        } else {
          this.nodes.spanFileName.textContent = this.file.name.match(/\.([^\.]+)$/)[1];
        }
      } catch (error) {
        console.error(error);
        this.fileError(error?.message || error || 'unknown error when setting a file');
      }
      this.preventAutoPost();
    }
    randomizeName(set = true) {
      this.filename = `${Date.now() * 1000 - Math.floor(Math.random() * 365 * DAY * 1000)}`;
      const ext = this.file.name.match(QR.validExtension);
      if (ext)
        this.filename += ext[0];
      if (set)
        QR.nodes.filename.value = this.filename;
    }
    restoreName() {
      QR.nodes.filename.value = this.filename = this.originalName;
    }
    readFile() {
      const isVideo = /^video\//.test(this.file.type);
      const el = $.el(isVideo ? 'video' : 'img');
      if (isVideo && !el.canPlayType(this.file.type)) {
        return;
      }
      const event = isVideo ? 'loadeddata' : 'load';
      var onload = () => {
        $.off(el, event, onload);
        $.off(el, 'error', onerror);
        this.checkDimensions(el);
        this.setThumbnail(el);
        $.event('QRMetadata', null, this.nodes.el);
      };
      var onerror = () => {
        $.off(el, event, onload);
        $.off(el, 'error', onerror);
        this.fileError(`Corrupt ${isVideo ? 'video' : 'image'} or error reading metadata.`, meta.upstreamFaq + '#error-reading-metadata');
        URL.revokeObjectURL(el.src);
        // XXX https://bugzilla.mozilla.org/show_bug.cgi?id=1021289
        this.nodes.el.removeAttribute('data-height');
        $.event('QRMetadata', null, this.nodes.el);
      };
      this.nodes.el.dataset.height = 'loading';
      $.on(el, event, onload);
      $.on(el, 'error', onerror);
      el.src = URL.createObjectURL(this.file);
    }
    checkDimensions(el) {
      let height, width;
      if (el.tagName === 'IMG') {
        ({ height, width } = el);
        this.nodes.el.dataset.height = height;
        this.nodes.el.dataset.width = width;
        if ((height > QR.max_height) || (width > QR.max_width)) {
          this.fileError(`Image too large (image: ${height}x${width}px, max: ${QR.max_height}x${QR.max_width}px)`);
        }
        if ((height < QR.min_height) || (width < QR.min_width)) {
          this.fileError(`Image too small (image: ${height}x${width}px, min: ${QR.min_height}x${QR.min_width}px)`);
        }
      } else {
        const { videoHeight, videoWidth, duration } = el;
        this.nodes.el.dataset.height = videoHeight;
        this.nodes.el.dataset.width = videoWidth;
        this.nodes.el.dataset.duration = duration;
        const max_height = Math.min(QR.max_height, QR.max_height_video);
        const max_width = Math.min(QR.max_width, QR.max_width_video);
        if ((videoHeight > max_height) || (videoWidth > max_width)) {
          this.fileError(`Video too large (video: ${videoHeight}x${videoWidth}px, max: ${max_height}x${max_width}px)`);
        }
        if ((videoHeight < QR.min_height) || (videoWidth < QR.min_width)) {
          this.fileError(`Video too small (video: ${videoHeight}x${videoWidth}px, min: ${QR.min_height}x${QR.min_width}px)`);
        }
        if (!isFinite(duration)) {
          this.fileError('Video lacks duration metadata (try remuxing)');
        } else if (duration > QR.max_duration_video) {
          this.fileError(`Video too long (video: ${duration}s, max: ${QR.max_duration_video}s)`);
        }
        if (BoardConfig.noAudio(g.BOARD.ID) && $.hasAudio(el)) {
          this.fileError('Audio not allowed');
        }
      }
    }
    setThumbnail(el) {
      // Create a redimensioned thumbnail.
      let height, width;
      const isVideo = el.tagName === 'VIDEO';
      // Generate thumbnails only if they're really big.
      // Resized pictures through canvases look like ass,
      // so we generate thumbnails `s` times bigger then expected
      // to avoid crappy resized quality.
      let s = 90 * 2 * window.devicePixelRatio;
      if (this.file.type === 'image/gif') {
        s *= 3;
      } // let them animate
      if (isVideo) {
        height = el.videoHeight;
        width = el.videoWidth;
      } else {
        ({ height, width } = el);
        if ((height < s) || (width < s)) {
          this.URL = el.src;
          this.nodes.el.style.backgroundImage = `url(${this.URL})`;
          return;
        }
      }
      if (height <= width) {
        width = (s / height) * width;
        height = s;
      } else {
        height = (s / width) * height;
        width = s;
      }
      const cv = $.el('canvas');
      cv.height = height;
      cv.width = width;
      const drawThumbNail = () => {
        cv.getContext('2d').drawImage(el, 0, 0, width, height);
        URL.revokeObjectURL(el.src);
        cv.toBlob(blob => {
          this.URL = URL.createObjectURL(blob);
          this.nodes.el.style.backgroundImage = `url(${this.URL})`;
        });
      };
      if (isVideo) {
        el.currentTime = 0;
        el.addEventListener("seeked", drawThumbNail);
      } else {
        drawThumbNail();
      }
    }
    rmFile() {
      if (this.isLocked) {
        return;
      }
      delete this.file;
      delete this.filename;
      delete this.filesize;
      this.nodes.el.removeAttribute('title');
      QR.nodes.filename.removeAttribute('title');
      this.rmMetadata();
      this.nodes.el.style.backgroundImage = '';
      $.rmClass(this.nodes.el, 'has-file', 'has-image', 'has-video');
      this.showFileData();
      URL.revokeObjectURL(this.URL);
      this.dismissErrors(error => $.hasClass(error, 'file-error'));
      this.preventAutoPost();
    }
    rmMetadata() {
      for (var attr of ['type', 'height', 'width', 'duration']) {
        // XXX https://bugzilla.mozilla.org/show_bug.cgi?id=1021289
        this.nodes.el.removeAttribute(`data-${attr}`);
      }
    }
    saveFilename() {
      this.file.newName = (this.filename || '').replace(/[/\\]/g, '-');
      if (!QR.validExtension.test(this.filename)) {
        // 4chan will truncate the filename if it has no extension.
        this.file.newName += `.${$.getOwn(QR.extensionFromType, this.file.type) || 'jpg'}`;
      }
    }
    updateFilename() {
      const long = `${this.filename} (${this.filesize})`;
      this.nodes.el.title = long;
      if (this !== QR.selected) {
        return;
      }
      QR.nodes.filename.title = long;
    }
    showFileData() {
      if (this.file) {
        this.updateFilename();
        QR.nodes.filename.value = this.filename;
        $.addClass(QR.nodes.oekaki, 'has-file');
        $.addClass(QR.nodes.fileSubmit, 'has-file', 'has-' + this.file.type.split('/')[0]);
      } else {
        $.rmClass(QR.nodes.oekaki, 'has-file');
        $.rmClass(QR.nodes.fileSubmit, 'has-file', 'has-image', 'has-video');
      }
      if (this.file?.source != null) {
        QR.nodes.fileSubmit.dataset.source = this.file.source;
      } else {
        QR.nodes.fileSubmit.removeAttribute('data-source');
      }
      QR.nodes.spoiler.checked = this.spoiler;
    }
    pasteText(file) {
      this.pasting = true;
      this.preventAutoPost();
      const reader = new FileReader();
      reader.onload = e => {
        const { result } = e.target;
        this.setComment((this.com ? `${this.com}\n${result}` : result));
        delete this.pasting;
      };
      reader.readAsText(file);
    }
    dragStart(e) {
      const { left, top } = this.getBoundingClientRect();
      e.dataTransfer.setDragImage(this, e.clientX - left, e.clientY - top);
      $.addClass(this, 'drag');
    }
    dragEnd() { $.rmClass(this, 'drag'); }
    dragEnter() { $.addClass(this, 'over'); }
    dragLeave() { $.rmClass(this, 'over'); }
    dragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    }
    drop() {
      $.rmClass(this, 'over');
      if (!this.draggable) {
        return;
      }
      const el = $('.drag', this.parentNode);
      const index = el => {
        for (let i = 0; i < el.parentNode.children.length; i++) {
          if (el.parentNode.children[i] === el)
            return i;
        }
        return -1;
      };
      const oldIndex = index(el);
      const newIndex = index(this);
      if (QR.posts[oldIndex].isLocked || QR.posts[newIndex].isLocked) {
        return;
      }
      (oldIndex < newIndex ? $.after : $.before)(this, el);
      const post = QR.posts.splice(oldIndex, 1)[0];
      QR.posts.splice(newIndex, 0, post);
      QR.status();
      QR.captcha.updateThread?.();
    }
  }
  QR.post = post;

  const CaptchaT = {
      init() {
          if (d.cookie.indexOf('pass_enabled=1') >= 0) {
              return;
          }
          if (!(this.isEnabled = !!$('#t-root') || !$.id('postForm'))) {
              return;
          }
          const root = $.el('div', { className: 'captcha-root' });
          this.nodes = { root };
          $.addClass(QR.nodes.el, 'has-captcha', 'captcha-t');
          $.after(QR.nodes.com.parentNode, root);
      },
      moreNeeded() {
      },
      getThread() {
          return {
              boardID: g.BOARD.ID,
              threadID: QR.posts[0].thread === 'new' ? '0' : ('' + QR.posts[0].thread),
          };
      },
      setup(focus) {
          if (!this.isEnabled) {
              return;
          }
          if (!this.nodes.container) {
              this.nodes.container = $.el('div', { className: 'captcha-container' });
              $.prepend(this.nodes.root, this.nodes.container);
              CaptchaT.currentThread = CaptchaT.getThread();
              CaptchaT.currentThread.autoLoad = Conf['Auto-load captcha'] ? '1' : '0';
              $.global('setupTCaptcha', CaptchaT.currentThread);
          }
          if (focus)
              $('#t-resp').focus();
      },
      destroy() {
          if (!this.isEnabled || !this.nodes.container) {
              return;
          }
          $.global('destroyTCaptcha');
          $.rm(this.nodes.container);
          delete this.nodes.container;
      },
      updateThread() {
          if (!this.isEnabled) {
              return;
          }
          const { boardID, threadID } = (CaptchaT.currentThread || {});
          const newThread = CaptchaT.getThread();
          if ((newThread.boardID !== boardID) || (newThread.threadID !== threadID)) {
              CaptchaT.destroy();
              CaptchaT.setup();
          }
      },
      getOne() {
          let el;
          let response = {};
          if (this.nodes.container) {
              for (var key of ['t-response', 't-challenge']) {
                  response[key] = $(`[name='${key}']`, this.nodes.container).value;
              }
          }
          if (!response['t-response'] && !((el = $('#t-msg, #t-task')) && /Verification not required/i.test(el.textContent))) {
              response = null;
          }
          return response;
      },
      setUsed() {
          if (this.isEnabled && this.nodes.container) {
              $.global('TCaptchaClearChallenge');
          }
      },
      occupied() {
          return !!this.nodes.container;
      }
  };

  class CatalogThread {
      toString() { return this.ID; }
      constructor(root, thread) {
          this.thread = thread;
          this.ID = this.thread.ID;
          this.board = this.thread.board;
          const { post } = this.thread.OP.nodes;
          this.nodes = {
              root,
              thumb: $('.catalog-thumb', post),
              icons: $('.catalog-icons', post),
              postCount: $('.post-count', post),
              fileCount: $('.file-count', post),
              pageCount: $('.page-count', post),
              replies: null
          };
          this.thread.catalogView = this;
      }
  }

  var Recursive = {
    recursives: new Map(),
    init() {
      if (!['index', 'thread'].includes(g.VIEW))
        return;
      Callbacks.Post.push({
        name: 'Recursive',
        cb: this.node
      });
    },
    node() {
      if (this.isClone || this.isFetchedQuote)
        return;
      for (var quote of this.quotes) {
        const obj = Recursive.recursives.get(quote);
        if (obj) {
          for (var i = 0; i < obj.recursives.length; i++) {
            obj.recursives[i](this, ...obj.args[i]);
          }
        }
      }
    },
    add(recursive, post, ...args) {
      let obj = Recursive.recursives.get(post.fullID);
      if (!obj) {
        obj = { recursives: [], args: [] };
        Recursive.recursives.set(post.fullID, obj);
      }
      obj.recursives.push(recursive);
      obj.args.push(args);
    },
    rm(recursive, post) {
      const obj = Recursive.recursives.get(post.fullID);
      if (!obj)
        return;
      for (let i = obj.recursives.length - 1; i >= 0; --i) {
        if (obj.recursives[i] === recursive) {
          obj.recursives.splice(i, 1);
          obj.args.splice(i, 1);
        }
      }
    },
    apply(recursive, post, ...args) {
      const { fullID } = post;
      g.posts.forEach(function (post) {
        if (post.quotes.includes(fullID)) {
          recursive(post, ...args);
        }
      });
    },
    applyAndAdd(recursive, post, ...args) {
      Recursive.apply(recursive, post, ...args);
      this.add(recursive, post, ...args);
    },
  };

  var PostHiding = {
    db: undefined,
    /** poster Ids to filter */
    posterIdDb: undefined,
    init() {
      if (!['index', 'thread'].includes(g.VIEW) || (!Conf['Reply Hiding Buttons'] && !(Conf.Menu && Conf['Reply Hiding Link']))) {
        return;
      }
      if (Conf['Reply Hiding Buttons']) {
        $.addClass(doc, "reply-hide");
      }
      this.db = new DataBoard('hiddenPosts');
      this.posterIdDb = new DataBoard('hiddenPosterIds');
      Callbacks.Post.push({
        name: 'Reply Hiding',
        cb: this.node
      });
    },
    isHidden(boardID, threadID, postID) {
      return !!(PostHiding.db && PostHiding.db.get({ boardID, threadID, postID }));
    },
    node() {
      if (!this.isReply || this.isClone || this.isFetchedQuote)
        return;
      let data = PostHiding.db.get({ boardID: this.board.ID, threadID: this.thread.ID, postID: this.ID });
      if (!data && this.info.uniqueID) {
        const hiddenPosterIds = PostHiding.posterIdDb.get({ boardID: this.board.ID, threadID: this.thread.ID });
        if (hiddenPosterIds && this.info.uniqueID in hiddenPosterIds) {
          data = hiddenPosterIds[this.info.uniqueID];
          // thisPost is only on the first hidden posts, it shouldn't apply when hiding on poster ID
          data.thisPost = true;
        }
      }
      if (data) {
        if (data.thisPost) {
          PostHiding.hide(this, data.makeStub, data.hideRecursively, 'Hidden manually');
        } else {
          PostHiding.hideRecursive(this, data.makeStub);
        }
      }
      if (!Conf['Reply Hiding Buttons']) {
        return;
      }
      const button = PostHiding.makeButton(this, 'hide');
      const sa = g.SITE.selectors.sideArrows;
      if (sa) {
        const sideArrows = $(sa, this.nodes.root);
        $.replace(sideArrows.firstChild, button);
        sideArrows.className = 'replacedSideArrows';
      } else {
        $.prepend(this.nodes.info, button);
      }
    },
    menu: {
      post: undefined,
      async init() {
        if (!['index', 'thread'].includes(g.VIEW) || !Conf.Menu || !Conf['Reply Hiding Link'])
          return;
        await new Promise(res => BoardConfig.ready(res));
        // Hide
        let applyHide = $.el('a', {
          textContent: 'Apply',
          href: 'javascript:;'
        });
        $.on(applyHide, 'click', PostHiding.menu.hide);
        const hideOptions = [
          { el: applyHide },
          { el: UI.checkbox('thisPost', 'This post', true) },
          { el: UI.checkbox('replies', 'Hide replies', Conf['Recursive Hiding']) },
          { el: UI.checkbox('makeStub', 'Make stub', Conf.Stubs) },
        ];
        if (g.BOARD.config.user_ids) {
          hideOptions.push({ el: UI.checkbox('byId', 'By poster id', false) });
        }
        Menu.menu.addEntry({
          el: $.el('div', {
            className: 'hide-reply-link',
            textContent: 'Hide'
          }),
          order: 20,
          open(post) {
            if (!post.isReply || post.isClone || post.isHidden) {
              return false;
            }
            PostHiding.menu.post = post;
            return true;
          },
          subEntries: hideOptions
        });
        // Show
        const applyShow = $.el('a', {
          textContent: 'Apply',
          href: 'javascript:;'
        });
        $.on(applyShow, 'click', PostHiding.menu.show);
        const thisPost = UI.checkbox('thisPost', 'This post', false);
        const replies = UI.checkbox('replies', 'Show replies', false);
        const hideStubLink = $.el('a', {
          textContent: 'Hide stub',
          href: 'javascript:;'
        });
        $.on(hideStubLink, 'click', PostHiding.menu.hideStub);
        const showOptions = [
          { el: applyShow },
          { el: thisPost },
          { el: replies },
        ];
        let byId;
        if (g.BOARD.config.user_ids) {
          byId = UI.checkbox('byId', 'By poster id', false);
          showOptions.push({ el: byId });
        }
        Menu.menu.addEntry({
          el: $.el('div', {
            className: 'show-reply-link',
            textContent: 'Show'
          }),
          order: 20,
          open(post) {
            if (!post.isReply || post.isClone || !post.isHidden) {
              return false;
            }
            const data = PostHiding.db.get({ boardID: post.board.ID, threadID: post.thread.ID, postID: post.ID });
            if (!data)
              return false;
            PostHiding.menu.post = post;
            thisPost.firstChild.checked = post.isHidden;
            replies.firstChild.checked = data.hideRecursively ?? Conf['Recursive Hiding'];
            if (byId)
              byId.firstChild.checked = data.byId;
            return true;
          },
          subEntries: showOptions
        });
        Menu.menu.addEntry({
          el: hideStubLink,
          order: 15,
          open(post) {
            if (!post.isReply || post.isClone || !post.isHidden) {
              return false;
            }
            if (!(PostHiding.db.get({ boardID: post.board.ID, threadID: post.thread.ID, postID: post.ID }))) {
              return false;
            }
            return PostHiding.menu.post = post;
          }
        });
      },
      hide() {
        const parent = this.parentNode;
        const thisPost = $('input[name=thisPost]', parent).checked;
        const replies = $('input[name=replies]', parent).checked;
        const makeStub = $('input[name=makeStub]', parent).checked;
        const byId = $('input[name=byId]', parent)?.checked;
        const { post } = PostHiding.menu;
        if (!thisPost && !replies && !byId)
          return;
        if (thisPost) {
          PostHiding.hide(post, makeStub, replies, 'Hidden manually');
        } else if (replies) {
          PostHiding.hideRecursive(post, makeStub);
        }
        if (byId) {
          const msg = `Hidden because of poster ID ${post.info.uniqueID}`;
          g.posts.forEach((p) => {
            if (p.info.uniqueID === post.info.uniqueID && p !== post) {
              PostHiding.hide(p, makeStub, replies, msg);
              PostHiding.saveHiddenState(p, true, thisPost, makeStub, replies, byId);
            }
          });
          const data = PostHiding.posterIdDb.get({ boardID: post.boardID, threadID: post.threadID, defaultValue: dict() });
          if (!(post.info.uniqueID in data)) {
            data[post.info.uniqueID] = { makeStub, hideRecursively: replies };
            PostHiding.posterIdDb.set({ boardID: post.boardID, threadID: post.threadID, val: data });
          }
        }
        PostHiding.saveHiddenState(post, true, thisPost, makeStub, replies, byId);
        $.event('CloseMenu');
      },
      show() {
        const parent = this.parentNode;
        const thisPost = $('input[name=thisPost]', parent).checked;
        const replies = $('input[name=replies]', parent).checked;
        const byId = $('input[name=byId]', parent)?.checked;
        const { post } = PostHiding.menu;
        const { boardID, threadID, postID } = post;
        if (!thisPost && !replies && !byId)
          return;
        if (thisPost) {
          PostHiding.show(post, replies);
        } else if (replies) {
          Recursive.apply(PostHiding.show, post, true);
          Recursive.rm(PostHiding.hide, post);
        }
        if (byId) {
          g.posts.forEach((p) => {
            if (p.info.uniqueID === post.info.uniqueID && p !== post) {
              PostHiding.show(p, replies);
              const data = PostHiding.db.get({ boardID, threadID, postID });
              if (data) {
                PostHiding.saveHiddenState(post, !(thisPost && replies), !thisPost, data.makeStub, !replies, byId);
              }
            }
          });
          const byIdState = PostHiding.posterIdDb.get({ boardID, threadID });
          if (byIdState && post.info.uniqueID in byIdState) {
            delete byIdState[post.info.uniqueID];
            PostHiding.posterIdDb.set({ boardID, threadID, val: byIdState });
          }
        }
        const data = PostHiding.db.get({ boardID, threadID, postID });
        if (data) {
          PostHiding.saveHiddenState(post, !(thisPost && replies), !thisPost, data.makeStub, !replies, byId);
        }
        $.event('CloseMenu');
      },
      hideStub() {
        let data;
        const { post } = PostHiding.menu;
        if (data = PostHiding.db.get({ boardID: post.board.ID, threadID: post.thread.ID, postID: post.ID })) {
          PostHiding.show(post, data.hideRecursively);
          PostHiding.hide(post, false, data.hideRecursively);
          PostHiding.saveHiddenState(post, true, true, false, data.hideRecursively, data.byId);
        }
        $.event('CloseMenu');
      }
    },
    makeButton(post, type) {
      const span = $.el('span', {
        className: 'stub-icon',
      });
      const a = $.el('a', {
        className: `${type}-post-button ${type}-reply-button`,
        href: 'javascript:;'
      });
      Icon.set(span, type === 'hide' ? 'squareMinus' : 'squarePlus');
      $.add(a, span);
      $.on(a, 'click', PostHiding.toggle);
      return a;
    },
    saveHiddenState(post, isHiding, thisPost, makeStub, hideRecursively, byId) {
      const data = {
        boardID: post.board.ID,
        threadID: post.thread.ID,
        postID: post.ID
      };
      if (isHiding) {
        data.val = {
          thisPost: thisPost !== false, // undefined -> true
          makeStub,
          hideRecursively,
          byId
        };
        PostHiding.db.set(data);
      } else {
        PostHiding.db.delete(data);
      }
    },
    toggle() {
      const post = Get.postFromNode(this);
      post.isHidden ? PostHiding.show(post) : PostHiding.hide(post, undefined, undefined, 'Hidden manually');
      PostHiding.saveHiddenState(post, post.isHidden);
    },
    hide(post, makeStub = Conf.Stubs, hideRecursively = Conf['Recursive Hiding'], reason) {
      if (post.isHidden)
        return;
      post.isHidden = true;
      if (hideRecursively) {
        PostHiding.hideRecursive(post, makeStub);
      }
      for (var quotelink of Get.allQuotelinksLinkingTo(post)) {
        $.addClass(quotelink, 'filtered');
      }
      if (!makeStub) {
        post.nodes.root.hidden = true;
        return;
      }
      post.nodes.stub = $.el('div', { className: 'stub' });
      const a = PostHiding.makeButton(post, 'show');
      $.add(a, $.el('span', { className: 'stub-name', textContent: post.info.nameBlock }));
      let reasons = post.filterResults?.reasons || [];
      if (reason)
        reasons = [...reasons, reason];
      if (Conf['Filter Reason'] && reasons.length) {
        const reasonsSpan = $.el('span', { className: 'stub-reasons' });
        $.add(reasonsSpan, reasons.map(re => $.el('span', { className: 'stub-reason', textContent: re })));
        a.appendChild(reasonsSpan);
      }
      $.add(post.nodes.stub, a);
      if (!Conf['Filter Reason'] && reasons)
        post.nodes.stub.title = reasons.join(' & ');
      if (Conf.Menu) {
        $.add(post.nodes.stub, Menu.makeButton(post));
      }
      $.prepend(post.nodes.root, post.nodes.stub);
    },
    hideRecursive(post, makeStub) {
      Recursive.applyAndAdd(PostHiding.hide, post, makeStub, true, `Hidden recursively from ${post.ID}`);
    },
    show(post, showRecursively = Conf['Recursive Hiding']) {
      if (post.nodes.stub) {
        $.rm(post.nodes.stub);
        delete post.nodes.stub;
      } else {
        post.nodes.root.hidden = false;
      }
      post.isHidden = false;
      if (showRecursively) {
        Recursive.apply(PostHiding.show, post, true);
        Recursive.rm(PostHiding.hide, post);
      }
      for (var quotelink of Get.allQuotelinksLinkingTo(post)) {
        $.rmClass(quotelink, 'filtered');
      }
    }
  };

  const RelativeDates = {
    INTERVAL: 30000,
    init() {
      if ((['index', 'thread', 'archive'].includes(g.VIEW) &&
        ['Show', 'Both', 'BothRelativeFirst'].includes(Conf.RelativeTime)) ||
        Index.enabled) {
        this.flush();
        $.on(d, 'visibilitychange PostsInserted', this.flush);
      }
      if (Conf.RelativeTime !== 'No') {
        return Callbacks.Post.push({
          name: 'Relative Post Dates',
          cb: this.node
        });
      }
    },
    node() {
      if (!this.info.date) {
        return;
      }
      const dateEl = this.nodes.date;
      if (Conf.RelativeTime === 'Hover') {
        $.on(dateEl, 'mouseover', () => RelativeDates.hover(this));
        return;
      }
      if (this.isClone) {
        return;
      }
      // Show original absolute time as tooltip so users can still know exact times
      // Since "Time Formatting" runs its `node` before us, the title tooltip will
      // pick up the user-formatted time instead of 4chan time when enabled.
      if (Conf.RelativeTime === 'Show') {
        dateEl.dataset.fullTime = dateEl.textContent;
        dateEl.title = dateEl.textContent;
      }
      RelativeDates.update(this);
    },
    /** @param diff is milliseconds from now. */
    relative(diff, now, date, abbrev) {
      let number;
      let unit;
      if ((number = (diff / DAY)) >= 1) {
        const years = now.getFullYear() - date.getFullYear();
        let months = now.getMonth() - date.getMonth();
        const days = now.getDate() - date.getDate();
        if (years > 1) {
          number = years - ((months < 0) || ((months === 0) && (days < 0)));
          unit = 'year';
        } else if ((years === 1) && ((months > 0) || ((months === 0) && (days >= 0)))) {
          number = years;
          unit = 'year';
        } else if ((months = months + (12 * years)) > 1) {
          number = months - (days < 0);
          unit = 'month';
        } else if ((months === 1) && (days >= 0)) {
          number = months;
          unit = 'month';
        } else {
          unit = 'day';
        }
      } else if ((number = (diff / HOUR)) >= 1) {
        unit = 'hour';
      } else if ((number = (diff / MINUTE)) >= 1) {
        unit = 'minute';
      } else {
        // prevent "-1 seconds ago"
        number = Math.max(0, diff) / SECOND;
        unit = 'second';
      }
      const rounded = Math.round(number);
      if (abbrev) {
        unit = unit === 'month' ? 'mo' : unit[0];
      } else {
        if (rounded !== 1) {
          unit += 's';
        } // pluralize
      }
      if (abbrev) {
        return `${rounded}${unit}`;
      } else {
        return `${rounded} ${unit} ago`;
      }
    },
    // Changing all relative dates as soon as possible incurs many annoying
    // redraws and scroll stuttering. Thus, sacrifice accuracy for UX/CPU economy,
    // and perform redraws when the DOM is otherwise being manipulated (and scroll
    // stuttering won't be noticed), falling back to INTERVAL while the page
    // is visible.
    //
    // Each individual dateTime element will add its update() function to the stale list
    // when it is to be called.
    stale: [],
    timeout: undefined,
    flush() {
      // No point in changing the dates until the user sees them.
      if (d.hidden) {
        return;
      }
      const now = new Date();
      for (const data of RelativeDates.stale) {
        RelativeDates.update(data, now);
      }
      RelativeDates.stale = [];
      // Reset automatic flush.
      clearTimeout(RelativeDates.timeout);
      RelativeDates.timeout = setTimeout(RelativeDates.flush, RelativeDates.INTERVAL);
    },
    hover(post) {
      const { date } = post.info;
      const now = new Date();
      const diff = now - date;
      post.nodes.date.title = RelativeDates.relative(diff, now, date);
    },
    // `update()`, when called from `flush()`, updates the elements,
    // and re-calls `setOwnTimeout()` to re-add `data` to the stale list later.
    update(data, now = new Date()) {
      let abbrev, date;
      const isPost = data instanceof Post;
      if (isPost) {
        ({ date } = data.info);
        abbrev = false;
      } else {
        date = new Date(+data.dataset.utc);
        abbrev = !!data.dataset.abbrev;
      }
      const diff = now - date;
      const relative = RelativeDates.relative(diff, now, date, abbrev);
      if (isPost) {
        for (const singlePost of [data].concat(data.clones)) {
          const node = singlePost.nodes.date;
          if (Conf.RelativeTime === 'Show') {
            node.textContent = relative;
          } else {
            let full = node.dataset.fullTime;
            if (!full) {
              full = node.textContent;
              node.dataset.fullTime = full;
            }
            node.textContent = Conf.RelativeTime === 'Both' ? `${full}, ${relative}` : `${relative}, ${full}`;
          }
        }
      } else {
        data.firstChild.textContent = relative;
      }
      RelativeDates.setOwnTimeout(diff, data);
    },
    setOwnTimeout(diff, data) {
      const delay = diff < MINUTE ?
        SECOND - ((diff + (SECOND / 2)) % SECOND)
        : diff < HOUR ?
          MINUTE - ((diff + (MINUTE / 2)) % MINUTE)
          : diff < DAY ?
            HOUR - ((diff + (HOUR / 2)) % HOUR)
            :
              DAY - ((diff + (DAY / 2)) % DAY);
      setTimeout(RelativeDates.markStale, delay, data);
    },
    markStale(data) {
      if (RelativeDates.stale.includes(data)) {
        return;
      } // We can call RelativeDates.update() multiple times.
      if (data instanceof Post && !g.posts.get(data.fullID)) {
        return;
      } // collected post.
      if (data instanceof Element && !doc.contains(data)) {
        return;
      } // removed catalog reply.
      RelativeDates.stale.push(data);
    }
  };

  var ThreadWatcherPage = `<div class="move">
  Thread Watcher <a class="refresh" title="Check threads" href="javascript:;" title="refresh"></a>
  <span id="watcher-status"></span>
  <a class="menu-button" href="javascript:;"></a>
  <a class="close" href="javascript:;">×</a>
</div>
<div id="watched-threads"></div>`;

  const PostRedirect = {
      init() {
          $.on(d, 'QRPostSuccessful', e => {
              if (!e.detail.redirect) {
                  return;
              }
              this.event = e;
              this.delays = 0;
              $.queueTask(() => {
                  if ((e === this.event) && (this.delays === 0)) {
                      return location.href = e.detail.redirect;
                  }
              });
          });
      },
      delays: 0,
      delay() {
          if (!this.event) {
              return null;
          }
          const e = this.event;
          this.delays++;
          return () => {
              if (e !== this.event) {
                  return;
              }
              this.delays--;
              if (this.delays === 0) {
                  return location.href = e.detail.redirect;
              }
          };
      }
  };

  const ExpandComment = {
      init() {
          if ((g.VIEW !== 'index') || !Conf['Comment Expansion'] || Conf['JSON Index']) {
              return;
          }
          Callbacks.Post.push({
              name: 'Comment Expansion',
              cb: this.node
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
          if (!(a = $('.abbr > a', post.nodes.comment))) {
              return;
          }
          a.textContent = `Post No.${post} Loading...`;
          return $.cache(g.SITE.urls.threadJSON({ boardID: post.boardID, threadID: post.threadID }), function () { return ExpandComment.parse(this, a, post); });
      },
      contract(post) {
          if (!post.nodes.shortComment) {
              return;
          }
          const a = $('.abbr > a', post.nodes.shortComment);
          a.textContent = 'here';
          $.replace(post.nodes.longComment, post.nodes.shortComment);
          return post.nodes.comment = post.nodes.shortComment;
      },
      parse(req, a, post) {
          let spoilerRange;
          const { status } = req;
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
          const { comment } = post.nodes;
          const clone = comment.cloneNode(false);
          clone.innerHTML = postObj.com;
          const pathParts = a.pathname.split(/\/+/);
          const threadBase = pathParts.slice(0, 4).join('/');
          const boardBase = pathParts.slice(0, 3).join('/');
          // Fix pathnames
          for (const quote of $$('.quotelink', clone)) {
              const href = quote.getAttribute('href');
              if (!href || href[0] === '/') {
                  continue;
              }
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

  const ScrollMarkers = {
    init() {
      ScrollMarkers.container = $.el('div', { classList: 'scroll-marker-container' });
      doc.insertAdjacentElement('afterbegin', ScrollMarkers.container);
      $.on(ScrollMarkers.container, 'click', (e) => {
        const { postId } = e.target.dataset;
        if (postId)
          Header.scrollTo(g.posts[postId].nodes.root);
      });
      new ResizeObserver(ScrollMarkers.markScroll).observe(doc);
    },
    container: undefined,
    // Keep instead of redoing so renewing doesn't lose keyboard focus
    markers: undefined,
    markScroll: debounce(100, () => {
      if (!Conf['Scroll Markers']) {
        ScrollMarkers.container.innerText = '';
        ScrollMarkers.markers = undefined;
        return;
      }
      const newMarkers = new Map();
      g.posts?.forEach((post) => {
        const postEl = post.nodes.root;
        let isReply = false;
        if ($.hasClass(postEl, 'quotesYou')) {
          isReply = true;
        } else if (!$.hasClass(postEl, 'yourPost')) {
          return;
        }
        const postPosition = postEl.getBoundingClientRect();
        newMarkers.set(`${post.boardID}.${post.ID}`, {
          classList: `post-scroll-marker ${isReply ? 'reply' : 'you'}-scroll-marker`,
          ariaLabel: `Jump to ${isReply ? 'reply to ' : ''} my post`,
          top: (((postPosition.top + window.scrollY) / doc.scrollHeight) * 100).toFixed(1),
          height: Math.max(1, (postPosition.height / doc.scrollHeight) * 100).toFixed(1),
        });
      });
      let previousEl;
      for (const [key, marker] of newMarkers) {
        const existing = ScrollMarkers.markers?.get(key);
        let el = existing?.el;
        if (!el) {
          el = $.el('button', { type: 'button' });
          if (previousEl) {
            previousEl.insertAdjacentElement('afterend', el);
          } else {
            $.add(ScrollMarkers.container, el);
          }
        }
        el.classList = marker.classList;
        el.style.setProperty('--top', marker.top);
        el.style.setProperty('--height', marker.height);
        el.dataset.postId = key;
        marker.el = el;
        previousEl = el;
        d.createElement('button');
      }
      // Remove those that don't exist anymore
      if (ScrollMarkers.markers) {
        for (const [key, { el }] of ScrollMarkers.markers) {
          if (!newMarkers.has(key))
            el.remove();
        }
      }
      ScrollMarkers.markers = newMarkers;
    }, false),
  };

  var QuoteYou = {
      init() {
          if (!Conf['Remember Your Posts']) {
              return;
          }
          this.db = new DataBoard('yourPosts');
          $.sync('Remember Your Posts', enabled => Conf['Remember Your Posts'] = enabled);
          $.on(d, 'QRPostSuccessful', function (e) {
              const cb = PostRedirect.delay();
              return $.get('Remember Your Posts', Conf['Remember Your Posts'], function (items) {
                  if (!items['Remember Your Posts']) {
                      return;
                  }
                  const { boardID, threadID, postID } = e.detail;
                  return QuoteYou.db.set({ boardID, threadID, postID, val: true }, cb);
              });
          });
          if (!['index', 'thread', 'archive'].includes(g.VIEW)) {
              return;
          }
          if (Conf['Highlight Own Posts']) {
              $.addClass(doc, 'highlight-own');
          }
          if (Conf['Highlight Posts Quoting You']) {
              $.addClass(doc, 'highlight-you');
          }
          if (Conf['Comment Expansion']) {
              ExpandComment.callbacks.push(this.node);
          }
          // \u00A0 is nbsp
          this.mark = $.el('span', {
              textContent: '\u00A0(You)',
              className: 'qmark-you'
          });
          Callbacks.Post.push({
              name: 'Mark Quotes of You',
              cb: this.node
          });
          QuoteYou.menu.init();
      },
      isYou(post) {
          return !!QuoteYou.db?.get({
              boardID: post.boardID,
              threadID: post.threadID,
              postID: post.ID
          });
      },
      node() {
          if (this.isClone) {
              return;
          }
          if (QuoteYou.isYou(this)) {
              $.addClass(this.nodes.root, 'yourPost');
              ScrollMarkers.markScroll();
          }
          // Stop there if there's no quotes in that post.
          if (!this.quotes.length) {
              return;
          }
          for (var quotelink of this.nodes.quotelinks) {
              if (QuoteYou.db.get(Get.postDataFromLink(quotelink))) {
                  if (Conf['Mark Quotes of You']) {
                      $.add(quotelink, QuoteYou.mark.cloneNode(true));
                  }
                  $.addClass(quotelink, 'you');
                  $.addClass(this.nodes.root, 'quotesYou');
              }
          }
      },
      menu: {
          init() {
              const label = $.el('label', { className: 'toggle-you' }, { innerHTML: '<input type="checkbox"> You' });
              const input = $('input', label);
              $.on(input, 'change', QuoteYou.menu.toggle);
              Menu.menu?.addEntry({
                  el: label,
                  order: 80,
                  open(post) {
                      QuoteYou.menu.post = (post.origin || post);
                      input.checked = QuoteYou.isYou(post);
                      return true;
                  }
              });
          },
          toggle() {
              const { post } = QuoteYou.menu;
              const data = { boardID: post.board.ID, threadID: post.thread.ID, postID: post.ID, val: true };
              if (this.checked) {
                  QuoteYou.db.set(data);
              }
              else {
                  QuoteYou.db.delete(data);
              }
              for (var clone of [post].concat(post.clones)) {
                  clone.nodes.root.classList.toggle('yourPost', this.checked);
              }
              for (var quotelink of Get.allQuotelinksLinkingTo(post)) {
                  if (this.checked) {
                      if (Conf['Mark Quotes of You']) {
                          $.add(quotelink, QuoteYou.mark.cloneNode(true));
                      }
                  }
                  else {
                      $.rm($('.qmark-you', quotelink));
                  }
                  quotelink.classList.toggle('you', this.checked);
                  if ($.hasClass(quotelink, 'quotelink')) {
                      var quoter = Get.postFromNode(quotelink).nodes.root;
                      quoter.classList.toggle('quotesYou', !!$('.quotelink.you', quoter));
                  }
              }
              ScrollMarkers.markScroll();
          }
      },
      cb: {
          seek(type) {
              let highlighted, post;
              let result;
              const { highlight } = g.SITE.classes;
              if (highlighted = $(`.${highlight}`)) {
                  $.rmClass(highlighted, highlight);
              }
              if (!QuoteYou.lastRead || !doc.contains(QuoteYou.lastRead) || !$.hasClass(QuoteYou.lastRead, 'quotesYou')) {
                  if (!(post = (QuoteYou.lastRead = $('.quotesYou')))) {
                      new Notice('warning', 'No posts are currently quoting you, loser.', 20);
                      return;
                  }
                  if (QuoteYou.cb.scroll(post)) {
                      return;
                  }
              }
              else {
                  post = QuoteYou.lastRead;
              }
              const str = `${type}::div[contains(@class,'quotesYou')]`;
              while (post = (result = $.X(str, post)).snapshotItem(type === 'preceding' ? result.snapshotLength - 1 : 0)) {
                  if (QuoteYou.cb.scroll(post)) {
                      return;
                  }
              }
              const posts = $$('.quotesYou');
              QuoteYou.cb.scroll(posts[type === 'following' ? 0 : posts.length - 1]);
          },
          scroll(root) {
              const post = Get.postFromRoot(root);
              if (!post.nodes.post.getBoundingClientRect().height) {
                  return false;
              }
              else {
                  QuoteYou.lastRead = root;
                  location.href = Get.url('post', post);
                  Header.scrollTo(post.nodes.post);
                  if (post.isReply) {
                      const sel = `${g.SITE.selectors.postContainer}${g.SITE.selectors.highlightable.reply}`;
                      let node = post.nodes.root;
                      if (!node.matches(sel)) {
                          node = $(sel, node);
                      }
                      $.addClass(node, g.SITE.classes.highlight);
                  }
                  return true;
              }
          }
      }
  };

  class RandomAccessList {
      constructor(items) {
          this.length = 0;
          if (items) {
              for (var item of items) {
                  this.push(item);
              }
          }
      }
      push(data) {
          let item;
          let { ID } = data;
          if (!ID) {
              ID = data.id;
          }
          if (this[ID]) {
              return;
          }
          const { last } = this;
          this[ID] = (item = {
              prev: last,
              next: null,
              data,
              ID
          });
          item.prev = last;
          this.last = last ?
              (last.next = item)
              :
                  (this.first = item);
          return this.length++;
      }
      before(root, item) {
          if ((item.next === root) || (item === root)) {
              return;
          }
          this.rmi(item);
          const { prev } = root;
          root.prev = item;
          item.next = root;
          item.prev = prev;
          if (prev) {
              return prev.next = item;
          }
          else {
              return this.first = item;
          }
      }
      after(root, item) {
          if ((item.prev === root) || (item === root)) {
              return;
          }
          this.rmi(item);
          const { next } = root;
          root.next = item;
          item.prev = root;
          item.next = next;
          if (next) {
              return next.prev = item;
          }
          else {
              return this.last = item;
          }
      }
      prepend(item) {
          const { first } = this;
          if ((item === first) || !this[item.ID]) {
              return;
          }
          this.rmi(item);
          item.next = first;
          if (first) {
              first.prev = item;
          }
          else {
              this.last = item;
          }
          this.first = item;
          return delete item.prev;
      }
      shift() {
          return this.rm(this.first.ID);
      }
      order() {
          let item;
          const order = [(item = this.first)];
          while ((item = item.next)) {
              order.push(item);
          }
          return order;
      }
      rm(ID) {
          const item = this[ID];
          if (!item) {
              return;
          }
          delete this[ID];
          this.length--;
          this.rmi(item);
          delete item.next;
          return delete item.prev;
      }
      rmi(item) {
          const { prev, next } = item;
          if (prev) {
              prev.next = next;
          }
          else {
              this.first = next;
          }
          if (next) {
              return next.prev = prev;
          }
          else {
              return this.last = prev;
          }
      }
  }

  var Unread = {
      init() {
          if ((g.VIEW !== 'thread') || (!Conf['Unread Count'] &&
              !Conf['Unread Favicon'] &&
              !Conf['Unread Line'] &&
              !Conf['Remember Last Read Post'] &&
              !Conf['Desktop Notifications'] &&
              !Conf['Quote Threading'])) {
              return;
          }
          if (Conf['Remember Last Read Post']) {
              $.sync('Remember Last Read Post', enabled => Conf['Remember Last Read Post'] = enabled);
              this.db = new DataBoard('lastReadPosts', this.sync);
          }
          this.hr = $.el('hr', {
              id: 'unread-line',
              className: 'unread-line'
          });
          this.posts = new Set();
          this.postsQuotingYou = new Set();
          this.order = new RandomAccessList();
          this.position = null;
          Callbacks.Thread.push({
              name: 'Unread',
              cb: this.node
          });
          Callbacks.Post.push({
              name: 'Unread',
              cb: this.addPost
          });
      },
      node() {
          Unread.thread = this;
          Unread.title = d.title;
          Unread.lastReadPost = Unread.db?.get({
              boardID: this.board.ID,
              threadID: this.ID
          }) || 0;
          Unread.readCount = 0;
          for (var ID of this.posts.keys) {
              if (+ID <= Unread.lastReadPost) {
                  Unread.readCount++;
              }
          }
          $.one(d, '4chanXInitFinished', Unread.ready);
          $.on(d, 'PostsInserted', Unread.onUpdate);
          $.on(d, 'ThreadUpdate', function (e) { if (e.detail[404]) {
              return Unread.update();
          } });
          const resetLink = $.el('a', {
              href: 'javascript:;',
              className: 'unread-reset',
              textContent: 'Mark all unread'
          });
          $.on(resetLink, 'click', Unread.reset);
          Header.menu.addEntry({
              el: resetLink,
              order: 70
          });
      },
      ready() {
          if (Conf['Remember Last Read Post'] && Conf['Scroll to Last Read Post']) {
              Unread.scroll();
          }
          Unread.setLine(true);
          Unread.read();
          Unread.update();
          $.on(d, 'scroll visibilitychange', Unread.read);
          if (Conf['Unread Line']) {
              return $.on(d, 'visibilitychange', Unread.setLine);
          }
      },
      positionPrev() {
          if (Unread.position) {
              return Unread.position.prev;
          }
          else {
              return Unread.order.last;
          }
      },
      scroll() {
          // Let the header's onload callback handle it.
          let hash;
          if ((hash = location.hash.match(/\d+/)) && hash[0] in Unread.thread.posts) {
              return;
          }
          let position = Unread.positionPrev();
          while (position) {
              var { bottom } = position.data.nodes;
              if (!bottom.getBoundingClientRect().height) {
                  // Don't try to scroll to posts with display: none
                  position = position.prev;
              }
              else {
                  Header.scrollToIfNeeded(bottom, true);
                  break;
              }
          }
      },
      reset() {
          if (Unread.lastReadPost == null) {
              return;
          }
          Unread.posts = new Set();
          Unread.postsQuotingYou = new Set();
          Unread.order = new RandomAccessList();
          Unread.position = null;
          Unread.lastReadPost = 0;
          Unread.readCount = 0;
          Unread.thread.posts.forEach(post => Unread.addPost.call(post));
          $.forceSync('Remember Last Read Post');
          if (Conf['Remember Last Read Post'] && (!Unread.thread.isDead || Unread.thread.isArchived)) {
              Unread.db.set({
                  boardID: Unread.thread.board.ID,
                  threadID: Unread.thread.ID,
                  val: 0
              });
          }
          Unread.updatePosition();
          Unread.setLine();
          Unread.update();
      },
      sync() {
          if (Unread.lastReadPost == null) {
              return;
          }
          const lastReadPost = Unread.db.get({
              boardID: Unread.thread.board.ID,
              threadID: Unread.thread.ID,
              defaultValue: 0
          });
          if (Unread.lastReadPost >= lastReadPost) {
              return;
          }
          Unread.lastReadPost = lastReadPost;
          const postIDs = Unread.thread.posts.keys;
          for (let i = Unread.readCount, end = postIDs.length; i < end; i++) {
              var ID = +postIDs[i];
              if (!Unread.thread.posts.get(ID).isFetchedQuote) {
                  if (ID > Unread.lastReadPost) {
                      break;
                  }
                  Unread.posts.delete(ID);
                  Unread.postsQuotingYou.delete(ID);
              }
              Unread.readCount++;
          }
          Unread.updatePosition();
          Unread.setLine();
          Unread.update();
      },
      addPost() {
          if (this.isFetchedQuote || this.isClone)
              return;
          Unread.order.push(this);
          if ((this.ID <= Unread.lastReadPost) || this.isHidden || QuoteYou.isYou(this))
              return;
          Unread.posts.add((Unread.posts.last = this.ID));
          Unread.addPostQuotingYou(this);
          return Unread.position != null ? Unread.position : (Unread.position = Unread.order[this.ID]);
      },
      addPostQuotingYou(post) {
          for (var quotelink of post.nodes.quotelinks) {
              if (QuoteYou.db?.get(Get.postDataFromLink(quotelink))) {
                  Unread.postsQuotingYou.add((Unread.postsQuotingYou.last = post.ID));
                  Unread.openNotification(post);
                  return;
              }
          }
      },
      openNotification(post, predicate = ' replied to you') {
          if (!Header.areNotificationsEnabled) {
              return;
          }
          const notif = new Notification(`${post.info.nameBlock}${predicate}`, {
              body: post.commentDisplay(),
              icon: Favicon.logo
          });
          notif.onclick = function () {
              Header.scrollToIfNeeded(post.nodes.bottom, true);
              window.focus();
          };
          notif.onshow = () => setTimeout(() => notif.close(), 7 * SECOND);
      },
      onUpdate() {
          return $.queueTask(function () {
              Unread.setLine();
              Unread.read();
              Unread.update();
          });
      },
      readSinglePost(post) {
          const { ID } = post;
          if (!Unread.posts.has(ID)) {
              return;
          }
          Unread.posts.delete(ID);
          Unread.postsQuotingYou.delete(ID);
          Unread.updatePosition();
          Unread.saveLastReadPost();
          Unread.update();
      },
      read: debounce(100, function (e) {
          // Update the lastReadPost when hidden posts are added to the thread.
          if (!Unread.posts.size && (Unread.readCount !== Unread.thread.posts.keys.length)) {
              Unread.saveLastReadPost();
          }
          if (d.hidden || !Unread.posts.size) {
              return;
          }
          let count = 0;
          while (Unread.position) {
              var { ID, data } = Unread.position;
              var { bottom } = data.nodes;
              if (!!bottom.getBoundingClientRect().height && // post has been hidden
                  (Header.getBottomOf(bottom) <= -1)) {
                  break;
              } // post is completely read
              count++;
              Unread.posts.delete(ID);
              Unread.postsQuotingYou.delete(ID);
              Unread.position = Unread.position.next;
          }
          if (!count) {
              return;
          }
          Unread.updatePosition();
          Unread.saveLastReadPost();
          if (e) {
              return Unread.update();
          }
      }),
      updatePosition() {
          while (Unread.position && !Unread.posts.has(Unread.position.ID)) {
              Unread.position = Unread.position.next;
          }
      },
      saveLastReadPost: debounce(2 * SECOND, function () {
          let ID;
          $.forceSync('Remember Last Read Post');
          if (!Conf['Remember Last Read Post'] || !Unread.db) {
              return;
          }
          const postIDs = Unread.thread.posts.keys;
          for (let i = Unread.readCount, end = postIDs.length; i < end; i++) {
              ID = +postIDs[i];
              if (!Unread.thread.posts.get(ID).isFetchedQuote) {
                  if (Unread.posts.has(ID)) {
                      break;
                  }
                  Unread.lastReadPost = ID;
              }
              Unread.readCount++;
          }
          if (Unread.thread.isDead && !Unread.thread.isArchived) {
              return;
          }
          return Unread.db.set({
              boardID: Unread.thread.board.ID,
              threadID: Unread.thread.ID,
              val: Unread.lastReadPost
          });
      }),
      setLine(force) {
          if (!Conf['Unread Line']) {
              return;
          }
          if (Unread.hr.hidden || d.hidden || (force === true)) {
              const oldPosition = Unread.linePosition;
              if (Unread.linePosition = Unread.positionPrev()) {
                  if (Unread.linePosition !== oldPosition) {
                      let node = Unread.linePosition.data.nodes.bottom;
                      if (node.nextSibling?.tagName === 'BR') {
                          node = node.nextSibling;
                      }
                      $.after(node, Unread.hr);
                  }
              }
              else {
                  $.rm(Unread.hr);
              }
          }
          return Unread.hr.hidden = Unread.linePosition === Unread.order.last;
      },
      update() {
          const count = Unread.posts.size;
          const countQuotingYou = Unread.postsQuotingYou.size;
          if (Conf['Unread Count']) {
              const titleQuotingYou = Conf['Quoted Title'] && countQuotingYou ? '(!) ' : '';
              const titleCount = count || !Conf['Hide Unread Count at (0)'] ? `(${count}) ` : '';
              const titleDead = Unread.thread.isDead ?
                  Unread.title.replace('-', (Unread.thread.isArchived ? '- Archived -' : '- 404 -'))
                  :
                      Unread.title;
              d.title = `${titleQuotingYou}${titleCount}${titleDead}`;
          }
          Unread.saveThreadWatcherCount();
          if (Conf['Unread Favicon'] && (g.SITE.software === 'yotsuba')) {
              const { isDead } = Unread.thread;
              return Favicon.set((countQuotingYou ?
                  (isDead ? 'unreadDeadY' : 'unreadY') : count ?
                  (isDead ? 'unreadDead' : 'unread') : (isDead ? 'dead' : 'default')));
          }
      },
      saveThreadWatcherCount: debounce(2 * SECOND, function () {
          $.forceSync('Remember Last Read Post');
          if (Conf['Remember Last Read Post'] && (!Unread.thread.isDead || Unread.thread.isArchived)) {
              let posts;
              const quotingYou = !Conf['Require OP Quote Link'] && QuoteYou.isYou(Unread.thread.OP) ? Unread.posts : Unread.postsQuotingYou;
              if (!quotingYou.size) {
                  quotingYou.last = 0;
              }
              else if (!quotingYou.has(quotingYou.last)) {
                  quotingYou.last = 0;
                  posts = Unread.thread.posts.keys;
                  for (let i = posts.length - 1; i >= 0; i--) {
                      if (quotingYou.has(+posts[i])) {
                          quotingYou.last = posts[i];
                          break;
                      }
                  }
              }
              ThreadWatcher.update(g.SITE.ID, Unread.thread.board.ID, Unread.thread.ID, {
                  last: Unread.thread.lastPost,
                  isDead: Unread.thread.isDead,
                  isArchived: Unread.thread.isArchived,
                  unread: Unread.posts.size,
                  quotingYou: (quotingYou.last || 0)
              });
          }
      })
  };

  let indexEnabled = false;
  function setIndexEnabled(val) { indexEnabled = val; }

  var ExpandThread = {
      statuses: dict(),
      init() {
          if (!((g.VIEW === 'index') && Conf['Thread Expansion'])) {
              return;
          }
          if (Conf['JSON Index']) {
              $.on(d, 'IndexRefreshInternal', this.onIndexRefresh);
          }
          else {
              Callbacks.Thread.push({
                  name: 'Expand Thread',
                  cb() { ExpandThread.setButton(this); }
              });
          }
      },
      setButton(thread) {
          if (!thread.nodes.root)
              return;
          const a = $('a.summary', thread.nodes.root);
          if (!a)
              return;
          a.textContent = g.SITE.Build.summaryText('+', ...a.textContent.match(/\d+/g));
          a.style.cursor = 'pointer';
          $.on(a, 'click', ExpandThread.cbToggle);
      },
      disconnect(refresh) {
          if ((g.VIEW === 'thread') || !Conf['Thread Expansion']) {
              return;
          }
          for (var threadID in ExpandThread.statuses) {
              var oldReq;
              var status = ExpandThread.statuses[threadID];
              if (oldReq = status.req) {
                  delete status.req;
                  oldReq.abort();
              }
              delete ExpandThread.statuses[threadID];
          }
          if (!refresh)
              $.off(d, 'IndexRefreshInternal', this.onIndexRefresh);
      },
      onIndexRefresh() {
          ExpandThread.disconnect(true);
          g.BOARD.threads.forEach(thread => ExpandThread.setButton(thread));
      },
      cbToggle(e) {
          if ($.modifiedClick(e)) {
              return;
          }
          e.preventDefault();
          ExpandThread.toggle(Get.threadFromNode(this));
      },
      cbToggleBottom(e) {
          if ($.modifiedClick(e)) {
              return;
          }
          e.preventDefault();
          const thread = Get.threadFromNode(this);
          $.rm(this); // remove before fixing bottom of thread position
          const { bottom } = thread.nodes.root.getBoundingClientRect();
          ExpandThread.toggle(thread);
          return window.scrollBy(0, (thread.nodes.root.getBoundingClientRect().bottom - bottom));
      },
      toggle(thread) {
          if (!thread.nodes.root)
              return;
          const a = $('a.summary', thread.nodes.root);
          if (!a)
              return;
          if (thread.ID in ExpandThread.statuses) {
              ExpandThread.contract(thread, a, thread.nodes.root);
          }
          else {
              ExpandThread.expand(thread, a);
          }
      },
      expand(thread, a) {
          let status;
          ExpandThread.statuses[thread] = (status = {});
          a.textContent = g.SITE.Build.summaryText('...', ...a.textContent.match(/\d+/g));
          status.req = $.cache(g.SITE.urls.threadJSON({ boardID: thread.board.ID, threadID: thread.ID }), function () {
              if (this !== status.req) {
                  return;
              } // aborted
              delete status.req;
              ExpandThread.parse(this, thread, a);
          });
          status.numReplies = $$(g.SITE.selectors.replyOriginal, thread.nodes.root).length;
      },
      contract(thread, a, threadRoot) {
          let oldReq;
          const status = ExpandThread.statuses[thread];
          delete ExpandThread.statuses[thread];
          if (oldReq = status.req) {
              delete status.req;
              oldReq.abort();
              if (a) {
                  a.textContent = g.SITE.Build.summaryText('+', ...a.textContent.match(/\d+/g));
              }
              return;
          }
          let replies = $$('.thread > .replyContainer', threadRoot);
          if (status.numReplies) {
              replies = replies.slice(0, (-status.numReplies));
          }
          let postsCount = 0;
          let filesCount = 0;
          for (var reply of replies) {
              // rm clones
              if (Conf['Quote Inlining']) {
                  var inlined;
                  while ((inlined = $('.inlined', reply))) {
                      inlined.click();
                  }
              }
              postsCount++;
              if ('file' in Get.postFromRoot(reply)) {
                  filesCount++;
              }
              $.rm(reply);
          }
          if (indexEnabled) { // otherwise handled by Main.addPosts
              $.event('PostsRemoved', null, a.parentNode);
          }
          a.textContent = g.SITE.Build.summaryText('+', postsCount, filesCount);
          $.rm($('.summary-bottom', threadRoot));
      },
      parse(req, thread, a) {
          let root;
          if (![200, 304].includes(req.status)) {
              a.textContent = req.status ? `Error ${req.statusText} (${req.status})` : 'Connection Error';
              return;
          }
          g.SITE.Build.spoilerRange[thread.board] = req.response.posts[0].custom_spoiler;
          const posts = [];
          const postsRoot = [];
          let filesCount = 0;
          for (var postData of req.response.posts) {
              var post;
              if (postData.no === thread.ID) {
                  continue;
              }
              if ((post = thread.posts.get(postData.no)) && !post.isFetchedQuote) {
                  if ('file' in post) {
                      filesCount++;
                  }
                  ({ root } = post.nodes);
                  postsRoot.push(root);
                  continue;
              }
              root = g.SITE.Build.postFromObject(postData, thread.board.ID);
              post = new Post(root, thread, thread.board);
              if ('file' in post) {
                  filesCount++;
              }
              posts.push(post);
              postsRoot.push(root);
          }
          Main.callbackNodes('Post', posts);
          $.after(a, postsRoot);
          $.event('PostsInserted', null, a.parentNode);
          const postsCount = postsRoot.length;
          a.textContent = g.SITE.Build.summaryText('-', postsCount, filesCount);
          if (root) {
              const a2 = a.cloneNode(true);
              a2.classList.add('summary-bottom');
              $.on(a2, 'click', ExpandThread.cbToggleBottom);
              $.after(root, a2);
          }
      }
  };

  var UnreadIndex = {
      lastReadPost: dict(),
      hr: dict(),
      markReadLink: dict(),
      init() {
          if ((g.VIEW !== 'index') || !Conf['Remember Last Read Post'] || !Conf['Unread Line in Index']) {
              return;
          }
          this.enabled = true;
          this.db = new DataBoard('lastReadPosts', this.sync);
          Callbacks.Thread.push({
              name: 'Unread Line in Index',
              cb: this.node
          });
          $.on(d, 'IndexRefreshInternal', this.onIndexRefresh);
          $.on(d, 'PostsInserted PostsRemoved', this.onPostsInserted);
      },
      node() {
          UnreadIndex.lastReadPost[this.fullID] = UnreadIndex.db.get({
              boardID: this.board.ID,
              threadID: this.ID
          }) || 0;
          if (!indexEnabled) { // let onIndexRefresh handle JSON Index
              return UnreadIndex.update(this);
          }
      },
      onIndexRefresh(e) {
          if (e.detail.isCatalog) {
              return;
          }
          return (() => {
              const result = [];
              for (var threadID of e.detail.threadIDs) {
                  var thread = g.threads.get(threadID);
                  result.push(UnreadIndex.update(thread));
              }
              return result;
          })();
      },
      onPostsInserted(e) {
          if (e.target === Index.root) {
              return;
          } // onIndexRefresh handles this case
          const thread = Get.threadFromNode(e.target);
          if (!thread || (thread.nodes.root !== e.target)) {
              return;
          }
          const wasVisible = !!UnreadIndex.hr[thread.fullID]?.parentNode;
          UnreadIndex.update(thread);
          if (Conf['Scroll to Last Read Post'] && (e.type === 'PostsInserted') && !wasVisible && !!UnreadIndex.hr[thread.fullID]?.parentNode) {
              Header.scrollToIfNeeded(UnreadIndex.hr[thread.fullID], true);
          }
      },
      sync() {
          return g.threads.forEach(function (thread) {
              const lastReadPost = UnreadIndex.db.get({
                  boardID: thread.board.ID,
                  threadID: thread.ID
              }) || 0;
              if (lastReadPost !== UnreadIndex.lastReadPost[thread.fullID]) {
                  UnreadIndex.lastReadPost[thread.fullID] = lastReadPost;
                  if (thread.nodes.root?.parentNode) {
                      UnreadIndex.update(thread);
                  }
              }
          });
      },
      update(thread) {
          let divider;
          const lastReadPost = UnreadIndex.lastReadPost[thread.fullID];
          let repliesShown = 0;
          let repliesRead = 0;
          let firstUnread = null;
          thread.posts.forEach(function (post) {
              if (post.isReply && thread.nodes.root.contains(post.nodes.root)) {
                  repliesShown++;
                  if (post.ID <= lastReadPost) {
                      return repliesRead++;
                  }
                  else if ((!firstUnread || (post.ID < firstUnread.ID)) && !post.isHidden && !QuoteYou.isYou(post)) {
                      return firstUnread = post;
                  }
              }
          });
          let hr = UnreadIndex.hr[thread.fullID];
          if (firstUnread && (repliesRead || ((lastReadPost === thread.OP.ID) && (!$(g.SITE.selectors.summary, thread.nodes.root) || thread.ID in ExpandThread.statuses)))) {
              if (!hr) {
                  hr = (UnreadIndex.hr[thread.fullID] = $.el('hr', { className: 'unread-line' }));
              }
              $.before(firstUnread.nodes.root, hr);
          }
          else {
              $.rm(hr);
          }
          const hasUnread = repliesShown ?
              firstUnread || !repliesRead
              : indexEnabled ?
                  thread.lastPost > lastReadPost
                  : thread.OP.ID > lastReadPost;
          thread.nodes.root.classList.toggle('unread-thread', hasUnread);
          let link = UnreadIndex.markReadLink[thread.fullID];
          if (!link) {
              link = (UnreadIndex.markReadLink[thread.fullID] = $.el('a', {
                  className: 'unread-mark-read brackets-wrap',
                  href: 'javascript:;',
                  textContent: 'Mark Read'
              }));
              $.on(link, 'click', UnreadIndex.markRead);
          }
          if (divider = $(g.SITE.selectors.threadDivider, thread.nodes.root)) { // divider inside thread as in Tinyboard
              $.before(divider, link);
          }
          else {
              $.add(thread.nodes.root, link);
          }
      },
      markRead() {
          const thread = Get.threadFromNode(this);
          UnreadIndex.lastReadPost[thread.fullID] = thread.lastPost;
          UnreadIndex.db.set({
              boardID: thread.board.ID,
              threadID: thread.ID,
              val: thread.lastPost
          });
          $.rm(UnreadIndex.hr[thread.fullID]);
          thread.nodes.root.classList.remove('unread-thread');
          ThreadWatcher.update(g.SITE.ID, thread.board.ID, thread.ID, {
              last: thread.lastPost,
              unread: 0,
              quotingYou: 0
          });
      }
  };

  var ThreadWatcher = {
      init() {
          let sc;
          if (!(this.enabled = Conf['Thread Watcher'])) {
              return;
          }
          this.shortcut = (sc = $.el('a', {
              id: 'watcher-link',
              title: 'Thread Watcher',
              href: 'javascript:;',
          }));
          Icon.set(this.shortcut, 'eye', 'Watcher');
          this.db = new DataBoard('watchedThreads', this.refresh, true);
          this.dbLM = new DataBoard('watcherLastModified', null, true);
          this.dialog = UI.dialog('thread-watcher', { innerHTML: ThreadWatcherPage });
          this.status = $('#watcher-status', this.dialog);
          this.list = this.dialog.lastElementChild;
          this.refreshButton = $('.refresh', this.dialog);
          this.menuButton = $('.menu-button', this.dialog);
          this.closeButton = $('.move > .close', this.dialog);
          this.unreaddb = Unread.db || UnreadIndex.db || new DataBoard('lastReadPosts');
          this.unreadEnabled = Conf['Remember Last Read Post'];
          Icon.set(this.refreshButton, 'refresh');
          Icon.set(this.menuButton, 'caretDown');
          Icon.set(this.closeButton, 'xmark');
          $.on(d, 'QRPostSuccessful', this.cb.post);
          $.on(sc, 'click', this.toggleWatcher);
          $.on(this.refreshButton, 'click', this.buttonFetchAll);
          $.on(this.closeButton, 'click', this.toggleWatcher);
          this.menu.addHeaderMenuEntry();
          $.onExists(doc, 'body', this.addDialog);
          switch (g.VIEW) {
              case 'index':
                  $.on(d, 'IndexUpdate', this.cb.onIndexUpdate);
                  break;
              case 'thread':
                  $.on(d, 'ThreadUpdate', this.cb.onThreadRefresh);
                  break;
          }
          if (Conf['Fixed Thread Watcher']) {
              $.addClass(doc, 'fixed-watcher');
          }
          if (!Conf['Persistent Thread Watcher']) {
              $.addClass(ThreadWatcher.shortcut, 'disabled');
              this.dialog.hidden = true;
          }
          Header.addShortcut('watcher', sc, 510);
          ThreadWatcher.initLastModified();
          ThreadWatcher.fetchAuto();
          $.on(window, 'visibilitychange focus', () => $.queueTask(ThreadWatcher.fetchAuto));
          if (Conf.Menu && indexEnabled) {
              Menu.menu.addEntry({
                  el: $.el('a', {
                      href: 'javascript:;',
                      className: 'has-shortcut-text'
                  }, { innerHTML: '<span></span><span class="shortcut-text">Alt+click</span>' }),
                  order: 6,
                  open({ thread }) {
                      if (Conf['Index Mode'] !== 'catalog') {
                          return false;
                      }
                      this.el.firstElementChild.textContent = ThreadWatcher.isWatched(thread) ?
                          'Unwatch'
                          :
                              'Watch';
                      if (this.cb) {
                          $.off(this.el, 'click', this.cb);
                      }
                      this.cb = function () {
                          $.event('CloseMenu');
                          return ThreadWatcher.toggle(thread, true);
                      };
                      $.on(this.el, 'click', this.cb);
                      return true;
                  }
              });
          }
          if (!['index', 'thread'].includes(g.VIEW)) {
              return;
          }
          Callbacks.Post.push({
              name: 'Thread Watcher',
              cb: this.node
          });
          Callbacks.CatalogThread.push({
              name: 'Thread Watcher',
              cb: this.catalogNode
          });
      },
      isWatched(thread) {
          return !!ThreadWatcher.db?.get({ boardID: thread.board.ID, threadID: thread.ID });
      },
      isWatchedRaw(boardID, threadID) {
          return !!ThreadWatcher.db?.get({ boardID, threadID });
      },
      setToggler(toggler, isWatched) {
          toggler.classList.toggle('watched', isWatched);
          return toggler.title = `${isWatched ? 'Unwatch' : 'Watch'} Thread`;
      },
      node() {
          let toggler;
          if (this.isReply) {
              return;
          }
          if (this.isClone) {
              toggler = $('.watch-thread-link', this.nodes.info);
          }
          else {
              toggler = $.el('button', {
                  type: 'button',
                  className: 'watch-thread-link'
              });
              Icon.set(toggler, 'heart');
              $.before($('input', this.nodes.info), toggler);
          }
          const siteID = g.SITE.ID;
          const boardID = this.board.ID;
          const threadID = this.thread.ID;
          const data = ThreadWatcher.db.get({ siteID, boardID, threadID });
          ThreadWatcher.setToggler(toggler, !!data);
          $.on(toggler, 'click', ThreadWatcher.cb.toggle);
          // Add missing excerpt for threads added by Auto Watch
          if (data && (data.excerpt == null)) {
              return $.queueTask(() => {
                  return ThreadWatcher.update(siteID, boardID, threadID, { excerpt: Get.threadExcerpt(this.thread) });
              });
          }
      },
      catalogNode() {
          if (ThreadWatcher.isWatched(this.thread)) {
              $.addClass(this.nodes.root, 'watched');
          }
          $.on(this.nodes.root, 'mousedown click', e => {
              if ((e.button !== 0) || !e.altKey)
                  return;
              if (e.type === 'click')
                  ThreadWatcher.toggle(this.thread, true);
              e.preventDefault();
          });
      }, // Also on mousedown to prevent highlighting thumbnail in Firefox.
      addDialog() {
          if (!PageReady.isThisPageLegit()) {
              return;
          }
          ThreadWatcher.build();
          $.prepend(d.body, ThreadWatcher.dialog);
      },
      toggleWatcher() {
          $.toggleClass(ThreadWatcher.shortcut, 'disabled');
          return ThreadWatcher.dialog.hidden = !ThreadWatcher.dialog.hidden;
      },
      cb: {
          openAll() {
              if ($.hasClass(this, 'disabled'))
                  return;
              for (var a of $$('a.watcher-link', ThreadWatcher.list)) {
                  $.open(a.href);
              }
              $.event('CloseMenu');
          },
          openUnread() {
              if ($.hasClass(this, 'disabled'))
                  return;
              for (var a of $$('.replies-unread > a.watcher-link', ThreadWatcher.list)) {
                  $.open(a.href);
              }
              $.event('CloseMenu');
          },
          openDeads() {
              if ($.hasClass(this, 'disabled'))
                  return;
              for (var a of $$('.dead-thread.replies-unread > a.watcher-link', ThreadWatcher.list)) {
                  $.open(a.href);
              }
              $.event('CloseMenu');
          },
          clear() {
              if (!confirm("Delete ALL threads from watcher?"))
                  return;
              const ref = ThreadWatcher.getAll();
              for (let i = 0, len = ref.length; i < len; i++) {
                  const { siteID, boardID, threadID } = ref[i];
                  ThreadWatcher.db.delete({ siteID, boardID, threadID });
              }
              ThreadWatcher.refresh(true);
              $.event('CloseMenu');
          },
          pruneDeads() {
              if ($.hasClass(this, 'disabled'))
                  return;
              for (var { siteID, boardID, threadID, data } of ThreadWatcher.getAll()) {
                  if (data.isDead) {
                      ThreadWatcher.db.delete({ siteID, boardID, threadID });
                  }
              }
              ThreadWatcher.refresh(true);
              $.event('CloseMenu');
          },
          pruneReadDeads() {
              if ($.hasClass(this, 'disabled'))
                  return;
              for (var { siteID, boardID, threadID, data } of ThreadWatcher.getAll()) {
                  if (data.isDead && !data.unread) {
                      ThreadWatcher.db.delete({ siteID, boardID, threadID });
                  }
              }
              ThreadWatcher.refresh(true);
              $.event('CloseMenu');
          },
          dismiss() {
              for (var { siteID, boardID, threadID, data } of ThreadWatcher.getAll()) {
                  if (data.quotingYou) {
                      ThreadWatcher.update(siteID, boardID, threadID, { dismiss: data.quotingYou || 0 });
                  }
              }
              $.event('CloseMenu');
          },
          toggle() {
              const { thread } = Get.postFromNode(this);
              ThreadWatcher.toggle(thread, true);
          },
          rm() {
              const { siteID } = this.parentNode.dataset;
              const [boardID, threadID] = this.parentNode.dataset.fullID.split('.');
              ThreadWatcher.rm(siteID, boardID, +threadID, undefined, true);
          },
          post(e) {
              const { boardID, threadID, postID } = e.detail;
              const cb = PostRedirect.delay();
              if (postID === threadID) {
                  if (Conf['Auto Watch']) {
                      ThreadWatcher.addRaw(boardID, threadID, {}, cb, true);
                  }
              }
              else if (Conf['Auto Watch Reply']) {
                  ThreadWatcher.add((g.threads.get(boardID + '.' + threadID) || new Thread(threadID, g.boards[boardID] || new Board(boardID))), cb, true);
              }
          },
          onIndexUpdate(e) {
              const { db } = ThreadWatcher;
              const siteID = g.SITE.ID;
              const boardID = g.BOARD.ID;
              let nKilled = 0;
              for (var threadID in db.data[siteID].boards[boardID]) {
                  // Don't prune threads that have yet to appear in index.
                  var data = db.data[siteID].boards[boardID][threadID];
                  if (!data?.isDead && !e.detail.threads.includes(`${boardID}.${threadID}`)) {
                      if (!e.detail.threads.some(fullID => +fullID.split('.')[1] > threadID)) {
                          continue;
                      }
                      if (Conf['Auto Prune'] || !(data && (typeof data === 'object'))) { // corrupt data
                          db.delete({ boardID, threadID });
                          nKilled++;
                      }
                      else {
                          ThreadWatcher.fetchStatus({ siteID, boardID, threadID, data });
                      }
                  }
              }
              if (nKilled) {
                  return ThreadWatcher.refresh();
              }
          },
          onThreadRefresh(e) {
              const thread = g.threads.get(e.detail.threadID);
              if (!e.detail[404] || !ThreadWatcher.isWatched(thread)) {
                  return;
              }
              // Update dead status.
              ThreadWatcher.add(thread);
          }
      },
      requests: [],
      fetched: 0,
      fetch(url, { siteID, force }, args, cb) {
          if (ThreadWatcher.requests.length === 0) {
              ThreadWatcher.status.textContent = '...';
              $.addClass(ThreadWatcher.refreshButton, 'spin');
          }
          const onloadend = function () {
              if (this.finished) {
                  return;
              }
              this.finished = true;
              ThreadWatcher.fetched++;
              if (ThreadWatcher.fetched === ThreadWatcher.requests.length) {
                  ThreadWatcher.clearRequests();
              }
              else {
                  ThreadWatcher.status.textContent = `${Math.round((ThreadWatcher.fetched / ThreadWatcher.requests.length) * 100)}%`;
              }
              return cb.apply(this, args);
          };
          const ajax = siteID === g.SITE.ID ? $.ajax : CrossOrigin.ajax;
          if (force) {
              delete $.lastModified.ThreadWatcher?.[url];
          }
          const req = $.whenModified(url, 'ThreadWatcher', onloadend, { timeout: MINUTE, ajax });
          ThreadWatcher.requests.push(req);
      },
      clearRequests() {
          ThreadWatcher.requests = [];
          ThreadWatcher.fetched = 0;
          ThreadWatcher.status.textContent = '';
          $.rmClass(ThreadWatcher.refreshButton, 'spin');
      },
      abort() {
          delete ThreadWatcher.syncing;
          for (var req of ThreadWatcher.requests) {
              if (!req.finished) {
                  req.finished = true;
                  req.abort();
              }
          }
          ThreadWatcher.clearRequests();
      },
      initLastModified() {
          const lm = ($.lastModified.ThreadWatcher || ($.lastModified.ThreadWatcher = dict()));
          for (var siteID in ThreadWatcher.dbLM.data) {
              var boards = ThreadWatcher.dbLM.data[siteID];
              for (var boardID in boards.boards) {
                  var data = boards.boards[boardID];
                  if (ThreadWatcher.db.get({ siteID, boardID })) {
                      for (var url in data) {
                          var date = data[url];
                          lm[url] = date;
                      }
                  }
                  else {
                      ThreadWatcher.dbLM.delete({ siteID, boardID });
                  }
              }
          }
      },
      fetchAuto() {
          let middle;
          clearTimeout(ThreadWatcher.timeout);
          if (!Conf['Auto Update Thread Watcher']) {
              return;
          }
          const { db } = ThreadWatcher;
          const interval = Conf['Show Page'] || (ThreadWatcher.unreadEnabled && Conf['Show Unread Count']) ? 5 * MINUTE : 2 * HOUR;
          const now = Date.now();
          if ((now - interval >= ((middle = db.data.lastChecked || 0)) || middle > now) && !d.hidden && !!d.hasFocus()) {
              ThreadWatcher.fetchAllStatus(interval);
          }
          return ThreadWatcher.timeout = setTimeout(ThreadWatcher.fetchAuto, interval);
      },
      buttonFetchAll() {
          if (ThreadWatcher.syncing || ThreadWatcher.requests.length) {
              return ThreadWatcher.abort();
          }
          else {
              return ThreadWatcher.fetchAllStatus();
          }
      },
      fetchAllStatus(interval = 0) {
          ThreadWatcher.status.textContent = '...';
          $.addClass(ThreadWatcher.refreshButton, 'spin');
          ThreadWatcher.syncing = true;
          const dbs = [ThreadWatcher.db, ThreadWatcher.unreaddb, QuoteYou.db].filter(x => x);
          let n = 0;
          return dbs.map((dbi) => dbi.forceSync(function () {
              if ((++n) === dbs.length) {
                  let middle;
                  if (!ThreadWatcher.syncing) {
                      return;
                  } // aborted
                  delete ThreadWatcher.syncing;
                  if (0 > (middle = Date.now() - (ThreadWatcher.db.data.lastChecked || 0)) || middle >= interval) { // not checked in another tab
                      // XXX On vichan boards, last_modified field of threads.json does not account for sage posts.
                      // Occasionally check replies field of catalog.json to find these posts.
                      let middle1;
                      const { db } = ThreadWatcher;
                      const now = Date.now();
                      const deep = !(now - (2 * HOUR) < ((middle1 = db.data.lastChecked2 || 0)) && middle1 <= now);
                      const boards = ThreadWatcher.getAll(true);
                      for (var board of boards) {
                          ThreadWatcher.fetchBoard(board, deep);
                      }
                      db.setLastChecked();
                      if (deep) {
                          db.setLastChecked('lastChecked2');
                      }
                  }
                  if (ThreadWatcher.fetched === ThreadWatcher.requests.length) {
                      return ThreadWatcher.clearRequests();
                  }
              }
          }));
      },
      fetchBoard(board, deep) {
          if (!board.some(thread => !thread.data.isDead)) {
              return;
          }
          let force = false;
          for (var thread of board) {
              var { data } = thread;
              if (!data.isDead && (data.last !== -1)) {
                  if (Conf['Show Page'] && (data.page == null)) {
                      force = true;
                  }
                  if ((data.modified == null)) {
                      force = (thread.force = true);
                  }
              }
          }
          const { siteID, boardID } = board[0];
          const site = g.sites[siteID];
          if (!site) {
              return;
          }
          const urlF = deep && site.threadModTimeIgnoresSage ? 'catalogJSON' : 'threadsListJSON';
          const url = site.urls[urlF]?.({ siteID, boardID });
          if (!url) {
              return;
          }
          return ThreadWatcher.fetch(url, { siteID, force }, [board, url], ThreadWatcher.parseBoard);
      },
      parseBoard(board, url) {
          let page, thread;
          if (this.status !== 200) {
              return;
          }
          const { siteID, boardID } = board[0];
          const lmDate = this.getResponseHeader('Last-Modified');
          ThreadWatcher.dbLM.extend({ siteID, boardID, val: $.item(url, lmDate) });
          const threads = dict();
          let pageLength = 0;
          let nThreads = 0;
          let oldest = null;
          try {
              pageLength = this.response[0]?.threads.length || 0;
              for (let i = 0; i < this.response.length; i++) {
                  page = this.response[i];
                  for (var item of page.threads) {
                      threads[item.no] = {
                          page: i + 1,
                          index: nThreads,
                          modified: item.last_modified,
                          replies: item.replies
                      };
                      nThreads++;
                      if ((oldest == null) || (item.no < oldest)) {
                          oldest = item.no;
                      }
                  }
              }
          }
          catch (error) {
              for (thread of board) {
                  ThreadWatcher.fetchStatus(thread);
              }
          }
          for (thread of board) {
              var { threadID, data } = thread;
              if (threads[threadID]) {
                  var index, modified, replies;
                  ({ page, index, modified, replies } = threads[threadID]);
                  if (Conf['Show Page']) {
                      var lastPage = g.sites[siteID].isPrunedByAge?.({ siteID, boardID }) ?
                          threadID === oldest
                          :
                              index >= (nThreads - pageLength);
                      ThreadWatcher.update(siteID, boardID, threadID, { page, lastPage });
                  }
                  if (ThreadWatcher.unreadEnabled && Conf['Show Unread Count']) {
                      if ((modified !== data.modified) || ((replies != null) && (replies !== data.replies))) {
                          (thread.newData || (thread.newData = {})).modified = modified;
                          ThreadWatcher.fetchStatus(thread);
                      }
                  }
              }
              else {
                  ThreadWatcher.fetchStatus(thread);
              }
          }
      },
      fetchStatus(thread) {
          const { siteID, boardID, threadID, data, force } = thread;
          const url = g.sites[siteID]?.urls.threadJSON?.({ siteID, boardID, threadID });
          if (!url) {
              return;
          }
          if (data.isDead && !force) {
              return;
          }
          if (data.last === -1) {
              return;
          } // 404 or no JSON API
          return ThreadWatcher.fetch(url, { siteID, force }, [thread], ThreadWatcher.parseStatus);
      },
      parseStatus(thread, isArchiveURL) {
          let isDead, last;
          let { siteID, boardID, threadID, data, newData, force } = thread;
          const site = g.sites[siteID];
          if ((this.status === 200) && this.response) {
              let isArchived;
              last = this.response.posts[this.response.posts.length - 1].no;
              const replies = this.response.posts.length - 1;
              isDead = (isArchived = !!(this.response.posts[0].archived || isArchiveURL));
              if (isDead && Conf['Auto Prune']) {
                  ThreadWatcher.rm(siteID, boardID, threadID);
                  return;
              }
              if ((last === data.last) && (isDead === data.isDead) && (isArchived === data.isArchived)) {
                  return;
              }
              const lastReadPost = ThreadWatcher.unreaddb.get({ siteID, boardID, threadID, defaultValue: 0 });
              let unread = data.unread || 0;
              let quotingYou = data.quotingYou || 0;
              const youOP = !!QuoteYou.db?.get({ siteID, boardID, threadID, postID: threadID });
              for (var postObj of this.response.posts) {
                  if ((postObj.no <= (data.last || 0)) || (postObj.no <= lastReadPost)) {
                      continue;
                  }
                  if (QuoteYou.db?.get({ siteID, boardID, threadID, postID: postObj.no })) {
                      continue;
                  }
                  var quotesYou = false;
                  if (!Conf['Require OP Quote Link'] && youOP) {
                      quotesYou = true;
                  }
                  else if (QuoteYou.db && postObj.com) {
                      var match;
                      var regexp = site.regexp.quotelinkHTML;
                      regexp.lastIndex = 0;
                      while (match = regexp.exec(postObj.com)) {
                          if (QuoteYou.db.get({
                              siteID,
                              boardID: match[1] ? encodeURIComponent(match[1]) : boardID,
                              threadID: match[2] || threadID,
                              postID: match[3] || match[2] || threadID
                          })) {
                              quotesYou = true;
                              break;
                          }
                      }
                  }
                  if (!unread || (!quotingYou && quotesYou)) {
                      if (Filter.isHidden(site.Build.parseJSON(postObj, { siteID, boardID }))) {
                          continue;
                      }
                  }
                  unread++;
                  if (quotesYou) {
                      quotingYou = postObj.no;
                  }
              }
              if (!newData) {
                  newData = {};
              }
              $.extend(newData, { last, replies, isDead, isArchived, unread, quotingYou });
              return ThreadWatcher.update(siteID, boardID, threadID, newData);
          }
          else if (this.status === 404) {
              const archiveURL = g.sites[siteID]?.urls.archivedThreadJSON?.({ siteID, boardID, threadID });
              if (!isArchiveURL && archiveURL) {
                  return ThreadWatcher.fetch(archiveURL, { siteID, force }, [thread, true], ThreadWatcher.parseStatus);
              }
              else if (site.mayLackJSON && (data.last == null)) {
                  return ThreadWatcher.update(siteID, boardID, threadID, { last: -1 });
              }
              else {
                  return ThreadWatcher.update(siteID, boardID, threadID, { isDead: true });
              }
          }
      },
      getAll(groupByBoard) {
          const all = [];
          for (var siteID in ThreadWatcher.db.data) {
              var boards = ThreadWatcher.db.data[siteID];
              for (var boardID in boards.boards) {
                  var cont;
                  var threads = boards.boards[boardID];
                  if (Conf['Current Board'] && ((siteID !== g.SITE.ID) || (boardID !== g.BOARD.ID))) {
                      continue;
                  }
                  if (groupByBoard) {
                      all.push((cont = []));
                  }
                  for (var threadID in threads) {
                      var data = threads[threadID];
                      if (data && (typeof data === 'object')) {
                          (groupByBoard ? cont : all).push({ siteID, boardID, threadID, data });
                      }
                  }
              }
          }
          return all;
      },
      makeLine(siteID, boardID, threadID, data) {
          let page;
          const x = $.el('a', {
              textContent: '✕',
              href: 'javascript:;'
          });
          Icon.set(x, 'xmark');
          $.on(x, 'click', ThreadWatcher.cb.rm);
          let { excerpt, isArchived } = data;
          if (!excerpt) {
              excerpt = `/${boardID}/ - No.${threadID}`;
          }
          if (Conf['Show Site Prefix']) {
              excerpt = ThreadWatcher.prefixes[siteID] + excerpt;
          }
          const link = $.el('a', {
              href: g.sites[siteID]?.urls.thread({ siteID, boardID, threadID }, isArchived) || '',
              title: excerpt,
              className: 'watcher-link'
          });
          if (Conf['Show Page'] && (data.page != null)) {
              page = $.el('span', {
                  textContent: `[${data.page}]`,
                  className: 'watcher-page'
              });
              $.add(link, page);
          }
          if (ThreadWatcher.unreadEnabled && Conf['Show Unread Count'] && (data.unread != null)) {
              const count = $.el('span', {
                  textContent: `(${data.unread})`,
                  className: 'watcher-unread'
              });
              $.add(link, count);
          }
          const title = $.el('span', {
              textContent: excerpt,
              className: 'watcher-title'
          });
          $.add(link, title);
          const div = $.el('div');
          const fullID = `${boardID}.${threadID}`;
          div.dataset.fullID = fullID;
          div.dataset.siteID = siteID;
          if ((g.VIEW === 'thread') && (fullID === `${g.BOARD}.${g.THREADID}`)) {
              $.addClass(div, 'current');
          }
          if (data.isDead) {
              $.addClass(div, 'dead-thread');
          }
          if (Conf['Show Page']) {
              if (data.lastPage) {
                  $.addClass(div, 'last-page');
              }
              if (data.page != null) {
                  div.dataset.page = data.page;
              }
          }
          if (ThreadWatcher.unreadEnabled && Conf['Show Unread Count']) {
              if (data.unread === 0) {
                  $.addClass(div, 'replies-read');
              }
              if (data.unread) {
                  $.addClass(div, 'replies-unread');
              }
              if ((data.quotingYou || 0) > (data.dismiss || 0)) {
                  $.addClass(div, 'replies-quoting-you');
              }
          }
          $.add(div, [x, $.tn(' '), link]);
          return div;
      },
      setPrefixes(threads) {
          const prefixes = dict();
          for (var { siteID } of threads) {
              if (siteID in prefixes) {
                  continue;
              }
              var len = 0;
              var prefix = '';
              var conflicts = Object.keys(prefixes);
              while (conflicts.length > 0) {
                  len++;
                  prefix = siteID.slice(0, len);
                  var conflicts2 = [];
                  for (var siteID2 of conflicts) {
                      if (siteID2.slice(0, len) === prefix) {
                          conflicts2.push(siteID2);
                      }
                      else if (prefixes[siteID2].length < len) {
                          prefixes[siteID2] = siteID2.slice(0, len);
                      }
                  }
                  conflicts = conflicts2;
              }
              prefixes[siteID] = prefix;
          }
          return ThreadWatcher.prefixes = prefixes;
      },
      build() {
          const nodes = [];
          const threads = ThreadWatcher.getAll();
          ThreadWatcher.setPrefixes(threads);
          for (var { siteID, boardID, threadID, data } of threads) {
              // Add missing excerpt for threads added by Auto Watch
              var thread;
              if ((data.excerpt == null) && (siteID === g.SITE.ID) && (thread = g.threads.get(`${boardID}.${threadID}`)) && thread.OP) {
                  ThreadWatcher.db.extend({ boardID, threadID, val: { excerpt: Get.threadExcerpt(thread) } });
              }
              nodes.push(ThreadWatcher.makeLine(siteID, boardID, threadID, data));
          }
          const { list } = ThreadWatcher;
          $.rmAll(list);
          $.add(list, nodes);
          ThreadWatcher.refreshIcon();
      },
      refresh(manual) {
          ThreadWatcher.build();
          g.threads.forEach(function (thread) {
              const isWatched = ThreadWatcher.isWatched(thread);
              if (thread.OP) {
                  for (var post of [thread.OP, ...thread.OP.clones]) {
                      var toggler;
                      if (toggler = $('.watch-thread-link', post.nodes.info)) {
                          ThreadWatcher.setToggler(toggler, isWatched);
                      }
                  }
              }
              if (thread.catalogView) {
                  return thread.catalogView.nodes.root.classList.toggle('watched', isWatched);
              }
          });
          if (Conf['Pin Watched Threads']) {
              return $.event('SortIndex', { deferred: !(manual && Conf['Index Mode'] === 'catalog') });
          }
      },
      refreshIcon() {
          for (var className of ['replies-unread', 'replies-quoting-you']) {
              ThreadWatcher.shortcut.classList.toggle(className, !!$(`.${className}`, ThreadWatcher.dialog));
          }
      },
      update(siteID, boardID, threadID, newData) {
          let data, key, line, val;
          if (!(data = ThreadWatcher.db?.get({ siteID, boardID, threadID }))) {
              return;
          }
          if (newData.isDead && Conf['Auto Prune']) {
              ThreadWatcher.rm(siteID, boardID, threadID);
              return;
          }
          if (newData.isDead || (newData.last === -1)) {
              for (key of ['isArchived', 'page', 'lastPage', 'unread', 'quotingyou']) {
                  if (!(key in newData)) {
                      newData[key] = undefined;
                  }
              }
          }
          if ((newData.last != null) && (newData.last < data.last)) {
              newData.modified = undefined;
          }
          let n = 0;
          for (key in newData) {
              val = newData[key];
              if (data[key] !== val) {
                  n++;
              }
          }
          if (!n) {
              return;
          }
          ThreadWatcher.db.extend({ siteID, boardID, threadID, val: newData });
          if (line = $(`#watched-threads > [data-site-i-d='${siteID}'][data-full-i-d='${boardID}.${threadID}']`, ThreadWatcher.dialog)) {
              const newLine = ThreadWatcher.makeLine(siteID, boardID, threadID, data);
              $.replace(line, newLine);
              ThreadWatcher.refreshIcon();
          }
          else {
              ThreadWatcher.refresh();
          }
      },
      set404(boardID, threadID, cb) {
          let data;
          if (!(data = ThreadWatcher.db?.get({ boardID, threadID }))) {
              return cb();
          }
          if (Conf['Auto Prune']) {
              ThreadWatcher.db.delete({ boardID, threadID });
              return cb();
          }
          if (data.isDead && !((data.isArchived != null) || (data.page != null) || (data.lastPage != null) || (data.unread != null) || (data.quotingYou != null))) {
              return cb();
          }
          return ThreadWatcher.db.extend({ boardID, threadID, val: { isDead: true, isArchived: undefined, page: undefined, lastPage: undefined, unread: undefined, quotingYou: undefined } }, cb);
      },
      toggle(thread, manual) {
          const siteID = g.SITE.ID;
          const boardID = thread.board.ID;
          const threadID = thread.ID;
          if (ThreadWatcher.db.get({ boardID, threadID })) {
              ThreadWatcher.rm(siteID, boardID, threadID, undefined, manual);
          }
          else {
              ThreadWatcher.add(thread, undefined, manual);
          }
      },
      add(thread, cb, manual) {
          const data = {};
          const siteID = g.SITE.ID;
          const boardID = thread.board.ID;
          const threadID = thread.ID;
          if (thread.isDead) {
              if (Conf['Auto Prune'] && ThreadWatcher.db.get({ boardID, threadID })) {
                  ThreadWatcher.rm(siteID, boardID, threadID, cb);
                  return;
              }
              data.isDead = true;
          }
          if (thread.OP) {
              data.excerpt = Get.threadExcerpt(thread);
          }
          return ThreadWatcher.addRaw(boardID, threadID, data, cb, manual);
      },
      addRaw(boardID, threadID, data, cb, manual) {
          const oldData = ThreadWatcher.db.get({ boardID, threadID, defaultValue: dict() });
          delete oldData.last;
          delete oldData.modified;
          $.extend(oldData, data);
          ThreadWatcher.db.set({ boardID, threadID, val: oldData }, cb);
          ThreadWatcher.refresh(manual);
          const thread = { siteID: g.SITE.ID, boardID, threadID, data, force: true };
          if (Conf['Show Page'] && !data.isDead) {
              ThreadWatcher.fetchBoard([thread]);
          }
          else if (ThreadWatcher.unreadEnabled && Conf['Show Unread Count']) {
              ThreadWatcher.fetchStatus(thread);
          }
      },
      rm(siteID, boardID, threadID, cb, manual) {
          ThreadWatcher.db.delete({ siteID, boardID, threadID }, cb);
          ThreadWatcher.refresh(manual);
      },
      menu: {
          init() {
              if (!Conf['Thread Watcher']) {
                  return;
              }
              const menu = (this.menu = new UI.Menu('thread watcher'));
              $.on($('.menu-button', ThreadWatcher.dialog), 'click', function (e) {
                  return menu.toggle(e, this, ThreadWatcher);
              });
              this.addMenuEntries();
          },
          addHeaderMenuEntry() {
              if (g.VIEW !== 'thread') {
                  return;
              }
              const entryEl = $.el('a', { href: 'javascript:;' });
              Header.menu.addEntry({
                  el: entryEl,
                  order: 60,
                  open() {
                      const [addClass, rmClass, text] = !!ThreadWatcher.db.get({ boardID: g.BOARD.ID, threadID: g.THREADID }) ?
                          ['unwatch-thread', 'watch-thread', 'Unwatch thread']
                          :
                              ['watch-thread', 'unwatch-thread', 'Watch thread'];
                      $.addClass(entryEl, addClass);
                      $.rmClass(entryEl, rmClass);
                      entryEl.textContent = text;
                      return true;
                  }
              });
              return $.on(entryEl, 'click', () => ThreadWatcher.toggle(g.threads.get(`${g.BOARD}.${g.THREADID}`), true));
          },
          addMenuEntries() {
              const toggleDisabledDead = function () {
                  this.el.classList.toggle('disabled', !$('.dead-thread', ThreadWatcher.list));
                  return true;
              };
              const entries = [
                  // `Open all` entry
                  {
                      text: 'Open all threads',
                      cb: ThreadWatcher.cb.openAll,
                      open() {
                          this.el.classList.toggle('disabled', !ThreadWatcher.list.firstElementChild);
                          return true;
                      }
                  },
                  {
                      text: 'Clear all threads',
                      cb: ThreadWatcher.cb.clear,
                      open() {
                          this.el.classList.toggle('disabled', !ThreadWatcher.list.firstElementChild);
                          return true;
                      }
                  },
                  // `Open Unread` entry
                  {
                      text: 'Open unread threads',
                      cb: ThreadWatcher.cb.openUnread,
                      open() {
                          this.el.classList.toggle('disabled', !$('.replies-unread', ThreadWatcher.list));
                          return true;
                      }
                  },
                  // `Open unread dead threads` entry
                  {
                      text: 'Open unread dead threads',
                      cb: ThreadWatcher.cb.openDeads,
                      open: toggleDisabledDead,
                  },
                  // `Prune all dead threads` entry
                  {
                      text: 'Prune all dead threads',
                      cb: ThreadWatcher.cb.pruneDeads,
                      open: toggleDisabledDead,
                  },
                  // `Prune read dead threads` entry
                  {
                      text: 'Prune read dead threads',
                      cb: ThreadWatcher.cb.pruneReadDeads,
                      open: toggleDisabledDead,
                  },
                  // `Dismiss posts quoting you` entry
                  {
                      text: 'Dismiss posts quoting you',
                      title: 'Unhighlight the thread watcher icon and threads until there are new replies quoting you.',
                      cb: ThreadWatcher.cb.dismiss,
                      open() {
                          this.el.classList.toggle('disabled', !$.hasClass(ThreadWatcher.shortcut, 'replies-quoting-you'));
                          return true;
                      }
                  },
              ];
              for (var { text, title, cb, open } of entries) {
                  var entry = {
                      el: $.el('a', {
                          textContent: text,
                          href: 'javascript:;'
                      })
                  };
                  if (title) {
                      entry.el.title = title;
                  }
                  $.on(entry.el, 'click', cb);
                  entry.open = open.bind(entry);
                  this.menu.addEntry(entry);
              }
              // Settings checkbox entries:
              for (var name in Config.threadWatcher) {
                  var conf = Config.threadWatcher[name];
                  this.addCheckbox(name, conf[1]);
              }
          },
          addCheckbox(name, desc) {
              const entry = {
                  type: 'thread watcher',
                  el: UI.checkbox(name, name.replace(' Thread Watcher', ''))
              };
              entry.el.title = desc;
              const input = entry.el.firstElementChild;
              if ((name === 'Show Unread Count') && !ThreadWatcher.unreadEnabled) {
                  input.disabled = true;
                  $.addClass(entry.el, 'disabled');
                  entry.el.title += '\n[Remember Last Read Post is disabled.]';
              }
              $.on(input, 'change', $.cb.checked);
              if (['Current Board', 'Show Page', 'Show Unread Count', 'Show Site Prefix'].includes(name))
                  $.on(input, 'change', () => ThreadWatcher.refresh());
              if (['Show Page', 'Show Unread Count', 'Auto Update Thread Watcher'].includes(name))
                  $.on(input, 'change', ThreadWatcher.fetchAuto);
              return this.menu.addEntry(entry);
          }
      }
  };

  const parseArchivePost = (data) => {
    // https://github.com/eksopl/asagi/blob/v0.4.0b74/src/main/java/net/easymodo/asagi/YotsubaAbstract.java#L82-L129
    // https://github.com/FoolCode/FoolFuuka/blob/800bd090835489e7e24371186db6e336f04b85c0/src/Model/Comment.php#L368-L428
    // https://github.com/bstats/b-stats/blob/6abe7bffaf6e5f523498d760e54b110df5331fbb/inc/classes/Yotsuba.php#L157-L168
    let comment = (data.comment || '').split(/(\n|\[\/?(?:b|spoiler|code|moot|banned|fortune(?: color="#\w+")?|i|red|green|blue)\])/);
    comment = comment.map((text, i) => {
      if ((i % 2) === 1) {
        var tag = Fetcher.archiveTags[text.replace(/\ .*\]/, ']')];
        return (typeof tag === 'function') ? tag(text) : tag;
      } else {
        var greentext = text[0] === '>';
        text = text
          .replace(/(\[\/?[a-z]+):lit(\])/g, '$1$2')
          .split(/(>>(?:>\/[a-z\d]+\/)?\d+)/g)
          .map((text2, j) => ((j % 2) ? `<span class="deadlink">${E(text2)}</span>` : E(text2)))
          .join('');
        return { innerHTML: (greentext ? `<span class="quote">${text}</span>` : text) };
      }
    });
    comment = { innerHTML: E.cat(comment), [isEscaped]: true };
    const o = {
      ID: data.num,
      threadID: data.thread_num,
      boardID: data.board.shortname,
      isReply: data.num !== data.thread_num,
      fileDeleted: false,
      info: {
        subject: data.title,
        email: data.email,
        name: data.name || '',
        tripcode: data.trip,
        capcode: (() => {
          switch (data.capcode) {
            // https://github.com/pleebe/FoolFuuka/blob/bf4224eed04637a4d0bd4411c2bf5f9945dfec0b/assets/themes/foolz/foolfuuka-theme-fuuka/src/Partial/Board.php#L77
            case 'M': return 'Mod';
            case 'A': return 'Admin';
            case 'D': return 'Developer';
            case 'V': return 'Verified';
            case 'F': return 'Founder';
            case 'G': return 'Manager';
          }
        })(),
        uniqueID: data.poster_hash,
        flagCode: data.poster_country,
        flagCodeTroll: data.troll_country_code,
        flag: data.poster_country_name || data.troll_country_name,
        dateUTC: data.timestamp,
        dateText: data.fourchan_date,
        commentHTML: comment,
      },
      file: null,
      extra: null,
    };
    if (o.info.capcode) {
      delete o.info.uniqueID;
    }
    if (data.media && !!+data.media.banned) {
      o.fileDeleted = true;
    } else if (data.media?.media_filename) {
      let { thumb_link } = data.media;
      // Fix URLs missing origin
      if (thumb_link?.[0] === '/') {
        thumb_link = url.split('/', 3).join('/') + thumb_link;
      }
      if (!Redirect.securityCheck(thumb_link)) {
        thumb_link = '';
      }
      let media_link = Redirect.to('file', { boardID: o.boardID, filename: data.media.media_orig });
      if (!Redirect.securityCheck(media_link)) {
        media_link = '';
      }
      o.file = {
        name: data.media.media_filename,
        url: media_link ||
          (o.boardID === 'f' ?
            `${location.protocol}//${ImageHost.flashHost()}/${o.boardID}/${encodeURIComponent(E(data.media.media_filename))}`
            :
              `${location.protocol}//${ImageHost.host()}/${o.boardID}/${data.media.media_orig}`),
        height: data.media.media_h,
        width: data.media.media_w,
        MD5: data.media.media_hash,
        size: $.bytesToString(data.media.media_size),
        thumbURL: thumb_link || `${location.protocol}//${ImageHost.thumbHost()}/${o.boardID}/${data.media.preview_orig}`,
        theight: data.media.preview_h,
        twidth: data.media.preview_w,
        isSpoiler: data.media.spoiler === '1'
      };
      if (!/\.pdf$/.test(o.file.url)) {
        o.file.dimensions = `${o.file.width}x${o.file.height}`;
      }
      if ((o.boardID === 'f') && data.media.exif) {
        o.file.tag = JSON.parse(data.media.exif).Tag;
      }
    }
    o.extra = dict();
    const board = g.boards[o.boardID] ||
      new Board(o.boardID);
    const thread = g.threads.get(`${o.boardID}.${o.threadID}`) ||
      new Thread(o.threadID, board);
    const post = new Post(g.SITE.Build.post(o), thread, board);
    post.resurrect();
    post.markAsFromArchive();
    if (post.file) {
      post.file.thumbURL = o.file.thumbURL;
    }
    Main.callbackNodes('Post', [post]);
    return post;
  };

  var ReplyPruning = {
      init() {
          if ((g.VIEW !== 'thread') || !Conf['Reply Pruning']) {
              return;
          }
          this.container = $.frag();
          this.summary = $.el('span', {
              hidden: true,
              className: 'summary'
          });
          this.summary.style.cursor = 'pointer';
          $.on(this.summary, 'click', () => {
              this.inputs.enabled.checked = !this.inputs.enabled.checked;
              $.event('change', null, this.inputs.enabled);
          });
          const label = UI.checkbox('Prune Replies', 'Show Last', Conf['Prune All Threads']);
          const el = $.el('span', { title: 'Maximum number of replies to show.' }, { innerHTML: " <input type=\"number\" name=\"Max Replies\" min=\"0\" step=\"1\" value=\"" + E(Conf["Max Replies"]) + "\" class=\"field\">" });
          $.prepend(el, label);
          this.inputs = {
              enabled: label.firstElementChild,
              replies: el.lastElementChild
          };
          this.setEnabled.call(this.inputs.enabled);
          $.on(this.inputs.enabled, 'change', this.setEnabled);
          $.on(this.inputs.replies, 'change', $.cb.value);
          Header.menu.addEntry({
              el,
              order: 190
          });
          Callbacks.Thread.push({
              name: 'Reply Pruning',
              cb: this.node
          });
      },
      position: 0,
      hidden: 0,
      hiddenFiles: 0,
      total: 0,
      totalFiles: 0,
      setEnabled() {
          const other = QuoteThreading.input;
          if (this.checked && other?.checked) {
              other.checked = false;
              $.event('change', null, other);
          }
          return ReplyPruning.active = this.checked;
      },
      node() {
          let middle;
          ReplyPruning.thread = this;
          if (this.isSticky) {
              ReplyPruning.active = (ReplyPruning.inputs.enabled.checked = true);
              if (QuoteThreading.input) {
                  // Disable Quote Threading for this thread but don't save the setting.
                  Conf['Thread Quotes'] = (QuoteThreading.input.checked = false);
              }
          }
          this.posts.forEach(function (post) {
              if (post.isReply) {
                  ReplyPruning.total++;
                  if (post.file) {
                      return ReplyPruning.totalFiles++;
                  }
              }
          });
          // If we're linked to a post that we would hide, don't hide the posts in the first place.
          if (ReplyPruning.active &&
              /^#p\d+$/.test(location.hash) &&
              (1 <= (middle = this.posts.keys.indexOf(location.hash.slice(2))) && middle < 1 + Math.max(ReplyPruning.total - +Conf["Max Replies"], 0))) {
              ReplyPruning.active = (ReplyPruning.inputs.enabled.checked = false);
          }
          $.after(this.OP.nodes.root, ReplyPruning.summary);
          $.on(ReplyPruning.inputs.enabled, 'change', ReplyPruning.update);
          $.on(ReplyPruning.inputs.replies, 'change', ReplyPruning.update);
          $.on(d, 'ThreadUpdate', ReplyPruning.updateCount);
          $.on(d, 'ThreadUpdate', ReplyPruning.update);
          ReplyPruning.update();
      },
      updateCount(e) {
          if (e.detail[404]) {
              return;
          }
          for (var fullID of e.detail.newPosts) {
              ReplyPruning.total++;
              if (g.posts.get(fullID).file) {
                  ReplyPruning.totalFiles++;
              }
          }
      },
      update() {
          let boardTop, node, post;
          const hidden1 = ReplyPruning.hidden;
          const hidden2 = ReplyPruning.active ?
              Math.max(ReplyPruning.total - +Conf["Max Replies"], 0) : 0;
          // Record position from bottom of document
          const oldPos = d.body.clientHeight - window.scrollY;
          const { posts } = ReplyPruning.thread;
          if (ReplyPruning.hidden < hidden2) {
              while ((ReplyPruning.hidden < hidden2) && (ReplyPruning.position < posts.keys.length)) {
                  post = posts.get(posts.keys[ReplyPruning.position++]);
                  if (post.isReply && !post.isFetchedQuote) {
                      while ((node = ReplyPruning.summary.nextSibling) && (node !== post.nodes.root)) {
                          $.add(ReplyPruning.container, node);
                      }
                      $.add(ReplyPruning.container, post.nodes.root);
                      ReplyPruning.hidden++;
                      if (post.file) {
                          ReplyPruning.hiddenFiles++;
                      }
                  }
              }
          }
          else if (ReplyPruning.hidden > hidden2) {
              const frag = $.frag();
              while ((ReplyPruning.hidden > hidden2) && (ReplyPruning.position > 0)) {
                  post = posts.get(posts.keys[--ReplyPruning.position]);
                  if (post.isReply && !post.isFetchedQuote) {
                      while ((node = ReplyPruning.container.lastChild) && (node !== post.nodes.root)) {
                          $.prepend(frag, node);
                      }
                      $.prepend(frag, post.nodes.root);
                      ReplyPruning.hidden--;
                      if (post.file) {
                          ReplyPruning.hiddenFiles--;
                      }
                  }
              }
              $.after(ReplyPruning.summary, frag);
              $.event('PostsInserted', null, ReplyPruning.summary.parentNode);
          }
          ReplyPruning.summary.textContent = ReplyPruning.active ?
              g.SITE.Build.summaryText('+', ReplyPruning.hidden, ReplyPruning.hiddenFiles)
              :
                  g.SITE.Build.summaryText('-', ReplyPruning.total, ReplyPruning.totalFiles);
          ReplyPruning.summary.hidden = (ReplyPruning.total <= +Conf["Max Replies"]);
          // Maintain position in thread when posts are added/removed above
          if ((hidden1 !== hidden2) && ((boardTop = Header.getTopOf($('.board'))) < 0)) {
              window.scrollBy(0, Math.max(d.body.clientHeight - oldPos, window.scrollY + boardTop) - window.scrollY);
          }
      }
  };

  /*
    <3 aeosynth
  */
  var QuoteThreading = {
    init() {
      if (!Conf['Quote Threading'] || (g.VIEW !== 'thread')) {
        return;
      }
      this.controls = $.el('label', { innerHTML: "<input id=\"threadingControl\" name=\"Thread Quotes\" type=\"checkbox\"> Threading" });
      this.threadNewLink = $.el('span', {
        className: 'brackets-wrap threadnewlink',
        hidden: true
      });
      $.extend(this.threadNewLink, { innerHTML: "<a href=\"javascript:;\">Thread New Posts</a>" });
      this.input = $('input', this.controls);
      this.input.checked = Conf['Thread Quotes'];
      $.on(this.input, 'change', this.setEnabled);
      $.on(this.input, 'change', this.rethread);
      $.on(this.threadNewLink.firstElementChild, 'click', this.rethread);
      $.on(d, '4chanXInitFinished', () => { this.ready = true; });
      Header.menu.addEntry(this.entry = {
        el: this.controls,
        order: 99
      });
      Callbacks.Thread.push({
        name: 'Quote Threading',
        cb: this.setThread
      });
      Callbacks.Post.push({
        name: 'Quote Threading',
        cb: this.node
      });
    },
    parent: dict(),
    children: dict(),
    inserted: dict(),
    toggleThreading() {
      this.setThreadingState(!Conf['Thread Quotes']);
    },
    setThreadingState(enabled) {
      this.input.checked = enabled;
      this.setEnabled.call(this.input);
      this.rethread.call(this.input);
    },
    setEnabled() {
      if (this.checked) {
        $.set('Prune All Threads', false);
        const other = ReplyPruning.inputs?.enabled;
        if (other?.checked) {
          other.checked = false;
          $.event('change', null, other);
        }
      }
      $.cb.checked.call(this);
    },
    setThread() {
      QuoteThreading.thread = this;
      $.asap((() => !Conf['Thread Updater'] || $('.navLinksBot > .updatelink')), function () {
        let navLinksBot;
        if (navLinksBot = $('.navLinksBot')) {
          $.add(navLinksBot, [$.tn(' '), QuoteThreading.threadNewLink]);
        }
      });
    },
    node() {
      let parent;
      if (this.isFetchedQuote || this.isClone || !this.isReply) {
        return;
      }
      const parents = new Set();
      let lastParent = null;
      for (var quote of this.quotes) {
        if ((parent = g.posts.get(quote))) {
          if (!parent.isFetchedQuote && parent.isReply && (parent.ID < this.ID)) {
            parents.add(parent.ID);
            if (!lastParent || (parent.ID > lastParent.ID)) {
              lastParent = parent;
            }
          }
        }
      }
      if (!lastParent)
        return;
      let ancestor = lastParent;
      while ((ancestor = QuoteThreading.parent[ancestor.fullID])) {
        parents.delete(ancestor.ID);
      }
      if (parents.size === 1) {
        QuoteThreading.parent[this.fullID] = lastParent;
      }
    },
    descendants(post) {
      let children;
      let posts = [post];
      if (children = QuoteThreading.children[post.fullID]) {
        for (var child of children) {
          posts = posts.concat(QuoteThreading.descendants(child));
        }
      }
      return posts;
    },
    insert(post) {
      let parent, x;
      if (!(Conf['Thread Quotes'] &&
        (parent = QuoteThreading.parent[post.fullID]) &&
        !QuoteThreading.inserted[post.fullID])) {
        return false;
      }
      const descendants = QuoteThreading.descendants(post);
      if (!Unread.posts.has(parent.ID)) {
        if ((function () { for (var x of descendants) {
          if (Unread.posts.has(x.ID)) {
            return true;
          }
        } })()) {
          QuoteThreading.threadNewLink.hidden = false;
          return false;
        }
      }
      const { order } = Unread;
      const children = (QuoteThreading.children[parent.fullID] || (QuoteThreading.children[parent.fullID] = []));
      const threadContainer = parent.nodes.threadContainer || $.el('div', { className: 'threadContainer' });
      const nodes = [post.nodes.root];
      if (post.nodes.threadContainer) {
        nodes.push(post.nodes.threadContainer);
      }
      let i = children.length;
      for (let j = children.length - 1; j >= 0; j--) {
        var child = children[j];
        if (child.ID >= post.ID) {
          i--;
        }
      }
      if (i !== children.length) {
        const next = children[i];
        for (x of descendants) {
          order.before(order[next.ID], order[x.ID]);
        }
        children.splice(i, 0, post);
        $.before(next.nodes.root, nodes);
      } else {
        let prev2;
        let prev = parent;
        while ((prev2 = QuoteThreading.children[prev.fullID]) && prev2.length) {
          prev = prev2[prev2.length - 1];
        }
        for (let k = descendants.length - 1; k >= 0; k--) {
          x = descendants[k];
          order.after(order[prev.ID], order[x.ID]);
        }
        children.push(post);
        $.add(threadContainer, nodes);
      }
      QuoteThreading.inserted[post.fullID] = true;
      if (!parent.nodes.threadContainer) {
        parent.nodes.threadContainer = threadContainer;
        $.addClass(parent.nodes.root, 'threadOP');
        $.after(parent.nodes.root, threadContainer);
      }
      return true;
    },
    rethread() {
      if (!QuoteThreading.ready) {
        return;
      }
      const { thread } = QuoteThreading;
      const { posts } = thread;
      QuoteThreading.threadNewLink.hidden = true;
      if (Conf['Thread Quotes']) {
        posts.forEach(QuoteThreading.insert);
      } else {
        const nodes = [];
        Unread.order = new RandomAccessList();
        QuoteThreading.inserted = dict();
        posts.forEach(function (post) {
          if (post.isFetchedQuote) {
            return;
          }
          Unread.order.push(post);
          if (post.isReply) {
            nodes.push(post.nodes.root);
          }
          if (QuoteThreading.children[post.fullID]) {
            delete QuoteThreading.children[post.fullID];
            $.rmClass(post.nodes.root, 'threadOP');
            $.rm(post.nodes.threadContainer);
            delete post.nodes.threadContainer;
          }
        });
        $.add(thread.nodes.root, nodes);
      }
      Unread.position = Unread.order.first;
      Unread.updatePosition();
      Unread.setLine(true);
      Unread.read();
      Unread.update();
    },
  };

  const RestoreDeletedFromArchive = {
    restore() {
      const url = Redirect.to('threadJSON', { boardID: g.boardID, threadID: g.threadID });
      if (!url) {
        new Notice('warning', 'No archive found', 3);
        return;
      }
      const encryptionOK = url.startsWith('https://');
      if (encryptionOK || Conf['Exempt Archives from Encryption']) {
        CrossOrigin.ajax(url, { onloadend() {
            if (this.status < 200 || this.status >= 400) {
              const domain = E(new URL(url).origin);
              new Notice('error', $.el('div', {
                innerHTML: 'There was an error while fetching from the archive. See the console for details.<br />' +
                  'Some archives check the browser first before checking content, you might need to open the archive ' +
                  `first to get past the browser check: <a href="${domain}" target="_blank">${domain}</a><br />` +
                  'If that doesn\'t work, try a different archive under Settings > Advanced > Archives > Thread fetching.'
              }));
              console.error(this);
              return;
            }
            let nrRestored = 0;
            const archivePosts = this.response[g.threadID.toString()].posts;
            for (const [postID, raw] of Object.entries(archivePosts)) {
              if (RestoreDeletedFromArchive.insert(raw)[1]) {
                ++nrRestored;
              }
            }
            let msg;
            if (nrRestored === 0) {
              msg = 'No removed posts found';
            } else if (nrRestored === 1) {
              msg = '1 post restored';
            } else {
              msg = `${nrRestored} posts restored`;
            }
            new Notice('info', msg, 3);
          } });
      }
    },
    init() {
      if (g.VIEW !== 'thread')
        return;
      const menuEntry = $.el('a', {
        href: 'javascript:;',
        textContent: 'Restore from archive',
      });
      $.on(menuEntry, 'click', () => {
        RestoreDeletedFromArchive.restore();
        Header.menu.close();
      });
      Header.menu.addEntry({
        el: menuEntry,
        order: 10,
      });
    },
    /**
    * Inserts a post from the archive in the thread. Will automatically skip posts from other threads and posts already
    * in the thread.
    * @param raw The raw data returned from the archive
    * @returns A tuple with as first value the new post, and the second value a boolean whether is was inserted into the
    * page.
    */
    insert(raw) {
      const key = `${raw.board.shortname}.${raw.num}`;
      if (g.posts.keys.includes(key))
        return [undefined, false];
      let inserted = false;
      const post = parseArchivePost(raw);
      post.resurrect();
      post.markAsFromArchive();
      if (post.threadID === g.threadID && g.VIEW === 'thread') {
        const newPostIndex = g.posts.insert(key, post, key => +(key.split('.')[1]) < post.ID);
        if (Conf['Thread Quotes']) {
          post.thread.nodes.root.insertAdjacentElement('beforeend', post.root);
        } else {
          g.posts.get(g.posts.keys[newPostIndex - 1]).root.insertAdjacentElement('afterend', post.root);
        }
        QuoteThreading.insert(post);
        inserted = true;
        for (const quotelink of Get.allQuotelinksLinkingTo(post)) {
          quotelink.href = `#p${post.ID}`;
        }
      }
      return [post, inserted];
    },
  };

  class Fetcher {
    constructor(boardID, threadID, postID, root, quoter) {
      let post, thread;
      this.boardID = boardID;
      this.threadID = threadID;
      this.postID = postID;
      this.root = root;
      this.quoter = quoter;
      if (post = g.posts.get(`${this.boardID}.${this.postID}`)) {
        this.insert(post);
        return;
      }
      // 4chan X catalog data
      if ((post = Index.replyData?.[`${this.boardID}.${this.postID}`]) && (thread = g.threads.get(`${this.boardID}.${this.threadID}`))) {
        const board = g.boards[this.boardID];
        post = new Post(g.SITE.Build.postFromObject(post, this.boardID), thread, board, { isFetchedQuote: true });
        Main.callbackNodes('Post', [post]);
        this.insert(post);
        return;
      }
      this.root.textContent = `Loading post No.${this.postID}...`;
      if (this.threadID) {
        const that = this;
        $.cache(g.SITE.urls.threadJSON({ boardID: this.boardID, threadID: this.threadID }), function ({ isCached }) {
          return that.fetchedPost(this, isCached);
        });
      } else {
        this.archivedPost();
      }
    }
    insert(post) {
      // Stop here if the container has been removed while loading.
      if (!this.root.parentNode) {
        return;
      }
      if (!this.quoter) {
        this.quoter = post;
      }
      const clone = post.addClone(this.quoter.context, ($.hasClass(this.root, 'dialog')));
      Main.callbackNodes('Post', [clone]);
      // Get rid of the side arrows/stubs.
      const { nodes } = clone;
      $.rmAll(nodes.root);
      $.add(nodes.root, nodes.post);
      // Indicate links to the containing post.
      const quotes = [...clone.nodes.quotelinks, ...clone.nodes.backlinks];
      for (var quote of quotes) {
        var { boardID, postID } = Get.postDataFromLink(quote);
        if ((postID === this.quoter.ID) && (boardID === this.quoter.board.ID)) {
          $.addClass(quote, 'forwardlink');
        }
      }
      // Set up flag CSS for cross-board links to boards with flags
      if (clone.nodes.flag && !(Fetcher.flagCSS || (Fetcher.flagCSS = $('link[href^="//s.4cdn.org/css/flags."]')))) {
        const cssVersion = $('link[href^="//s.4cdn.org/css/"]')?.href.match(/\d+(?=\.css$)|$/)[0] || Date.now();
        Fetcher.flagCSS = $.el('link', {
          rel: 'stylesheet',
          href: `//s.4cdn.org/css/flags.${cssVersion}.css`
        });
        $.add(d.head, Fetcher.flagCSS);
      }
      $.rmAll(this.root);
      $.add(this.root, nodes.root);
      $.event('PostsInserted', null, this.root);
    }
    fetchedPost(req, isCached) {
      // In case of multiple callbacks for the same request,
      // don't parse the same original post more than once.
      let post;
      if (post = g.posts.get(`${this.boardID}.${this.postID}`)) {
        this.insert(post);
        return;
      }
      const { status } = req;
      if (status !== 200) {
        // The thread can die by the time we check a quote.
        if (status && this.archivedPost()) {
          return;
        }
        $.addClass(this.root, 'warning');
        this.root.textContent =
          status === 404 ?
            `Thread No.${this.threadID} 404'd.`
            : !status ?
              'Connection Error'
              :
                `Error ${req.statusText} (${req.status}).`;
        return;
      }
      const { posts } = req.response;
      g.SITE.Build.spoilerRange[this.boardID] = posts[0].custom_spoiler;
      for (post of posts) {
        if (post.no === this.postID) {
          break;
        }
      } // we found it!
      if (post.no !== this.postID) {
        // Cached requests can be stale and must be rechecked.
        if (isCached) {
          const api = g.SITE.urls.threadJSON({ boardID: this.boardID, threadID: this.threadID });
          $.cleanCache(url => url === api);
          const that = this;
          $.cache(api, function () {
            return that.fetchedPost(this, false);
          });
          return;
        }
        // The post can be deleted by the time we check a quote.
        if (this.archivedPost()) {
          return;
        }
        $.addClass(this.root, 'warning');
        this.root.textContent = `Post No.${this.postID} was not found.`;
        return;
      }
      const board = g.boards[this.boardID] ||
        new Board(this.boardID);
      const thread = g.threads.get(`${this.boardID}.${this.threadID}`) ||
        new Thread(this.threadID, board);
      post = new Post(g.SITE.Build.postFromObject(post, this.boardID), thread, board, { isFetchedQuote: true });
      Main.callbackNodes('Post', [post]);
      return this.insert(post);
    }
    archivedPost() {
      let url;
      if (!Conf['Resurrect Quotes']) {
        return false;
      }
      if (!(url = Redirect.to('post', { boardID: this.boardID, postID: this.postID }))) {
        return false;
      }
      const archive = Redirect.data.post[this.boardID];
      const encryptionOK = /^https:\/\//.test(url) || (location.protocol === 'http:');
      if (encryptionOK || Conf['Exempt Archives from Encryption']) {
        const that = this;
        CrossOrigin.cache(url, function () {
          if (!encryptionOK && this.response?.media) {
            const { media } = this.response;
            for (var key in media) {
              // Image/thumbnail URLs loaded over HTTP can be modified in transit.
              // Require them to be from an HTTP host so that no referrer is sent to them from an HTTPS page.
              if (/_link$/.test(key)) {
                if (!$.getOwn(media, key)?.match(/^http:\/\//)) {
                  delete media[key];
                }
              }
            }
          }
          return that.parseArchivedPost(this.response, url, archive);
        });
        return true;
      }
      return false;
    }
    parseArchivedPost(data, url, archive) {
      // In case of multiple callbacks for the same request,
      // don't parse the same original post more than once.
      let post;
      if (post = g.posts.get(`${this.boardID}.${this.postID}`)) {
        this.insert(post);
        return;
      }
      if (data == null) {
        $.addClass(this.root, 'warning');
        this.root.textContent = `Error fetching Post No.${this.postID} from ${archive.name}.`;
        return;
      }
      if (data.error) {
        $.addClass(this.root, 'warning');
        this.root.textContent = data.error;
        return;
      }
      return this.insert(RestoreDeletedFromArchive.insert(data)[0]);
    }
  }
  Fetcher.archiveTags = {
    '\n': { innerHTML: "<br>" },
    '[b]': { innerHTML: "<b>" },
    '[/b]': { innerHTML: "</b>" },
    '[spoiler]': { innerHTML: "<s>" },
    '[/spoiler]': { innerHTML: "</s>" },
    '[code]': { innerHTML: "<pre class=\"prettyprint\">" },
    '[/code]': { innerHTML: "</pre>" },
    '[moot]': { innerHTML: "<div style=\"padding:5px;margin-left:.5em;border-color:#faa;border:2px dashed rgba(255,0,0,.1);border-radius:2px\">" },
    '[/moot]': { innerHTML: "</div>" },
    '[banned]': { innerHTML: "<strong style=\"color: red;\">" },
    '[/banned]': { innerHTML: "</strong>" },
    '[fortune]'(text) { return { innerHTML: "<span class=\"fortune\" style=\"color:" + E(text.match(/#\w+|$/)[0]) + "\"><b>" }; },
    '[/fortune]': { innerHTML: "</b></span>" },
    '[i]': { innerHTML: "<span class=\"mu-i\">" },
    '[/i]': { innerHTML: "</span>" },
    '[red]': { innerHTML: "<span class=\"mu-r\">" },
    '[/red]': { innerHTML: "</span>" },
    '[green]': { innerHTML: "<span class=\"mu-g\">" },
    '[/green]': { innerHTML: "</span>" },
    '[blue]': { innerHTML: "<span class=\"mu-b\">" },
    '[/blue]': { innerHTML: "</span>" }
  };

  var QuotePreview = {
      init() {
          if (!Conf['Quote Previewing']) {
              return;
          }
          if (g.VIEW === 'archive') {
              $.on(d, 'mouseover', function (e) {
                  if ((e.target.nodeName === 'A') && $.hasClass(e.target, 'quotelink')) {
                      return QuotePreview.mouseover.call(e.target, e);
                  }
              });
          }
          if (!['index', 'thread'].includes(g.VIEW)) {
              return;
          }
          if (Conf['Comment Expansion']) {
              ExpandComment.callbacks.push(this.node);
          }
          Callbacks.Post.push({
              name: 'Quote Previewing',
              cb: this.node
          });
      },
      node() {
          for (var link of this.nodes.quotelinks.concat([...this.nodes.backlinks], this.nodes.archivelinks)) {
              $.on(link, 'mouseover', QuotePreview.mouseover);
          }
      },
      mouseover(e) {
          let origin;
          if (($.hasClass(this, 'inlined') && !$.hasClass(doc, 'catalog-mode')) || !d.contains(this)) {
              return;
          }
          const { boardID, threadID, postID } = Get.postDataFromLink(this);
          const qp = $.el('div', { id: 'qp', className: 'dialog' });
          $.add(Header.hover, qp);
          new Fetcher(boardID, threadID, postID, qp, Get.postFromNode(this));
          UI.hover({
              root: this,
              el: qp,
              latestEvent: e,
              endEvents: 'mouseout click',
              cb: QuotePreview.mouseout
          });
          if (Conf['Quote Highlighting'] && (origin = g.posts.get(`${boardID}.${postID}`))) {
              const posts = [origin].concat(origin.clones);
              // Remove the clone that's in the qp from the array.
              posts.pop();
              for (var post of posts) {
                  $.addClass(post.nodes.post, 'qphl');
              }
          }
      },
      mouseout() {
          // Stop if it only contains text.
          let root;
          if (!(root = this.el.firstElementChild)) {
              return;
          }
          $.event('PostsRemoved', null, Header.hover);
          const clone = Get.postFromRoot(root);
          let post = clone.origin;
          post.rmClone(root.dataset.clone);
          if (!Conf['Quote Highlighting']) {
              return;
          }
          for (post of [post].concat(post.clones)) {
              $.rmClass(post.nodes.post, 'qphl');
          }
      }
  };

  var NavLinksPage = `<span class="brackets-wrap indexlink"><a href="#index">Index</a></span> 
<span class="brackets-wrap cataloglink"><a href="#catalog">Catalog</a></span> 
<span class="brackets-wrap archlistlink"><a href="./archive">Archive</a></span> 
<span class="brackets-wrap bottomlink"><a href="#bottom">Bottom</a></span> 
<span class="brackets-wrap" id="index-last-refresh"><a href="javascript:;"><time title="Last index refresh">...</time></a></span> 
<input type="search" id="index-search" class="field" placeholder="Search">
<a id="index-search-clear" href="javascript:;" title="Clear search">×</a>
<span id="hidden-label" hidden> &mdash; <span id="hidden-count"></span> <span id="hidden-toggle">[<a href="javascript:;">Show</a>]</span></span>
<span id="index-options">
  <input type="checkbox" id="index-rev" name="Reverse Sort" title="Reverse sort order">
  <span id="lastlong-options" hidden>
    <input type="text" title="Minimum letter count (without image)">
    <input type="text" title="Minimum letter count (with image)">
  </span>
  <select id="index-sort" name="Index Sort">
    <option disabled>Index Sort</option>
    <option value="bump">Bump order</option>
    <option value="lastreply">Last reply</option>
    <option value="lastlong">Last long reply</option>
    <option value="birth">Creation date</option>
    <option value="replycount">Reply count</option>
    <option value="filecount">File count</option>
    <option value="activity">Posts per minute</option>
  </select>
  <select id="index-size" name="Index Size">
    <option disabled>Image Size</option>
    <option value="small">Small</option>
    <option value="large">Large</option>
  </select>
  <select id="index-mode" name="Index Mode">
    <option disabled>Index Mode</option>
    <option value="paged">Paged</option>
    <option value="infinite">Infinite scrolling</option>
    <option value="all pages">All threads</option>
    <option value="catalog">Catalog</option>
  </select>
</span>`;

  var PageList = `<div class="prev">
  <a>
    <button disabled>Previous</button>
  </a>
</div>
<div class="pages"></div>
<div class="next">
  <a>
    <button disabled>Next</button>
  </a>
</div>
<div class="pages cataloglink">
  <a href="./catalog">Catalog</a>
</div>`;

  var Index = {
      showHiddenThreads: false,
      changed: {},
      enabledOn({ siteID, boardID }) {
          return Conf['JSON Index'] && (g.sites[siteID].software === 'yotsuba') && (boardID !== 'f');
      },
      init() {
          let input, inputs, name;
          if (g.VIEW !== 'index') {
              return;
          }
          // For IndexRefresh events
          $.one(d, '4chanXInitFinished', this.cb.initFinished);
          $.on(d, 'PostsInserted', this.cb.postsInserted);
          if (!this.enabledOn(g.BOARD)) {
              return;
          }
          setIndexEnabled(true);
          Callbacks.Post.push({
              name: 'Index Page Numbers',
              cb: this.node
          });
          Callbacks.CatalogThread.push({
              name: 'Catalog Features',
              cb: this.catalogNode
          });
          this.search = history.state?.searched || '';
          if (history.state?.mode) {
              Conf['Index Mode'] = history.state?.mode;
          }
          this.currentSort = history.state?.sort;
          if (!this.currentSort) {
              this.currentSort = typeof Conf['Index Sort'] === 'object' ? (Conf['Index Sort'][g.BOARD.ID] || 'bump') : (Conf['Index Sort']);
          }
          this.currentPage = this.getCurrentPage();
          this.processHash();
          $.addClass(doc, 'index-loading', `${Conf['Index Mode'].replace(/\ /g, '-')}-mode`);
          $.on(window, 'popstate', this.cb.popstate);
          $.on(d, 'scroll', this.scroll);
          $.on(d, 'SortIndex', this.cb.resort);
          // Header refresh button
          this.button = $.el('a', {
              title: 'Refresh',
              href: 'javascript:;',
          });
          Icon.set(this.button, 'refresh', 'Refresh');
          $.on(this.button, 'click', () => Index.update());
          Header.addShortcut('index-refresh', this.button, 590);
          // Header "Index Navigation" submenu
          const entries = [];
          this.inputs = (inputs = dict());
          for (name in Config.Index) {
              var arr = Config.Index[name];
              if (arr instanceof Array) {
                  var label = UI.checkbox(name, `${name[0]}${name.slice(1).toLowerCase()}`);
                  label.title = arr[1];
                  entries.push({ el: label });
                  input = label.firstChild;
                  $.on(input, 'change', $.cb.checked);
                  inputs[name] = input;
              }
          }
          $.on(inputs['Show Replies'], 'change', this.cb.replies);
          $.on(inputs['Catalog Hover Expand'], 'change', this.cb.hover);
          $.on(inputs['Pin Watched Threads'], 'change', this.cb.resort);
          $.on(inputs['Anchor Hidden Threads'], 'change', this.cb.resort);
          const watchSettings = function (e) {
              if (input = $.getOwn(inputs, e.target.name)) {
                  input.checked = e.target.checked;
                  $.event('change', null, input);
              }
          };
          $.on(d, 'OpenSettings', () => $.on($.id('fourchanx-settings'), 'change', watchSettings));
          const sortEntry = UI.checkbox('Per-Board Sort Type', 'Per-board sort type', (typeof Conf['Index Sort'] === 'object'));
          sortEntry.title = 'Set the sorting order of each board independently.';
          $.on(sortEntry.firstChild, 'change', this.cb.perBoardSort);
          entries.splice(3, 0, { el: sortEntry });
          Header.menu.addEntry({
              el: $.el('span', { textContent: 'Index Navigation' }),
              order: 100,
              subEntries: entries
          });
          // Navigation links at top of index
          this.navLinks = $.el('div', { className: 'navLinks json-index' });
          $.extend(this.navLinks, { innerHTML: NavLinksPage });
          $('.cataloglink a', this.navLinks).href = CatalogLinks.catalog();
          if (!BoardConfig.isArchived(g.BOARD.ID)) {
              $('.archlistlink', this.navLinks).hidden = true;
          }
          $.on($('#index-last-refresh a', this.navLinks), 'click', this.cb.refreshFront);
          // Search field
          this.searchInput = $('#index-search', this.navLinks);
          this.setupSearch();
          $.on(this.searchInput, 'input', this.onSearchInput);
          $.on($('#index-search-clear', this.navLinks), 'click', this.clearSearch);
          Icon.set($('#index-search-clear', this.navLinks), 'xmark');
          // Hidden threads toggle
          this.hideLabel = $('#hidden-label', this.navLinks);
          $.on($('#hidden-toggle a', this.navLinks), 'click', this.cb.toggleHiddenThreads);
          // Drop-down menus and reverse sort toggle
          this.selectRev = $('#index-rev', this.navLinks);
          this.selectMode = $('#index-mode', this.navLinks);
          this.selectSort = $('#index-sort', this.navLinks);
          this.selectSize = $('#index-size', this.navLinks);
          $.on(this.selectRev, 'change', this.cb.sort);
          $.on(this.selectMode, 'change', this.cb.mode);
          $.on(this.selectSort, 'change', this.cb.sort);
          $.on(this.selectSize, 'change', $.cb.value);
          $.on(this.selectSize, 'change', this.cb.size);
          for (var select of [this.selectMode, this.selectSize]) {
              select.value = Conf[select.name];
          }
          this.selectRev.checked = /-rev$/.test(Index.currentSort);
          this.selectSort.value = Index.currentSort.replace(/-rev$/, '');
          // Last Long Reply options
          this.lastLongOptions = $('#lastlong-options', this.navLinks);
          this.lastLongInputs = $$('input', this.lastLongOptions);
          this.lastLongThresholds = [0, 0];
          this.lastLongOptions.hidden = (this.selectSort.value !== 'lastlong');
          for (let i = 0; i < this.lastLongInputs.length; i++) {
              input = this.lastLongInputs[i];
              $.on(input, 'change', this.cb.lastLongThresholds);
              var tRaw = Conf[`Last Long Reply Thresholds ${i}`];
              input.value = (this.lastLongThresholds[i] =
                  typeof tRaw === 'object' ? (tRaw[g.BOARD.ID] ?? 100) : tRaw);
          }
          // Thread container
          this.root = $.el('div', { className: 'board json-index' });
          $.on(this.root, 'click', this.cb.hoverToggle);
          this.cb.size();
          this.cb.hover();
          // Page list
          this.pagelist = $.el('div', { className: 'pagelist json-index' });
          $.extend(this.pagelist, { innerHTML: PageList });
          $('.cataloglink a', this.pagelist).href = CatalogLinks.catalog();
          $.on(this.pagelist, 'click', this.cb.pageNav);
          this.update(true);
          $.onExists(doc, 'title + *', () => d.title = d.title.replace(/\ -\ Page\ \d+/, ''));
          $.onExists(doc, '.board > .thread > .postContainer, .board + *', function () {
              let el;
              g.SITE.Build.hat = $('.board > .thread > img:first-child');
              if (g.SITE.Build.hat) {
                  g.BOARD.threads.forEach(function (thread) {
                      if (thread.nodes.root) {
                          return $.prepend(thread.nodes.root, g.SITE.Build.hat.cloneNode(false));
                      }
                  });
                  $.addClass(doc, 'hats-enabled');
                  $.addStyle(`.catalog-thread::after {background-image: url(${g.SITE.Build.hat.src});}`);
              }
              const board = $('.board');
              $.replace(board, Index.root);
              if (Index.loaded) {
                  $.event('PostsInserted', null, Index.root);
              }
              // Hacks:
              // - When removing an element from the document during page load,
              //   its ancestors will still be correctly created inside of it.
              // - Creating loadable elements inside of an origin-less document
              //   will not download them.
              // - Combine the two and you get a download canceller!
              //   Does not work on Firefox unfortunately. bugzil.la/939713
              try {
                  d.implementation.createDocument(null, null, null).appendChild(board);
              }
              catch (error) { }
              for (el of $$('.navLinks')) {
                  $.rm(el);
              }
              $.rm($.id('ctrl-top'));
              const topNavPos = $.id('delform').previousElementSibling;
              $.before(topNavPos, $.el('hr'));
              $.before(topNavPos, Index.navLinks);
              const timeEl = $('#index-last-refresh time', Index.navLinks);
              if (timeEl.dataset.utc) {
                  return RelativeDates.update(timeEl);
              }
          });
          PageReady.ready(function () {
              let pagelist;
              if (pagelist = $('.pagelist')) {
                  $.replace(pagelist, Index.pagelist);
              }
              $.rmClass(doc, 'index-loading');
          });
      },
      scroll() {
          if (Index.req || !Index.liveThreadData || (Conf['Index Mode'] !== 'infinite') || (window.scrollY <= (doc.scrollHeight - (300 + window.innerHeight)))) {
              return;
          }
          Index.pageNum ?? (Index.pageNum = Index.currentPage); // Avoid having to pushState to keep track of the current page
          const pageNum = ++Index.pageNum;
          if (pageNum > Index.pagesNum) {
              return Index.endNotice();
          }
          const threadIDs = Index.threadsOnPage(pageNum);
          Index.buildStructure(threadIDs);
      },
      endNotice: (function () {
          let notify = false;
          const reset = () => notify = false;
          return function () {
              if (notify) {
                  return;
              }
              notify = true;
              new Notice('info', "Last page reached.", 2);
              setTimeout(reset, 3 * SECOND);
          };
      })(),
      menu: {
          init() {
              if ((g.VIEW !== 'index') || !Conf.Menu || !Conf['Thread Hiding Link'] || !Index.enabledOn(g.BOARD)) {
                  return;
              }
              return Menu.menu.addEntry({
                  el: $.el('a', {
                      href: 'javascript:;',
                      className: 'has-shortcut-text'
                  }, { innerHTML: "<span></span><span class=\"shortcut-text\">Shift+click</span>" }),
                  order: 20,
                  open({ thread }) {
                      if (Conf['Index Mode'] !== 'catalog') {
                          return false;
                      }
                      this.el.firstElementChild.textContent = thread.isHidden ?
                          'Unhide'
                          :
                              'Hide';
                      if (this.cb) {
                          $.off(this.el, 'click', this.cb);
                      }
                      this.cb = function () {
                          $.event('CloseMenu');
                          return Index.toggleHide(thread);
                      };
                      $.on(this.el, 'click', this.cb);
                      return true;
                  }
              });
          }
      },
      node() {
          if (this.isReply || this.isClone || !Index.threadPosition[this.ID]) {
              return;
          }
          this.thread.setPage(Math.floor(Index.threadPosition[this.ID] / Index.threadsNumPerPage) + 1);
      },
      catalogNode() {
          $.on(this.nodes.root, 'click', e => {
              if ((e.button !== 0) || !e.shiftKey)
                  return;
              e.preventDefault();
              getSelection().removeAllRanges();
              if (Conf['MD5 Quick Filter in the Catalog'] && e.target.classList.contains('catalog-thumb')) {
                  Filter.quickFilterMD5.call(this.thread.OP);
              }
              else {
                  Index.toggleHide(this.thread);
              }
          });
      },
      toggleHide(thread) {
          if (Index.showHiddenThreads) {
              ThreadHiding.show(thread);
              if (!ThreadHiding.db.get({ boardID: thread.board.ID, threadID: thread.ID })) {
                  return;
              }
              // Don't save when un-hiding filtered threads.
          }
          else {
              ThreadHiding.hide(thread);
          }
          ThreadHiding.saveHiddenState(thread);
      },
      cycleSortType() {
          let i;
          const types = Index.selectSort.options.filter(option => !option.disabled);
          for (i = 0; i < types.length; i++) {
              var type = types[i];
              if (type.selected) {
                  break;
              }
          }
          types[(i + 1) % types.length].selected = true;
          $.event('change', null, Index.selectSort);
      },
      cb: {
          initFinished() {
              Index.initFinishedFired = true;
              return $.queueTask(() => Index.cb.postsInserted());
          },
          postsInserted() {
              if (!Index.initFinishedFired) {
                  return;
              }
              let n = 0;
              g.posts.forEach(function (post) {
                  if (!post.isFetchedQuote && !post.indexRefreshSeen && doc.contains(post.nodes.root)) {
                      post.indexRefreshSeen = true;
                      return n++;
                  }
              });
              if (n) {
                  return $.event('IndexRefresh');
              }
          },
          toggleHiddenThreads() {
              $('#hidden-toggle a', Index.navLinks).textContent = (Index.showHiddenThreads = !Index.showHiddenThreads) ? 'Hide' : 'Show';
              Index.sort();
              Index.buildIndex();
          },
          mode() {
              Index.pushState({ mode: this.value });
              Index.pageLoad(false);
          },
          sort() {
              const value = Index.selectRev.checked ? Index.selectSort.value + "-rev" : Index.selectSort.value;
              Index.pushState({ sort: value });
              Index.pageLoad(false);
          },
          resort(e) {
              Index.changed.order = true;
              if (!e?.detail?.deferred) {
                  Index.pageLoad(false);
              }
          },
          perBoardSort() {
              Conf['Index Sort'] = this.checked ? dict() : '';
              Index.saveSort();
              for (let i = 0; i < 2; i++) {
                  Conf[`Last Long Reply Thresholds ${i}`] = this.checked ? dict() : '';
                  Index.saveLastLongThresholds(i);
              }
          },
          lastLongThresholds() {
              const i = [...this.parentNode.children].indexOf(this);
              const value = +this.value;
              if (!Number.isFinite(value)) {
                  this.value = Index.lastLongThresholds[i];
                  return;
              }
              Index.lastLongThresholds[i] = value;
              Index.saveLastLongThresholds(i);
              Index.changed.order = true;
              Index.pageLoad(false);
          },
          size(e) {
              if (Conf['Index Mode'] !== 'catalog') {
                  $.rmClass(Index.root, 'catalog-small');
                  $.rmClass(Index.root, 'catalog-large');
              }
              else if (Conf['Index Size'] === 'small') {
                  $.addClass(Index.root, 'catalog-small');
                  $.rmClass(Index.root, 'catalog-large');
              }
              else {
                  $.addClass(Index.root, 'catalog-large');
                  $.rmClass(Index.root, 'catalog-small');
              }
              if (e) {
                  Index.buildIndex();
              }
          },
          replies() {
              Index.buildIndex();
          },
          hover() {
              return doc.classList.toggle('catalog-hover-expand', Conf['Catalog Hover Expand']);
          },
          hoverToggle(e) {
              if (Conf['Catalog Hover Toggle'] && $.hasClass(doc, 'catalog-mode') && !$.modifiedClick(e) && !$.x('ancestor-or-self::a', e.target)) {
                  let thread;
                  const input = Index.inputs['Catalog Hover Expand'];
                  input.checked = !input.checked;
                  $.event('change', null, input);
                  if (thread = Get.threadFromNode(e.target)) {
                      Index.cb.catalogReplies.call(thread);
                      return Index.cb.hoverAdjust.call(thread.OP.nodes);
                  }
              }
          },
          popstate(e) {
              if (e?.state) {
                  const { searched, mode, sort } = e.state;
                  const page = Index.getCurrentPage();
                  Index.setState({ search: searched, mode, sort, page });
                  return Index.pageLoad(false);
              }
              else {
                  // page load or hash change
                  const nCommands = Index.processHash();
                  if (Conf['Refreshed Navigation'] && nCommands) {
                      return Index.update();
                  }
                  else {
                      return Index.pageLoad();
                  }
              }
          },
          pageNav(e) {
              let a;
              if ($.modifiedClick(e)) {
                  return;
              }
              switch (e.target.nodeName) {
                  case 'BUTTON':
                      e.target.blur();
                      a = e.target.parentNode;
                      break;
                  case 'A':
                      a = e.target;
                      break;
                  default:
                      return;
              }
              if (a.textContent === 'Catalog') {
                  return;
              }
              e.preventDefault();
              return Index.userPageNav(+a.pathname.split(/\/+/)[2] || 1);
          },
          refreshFront() {
              Index.pushState({ page: 1 });
              Index.update();
          },
          catalogReplies() {
              if (Conf['Show Replies'] && $.hasClass(doc, 'catalog-hover-expand') && !this.catalogView.nodes.replies) {
                  return Index.buildCatalogReplies(this);
              }
          },
          hoverAdjust() {
              // Prevent hovered catalog threads from going offscreen.
              let x;
              if (!$.hasClass(doc, 'catalog-hover-expand')) {
                  return;
              }
              const rect = this.post.getBoundingClientRect();
              if (x = $.minmax(0, -rect.left, doc.clientWidth - rect.right)) {
                  const { style } = this.post;
                  style.left = `${x}px`;
                  style.right = `${-x}px`;
                  $.one(this.root, 'mouseleave', () => style.left = (style.right = null));
              }
          }
      },
      scrollToIndex() {
          // Scroll to navlinks, or top of board if navlinks are hidden.
          return Header.scrollToIfNeeded((Index.navLinks.getBoundingClientRect().height ? Index.navLinks : Index.root));
      },
      getCurrentPage() {
          return +window.location.pathname.split(/\/+/)[2] || 1;
      },
      userPageNav(page) {
          Index.pushState({ page });
          if (Conf['Refreshed Navigation']) {
              return Index.update();
          }
          else {
              return Index.pageLoad();
          }
      },
      hashCommands: {
          mode: {
              'paged': 'paged',
              'infinite-scrolling': 'infinite',
              'infinite': 'infinite',
              'all-threads': 'all pages',
              'all-pages': 'all pages',
              'catalog': 'catalog'
          },
          sort: {
              'bump-order': 'bump',
              'last-reply': 'lastreply',
              'last-long-reply': 'lastlong',
              'creation-date': 'birth',
              'reply-count': 'replycount',
              'file-count': 'filecount',
              'posts-per-minute': 'activity'
          }
      },
      processHash() {
          // XXX https://bugzilla.mozilla.org/show_bug.cgi?id=483304
          let hash = location.href.match(/#.*/)?.[0] || '';
          const state = { replace: true };
          const commands = hash.slice(1).split('/');
          const leftover = [];
          for (var command of commands) {
              var mode, sort;
              if (mode = $.getOwn(Index.hashCommands.mode, command)) {
                  state.mode = mode;
              }
              else if (command === 'index') {
                  state.mode = Conf['Previous Index Mode'];
                  state.page = 1;
              }
              else if (sort = $.getOwn(Index.hashCommands.sort, command.replace(/-rev$/, ''))) {
                  state.sort = sort;
                  if (/-rev$/.test(command)) {
                      state.sort += '-rev';
                  }
              }
              else if (/^s=/.test(command)) {
                  state.search = decodeURIComponent(command.slice(2)).replace(/\+/g, ' ').trim();
              }
              else {
                  leftover.push(command);
              }
          }
          hash = leftover.join('/');
          if (hash) {
              state.hash = `#${hash}`;
          }
          Index.pushState(state);
          return commands.length - leftover.length;
      },
      pushState(state) {
          let { search, hash, replace } = state;
          let pageBeforeSearch = history.state?.oldpage;
          if ((search != null) && (search !== Index.search)) {
              state.page = search ? 1 : (pageBeforeSearch || 1);
              if (!search) {
                  pageBeforeSearch = undefined;
              }
              else if (!Index.search) {
                  pageBeforeSearch = Index.currentPage;
              }
          }
          Index.setState(state);
          const pathname = Index.currentPage === 1 ? `/${g.BOARD}/` : `/${g.BOARD}/${Index.currentPage}`;
          if (!hash) {
              hash = '';
          }
          return history[replace ? 'replaceState' : 'pushState']({
              mode: Conf['Index Mode'],
              sort: Index.currentSort,
              searched: Index.search,
              oldpage: pageBeforeSearch
          }, '', `${location.protocol}//${location.host}${pathname}${hash}`);
      },
      setState({ search, mode, sort, page, hash }) {
          if ((search != null) && (search !== Index.search)) {
              Index.changed.search = true;
              Index.search = search;
          }
          if ((mode != null) && (mode !== Conf['Index Mode'])) {
              Index.changed.mode = true;
              Conf['Index Mode'] = mode;
              $.set('Index Mode', mode);
              if ((mode !== 'catalog') && (Conf['Previous Index Mode'] !== mode)) {
                  Conf['Previous Index Mode'] = mode;
                  $.set('Previous Index Mode', mode);
              }
          }
          if ((sort != null) && (sort !== Index.currentSort)) {
              Index.changed.sort = true;
              Index.currentSort = sort;
              Index.saveSort();
          }
          if (['all pages', 'catalog'].includes(Conf['Index Mode'])) {
              page = 1;
          }
          if ((page != null) && (page !== Index.currentPage)) {
              Index.changed.page = true;
              Index.currentPage = page;
          }
          if (hash != null) {
              return Index.changed.hash = true;
          }
      },
      savePerBoard(key, value) {
          if (typeof Conf[key] === 'object') {
              Conf[key][g.BOARD.ID] = value;
          }
          else {
              Conf[key] = value;
          }
          $.set(key, Conf[key]);
      },
      saveSort() {
          Index.savePerBoard('Index Sort', Index.currentSort);
      },
      saveLastLongThresholds(i) {
          Index.savePerBoard(`Last Long Reply Thresholds ${i}`, Index.lastLongThresholds[i]);
      },
      pageLoad(scroll = true) {
          if (!Index.liveThreadData) {
              return;
          }
          let { threads, order, search, mode, sort, page, hash } = Index.changed;
          if (!threads) {
              threads = search;
          }
          if (!order) {
              order = sort;
          }
          if (threads || order) {
              Index.sort();
          }
          if (threads) {
              Index.buildPagelist();
          }
          if (search) {
              Index.setupSearch();
          }
          if (mode) {
              Index.setupMode();
          }
          if (sort) {
              Index.setupSort();
          }
          if (threads || mode || page || order) {
              Index.buildIndex();
          }
          if (threads || page) {
              Index.setPage();
          }
          if (scroll && !hash) {
              Index.scrollToIndex();
          }
          return Index.changed = {};
      },
      setupMode() {
          for (var mode of ['paged', 'infinite', 'all pages', 'catalog']) {
              $[mode === Conf['Index Mode'] ? 'addClass' : 'rmClass'](doc, `${mode.replace(/\ /g, '-')}-mode`);
          }
          Index.selectMode.value = Conf['Index Mode'];
          Index.cb.size();
          Index.showHiddenThreads = false;
          return $('#hidden-toggle a', Index.navLinks).textContent = 'Show';
      },
      setupSort() {
          Index.selectRev.checked = /-rev$/.test(Index.currentSort);
          Index.selectSort.value = Index.currentSort.replace(/-rev$/, '');
          return Index.lastLongOptions.hidden = (Index.selectSort.value !== 'lastlong');
      },
      getPagesNum() {
          if (Index.search) {
              return Math.ceil(Index.sortedThreadIDs.length / Index.threadsNumPerPage);
          }
          else {
              return Index.pagesNum;
          }
      },
      getMaxPageNum() {
          return Math.max(1, Index.getPagesNum());
      },
      buildPagelist() {
          const pagesRoot = $('.pages', Index.pagelist);
          const maxPageNum = Index.getMaxPageNum();
          if (pagesRoot.childElementCount !== maxPageNum) {
              const nodes = [];
              for (let i = 1, end = maxPageNum; i <= end; i++) {
                  var a = $.el('a', {
                      textContent: i,
                      href: i === 1 ? './' : i
                  });
                  nodes.push($.tn('['), a, $.tn('] '));
              }
              $.rmAll(pagesRoot);
              $.add(pagesRoot, nodes);
          }
      },
      setPage() {
          let a, strong;
          const pageNum = Index.currentPage;
          const maxPageNum = Index.getMaxPageNum();
          const pagesRoot = $('.pages', Index.pagelist);
          // Previous/Next buttons
          const prev = pagesRoot.previousElementSibling.firstElementChild;
          const next = pagesRoot.nextElementSibling.firstElementChild;
          let href = Math.max(pageNum - 1, 1);
          prev.href = href === 1 ? './' : href;
          prev.firstElementChild.disabled = href === pageNum;
          href = Math.min(pageNum + 1, maxPageNum);
          next.href = href === 1 ? './' : href;
          next.firstElementChild.disabled = href === pageNum;
          // <strong> current page
          if (strong = $('strong', pagesRoot)) {
              if (+strong.textContent === pageNum) {
                  return;
              }
              $.replace(strong, strong.firstChild);
          }
          else {
              strong = $.el('strong');
          }
          if (a = pagesRoot.children[pageNum - 1]) {
              $.before(a, strong);
              $.add(strong, a);
          }
      },
      updateHideLabel() {
          if (!Index.hideLabel) {
              return;
          }
          let hiddenCount = 0;
          for (var threadID of Index.liveThreadIDs) {
              if (Index.isHidden(threadID)) {
                  hiddenCount++;
              }
          }
          if (!hiddenCount) {
              Index.hideLabel.hidden = true;
              if (Index.showHiddenThreads) {
                  Index.cb.toggleHiddenThreads();
              }
              return;
          }
          Index.hideLabel.hidden = false;
          return $('#hidden-count', Index.navLinks).textContent = hiddenCount === 1 ?
              '1 hidden thread' : `${hiddenCount} hidden threads`;
      },
      update(firstTime) {
          let oldReq;
          if (oldReq = Index.req) {
              delete Index.req;
              oldReq.abort();
          }
          if (Conf['Index Refresh Notifications']) {
              // Optional notification for manual refreshes
              if (!Index.notice) {
                  Index.notice = new Notice('info', 'Refreshing index...');
              }
              if (!Index.nTimeout) {
                  Index.nTimeout = setTimeout(() => {
                      if (Index.notice) {
                          Index.notice.el.lastElementChild.textContent += ' (disable JSON Index if this takes too long)';
                      }
                  }, 3 * SECOND);
              }
          }
          else {
              // Also display notice if Index Refresh is taking too long
              if (!Index.nTimeout) {
                  Index.nTimeout = setTimeout(() => Index.notice || (Index.notice = new Notice('info', 'Refreshing index... (disable JSON Index if this takes too long)')), 3 * SECOND);
              }
          }
          // Hard refresh in case of incomplete page load.
          if (!firstTime && (d.readyState !== 'loading') && !$('.board + *')) {
              location.reload();
              return;
          }
          Index.req = $.whenModified(g.SITE.urls.catalogJSON({ boardID: g.BOARD.ID }), 'Index', Index.load);
          $.addClass(Index.button, 'spin');
      },
      load() {
          let err;
          if (this !== Index.req) {
              return;
          } // aborted
          $.rmClass(Index.button, 'spin');
          const { notice, nTimeout } = Index;
          if (nTimeout) {
              clearTimeout(nTimeout);
          }
          delete Index.nTimeout;
          delete Index.req;
          delete Index.notice;
          if (![200, 304].includes(this.status)) {
              err = `Index refresh failed. ${this.status ? `Error ${this.statusText} (${this.status})` : 'Connection Error'}`;
              if (notice) {
                  notice.setType('warning');
                  notice.el.lastElementChild.textContent = err;
                  setTimeout(notice.close, SECOND);
              }
              else {
                  new Notice('warning', err, 1);
              }
              return;
          }
          try {
              if (this.status === 200) {
                  Index.parse(this.response);
              }
              else if (this.status === 304) {
                  Index.pageLoad();
              }
          }
          catch (error) {
              err = error;
              c.error(`Index failure: ${err.message}`, err.stack);
              if (notice) {
                  notice.setType('error');
                  notice.el.lastElementChild.textContent = 'Index refresh failed.';
                  setTimeout(notice.close, SECOND);
              }
              else {
                  new Notice('error', 'Index refresh failed.', 1);
              }
              return;
          }
          if (notice) {
              if (Conf['Index Refresh Notifications']) {
                  notice.setType('success');
                  notice.el.lastElementChild.textContent = 'Index refreshed!';
                  setTimeout(notice.close, SECOND);
              }
              else {
                  notice.close();
              }
          }
          const timeEl = $('#index-last-refresh time', Index.navLinks);
          timeEl.dataset.utc = Date.parse(this.getResponseHeader('Last-Modified'));
          return RelativeDates.update(timeEl);
      },
      parse(pages) {
          $.cleanCache(url => /^https?:\/\/a\.4cdn\.org\//.test(url));
          Index.parseThreadList(pages);
          Index.changed.threads = true;
          Index.pageLoad();
      },
      parseThreadList(pages) {
          Index.pagesNum = pages.length;
          Index.threadsNumPerPage = pages[0]?.threads.length || 1;
          Index.liveThreadData = pages.reduce(((arr, next) => arr.concat(next.threads)), []);
          Index.liveThreadIDs = Index.liveThreadData.map(data => data.no);
          Index.liveThreadDict = dict();
          Index.threadPosition = dict();
          Index.parsedThreads = dict();
          Index.replyData = dict();
          for (let i = 0; i < Index.liveThreadData.length; i++) {
              var obj, results;
              var data = Index.liveThreadData[i];
              Index.liveThreadDict[data.no] = data;
              Index.threadPosition[data.no] = i;
              Index.parsedThreads[data.no] = (obj = g.SITE.Build.parseJSON(data, g.BOARD));
              results = Filter.test(obj);
              obj.isOnTop = results.top;
              obj.isHidden = results.hide || ThreadHiding.isHidden(obj.boardID, obj.threadID);
              if (data.last_replies) {
                  for (var reply of data.last_replies) {
                      Index.replyData[`${g.BOARD}.${reply.no}`] = reply;
                  }
              }
          }
          if (Index.liveThreadData[0]) {
              g.SITE.Build.spoilerRange[g.BOARD.ID] = Index.liveThreadData[0].custom_spoiler;
          }
          g.BOARD.threads.forEach(function (thread) {
              if (!Index.liveThreadIDs.includes(thread.ID)) {
                  return thread.collect();
              }
          });
          $.event('IndexUpdate', { threads: ((Index.liveThreadIDs.map((ID) => `${g.BOARD}.${ID}`))) });
      },
      isHidden(threadID) {
          let thread;
          if ((thread = g.BOARD.threads.get(threadID)) && thread.OP && !thread.OP.isFetchedQuote) {
              return thread.isHidden;
          }
          else {
              return Index.parsedThreads[threadID].isHidden;
          }
      },
      isHiddenReply(threadID, replyData) {
          return PostHiding.isHidden(g.BOARD.ID, threadID, replyData.no) || Filter.isHidden(g.SITE.Build.parseJSON(replyData, g.BOARD));
      },
      buildThreads(threadIDs, isCatalog, withReplies) {
          let errors;
          const threads = [];
          const newThreads = [];
          let newPosts = [];
          for (var ID of threadIDs) {
              var opRoot, thread;
              try {
                  var OP;
                  var threadData = Index.liveThreadDict[ID];
                  if (thread = g.BOARD.threads.get(ID)) {
                      var isStale = (thread.json !== threadData) && (JSON.stringify(thread.json) !== JSON.stringify(threadData));
                      if (isStale) {
                          thread.setCount('post', threadData.replies + 1, threadData.bumplimit);
                          thread.setCount('file', threadData.images + !!threadData.ext, threadData.imagelimit);
                          thread.setStatus('Sticky', !!threadData.sticky);
                          thread.setStatus('Closed', !!threadData.closed);
                      }
                      if (thread.catalogView) {
                          $.rm(thread.catalogView.nodes.replies);
                          thread.catalogView.nodes.replies = null;
                      }
                  }
                  else {
                      thread = new Thread(ID, g.BOARD);
                      newThreads.push(thread);
                  }
                  var lastPost = threadData.last_replies && threadData.last_replies.length ? threadData.last_replies[threadData.last_replies.length - 1].no : ID;
                  if (lastPost > thread.lastPost) {
                      thread.lastPost = lastPost;
                  }
                  thread.json = threadData;
                  threads.push(thread);
                  if ((OP = thread.OP) && !OP.isFetchedQuote) {
                      OP.setCatalogOP(isCatalog);
                      thread.setPage(Math.floor(Index.threadPosition[ID] / Index.threadsNumPerPage) + 1);
                  }
                  else {
                      var obj = Index.parsedThreads[ID];
                      opRoot = g.SITE.Build.post(obj);
                      OP = new Post(opRoot, thread, g.BOARD);
                      OP.filterResults = obj.filterResults;
                      newPosts.push(OP);
                  }
                  if (!isCatalog || !thread.nodes.root) {
                      g.SITE.Build.thread(thread, threadData, withReplies);
                  }
              }
              catch (err) {
                  // Skip posts that we failed to parse.
                  if (!errors) {
                      errors = [];
                  }
                  errors.push({
                      message: `Parsing of Thread No.${thread} failed. Thread will be skipped.`,
                      error: err,
                      html: opRoot?.outerHTML
                  });
              }
          }
          if (errors) {
              Main.handleErrors(errors);
          }
          if (withReplies) {
              newPosts = newPosts.concat(Index.buildReplies(threads));
          }
          Main.callbackNodes('Thread', newThreads);
          Main.callbackNodes('Post', newPosts);
          Index.updateHideLabel();
          $.event('IndexRefreshInternal', { threadIDs: (threads.map((t) => t.fullID)), isCatalog });
          return threads;
      },
      buildReplies(threads) {
          let errors;
          const posts = [];
          for (var thread of threads) {
              var lastReplies;
              if (!(lastReplies = Index.liveThreadDict[thread.ID].last_replies)) {
                  continue;
              }
              var nodes = [];
              for (var data of lastReplies) {
                  var node, post;
                  if ((post = thread.posts.get(data.no)) && !post.isFetchedQuote) {
                      nodes.push(post.nodes.root);
                      continue;
                  }
                  nodes.push(node = g.SITE.Build.postFromObject(data, thread.board.ID));
                  try {
                      posts.push(new Post(node, thread, thread.board));
                  }
                  catch (err) {
                      // Skip posts that we failed to parse.
                      if (!errors) {
                          errors = [];
                      }
                      errors.push({
                          message: `Parsing of Post No.${data.no} failed. Post will be skipped.`,
                          error: err,
                          html: node?.outerHTML
                      });
                  }
              }
              $.add(thread.nodes.root, nodes);
          }
          if (errors) {
              Main.handleErrors(errors);
          }
          return posts;
      },
      buildCatalogViews(threads) {
          const catalogThreads = [];
          for (var thread of threads) {
              if (!thread.catalogView) {
                  var { ID } = thread;
                  var page = Math.floor(Index.threadPosition[ID] / Index.threadsNumPerPage) + 1;
                  var root = g.SITE.Build.catalogThread(thread, Index.liveThreadDict[ID], page);
                  catalogThreads.push(new CatalogThread(root, thread));
              }
          }
          Main.callbackNodes('CatalogThread', catalogThreads);
      },
      sizeCatalogViews(threads) {
          // XXX When browsers support CSS3 attr(), use it instead.
          const size = Conf['Index Size'] === 'small' ? 150 : 250;
          for (var thread of threads) {
              var { thumb } = thread.catalogView.nodes;
              var { width, height } = thumb.dataset;
              if (!width) {
                  continue;
              }
              var ratio = size / Math.max(width, height);
              thumb.style.width = (width * ratio) + 'px';
              thumb.style.height = (height * ratio) + 'px';
          }
      },
      buildCatalogReplies(thread) {
          let lastReplies;
          const { nodes } = thread.catalogView;
          if (!(lastReplies = Index.liveThreadDict[thread.ID].last_replies)) {
              return;
          }
          const replies = [];
          for (var data of lastReplies) {
              if (Index.isHiddenReply(thread.ID, data)) {
                  continue;
              }
              var reply = g.SITE.Build.catalogReply(thread, data);
              RelativeDates.update($('time', reply));
              $.on($('.catalog-reply-preview', reply), 'mouseover', QuotePreview.mouseover);
              replies.push(reply);
          }
          nodes.replies = $.el('div', { className: 'catalog-replies' });
          $.add(nodes.replies, replies);
          $.add(thread.OP.nodes.post, nodes.replies);
      },
      sort() {
          let threadIDs;
          const { liveThreadIDs, liveThreadData } = Index;
          if (!liveThreadData) {
              return;
          }
          const tmp_time = new Date().getTime() / 1000;
          const sortType = Index.currentSort.replace(/-rev$/, '');
          Index.sortedThreadIDs = (() => {
              switch (sortType) {
                  case 'lastreply':
                  case 'lastlong':
                      var repliesAvailable = liveThreadData.some(thread => thread.last_replies?.length);
                      var lastlong = function (thread) {
                          if (!repliesAvailable) {
                              return thread.last_modified;
                          }
                          const iterable = thread.last_replies || [];
                          for (let i = iterable.length - 1; i >= 0; i--) {
                              var r = iterable[i];
                              if (Index.isHiddenReply(thread.no, r)) {
                                  continue;
                              }
                              if (sortType === 'lastreply') {
                                  return r;
                              }
                              var len = r.com ? g.SITE.Build.parseComment(r.com).replace(/[^a-z]/ig, '').length : 0;
                              if (len >= Index.lastLongThresholds[+!!r.ext]) {
                                  return r;
                              }
                          }
                          if (thread.omitted_posts && thread.last_replies?.length) {
                              return thread.last_replies[0];
                          }
                          else {
                              return thread;
                          }
                      };
                      var lastlongD = dict();
                      for (var thread of liveThreadData) {
                          lastlongD[thread.no] = lastlong(thread).no;
                      }
                      return [...liveThreadData].sort((a, b) => lastlongD[b.no] - lastlongD[a.no]).map(post => post.no);
                  case 'bump': return liveThreadIDs;
                  case 'birth': return [...liveThreadIDs].sort((a, b) => b - a);
                  case 'replycount': return [...liveThreadData].sort((a, b) => b.replies - a.replies).map(post => post.no);
                  case 'filecount': return [...liveThreadData].sort((a, b) => b.images - a.images).map(post => post.no);
                  case 'activity': return [...liveThreadData].sort((a, b) => ((tmp_time - a.time) / (a.replies + 1)) - ((tmp_time - b.time) / (b.replies + 1))).map(post => post.no);
                  default: return liveThreadIDs;
              }
          })();
          if (/-rev$/.test(Index.currentSort)) {
              Index.sortedThreadIDs.reverse();
          }
          if (Index.search && (threadIDs = Index.querySearch(Index.search))) {
              Index.sortedThreadIDs = threadIDs;
          }
          // Sticky threads
          Index.sortOnTop(obj => obj.isSticky);
          // Highlighted threads
          Index.sortOnTop(obj => obj.isOnTop || (Conf['Pin Watched Threads'] && ThreadWatcher.isWatchedRaw(obj.boardID, obj.threadID)));
          // Non-hidden threads
          if (Conf['Anchor Hidden Threads']) {
              return Index.sortOnTop(obj => !Index.isHidden(obj.threadID));
          }
      },
      sortOnTop(match) {
          const topThreads = [];
          const bottomThreads = [];
          for (var ID of Index.sortedThreadIDs) {
              (match(Index.parsedThreads[ID]) ? topThreads : bottomThreads).push(ID);
          }
          return Index.sortedThreadIDs = topThreads.concat(bottomThreads);
      },
      buildIndex() {
          let threadIDs;
          if (!Index.liveThreadData) {
              return;
          }
          switch (Conf['Index Mode']) {
              case 'all pages':
                  threadIDs = Index.sortedThreadIDs;
                  break;
              case 'catalog':
                  threadIDs = Index.sortedThreadIDs.filter(ID => !Index.isHidden(ID) !== Index.showHiddenThreads);
                  break;
              default:
                  threadIDs = Index.threadsOnPage(Index.currentPage);
          }
          delete Index.pageNum;
          $.rmAll(Index.root);
          $.rmAll(Header.hover);
          if (Index.loaded && Index.root.parentNode) {
              $.event('PostsRemoved', null, Index.root);
          }
          if (Conf['Index Mode'] === 'catalog') {
              Index.buildCatalog(threadIDs);
          }
          else {
              Index.buildStructure(threadIDs);
          }
      },
      threadsOnPage(pageNum) {
          const nodesPerPage = Index.threadsNumPerPage;
          const offset = nodesPerPage * (pageNum - 1);
          return Index.sortedThreadIDs.slice(offset, offset + nodesPerPage);
      },
      buildStructure(threadIDs) {
          const threads = Index.buildThreads(threadIDs, false, Conf['Show Replies']);
          const nodes = [];
          for (var thread of threads) {
              nodes.push(thread.nodes.root, $.el('hr'));
          }
          $.add(Index.root, nodes);
          if (Index.root.parentNode) {
              $.event('PostsInserted', null, Index.root);
          }
          Index.loaded = true;
      },
      buildCatalog(threadIDs) {
          let i = 0;
          const n = threadIDs.length;
          let node0 = null;
          var fn = function () {
              if (node0 && !node0.parentNode) {
                  return;
              } // Index.root cleared
              const j = (i > 0) && Index.root.parentNode ? n : i + 30;
              node0 = Index.buildCatalogPart(threadIDs.slice(i, j))[0];
              i = j;
              if (i < n) {
                  return $.queueTask(fn);
              }
              else {
                  if (Index.root.parentNode) {
                      $.event('PostsInserted', null, Index.root);
                  }
                  return Index.loaded = true;
              }
          };
          fn();
      },
      buildCatalogPart(threadIDs) {
          const threads = Index.buildThreads(threadIDs, true);
          Index.buildCatalogViews(threads);
          Index.sizeCatalogViews(threads);
          const nodes = [];
          for (var thread of threads) {
              thread.OP.setCatalogOP(true);
              $.add(thread.catalogView.nodes.root, thread.OP.nodes.root);
              nodes.push(thread.catalogView.nodes.root);
              $.on(thread.catalogView.nodes.root, 'mouseenter', Index.cb.catalogReplies.bind(thread));
              $.on(thread.OP.nodes.root, 'mouseenter', Index.cb.hoverAdjust.bind(thread.OP.nodes));
          }
          $.add(Index.root, nodes);
          return nodes;
      },
      clearSearch() {
          Index.searchInput.value = '';
          Index.onSearchInput();
          Index.searchInput.focus();
      },
      setupSearch() {
          Index.searchInput.value = Index.search;
          if (Index.search) {
              Index.searchInput.dataset.searching = 1;
          }
          else {
              // XXX https://bugzilla.mozilla.org/show_bug.cgi?id=1021289
              Index.searchInput.removeAttribute('data-searching');
          }
      },
      onSearchInput() {
          const search = Index.searchInput.value.trim();
          if (search === Index.search) {
              return;
          }
          Index.pushState({
              search,
              replace: !!search === !!Index.search
          });
          Index.pageLoad(false);
      },
      querySearch(query) {
          let keywords, match;
          if (match = query.match(/^([\w+]+):\/(.*)\/(\w*)$/)) {
              let regexp;
              try {
                  regexp = RegExp(match[2], match[3]);
              }
              catch (error) {
                  return [];
              }
              return Index.sortedThreadIDs.filter(ID => regexp.test(Filter.values(match[1], Index.parsedThreads[ID]).join('\n')));
          }
          if (!(keywords = query.toLowerCase().match(/\S+/g))) {
              return;
          }
          return Index.sortedThreadIDs.filter(ID => Index.searchMatch(Index.parsedThreads[ID], keywords));
      },
      searchMatch(obj, keywords) {
          const { info, file } = obj;
          if (info.comment == null) {
              info.comment = g.SITE.Build.parseComment(info.commentHTML.innerHTML);
          }
          let text = [];
          for (var key of ['comment', 'subject', 'name', 'tripcode']) {
              if (key in info) {
                  text.push(info[key]);
              }
          }
          if (file) {
              text.push(file.name);
          }
          text = text.join(' ').toLowerCase();
          for (var keyword of keywords) {
              if (-1 === text.indexOf(keyword)) {
                  return false;
              }
          }
          return true;
      }
  };

  var ThreadHiding = {
      init() {
          if (!['index', 'catalog'].includes(g.VIEW) || (!Conf['Thread Hiding Buttons'] && !(Conf.Menu && Conf['Thread Hiding Link']) && !Conf['JSON Index'])) {
              return;
          }
          this.db = new DataBoard('hiddenThreads');
          if (g.VIEW === 'catalog') {
              return this.catalogWatch();
          }
          this.catalogSet(g.BOARD);
          $.on(d, 'IndexRefreshInternal', this.onIndexRefresh);
          if (Conf['Thread Hiding Buttons']) {
              $.addClass(doc, 'thread-hide');
          }
          Callbacks.Post.push({
              name: 'Thread Hiding',
              cb: this.node
          });
      },
      catalogSet(board) {
          if (!$.hasStorage || (g.SITE.software !== 'yotsuba')) {
              return;
          }
          const hiddenThreads = ThreadHiding.db.get({
              boardID: board.ID,
              defaultValue: dict()
          });
          for (var threadID in hiddenThreads) {
              hiddenThreads[threadID] = true;
          }
          return localStorage.setItem(`4chan-hide-t-${board}`, JSON.stringify(hiddenThreads));
      },
      catalogWatch() {
          if (!$.hasStorage || (g.SITE.software !== 'yotsuba')) {
              return;
          }
          this.hiddenThreads = JSON.parse(localStorage.getItem(`4chan-hide-t-${g.BOARD}`)) || {};
          return PageReady.ready(() => // 4chan's catalog sets the style to "display: none;" when hiding or unhiding a thread.
           new MutationObserver(ThreadHiding.catalogSave).observe($.id('threads'), {
              attributes: true,
              subtree: true,
              attributeFilter: ['style']
          }));
      },
      catalogSave() {
          let threadID;
          const hiddenThreads2 = JSON.parse(localStorage.getItem(`4chan-hide-t-${g.BOARD}`)) || {};
          for (threadID in hiddenThreads2) {
              if (!$.hasOwn(ThreadHiding.hiddenThreads, threadID)) {
                  ThreadHiding.db.set({
                      boardID: g.BOARD.ID,
                      threadID,
                      val: { makeStub: Conf.Stubs }
                  });
              }
          }
          for (threadID in ThreadHiding.hiddenThreads) {
              if (!$.hasOwn(hiddenThreads2, threadID)) {
                  ThreadHiding.db.delete({
                      boardID: g.BOARD.ID,
                      threadID
                  });
              }
          }
          return ThreadHiding.hiddenThreads = hiddenThreads2;
      },
      isHidden(boardID, threadID) {
          return !!(ThreadHiding.db && ThreadHiding.db.get({ boardID, threadID }));
      },
      node() {
          let data;
          if (this.isReply || this.isClone || this.isFetchedQuote) {
              return;
          }
          if (Conf['Thread Hiding Buttons']) {
              $.prepend(this.nodes.root, ThreadHiding.makeButton(this.thread, 'hide'));
          }
          if (data = ThreadHiding.db.get({ boardID: this.board.ID, threadID: this.ID })) {
              ThreadHiding.hide(this.thread, data.makeStub, 'Hidden manually');
          }
      },
      onIndexRefresh() {
          return g.BOARD.threads.forEach(function (thread) {
              const { root } = thread.nodes;
              if (thread.isHidden && thread.stub && !root.contains(thread.stub)) {
                  ThreadHiding.makeStub(thread, root);
              }
          });
      },
      menu: {
          init() {
              if ((g.VIEW !== 'index') || !Conf.Menu || !Conf['Thread Hiding Link']) {
                  return;
              }
              let div = $.el('div', {
                  className: 'hide-thread-link',
                  textContent: 'Hide'
              });
              const apply = $.el('a', {
                  textContent: 'Apply',
                  href: 'javascript:;'
              });
              $.on(apply, 'click', ThreadHiding.menu.hide);
              const makeStub = UI.checkbox('Stubs', 'Make stub');
              Menu.menu.addEntry({
                  el: div,
                  order: 20,
                  open({ thread, isReply }) {
                      if (isReply || thread.isHidden || (Conf['JSON Index'] && (Conf['Index Mode'] === 'catalog'))) {
                          return false;
                      }
                      ThreadHiding.menu.thread = thread;
                      return true;
                  },
                  subEntries: [{ el: apply }, { el: makeStub }]
              });
              div = $.el('a', {
                  className: 'show-thread-link',
                  textContent: 'Show',
                  href: 'javascript:;'
              });
              $.on(div, 'click', ThreadHiding.menu.show);
              Menu.menu.addEntry({
                  el: div,
                  order: 20,
                  open({ thread, isReply }) {
                      if (isReply || !thread.isHidden || (Conf['JSON Index'] && (Conf['Index Mode'] === 'catalog'))) {
                          return false;
                      }
                      ThreadHiding.menu.thread = thread;
                      return true;
                  }
              });
              const hideStubLink = $.el('a', {
                  textContent: 'Hide stub',
                  href: 'javascript:;'
              });
              $.on(hideStubLink, 'click', ThreadHiding.menu.hideStub);
              return Menu.menu.addEntry({
                  el: hideStubLink,
                  order: 15,
                  open({ thread, isReply }) {
                      if (isReply || !thread.isHidden || (Conf['JSON Index'] && (Conf['Index Mode'] === 'catalog'))) {
                          return false;
                      }
                      return ThreadHiding.menu.thread = thread;
                  }
              });
          },
          hide() {
              const makeStub = $('input', this.parentNode).checked;
              const { thread } = ThreadHiding.menu;
              ThreadHiding.hide(thread, makeStub, 'Hidden manually');
              ThreadHiding.saveHiddenState(thread, makeStub);
              $.event('CloseMenu');
          },
          show() {
              const { thread } = ThreadHiding.menu;
              ThreadHiding.show(thread);
              ThreadHiding.saveHiddenState(thread);
              $.event('CloseMenu');
          },
          hideStub() {
              const { thread } = ThreadHiding.menu;
              ThreadHiding.show(thread);
              ThreadHiding.hide(thread, false);
              ThreadHiding.saveHiddenState(thread, false);
              $.event('CloseMenu');
          }
      },
      makeButton(thread, type) {
          const span = $.el('span', {
              className: 'stub-icon',
          });
          const a = $.el('a', {
              className: `${type}-post-button ${type}-thread-button`,
              href: 'javascript:;'
          });
          Icon.set(span, type === 'hide' ? 'squareMinus' : 'squarePlus');
          $.add(a, span);
          a.dataset.fullID = thread.fullID;
          $.on(a, 'click', ThreadHiding.toggle);
          return a;
      },
      makeStub(thread, root, reason) {
          let summary, threadDivider;
          let numReplies = $$(g.SITE.selectors.replyOriginal, root).length;
          if (summary = $(g.SITE.selectors.summary, root)) {
              numReplies += +summary.textContent.match(/\d+/);
          }
          const a = ThreadHiding.makeButton(thread, 'show');
          const { nameBlock, subject } = thread.OP.info;
          if (subject) {
              $.add(a, $.el('span', {
                  className: 'stub-subject',
                  textContent: subject
              }));
          }
          $.add(a, $.el('span', {
              className: 'stub-name',
              textContent: nameBlock
          }));
          $.add(a, $.el('span', {
              className: 'stub-replies',
              textContent: `(${numReplies} repl${numReplies === 1 ? 'y' : 'ies'})`
          }));
          let reasons = thread.OP.filterResults?.reasons || [];
          if (reason)
              reasons = [...reasons, reason];
          if (Conf['Filter Reason'] && reasons.length) {
              const reasonsSpan = $.el('span', { className: 'stub-reasons' });
              $.add(reasonsSpan, reasons.map(re => $.el('span', { className: 'stub-reason', textContent: re })));
              a.appendChild(reasonsSpan);
          }
          thread.stub = $.el('div', { className: 'stub' });
          if (Conf.Menu) {
              $.add(thread.stub, [a, Menu.makeButton(thread.OP)]);
          }
          else {
              $.add(thread.stub, a);
          }
          if (!Conf['Filter Reason'] && reasons)
              thread.stub.title = reasons.join(' & ');
          $.prepend(root, thread.stub);
          // Prevent hiding of thread divider on sites that put it inside the thread
          if (threadDivider = $(g.SITE.selectors.threadDivider, root)) {
              return $.addClass(threadDivider, 'threadDivider');
          }
      },
      saveHiddenState(thread, makeStub) {
          if (thread.isHidden) {
              ThreadHiding.db.set({
                  boardID: thread.board.ID,
                  threadID: thread.ID,
                  val: { makeStub }
              });
          }
          else {
              ThreadHiding.db.delete({
                  boardID: thread.board.ID,
                  threadID: thread.ID
              });
          }
          return ThreadHiding.catalogSet(thread.board);
      },
      toggle(thread) {
          if (!(thread instanceof Thread)) {
              thread = g.threads.get(this.dataset.fullID);
          }
          if (thread.isHidden) {
              ThreadHiding.show(thread);
          }
          else {
              ThreadHiding.hide(thread, undefined, 'Hidden manually');
          }
          return ThreadHiding.saveHiddenState(thread);
      },
      hide(thread, makeStub = Conf.Stubs, reason) {
          if (thread.isHidden) {
              return;
          }
          const threadRoot = thread.nodes.root;
          thread.isHidden = true;
          Index.updateHideLabel();
          if (thread.catalogView && !Index.showHiddenThreads) {
              $.rm(thread.catalogView.nodes.root);
              $.event('PostsRemoved', null, Index.root);
          }
          if (!makeStub) {
              return threadRoot.hidden = true;
          }
          ThreadHiding.makeStub(thread, threadRoot, reason);
      },
      show(thread) {
          if (thread.stub) {
              $.rm(thread.stub);
              delete thread.stub;
          }
          const threadRoot = thread.nodes.root;
          threadRoot.hidden = (thread.isHidden = false);
          Index.updateHideLabel();
          if (thread.catalogView && Conf['Index Mode'] === 'catalog') {
              const { root } = thread.catalogView.nodes;
              if (Index.showHiddenThreads) {
                  $.rm(root);
                  $.event('PostsRemoved', null, Index.root);
              }
              else {
                  let i = Index.sortedThreadIDs.indexOf(thread.ID) - 1;
                  while (true) {
                      if (i < 0) {
                          $('.board').insertAdjacentElement('afterbegin', root);
                          break;
                      }
                      const rootPrevious = d.getElementById(`t${Index.sortedThreadIDs[i]}`);
                      if (rootPrevious) {
                          rootPrevious.insertAdjacentElement('afterend', root);
                          break;
                      }
                      --i;
                  }
                  $.event('PostsInserted', null, Index.root);
              }
          }
      }
  };

  const FappeTyme = {
      init() {
          if ((!Conf['Fappe Tyme'] && !Conf['Werk Tyme']) || !['index', 'thread', 'archive'].includes(g.VIEW)) {
              return;
          }
          this.nodes = {};
          this.enabled = {
              fappe: false,
              werk: Conf.werk
          };
          for (const type of ["Fappe", "Werk"]) {
              if (Conf[`${type} Tyme`]) {
                  const lc = type.toLowerCase();
                  const el = UI.checkbox(lc, `${type} Tyme`, false);
                  el.title = `${type} Tyme`;
                  this.nodes[lc] = el.firstElementChild;
                  if (Conf[lc]) {
                      this.set(lc, true);
                  }
                  $.on(this.nodes[lc], 'change', this.toggle.bind(this, lc));
                  Header.menu.addEntry({
                      el,
                      order: 97
                  });
                  const indicator = $.el('span', {
                      className: 'indicator',
                      textContent: type[0],
                      title: `${type} Tyme active`
                  });
                  $.on(indicator, 'click', function () {
                      const check = $.getOwn(FappeTyme.nodes, this.parentNode.id.replace('shortcut-', ''));
                      check.checked = !check.checked;
                      return $.event('change', null, check);
                  });
                  Header.addShortcut(lc, indicator, 410);
              }
          }
          if (Conf['Werk Tyme']) {
              $.sync('werk', this.set.bind(this, 'werk'));
          }
          Callbacks.Post.push({
              name: 'Fappe Tyme',
              cb: this.node
          });
          Callbacks.CatalogThread.push({
              name: 'Werk Tyme',
              cb: this.catalogNode
          });
      },
      node() {
          this.nodes.root.classList.toggle('noFile', !this.files.length);
      },
      catalogNode() {
          const file = this.thread.OP.files[0];
          if (!file) {
              return;
          }
          const filename = $.el('div', {
              textContent: file.name,
              className: 'werkTyme-filename'
          });
          $.add(this.nodes.thumb.parentNode, filename);
      },
      set(type, enabled) {
          this.enabled[type] = (this.nodes[type].checked = enabled);
          return $[`${enabled ? 'add' : 'rm'}Class`](doc, `${type}Tyme`);
      },
      toggle(type) {
          this.set(type, !this.enabled[type]);
          if (type === 'werk') {
              return $.cb.checked.call(this.nodes[type]);
          }
      }
  };

  var galleryPage = `<div class="gal-viewport">
  <span class="gal-buttons">
    <a href="javascript:;" class="gal-start" title="Start slideshow"><i></i></a>
    <a href="javascript:;" class="gal-stop" title="Stop slideshow"><i></i></a>
    <a href="javascript:;" class="menu-button"><i></i></a>
    <a href="javascript:;" class="gal-close">×</a>
  </span>
  <div class="gal-labels">
    <span class="gal-count">
      <span class="count"></span> / <span class="total"></span>
    </span>
    <a class="gal-name" target="_blank"></a>
    <span class="gal-dimensions"></span>
    <span class="gal-sauce"></span>
  </div>
  <div class="gal-prev"></div>
  <div class="gal-image">
    <a href="javascript:;"><img></a>
  </div>
  <div class="gal-next"></div>
</div>
<div class="gal-thumbnails"></div>`;

  const Sauce = {
      init() {
          let link;
          if (!['index', 'thread'].includes(g.VIEW) || !Conf.Sauce) {
              return;
          }
          $.addClass(doc, 'show-sauce');
          const links = [];
          for (link of Conf.sauces.split('\n')) {
              let linkData;
              if ((link[0] !== '#') && (linkData = this.parseLink(link))) {
                  links.push(linkData);
              }
          }
          if (!links.length) {
              return;
          }
          this.links = links;
          this.link = $.el('a', {
              target: '_blank',
              className: 'sauce'
          });
          Callbacks.Post.push({
              name: 'Sauce',
              cb: this.node
          });
      },
      parseLink(link) {
          if (!(link = link.trim())) {
              return null;
          }
          const parts = dict();
          const iterable = link.split(/;(?=(?:text|boards|types|regexp|sandbox):?)/);
          for (let i = 0; i < iterable.length; i++) {
              const part = iterable[i];
              if (i === 0) {
                  parts.url = part;
              }
              else {
                  const m = part.match(/^(\w*):?(.*)$/);
                  parts[m[1]] = m[2];
              }
          }
          if (!parts.text) {
              parts.text = parts.url.match(/(\w+)\.\w+\//)?.[1] || '?';
          }
          if ('boards' in parts) {
              parts.boards = Filter.parseBoards(parts.boards);
          }
          if ('regexp' in parts) {
              try {
                  let regexp;
                  if (regexp = parts.regexp.match(/^\/(.*)\/(\w*)$/)) {
                      parts.regexp = RegExp(regexp[1], regexp[2]);
                  }
                  else {
                      parts.regexp = RegExp(parts.regexp);
                  }
              }
              catch (err) {
                  new Notice('warning', [
                      $.tn("Invalid regexp for Sauce link:"),
                      $.el('br'),
                      $.tn(link),
                      $.el('br'),
                      $.tn(err.message)
                  ], 60);
                  return null;
              }
          }
          return parts;
      },
      createSauceLink(link, post, file) {
          let a, matches, needle;
          const ext = file.url.match(/[^.]*$/)[0];
          const parts = dict();
          $.extend(parts, link);
          if (!!parts.boards && !parts.boards[`${post.siteID}/${post.boardID}`] && !parts.boards[`${post.siteID}/*`]) {
              return null;
          }
          if (!!parts.types && (needle = ext, !parts.types.split(',').includes(needle))) {
              return null;
          }
          if (!!parts.regexp && (!(matches = file.name.match(parts.regexp)))) {
              return null;
          }
          const missing = [];
          for (const key of ['url', 'text']) {
              parts[key] = parts[key].replace(/%(T?URL|IMG|[sh]?MD5|board|name|%|semi|\$\d+)/g, function (orig, parameter) {
                  let type;
                  if (parameter[0] === '$') {
                      if (!matches) {
                          return orig;
                      }
                      type = matches[parameter.slice(1)] || '';
                  }
                  else {
                      type = Sauce.formatters[parameter](post, file, ext);
                      if (!type) {
                          missing.push(parameter);
                          return '';
                      }
                  }
                  if ((key === 'url') && !['%', 'semi'].includes(parameter)) {
                      if (/^javascript:/i.test(parts.url)) {
                          type = JSON.stringify(type);
                      }
                      type = encodeURIComponent(type);
                  }
                  return type;
              });
          }
          if (g.SITE.areMD5sDeferred?.(post.board) && missing.length && !missing.filter(x => !/^.?MD5$/.test(x)).length) {
              a = Sauce.link.cloneNode(false);
              a.dataset.skip = '1';
              return a;
          }
          if (missing.length) {
              return null;
          }
          a = Sauce.link.cloneNode(false);
          a.href = parts.url;
          a.textContent = parts.text;
          if (/^javascript:/i.test(parts.url)) {
              a.removeAttribute('target');
          }
          return a;
      },
      node() {
          if (this.isClone) {
              return;
          }
          for (const file of this.files) {
              Sauce.file(this, file);
          }
      },
      file(post, file) {
          let link, node;
          const nodes = [];
          const skipped = [];
          for (link of Sauce.links) {
              if (node = Sauce.createSauceLink(link, post, file)) {
                  nodes.push($.tn(' '), node);
                  if (node.dataset.skip) {
                      skipped.push([link, node]);
                  }
              }
          }
          $.add(file.text, nodes);
          if (skipped.length) {
              const observer = new MutationObserver(function () {
                  if (file.text.dataset.md5) {
                      for ([link, node] of skipped) {
                          let node2;
                          if (node2 = Sauce.createSauceLink(link, post, file)) {
                              $.replace(node, node2);
                          }
                      }
                      return observer.disconnect();
                  }
              });
              return observer.observe(file.text, { attributes: true });
          }
      },
      formatters: {
          TURL(post, file) { return file.thumbURL; },
          URL(post, file) { return file.url; },
          IMG(post, file, ext) { if (['gif', 'jpg', 'jpeg', 'png'].includes(ext)) {
              return file.url;
          }
          else {
              return file.thumbURL;
          } },
          MD5(post, file) { return file.MD5; },
          sMD5(post, file) { return file.MD5?.replace(/[+/=]/g, c => ({ '+': '-', '/': '_', '=': '' })[c]); },
          hMD5(post, file) {
              if (file.MD5) {
                  return Array.from(atob(file.MD5), c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
              }
          },
          board(post) { return post.board.ID; },
          name(post, file) { return file.name; },
          '%'() { return '%'; },
          semi() { return ';'; }
      }
  };

  const Gallery = {
      init() {
          if (!(this.enabled = Conf.Gallery && ['index', 'thread'].includes(g.VIEW))) {
              return;
          }
          this.delay = Conf['Slide Delay'];
          const el = $.el('a', {
              href: 'javascript:;',
              title: 'Gallery',
          });
          Icon.set(el, 'image', 'Gallery');
          $.on(el, 'click', this.cb.toggle);
          Header.addShortcut('gallery', el, 530);
          Callbacks.Post.push({
              name: 'Gallery',
              cb: this.node
          });
      },
      node() {
          return (() => {
              const result = [];
              for (const file of this.files) {
                  if (file.thumb) {
                      if (Gallery.nodes) {
                          Gallery.generateThumb(this, file);
                          Gallery.nodes.total.textContent = Gallery.images.length;
                      }
                      if (!Conf['Image Expansion'] && ((g.SITE.software !== 'tinyboard') || !Main.jsEnabled)) {
                          result.push($.on(file.thumbLink, 'click', Gallery.cb.image));
                      }
                      else {
                          result.push(undefined);
                      }
                  }
              }
              return result;
          })();
      },
      build(image) {
          let dialog, thumb;
          const { cb } = Gallery;
          if (Conf['Fullscreen Gallery']) {
              $.one(d, 'fullscreenchange mozfullscreenchange webkitfullscreenchange', () => $.on(d, 'fullscreenchange mozfullscreenchange webkitfullscreenchange', cb.close));
              doc.mozRequestFullScreen?.();
              doc.webkitRequestFullScreen?.(Element.ALLOW_KEYBOARD_INPUT);
          }
          Gallery.images = [];
          const nodes = (Gallery.nodes = {});
          Gallery.fileIDs = dict();
          Gallery.slideshow = false;
          nodes.el = (dialog = $.el('div', { id: 'a-gallery' }));
          $.extend(dialog, { innerHTML: galleryPage });
          const object = {
              buttons: '.gal-buttons',
              frame: '.gal-image',
              name: '.gal-name',
              count: '.count',
              total: '.total',
              sauce: '.gal-sauce',
              thumbs: '.gal-thumbnails',
              next: '.gal-image a',
              current: '.gal-image img',
              dimensions: '.gal-dimensions'
          };
          for (const key in object) {
              const value = object[key];
              nodes[key] = $(value, dialog);
          }
          const menuButton = $('.menu-button', dialog);
          nodes.menu = new UI.Menu('gallery');
          $.on(nodes.frame, 'click', cb.blank);
          if (Conf['Mouse Wheel Volume']) {
              $.on(nodes.frame, 'wheel', Volume.wheel);
          }
          $.on(nodes.next, 'click', cb.click);
          $.on(nodes.name, 'click', ImageCommon.download);
          const prev = $('.gal-prev', dialog);
          const next = $('.gal-next', dialog);
          const start = $('.gal-start', dialog);
          const stop = $('.gal-stop', dialog);
          const close = $('.gal-close', dialog);
          $.on(prev, 'click', cb.prev);
          $.on(next, 'click', cb.next);
          $.on(start, 'click', cb.start);
          $.on(stop, 'click', cb.stop);
          $.on(close, 'click', cb.close);
          $.on(menuButton, 'click', function (e) {
              return nodes.menu.toggle(e, this, g);
          });
          Icon.set(menuButton, 'caretDown');
          Icon.set(start, 'play');
          Icon.set(stop, 'stop');
          Icon.set(close, 'xmark');
          Icon.set(prev, 'caretLeft');
          Icon.set(next, 'caretRight');
          for (const entry of Gallery.menu.createSubEntries()) {
              entry.order = 0;
              nodes.menu.addEntry(entry);
          }
          $.on(d, 'keydown', cb.keybinds);
          if (Conf.Keybinds) {
              $.off(d, 'keydown', Keybinds.keydown);
          }
          $.on(window, 'resize', Gallery.cb.setHeight);
          for (const postThumb of $$(g.SITE.selectors.file.thumb)) {
              let post;
              if (!(post = Get.postFromNode(postThumb))) {
                  continue;
              }
              for (const file of post.files) {
                  if (file.thumb) {
                      Gallery.generateThumb(post, file);
                      // If no image to open is given, pick image we have scrolled to.
                      if (!image && Gallery.fileIDs[`${post.fullID}.${file.index}`]) {
                          const candidate = file.thumbLink;
                          if ((Header.getTopOf(candidate) + candidate.getBoundingClientRect().height) >= 0) {
                              image = candidate;
                          }
                      }
                  }
              }
          }
          $.addClass(doc, 'gallery-open');
          $.add(d.body, dialog);
          nodes.thumbs.scrollTop = 0;
          nodes.current.parentElement.scrollTop = 0;
          if (image) {
              thumb = $(`[href='${image.href}']`, nodes.thumbs);
          }
          if (!thumb) {
              thumb = Gallery.images[Gallery.images.length - 1];
          }
          if (thumb) {
              Gallery.open(thumb);
          }
          doc.style.overflow = 'hidden';
          nodes.total.textContent = Gallery.images.length;
      },
      generateThumb(post, file) {
          if (post.isClone || post.isHidden) {
              return;
          }
          if (!file || !file.thumb || (!file.isImage && !file.isVideo && !Conf['PDF in Gallery'])) {
              return;
          }
          if (Gallery.fileIDs[`${post.fullID}.${file.index}`]) {
              return;
          }
          Gallery.fileIDs[`${post.fullID}.${file.index}`] = true;
          const thumb = $.el('a', {
              className: 'gal-thumb',
              href: file.url,
              target: '_blank',
              title: file.name
          });
          thumb.dataset.id = Gallery.images.length;
          thumb.dataset.post = post.fullID;
          thumb.dataset.file = file.index;
          const thumbImg = file.thumb.cloneNode(false);
          thumbImg.style.cssText = '';
          $.add(thumb, thumbImg);
          $.on(thumb, 'click', Gallery.cb.open);
          Gallery.images.push(thumb);
          $.add(Gallery.nodes.thumbs, thumb);
      },
      load(thumb, errorCB) {
          const ext = thumb.href.match(/\w*$/);
          const elType = $.getOwn({ 'webm': 'video', 'mp4': 'video', 'ogv': 'video', 'pdf': 'iframe' }, ext) || 'img';
          const file = $.el(elType);
          $.extend(file.dataset, thumb.dataset);
          $.on(file, 'error', errorCB);
          file.src = thumb.href;
          return file;
      },
      open(thumb) {
          let el, file, post;
          const { nodes } = Gallery;
          const oldID = +nodes.current.dataset.id;
          const newID = +thumb.dataset.id;
          // Highlight, center selected thumbnail
          if (el = Gallery.images[oldID]) {
              $.rmClass(el, 'gal-highlight');
          }
          $.addClass(thumb, 'gal-highlight');
          nodes.thumbs.scrollTop = (thumb.offsetTop + (thumb.offsetHeight / 2)) - (nodes.thumbs.clientHeight / 2);
          // Load image or use preloaded image
          if (Gallery.cache?.dataset.id === ('' + newID)) {
              file = Gallery.cache;
              $.off(file, 'error', Gallery.cacheError);
              $.on(file, 'error', Gallery.error);
          }
          else {
              file = Gallery.load(thumb, Gallery.error);
          }
          // Replace old image with new one
          $.off(nodes.current, 'error', Gallery.error);
          ImageCommon.pause(nodes.current);
          $.replace(nodes.current, file);
          nodes.current = file;
          if (file.nodeName === 'VIDEO') {
              file.loop = true;
              Volume.setup(file);
              if (Conf.Autoplay) {
                  file.play();
              }
              if (Conf['Show Controls'])
                  file.controls = true;
          }
          doc.classList.toggle('gal-pdf', file.nodeName === 'IFRAME');
          Gallery.cb.setHeight();
          nodes.count.textContent = +thumb.dataset.id + 1;
          nodes.name.download = (nodes.name.textContent = thumb.title);
          nodes.name.href = thumb.href;
          nodes.frame.scrollTop = 0;
          nodes.next.focus();
          if (Conf['Image Resolution'] && (post = g.posts.get(file.dataset.post)) && post.file.dimensions) {
              const [w, h] = post.file.dimensions.split('x');
              nodes.dimensions.innerText = `${w} x ${h} px`;
          }
          // Set sauce links
          $.rmAll(nodes.sauce);
          if (Conf.Sauce && Sauce.links && (post = g.posts.get(file.dataset.post))) {
              const sauces = [];
              for (const link of Sauce.links) {
                  let node;
                  if (node = Sauce.createSauceLink(link, post, post.files[+file.dataset.file])) {
                      sauces.push($.tn(' '), node);
                  }
              }
              $.add(nodes.sauce, sauces);
          }
          // Continue slideshow if moving forward, stop otherwise
          if (Gallery.slideshow && ((newID > oldID) || ((oldID === (Gallery.images.length - 1)) && (newID === 0)))) {
              Gallery.setupTimer();
          }
          else {
              Gallery.cb.stop();
          }
          // Scroll to post
          if (Conf['Scroll to Post'] && (post = g.posts.get(file.dataset.post))) {
              Header.scrollTo(post.nodes.root);
          }
          // Preload next image
          if (isNaN(oldID) || (newID === ((oldID + 1) % Gallery.images.length))) {
              return Gallery.cache = Gallery.load(Gallery.images[(newID + 1) % Gallery.images.length], Gallery.cacheError);
          }
      },
      error() {
          if (this.error?.code === MediaError.MEDIA_ERR_DECODE) {
              return new Notice('error', 'Corrupt or unplayable video', 30);
          }
          if (ImageCommon.isFromArchive(this)) {
              return;
          }
          const post = g.posts.get(this.dataset.post);
          const file = post.files[+this.dataset.file];
          return ImageCommon.error(this, post, file, null, url => {
              if (!url) {
                  return;
              }
              Gallery.images[+this.dataset.id].href = url;
              if (Gallery.nodes.current === this) {
                  return this.src = url;
              }
          });
      },
      cacheError() {
          delete Gallery.cache;
      },
      cleanupTimer() {
          clearTimeout(Gallery.timeoutID);
          const { current } = Gallery.nodes;
          $.off(current, 'canplaythrough load', Gallery.startTimer);
          $.off(current, 'ended', Gallery.cb.next);
      },
      startTimer() {
          return Gallery.timeoutID = setTimeout(Gallery.checkTimer, Gallery.delay * SECOND);
      },
      setupTimer() {
          Gallery.cleanupTimer();
          const { current } = Gallery.nodes;
          const isVideo = current.nodeName === 'VIDEO';
          if (isVideo) {
              current.play();
          }
          if ((isVideo ? current.readyState >= 4 : current.complete) || (current.nodeName === 'IFRAME')) {
              return Gallery.startTimer();
          }
          else {
              return $.on(current, (isVideo ? 'canplaythrough' : 'load'), Gallery.startTimer);
          }
      },
      checkTimer() {
          const { current } = Gallery.nodes;
          if ((current.nodeName === 'VIDEO') && !current.paused) {
              $.on(current, 'ended', Gallery.cb.next);
              return current.loop = false;
          }
          else {
              return Gallery.cb.next();
          }
      },
      cb: {
          keybinds(e) {
              let key;
              if (!(key = Keybinds.keyCode(e))) {
                  return;
              }
              const cb = (() => {
                  switch (key) {
                      case Conf.Close:
                      case Conf['Open Gallery']:
                          return Gallery.cb.close;
                      case Conf['Next Gallery Image']:
                          return Gallery.cb.next;
                      case Conf['Advance Gallery']:
                          return Gallery.cb.advance;
                      case Conf['Previous Gallery Image']:
                          return Gallery.cb.prev;
                      case Conf.Pause:
                          return Gallery.cb.pause;
                      case Conf.Slideshow:
                          return Gallery.cb.toggleSlideshow;
                      case Conf['Rotate image anticlockwise']:
                          return Gallery.cb.rotateLeft;
                      case Conf['Rotate image clockwise']:
                          return Gallery.cb.rotateRight;
                      case Conf['Download Gallery Image']:
                          return Gallery.cb.download;
                  }
              })();
              if (!cb) {
                  return;
              }
              e.stopPropagation();
              e.preventDefault();
              return cb();
          },
          open(e) {
              if (e) {
                  e.preventDefault();
              }
              if (this) {
                  return Gallery.open(this);
              }
          },
          image(e) {
              e.preventDefault();
              e.stopPropagation();
              return Gallery.build(this);
          },
          prev() {
              Gallery.cb.open.call(Gallery.images[+Gallery.nodes.current.dataset.id - 1] || Gallery.images[Gallery.images.length - 1]);
          },
          next() {
              Gallery.cb.open.call(Gallery.images[+Gallery.nodes.current.dataset.id + 1] || Gallery.images[0]);
          },
          click(e) {
              if (ImageCommon.onControls(e)) {
                  return;
              }
              e.preventDefault();
              Gallery.cb.advance();
          },
          advance() { if (!Conf.Autoplay && Gallery.nodes.current.paused) {
              return Gallery.nodes.current.play();
          }
          else {
              return Gallery.cb.next();
          } },
          toggle() { return (Gallery.nodes ? Gallery.cb.close : Gallery.build)(); },
          blank(e) { if (e.target === this) {
              return Gallery.cb.close();
          } },
          toggleSlideshow() { return Gallery.cb[Gallery.slideshow ? 'stop' : 'start'](); },
          download() {
              const name = $('.gal-name');
              name.click();
          },
          pause() {
              Gallery.cb.stop();
              const { current } = Gallery.nodes;
              if (current.nodeName === 'VIDEO') {
                  return current[current.paused ? 'play' : 'pause']();
              }
          },
          start() {
              $.addClass(Gallery.nodes.buttons, 'gal-playing');
              Gallery.slideshow = true;
              Gallery.setupTimer();
          },
          stop() {
              if (!Gallery.slideshow) {
                  return;
              }
              Gallery.cleanupTimer();
              const { current } = Gallery.nodes;
              if (current.nodeName === 'VIDEO') {
                  current.loop = true;
              }
              $.rmClass(Gallery.nodes.buttons, 'gal-playing');
              return Gallery.slideshow = false;
          },
          rotateLeft() { return Gallery.cb.rotate(270); },
          rotateRight() { return Gallery.cb.rotate(90); },
          rotate: debounce(100, function (delta) {
              const { current } = Gallery.nodes;
              if (current.nodeName === 'IFRAME') {
                  return;
              }
              current.dataRotate = ((current.dataRotate || 0) + delta) % 360;
              current.style.transform = `rotate(${current.dataRotate}deg)`;
              Gallery.cb.setHeight();
          }),
          close() {
              $.off(Gallery.nodes.current, 'error', Gallery.error);
              ImageCommon.pause(Gallery.nodes.current);
              $.rm(Gallery.nodes.el);
              $.rmClass(doc, 'gallery-open');
              if (Conf['Fullscreen Gallery']) {
                  $.off(d, 'fullscreenchange mozfullscreenchange webkitfullscreenchange', Gallery.cb.close);
                  if (d.fullscreenElement || d.mozFullScreenElement || d.webkitFullscreenElement) {
                      d.mozCancelFullScreen?.();
                      d.webkitExitFullscreen?.();
                  }
              }
              delete Gallery.nodes;
              delete Gallery.fileIDs;
              doc.style.overflow = '';
              $.off(d, 'keydown', Gallery.cb.keybinds);
              if (Conf.Keybinds) {
                  $.on(d, 'keydown', Keybinds.keydown);
              }
              $.off(window, 'resize', Gallery.cb.setHeight);
              clearTimeout(Gallery.timeoutID);
          },
          setFitness() {
              return (this.checked ? $.addClass : $.rmClass)(doc, `gal-${this.name.toLowerCase().replace(/\s+/g, '-')}`);
          },
          setHeight: debounce(100, function () {
              let dim, margin, minHeight;
              const { current, frame } = Gallery.nodes;
              const { style } = current;
              if (Conf['Stretch to Fit'] && (dim = g.posts.get(current.dataset.post)?.files[+current.dataset.file].dimensions)) {
                  const [width, height] = dim.split('x');
                  let containerWidth = frame.clientWidth;
                  let containerHeight = doc.clientHeight - 25;
                  if (((current.dataRotate || 0) % 180) === 90) {
                      [containerWidth, containerHeight] = [containerHeight, containerWidth];
                  }
                  minHeight = Math.min(containerHeight, (height / width) * containerWidth);
                  style.minHeight = minHeight + 'px';
                  style.minWidth = ((width / height) * minHeight) + 'px';
              }
              else {
                  style.minHeight = (style.minWidth = '');
              }
              if (((current.dataRotate || 0) % 180) === 90) {
                  style.maxWidth = Conf['Fit Height'] ? `${doc.clientHeight - 25}px` : 'none';
                  style.maxHeight = Conf['Fit Width'] ? `${frame.clientWidth}px` : 'none';
                  margin = (current.clientWidth - current.clientHeight) / 2;
                  return style.margin = `${margin}px ${-margin}px`;
              }
              else {
                  return style.maxWidth = (style.maxHeight = (style.margin = ''));
              }
          }),
          setDelay() { return Gallery.delay = +this.value; }
      },
      menu: {
          init() {
              if (!Gallery.enabled) {
                  return;
              }
              const el = $.el('span', {
                  textContent: 'Gallery',
                  className: 'gallery-link'
              });
              Header.menu.addEntry({
                  el,
                  order: 105,
                  subEntries: Gallery.menu.createSubEntries()
              });
          },
          createSubEntry(name) {
              const label = UI.checkbox(name, name);
              const input = label.firstElementChild;
              if (['Hide Thumbnails', 'Fit Width', 'Fit Height'].includes(name)) {
                  $.on(input, 'change', Gallery.cb.setFitness);
              }
              $.event('change', null, input);
              $.on(input, 'change', $.cb.checked);
              if (['Hide Thumbnails', 'Fit Width', 'Fit Height', 'Stretch to Fit'].includes(name)) {
                  $.on(input, 'change', Gallery.cb.setHeight);
              }
              return { el: label };
          },
          createSubEntries() {
              const subEntries = (['Hide Thumbnails', 'Fit Width', 'Fit Height', 'Stretch to Fit', 'Scroll to Post'].map((item) => Gallery.menu.createSubEntry(item)));
              const delayLabel = $.el('label', { innerHTML: 'Slide Delay: <input type="number" name="Slide Delay" min="0" step="any" class="field">' });
              const delayInput = delayLabel.firstElementChild;
              delayInput.value = Gallery.delay;
              $.on(delayInput, 'change', Gallery.cb.setDelay);
              $.on(delayInput, 'change', $.cb.value);
              subEntries.push({ el: delayLabel });
              return subEntries;
          }
      }
  };

  var EmbeddingPage = `<div class="move">
  <a href="javascript:;" class="jump" title="Jump to post">→</a>
  <a href="javascript:;" class="close" title="Close">×</a>
</div>
<div id="media-embed"><div></div></div>`;

  const Linkify = {
      init() {
          if (!['index', 'thread', 'archive'].includes(g.VIEW) || !Conf.Linkify) {
              return;
          }
          if (Conf['Comment Expansion']) {
              ExpandComment.callbacks.push(this.node);
          }
          const isFirefox = CSS.supports('-moz-appearance', 'none');
          doc.style.setProperty('--linkify-icon-top', isFirefox ? '-0.1em' : '0');
          Callbacks.Post.push({
              name: 'Linkify',
              cb: this.node
          });
          Embedding.init();
      },
      node() {
          let link;
          if (this.isClone) {
              return Embedding.events(this);
          }
          if (!Linkify.regString.test(this.info.comment)) {
              return;
          }
          for (link of $$('a', this.nodes.comment)) {
              if (g.SITE.isLinkified?.(link)) {
                  $.addClass(link, 'linkify');
                  if (ImageHost.useFaster) {
                      ImageHost.fixLinks([link]);
                  }
                  Embedding.process(link, this);
              }
          }
          const links = Linkify.process(this.nodes.comment);
          if (ImageHost.useFaster) {
              ImageHost.fixLinks(links);
          }
          for (link of links) {
              Embedding.process(link, this);
          }
      },
      process(node) {
          let length;
          const test = /[^\s"]+/g;
          const space = /[\s"]/;
          const snapshot = $.X('.//br|.//text()', node);
          let i = 0;
          const links = [];
          while ((node = snapshot.snapshotItem(i++))) {
              let result;
              let { data } = node;
              if (!data || (node.parentElement.nodeName === "A")) {
                  continue;
              }
              while ((result = test.exec(data))) {
                  const { index } = result;
                  let endNode = node;
                  let word = result[0];
                  // End of node, not necessarily end of space-delimited string
                  if ((length = index + word.length) === data.length) {
                      let saved;
                      test.lastIndex = 0;
                      while (saved = snapshot.snapshotItem(i++)) {
                          let end;
                          if ((saved.nodeName === 'BR') || ((saved.parentElement.nodeName === 'P') && !saved.previousSibling)) {
                              let part1, part2;
                              if (
                              // link deliberately split
                              (part1 = word.match(/(https?:\/\/)?([a-z\d-]+\.)*[a-z\d-]+$/i)) &&
                                  (part2 = snapshot.snapshotItem(i)?.data?.match(/^(\.[a-z\d-]+)*\//i)) &&
                                  ((part1[0] + part2[0]).search(Linkify.regString) === 0)) {
                                  continue;
                              }
                              else {
                                  break;
                              }
                          }
                          if ((saved.parentElement.nodeName === "A") && !Linkify.regString.test(word)) {
                              break;
                          }
                          endNode = saved;
                          ({ data } = saved);
                          if (end = space.exec(data)) {
                              // Set our snapshot and regex to start on this node at this position when the loop resumes
                              word += data.slice(0, end.index);
                              test.lastIndex = (length = end.index);
                              i--;
                              break;
                          }
                          else {
                              ({ length } = data);
                              word += data;
                          }
                      }
                  }
                  if (Linkify.regString.test(word)) {
                      links.push(Linkify.makeRange(node, endNode, index, length));

                  }
                  if (!test.lastIndex || (node !== endNode)) {
                      break;
                  }
              }
          }
          i = links.length;
          while (i--) {
              links[i] = Linkify.makeLink(links[i]);
          }
          return links;
      },
      regString: new RegExp(`(\
(https?|git|magnet|ftp|irc|mailto):(?:[a-z\\d%/?])\
|\
[a-z\\d-]+(?:\\.[a-z\\d-]+)*\\.\
(?:com|org|net|edu|gov|[a-z]{2}|moe|info|live|biz|mil|xyz|aero|asia|cat|coop|dance|int|jobs|mobi|museum|name|post|pro|tel|travel|xxx)\
(?:[:/]|(?![^\\s"]))\
|\
\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\
|\
[-\\w.@]+@[a-z\\d.-]+\\.[a-z\\d]\
)`, 'i'),
      makeRange(startNode, endNode, startOffset, endOffset) {
          const range = document.createRange();
          range.setStart(startNode, startOffset);
          range.setEnd(endNode, endOffset);
          return range;
      },
      makeLink(range) {
          let t, encodedDomain;
          let text = range.toString();
          // Clean start of range
          let i = text.search(Linkify.regString);
          if (i > 0) {
              text = text.slice(i);
              while ((range.startOffset + i) >= range.startContainer.data.length) {
                  i--;
              }
              if (i) {
                  range.setStart(range.startContainer, range.startOffset + i);
              }
          }
          // Clean end of range
          i = 0;
          while (/[)\]}>.,]/.test(t = text.charAt(text.length - (1 + i)))) {
              if (!/[.,]/.test(t) && !((text.match(/[()\[\]{}<>]/g)).length % 2)) {
                  break;
              }
              i++;
          }
          if (i) {
              text = text.slice(0, -i);
              while ((range.endOffset - i) < 0) {
                  i--;
              }
              if (i) {
                  range.setEnd(range.endContainer, range.endOffset - i);
              }
          }
          // Make our link 'valid' if it is formatted incorrectly.
          if (!/((mailto|magnet):|.+:\/\/)/.test(text)) {
              text = (/@/.test(text) ? 'mailto:' : 'http://') + text;
          }
          // Decode percent-encoded characters in domain so that they behave consistently across browsers.
          if (encodedDomain = text.match(/^(https?:\/\/[^/]*%[0-9a-f]{2})(.*)$/i)) {
              text = encodedDomain[1].replace(/%([0-9a-f]{2})/ig, function (x, y) {
                  if (y === '25') {
                      return x;
                  }
                  else {
                      return String.fromCharCode(parseInt(y, 16));
                  }
              }) + encodedDomain[2];
          }
          const a = $.el('a', {
              className: 'linkify',
              rel: 'noreferrer noopener',
              target: '_blank',
              href: text
          });
          // Insert the range into the anchor, the anchor into the range's DOM location, and destroy the range.
          $.add(a, range.extractContents());
          range.insertNode(a);
          return a;
      }
  };

  var Time = {
    init() {
      if (!['index', 'thread', 'archive'].includes(g.VIEW) || !Conf['Time Formatting']) {
        return;
      }
      Callbacks.Post.push({
        name: 'Time Formatting',
        cb: this.node
      });
    },
    node() {
      if (!this.info.date || this.isClone) {
        return;
      }
      const { textContent } = this.nodes.date;
      this.nodes.date.textContent = textContent.match(/^\s*/)[0] + Time.format(this.info.date) + textContent.match(/\s*$/)[0];
    },
    format(date, formatString = Conf.time) {
      return formatString.replace(/%(.)/g, function (s, c) {
        if ($.hasOwn(Time.formatters, c)) {
          return Time.formatters[c].call(date);
        } else {
          return s;
        }
      });
    },
    zeroPad(n) { if (n < 10) {
      return `0${n}`;
    } else {
      return n;
    } },
    // Setting up the formatter takes more time than actually formatting the date,
    // So while setting up this cache is a bit more code, it's faster at runtime
    formatterCache: new Map(),
    formatters: {
      a() {
        let formatter = Time.formatterCache.get('a');
        if (!formatter) {
          // || undefined to fall back to browser locale, an empty string gives an error
          formatter = Intl.DateTimeFormat(Conf.timeLocale || undefined, { weekday: 'short' });
          Time.formatterCache.set('a', formatter);
        }
        return formatter.format(this);
      },
      A() {
        let formatter = Time.formatterCache.get('A');
        if (!formatter) {
          formatter = Intl.DateTimeFormat(Conf.timeLocale || undefined, { weekday: 'long' });
          Time.formatterCache.set('A', formatter);
        }
        return formatter.format(this);
      },
      b() {
        let formatter = Time.formatterCache.get('b');
        if (!formatter) {
          formatter = Intl.DateTimeFormat(Conf.timeLocale || undefined, { month: 'short' });
          Time.formatterCache.set('b', formatter);
        }
        return formatter.format(this);
      },
      B() {
        let formatter = Time.formatterCache.get('B');
        if (!formatter) {
          formatter = Intl.DateTimeFormat(Conf.timeLocale || undefined, { month: 'long' });
          Time.formatterCache.set('B', formatter);
        }
        return formatter.format(this);
      },
      d() { return Time.zeroPad(this.getDate()); },
      e() { return this.getDate(); },
      H() { return Time.zeroPad(this.getHours()); },
      I() { return Time.zeroPad((this.getHours() % 12) || 12); },
      k() { return this.getHours(); },
      l() { return (this.getHours() % 12) || 12; },
      m() { return Time.zeroPad(this.getMonth() + 1); },
      n() { return this.getMonth() + 1; },
      M() { return Time.zeroPad(this.getMinutes()); },
      p() {
        let formatter = Time.formatterCache.get('p');
        if (!formatter) {
          formatter = Intl.DateTimeFormat(Conf.timeLocale || undefined, { hour: 'numeric', hour12: true });
          Time.formatterCache.set('p', formatter);
        }
        const parts = formatter.formatToParts(this);
        return parts.find((entry) => entry.type === 'dayPeriod').value;
      },
      P() { return Time.formatters.p.call(this).toLowerCase(); },
      S() { return Time.zeroPad(this.getSeconds()); },
      y() { return this.getFullYear().toString().slice(2); },
      Y() { return this.getFullYear(); },
      '%'() { return '%'; }
    },
  };

  function EmbedFxTwitter(a) {
    const el = $.el('div', { innerHTML: '<blockquote class="twitter-tweet">Loading&hellip;</blockquote>' });
    const shouldTranslate = Conf.fxtLang ? `/${Conf.fxtLang}` : '';
    const maxReplies = +Conf.fxtMaxReplies;
    CrossOrigin.cachePromise(`${Conf.fxtUrl}/${a.dataset.uid}${shouldTranslate}`).then(async (req) => {
      if (req.status === 404) {
        el.textContent = '404: tweet not found';
        return;
      }
      const { tweet } = req.response;
      // console.log(tweet);
      function renderMedia(tweet) {
        return tweet.media?.all?.map(media => {
          switch (media.type) {
            case 'photo':
              return h("div", { class: "fxt-media" },
                h("a", { href: media.url, target: "_blank", referrerpolicy: "no-referrer" },
                  h("img", { src: media.url, alt: media.altText, width: media.width, height: media.height, referrerpolicy: "no-referrer" })));
            case 'video':
            case 'gif':
              return h("div", { class: "fxt-media" },
                h("video", { controls: true, width: media.width, height: media.height, poster: media.thumbnail_url, preload: "meta" },
                  h("source", { src: media.url, type: media.format })));
            default:
              console.warn(`FxTwitter media type ${media.type} not recognized`);
          }
        }) || [];
      }
      function renderDate(tweet) {
        return Time.format(new Date(tweet.created_at));
      }
      function renderPoll(tweet) {
        let maxPercentage = 0;
        let maxChoiceIndex = -1;
        tweet.poll.choices.forEach((choice, index) => {
          if (choice.percentage > maxPercentage) {
            maxPercentage = choice.percentage;
            maxChoiceIndex = index;
          }
        });
        return h("div", { class: "fxt-poll" },
          ...tweet.poll.choices.map((choice, index) => h("div", { class: `fxt-choice ${index === maxChoiceIndex ? 'highlight' : ''}` },
            h("span", { class: "fxt-choice_label" }, choice.label),
            h("span", { class: "fxt-choice_percentage" },
              choice.percentage,
              "%"),
            h("div", { class: "fxt-bar", style: `width: ${choice.percentage}%` }))),
          h("div", { class: "total-votes" },
            tweet.poll.total_votes.toLocaleString(),
            " votes"));
      }
      function renderTranslation(tweet) {
        if (!tweet?.translation?.target_lang || tweet?.translation?.source_lang === tweet?.translation?.target_lang) {
          return '';
        }
        return h(hFragment, null,
          h("hr", null),
          h("p", null,
            "Translated from ",
            tweet.translation.source_lang_en),
          h("p", { lang: tweet.translation.target_lang }, ...renderText(tweet.translation.text)));
      }
      function renderMeta(tweet) {
        return h("div", { class: "fxt-meta" },
          h("a", { class: "fxt-meta_profile", href: tweet.author.url, title: tweet.author.description, target: "_blank", referrerpolicy: "no-referrer" },
            h("div", { class: "fxt-meta_avatar" },
              h("img", { src: tweet.author.avatar_url, referrerpolicy: "no-referrer" })),
            h("div", { class: "fxt-meta_author" },
              h("span", { class: "fxt-meta_author_username" }, tweet.author.name),
              h("span", { class: "fxt-meta_author_account" },
                "@",
                tweet.author.screen_name))),
          h("a", { href: tweet.url, title: "Open tweet in a new tab", target: "_blank", referrerpolicy: "no-referrer" }, Icon.raw('link')));
      }
      function renderText(inputText) {
        const result = [];
        let endLast = 0;
        for (const match of inputText.matchAll(/(?:@|\#)\w+/g)) {
          result.push(inputText.slice(endLast, match.index), h("a", { href: `https://x.com/${match[0].startsWith('#') ? 'hashtag/' : ''}${match[0].slice(1)}`, target: "_blank", referrerpolicy: "no-referrer" }, match[0]));
          endLast = match.index + match[0].length;
        }
        result.push(inputText.slice(endLast));
        return result;
      }
      function renderCommunityNote(note) {
        const content = [];
        let i = 0;
        if (note.entities) {
          for (const entity of note.entities) {
            if (entity.ref.url) {
              if (i < entity.fromIndex)
                content.push(...renderText(note.text.slice(i, entity.fromIndex)));
              content.push(h("a", { href: entity.ref.url, target: "_blank", referrerpolicy: "no-referrer" }, note.text.slice(entity.fromIndex, entity.toIndex)));
              i = entity.toIndex;
            }
          }
        }
        if (i < note.text.length - 1)
          content.push(...renderText(note.text.slice(i)));
        return h("div", { class: "fxt-community_note" },
          h("div", { class: "fxt-community_note-header" }, "Community Note"),
          h("div", { class: "fxt-community_note-text" }, ...content));
      }
      async function renderQuote(quote) {
        return h("div", { class: "fxt-quote_container" }, await renderTweet(quote, 'quote'));
      }
      async function renderReplies(tweet) {
        const replies = [];
        let depth = 0;
        while (tweet.replying_to && tweet.replying_to_status && depth < maxReplies) {
          const replyUrl = `${Conf.fxtUrl}/${tweet.replying_to}/status/${tweet.replying_to_status}`;
          try {
            const replyData = await CrossOrigin.cachePromise(replyUrl);
            tweet = replyData.response.tweet;
            const replyHTML = await renderTweet(tweet, 'reply');
            replies.unshift(replyHTML);
            depth++;
          } catch (error) {
            console.error(`Error fetching/rendering reply tweet: ${error.message}`);
            console.log(tweet);
            const url = `${Conf.fxtUrl}/${tweet.replying_to}/status/${tweet.replying_to_status}`;
            return h("div", { class: "fxt-reply_container" },
              h("article", { class: "fxt-card fxt-tweet-reply" },
                h("div", { class: "fxt-content warning" },
                  "Failed trying to load ",
                  h("a", { href: url, target: "_blank", referrerpolicy: "no-referrer" }, url),
                  h("br", null),
                  "This tweet has probably been deleted or removed.",
                  h("br", null),
                  "This also breaks the reply chain, so you may want to view the original tweet.")));
          }
        }
        return h("div", { class: "fxt-reply_container" }, ...replies);
      }
      async function renderTweet(tweet, type) {
        const media = renderMedia(tweet);
        const quote = (tweet?.quote) ? await renderQuote(tweet.quote) : '';
        const poll = (tweet?.poll) ? renderPoll(tweet) : '';
        const created_at = renderDate(tweet);
        const translation = (shouldTranslate) ? renderTranslation(tweet) : '';
        const note = tweet.community_note ? renderCommunityNote(tweet.community_note) : '';
        return h("article", { class: `fxt-card fxt-tweet-${type}` },
          renderMeta(tweet),
          h("div", { class: "fxt-content" },
            h("div", { class: "fxt-text", lang: tweet.lang },
              ...renderText(tweet.text),
              translation),
            (media.length || poll) &&
              h("div", { class: `fxt-media_container ${tweet.media?.all?.length > 1 ? 'fxt-media-multiple' : ''}` },
                poll,
                ...media),
            note,
            quote),
          h("div", { class: "fxt-stats" },
            h("div", { class: "fxt-stats_time" }, created_at),
            h("div", { class: "fxt-stats_meta" },
              h("span", { class: "fxt-likes" },
                Icon.raw("comment"),
                tweet.replies.toLocaleString()),
              h("span", { class: "fxt-reposts" },
                Icon.raw("shuffle"),
                tweet.retweets.toLocaleString()),
              h("span", { class: "fxt-replies" },
                Icon.raw("heart"),
                tweet.likes.toLocaleString()))));
      }
      async function renderFullTweet(tweet) {
        const mainTweetHTML = await renderTweet(tweet, 'original');
        const repliesHTML = tweet.replying_to ? await renderReplies(tweet) : '';
        return h(hFragment, null,
          repliesHTML,
          mainTweetHTML);
      }
      const rendered = await renderFullTweet(tweet);
      el.innerHTML = rendered.innerHTML;
      for (const textEl of el.getElementsByClassName('fxt-text')) {
        Linkify.process(textEl);
      }
      el.style.resize = null;
      el.classList.add('fxt-card_container');
      el.style.height = null;
      el.style.width = null;
      el.style.overflow = null;
    });
    return el;
  }

  const Embedding = {
    init() {
      if (!['index', 'thread', 'archive'].includes(g.VIEW) || !Conf.Linkify || (!Conf.Embedding && !Conf['Link Title'] && !Conf['Cover Preview'])) {
        return;
      }
      this.types = dict();
      for (const type of this.ordered_types) {
        this.types[type.key] = type;
      }
      if (Conf.Embedding && (g.VIEW !== 'archive')) {
        this.dialog = UI.dialog('embedding', { innerHTML: EmbeddingPage });
        this.media = $('#media-embed', this.dialog);
        $.one(d, '4chanXInitFinished', this.ready);
        $.on(d, 'IndexRefreshInternal', () => g.posts.forEach(function (post) {
          for (post of [post, ...post.clones]) {
            for (const embed of post.nodes.embedlinks) {
              Embedding.cb.catalogRemove.call(embed);
            }
          }
        }));
      }
      if (Embedding.shouldFetchTitles()) {
        $.on(d, '4chanXInitFinished PostsInserted', function () {
          for (const service of Object.values(Embedding.types)) {
            if (service.title?.batchSize) {
              Embedding.flushTitles(service.title);
            }
          }
        });
      }
    },
    events(post) {
      let el, i, items;
      if (g.VIEW === 'archive') {
        return;
      }
      if (Conf.Embedding) {
        i = 0;
        items = (post.nodes.embedlinks = $$('.embedder', post.nodes.comment));
        while ((el = items[i++])) {
          $.on(el, 'click', Embedding.cb.click);
          if ($.hasClass(el, 'embedded')) {
            Embedding.cb.toggle.call(el);
          }
        }
      }
      if (Conf['Cover Preview']) {
        i = 0;
        items = $$('.linkify', post.nodes.comment);
        while ((el = items[i++])) {
          let data;
          if (data = Embedding.services(el)) {
            Embedding.preview(data);
          }
        }
        return;
      }
    },
    process(link, post) {
      let data;
      if (!Conf.Embedding && !Conf['Link Title'] && !Conf['Cover Preview']) {
        return;
      }
      if ($.x('ancestor::pre', link)) {
        return;
      }
      if (data = Embedding.services(link)) {
        data.post = post;
        if (Conf.Embedding && (g.VIEW !== 'archive')) {
          Embedding.embed(data);
        }
        if (Embedding.shouldFetchTitles())
          Embedding.title(data);
        if (Conf['Cover Preview'] && (g.VIEW !== 'archive')) {
          return Embedding.preview(data);
        }
      }
    },
    services(link) {
      const { href } = link;
      for (const type of Embedding.ordered_types) {
        let match;
        if (match = type.regExp.exec(href)) {
          return { key: type.key, uid: match[1], options: match[2], link };
        }
      }
    },
    embed(data) {
      const { key, uid, options, link, post } = data;
      const { href } = link;
      $.addClass(link, key.toLowerCase());
      Icon.setLinkify(link);
      const embed = $.el('a', {
        className: 'embedder',
        href: 'javascript:;'
      }, { innerHTML: '(<span>un</span>embed)' });
      const object = { key, uid, options, href };
      for (const name in object) {
        const value = object[name];
        embed.dataset[name] = value;
      }
      $.on(embed, 'click', Embedding.cb.click);
      $.after(link, [$.tn(' '), embed]);
      post.nodes.embedlinks.push(embed);
      if (Conf['Auto-embed'] && !Conf['Floating Embeds'] && !post.isFetchedQuote) {
        if ($.hasClass(doc, 'catalog-mode')) {
          return $.addClass(embed, 'embed-removed');
        } else {
          return Embedding.cb.toggle.call(embed);
        }
      }
    },
    ready() {
      if (!PageReady.isThisPageLegit()) {
        return;
      }
      $.addClass(Embedding.dialog, 'empty');
      const close = $('.close', Embedding.dialog);
      const jump = $('.jump', Embedding.dialog);
      $.on(close, 'click', Embedding.closeFloat);
      $.on($('.move', Embedding.dialog), 'mousedown', Embedding.dragEmbed);
      $.on(jump, 'click', function () {
        if (doc.contains(Embedding.lastEmbed))
          return Header.scrollTo(Embedding.lastEmbed);
      });
      Icon.set(jump, 'arrowRightLong');
      Icon.set(close, 'xmark');
      $.add(d.body, Embedding.dialog);
    },
    closeFloat() {
      delete Embedding.lastEmbed;
      $.addClass(Embedding.dialog, 'empty');
      return $.replace(Embedding.media.firstChild, $.el('div'));
    },
    dragEmbed() {
      // only webkit can handle a blocking div
      const { style } = Embedding.media;
      if (Embedding.dragEmbed.mouseup) {
        $.off(d, 'mouseup', Embedding.dragEmbed);
        Embedding.dragEmbed.mouseup = false;
        style.pointerEvents = '';
        return;
      }
      $.on(d, 'mouseup', Embedding.dragEmbed);
      Embedding.dragEmbed.mouseup = true;
      return style.pointerEvents = 'none';
    },
    title(data) {
      let service;
      const { key, uid, options, link, post } = data;
      if (!(service = Embedding.types[key].title)) {
        return;
      }
      $.addClass(link, key.toLowerCase());
      if (service.batchSize) {
        (service.queue || (service.queue = [])).push(data);
        if (service.queue.length >= service.batchSize) {
          return Embedding.flushTitles(service);
        }
      } else {
        return CrossOrigin.cache(service.api(uid), (function () { return Embedding.cb.title(this, data); }));
      }
    },
    flushTitles(service) {
      let data;
      const { queue } = service;
      if (!queue?.length) {
        return;
      }
      service.queue = [];
      const cb = function () {
        for (data of queue) {
          Embedding.cb.title(this, data);
        }
      };
      return CrossOrigin.cache(service.api(queue.map(data => data.uid)), cb);
    },
    preview(data) {
      let service;
      const { key, uid, link } = data;
      if (!(service = Embedding.types[key].preview)) {
        return;
      }
      $.on(link, 'mouseover', function (e) {
        const src = service.url(uid);
        const { height } = service;
        const el = $.el('img', { src, id: 'ihover' });
        el.setAttribute("referrerpolicy", "no-referrer");
        $.add(Header.hover, el);
        UI.hover({
          root: link,
          el,
          latestEvent: e,
          endEvents: 'mouseout click',
          height
        });
      });
    },
    cb: {
      click(e) {
        e.preventDefault();
        if (!$.hasClass(this, 'embedded') && (Conf['Floating Embeds'] || $.hasClass(doc, 'catalog-mode'))) {
          let div;
          if (!(div = Embedding.media.firstChild)) {
            return;
          }
          $.replace(div, Embedding.cb.embed(this));
          Embedding.lastEmbed = Get.postFromNode(this).nodes.root;
          return $.rmClass(Embedding.dialog, 'empty');
        } else {
          return Embedding.cb.toggle.call(this);
        }
      },
      toggle() {
        if ($.hasClass(this, "embedded")) {
          $.rm(this.nextElementSibling);
        } else {
          $.after(this, Embedding.cb.embed(this));
        }
        $.toggleClass(this, 'embedded');
      },
      embed(a) {
        // We create an element to embed
        let el, type;
        const container = $.el('div', { className: 'media-embed' });
        $.add(container, (el = (type = Embedding.types[a.dataset.key]).el(a)));
        // Set style values.
        el.style.cssText = type.style ?? 'border: none; width: 640px; height: 360px;';
        return container;
      },
      catalogRemove() {
        const isCatalog = $.hasClass(doc, 'catalog-mode');
        if ((isCatalog && $.hasClass(this, 'embedded')) || (!isCatalog && $.hasClass(this, 'embed-removed'))) {
          Embedding.cb.toggle.call(this);
          $.toggleClass(this, 'embed-removed');
        }
      },
      title(req, data) {
        var _a;
        let text;
        const { key, uid, options, link, post } = data;
        const service = Embedding.types[key].title;
        let { status } = req;
        if ([200, 304].includes(status) && service.status) {
          status = service.status(req.response)[0];
        }
        if (!status) {
          return;
        }
        text = `[${key}] ${(() => {
        switch (status) {
          case 200:
          case 304:
            text = service.text(req.response, uid);
            if (typeof text === 'string') {
              return text;
            } else {
              return text = link.textContent;
            }
          case 404:
            return "Not Found";
          case 403:
          case 401:
            return "Forbidden or Private";
          default:
            return `${status}'d`;
        }
      })()}`;
        link.dataset.original = link.textContent;
        link.textContent = text;
        Icon.setLinkify(link);
        for (const post2 of post.clones) {
          for (const link2 of $$('a.linkify', post2.nodes.comment)) {
            if (link2.href === link.href) {
              (_a = link2.dataset).original ?? (_a.original = link2.textContent);
              link2.textContent = text;
              Icon.setLinkify(link2);
            }
          }
        }
      }
    },
    ordered_types: [{
        key: 'audio',
        regExp: /^[^?#]+\.(?:mp3|m4a|oga|wav|flac)(?:[?#]|$)/i,
        style: '',
        el(a) {
          $.el('audio', {
            controls: true,
            preload: 'auto',
            src: a.dataset.href
          });
        }
      },
      {
        key: 'image',
        regExp: /^[^?#]+\.(?:gif|png|jpe?g|bmp|webp)(?::\w+)?(?:[?#]|$)/i,
        style: '',
        el(a) {
          const hrefEsc = E(a.dataset.href);
          return $.el('div', { innerHTML: `<a target="_blank" href="${hrefEsc}"><img src="${hrefEsc}" style="max-width: 80vw; max-height: 80vh;"></a>` });
        }
      },
      {
        key: 'video',
        regExp: /^[^?#]+\.(?:og[gv]|webm|mp4)(?:[?#]|$)/i,
        style: 'max-width: 80vw; max-height: 80vh;',
        el(a) {
          const el = $.el('video', {
            hidden: true,
            controls: true,
            preload: 'auto',
            src: a.dataset.href,
            loop: ImageHost.test(a.dataset.href.split('/')[2])
          });
          $.on(el, 'loadedmetadata', function () {
            if ((el.videoHeight === 0) && el.parentNode) {
              return $.replace(el, Embedding.types.audio.el(a));
            } else {
              return el.hidden = false;
            }
          });
          return el;
        }
      },
      {
        key: 'PeerTube',
        regExp: /^(\w+:\/\/[^\/]+\/videos\/watch\/\w{8}-\w{4}-\w{4}-\w{4}-\w{12})(.*)/,
        el(a) {
          let start;
          const options = (start = a.dataset.options.match(/[?&](start=\w+)/)) ? `?${start[1]}` : '';
          const el = $.el('iframe', { src: a.dataset.uid.replace('/videos/watch/', '/videos/embed/') + options });
          el.setAttribute("allowfullscreen", "true");
          return el;
        }
      },
      {
        key: 'BitChute',
        regExp: /^\w+:\/\/(?:www\.)?bitchute\.com\/video\/([\w\-]+)/,
        el(a) {
          const el = $.el('iframe', { src: `https://www.bitchute.com/embed/${a.dataset.uid}/` });
          el.setAttribute("allowfullscreen", "true");
          return el;
        }
      },
      {
        key: 'Clyp',
        regExp: /^\w+:\/\/(?:www\.)?clyp\.it\/(\w{8})/,
        style: 'border: 0; width: 640px; height: 160px;',
        el(a) {
          return $.el('iframe', { src: `https://clyp.it/${a.dataset.uid}/widget` });
        },
        title: {
          api(uid) { return `https://api.clyp.it/oembed?url=https://clyp.it/${uid}`; },
          text(_) { return _.title; }
        }
      },
      {
        key: 'Dailymotion',
        regExp: /^\w+:\/\/(?:(?:www\.)?dailymotion\.com\/(?:embed\/)?video|dai\.ly)\/([A-Za-z0-9]+)[^?]*(.*)/,
        el(a) {
          let start;
          const options = (start = a.dataset.options.match(/[?&](start=\d+)/)) ? `?${start[1]}` : '';
          const el = $.el('iframe', { src: `//www.dailymotion.com/embed/video/${a.dataset.uid}${options}` });
          el.setAttribute("allowfullscreen", "true");
          return el;
        },
        title: {
          api(uid) { return `https://api.dailymotion.com/video/${uid}`; },
          text(_) { return _.title; }
        },
        preview: {
          url(uid) { return `https://www.dailymotion.com/thumbnail/video/${uid}`; },
          height: 240
        }
      },
      {
        key: 'Gist',
        regExp: /^\w+:\/\/gist\.github\.com\/[\w\-]+\/(\w+)/,
        style: '',
        el: (function () {
          let counter = 0;
          return function (a) {
            const el = $.el('pre', {
              hidden: true,
              id: `gist-embed-${counter++}`
            });
            CrossOrigin.cache(`https://api.github.com/gists/${a.dataset.uid}`, function () {
              el.textContent = Object.values(this.response.files)[0].content;
              el.className = 'prettyprint';
              $.global('prettyPrint', { id: el.id });
              return el.hidden = false;
            });
            return el;
          };
        })(),
        title: {
          api(uid) { return `https://api.github.com/gists/${uid}`; },
          text({ files }) {
            for (const file in files) {
              if (files.hasOwnProperty(file)) {
                return file;
              }
            }
          }
        }
      }
      // , {
      //   key: 'InstallGentoo',
      //   regExp: /^\w+:\/\/paste\.installgentoo\.com\/view\/(?:raw\/|download\/|embed\/)?(\w+)/,
      //   el(a) {
      //     return $.el('iframe',
      //       {src: `https://paste.installgentoo.com/view/embed/${a.dataset.uid}`});
      //   }
      // }
      ,
      {
        key: 'Loopvid',
        regExp: /^\w+:\/\/(?:www\.)?loopvid.kastden.org\/#?((?:pf|kd|lv|gd|gh|db|dx|nn|ig|ky|mf|m2|pc|pi|ni|ko|mm|ic)\/[\w\-\/]+(?:,[\w\-\/]+)*|fc\/\w+\/\d+|https?:\/\/.+)/,
        style: 'max-width: 80vw; max-height: 80vh;',
        el(a) {
          const el = $.el('video', {
            controls: true,
            preload: 'auto',
            loop: true
          });
          if (/^http/.test(a.dataset.uid)) {
            $.add(el, $.el('source', { src: a.dataset.uid }));
            return el;
          }
          const [_, host, names] = a.dataset.uid.match(/(\w+)\/(.*)/);
          const types = (() => {
            switch (host) {
              case 'gd':
              case 'wu':
              case 'fc': return [''];
              case 'gc': return ['giant', 'fat', 'zippy'];
              default: return ['.webm', '.mp4'];
            }
          })();
          for (const name of names.split(',')) {
            for (const type of types) {
              const base = `${name}${type}`;
              const urls = (() => {
                switch (host) {
                  // list from src/common.py at http://loopvid.appspot.com/source.html
                  case 'pf': return [`https://kastden.org/_loopvid_media/pf/${base}`, `https://web.archive.org/web/2/http://a.pomf.se/${base}`];
                  case 'kd': return [`https://kastden.org/loopvid/${base}`];
                  case 'lv': return [`https://lv.kastden.org/${base}`];
                  case 'gd': return [`https://docs.google.com/uc?export=download&id=${base}`];
                  case 'gh': return [`https://googledrive.com/host/${base}`];
                  case 'db': return [`https://dl.dropboxusercontent.com/u/${base}`];
                  case 'dx': return [`https://dl.dropboxusercontent.com/${base}`];
                  case 'nn': return [`https://kastden.org/_loopvid_media/nn/${base}`];
                  case 'ig': return [`https://i.imgur.com/${base}`];
                  case 'ky': return [`https://kastden.org/_loopvid_media/ky/${base}`];
                  case 'mf': return [`https://kastden.org/_loopvid_media/mf/${base}`, `https://web.archive.org/web/2/https://d.maxfile.ro/${base}`];
                  case 'm2': return [`https://kastden.org/_loopvid_media/m2/${base}`];
                  case 'pc': return [`https://kastden.org/_loopvid_media/pc/${base}`, `https://web.archive.org/web/2/http://a.pomf.cat/${base}`];
                  case 'pi': return [`https://kastden.org/_loopvid_media/pi/${base}`, `https://web.archive.org/web/2/https://u.pomf.is/${base}`];
                  case 'ni': return [`https://kastden.org/_loopvid_media/ni/${base}`, `https://web.archive.org/web/2/https://u.nya.is/${base}`];
                  case 'ko': return [`https://kordy.kastden.org/loopvid/${base}`];
                  case 'mm': return [`https://kastden.org/_loopvid_media/mm/${base}`, `https://web.archive.org/web/2/https://my.mixtape.moe/${base}`];
                  case 'ic': return [`https://media.8ch.net/file_store/${base}`];
                  case 'fc': return [`//${ImageHost.host()}/${base}.webm`];
                }
              })();
              for (const url of urls) {
                $.add(el, $.el('source', { src: url }));
              }
            }
          }
          return el;
        }
      },
      {
        key: 'Openings.moe',
        regExp: /^\w+:\/\/openings.moe\/\?video=([^.&=]+)/,
        style: 'width: 1280px; height: 720px; max-width: 80vw; max-height: 80vh;',
        el(a) {
          const el = $.el('iframe', { src: `https://openings.moe/?video=${a.dataset.uid}`, });
          el.setAttribute("allowfullscreen", "true");
          return el;
        }
      },
      {
        key: 'Pastebin',
        regExp: /^\w+:\/\/(?:\w+\.)?pastebin\.com\/(?!u\/)(?:[\w.]+(?:\/|\?i\=))?(\w+)/,
        el(a) {
          return $.el('iframe', { src: `//pastebin.com/embed_iframe/${a.dataset.uid}` });
        }
      },
      {
        key: 'SoundCloud',
        regExp: /^\w+:\/\/(?:www\.)?(?:soundcloud\.com\/|snd\.sc\/)([\w\-\/]+)/,
        style: 'border: 0; width: 500px; height: 400px;',
        el(a) {
          return $.el('iframe', { src: `https://w.soundcloud.com/player/?visual=true&show_comments=false&url=https%3A%2F%2Fsoundcloud.com%2F${encodeURIComponent(a.dataset.uid)}` });
        },
        title: {
          api(uid) { return `${location.protocol}//soundcloud.com/oembed?format=json&url=https%3A%2F%2Fsoundcloud.com%2F${encodeURIComponent(uid)}`; },
          text(_) { return _.title; }
        }
      },
      {
        key: 'StrawPoll',
        regExp: /^\w+:\/\/(?:www\.)?strawpoll\.me\/(?:embed_\d+\/)?(\d+(?:\/r)?)/,
        style: 'border: 0; width: 600px; height: 406px;',
        el(a) {
          return $.el('iframe', { src: `https://www.strawpoll.me/embed_1/${a.dataset.uid}` });
        }
      },
      {
        key: 'Streamable',
        regExp: /^\w+:\/\/(?:www\.)?streamable\.com\/(\w+)/,
        el(a) {
          const el = $.el('iframe', { src: `https://streamable.com/o/${a.dataset.uid}` });
          el.setAttribute("allowfullscreen", "true");
          return el;
        },
        title: {
          api(uid) { return `https://api.streamable.com/oembed?url=https://streamable.com/${uid}`; },
          text(_) { return _.title; }
        }
      },
      {
        key: 'TwitchTV',
        regExp: /^\w+:\/\/(?:www\.|secure\.|clips\.|m\.)?twitch\.tv\/(\w[^#\&\?]*)/,
        el(a) {
          let url;
          let m = a.dataset.href.match(/^\w+:\/\/(?:(clips\.)|\w+\.)?twitch\.tv\/(?:\w+\/)?(clip\/)?(\w[^#\&\?]*)/);
          if (m[1] || m[2]) {
            url = `//clips.twitch.tv/embed?clip=${m[3]}&parent=${location.hostname}`;
          } else {
            let time;
            m = a.dataset.uid.match(/(\w+)(?:\/(?:v\/)?(\d+))?/);
            url = `//player.twitch.tv/?${m[2] ? `video=v${m[2]}` : `channel=${m[1]}`}&autoplay=false&parent=${location.hostname}`;
            if (time = a.dataset.href.match(/\bt=(\w+)/)) {
              url += `&time=${time[1]}`;
            }
          }
          const el = $.el('iframe', { src: url });
          el.setAttribute("allowfullscreen", "true");
          return el;
        }
      },
      {
        key: 'Twitter',
        regExp: /^\w+:\/\/(?:www\.|mobile\.)?(?:(?:(?:[fv]x|fix(?:up|v))?twitt[ep]r|x(?:cancel)?)\.com|nitter\.\w+.\w+)\/(\w+\/status\/\d+)/,
        style: 'border: none; width: 550px; height: 250px; overflow: hidden; resize: both;',
        el(a) {
          if (Conf.XEmbedder === 'tf') {
            const el = $.el('iframe');
            $.on(el, 'load', function () {
              return this.contentWindow.postMessage({ element: 't', query: 'height' }, 'https://tf.rita.moe');
            });
            const onMessage = function (e) {
              if ((e.source === el.contentWindow) && (e.origin === 'https://tf.rita.moe')) {
                $.off(window, 'message', onMessage);
                return (cont || el).style.height = `${+$.minmax(e.data.height, 250, 0.8 * doc.clientHeight)}px`;
              }
            };
            $.on(window, 'message', onMessage);
            el.src = `https://tf.rita.moe/show?url=https://x.com/${a.dataset.uid}`;
            if ($.engine === 'gecko') {
              // XXX https://bugzilla.mozilla.org/show_bug.cgi?id=680823
              el.style.cssText = 'border: none; width: 100%; height: 100%;';
              const cont = $.el('div');
              $.add(cont, el);
              return cont;
            } else {
              return el;
            }
          }
          return EmbedFxTwitter(a);
        },
      },
      {
        key: 'VidLii',
        regExp: /^\w+:\/\/(?:www\.)?vidlii\.com\/watch\?v=(\w{11})/,
        style: 'border: none; width: 640px; height: 392px;',
        el(a) {
          const el = $.el('iframe', { src: `https://www.vidlii.com/embed?v=${a.dataset.uid}&a=0` });
          el.setAttribute("allowfullscreen", "true");
          return el;
        }
      },
      {
        key: 'Vimeo',
        regExp: /^\w+:\/\/(?:www\.)?vimeo\.com\/(\d+)/,
        el(a) {
          const el = $.el('iframe', { src: `//player.vimeo.com/video/${a.dataset.uid}?wmode=opaque` });
          el.setAttribute("allowfullscreen", "true");
          return el;
        },
        title: {
          api(uid) { return `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${uid}`; },
          text(_) { return _.title; }
        }
      },
      {
        key: 'Vocaroo',
        regExp: /^\w+:\/\/(?:(?:www\.|old\.)?vocaroo\.com|voca\.ro)\/((?:i\/)?\w+)/,
        style: '',
        el(a) {
          const el = $.el('iframe');
          el.width = 300;
          el.height = 60;
          el.setAttribute('frameborder', 0);
          el.src = `https://vocaroo.com/embed/${a.dataset.uid.replace(/^i\//, '')}?autoplay=0`;
          return el;
        }
      },
      {
        key: 'YouTube',
        regExp: /^\w+:\/\/(?:youtu\.be\/|[\w.]*youtube[\w.]*\/.*(?:v=|\bembed\/|\bv\/|shorts\/|live\/|watch\/))([\w\-]{11})(.*)/,
        el(a) {
          let start = a.dataset.options.match(/\b(?:star)?t\=(\w+)/);
          if (start) {
            start = start[1];
          }
          if (start && !/^\d+$/.test(start)) {
            start += ' 0h0m0s';
            start = (3600 * start.match(/(\d+)h/)[1]) + (60 * start.match(/(\d+)m/)[1]) + (1 * start.match(/(\d+)s/)[1]);
          }
          const el = $.el('iframe', { src: `//www.youtube.com/embed/${a.dataset.uid}?rel=0&wmode=opaque${start ? '&start=' + start : ''}` });
          el.setAttribute("allowfullscreen", "true");
          return el;
        },
        title: {
          api(uid) { return `https://www.youtube.com/oembed?url=https%3A//www.youtube.com/watch%3Fv%3D${uid}&format=json`; },
          text(_) { return _.title; },
          status(_) {
            if (_.error) {
              const m = _.error.match(/^(\d*)\s*(.*)/);
              return [+m[1], m[2]];
            } else {
              return [200, 'OK'];
            }
          }
        },
        preview: {
          url(uid) { return `https://img.youtube.com/vi/${uid}/0.jpg`; },
          height: 360
        }
      }
    ],
    shouldFetchTitles() {
      if (!Conf['Link Title'])
        return false;
      if (Conf['Link Title in the catalog'])
        return true;
      return g.VIEW !== 'catalog' && !(g.VIEW === 'index' && Conf['Index Mode'] === 'catalog');
    },
  };

  var Beep = 'UklGRjQDAABXQVZFZm10IBAAAAABAAEAgD4AAIA+AAABAAgAc21wbDwAAABBAAADAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkYXRhzAIAAGMms8em0tleMV4zIpLVo8nhfSlcPR102Ki+5JspVEkdVtKzs+K1NEhUIT7DwKrcy0g6WygsrM2k1NpiLl0zIY/WpMrjgCdbPhxw2Kq+5Z4qUkkdU9K1s+K5NkVTITzBwqnczko3WikrqM+l1NxlLF0zIIvXpsnjgydZPhxs2ay95aIrUEkdUdC3suK8N0NUIjq+xKrcz002WioppdGm091pK1w0IIjYp8jkhydXPxxq2K295aUrTkoeTs65suK+OUFUIzi7xqrb0VA0WSoootKm0t5tKlo1H4TYqMfkiydWQBxm16+85actTEseS8y7seHAPD9TIza5yKra01QyWSson9On0d5wKVk2H4DYqcfkjidUQB1j1rG75KsvSkseScu8seDCPz1TJDW2yara1FYxWSwnm9Sn0N9zKVg2H33ZqsXkkihSQR1g1bK65K0wSEsfR8i+seDEQTxUJTOzy6rY1VowWC0mmNWoz993KVc3H3rYq8TklSlRQh1d1LS647AyR0wgRMbAsN/GRDpTJTKwzKrX1l4vVy4lldWpzt97KVY4IXbUr8LZljVPRCxhw7W3z6ZISkw1VK+4sMWvXEhSPk6buay9sm5JVkZNiLWqtrJ+TldNTnquqbCwilZXU1BwpKirrpNgWFhTaZmnpquZbFlbVmWOpaOonHZcXlljhaGhpZ1+YWBdYn2cn6GdhmdhYGN3lp2enIttY2Jjco+bnJuOdGZlZXCImJqakHpoZ2Zug5WYmZJ/bGlobX6RlpeSg3BqaW16jZSVkoZ0bGtteImSk5KIeG5tbnaFkJKRinxxbm91gY2QkIt/c3BwdH6Kj4+LgnZxcXR8iI2OjIR5c3J0e4WLjYuFe3VzdHmCioyLhn52dHR5gIiKioeAeHV1eH+GiYqHgXp2dnh9hIiJh4J8eHd4fIKHiIeDfXl4eHyBhoeHhH96eHmA';

  var ThreadUpdater = {
    init() {
      let sc;
      // Chromium won't play audio created in an inactive tab until the tab has been focused, so set it up now.
      // XXX Sometimes the loading stalls in Firefox, esp. when opening in private browsing window followed by normal window.
      // Don't let it keep the loading icon on indefinitely.
      this.audio = $.el('audio');
      if ($.engine !== 'gecko') {
        this.audio.src = this.beep;
      }
      $.on(this.audio, 'error', () => {
        new Notice('error', this.audio.error.message || 'Error when trying to play thread updater beep.', 15);
      });
      // Return after the audio player is initiated, so it works in the settings preview.
      if ((g.VIEW !== 'thread') || !Conf['Thread Updater'])
        return;
      this.enabled = true;
      if (Conf['Updater and Stats in Header']) {
        this.dialog = (sc = $.el('span', { id: 'updater' }));
        $.extend(sc, { innerHTML: '<span id="update-status" class="empty"></span><span id="update-timer" class="empty" title="Update now"></span>' });
        Header.addShortcut('updater', sc, 100);
      } else {
        this.dialog = (sc = UI.dialog('updater', { innerHTML: '<div class="move"></div><span id="update-status" class="empty"></span><span id="update-timer" class="empty" title="Update now"></span>' }));
        $.addClass(doc, 'float');
        $.ready(() => $.add(d.body, sc));
      }
      this.checkPostCount = 0;
      this.timer = $('#update-timer', sc);
      this.status = $('#update-status', sc);
      $.on(this.timer, 'click', this.update);
      $.on(this.status, 'click', this.update);
      const updateLink = $.el('span', { className: 'brackets-wrap updatelink' });
      $.extend(updateLink, { innerHTML: '<a href="javascript:;">Update</a>' });
      PageReady.ready(function () {
        let navLinksBot;
        if (navLinksBot = $('.navLinksBot')) {
          return $.add(navLinksBot, [$.tn(' '), updateLink]);
        }
      });
      $.on(updateLink.firstElementChild, 'click', this.update);
      const subEntries = [];
      for (const name in Config.updater.checkbox) {
        var conf = Config.updater.checkbox[name];
        const el = UI.checkbox(name, name);
        el.title = conf[1];
        var input = el.firstElementChild;
        $.on(input, 'change', $.cb.checked);
        if (input.name === 'Scroll BG') {
          $.on(input, 'change', this.cb.scrollBG);
          this.cb.scrollBG();
        } else if (input.name === 'Auto Update') {
          $.on(input, 'change', this.setInterval);
        }
        subEntries.push({ el });
      }
      this.settings = $.el('span', { innerHTML: '<a href="javascript:;">Interval</a>' });
      $.on(this.settings, 'click', this.intervalShortcut);
      subEntries.push({ el: this.settings });
      Header.menu.addEntry(this.entry = {
        el: $.el('span', { textContent: 'Updater' }),
        order: 110,
        subEntries
      });
      Callbacks.Thread.push({
        name: 'Thread Updater',
        cb: this.node
      });
    },
    node() {
      ThreadUpdater.thread = this;
      ThreadUpdater.root = this.nodes.root;
      ThreadUpdater.outdateCount = 0;
      // We must keep track of our own list of live posts/files
      // to provide an accurate deletedPosts/deletedFiles on update
      // as posts may be `kill`ed elsewhere.
      ThreadUpdater.postIDs = [];
      ThreadUpdater.fileIDs = [];
      this.posts.forEach(function (post) {
        ThreadUpdater.postIDs.push(post.ID);
        if (post.file) {
          return ThreadUpdater.fileIDs.push(post.ID);
        }
      });
      ThreadUpdater.cb.interval.call($.el('input', { value: Conf.Interval }));
      $.on(d, 'QRPostSuccessful', ThreadUpdater.cb.checkpost);
      $.on(d, 'visibilitychange', ThreadUpdater.cb.visibility);
      ThreadUpdater.setInterval();
    },
    // http://freesound.org/people/pierrecartoons1979/sounds/90112/ cc-by-nc-3.0
    beep: `data:audio/wav;base64,${Beep}`,
    playBeep(repeatIfPlaying = true) {
      const { audio } = ThreadUpdater;
      const source = Conf.beepSource || ThreadUpdater.beep;
      if (audio.src !== source)
        audio.src = source;
      audio.volume = Math.max(.01, Math.min(+Conf.beepVolume, 1));
      if (audio.paused) {
        audio.play();
      } else if (repeatIfPlaying) {
        $.one(audio, 'ended', ThreadUpdater.playBeep);
      }
    },
    cb: {
      checkpost(e) {
        if (e.detail.threadID !== ThreadUpdater.thread.ID) {
          return;
        }
        ThreadUpdater.postID = e.detail.postID;
        ThreadUpdater.checkPostCount = 0;
        ThreadUpdater.outdateCount = 0;
        return ThreadUpdater.setInterval();
      },
      visibility() {
        if (d.hidden) {
          return;
        }
        // Reset the counter when we focus this tab.
        ThreadUpdater.outdateCount = 0;
        if (ThreadUpdater.seconds > ThreadUpdater.interval) {
          ThreadUpdater.setInterval();
        }
      },
      scrollBG() {
        return ThreadUpdater.scrollBG = Conf['Scroll BG'] ? () => true : () => !d.hidden;
      },
      interval(e) {
        let val = parseInt(this.value, 10);
        if (val < 1) {
          val = 1;
        }
        ThreadUpdater.interval = (this.value = val);
        if (e) {
          return $.cb.value.call(this);
        }
      },
      load() {
        if (this !== ThreadUpdater.req) {
          return;
        } // aborted
        switch (this.status) {
          case 200:
            ThreadUpdater.parse(this);
            if (ThreadUpdater.thread.isArchived) {
              return ThreadUpdater.kill();
            } else {
              return ThreadUpdater.setInterval();
            }
          case 404:
            // XXX workaround for 4chan sending false 404s
            return $.ajax(g.SITE.urls.catalogJSON({ boardID: ThreadUpdater.thread.board.ID }), { onloadend() {
                let confirmed;
                if (this.status === 200) {
                  confirmed = true;
                  for (var page of this.response) {
                    for (var thread of page.threads) {
                      if (thread.no === ThreadUpdater.thread.ID) {
                        confirmed = false;
                        break;
                      }
                    }
                  }
                } else {
                  confirmed = false;
                }
                if (confirmed) {
                  ThreadUpdater.kill();
                } else {
                  ThreadUpdater.error(this);
                }
              }
            });
          default: ThreadUpdater.error(this);
        }
      }
    },
    kill() {
      ThreadUpdater.thread.kill();
      ThreadUpdater.setInterval();
      $.event('ThreadUpdate', {
        404: true,
        threadID: ThreadUpdater.thread.fullID
      });
    },
    error(req) {
      if (req.status === 304) {
        ThreadUpdater.set('status', '');
      }
      ThreadUpdater.setInterval();
      if (!req.status) {
        return ThreadUpdater.set('status', 'Connection Error', 'warning');
      } else if (req.status !== 304) {
        return ThreadUpdater.set('status', `${req.statusText} (${req.status})`, 'warning');
      }
    },
    setInterval() {
      clearTimeout(ThreadUpdater.timeoutID);
      if (ThreadUpdater.thread.isDead) {
        ThreadUpdater.set('status', (ThreadUpdater.thread.isArchived ? 'Archived' : '404'), 'warning');
        ThreadUpdater.set('timer', '');
        return;
      }
      // Fetching your own posts after posting
      if (ThreadUpdater.postID && (ThreadUpdater.checkPostCount < 5)) {
        ThreadUpdater.set('timer', '...', 'loading');
        ThreadUpdater.timeoutID = setTimeout(ThreadUpdater.update, ++ThreadUpdater.checkPostCount * SECOND);
        return;
      }
      if (!Conf['Auto Update']) {
        ThreadUpdater.set('timer', 'Update');
        return;
      }
      const { interval } = ThreadUpdater;
      if (Conf['Optional Increase']) {
        // Lower the max refresh rate limit on visible tabs.
        const limit = d.hidden ? 10 : 5;
        const j = Math.min(ThreadUpdater.outdateCount, limit);
        // 1 second to 100, 30 to 300.
        const cur = (Math.floor(interval * 0.1) || 1) * j * j;
        ThreadUpdater.seconds = $.minmax(cur, interval, 300);
      } else {
        ThreadUpdater.seconds = interval;
      }
      ThreadUpdater.timeout();
    },
    intervalShortcut() {
      Settings.open('Advanced');
      const settings = $.id('fourchanx-settings');
      $('input[name=Interval]', settings).focus();
    },
    set(name, text, klass) {
      let node;
      const el = ThreadUpdater[name];
      if ((node = el.firstChild)) {
        // Prevent the creation of a new DOM Node by setting the text node's data.
        node.data = text;
      } else {
        el.textContent = text;
      }
      return el.className = klass ?? (text === '' ? 'empty' : '');
    },
    timeout() {
      if (ThreadUpdater.seconds) {
        ThreadUpdater.set('timer', ThreadUpdater.seconds);
        ThreadUpdater.timeoutID = setTimeout(ThreadUpdater.timeout, 1000);
      } else {
        ThreadUpdater.outdateCount++;
        ThreadUpdater.update();
      }
      return ThreadUpdater.seconds--;
    },
    update() {
      let oldReq;
      clearTimeout(ThreadUpdater.timeoutID);
      ThreadUpdater.set('timer', '...', 'loading');
      if (oldReq = ThreadUpdater.req) {
        delete ThreadUpdater.req;
        oldReq.abort();
      }
      return ThreadUpdater.req = $.whenModified(g.SITE.urls.threadJSON({ boardID: ThreadUpdater.thread.board.ID, threadID: ThreadUpdater.thread.ID }), 'ThreadUpdater', ThreadUpdater.cb.load, { timeout: MINUTE });
    },
    updateThreadStatus(type, status) {
      if (!(ThreadUpdater.thread[`is${type}`] !== status)) {
        return;
      }
      ThreadUpdater.thread.setStatus(type, status);
      if ((type === 'Closed') && ThreadUpdater.thread.isArchived) {
        return;
      }
      const change = type === 'Sticky' ?
        status ? 'now a sticky' : 'not a sticky anymore'
        : status ? 'now closed' : 'not closed anymore';
      return new Notice('info', `The thread is ${change}.`, 30);
    },
    parse(req) {
      let ID, ipCountEl, post;
      const postObjects = req.response.posts;
      const OP = postObjects[0];
      const thread = ThreadUpdater.thread;
      const { board } = thread;
      const lastPost = ThreadUpdater.postIDs[ThreadUpdater.postIDs.length - 1];
      // XXX Reject updates that falsely delete the last post.
      if ((postObjects[postObjects.length - 1].no < lastPost) &&
        ((new Date(req.getResponseHeader('Last-Modified')) - thread.posts.get(lastPost).info.date) < (30 * SECOND))) {
        return;
      }
      g.SITE.Build.spoilerRange[board] = OP.custom_spoiler;
      thread.setStatus('Archived', !!OP.archived);
      ThreadUpdater.updateThreadStatus('Sticky', !!OP.sticky);
      ThreadUpdater.updateThreadStatus('Closed', !!OP.closed);
      thread.postLimit = !!OP.bumplimit;
      thread.fileLimit = !!OP.imagelimit;
      if (OP.unique_ips)
        thread.ipCount = OP.unique_ips;
      const posts = []; // new post objects
      const index = []; // existing posts
      const files = []; // existing files
      const newPosts = []; // new post fullID list for API
      // Build the index, create posts.
      for (var postObject of postObjects) {
        ID = postObject.no;
        index.push(ID);
        if (postObject.fsize) {
          files.push(ID);
        }
        // Insert new posts, not older ones.
        if (ID <= lastPost) {
          continue;
        }
        // XXX Resurrect wrongly deleted posts.
        if ((post = thread.posts.get(ID)) && !post.isFetchedQuote) {
          post.resurrect();
          continue;
        }
        newPosts.push(`${board}.${ID}`);
        var node = g.SITE.Build.postFromObject(postObject, board.ID);
        posts.push(new Post(node, thread, board));
        // Fetching your own posts after posting
        if (ThreadUpdater.postID === ID) {
          delete ThreadUpdater.postID;
        }
      }
      // Check for deleted posts.
      const deletedPosts = [];
      for (ID of ThreadUpdater.postIDs) {
        if (!index.includes(ID)) {
          thread.posts.get(ID).kill();
          deletedPosts.push(`${board}.${ID}`);
        }
      }
      ThreadUpdater.postIDs = index;
      // Check for deleted files.
      const deletedFiles = [];
      for (ID of ThreadUpdater.fileIDs) {
        if (!(files.includes(ID) || deletedPosts.includes(`${board}.${ID}`))) {
          thread.posts.get(ID).kill(true);
          deletedFiles.push(`${board}.${ID}`);
        }
      }
      ThreadUpdater.fileIDs = files;
      if (!posts.length) {
        ThreadUpdater.set('status', '');
      } else {
        ThreadUpdater.set('status', `+${posts.length}`, 'new');
        ThreadUpdater.outdateCount = 0;
        const unreadCount = Unread.posts?.size;
        const unreadQYCount = Unread.postsQuotingYou?.size;
        Main.callbackNodes('Post', posts);
        if (d.hidden || !d.hasFocus()) {
          if (Conf['Beep Quoting You'] && (Unread.postsQuotingYou?.size > unreadQYCount)) {
            ThreadUpdater.playBeep();
            if (Conf.Beep) {
              ThreadUpdater.playBeep();
            }
          } else if (Conf.Beep && (Unread.posts?.size > 0) && (unreadCount === 0)) {
            ThreadUpdater.playBeep();
          }
        }
        const scroll = Conf['Auto Scroll'] && ThreadUpdater.scrollBG() &&
          ((ThreadUpdater.root.getBoundingClientRect().bottom - doc.clientHeight) < 25);
        let firstPost = null;
        for (post of posts) {
          if (!QuoteThreading.insert(post)) {
            if (!firstPost) {
              firstPost = post.nodes.root;
            }
            $.add(ThreadUpdater.root, post.nodes.root);
          }
        }
        $.event('PostsInserted', null, ThreadUpdater.root);
        if (scroll) {
          if (Conf['Bottom Scroll']) {
            window.scrollTo(0, d.body.clientHeight);
          } else {
            if (firstPost) {
              Header.scrollTo(firstPost);
            }
          }
        }
      }
      // Update IP count in original post form.
      if (OP.unique_ips && (ipCountEl = $.id('unique-ips'))) {
        ipCountEl.textContent = OP.unique_ips;
        ipCountEl.previousSibling.textContent = ipCountEl.previousSibling.textContent.replace(/\b(?:is|are)\b/, OP.unique_ips === 1 ? 'is' : 'are');
        ipCountEl.nextSibling.textContent = ipCountEl.nextSibling.textContent.replace(/\bposters?\b/, OP.unique_ips === 1 ? 'poster' : 'posters');
      }
      $.event('ThreadUpdate', {
        404: false,
        threadID: thread.fullID,
        newPosts,
        deletedPosts,
        deletedFiles,
        postCount: OP.replies + 1,
        fileCount: OP.images + !!OP.fsize,
        ipCount: OP.unique_ips
      });
    }
  };

  var Nav = {
      init() {
          switch (g.VIEW) {
              case 'index':
                  if (!Conf['Index Navigation']) {
                      return;
                  }
                  break;
              case 'thread':
                  if (!Conf['Reply Navigation']) {
                      return;
                  }
                  break;
              default:
                  return;
          }
          const span = $.el('span', { id: 'navlinks' });
          const prev = $.el('a', {
              textContent: '▲',
              className: 'navlinks-navlink navlink-prev',
              href: 'javascript:;'
          });
          const next = $.el('a', {
              textContent: '▼',
              className: 'navlinks-navlink navlink-next',
              href: 'javascript:;'
          });
          Icon.set(prev, 'arrowUpLong');
          Icon.set(next, 'arrowDownLong');
          $.on(prev, 'click', this.prev);
          $.on(next, 'click', this.next);
          $.add(span, [prev, $.tn(' '), next]);
          var append = function () {
              $.off(d, '4chanXInitFinished', append);
              return $.add(d.body, span);
          };
          $.on(d, '4chanXInitFinished', append);
      },
      prev() {
          if (g.VIEW === 'thread') {
              window.scrollTo(0, 0);
          }
          else {
              Nav.scroll(-1);
          }
      },
      next() {
          if (g.VIEW === 'thread') {
              window.scrollTo(0, d.body.scrollHeight);
          }
          else {
              Nav.scroll(1);
          }
      },
      getThread() {
          if (g.VIEW === 'thread') {
              return g.threads.get(`${g.BOARD}.${g.THREADID}`).nodes.root;
          }
          if ($.hasClass(doc, 'catalog-mode')) {
              return;
          }
          for (var threadRoot of $$(g.SITE.selectors.thread)) {
              var thread = Get.threadFromRoot(threadRoot);
              if (thread.isHidden && !thread.stub) {
                  continue;
              }
              if (Header.getTopOf(threadRoot) >= -threadRoot.getBoundingClientRect().height) { // not scrolled past
                  return threadRoot;
              }
          }
      },
      scroll(delta) {
          d.activeElement?.blur();
          let thread = Nav.getThread();
          if (!thread) {
              return;
          }
          const axis = delta === 1 ? 'following' : 'preceding';
          const next = $.x(`${axis}-sibling::${g.SITE.xpath.thread}[not(@hidden)][1]`, thread);
          if (next) {
              // Unless we're not at the beginning of the current thread, and thus wanting to move to beginning,
              // or we're above the first thread and don't want to skip it.
              const top = Header.getTopOf(thread);
              if (((delta === 1) && (top < 5)) || ((delta === -1) && (top > -5))) {
                  thread = next;
              }
          }
          // Add extra space to the end of the page if necessary so that all threads can be selected by keybinds.
          const extra = (Header.getTopOf(thread) + doc.clientHeight) - d.body.getBoundingClientRect().bottom;
          if (extra > 0) {
              d.body.style.marginBottom = `${extra}px`;
          }
          Header.scrollTo(thread);
          if ((extra > 0) && !Nav.haveExtra) {
              Nav.haveExtra = true;
              $.on(d, 'scroll', Nav.removeExtra);
          }
      },
      removeExtra() {
          const extra = doc.clientHeight - d.body.getBoundingClientRect().bottom;
          if (extra > 0) {
              d.body.style.marginBottom = `${extra}px`;
          }
          else {
              d.body.style.marginBottom = '';
              delete Nav.haveExtra;
              $.off(d, 'scroll', Nav.removeExtra);
          }
      }
  };

  var Keybinds = {
      init() {
          if (!Conf.Keybinds) {
              return;
          }
          for (var hotkey in Config.hotkeys) {
              $.sync(hotkey, Keybinds.sync);
          }
          var init = function () {
              $.off(d, '4chanXInitFinished', init);
              $.on(d, 'keydown', Keybinds.keydown);
              for (var node of $$('[accesskey]')) {
                  node.removeAttribute('accesskey');
              }
          };
          $.on(d, '4chanXInitFinished', init);
      },
      sync(key, hotkey) {
          return Conf[hotkey] = key;
      },
      keydown(e) {
          let key, thread, threadRoot, catalog, notifications;
          if (!(key = Keybinds.keyCode(e))) {
              return;
          }
          const tag = {
              [Conf['Spoiler tags']]: 'spoiler',
              [Conf['Code tags']]: 'code',
              [Conf['Eqn tags']]: 'eqn',
              [Conf['Math tags']]: 'math',
              [Conf['SJIS tags']]: 'sjis',
          }[key];
          const mode = {
              [Conf['Paged mode']]: 'paged',
              [Conf['Infinite scrolling mode']]: 'infinite',
              [Conf['All pages mode']]: 'all-pages'
          }[key];
          const dir = {
              [Conf['Next reply']]: 1,
              [Conf['Previous reply']]: -1,
              [Conf['Deselect reply']]: 0
          }[key];
          const { target } = e;
          if (['INPUT', 'TEXTAREA'].includes(target.nodeName)) {
              if (!/(Esc|Alt|Ctrl|Meta|Shift\+\w{2,})/.test(key) || !!/^Alt\+(\d|Up|Down|Left|Right)$/.test(key)) {
                  return;
              }
          }
          if (['index', 'thread'].includes(g.VIEW)) {
              threadRoot = Nav.getThread();
              thread = Get.threadFromRoot(threadRoot);
          }
          let hasAction = false;
          // QR & Options
          if (QR.postingIsEnabled) {
              if (key === Conf['Open empty QR']) {
                  Keybinds.qr();
                  hasAction = true;
              }
              else if (key === Conf['Post from URL']) {
                  QR.handleUrl('');
                  hasAction = true;
              }
              else if (key === Conf['Add new post']) {
                  QR.addPost();
                  hasAction = true;
              }
              else if (key === Conf['Open QR'] && threadRoot) {
                  Keybinds.qr(threadRoot);
                  hasAction = true;
              }
          }
          if (key === Conf['Toggle board list'] && Conf['Custom Board Navigation']) {
              Header.toggleBoardList();
              hasAction = true;
          }
          if (key === Conf['Toggle header']) {
              Header.toggleBarVisibility();
              hasAction = true;
          }
          if (key === Conf['Open settings']) {
              Settings.open();
              hasAction = true;
          }
          if (key === Conf.Close) {
              if (Settings.dialog) {
                  Settings.close();
              }
              else if ((notifications = $$('.notification')).length) {
                  for (var notification of notifications) {
                      $('.close', notification).click();
                  }
              }
              else if (QR.nodes?.preview) {
                  QR.closePreview();
              }
              else if (QR.nodes && !(QR.nodes.el.hidden || (window.getComputedStyle(QR.nodes.form).display === 'none'))) {
                  if (Conf['Persistent QR']) {
                      QR.hide();
                  }
                  else {
                      QR.close();
                  }
              }
              else if (Embedding.lastEmbed) {
                  Embedding.closeFloat();
              }
              hasAction = true;
          }
          if (target.nodeName === 'TEXTAREA' && tag) {
              Keybinds.tags(tag, target);
              hasAction = true;
          }
          if (QR.nodes && !QR.nodes.el.hidden) {
              if (key === Conf['Toggle sage']) {
                  Keybinds.sage();
                  hasAction = true;
              }
              if (key === Conf['Toggle Cooldown'] && $.hasClass(QR.nodes.fileSubmit, 'custom-cooldown')) {
                  QR.toggleCustomCooldown();
                  hasAction = true;
              }
              if (key === Conf['Submit QR'] && !QR.status()) {
                  QR.submit();
                  hasAction = true;
              }
          }
          // Index/Thread related
          if (key === Conf.Update) {
              switch (g.VIEW) {
                  case 'thread':
                      if (ThreadUpdater.enabled)
                          ThreadUpdater.update();
                      hasAction = true;
                      break;
                  case 'index':
                      if (indexEnabled)
                          Index.update();
                      hasAction = true;
              }
          }
          if (ThreadWatcher.enabled) {
              if (key === Conf.Watch && thread) {
                  ThreadWatcher.toggle(thread);
                  hasAction = true;
              }
              if (key === Conf['Update thread watcher']) {
                  ThreadWatcher.buttonFetchAll();
                  hasAction = true;
              }
              if (key === Conf['Toggle thread watcher']) {
                  ThreadWatcher.toggleWatcher();
                  hasAction = true;
              }
          }
          if (key === Conf['Toggle threading'] && QuoteThreading.ready) {
              QuoteThreading.toggleThreading();
              hasAction = true;
          }
          // Images
          if (ImageExpand.enabled) {
              if (key === Conf['Expand image'] && threadRoot) {
                  var post = Get.postFromNode(Keybinds.post(threadRoot));
                  if (post.file) {
                      ImageExpand.toggle(post);
                      hasAction = true;
                  }
              }
              if (key === Conf['Expand images']) {
                  ImageExpand.cb.toggleAll();
                  hasAction = true;
              }
          }
          if (key === Conf['Open Gallery'] && Gallery.enabled) {
              Gallery.cb.toggle();
              hasAction = true;
          }
          if (key === Conf.fappeTyme && FappeTyme.nodes?.fappe) {
              FappeTyme.toggle('fappe');
              hasAction = true;
          }
          if (key === Conf.werkTyme && FappeTyme.nodes?.werk) {
              FappeTyme.toggle('werk');
              hasAction = true;
          }
          // Board Navigation
          if (key === Conf['Front page']) {
              if (indexEnabled) {
                  Index.userPageNav(1);
              }
              else {
                  location.href = `/${g.BOARD}/`;
              }
              hasAction = true;
          }
          if (key === Conf['Open front page']) {
              $.open(`${location.origin}/${g.BOARD}/`);
              hasAction = true;
          }
          if (g.VIEW === 'index') {
              if (!g.SITE.isOnePage?.(g.BOARD)) {
                  if (key === Conf['Next page']) {
                      if (indexEnabled) {
                          if (!['paged', 'infinite'].includes(Conf['Index Mode'])) {
                              return;
                          }
                          $('.next button', Index.pagelist).click();
                      }
                      else {
                          $(g.SITE.selectors.nav.next)?.click();
                      }
                      hasAction = true;
                  }
                  if (key === Conf['Previous page']) {
                      if (indexEnabled) {
                          if (!['paged', 'infinite'].includes(Conf['Index Mode'])) {
                              return;
                          }
                          $('.prev button', Index.pagelist).click();
                      }
                      else {
                          $(g.SITE.selectors.nav.prev)?.click();
                      }
                      hasAction = true;
                  }
              }
              if (key === Conf['Search form']) {
                  var searchInput = indexEnabled ? Index.searchInput
                      : g.SITE.selectors.searchBox ? $(g.SITE.selectors.searchBox)
                          : undefined;
                  if (searchInput) {
                      Header.scrollToIfNeeded(searchInput);
                      searchInput.focus();
                      hasAction = true;
                  }
              }
              if (key === Conf['Mark thread read'] && thread && UnreadIndex.enabled) {
                  UnreadIndex.markRead.call(threadRoot);
                  hasAction = true;
              }
          }
          if (mode && Index.enabledOn(g.BOARD)) {
              location.href =
                  g.VIEW === 'index'
                      ? `#${mode}`
                      : `/${g.BOARD}/#${mode}`;
          }
          if (key === Conf['Open catalog'] && (catalog = CatalogLinks.catalog())) {
              location.href = catalog;
          }
          if (key === Conf['Cycle sort type'] && indexEnabled) {
              Index.cycleSortType();
              hasAction = true;
          }
          // Thread Navigation
          if (threadRoot) {
              if (g.VIEW === 'index') {
                  if (key === Conf['Next thread']) {
                      Nav.scroll(1);
                      hasAction = true;
                  }
                  else if (key === Conf['Previous thread']) {
                      Nav.scroll(-1);
                      hasAction = true;
                  }
                  else if (key === Conf['Expand thread']) {
                      ExpandThread.toggle(thread);
                      // Keep thread from moving off screen when contracted.
                      Header.scrollTo(threadRoot);
                      hasAction = true;
                  }
                  else if (key === Conf['Open thread']) {
                      Keybinds.open(thread);
                      hasAction = true;
                  }
                  else if (key === Conf['Open thread tab']) {
                      Keybinds.open(thread, true);
                      hasAction = true;
                  }
              }
              // Reply Navigation
              if (dir !== undefined) {
                  Keybinds.hl(dir, threadRoot);
                  hasAction = true;
              }
              if (key === Conf['Quick Filter MD5']) {
                  post = Keybinds.post(threadRoot);
                  Keybinds.hl(1, threadRoot);
                  Filter.quickFilterMD5.call(post, e);
                  hasAction = true;
              }
              if (QuoteYou.db) {
                  if (key === Conf['Previous Post Quoting You']) {
                      QuoteYou.cb.seek('preceding');
                      hasAction = true;
                  }
                  if (key === Conf['Next Post Quoting You']) {
                      QuoteYou.cb.seek('following');
                      hasAction = true;
                  }
              }
          }
          if (key === Conf.Hide && thread && ThreadHiding.db) {
              Header.scrollTo(threadRoot);
              ThreadHiding.toggle(thread);
              hasAction = true;
          }
          if (hasAction) {
              e.preventDefault();
              e.stopPropagation();
          }
      },
      keyCode(e) {
          let key = (() => {
              let kc;
              switch ((kc = e.keyCode)) {
                  case 8: // return
                      return '';
                  case 13:
                      return 'Enter';
                  case 27:
                      return 'Esc';
                  case 32:
                      return 'Space';
                  case 37:
                      return 'Left';
                  case 38:
                      return 'Up';
                  case 39:
                      return 'Right';
                  case 40:
                      return 'Down';
                  case 188:
                      return 'Comma';
                  case 190:
                      return 'Period';
                  case 191:
                      return 'Slash';
                  case 59:
                  case 186:
                      return 'Semicolon';
                  default:
                      if ((48 <= kc && kc <= 57) || (65 <= kc && kc <= 90)) { // 0-9, A-Z
                          return String.fromCharCode(kc).toLowerCase();
                      }
                      else if (96 <= kc && kc <= 105) { // numpad 0-9
                          return String.fromCharCode(kc - 48);
                      }
                      else {
                          return null;
                      }
              }
          })();
          if (key) {
              if (e.altKey) {
                  key = 'Alt+' + key;
              }
              if (e.ctrlKey) {
                  key = 'Ctrl+' + key;
              }
              if (e.metaKey) {
                  key = 'Meta+' + key;
              }
              if (e.shiftKey) {
                  key = 'Shift+' + key;
              }
          }
          return key;
      },
      post(thread) {
          const s = g.SITE.selectors;
          return ($(`${s.postContainer}${s.highlightable.reply}.${g.SITE.classes.highlight}`, thread) ||
              $(`${g.SITE.isOPContainerThread ? s.thread : s.postContainer}${s.highlightable.op}`, thread));
      },
      qr(thread) {
          QR.open();
          if (thread) {
              QR.quote.call(Keybinds.post(thread));
          }
          QR.nodes.com.focus();
      },
      tags(tag, ta) {
          BoardConfig.ready(function () {
              const { config } = g.BOARD;
              const supported = (() => {
                  switch (tag) {
                      case 'spoiler': return !!config.spoilers;
                      case 'code': return !!config.code_tags;
                      case 'math':
                      case 'eqn': return !!config.math_tags;
                      case 'sjis': return !!config.sjis_tags;
                  }
              })();
              if (!supported) {
                  return new Notice('warning', `[${tag}] tags are not supported on /${g.BOARD}/.`, 20);
              }
          });
          const { value } = ta;
          const selStart = ta.selectionStart;
          const selEnd = ta.selectionEnd;
          ta.value =
              value.slice(0, selStart) +
                  `[${tag}]` + value.slice(selStart, selEnd) + `[/${tag}]` +
                  value.slice(selEnd);
          // Move the caret to the end of the selection.
          const range = (`[${tag}]`).length + selEnd;
          ta.setSelectionRange(range, range);
          // Fire the 'input' event
          $.event('input', null, ta);
      },
      sage() {
          const isSage = /sage/i.test(QR.nodes.email.value);
          return QR.nodes.email.value = isSage ?
              ""
              : "sage";
      },
      open(thread, tab) {
          if (g.VIEW !== 'index') {
              return;
          }
          const url = Get.url('thread', thread);
          if (tab) {
              return $.open(url);
          }
          else {
              return location.href = url;
          }
      },
      hl(delta, thread) {
          const replySelector = `${g.SITE.selectors.postContainer}${g.SITE.selectors.highlightable.reply}`;
          const { highlight } = g.SITE.classes;
          const postEl = $(`${replySelector}.${highlight}`, thread);
          if (!delta) {
              if (postEl) {
                  $.rmClass(postEl, highlight);
              }
              return;
          }
          if (postEl) {
              const { height } = postEl.getBoundingClientRect();
              if ((Header.getTopOf(postEl) >= -height) && (Header.getBottomOf(postEl) >= -height)) { // We're at least partially visible
                  let next;
                  const { root } = Get.postFromNode(postEl).nodes;
                  const axis = delta === 1 ?
                      'following'
                      :
                          'preceding';
                  if (!(next = $.x(`${axis}-sibling::${g.SITE.xpath.replyContainer}[not(@hidden) and not(child::div[@class='stub'])][1]`, root))) {
                      return;
                  }
                  if (!next.matches(replySelector)) {
                      next = $(replySelector, next);
                  }
                  Header.scrollToIfNeeded(next, delta === 1);
                  $.addClass(next, highlight);
                  $.rmClass(postEl, highlight);
                  return;
              }
              $.rmClass(postEl, highlight);
          }
          const replies = $$(replySelector, thread);
          if (delta === -1) {
              replies.reverse();
          }
          for (var reply of replies) {
              if (((delta === 1) && (Header.getTopOf(reply) > 0)) || ((delta === -1) && (Header.getBottomOf(reply) > 0))) {
                  $.addClass(reply, highlight);
                  return;
              }
          }
      }
  };

  const Captcha = {
      cache: {
          init() {
              $.on(d, 'SaveCaptcha', e => {
                  return this.saveAPI(e.detail);
              });
              $.on(d, 'NoCaptcha', e => {
                  return this.noCaptcha(e.detail);
              });
          },
          captchas: [],
          getCount() {
              return this.captchas.length;
          },
          neededRaw() {
              return !(this.haveCookie() || this.captchas.length || QR.req || this.submitCB) && ((QR.posts.length > 1) || Conf['Auto-load captcha'] || !QR.posts[0].isOnlyQuotes() || QR.posts[0].file);
          },
          needed() {
              return this.neededRaw() && $.event('LoadCaptcha');
          },
          haveCookie() {
              return /\b_ct=/.test(d.cookie) && (QR.posts[0].thread !== 'new');
          },
          getOne() {
              let captcha;
              delete this.prerequested;
              this.clear();
              if (captcha = this.captchas.shift()) {
                  this.count();
                  return captcha;
              }
              else {
                  return null;
              }
          },
          request(isReply) {
              if (!this.submitCB) {
                  if ($.event('RequestCaptcha', { isReply })) {
                      return;
                  }
              }
              return cb => {
                  this.submitCB = cb;
                  return this.updateCount();
              };
          },
          abort() {
              if (this.submitCB) {
                  delete this.submitCB;
                  $.event('AbortCaptcha');
                  return this.updateCount();
              }
          },
          saveAPI(captcha) {
              let cb;
              if (cb = this.submitCB) {
                  delete this.submitCB;
                  cb(captcha);
                  return this.updateCount();
              }
              else {
                  return this.save(captcha);
              }
          },
          noCaptcha(detail) {
              let cb;
              if (cb = this.submitCB) {
                  if (!this.haveCookie() || detail?.error) {
                      QR.error(detail?.error || 'Failed to retrieve captcha.');
                      QR.captcha.setup(d.activeElement === QR.nodes.status);
                  }
                  delete this.submitCB;
                  cb();
                  return this.updateCount();
              }
          },
          save(captcha) {
              let cb;
              if (cb = this.submitCB) {
                  this.abort();
                  cb(captcha);
                  return;
              }
              this.captchas.push(captcha);
              this.captchas.sort((a, b) => a.timeout - b.timeout);
              return this.count();
          },
          clear() {
              if (this.captchas.length) {
                  let i;
                  const now = Date.now();
                  for (i = 0; i < this.captchas.length; i++) {
                      var captcha = this.captchas[i];
                      if (captcha.timeout > now) {
                          break;
                      }
                  }
                  if (i) {
                      this.captchas = this.captchas.slice(i);
                      return this.count();
                  }
              }
          },
          count() {
              clearTimeout(this.timer);
              if (this.captchas.length) {
                  this.timer = setTimeout(this.clear.bind(this), this.captchas[0].timeout - Date.now());
              }
              this.updateCount();
          },
          updateCount() {
              $.event('CaptchaCount', this.captchas.length);
          }
      },
      // replace: CaptchaReplace,
      t: CaptchaT,
      // v2: {
      //   lifetime: 2 * MINUTE,
      //
      //   init() {
      //     if (d.cookie.indexOf('pass_enabled=1') >= 0) { return; }
      //     if (!(this.isEnabled = !!$('#g-recaptcha, #captcha-forced-noscript') || !$.id('postForm'))) { return; }
      //
      //     if (this.noscript = Conf['Force Noscript Captcha'] || !Main.jsEnabled) {
      //       $.addClass(QR.nodes.el, 'noscript-captcha');
      //     }
      //
      //     Captcha.cache.init();
      //     $.on(d, 'CaptchaCount', this.count.bind(this));
      //
      //     const root = $.el('div', { className: 'captcha-root' });
      //     $.extend(root, {
      //       innerHTML:
      //         '<div class="captcha-counter"><a href="javascript:;"></a></div>'
      //     }
      //     );
      //     const counter = $('.captcha-counter > a', root);
      //     this.nodes = { root, counter };
      //     this.count();
      //     $.addClass(QR.nodes.el, 'has-captcha', 'captcha-v2');
      //     $.after(QR.nodes.com.parentNode, root);
      //
      //     $.on(counter, 'click', this.toggle.bind(this));
      //     $.on(counter, 'keydown', e => {
      //       if (Keybinds.keyCode(e) !== 'Space') { return; }
      //       this.toggle();
      //       e.preventDefault();
      //       return e.stopPropagation();
      //     });
      //     return $.on(window, 'captcha:success', () => {
      //       // XXX Greasemonkey 1.x workaround to gain access to GM_* functions.
      //       return $.queueTask(() => this.save(false));
      //     });
      //   },
      //
      //   timeouts: {},
      //   prevNeeded: 0,
      //
      //   noscriptURL() {
      //     let lang;
      //     let url = `https://www.google.com/recaptcha/api/fallback?k=${meta.recaptchaKey}`;
      //     if (lang = Conf['captchaLanguage'].trim()) {
      //       url += `&hl=${encodeURIComponent(lang)}`;
      //     }
      //     return url;
      //   },
      //
      //   moreNeeded() {
      //     // Post count temporarily off by 1 when called from QR.post.rm, QR.close, or QR.submit
      //     return $.queueTask(() => {
      //       const needed = Captcha.cache.needed();
      //       if (needed && !this.prevNeeded) {
      //         this.setup(QR.cooldown.auto && (d.activeElement === QR.nodes.status));
      //       }
      //       return this.prevNeeded = needed;
      //     });
      //   },
      //
      //   toggle() {
      //     if (this.nodes.container && !this.timeouts.destroy) {
      //       return this.destroy();
      //     } else {
      //       return this.setup(true, true);
      //     }
      //   },
      //
      //   setup(focus, force) {
      //     if (!this.isEnabled || (!Captcha.cache.needed() && !force)) { return; }
      //
      //     if (focus) {
      //       $.addClass(QR.nodes.el, 'focus');
      //       this.nodes.counter.focus();
      //     }
      //
      //     if (this.timeouts.destroy) {
      //       clearTimeout(this.timeouts.destroy);
      //       delete this.timeouts.destroy;
      //       return this.reload();
      //     }
      //
      //     if (this.nodes.container) {
      //       // XXX https://bugzilla.mozilla.org/show_bug.cgi?id=1226835
      //       $.queueTask(() => {
      //         let iframe;
      //         if (this.nodes.container && (d.activeElement === this.nodes.counter) && (iframe = $('iframe[src^="https://www.google.com/recaptcha/"]', this.nodes.container))) {
      //           iframe.focus();
      //           return QR.focus();
      //         }
      //       }); // Event handler not fired in Firefox
      //       return;
      //     }
      //
      //     this.nodes.container = $.el('div', { className: 'captcha-container' });
      //     $.prepend(this.nodes.root, this.nodes.container);
      //     new MutationObserver(this.afterSetup.bind(this)).observe(this.nodes.container, {
      //       childList: true,
      //       subtree: true
      //     }
      //     );
      //
      //     if (this.noscript) {
      //       return this.setupNoscript();
      //     } else {
      //       return this.setupJS();
      //     }
      //   },
      //
      //   setupNoscript() {
      //     const iframe = $.el('iframe', {
      //       id: 'qr-captcha-iframe',
      //       scrolling: 'no',
      //       src: this.noscriptURL()
      //     }
      //     );
      //     const div = $.el('div');
      //     const textarea = $.el('textarea');
      //     $.add(div, textarea);
      //     return $.add(this.nodes.container, [iframe, div]);
      //   },
      //
      //   setupJS() {
      //     $.global('setupCaptcha', { recaptchaKey: meta.recaptchaKey });
      //   },
      //
      //   afterSetup(mutations) {
      //     for (var mutation of mutations) {
      //       for (var node of mutation.addedNodes) {
      //         var iframe, textarea;
      //         if (iframe = $.x('./descendant-or-self::iframe[starts-with(@src, "https://www.google.com/recaptcha/")]', node)) { this.setupIFrame(iframe); }
      //         if (textarea = $.x('./descendant-or-self::textarea', node)) { this.setupTextArea(textarea); }
      //       }
      //     }
      //   },
      //
      //   setupIFrame(iframe) {
      //     let needle;
      //     if (!doc.contains(iframe)) { return; }
      //     Captcha.replace.iframe(iframe);
      //     $.addClass(QR.nodes.el, 'captcha-open');
      //     this.fixQRPosition();
      //     $.on(iframe, 'load', this.fixQRPosition);
      //     if (d.activeElement === this.nodes.counter) { iframe.focus(); }
      //     // XXX Make sure scroll on space prevention (see src/css/style.css) doesn't cause scrolling of div
      //     if (['blink', 'edge'].includes($.engine) && (needle = iframe.parentNode, $$('#qr .captcha-container > div > div:first-of-type').includes(needle))) {
      //       return $.on(iframe.parentNode, 'scroll', function () { return this.scrollTop = 0; });
      //     }
      //   },
      //
      //   fixQRPosition() {
      //     if (QR.nodes.el.getBoundingClientRect().bottom > doc.clientHeight) {
      //       QR.nodes.el.style.top = '';
      //       return QR.nodes.el.style.bottom = '0px';
      //     }
      //   },
      //
      //   setupTextArea(textarea) {
      //     return $.one(textarea, 'input', () => this.save(true));
      //   },
      //
      //   destroy() {
      //     if (!this.isEnabled) { return; }
      //     delete this.timeouts.destroy;
      //     $.rmClass(QR.nodes.el, 'captcha-open');
      //     if (this.nodes.container) {
      //       $.global('resetCaptcha');
      //       $.rm(this.nodes.container);
      //       return delete this.nodes.container;
      //     }
      //   },
      //
      //   getOne(isReply) {
      //     return Captcha.cache.getOne(isReply);
      //   },
      //
      //   save(pasted, token) {
      //     Captcha.cache.save({
      //       response: token || $('textarea', this.nodes.container).value,
      //       timeout: Date.now() + this.lifetime
      //     });
      //
      //     const focus = (d.activeElement?.nodeName === 'IFRAME') && /https?:\/\/www\.google\.com\/recaptcha\//.test(d.activeElement.src);
      //     if (Captcha.cache.needed()) {
      //       if (focus) {
      //         if (QR.cooldown.auto || Conf['Post on Captcha Completion']) {
      //           this.nodes.counter.focus();
      //         } else {
      //           QR.nodes.status.focus();
      //         }
      //       }
      //       this.reload();
      //     } else {
      //       if (pasted) {
      //         this.destroy();
      //       } else {
      //         if (this.timeouts.destroy == null) { this.timeouts.destroy = setTimeout(this.destroy.bind(this), 3 * SECOND); }
      //       }
      //       if (focus) { QR.nodes.status.focus(); }
      //     }
      //
      //     if (Conf['Post on Captcha Completion'] && !QR.cooldown.auto) { return QR.submit(); }
      //   },
      //
      //   count() {
      //     const count = Captcha.cache.getCount();
      //     const loading = Captcha.cache.submitCB ? '...' : '';
      //     this.nodes.counter.textContent = `Captchas: ${count}${loading}`;
      //     return this.moreNeeded();
      //   },
      //
      //   reload() {
      //     if ($('iframe[src^="https://www.google.com/recaptcha/api/fallback?"]', this.nodes.container)) {
      //       this.destroy();
      //       return this.setup(false, true);
      //     } else {
      //       $.global('resetCaptcha');
      //     }
      //   },
      //
      //   occupied() {
      //     return !!this.nodes.container && !this.timeouts.destroy;
      //   }
      // }
  };

  const Report = {
      init() {
          let match;
          if (!(match = location.search.match(/\bno=(\d+)/))) {
              return;
          }
          Captcha.replace.init();
          this.postID = +match[1];
          $.ready(this.ready);
      },
      ready() {
          $.addStyle(CSS$1.report);
          if (Conf['Archive Report']) {
              Report.archive();
          }
          new MutationObserver(function () {
              Report.fit('iframe[src^="https://www.google.com/recaptcha/api2/frame"]');
              return Report.fit('body');
          }).observe(d.body, {
              childList: true,
              attributes: true,
              subtree: true
          });
          Report.fit('body');
      },
      fit(selector) {
          let el;
          if (!((el = $(selector, doc)) && (getComputedStyle(el).visibility !== 'hidden'))) {
              return;
          }
          const dy = (el.getBoundingClientRect().bottom - doc.clientHeight) + 8;
          if (dy > 0) {
              return window.resizeBy(0, dy);
          }
      },
      archive() {
          let match, urls;
          if (!(urls = Redirect.report(g.BOARD.ID)).length) {
              return;
          }
          const form = $('form');
          const types = $.id('reportTypes');
          const message = $('h3');
          const fieldset = $.el('fieldset', {
              id: 'archive-report',
              hidden: true
          }, { innerHTML: ReportPage });
          const enabled = $('#archive-report-enabled', fieldset);
          const reason = $('#archive-report-reason', fieldset);
          const submit = $('#archive-report-submit', fieldset);
          $.on(enabled, 'change', function () {
              return reason.disabled = !this.checked;
          });
          if (form && types) {
              fieldset.hidden = !$('[value="31"]', types).checked;
              $.on(types, 'change', function (e) {
                  fieldset.hidden = (e.target.value !== '31');
                  return Report.fit('body');
              });
              $.after(types, fieldset);
              Report.fit('body');
              $.one(form, 'submit', function (e) {
                  if (!fieldset.hidden && enabled.checked) {
                      e.preventDefault();
                      return Report.archiveSubmit(urls, reason.value, results => {
                          this.action = '#archiveresults=' + encodeURIComponent(JSON.stringify(results));
                          return this.submit();
                      });
                  }
              });
          }
          else if (message) {
              fieldset.hidden = /Report submitted!/.test(message.textContent);
              $.on(enabled, 'change', function () {
                  return submit.hidden = !this.checked;
              });
              $.after(message, fieldset);
              $.on(submit, 'click', () => Report.archiveSubmit(urls, reason.value, Report.archiveResults));
          }
          if (match = location.hash.match(/^#archiveresults=(.*)$/)) {
              try {
                  return Report.archiveResults(JSON.parse(decodeURIComponent(match[1])));
              }
              catch (error) { }
          }
      },
      archiveSubmit(urls, reason, cb) {
          const form = $.formData({
              board: g.BOARD.ID,
              num: Report.postID,
              reason
          });
          const results = [];
          for (const [name, url] of urls) {
              (function (name, url) {
                  return $.ajax(url, {
                      onloadend() {
                          results.push([name, this.response || { error: '' }]);
                          if (results.length === urls.length) {
                              return cb(results);
                          }
                      },
                      form
                  });
              })(name, url);
          }
      },
      archiveResults(results) {
          const fieldset = $.id('archive-report');
          for (const [name, response] of results) {
              const line = $.el('h3', { className: 'archive-report-response' });
              if ('success' in response) {
                  $.addClass(line, 'archive-report-success');
                  line.textContent = `${name}: ${response.success}`;
              }
              else {
                  $.addClass(line, 'archive-report-error');
                  line.textContent = `${name}: ${response.error || 'Error reporting post.'}`;
              }
              if (fieldset) {
                  $.before(fieldset, line);
              }
              else {
                  $.add(d.body, line);
              }
          }
      }
  };

  const PostSuccessful = {
      init() {
          if (!Conf['Remember Your Posts']) {
              return;
          }
          $.ready(this.ready);
      },
      ready() {
          if (d.title !== 'Post successful!') {
              return;
          }
          let [_, threadID, postID] = $('h1').nextSibling.textContent.match(/thread:(\d+),no:(\d+)/);
          postID = +postID;
          threadID = +threadID || postID;
          const db = new DataBoard('yourPosts');
          return db.set({
              boardID: g.BOARD.ID,
              threadID,
              postID,
              val: true
          });
      }
  };

  function generatePostInfoHtml(ID, o, subject, capcode, email, name, tripcode, pass, capcodeLC, capcodePlural, staticPath, gifIcon, capcodeDescription, uniqueID, flag, flagCode, flagCodeTroll, dateUTC, dateText, postLink, quoteLink, boardID, threadID) {
    const nameHtml = [h("span", { class: `name${capcode ? ' capcode' : ''}` }, name)];
    if (tripcode)
      nameHtml.push(' ', h("span", { class: "postertrip" }, tripcode));
    if (pass)
      nameHtml.push(' ', h("span", { title: `Pass user since ${pass}`, class: "n-pu" }));
    if (capcode) {
      nameHtml.push(' ', h("strong", { class: `capcode hand id_${capcodeLC}`, title: `Highlight posts by ${capcodePlural}` },
        "## ",
        capcode));
    }
    const nameBlockContent = email ? [' ', h("a", { href: `mailto:${email}`, class: "useremail" }, ...nameHtml)] : nameHtml;
    if (!(boardID === "f" && !o.isReply || capcodeDescription))
      nameBlockContent.push(' ');
    if (capcodeDescription) {
      nameBlockContent.push(h("img", { src: `${staticPath}${capcodeLC}icon${gifIcon}`, alt: `${capcode} Icon`, title: `This user is ${capcodeDescription}.`, class: "identityIcon retina" }));
    }
    if (uniqueID && !capcode) {
      nameBlockContent.push(h("span", { class: `posteruid id_${uniqueID}` },
        "(ID: ",
        h("span", { class: "hand", title: "Highlight posts by this ID" }, uniqueID),
        ")"));
    }
    if (flagCode)
      nameBlockContent.push(' ', h("span", { title: flag, class: `flag flag-${flagCode.toLowerCase()}` }));
    if (flagCodeTroll)
      nameBlockContent.push(' ', h("span", { title: flag, class: `bfl bfl-${flagCodeTroll.toLowerCase()}` }));
    const postNumContent = [
      h("a", { href: postLink, title: "Link to this post" }, "No."),
      h("a", { href: quoteLink, title: "Reply to this post" }, ID),
    ];
    if (o.isSticky) {
      const src = `${staticPath}sticky${gifIcon}`;
      postNumContent.push(' ');
      if (boardID === "f") {
        postNumContent.push(h("img", { src: src, alt: "Sticky", title: "Sticky", style: "height: 18px; width: 18px;" }));
      } else {
        postNumContent.push(h("img", { src: src, alt: "Sticky", title: "Sticky", class: "stickyIcon retina" }));
      }
    }
    if (o.isClosed && !o.isArchived) {
      postNumContent.push(' ');
      const src = `${staticPath}closed${gifIcon}`;
      if (boardID === "f") {
        postNumContent.push(h("img", { src: src, alt: "Closed", title: "Closed", style: "height: 18px; width: 18px;" }));
      } else {
        postNumContent.push(h("img", { src: src, alt: "Closed", title: "Closed", class: "closedIcon retina" }));
      }
    }
    if (o.isArchived) {
      postNumContent.push(' ', h("img", { src: `${staticPath}archived${gifIcon}`, alt: "Archived", title: "Archived", class: "archivedIcon retina" }));
    }
    if (!o.isReply && g.VIEW === "index") {
      postNumContent.push(' \u00A0 ', // \u00A0 is nbsp
      h("span", null,
        "[",
        h("a", { href: `/${boardID}/thread/${threadID}`, class: "replylink" }, "Reply"),
        "]"));
    }
    return h("div", { class: "postInfo desktop", id: `pi${ID}` },
      h("input", { type: "checkbox", name: ID, value: "delete" }),
      ' ',
      ...((!o.isReply || boardID === "f" || subject) ? [h("span", { class: "subject" }, subject), ' '] : []),
      h("span", { class: `nameBlock${capcode ? ` capcode${capcode}` : ''}` }, ...nameBlockContent),
      ' ',
      h("span", { class: "dateTime", "data-utc": dateUTC }, dateText),
      ' ',
      h("span", { class: `postNum${!(boardID === " f" && !o.isReply) ? ' desktop' : ''}` }, ...postNumContent));
  }

  function generateFileHtml(file, ID, boardID, fileURL, shortFilename, fileThumb, o, staticPath, gifIcon) {
    if (file) {
      const fileContent = [];
      if (boardID === "f") {
        fileContent.push(h("div", { class: "fileInfo", "data-md5": file.MD5 },
          h("span", { class: "fileText", id: `fT${ID}` },
            'File: ',
            h("a", { "data-width": file.width, "data-height": file.height, href: fileURL, target: "_blank" }, file.name),
            "-(",
            file.size,
            ", ",
            file.dimensions,
            file.tag ? ', ' + file.tag : '',
            ")")));
      } else {
        fileContent.push(h("div", { class: "fileText", id: `fT${ID}`, title: file.isSpoiler ? file.name : null },
          'File: ',
          h("a", { title: file.name === shortFilename || file.isSpoiler ? null : file.name, href: fileURL, target: "_blank" }, file.isSpoiler ? 'Spoiler Image' : shortFilename),
          ` (${file.size}, ${file.dimensions || "PDF"})`), h("a", { class: `fileThumb${file.isSpoiler ? ' imgspoiler' : ''}`, href: fileURL, target: "_blank", "data-m": file.hasDownscale ? '' : null },
          h("img", { src: fileThumb, alt: file.size, "data-md5": file.MD5, style: `height: ${file.isSpoiler ? '100' : file.theight}px; width: ${file.isSpoiler ? '100' : file.twidth}px;`, loading: "lazy" })));
      }
      return h("div", { class: "file", id: `f${ID}` }, ...fileContent);
    } else if (o.fileDeleted) {
      return h("div", { class: "file", id: `f${ID}` },
        h("span", { class: "fileThumb" },
          h("img", { src: `${staticPath}filedeleted-res${gifIcon}`, alt: "File deleted.", class: "fileDeletedRes retina" })));
    }
    return { innerHTML: '', [isEscaped]: true };
  }

  function generateCatalogThreadHtml(thread, src, imgClass, data, postCount, fileCount, pageCount, staticPath, gifIcon) {
    return h(hFragment, null,
      h("a", { class: "catalog-link", href: `/${thread.board}/thread/${thread.ID}` }, imgClass ?
        h("img", { src: src, class: `catalog-thumb ${imgClass}` }) :
        h("img", { src: src, class: "catalog-thumb", "data-width": data.tn_w, "data-height": data.tn_h })),
      h("div", { class: "catalog-stats" },
        h("span", { title: "Posts / Files / Page" },
          h("span", { class: `post-count${data.bumplimit ? ' warning' : ''}` }, postCount),
          ' / ',
          h("span", { class: `file-count${data.imagelimit ? ' warning' : ''}` }, fileCount),
          ' / ',
          h("span", { class: "page-count" }, pageCount)),
        h("span", { class: "catalog-icons" },
          thread.isSticky ? h("img", { src: `${staticPath}sticky${gifIcon}`, class: "stickyIcon", title: "Sticky" }) : '',
          thread.isClosed ? h("img", { src: `${staticPath}closed${gifIcon}`, class: "closedIcon", title: "Closed" }) : '')));
  }

  const boardOrigin = () => `${location.protocol}//boards.4chan.org`;
  const cdnOrigin = () => `${location.protocol}//a.4cdn.org`;
  const SWYotsuba = {
    isOPContainerThread: false,
    hasIPCount: true,
    archivedBoardsKnown: true,
    urls: {
      post: ({ postID }) => `#p${postID}`,
      index: ({ boardID }) => `${boardOrigin()}/${boardID}/`,
      thread: ({ boardID, threadID }) => `${boardOrigin()}/${boardID}/thread/${threadID}`,
      threadJSON: ({ boardID, threadID }) => `${cdnOrigin()}/${boardID}/thread/${threadID}.json`,
      threadsListJSON: ({ boardID }) => `${cdnOrigin()}/${boardID}/threads.json`,
      catalogJSON: ({ boardID }) => `${cdnOrigin()}/${boardID}/catalog.json`,
      thumb: ({ boardID }, filename) => `${location.protocol}//${ImageHost.thumbHost()}/${boardID}/${filename}`,
      catalog: ({ boardID }) => boardID === 'f' ? undefined : `${boardOrigin()}/${boardID}/catalog`,
      archive: ({ boardID }) => BoardConfig.isArchived(boardID) ? `${boardOrigin()}/${boardID}/archive` : undefined,
      archiveListJSON: ({ boardID }) => BoardConfig.isArchived(boardID) ? `${cdnOrigin()}/${boardID}/archive.json` : '',
      file: ({ boardID }, filename) => {
        const hostname = boardID === 'f' ? ImageHost.flashHost() : ImageHost.host();
        return `${location.protocol}//${hostname}/${boardID}/${filename}`;
      },
    },
    isPrunedByAge({ boardID }) { return boardID === 'f'; },
    areMD5sDeferred({ boardID }) { return boardID === 'f'; },
    isOnePage({ boardID }) { return boardID === 'f'; },
    noAudio({ boardID }) { return BoardConfig.noAudio(boardID); },
    selectors: {
      board: '.board',
      thread: '.thread',
      threadDivider: '.board > hr',
      summary: 'a.summary',
      postContainer: '.postContainer',
      replyOriginal: '.replyContainer:not([data-clone])',
      sideArrows: 'div.sideArrows',
      post: '.post',
      infoRoot: '.postInfo',
      info: {
        subject: '.subject',
        name: '.name',
        email: '.useremail',
        tripcode: '.postertrip',
        uniqueIDRoot: '.posteruid',
        uniqueID: '.posteruid > .hand',
        capcode: '.capcode.hand',
        pass: '.n-pu',
        flag: '.flag, .bfl',
        date: '.dateTime',
        nameBlock: '.nameBlock',
        quote: '.postNum > a:nth-of-type(2)',
        reply: '.replylink'
      },
      icons: {
        isSticky: '.stickyIcon',
        isClosed: '.closedIcon',
        isArchived: '.archivedIcon'
      },
      file: {
        text: '.file > .fileText',
        link: '.fileText > a',
        thumb: 'a.fileThumb > [data-md5]'
      },
      thumbLink: 'a.fileThumb',
      highlightable: {
        op: '.opContainer',
        reply: ' > .reply',
        catalog: ''
      },
      comment: '.postMessage',
      spoiler: 's',
      quotelink: ':not(pre) > .quotelink', // XXX https://github.com/4chan/4chan-JS/issues/77: 4chan currently creates quote links inside [code] tags; ignore them
      catalog: {
        board: '#threads',
        thread: '.thread',
        thumb: '.thumb'
      },
      boardList: '#boardNavDesktop > .boardList',
      boardListBottom: '#boardNavDesktopFoot > .boardList',
      styleSheet: 'link[title=switch]',
      psa: '#globalMessage',
      psaTop: '#globalToggle',
      searchBox: '#search-box',
      nav: {
        prev: '.prev > form > [type=submit]',
        next: '.next > form > [type=submit]'
      }
    },
    classes: {
      highlight: 'highlight'
    },
    xpath: {
      thread: 'div[contains(concat(" ",@class," ")," thread ")]',
      postContainer: 'div[contains(@class,"postContainer")]',
      replyContainer: 'div[contains(@class,"replyContainer")]'
    },
    // ^https?://boards\\.4chan(?:nel)?\\.org/+\
    regexp: {
      quotelink: new RegExp(`\
^https?://boards\\.4chan\\.org/+\
([^/]+)\
/+thread/+\
(\\d+)\
(?:[/?][^#]*)?\
(?:#p(\\d+))?$\
`),
      // /<a [^>]*\bhref="(?:(?:\/\/boards\.4chan(?:nel)?\.org)?\/([^\/]+)\/thread\/)?(\d+)?(?:#p(\d+))?"/g,
      // /^https?:\/\/www\.4chan(?:nel)?\.org\/+pass(?:$|[?#])/,
      // /^https?:\/\/sys\.4chan(?:nel)?\.org\/+captcha(?:$|[?#])/,
      quotelinkHTML: /<a [^>]*\bhref="(?:(?:\/\/boards\.4chan\.org)?\/([^\/]+)\/thread\/)?(\d+)?(?:#p(\d+))?"/g,
      pass: /^https?:\/\/www\.4chan\.org\/+pass(?:$|[?#])/,
      captcha: /^https?:\/\/sys\.4chan\.org\/+captcha(?:$|[?#])/,
    },
    bgColoredEl() {
      return $.el('div', { className: 'reply' });
    },
    isThisPageLegit() {
      // not 404 error page or similar.
      // return ['boards.4chan.org', 'boards.4channel.org'].includes(location.hostname) &&
      return location.hostname === 'boards.4chan.org' &&
        d.doctype &&
        !$('link[href*="favicon-status.ico"]', d.head) &&
        !['4chan - Temporarily Offline', '4chan - Error', '504 Gateway Time-out', 'MathJax Equation Source'].includes(d.title);
    },
    is404() {
      // XXX Sometimes threads don't 404 but are left over as stubs containing one garbage reply post.
      return ['4chan - Temporarily Offline', '4chan - 404 Not Found'].includes(d.title) || ((g.VIEW === 'thread') && $('.board') && !$('.opContainer'));
    },
    isIncomplete() {
      return ['index', 'thread'].includes(g.VIEW) && !$('.board + *');
    },
    isBoardlessPage(url) {
      // return ['www.4chan.org', 'www.4channel.org'].includes(url.hostname);
      return url.hostname === 'www.4chan.org';
    },
    isAuxiliaryPage(url) {
      // return !['boards.4chan.org', 'boards.4channel.org'].includes(url.hostname);
      return url.hostname !== 'boards.4chan.org';
    },
    isFileURL(url) {
      return ImageHost.test(url.hostname);
    },
    initAuxiliary() {
      switch (location.hostname) {
        // case 'www.4chan.org': case 'www.4channel.org':
        case 'www.4chan.org':
          $.onExists(doc, 'body', () => $.addStyle(CSS$1.www));
          Captcha.replace.init();
          return;
        // case 'sys.4chan.org': case 'sys.4channel.org':
        case 'sys.4chan.org':
          var pathname = location.pathname.split(/\/+/);
          if (pathname[2] === 'imgboard.php') {
            let match;
            if (/\bmode=report\b/.test(location.search)) {
              Report.init();
            } else if (match = location.search.match(/\bres=(\d+)/)) {
              $.ready(function () {
                if (Conf['404 Redirect'] && ($.id('errmsg')?.textContent === 'Error: Specified thread does not exist.')) {
                  return Redirect.navigate('thread', {
                    boardID: g.BOARD.ID,
                    postID: +match[1]
                  });
                }
              });
            }
          } else if (pathname[2] === 'post') {
            PostSuccessful.init();
          }
          return;
      }
    },
    scriptData() {
      for (var script of $$('script:not([src])', d.head)) {
        if (/\bcooldowns *=/.test(script.textContent)) {
          return script.textContent;
        }
      }
      return '';
    },
    parseThreadMetadata(thread) {
      let m;
      const scriptData = this.scriptData();
      thread.postLimit = /\bbumplimit *= *1\b/.test(scriptData);
      thread.fileLimit = /\bimagelimit *= *1\b/.test(scriptData);
      thread.ipCount = (m = scriptData.match(/\bunique_ips *= *(\d+)\b/)) ? +m[1] : undefined;
      if ((g.BOARD.ID === 'f') && thread.OP.file) {
        const { file } = thread.OP;
        return $.ajax(this.urls.threadJSON({ boardID: 'f', threadID: thread.ID }), {
          timeout: MINUTE,
          onloadend() {
            if (this.response) {
              return file.text.dataset.md5 = (file.MD5 = this.response.posts[0].md5);
            }
          }
        });
      }
    },
    parseNodes(post, nodes) {
      // Add CSS classes to sticky/closed icons on /f/ to match other boards.
      if (post.boardID === 'f') {
        return (() => {
          const result = [];
          for (var type of ['Sticky', 'Closed']) {
            var icon;
            if (icon = $(`img[alt=${type}]`, nodes.info)) {
              result.push($.addClass(icon, `${type.toLowerCase()}Icon`, 'retina'));
            }
          }
          return result;
        })();
      }
    },
    parseInfo(post) {
      if (post.info.tripcode == null && /!/.test(post.info.name)) {
        [, post.info.name, post.info.tripcode] = post.info.name.match(/(.*?) ?(!.*)/);
      }
    },
    parseDate(node) {
      return new Date(node.dataset.utc * 1000);
    },
    parseFile(post, file) {
      let info;
      const { text, link, thumb } = file;
      if (!(info = link.nextSibling?.textContent.match(/\(([\d.]+ [KMG]?B).*\)/))) {
        return false;
      }
      $.extend(file, {
        name: text.title || link.title || link.textContent,
        size: info[1],
        dimensions: info[0].match(/\d+x\d+/)?.[0],
        tag: info[0].match(/,[^,]*, ([a-z]+)\)/i)?.[1],
        MD5: text.dataset.md5
      });
      if (thumb) {
        $.extend(file, {
          thumbURL: thumb.src,
          MD5: thumb.dataset.md5,
          isSpoiler: $.hasClass(thumb.parentNode, 'imgspoiler')
        });
        if (file.isSpoiler) {
          let m;
          file.thumbURL = (m = link.href.match(/\d+(?=\.\w+$)/)) ? `${location.protocol}//${ImageHost.thumbHost()}/${post.board}/${m[0]}s.jpg` : undefined;
        }
      }
      return true;
    },
    cleanComment(bq) {
      let abbr;
      if (abbr = $('.abbr', bq)) { // 'Comment too long' or 'EXIF data available'
        for (var node of $$('.abbr + br, .exif', bq)) {
          $.rm(node);
        }
        for (let i = 0; i < 2; i++) {
          var br;
          if ((br = abbr.previousSibling) && (br.nodeName === 'BR')) {
            $.rm(br);
          }
        }
        return $.rm(abbr);
      }
    },
    cleanCommentDisplay(bq) {
      let b;
      if ((b = $('b', bq)) && /^Rolled /.test(b.textContent)) {
        $.rm(b);
      }
      return $.rm($('.fortune', bq));
    },
    insertTags(bq) {
      let node;
      for (node of $$('s, .removed-spoiler', bq)) {
        $.replace(node, [$.tn('[spoiler]'), ...node.childNodes, $.tn('[/spoiler]')]);
      }
      for (node of $$('.prettyprint', bq)) {
        $.replace(node, [$.tn('[code]'), ...node.childNodes, $.tn('[/code]')]);
      }
    },
    hasCORS(url) {
      return url.split('/').slice(0, 3).join('/') === (location.protocol + '//a.4cdn.org');
    },
    sfwBoards(sfw) {
      return BoardConfig.sfwBoards(sfw);
    },
    uidColor(uid) {
      let msg = 0;
      let i = 0;
      while (i < 8) {
        msg = ((msg << 5) - msg) + uid.charCodeAt(i++);
      }
      return (msg >> 8) & 0xFFFFFF;
    },
    isLinkified(link) {
      return ImageHost.test(link.hostname);
    },
    testNativeExtension() {
      return $.global('testNativeExtension', {});
    },
    transformBoardList() {
      let node;
      const nodes = [];
      const spacer = () => $.el('span', { className: 'spacer' });
      const items = $.X('.//a|.//text()[not(ancestor::a)]', $(SWYotsuba.selectors.boardList));
      let i = 0;
      while ((node = items.snapshotItem(i++))) {
        switch (node.nodeName) {
          case '#text':
            for (var chr of node.nodeValue) {
              var span = $.el('span', { textContent: chr });
              if (chr === ' ') {
                span.className = 'space';
              }
              if (chr === ']') {
                nodes.push(spacer());
              }
              nodes.push(span);
              if (chr === '[') {
                nodes.push(spacer());
              }
            }
            break;
          case 'A':
            var a = node.cloneNode(true);
            nodes.push(a);
            break;
        }
      }
      return nodes;
    },
    Build: {
      staticPath: '//s.4cdn.org/image/',
      gifIcon: window.devicePixelRatio >= 2 ? '@2x.gif' : '.gif',
      spoilerRange: Object.create(null),
      shortFilename(filename) {
        const ext = filename.match(/\.?[^\.]*$/)[0];
        if ((filename.length - ext.length) > 30) {
          return `${filename.match(/(?:[\uD800-\uDBFF][\uDC00-\uDFFF]|[^]){0,25}/)[0]}(...)${ext}`;
        } else {
          return filename;
        }
      },
      spoilerThumb(boardID) {
        let spoilerRange;
        if ((spoilerRange = this.spoilerRange[boardID])) {
          // Randomize the spoiler image.
          return `${this.staticPath}spoiler-${boardID}${Math.floor(1 + (spoilerRange * Math.random()))}.png`;
        } else {
          return `${this.staticPath}spoiler.png`;
        }
      },
      sameThread(boardID, threadID) {
        return (g.VIEW === 'thread') && (g.BOARD.ID === boardID) && (g.THREADID === +threadID);
      },
      threadURL(boardID, threadID) {
        if (boardID !== g.BOARD.ID) {
          return `//boards.4chan.org/${boardID}/thread/${threadID}`;
        } else if ((g.VIEW !== 'thread') || (+threadID !== g.THREADID)) {
          return `/${boardID}/thread/${threadID}`;
        } else {
          return '';
        }
      },
      postURL(boardID, threadID, postID) {
        return `${this.threadURL(boardID, threadID)}#p${postID}`;
      },
      parseJSON(data, { siteID, boardID }) {
        const o = {
          // id
          ID: data.no,
          postID: data.no,
          threadID: data.resto || data.no,
          boardID,
          siteID,
          isReply: !!data.resto,
          // thread status
          isSticky: !!data.sticky,
          isClosed: !!data.closed,
          isArchived: !!data.archived,
          threadReplies: data.replies,
          threadImages: data.images,
          // file status
          fileDeleted: !!data.filedeleted,
          filesDeleted: data.filedeleted ? [0] : []
        };
        o.info = {
          subject: $.unescape(data.sub),
          email: $.unescape(data.email),
          name: $.unescape(data.name) || '',
          tripcode: data.trip,
          pass: (data.since4pass != null) ? `${data.since4pass}` : undefined,
          uniqueID: data.id,
          flagCode: data.country,
          flagCodeTroll: data.board_flag,
          flag: $.unescape((data.country_name || data.flag_name)),
          dateUTC: data.time,
          dateText: data.now,
          // Yes, we use the raw string here
          commentHTML: { innerHTML: data.com || '', [isEscaped]: true }
        };
        if (data.capcode) {
          o.info.capcode = data.capcode.replace(/_highlight$/, '').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
          o.capcodeHighlight = /_highlight$/.test(data.capcode);
          delete o.info.uniqueID;
        }
        o.files = [];
        if (data.ext) {
          o.file = this.parseJSONFile(data, { siteID, boardID });
          o.files.push(o.file);
        }
        // Temporary JSON properties for events such as April 1 / Halloween
        o.extra = dict();
        for (var key in data) {
          if (key[0] === 'x') {
            o.extra[key] = data[key];
          }
        }
        return o;
      },
      parseJSONFile(data, { siteID, boardID }) {
        const site = g.sites[siteID];
        const filename = (site.software === 'yotsuba') && (boardID === 'f') ?
          `${encodeURIComponent(data.filename)}${data.ext}`
          :
            `${data.tim}${data.ext}`;
        const o = {
          name: ($.unescape(data.filename)) + data.ext,
          url: site.urls.file({ siteID, boardID }, filename),
          height: data.h,
          width: data.w,
          MD5: data.md5,
          size: $.bytesToString(data.fsize),
          thumbURL: site.urls.thumb({ siteID, boardID }, `${data.tim}s.jpg`),
          theight: data.tn_h,
          twidth: data.tn_w,
          isSpoiler: !!data.spoiler,
          tag: data.tag,
          hasDownscale: !!data.m_img
        };
        if ((data.h != null) && !/\.pdf$/.test(o.url)) {
          o.dimensions = `${o.width}x${o.height}`;
        }
        return o;
      },
      parseComment(html) {
        html = html
          .replace(/<br\b[^<]*>/gi, '\n')
          .replace(/\n\n<span\b[^<]* class="abbr"[^]*$/i, '') // EXIF data (/p/)
          .replace(/<[^>]*>/g, '');
        return $.unescape(html);
      },
      parseCommentDisplay(html) {
        // Hide spoilers.
        if (!Conf['Remove Spoilers'] && !Conf['Reveal Spoilers']) {
          let html2;
          while ((html2 = html.replace(/<s>(?:(?!<\/?s>).)*<\/s>/g, '[spoiler]')) !== html) {
            html = html2;
          }
        }
        html = html
          .replace(/^<b\b[^<]*>Rolled [^<]*<\/b>/i, '') // Rolls (/tg/, /qst/)
          .replace(/<span\b[^<]* class="fortune"[^]*$/i, ''); // Fortunes (/s4s/)
        // Remove preceding and following new lines, trailing spaces.
        return this.parseComment(html).trim().replace(/\s+$/gm, '');
      },
      postFromObject(data, boardID) {
        const o = this.parseJSON(data, { boardID, siteID: g.SITE.ID });
        return this.post(o);
      },
      post(o) {
        const { ID, threadID, boardID, file } = o;
        const { subject, email, name, tripcode, capcode, pass, uniqueID, flagCode, flagCodeTroll, flag, dateUTC, dateText, commentHTML } = o.info;
        const { staticPath, gifIcon } = this;
        /* Post Info */
        let capcodeDescription, capcodePlural, capcodeLC;
        if (capcode) {
          capcodeLC = capcode.toLowerCase();
          if (capcode === 'Founder') {
            capcodePlural = 'the Founder';
            capcodeDescription = "4chan's Founder";
          } else if (capcode === 'Verified') {
            capcodePlural = 'Verified Users';
            capcodeDescription = '';
          } else {
            const capcodeLong = $.getOwn({ 'Admin': 'Administrator', 'Mod': 'Moderator' }, capcode) || capcode;
            capcodePlural = `${capcodeLong}s`;
            capcodeDescription = `a 4chan ${capcodeLong}`;
          }
        }
        const url = this.threadURL(boardID, threadID);
        const postLink = `${url}#p${ID}`;
        const quoteLink = this.sameThread(boardID, threadID) ?
          `javascript:quote('${+ID}');`
          :
            `${url}#q${ID}`;
        const postInfo = generatePostInfoHtml(ID, o, subject, capcode, email, name, tripcode, pass, capcodeLC, capcodePlural, staticPath, gifIcon, capcodeDescription, uniqueID, flag, flagCode, flagCodeTroll, dateUTC, dateText, postLink, quoteLink, boardID, threadID);
        /* File Info */
        let protocol, fileURL, shortFilename, fileThumb;
        if (file) {
          protocol = /^https?:(?=\/\/i\.4cdn\.org\/)/;
          fileURL = file.url.replace(protocol, '');
          shortFilename = this.shortFilename(file.name);
          fileThumb = file.isSpoiler ? this.spoilerThumb(boardID) : file.thumbURL.replace(protocol, '');
        }
        const fileBlock = generateFileHtml(file, ID, boardID, fileURL, shortFilename, fileThumb, o, staticPath, gifIcon);
        /* Whole Post */
        const postClass = o.isReply ? 'reply' : 'op';
        const postContent = o.isReply ? [postInfo, fileBlock] : [fileBlock, postInfo];
        postContent.push(h("blockquote", { class: "postMessage", id: `m${ID}` }, commentHTML));
        // I wonder if there's a better way to skip this in the catalog without breaking hovers.
        // Currently, this is just hidden by css.
        if (!o.isReply && o.threadReplies != null) {
          postContent.push(h("span", { class: "summary preview-summary" }, this.summaryText('', o.threadReplies, o.threadImages, true)));
        }
        const wholePost = h(hFragment, null,
          (o.isReply ? h("div", { class: "sideArrows", id: `sa${ID}` }, ">>") : ''),
          h("div", { id: `p${ID}`, class: `post ${postClass}${o.capcodeHighlight ? ' highlightPost' : ''}` }, ...postContent));
        const container = $.el('div', {
          className: `postContainer ${postClass}Container`,
          id: `pc${ID}`
        });
        $.extend(container, wholePost);
        // Fix quotelinks
        for (var quote of $$('.quotelink', container)) {
          var href = quote.getAttribute('href');
          if (href[0] === '#') {
            if (!this.sameThread(boardID, threadID)) {
              quote.href = this.threadURL(boardID, threadID) + href;
            }
          } else {
            var match;
            if ((match = quote.href.match(SWYotsuba.regexp.quotelink)) && (this.sameThread(match[1], match[2]))) {
              quote.href = href.match(/(#[^#]*)?$/)[0] || '#';
            }
          }
        }
        return container;
      },
      summaryText(status, posts, files, hoverPreview = false) {
        let text = '';
        if (status)
          text += `${status} `;
        text += `${posts} post${posts == 1 ? '' : 's'}`;
        if (+files)
          text += ` and ${files} image repl${files > 1 ? 'ies' : 'y'}`;
        return hoverPreview ? text : `${text} ${status === '-' ? 'shown' : 'omitted'}.`;
      },
      summary(boardID, threadID, posts, files) {
        return $.el('a', {
          className: 'summary',
          textContent: this.summaryText('', posts, files),
          href: `/${boardID}/thread/${threadID}`
        });
      },
      thread(thread, data, withReplies) {
        let root;
        if (root = thread.nodes.root) {
          $.rmAll(root);
        } else {
          thread.nodes.root = (root = $.el('div', {
            className: 'thread',
            id: `t${data.no}`
          }));
        }
        if (this.hat) {
          $.add(root, this.hat.cloneNode(false));
        }
        $.add(root, thread.OP.nodes.root);
        if (data.omitted_posts || (!withReplies && data.replies)) {
          const [posts, files] = withReplies ?
            // XXX data.omitted_images is not accurate.
            [data.omitted_posts, data.images - data.last_replies.filter(data => !!data.ext).length]
            :
              [data.replies, data.images];
          const summary = this.summary(thread.board.ID, data.no, posts, files);
          $.add(root, summary);
        }
        return root;
      },
      catalogThread(thread, data, pageCount) {
        let cssText, imgClass, src;
        const { staticPath, gifIcon } = this;
        const { tn_w, tn_h } = data;
        if (data.spoiler && !Conf['Reveal Spoiler Thumbnails']) {
          let spoilerRange;
          src = `${staticPath}spoiler`;
          if (spoilerRange = this.spoilerRange[thread.board]) {
            // Randomize the spoiler image.
            src += (`-${thread.board}`) + Math.floor(1 + (spoilerRange * Math.random()));
          }
          src += '.png';
          imgClass = 'spoiler-file';
          cssText = "--tn-w: 100; --tn-h: 100;";
        } else if (data.filedeleted) {
          src = `${staticPath}filedeleted-res${gifIcon}`;
          imgClass = 'deleted-file';
        } else if (thread.OP.file) {
          src = thread.OP.file.thumbURL;
          const ratio = 250 / Math.max(tn_w, tn_h);
          cssText = `--tn-w: ${tn_w * ratio}; --tn-h: ${tn_h * ratio};`;
        } else {
          src = `${staticPath}nofile.png`;
          imgClass = 'no-file';
        }
        const postCount = data.replies + 1;
        const fileCount = data.images + !!data.ext;
        const container = $.el('div', generateCatalogThreadHtml(thread, src, imgClass, data, postCount, fileCount, pageCount, staticPath, gifIcon));
        $.before(thread.OP.nodes.info, [...container.childNodes]);
        for (var br of $$('br', thread.OP.nodes.comment)) {
          if (br.previousSibling && (br.previousSibling.nodeName === 'BR')) {
            $.addClass(br, 'extra-linebreak');
          }
        }
        const root = $.el('div', {
          className: 'thread catalog-thread',
          id: `t${thread}`
        });
        if (thread.OP.highlights) {
          $.addClass(root, ...thread.OP.highlights);
        }
        if (!thread.OP.file) {
          $.addClass(root, 'noFile');
        }
        root.style.cssText = cssText || '';
        return root;
      },
      catalogReply(thread, data) {
        let excerpt = '';
        if (data.com) {
          excerpt = this.parseCommentDisplay(data.com).replace(/>>\d+/g, '').trim().replace(/\n+/g, ' // ');
        }
        if (data.ext) {
          if (!excerpt) {
            excerpt = `${$.unescape(data.filename)}${data.ext}`;
          }
        }
        if (data.com) {
          if (!excerpt) {
            excerpt = $.unescape(data.com.replace(/<br\b[^<]*>/gi, ' // '));
          }
        }
        if (!excerpt) {
          excerpt = '\xA0';
        }
        if (excerpt.length > 73) {
          excerpt = `${excerpt.slice(0, 70)}...`;
        }
        const link = this.postURL(thread.board.ID, thread.ID, data.no);
        return $.el('div', { className: 'catalog-reply' }, h(hFragment, null,
          h("span", null,
            h("time", { "data-utc": data.time * 1000, "data-abbrev": "1" }, "..."),
            ": "),
          h("a", { class: "catalog-reply-excerpt", href: link }, excerpt),
          h("a", { class: "catalog-reply-preview", href: link }, "...")));
      }
    }
  };

  const rootFor = ({ siteID }) => Conf.siteProperties[siteID]?.root || `http://${siteID}/`;
  const rootOrEmptyFor = ({ siteID }) => Conf.siteProperties[siteID]?.root || '';
  const SWTinyboard = {
      isOPContainerThread: true,
      mayLackJSON: true,
      threadModTimeIgnoresSage: true,
      disabledFeatures: [
          'Resurrect Quotes',
          'Quick Reply Personas',
          'Quick Reply',
          'Cooldown',
          'Report Link',
          'Delete Link',
          'Edit Link',
          'Quote Inlining',
          'Quote Previewing',
          'Quote Backlinks',
          'File Info Formatting',
          'Image Expansion',
          'Image Expansion (Menu)',
          'Comment Expansion',
          'Thread Expansion',
          'Favicon',
          'Quote Threading',
          'Thread Updater',
          'Banner',
          'Flash Features',
          'Reply Pruning'
      ],
      detect() {
          for (var script of $$('script:not([src])', d.head)) {
              var m;
              if (m = script.textContent.match(/\bvar configRoot=(".*?")/)) {
                  var properties = dict();
                  try {
                      var root = JSON.parse(m[1]);
                      if (root[0] === '/') {
                          properties.root = location.origin + root;
                      }
                      else if (/^https?:/.test(root)) {
                          properties.root = root;
                      }
                  }
                  catch (error) { }
                  return properties;
              }
          }
          return false;
      },
      awaitBoard(cb) {
          if ($.id('react-ui')) {
              const s = (this.selectors = Object.create(this.selectors));
              s.boardFor = { index: '.page-container' };
              s.thread = 'div[id^="thread_"]';
              return Main.mounted(cb);
          }
          else {
              return cb();
          }
      },
      urls: {
          post: ({ postID }) => `#${postID}`,
          index: ({ siteID, boardID }) => `${rootFor({ siteID })}${boardID}/`,
          catalog: ({ siteID, boardID }) => `${rootFor({ siteID })}${boardID}/catalog.html`,
          file: ({ siteID, boardID }, filename) => `${rootFor({ siteID })}${boardID}/${filename}`,
          archivedThreadJSON: (thread) => SWTinyboard.urls.threadJSON(thread, true),
          thumb: (board, filename) => SWTinyboard.urls.file(board, filename),
          thread: ({ siteID, boardID, threadID }, isArchived) => `${rootFor({ siteID })}${boardID}/${isArchived ? 'archive/' : ''}res/${threadID}.html`,
          threadJSON: ({ siteID, boardID, threadID }, isArchived) => {
              const root = rootOrEmptyFor({ siteID });
              return root && `${root}${boardID}/${isArchived ? 'archive/' : ''}res/${threadID}.json`;
          },
          threadsListJSON({ siteID, boardID }) {
              const root = rootOrEmptyFor({ siteID });
              return root && `${root}${boardID}/threads.json`;
          },
          archiveListJSON({ siteID, boardID }) {
              const root = rootOrEmptyFor({ siteID });
              return root && `${root}${boardID}/archive/archive.json`;
          },
          catalogJSON({ siteID, boardID }) {
              const root = rootOrEmptyFor({ siteID });
              return root && `${root}${boardID}/catalog.json`;
          },
      },
      selectors: {
          board: 'form[name="postcontrols"]',
          thread: 'input[name="board"] ~ div[id^="thread_"]',
          threadDivider: 'div[id^="thread_"] > hr:last-child',
          summary: '.omitted',
          postContainer: 'div[id^="reply_"]:not(.hidden)', // postContainer is thread for OP
          opBottom: '.op',
          replyOriginal: 'div[id^="reply_"]:not(.hidden)',
          infoRoot: '.intro',
          info: {
              subject: '.subject',
              name: '.name',
              email: '.email',
              tripcode: '.trip',
              uniqueID: '.poster_id',
              capcode: '.capcode',
              flag: '.flag',
              date: 'time',
              nameBlock: 'label',
              quote: 'a[href*="#q"]',
              reply: 'a[href*="/res/"]:not([href*="#"])'
          },
          icons: {
              isSticky: '.fa-thumb-tack',
              isClosed: '.fa-lock'
          },
          file: {
              text: '.fileinfo',
              link: '.fileinfo > a',
              thumb: 'a > .post-image'
          },
          thumbLink: '.file > a',
          multifile: '.files > .file',
          highlightable: {
              op: ' > .op',
              reply: '.reply',
              catalog: ' > .thread'
          },
          comment: '.body',
          spoiler: '.spoiler',
          quotelink: 'a[onclick*="highlightReply("]',
          catalog: {
              board: '#Grid',
              thread: '.mix',
              thumb: '.thread-image'
          },
          boardList: '.boardlist',
          boardListBottom: '.boardlist.bottom',
          styleSheet: '#stylesheet',
          psa: '.blotter',
          nav: {
              prev: '.pages > form > [value=Previous]',
              next: '.pages > form > [value=Next]'
          }
      },
      classes: {
          highlight: 'highlighted'
      },
      xpath: {
          thread: 'div[starts-with(@id,"thread_")]',
          postContainer: 'div[starts-with(@id,"reply_") or starts-with(@id,"thread_")]',
          replyContainer: 'div[starts-with(@id,"reply_")]'
      },
      regexp: {
          quotelink: new RegExp(`\
/\
([^/]+)\
/res/\
(\\d+)\
(?:\\.\\w+)?#\
(\\d+)\
$\
`),
          quotelinkHTML: /<a [^>]*\bhref="[^"]*\/([^\/]+)\/res\/(\d+)(?:\.\w+)?#(\d+)"/g
      },
      Build: {
          parseJSON(data, board) {
              const o = SWYotsuba.Build.parseJSON(data, board);
              if (data.ext === 'deleted') {
                  delete o.file;
                  $.extend(o, {
                      files: [],
                      fileDeleted: true,
                      filesDeleted: [0]
                  });
              }
              if (data.extra_files) {
                  let file;
                  for (let i = 0; i < data.extra_files.length; i++) {
                      var extra_file = data.extra_files[i];
                      if (extra_file.ext === 'deleted') {
                          o.filesDeleted.push(i);
                      }
                      else {
                          file = SWYotsuba.Build.parseJSONFile(data, board);
                          o.files.push(file);
                      }
                  }
                  if (o.files.length) {
                      o.file = o.files[0];
                  }
              }
              return o;
          },
          parseComment(html) {
              html = html
                  .replace(/<br\b[^<]*>/gi, '\n')
                  .replace(/<[^>]*>/g, '');
              return $.unescape(html);
          }
      },
      bgColoredEl() {
          return $.el('div', { className: 'post reply' });
      },
      isFileURL(url) {
          return /\/src\/[^\/]+/.test(url.pathname);
      },
      preParsingFixes(board) {
          // fixes effects of unclosed link in announcement
          let broken;
          if (broken = $('a > input[name="board"]', board)) {
              return $.before(broken.parentNode, broken);
          }
      },
      parseNodes(post, nodes) {
          // Add vichan's span.poster_id around the ID if not already present.
          let m;
          if (nodes.uniqueID) {
              return;
          }
          let text = '';
          let node = nodes.nameBlock.nextSibling;
          while (node && (node.nodeType === 3)) {
              text += node.textContent;
              node = node.nextSibling;
          }
          if (m = text.match(/(\s*ID:\s*)(\S+)/)) {
              let uniqueID;
              nodes.info.normalize();
              let { nextSibling } = nodes.nameBlock;
              nextSibling = nextSibling.splitText(m[1].length);
              nextSibling.splitText(m[2].length);
              nodes.uniqueID = (uniqueID = $.el('span', { className: 'poster_id' }));
              $.replace(nextSibling, uniqueID);
              return $.add(uniqueID, nextSibling);
          }
      },
      parseDate(node) {
          let date = Date.parse(node.getAttribute('datetime')?.trim());
          if (!isNaN(date)) {
              return new Date(date);
          }
          date = Date.parse(node.textContent.trim() + ' UTC'); // e.g. onesixtwo.club
          if (!isNaN(date)) {
              return new Date(date);
          }
          return undefined;
      },
      parseFile(post, file) {
          let info, infoNode;
          const { text, link, thumb } = file;
          if ($.x(`ancestor::${this.xpath.postContainer}[1]`, text) !== post.nodes.root) {
              return false;
          } // file belongs to a reply
          if (!(infoNode = link.nextSibling?.textContent.includes('(') ? link.nextSibling : link.nextElementSibling)) {
              return false;
          }
          if (!(info = infoNode.textContent.match(/\((.*,\s*)?([\d.]+ ?[KMG]?B).*\)/))) {
              return false;
          }
          const nameNode = $('.postfilename', text);
          $.extend(file, {
              name: nameNode ? (nameNode.title || nameNode.textContent) : link.pathname.match(/[^/]*$/)[0],
              size: info[2],
              dimensions: info[0].match(/\d+x\d+/)?.[0]
          });
          if (thumb) {
              $.extend(file, {
                  thumbURL: /\/static\//.test(thumb.src) && $.isImage(link.href) ? link.href : thumb.src,
                  isSpoiler: /^Spoiler/i.test(info[1] || '') || (link.textContent === 'Spoiler Image')
              });
          }
          return true;
      },
      isThumbExpanded(file) {
          // Detect old Tinyboard image expansion that changes src attribute on thumbnail.
          return $.hasClass(file.thumb.parentNode, 'expanded') || (file.thumb.parentNode.dataset.expanded === 'true');
      },
      isLinkified(link) {
          return /\bnofollow\b/.test(link.rel);
      },
      catalogPin(threadRoot) {
          return threadRoot.dataset.sticky = 'true';
      }
  };

  const SW = { tinyboard: SWTinyboard, yotsuba: SWYotsuba };

  var FileInfo = {
    init() {
      if (!['index', 'thread', 'archive'].includes(g.VIEW) || !Conf['File Info Formatting']) {
        return;
      }
      Callbacks.Post.push({
        name: 'File Info Formatting',
        cb: this.node
      });
    },
    node() {
      let a;
      if (!this.file) {
        return;
      }
      if (this.isClone) {
        for (a of $$('.file-info .download-button', this.file.text)) {
          $.on(a, 'click', ImageCommon.download);
        }
        for (a of $$('.file-info .quick-filter-md5', this.file.text)) {
          $.on(a, 'click', Filter.quickFilterMD5);
        }
        return;
      }
      const oldInfo = $.el('span', { className: 'fileText-original' });
      $.prepend(this.file.link.parentNode, oldInfo);
      $.add(oldInfo, [this.file.link.previousSibling, this.file.link, this.file.link.nextSibling]);
      const info = $.el('span', { className: 'file-info' });
      FileInfo.format(Conf.fileInfo, this, info);
      $.prepend(this.file.text, info);
    },
    format(formatString, post, outputNode) {
      const tokens = FileInfo.getTokens(formatString);
      const output = tokens.map(t => typeof t === 'function' ? t.call(post) : t);
      $.extend(outputNode, { innerHTML: E.cat(output) });
      FileInfo.bindFileButtons(outputNode);
    },
    getTokens(formatString) {
      if (FileInfo._tokensKey === formatString)
        return FileInfo._tokens;
      const tokens = [];
      const FORMAT_REGEX = /%(.)|[^%]+/g;
      formatString.replace(FORMAT_REGEX, (s, c) => {
        tokens.push($.hasOwn(FileInfo.formatters, c) ? FileInfo.formatters[c] : { innerHTML: E(s) });
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
      T() { return h("a", { href: this.file.url, target: "_blank" }, FileInfo.formatters.t.call(this)); },
      l() { return h("a", { href: this.file.url, target: "_blank" }, FileInfo.formatters.n.call(this)); },
      L() { return h("a", { href: this.file.url, target: "_blank" }, FileInfo.formatters.N.call(this)); },
      n() {
        const fullname = this.file.name;
        const shortname = SW.yotsuba.Build.shortFilename(this.file.name, this.isReply);
        if (fullname === shortname) {
          return { innerHTML: E(fullname), [isEscaped]: true };
        } else {
          return h("span", { class: "fnswitch" },
            h("span", { class: "fntrunc" }, shortname),
            h("span", { class: "fnfull" }, fullname));
        }
      },
      N() { return { innerHTML: E(this.file.name), [isEscaped]: true }; },
      d() {
        return h("a", { href: this.file.url, download: this.file.name, class: "download-button" }, Icon.raw('download'));
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

  var Settings = {
    dialog: undefined,
    init() {
      // 4chan X settings link
      const link = $.el('a', {
        className: 'settings-link',
        title: `${meta.name} Settings`,
        href: 'javascript:;'
      });
      Icon.set(link, 'wrench', 'Settings');
      $.on(link, 'click', Settings.open);
      Header.addShortcut('settings', link, 820);
      const add = this.addSection;
      add('Main', this.main);
      add('Filter', this.filter);
      add('Sauce', this.sauce);
      add('Advanced', this.advanced);
      add('Keybinds', this.keybinds);
      $.on(d, 'AddSettingsSection', Settings.addSection);
      $.on(d, 'OpenSettings', e => Settings.open(e.detail));
      if ((g.SITE.software === 'yotsuba') && Conf['Disable Native Extension']) {
        if ($.hasStorage) {
          // Run in page context to handle case where 4chan X has localStorage access but not the page.
          // (e.g. Pale Moon 26.2.2, GM 3.8, cookies disabled for 4chan only)
          $.global('disableNativeExtension');
        } else {
          $.global('disableNativeExtensionNoStorage');
        }
      }
    },
    open(openSection) {
      let dialog, sectionToOpen;
      if (Settings.dialog) {
        return;
      }
      $.event('CloseMenu');
      Settings.dialog = (dialog = $.el('div', { id: 'overlay' }, settingsHtml));
      $.on($('.export', dialog), 'click', Settings.export);
      $.on($('.import', dialog), 'click', Settings.import);
      $.on($('.reset', dialog), 'click', Settings.reset);
      $.on($('input', dialog), 'change', Settings.onImport);
      const links = [];
      for (var section of Settings.sections) {
        var link = $.el('a', {
          className: `tab-${section.hyphenatedTitle}`,
          textContent: section.title,
          href: 'javascript:;'
        });
        $.on(link, 'click', Settings.openSection.bind(section));
        links.push(link, $.tn(' | '));
        if (section.title === openSection) {
          sectionToOpen = link;
        }
      }
      links.pop();
      $.add($('.sections-list', dialog), links);
      if (openSection !== 'none') {
        (sectionToOpen ? sectionToOpen : links[0]).click();
      }
      Icon.set($('.close', dialog), 'xmark');
      $.on($('.close', dialog), 'click', Settings.close);
      $.on(window, 'beforeunload', Settings.close);
      $.on(dialog, 'click', () => {
        // Do not close when the mouse ends up outside the modal when selecting text in an input.
        if (d.activeElement?.tagName === 'INPUT' || d.activeElement?.tagName === 'TEXTAREA')
          return;
        Settings.close();
      });
      $.on(dialog.firstElementChild, 'click', e => e.stopPropagation());
      $.add(d.body, dialog);
      links[0].focus();
      $.event('OpenSettings', null, dialog);
    },
    close() {
      if (!Settings.dialog) {
        return;
      }
      // Unfocus current field to trigger change event.
      d.activeElement?.blur();
      $.rm(Settings.dialog);
      delete Settings.dialog;
    },
    sections: [],
    addSection(title, open) {
      if (typeof title !== 'string') {
        ({ title, open } = title.detail);
      }
      const hyphenatedTitle = title.toLowerCase().replace(/\s+/g, '-');
      Settings.sections.push({ title, hyphenatedTitle, open });
    },
    openSection() {
      let selected;
      if (selected = $('.tab-selected', Settings.dialog)) {
        $.rmClass(selected, 'tab-selected');
      }
      $.addClass($(`.tab-${this.hyphenatedTitle}`, Settings.dialog), 'tab-selected');
      const section = $('section', Settings.dialog);
      $.rmAll(section);
      section.className = `section-${this.hyphenatedTitle}`;
      this.open(section, g);
      section.scrollTop = 0;
      $.event('OpenSettings', null, section);
    },
    warnings: {
      localStorage(cb) {
        if ($.cantSync) {
          const why = $.cantSet ? 'save your settings' : 'synchronize settings between tabs';
          cb($.el('li', {
            textContent: `${meta.name} needs local storage to ${why}.
Enable it on boards.${location.hostname.split('.')[1]}.org in your browser's privacy settings (may be listed as part of "local data" or "cookies").`
          }));
        }
      },
      ads(cb) {
        $.onExists(doc, '.adg-rects > .desktop', ad => $.onExists(ad, 'iframe', function () {
          const url = Redirect.to('thread', { boardID: 'qa', threadID: 362590 });
          cb($.el('li', h(hFragment, null,
            "To protect yourself from ",
            h("a", { href: url, target: "_blank" }, "malicious ads"),
            ", you should ",
            h("a", { href: "https://github.com/gorhill/uBlock#ublock-origin", target: "_blank" }, "block ads"),
            " on 4chan.")));
        }));
      }
    },
    main(section) {
      let key;
      const warnings = $.el('fieldset', { hidden: true }, { innerHTML: '<legend>Warnings</legend><ul></ul>' });
      const addWarning = function (item) {
        $.add($('ul', warnings), item);
        warnings.hidden = false;
      };
      for (key in Settings.warnings) {
        var warning = Settings.warnings[key];
        warning(addWarning);
      }
      $.add(section, warnings);
      const items = dict();
      const inputs = dict();
      const addCheckboxes = function (root, obj) {
        const containers = [root];
        const result = [];
        for (key in obj) {
          var arr = obj[key];
          if (arr instanceof Array) {
            var description = arr[1];
            var div = $.el('div', { innerHTML: `<label><input type="checkbox" name="${key}">${key}</label><span class="description">: ${description}</span>` });
            div.dataset.name = key;
            var input = $('input', div);
            $.on(input, 'change', $.cb.checked);
            $.on(input, 'change', function () { this.parentNode.parentNode.dataset.checked = this.checked; });
            items[key] = Conf[key];
            inputs[key] = input;
            var level = arr[2] || 0;
            if (containers.length <= level) {
              var container = $.el('div', { className: 'suboption-list' });
              $.add(containers[containers.length - 1].lastElementChild, container);
              containers[level] = container;
            } else if (containers.length > (level + 1)) {
              containers.splice(level + 1, containers.length - (level + 1));
            }
            result.push($.add(containers[level], div));
          }
        }
        return result;
      };
      for (var keyFS in Config.main) {
        var obj = Config.main[keyFS];
        var fs = $.el('fieldset', { innerHTML: `<legend>${keyFS}</legend>` });
        addCheckboxes(fs, obj);
        if (keyFS === 'Posting and Captchas') {
          $.add(fs, $.el('p', { innerHTML: 'For more info on captcha options and issues, see the <a href="' + meta.captchaFAQ + '" target="_blank">captcha FAQ</a>.' }));
        }
        $.add(section, fs);
      }
      addCheckboxes($('div[data-name="JSON Index"] > .suboption-list', section), Config.Index);
      $.get(items, function (items) {
        for (key in items) {
          var val = items[key];
          inputs[key].checked = val;
          inputs[key].parentNode.parentNode.dataset.checked = val;
        }
      });
      const div = $.el('div', { innerHTML: '<button></button><span class="description">: Clear manually-hidden threads and posts on all boards. Reload the page to apply.' });
      const button = $('button', div);
      $.get({ hiddenThreads: dict(), hiddenPosts: dict() }, function ({ hiddenThreads, hiddenPosts }) {
        let board, ID, site, thread;
        let hiddenNum = 0;
        for (ID in hiddenThreads) {
          site = hiddenThreads[ID];
          if (ID !== 'boards') {
            for (ID in site.boards) {
              board = site.boards[ID];
              hiddenNum += Object.keys(board).length;
            }
          }
        }
        for (ID in hiddenThreads.boards) {
          board = hiddenThreads.boards[ID];
          hiddenNum += Object.keys(board).length;
        }
        for (ID in hiddenPosts) {
          site = hiddenPosts[ID];
          if (ID !== 'boards') {
            for (ID in site.boards) {
              board = site.boards[ID];
              for (ID in board) {
                thread = board[ID];
                hiddenNum += Object.keys(thread).length;
              }
            }
          }
        }
        for (ID in hiddenPosts.boards) {
          board = hiddenPosts.boards[ID];
          for (ID in board) {
            thread = board[ID];
            hiddenNum += Object.keys(thread).length;
          }
        }
        button.textContent = `Hidden: ${hiddenNum}`;
      });
      $.on(button, 'click', function () {
        this.textContent = 'Hidden: 0';
        $.get('hiddenThreads', dict(), function ({ hiddenThreads }) {
          if ($.hasStorage && (g.SITE.software === 'yotsuba')) {
            let boardID;
            for (boardID in hiddenThreads['4chan.org']?.boards) {
              localStorage.removeItem(`4chan-hide-t-${boardID}`);
            }
            for (boardID in hiddenThreads.boards) {
              localStorage.removeItem(`4chan-hide-t-${boardID}`);
            }
          }
          $.delete(['hiddenThreads', 'hiddenPosts']);
        });
      });
      $('input[name="Stubs"]', section).closest('fieldset').insertAdjacentElement('beforeend', div);
    },
    isExportModalOpen: false,
    async export() {
      let exportHistory = Conf['Export History'];
      let cancelled = false;
      if (Conf['Ask to Export History']) {
        if (Settings.isExportModalOpen)
          return;
        const dialog = UI.dialog('export-dialog', { innerHTML: ExportDialog });
        const form = $('form', dialog);
        const { history, ask } = form.elements;
        history.checked = Conf['Export History'];
        $.add(d.body, dialog);
        const exportBtnRect = $('.export', Settings.dialog).getBoundingClientRect();
        dialog.style.top = `${exportBtnRect.y + exportBtnRect.height}px`;
        dialog.style.left = `${exportBtnRect.x}px`;
        Settings.isExportModalOpen = true;
        await new Promise(resolve => {
          const close = () => {
            dialog.remove();
            resolve();
            Settings.isExportModalOpen = false;
          };
          $.on(form, 'submit', (e) => {
            e.preventDefault();
            exportHistory = history.checked;
            $.set('Export History', exportHistory);
            $.set('Ask to Export History', ask.checked);
            close();
          });
          $.on($('#cancel-export', dialog), 'click', () => {
            cancelled = true;
            close();
          });
        });
        if (cancelled)
          return;
      }
      // Make sure to export the most recent data, but don't overwrite existing `Conf` object.
      const Conf2 = dict();
      $.extend(Conf2, Conf);
      if (!exportHistory) {
        delete Conf2.hiddenThreads;
        delete Conf2.hiddenPosts;
        delete Conf2.hiddenPosterIds;
        delete Conf2.lastReadPosts;
        delete Conf2.yourPosts;
        delete Conf2.watchedThreads;
        delete Conf2.cooldowns;
        delete Conf2['Index Sort'];
      }
      $.get(Conf2, function (Conf2) {
        // Don't export cached JSON data.
        delete Conf2.boardConfig;
        Settings.downloadExport({ version: g.VERSION, date: Date.now(), Conf: Conf2 });
      });
    },
    downloadExport(data) {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = $.el('a', {
        download: `${meta.name} v${g.VERSION}-${data.date}.json`,
        href: url
      });
      const p = $('.imp-exp-result', Settings.dialog);
      $.rmAll(p);
      $.add(p, a);
      a.click();
    },
    import() {
      $('input[type=file]', this.parentNode).click();
    },
    onImport() {
      let file;
      if (!(file = this.files[0])) {
        return;
      }
      this.value = null;
      const output = $('.imp-exp-result');
      if (!confirm('Your current settings will be entirely overwritten, are you sure?')) {
        output.textContent = 'Import aborted.';
        return;
      }
      const reader = new FileReader();
      reader.onload = function (e) {
        try {
          Settings.loadSettings(dict.json(e.target.result), function (err) {
            if (err) {
              output.textContent = 'Import failed due to an error.';
            } else if (confirm('Import successful. Reload now?')) {
              window.location.reload();
            }
          });
        } catch (error) {
          const err = error;
          output.textContent = 'Import failed due to an error.';
          c.error(err.stack);
        }
      };
      reader.readAsText(file);
    },
    upgrade(data, version) {
      let corrupted, key, val;
      const changes = dict();
      const set = (key, value) => data[key] = (changes[key] = value);
      // XXX https://github.com/greasemonkey/greasemonkey/issues/2600
      if (corrupted = (version[0] === '"')) {
        try {
          version = JSON.parse(version);
        } catch (error) { }
      }
      const compareString = version.replace(/^XT /i, '').replace(/\d+/g, x => x.padStart(5, '0'));
      if (corrupted) {
        for (key in data) {
          val = data[key];
          if (typeof val === 'string') {
            try {
              var val2 = JSON.parse(val);
              set(key, val2);
            } catch (error1) { }
          }
        }
      }
      if (compareString < '00001.00014.00016.00001') {
        if (data.archiveLists != null) {
          set('archiveLists', data.archiveLists.replace('https://mayhemydg.github.io/archives.json/archives.json', 'https://nstepien.github.io/archives.json/archives.json'));
        }
      }
      if (compareString < '00001.00014.00016.00007') {
        if (data.sauces != null) {
          set('sauces', data.sauces.replace(/https:\/\/www\.deviantart\.com\/gallery\/#\/d%\$1%\$2;regexp:\/\^\\w\+_by_\\w\+\[_-\]d\(\[\\da-z\]\{6\}\)\\b\|\^d\(\[\\da-z\]\{6\}\)-\[\\da-z\]\{8\}-\//g, 'javascript:void(open("https://www.deviantart.com/"+%$1.replace(/_/g,"-")+"/art/"+parseInt(%$2,36)));regexp:/^\\w+_by_(\\w+)[_-]d([\\da-z]{6})\\b/').replace(/\/\/imgops\.com\/%URL/g, '//imgops.com/start?url=%URL'));
        }
      }
      if (compareString < '00001.00014.00017.00002') {
        if (data.jsWhitelist != null) {
          set('jsWhitelist', data.jsWhitelist + '\n\nhttps://hcaptcha.com\nhttps://*.hcaptcha.com');
        }
      }
      if (compareString < '00001.00014.00020.00004') {
        if (data.archiveLists != null) {
          set('archiveLists', data.archiveLists.replace('https://nstepien.github.io/archives.json/archives.json', 'https://4chenz.github.io/archives.json/archives.json'));
        }
      }
      if (compareString < '00001.00014.00022.00003') {
        if (data.sauces) {
          set('sauces', data.sauces.replace(/^#?\s*https:\/\/www\.google\.com\/searchbyimage\?image_url=%(IMG|T?URL)&safe=off(?=$|;)/mg, 'https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%$1&safe=off'));
          if (compareString === '00001.00014.00022.00002' && !/\bsbisrc=/.test(data.sauces)) {
            set('sauces', data.sauces.replace(/^#?\s*https:\/\/lens\.google\.com\/uploadbyurl\?url=%(IMG|T?URL)(?=$|;)/m, 'https://www.google.com/searchbyimage?sbisrc=4chanx&image_url=%$1&safe=off'));
          }
        }
      }
      if (compareString < '00002.00003.00001.00000') {
        if (data.boardnav) {
          set('boardnav', data.boardnav.replace('[external-text:"FAQ","4chan XT"]', `[external-text:"FAQ","${meta.faq}"]`));
        }
      }
      if (compareString < '00002.00003.00006.00000') {
        set('RelativeTime', data['Relative Post Dates'] ? (data['Relative Date Title'] ? 'Hover' : 'Show') : 'No');
      }
      if (compareString === '00002.00009.00000.00000') {
        set('XEmbedder', data['Embed Tweets inline with fxTwitter'] ? 'fxt' : 'tf');
        set('fxtMaxReplies', data['Resolve Tweet Replies'] ? (data['Resolve all Tweet Replies'] ? 100 : 1) : 0);
        set('fxtLang', data['Translate non-English Tweets to English'] ? 'en' : '');
      }
      return changes;
    },
    loadSettings(data, cb) {
      if (data.version !== g.VERSION) {
        Settings.upgrade(data.Conf, data.version);
      }
      $.clear(function (err) {
        if (err) {
          return cb(err);
        }
        $.set(data.Conf, cb);
      });
    },
    reset() {
      if (confirm('Your current settings will be entirely wiped, are you sure?')) {
        $.clear(function (err) {
          if (err) {
            $('.imp-exp-result').textContent = 'Import failed due to an error.';
          } else if (confirm('Reset successful. Reload now?')) {
            window.location.reload();
          }
        });
      }
    },
    filter(section) {
      $.extend(section, { innerHTML: FilterSelectPage });
      const select = $('select', section);
      $.on(select, 'change', Settings.selectFilter);
      Settings.selectFilter.call(select);
    },
    selectFilter() {
      let name;
      const div = this.nextElementSibling;
      if ((name = this.value) !== 'guide') {
        if (!$.hasOwn(Config.filter, name)) {
          return;
        }
        $.rmAll(div);
        const ta = $.el('textarea', {
          name,
          className: 'field',
          spellcheck: false
        });
        $.on(ta, 'change', $.cb.value);
        $.get(name, Conf[name], function (item) {
          ta.value = item[name];
          $.add(div, ta);
        });
        return;
      }
      const filterTypes = Object.keys(Config.filter)
        .filter(x => x !== 'general')
        .join(',\u200B'); // \u200B is zero width space, to control where line breaks happen on a narrow screen
      $.extend(div, { innerHTML: FilterGuidePage });
      $('#filterTypes', div).textContent = `type:\u200B${filterTypes};`;
      $('.warning', div).hidden = Conf.Filter;
    },
    sauce(section) {
      $.extend(section, { innerHTML: SaucePage });
      $('.warning', section).hidden = Conf.Sauce;
      const ta = $('textarea', section);
      $.get('sauces', Conf.sauces, function (item) {
        ta.value = item.sauces;
        ta.hidden = false;
      }); // XXX prevent Firefox from adding initialization to undo queue
      $.on(ta, 'change', $.cb.value);
    },
    advanced(section) {
      let input, name;
      $.extend(section, { innerHTML: AdvancedPage });
      for (var warning of $$('.warning', section)) {
        warning.hidden = Conf[warning.dataset.feature];
      }
      const inputs = dict();
      for (input of $$('[name]', section)) {
        inputs[input.name] = input;
      }
      $.on(inputs.archiveLists, 'change', function () {
        $.set('lastarchivecheck', 0);
        Conf.lastarchivecheck = 0;
        $.id('lastarchivecheck').textContent = 'never';
      });
      const items = dict();
      for (name in inputs) {
        input = inputs[name];
        if (!['Interval', 'Custom CSS', 'timeLocale'].includes(name)) {
          items[name] = Conf[name];
          var event = ((input.nodeName === 'SELECT') ||
            ['checkbox', 'radio'].includes(input.type) ||
            ((input.nodeName === 'TEXTAREA') && !(name in Settings))) ? 'change' : 'input';
          $.on(input, event, $.cb[input.type === 'checkbox' ? 'checked' : 'value']);
          if (name in Settings) {
            $.on(input, event, Settings[name]);
          }
        }
      }
      $.get(items, function (items) {
        for (var key in items) {
          var val = items[key];
          input = inputs[key];
          input[input.type === 'checkbox' ? 'checked' : 'value'] = val;
          input.hidden = false; // XXX prevent Firefox from adding initialization to undo queue
          if (key in Settings) {
            Settings[key].call(input);
          }
        }
      });
      const listImageHost = $.id('list-fourchanImageHost');
      for (var textContent of ImageHost.suggestions) {
        $.add(listImageHost, $.el('option', { textContent }));
      }
      const interval = inputs.Interval;
      const customCSS = inputs['Custom CSS'];
      const applyCSS = $('#apply-css', section);
      const timeLocale = inputs.timeLocale;
      interval.value = Conf.Interval;
      customCSS.checked = Conf['Custom CSS'];
      inputs.usercss.disabled = !Conf['Custom CSS'];
      applyCSS.disabled = !Conf['Custom CSS'];
      timeLocale.value = Conf.timeLocale;
      $.on(interval, 'change', ThreadUpdater.cb.interval);
      $.on(customCSS, 'change', Settings.togglecss);
      $.on(applyCSS, 'click', () => CustomCSS.update());
      $.on(timeLocale, 'change', Settings.setTimeLocale);
      const itemsArchive = dict();
      for (name of ['archives', 'selectedArchives', 'lastarchivecheck']) {
        itemsArchive[name] = Conf[name];
      }
      $.get(itemsArchive, function (itemsArchive) {
        $.extend(Conf, itemsArchive);
        Redirect.selectArchives();
        Settings.addArchiveTable(section);
      });
      const boardSelect = $('#archive-board-select', section);
      const table = $('#archive-table', section);
      const updateArchives = $('#update-archives', section);
      $.on(boardSelect, 'change', function () {
        $('tbody > :not([hidden])', table).hidden = true;
        $(`tbody > .${this.value}`, table).hidden = false;
      });
      $.on(updateArchives, 'click', () => Redirect.update(() => Settings.addArchiveTable(section)));
      $.on(inputs.beepVolume, 'change', () => { ThreadUpdater.playBeep(false); });
      $.on(inputs.beepSource, 'change', () => { ThreadUpdater.playBeep(false); });
    },
    addArchiveTable(section) {
      let boardID, o;
      $('#lastarchivecheck', section).textContent = Conf.lastarchivecheck === 0 ?
        'never'
        :
          new Date(Conf.lastarchivecheck).toLocaleString();
      const boardSelect = $('#archive-board-select', section);
      const table = $('#archive-table', section);
      const tbody = $('tbody', section);
      $.rmAll(boardSelect);
      $.rmAll(tbody);
      const archBoards = dict();
      for (var { uid, name, boards, files, software } of Conf.archives) {
        if (!['fuuka', 'foolfuuka'].includes(software)) {
          continue;
        }
        for (boardID of boards) {
          o = archBoards[boardID] || (archBoards[boardID] = {
            thread: [],
            threadJSON: [],
            post: [],
            file: []
          });
          if (!o.threadJSON)
            o.threadJSON = [];
          var archive = [uid ?? name, name];
          o.thread.push(archive);
          if (software === 'foolfuuka') {
            o.post.push(archive);
            o.threadJSON.push(archive);
          }
          if (files.includes(boardID)) {
            o.file.push(archive);
          }
        }
      }
      const rows = [];
      const boardOptions = [];
      for (boardID of Object.keys(archBoards).sort()) { // Alphabetical order
        var row = $.el('tr', { className: `board-${boardID}` });
        row.hidden = boardID !== g.BOARD.ID;
        boardOptions.push($.el('option', {
          textContent: `/${boardID}/`,
          value: `board-${boardID}`,
          selected: boardID === g.BOARD.ID
        }));
        o = archBoards[boardID];
        for (var item of ['thread', 'threadJSON', 'post', 'file']) {
          $.add(row, Settings.addArchiveCell(boardID, o, item));
        }
        rows.push(row);
      }
      if (rows.length === 0) {
        boardSelect.hidden = (table.hidden = true);
        return;
      }
      boardSelect.hidden = (table.hidden = false);
      if (!(g.BOARD.ID in archBoards)) {
        rows[0].hidden = false;
      }
      $.add(boardSelect, boardOptions);
      $.add(tbody, rows);
      for (boardID in Conf.selectedArchives) {
        var data = Conf.selectedArchives[boardID];
        for (var type in data) {
          var select;
          var id = data[type];
          if (select = $(`select[data-boardid='${boardID}'][data-type='${type}']`, tbody)) {
            select.value = JSON.stringify(id);
            if (!select.value) {
              select.value = select.firstChild.value;
            }
          }
        }
      }
    },
    addArchiveCell(boardID, data, type) {
      const { length } = data[type];
      const td = $.el('td', { className: 'archive-cell' });
      if (!length) {
        td.textContent = '--';
        return td;
      }
      const options = [];
      let i = 0;
      while (i < length) {
        var archive = data[type][i++];
        options.push($.el('option', {
          value: JSON.stringify(archive[0]),
          textContent: archive[1]
        }));
      }
      $.extend(td, { innerHTML: '<select></select>' });
      const select = td.firstElementChild;
      if (!(select.disabled = length === 1)) {
        // XXX GM can't into datasets
        select.setAttribute('data-boardid', boardID);
        select.setAttribute('data-type', type);
        $.on(select, 'change', Settings.saveSelectedArchive);
      }
      $.add(select, options);
      return td;
    },
    saveSelectedArchive() {
      $.get('selectedArchives', Conf.selectedArchives, ({ selectedArchives }) => {
        (selectedArchives[this.dataset.boardid] || (selectedArchives[this.dataset.boardid] = dict()))[this.dataset.type] = JSON.parse(this.value);
        $.set('selectedArchives', selectedArchives);
        Conf.selectedArchives = selectedArchives;
        Redirect.selectArchives();
      });
    },
    boardnav() {
      Header.generateBoardList(this.value);
    },
    time() {
      this.nextElementSibling.textContent = Time.format(new Date(), this.value);
    },
    timeLocale() {
      Settings.time.call($('[name=time]', Settings.dialog));
    },
    backlink() {
      this.nextElementSibling.textContent = this.value.replace(/%(?:id|%)/g, x => ({ '%id': '123456789', '%%': '%' })[x]);
    },
    fileInfo() {
      const data = {
        isReply: true,
        file: {
          url: `//${ImageHost.host()}/g/1334437723720.jpg`,
          name: 'd9bb2efc98dd0df141a94399ff5880b7.jpg',
          size: '276 KB',
          sizeInBytes: 276 * 1024,
          dimensions: '1280x720',
          isImage: true,
          isVideo: false,
          isSpoiler: true,
          tag: 'Loop'
        }
      };
      FileInfo.format(this.value, data, this.nextElementSibling);
    },
    favicon() {
      Favicon.switch();
      if ((g.VIEW === 'thread') && Conf['Unread Favicon']) {
        Unread.update();
      }
      const img = this.nextElementSibling.children;
      const f = Favicon;
      const iterable = [f.SFW, f.unreadSFW, f.unreadSFWY, f.NSFW, f.unreadNSFW, f.unreadNSFWY, f.dead, f.unreadDead, f.unreadDeadY];
      for (let i = 0; i < iterable.length; i++) {
        var icon = iterable[i];
        if (!img[i]) {
          $.add(this.nextElementSibling, $.el('img'));
        }
        img[i].src = icon;
      }
    },
    togglecss() {
      if (($('textarea[name=usercss]', $.x('ancestor::fieldset[1]', this)).disabled = ($.id('apply-css').disabled = !this.checked))) {
        CustomCSS.rmStyle();
      } else {
        CustomCSS.addStyle();
      }
      $.cb.checked.call(this);
    },
    setTimeLocale(e) {
      const input = e.target;
      try {
        if (input.value !== '')
          new Intl.DateTimeFormat(input.value);
        input.setCustomValidity('');
        Time.formatterCache.clear();
        $.cb.value.call(input);
        Settings.timeLocale.call(input);
      } catch (e) {
        input.setCustomValidity('Locale not recognized');
        input.reportValidity();
      }
    },
    keyBindInputs: dict(),
    keybinds(section) {
      let key;
      $.extend(section, { innerHTML: KeybindsPage });
      $('.warning', section).hidden = Conf.Keybinds;
      const tbody = $('tbody', section);
      const items = dict();
      const inputs = Settings.keyBindInputs;
      for (key in Config.hotkeys) {
        var arr = Config.hotkeys[key];
        var tr = $.el('tr', { innerHTML: `<td>${arr[1]}</td><td><input class="field"></td>` });
        var input = $('input', tr);
        input.name = key;
        input.spellcheck = false;
        items[key] = Conf[key];
        inputs[key] = input;
        $.on(input, 'keydown', Settings.keybind);
        $.add(tbody, tr);
      }
      $.get(items, function (items) {
        for (key in items) {
          var val = items[key];
          inputs[key].value = val;
        }
      });
      $.on($('#reset-keys', section), 'click', Settings.resetKeybinds);
    },
    keybind(e) {
      if (e.keyCode === 9)
        return; // tab
      e.preventDefault();
      e.stopPropagation();
      const key = Keybinds.keyCode(e);
      if (key == null)
        return; // empty string is backspace
      this.value = key;
      $.cb.value.call(this);
    },
    resetKeybinds() {
      if (!confirm('Are you sure you want to reset the keybinds?'))
        return;
      const defaults = Object.fromEntries(Object.entries(Config.hotkeys).map(([key, value]) => [key, value[0]]));
      $.set(defaults, () => {
        Object.assign(Conf, defaults);
        for (const [key, value] of Object.entries(defaults)) {
          Settings.keyBindInputs[key].value = value;
        }
      });
    },
  };

  var Filter = {
    /**
    * Uses a Map for string types, with the value to filter for as the key.
    * This allows faster lookup than iterating over every filter.
    */
    filters: new Map(),
    init() {
      if (!['index', 'thread', 'catalog'].includes(g.VIEW) || !Conf.Filter)
        return;
      if ((g.VIEW === 'catalog') && !Conf['Filter in Native Catalog'])
        return;
      if (!Conf['Filtered Backlinks']) {
        $.addClass(doc, 'hide-backlinks');
      }
      for (var key in Config.filter) {
        for (var line of Conf[key].split('\n')) {
          let hl;
          let regexp;
          let top;
          let hide = true;
          let mask = 0;
          let boards = false;
          let excludes = false;
          let reason;
          let poster = false;
          let replies = false;
          let noti = false;
          let stub = Conf.Stubs;
          if (line[0] === '#')
            continue;
          const regexpMatch = line.match(/\/(.*)\/(\w*)/);
          if (!regexpMatch) {
            continue;
          }
          if (key === 'uniqueID' || key === 'MD5') {
            // MD5 filter will use strings instead of regular expressions.
            regexp = regexpMatch[1];
          } else {
            try {
              // Please, don't write silly regular expressions.
              regexp = RegExp(regexpMatch[1], regexpMatch[2]);
            } catch (err) {
              // I warned you, bro.
              new Notice('warning', [
                $.tn(`Invalid ${key} filter:`),
                $.el('br'),
                $.tn(line),
                $.el('br'),
                $.tn(err.message)
              ], 60);
              continue;
            }
          }
          // Don't mix up filter flags with the regular expression.
          const options = line.length > regexpMatch[0].length ? line.replace(regexpMatch[0], '') : '';
          if (options) {
            // List of the boards this filter applies to.
            boards = this.parseBoards(options.match(/(?:^|;)\s*boards:([^;]+)/)?.[1]);
            // Boards to exclude from an otherwise global rule.
            excludes = this.parseBoards(options.match(/(?:^|;)\s*exclude:([^;]+)/)?.[1]);
            // Filter OPs along with their threads or replies only.
            const op = options.match(/(?:^|;)\s*op:(no|only)/)?.[1] || '';
            mask = $.getOwn({ 'no': 1, 'only': 2 }, op) || 0;
            // Filter only posts with/without files.
            const file = options.match(/(?:^|;)\s*file:(no|only)/)?.[1] || '';
            mask = mask | ($.getOwn({ 'no': 4, 'only': 8 }, file) || 0);
            // Overrule the `Show Stubs` setting.
            // Defaults to stub showing.
            stub = (() => {
              switch (options.match(/(?:^|;)\s*stub:(yes|no)/)?.[1]) {
                case 'yes':
                  return true;
                case 'no':
                  return false;
                default:
                  return Conf.Stubs;
              }
            })();
            // Desktop notification
            noti = /(?:^|;)\s*notify/.test(options);
            // Highlight the post.
            // If not specified, the highlight class will be filter-highlight.
            const highlightRes = options.match(/(?:^|;)\s*highlight(?::([\w-]+))?/);
            if (highlightRes) {
              hl = highlightRes[1] || 'filter-highlight';
              // Put highlighted OP's thread on top of the board page or not.
              // Defaults to on top.
              top = (options.match(/(?:^|;)\s*top:(yes|no)/)?.[1] || 'yes') === 'yes';
              hide = /(?:^|;)\s*hide(?:[;:]|$)/.test(options);
            }
            // Hide the post (default case).
            hide = hide || !(hl || noti);
            reason = options.match(/(?:^|;)\s*reason:([^;$]+)/)?.[1];
            poster = /(?:^|;)\s*poster(?:[;:]|$)/.test(options);
            replies = /(?:^|;)\s*replies(?:[;:]|$)/.test(options);
          }
          const filterObj = { regexp, boards, excludes, mask, hide, stub, hl, top, noti, reason, poster, replies };
          // Fields that this filter applies to (for 'general' filters)
          if (key === 'general') {
            const types = options.match(/(?:^|;)\s*type:([^;]*)/)?.[1].split(',')
              || ['subject', 'name', 'filename', 'comment'];
            for (var type of types) {
              this.filters.get(type)?.push(filterObj) ?? this.filters.set(type, [filterObj]);
            }
          } else {
            this.filters.get(key)?.push(filterObj) ?? this.filters.set(key, [filterObj]);
          }
        }
      }
      if (!this.filters.size)
        return;
      // conversion from array to map for string types
      for (const type of ['MD5', 'uniqueID']) {
        const filtersForType = this.filters.get(type);
        if (!filtersForType)
          continue;
        const map = new Map();
        for (const filter of filtersForType) {
          map.get(filter.regexp)?.push(filter) ?? map.set(filter.regexp, [filter]);
        }
        this.filters.set(type, map);
      }
      if (g.VIEW === 'catalog') {
        return Filter.catalog();
      } else {
        return Callbacks.Post.push({
          name: 'Filter',
          cb: this.node
        });
      }
    },
    // Parse comma-separated list of boards.
    // Sites can be specified by a beginning part of the site domain followed by a colon.
    parseBoards(boardsRaw) {
      let boards;
      if (!boardsRaw) {
        return false;
      }
      if (boards = Filter.parseBoardsMemo[boardsRaw]) {
        return boards;
      }
      boards = dict();
      let siteFilter = '';
      for (var boardID of boardsRaw.split(',')) {
        if (boardID.includes(':')) {
          [siteFilter, boardID] = boardID.split(':').slice(-2);
        }
        for (var siteID in g.sites) {
          var site = g.sites[siteID];
          if (siteID.slice(0, siteFilter.length) === siteFilter) {
            if (['nsfw', 'sfw'].includes(boardID)) {
              for (var boardID2 of site.sfwBoards?.(boardID === 'sfw') || []) {
                boards[`${siteID}/${boardID2}`] = true;
              }
            } else {
              boards[`${siteID}/${encodeURIComponent(boardID)}`] = true;
            }
          }
        }
      }
      Filter.parseBoardsMemo[boardsRaw] = boards;
      return boards;
    },
    parseBoardsMemo: dict(),
    test(post, hideable = true) {
      if (post.filterResults)
        return post.filterResults;
      let hide = false;
      let stub = true;
      let hl = undefined;
      let top = false;
      let noti = false;
      let poster = false;
      let replies = false;
      let reasons;
      if (QuoteYou.isYou(post)) {
        hideable = false;
      }
      let mask = (post.isReply ? 2 : 1);
      mask = (mask | (post.file ? 4 : 8));
      const board = `${post.siteID}/${post.boardID}`;
      const site = `${post.siteID}/*`;
      for (const type of Filter.filters.keys()) {
        for (const value of Filter.values(type, post)) {
          const filtersOrMap = Filter.filters.get(type);
          const filtersForType = Array.isArray(filtersOrMap) ? filtersOrMap : filtersOrMap.get(value);
          if (!filtersForType)
            continue;
          const isString = type === 'uniqueID' || type === 'MD5';
          for (const filter of filtersForType) {
            if ((filter.boards && !(filter.boards[board] || filter.boards[site])) ||
              (filter.excludes && (filter.excludes[board] || filter.excludes[site])) ||
              (filter.mask & mask) ||
              (isString ? (filter.regexp !== value) : !filter.regexp.test(value)))
              continue;
            if (filter.hide) {
              if (hideable) {
                hide = true;
                if (stub) {
                  ({ stub } = filter);
                  (reasons || (reasons = [])).push(filter.reason || `Filtered ${type} ${filter.regexp}`);
                }
              }
            }
            if (filter.hl && !hl?.includes(filter.hl)) {
              (hl || (hl = [])).push(filter.hl);
            }
            if (!top) {
              ({ top } = filter);
            }
            if (filter.noti)
              noti = true;
            if (filter.poster)
              poster = true;
            if (filter.replies)
              replies = true;
          }
        }
      }
      post.filterResults = { hide, stub, hl, top, noti, poster, replies, reasons };
      return post.filterResults;
    },
    node() {
      if (this.isClone ||
        // Happens when hovering over a dead link in the catalog.
        (!this.isReply && !this.thread.nodes.root))
        return;
      const { hide, stub, hl, noti, poster, replies } = Filter.test(this, (!this.isFetchedQuote && (this.isReply || (g.VIEW === 'index'))));
      // Add temporary filter for the poster ID for future posts.
      let reason;
      if (poster && this.info.uniqueID) {
        reason = `Hidden because it's the same poster as ${this.ID} (${this.filterResults.reasons})`;
        const { uniqueID } = this.info;
        const newFilter = {
          regexp: uniqueID,
          boards: false,
          excludes: false,
          mask: 0,
          hide,
          stub,
          replies,
          // A filter can only have one hl class.
          hl: hl?.[0],
          reason,
        };
        const map = Filter.filters.get('uniqueID');
        if (map) {
          map.get(uniqueID)?.push(newFilter) ?? map.set(uniqueID, [newFilter]);
        } else {
          Filter.filters.set('uniqueID', (new Map()).set(uniqueID, [newFilter]));
        }
      }
      if (hide) {
        if (this.isReply) {
          PostHiding.hide(this, stub);
          if (replies) {
            Recursive.applyAndAdd(PostHiding.hide, this, stub, undefined, `Hidden recursively from ${this.ID}`);
          }
          if (poster && this.info.uniqueID) {
            g.posts.forEach((p) => {
              if (p.info.uniqueID === this.info.uniqueID && p !== this) {
                PostHiding.hide(p, stub, replies, reason);
                if (replies) {
                  Recursive.applyAndAdd(PostHiding.hide, p, stub, undefined, `Hidden recursively from ${p.ID}`);
                }
              }
            });
          }
        } else {
          ThreadHiding.hide(this.thread, stub);
        }
      }
      if (hl) {
        this.highlights = hl;
        $.addClass(this.nodes.root, ...hl);
        if (this.isReply) {
          const hlFn = (post, ...hl) => { $.addClass(post.nodes.root, ...hl); };
          if (replies)
            Recursive.applyAndAdd(hlFn, this, ...hl);
          if (poster && this.info.uniqueID) {
            g.posts.forEach((p) => {
              if (p.info.uniqueID === this.info.uniqueID && p !== this) {
                $.addClass(p.nodes.root, ...hl);
                if (replies)
                  Recursive.applyAndAdd(hlFn, p, ...hl);
              }
            });
          }
        }
      }
      if (noti && Unread.posts && (this.ID > Unread.lastReadPost) && !QuoteYou.isYou(this)) {
        Unread.openNotification(this, ' triggered a notification filter');
      }
      if (this.file?.thumbLink) {
        $.on(this.file.thumbLink, 'click', (e) => {
          if (!e.shiftKey || !Conf['MD5 Quick Filter in Threads'])
            return;
          Filter.quickFilterMD5.call(this);
          e.preventDefault();
          e.stopImmediatePropagation();
        });
      }
    },
    catalog() {
      let url;
      if (!(url = g.SITE.urls.catalogJSON?.(g.BOARD))) {
        return;
      }
      Filter.catalogData = dict();
      $.ajax(url, { onloadend: Filter.catalogParse });
      return Callbacks.CatalogThreadNative.push({
        name: 'Filter',
        cb: this.catalogNode
      });
    },
    catalogParse() {
      if (![200, 404].includes(this.status)) {
        new Notice('warning', `Failed to fetch catalog JSON data. ${this.status ? `Error ${this.statusText} (${this.status})` : 'Connection Error'}`, 1);
        return;
      }
      for (var page of this.response) {
        for (var item of page.threads) {
          Filter.catalogData[item.no] = item;
        }
      }
      g.BOARD.threads.forEach(function (thread) {
        if (thread.catalogViewNative) {
          return Filter.catalogNode.call(thread.catalogViewNative);
        }
      });
    },
    catalogNode() {
      if ((this.boardID !== g.BOARD.ID) || !Filter.catalogData[this.ID]) {
        return;
      }
      if (QuoteYou.db?.get({ siteID: g.SITE.ID, boardID: this.boardID, threadID: this.ID, postID: this.ID })) {
        return;
      }
      const { hide, hl, top } = Filter.test(g.SITE.Build.parseJSON(Filter.catalogData[this.ID], this));
      if (hide) {
        this.nodes.root.hidden = true;
      }
      if (hl) {
        this.highlights = hl;
        $.addClass(this.nodes.root, ...hl);
      }
      if (top) {
        $.prepend(this.nodes.root.parentNode, this.nodes.root);
        g.SITE.catalogPin?.(this.nodes.root);
      }
    },
    isHidden(post) {
      return !!Filter.test(post).hide;
    },
    valueF: {
      postID(post) { return [`${post.ID}`]; },
      name(post) { return post.info.name === undefined ? [] : [post.info.name]; },
      uniqueID(post) { return [post.info.uniqueID || '']; },
      tripcode(post) { return post.info.tripcode === undefined ? [] : [post.info.tripcode]; },
      capcode(post) { return post.info.capcode === undefined ? [] : [post.info.capcode]; },
      pass(post) { return [post.info.pass]; },
      email(post) { return [post.info.email]; },
      subject(post) { return [post.info.subject || (post.isReply ? undefined : '')]; },
      comment(post) {
        if (post.info.comment == null) {
          post.info.comment = g.sites[post.siteID]?.Build?.parseComment?.(post.info.commentHTML.innerHTML);
        }
        return [post.info.comment];
      },
      flag(post) { return post.info.flag === undefined ? [] : [post.info.flag]; },
      filename(post) { return post.files.map(f => f.name); },
      dimensions(post) { return post.files.map(f => f.dimensions); },
      filesize(post) { return post.files.map(f => f.size); },
      MD5(post) { return post.files.map(f => f.MD5); }
    },
    values(key, post) {
      if ($.hasOwn(Filter.valueF, key)) {
        return Filter.valueF[key](post).filter(v => v != null);
      } else {
        return [key.split('+').map(function (k) {
            let f;
            if (f = $.getOwn(Filter.valueF, k)) {
              return f(post).map(v => v || '').join('\n');
            } else {
              return '';
            }
          }).join('\n')];
      }
    },
    addFilter(type, re, cb) {
      if (!$.hasOwn(Config.filter, type)) {
        return;
      }
      return $.get(type, Conf[type], function (item) {
        let save = item[type];
        // Add a new line before the regexp unless the text is empty.
        save =
          save ?
            `${save}\n${re}`
            :
              re;
        return $.set(type, save, cb);
      });
    },
    removeFilters(type, res, cb) {
      return $.get(type, Conf[type], function (item) {
        let save = item[type];
        const filterArray = Array.isArray(res) ? res : [...res.values()].flat();
        const r = filterArray.map(Filter.escape).join('|');
        save = save.replace(RegExp(`(?:$\n|^)(?:${r})$`, 'mg'), '');
        $.set(type, save, cb);
      });
    },
    showFilters(type) {
      // Open the settings and display & focus the relevant filter textarea.
      Settings.open('Filter');
      const section = $('.section-container');
      const select = $('select[name=filter]', section);
      select.value = type;
      Settings.selectFilter.call(select);
      $.onExists(section, 'textarea', function (ta) {
        const tl = ta.textLength;
        ta.setSelectionRange(tl, tl);
        ta.focus();
      });
    },
    quickFilterMD5() {
      const post = this instanceof Post ? this : Get.postFromNode(this);
      const files = post.files.filter(f => f.MD5);
      if (!files.length) {
        return;
      }
      const filter = files.map(f => `/${f.MD5}/`).join('\n');
      Filter.addFilter('MD5', filter);
      const origin = post.origin || post;
      if (origin.isReply) {
        PostHiding.hide(origin, undefined, undefined, files.map(f => `Filtered MD5 ${f.MD5}`).join(' & '));
      } else if (g.VIEW === 'index') {
        ThreadHiding.hide(origin.thread);
      }
      if (!Conf['MD5 Quick Filter Notifications']) {
        // feedback for when nothing gets hidden
        if (post.nodes.post.getBoundingClientRect().height) {
          new Notice('info', 'MD5 filtered.', 2);
        }
        return;
      }
      let { notice } = Filter.quickFilterMD5;
      if (notice) {
        notice.filters.push(filter);
        notice.posts.push(origin);
        $('span', notice.el).textContent = `${notice.filters.length} MD5s filtered.`;
        notice.resetTimer();
      } else {
        const msg = $.el('div', { innerHTML: "<span>MD5 filtered.</span> [<a href=\"javascript:;\">show</a>] [<a href=\"javascript:;\">undo</a>]" });
        notice = (Filter.quickFilterMD5.notice = new Notice('info', msg, 10, () => delete Filter.quickFilterMD5.notice));
        notice.filters = [filter];
        notice.posts = [origin];
        const links = $$('a', msg);
        $.on(links[0], 'click', Filter.quickFilterCB.show.bind(notice));
        $.on(links[1], 'click', Filter.quickFilterCB.undo.bind(notice));
      }
    },
    quickFilterCB: {
      show() {
        Filter.showFilters('MD5');
        this.close();
      },
      undo() {
        Filter.removeFilters('MD5', this.filters);
        for (var post of this.posts) {
          if (post.isReply) {
            PostHiding.show(post);
          } else if (g.VIEW === 'index') {
            ThreadHiding.show(post.thread);
          }
        }
        this.close();
      }
    },
    escape(value) {
      return value.replace(/[/\\^$\n.(){}[\]?*+|]/g, (c) => c === '\n' ? '\\n' : `\\${c}`);
    },
    menu: {
      init() {
        if (!['index', 'thread'].includes(g.VIEW) || !Conf.Menu || !Conf.Filter) {
          return;
        }
        const div = $.el('div', { textContent: 'Filter' });
        const entry = {
          el: div,
          order: 50,
          open(post) {
            Filter.menu.post = post;
            return true;
          },
          subEntries: []
        };
        for (var type of [
          ['Name', 'name'],
          ['Unique ID', 'uniqueID'],
          ['Tripcode', 'tripcode'],
          ['Capcode', 'capcode'],
          ['Pass Date', 'pass'],
          ['Email', 'email'],
          ['Subject', 'subject'],
          ['Comment', 'comment'],
          ['Flag', 'flag'],
          ['Filename', 'filename'],
          ['Image dimensions', 'dimensions'],
          ['Filesize', 'filesize'],
          ['Image MD5', 'MD5']
        ]) {
          // Add a sub entry for each filter type.
          entry.subEntries.push(Filter.menu.createSubEntry(type[0], type[1]));
        }
        Menu.menu.addEntry(entry);
      },
      createSubEntry(text, type) {
        const el = $.el('a', {
          href: 'javascript:;',
          textContent: text
        });
        el.dataset.type = type;
        $.on(el, 'click', Filter.menu.makeFilter);
        return {
          el,
          open(post) {
            return Filter.values(type, post).length;
          }
        };
      },
      makeFilter() {
        const { type } = this.dataset;
        // Convert value -> regexp, unless type is MD5
        const values = Filter.values(type, Filter.menu.post);
        const res = values.map((value) => {
          if (['uniqueID', 'MD5'].includes(type)) {
            return `/${value}/`;
          } else {
            return `/^${Filter.escape(value)}$/`;
          }
        }).join('\n');
        Filter.addFilter(type, res, () => Filter.showFilters(type));
      }
    }
  };

  var Site = {
      defaultProperties: {
          '4chan.org': { software: 'yotsuba' },
          // '4channel.org': {canonical: '4chan.org'},
          '4cdn.org': { canonical: '4chan.org' },
      },
      init(cb) {
          $.extend(Conf.siteProperties, Site.defaultProperties);
          let hostname = Site.resolve();
          if (hostname && $.hasOwn(SW, Conf.siteProperties[hostname].software)) {
              this.set(hostname);
              cb();
          }
          $.onExists(doc, 'body', () => {
              for (var software in SW) {
                  var changes;
                  if (changes = SW[software].detect?.()) {
                      changes.software = software;
                      hostname = location.hostname.replace(/^www\./, '');
                      var properties = (Conf.siteProperties[hostname] || (Conf.siteProperties[hostname] = dict()));
                      var changed = 0;
                      for (var key in changes) {
                          if (properties[key] !== changes[key]) {
                              properties[key] = changes[key];
                              changed++;
                          }
                      }
                      if (changed) {
                          $.set('siteProperties', Conf.siteProperties);
                      }
                      if (!g.SITE) {
                          this.set(hostname);
                          cb();
                      }
                      return;
                  }
              }
          });
      },
      resolve(url = location) {
          let { hostname } = url;
          while (hostname && !$.hasOwn(Conf.siteProperties, hostname)) {
              hostname = hostname.replace(/^[^.]*\.?/, '');
          }
          if (hostname) {
              let canonical;
              if (canonical = Conf.siteProperties[hostname].canonical) {
                  hostname = canonical;
              }
          }
          return hostname;
      },
      parseURL(url) {
          const siteID = Site.resolve(url);
          return Main.parseURL(g.sites[siteID], url);
      },
      set(hostname) {
          for (var ID in Conf.siteProperties) {
              var site;
              var properties = Conf.siteProperties[ID];
              if (properties.canonical) {
                  continue;
              }
              var { software } = properties;
              if (!software || !$.hasOwn(SW, software)) {
                  continue;
              }
              g.sites[ID] = (site = Object.create(SW[software]));
              $.extend(site, { ID, siteID: ID, properties, software });
          }
          return g.SITE = g.sites[hostname];
      }
  };

  const CatalogLinks = {
      init() {
          if ((g.SITE.software === 'yotsuba') && (Conf['External Catalog'] || Conf['JSON Index']) && !(Conf['JSON Index'] && (g.VIEW === 'index'))) {
              const selectors = {
                  thread: '.navLinks.desktop > a',
                  archive: '.navLinks.desktop > a',
                  catalog: '.navLinks > :first-child > a',
                  index: '#ctrl-top > a, .cataloglink > a'
              };
              const selector = selectors[g.VIEW];
              $.ready(function () {
                  for (const link of $$(selector)) {
                      let catalogURL;
                      switch (link.pathname.replace(/\/+/g, '/')) {
                          case `/${g.BOARD}/`:
                              if (Conf['JSON Index']) {
                                  link.textContent = 'Index';
                              }
                              link.href = CatalogLinks.index();
                              break;
                          case `/${g.BOARD}/catalog`:
                              link.href = CatalogLinks.catalog();
                              break;
                      }
                      if ((g.VIEW === 'catalog') && ((catalogURL = CatalogLinks.catalog()) !== g.SITE.urls.catalog?.(g.BOARD))) {
                          const catalogLink = link.parentNode.cloneNode(true);
                          const link2 = catalogLink.firstElementChild;
                          link2.href = catalogURL;
                          link2.textContent = link2.hostname === location.hostname ? `${meta.name} Catalog` : 'External Catalog';
                          $.after(link.parentNode, [$.tn(' '), catalogLink]);
                      }
                  }
              });
          }
          if ((g.SITE.software === 'yotsuba') && Conf['JSON Index'] && Conf[`Use ${meta.name} Catalog`]) {
              Callbacks.Post.push({
                  name: 'Catalog Link Rewrite',
                  cb: this.node
              });
          }
          if (this.enabled = Conf['Catalog Links']) {
              let el;
              CatalogLinks.el = (el = UI.checkbox('Header catalog links', 'Catalog Links'));
              el.id = 'toggleCatalog';
              const input = $('input', el);
              $.on(input, 'change', this.toggle);
              $.sync('Header catalog links', CatalogLinks.set);
              Header.menu.addEntry({
                  el,
                  order: 95
              });
          }
      },
      node() {
          for (const a of $$('a', this.nodes.comment)) {
              let m;
              // if (m = a.href.match(/^https?:\/\/(boards\.4chan(?:nel)?\.org\/[^\/]+)\/catalog(#s=.*)?/)) {
              if (m = a.href.match(/^https?:\/\/(boards\.4chan\.org\/[^\/]+)\/catalog(#s=.*)?/)) {
                  a.href = `//${m[1]}/${m[2] || '#catalog'}`;
              }
          }
      },
      toggle() {
          $.event('CloseMenu');
          $.set('Header catalog links', this.checked);
          CatalogLinks.set(this.checked);
      },
      set(useCatalog) {
          Conf['Header catalog links'] = useCatalog;
          CatalogLinks.setLinks(Header.boardList);
          CatalogLinks.setLinks(Header.bottomBoardList);
          CatalogLinks.el.title = `Turn catalog links ${useCatalog ? 'off' : 'on'}.`;
          return $('input', CatalogLinks.el).checked = useCatalog;
      },
      // Also called by Header when board lists are loaded / generated.
      setLinks(list) {
          if ((!(CatalogLinks.enabled ?? Conf['Catalog Links'])) || !list) {
              return;
          }
          // do not transform links unless they differ from the expected value at most by this tail
          const tail = /(?:index)?(?:\.\w+)?$/;
          for (const a of $$('a:not([data-only])', list)) {
              let { siteID, boardID } = a.dataset;
              if (!siteID || !boardID) {
                  let VIEW;
                  ({ siteID, boardID, VIEW } = Site.parseURL(a));
                  if (!siteID || !boardID ||
                      !['index', 'catalog'].includes(VIEW) ||
                      (!a.dataset.indexOptions && (a.href.replace(tail, '') !== (Get.url(VIEW, { siteID, boardID }) || '').replace(tail, '')))) {
                      continue;
                  }
                  $.extend(a.dataset, { siteID, boardID });
              }
              const board = { siteID, boardID };
              const url = Conf['Header catalog links'] ? CatalogLinks.catalog(board) : Get.url('index', board);
              if (url) {
                  a.href = url;
                  if (a.dataset.indexOptions && (url.split('#')[0] === Get.url('index', board))) {
                      a.href += (a.hash ? '/' : '#') + a.dataset.indexOptions;
                  }
              }
          }
      },
      externalParse() {
          CatalogLinks.externalList = dict();
          for (const line of Conf.externalCatalogURLs.split('\n')) {
              if (line[0] === '#') {
                  continue;
              }
              const url = line.split(';')[0];
              const boards = Filter.parseBoards(line.match(/;boards:([^;]+)/)?.[1] || '*');
              const excludes = Filter.parseBoards(line.match(/;exclude:([^;]+)/)?.[1]) || dict();
              for (const board in boards) {
                  if (!excludes[board] && !excludes[board.split('/')[0] + '/*']) {
                      CatalogLinks.externalList[board] = url;
                  }
              }
          }
      },
      external({ siteID, boardID }) {
          if (!CatalogLinks.externalList) {
              CatalogLinks.externalParse();
          }
          const external = (CatalogLinks.externalList[`${siteID}/${boardID}`] || CatalogLinks.externalList[`${siteID}/*`]);
          if (external) {
              return external.replace(/%board/g, boardID);
          }
          else {
              return undefined;
          }
      },
      jsonIndex(board, hash) {
          if ((g.SITE.ID === board.siteID) && (g.BOARD.ID === board.boardID) && (g.VIEW === 'index')) {
              return hash;
          }
          else {
              return Get.url('index', board) + hash;
          }
      },
      catalog(board = g.BOARD) {
          let external, nativeCatalog;
          if (Conf['External Catalog'] && (external = CatalogLinks.external(board))) {
              return external;
          }
          else if (Index.enabledOn(board) && Conf[`Use ${meta.name} Catalog`]) {
              return CatalogLinks.jsonIndex(board, '#catalog');
          }
          else if (nativeCatalog = Get.url('catalog', board)) {
              return nativeCatalog;
          }
          else {
              return CatalogLinks.external(board);
          }
      },
      index(board = g.BOARD) {
          if (Index.enabledOn(board)) {
              return CatalogLinks.jsonIndex(board, '#index');
          }
          else {
              return Get.url('index', board);
          }
      }
  };

  var Header = {
    init() {
      $.onExists(doc, 'body', () => {
        if (!PageReady.isThisPageLegit()) {
          return;
        }
        $.add(this.bar, [noticesRoot, this.toggle]);
        $.prepend(d.body, this.bar);
        $.add(d.body, Header.hover);
        return this.setBarPosition(Conf['Bottom Header']);
      });
      this.menu = new UI.Menu('header');
      const menuButton = $.el('span', { className: 'menu-button' });
      Icon.set(menuButton, 'caretDown', 'Menu');
      const box = UI.checkbox;
      const barFixedToggler = box('Fixed Header', 'Fixed Header');
      const headerToggler = box('Header auto-hide', 'Auto-hide header');
      const scrollHeaderToggler = box('Header auto-hide on scroll', 'Auto-hide header on scroll');
      const barPositionToggler = box('Bottom Header', 'Bottom header');
      const linkJustifyToggler = box('Centered links', 'Centered links');
      const customNavToggler = box('Custom Board Navigation', 'Custom board navigation');
      const footerToggler = box('Bottom Board List', 'Hide bottom board list');
      const shortcutToggler = box('Shortcut Icons', 'Shortcut Icons');
      const editCustomNav = $.el('a', {
        textContent: 'Edit custom board navigation',
        href: 'javascript:;'
      });
      this.barFixedToggler = barFixedToggler.firstElementChild;
      this.scrollHeaderToggler = scrollHeaderToggler.firstElementChild;
      this.barPositionToggler = barPositionToggler.firstElementChild;
      this.linkJustifyToggler = linkJustifyToggler.firstElementChild;
      this.headerToggler = headerToggler.firstElementChild;
      this.footerToggler = footerToggler.firstElementChild;
      this.shortcutToggler = shortcutToggler.firstElementChild;
      this.customNavToggler = customNavToggler.firstElementChild;
      $.on(menuButton, 'click', this.menuToggle);
      $.on(this.headerToggler, 'change', this.toggleBarVisibility);
      $.on(this.barFixedToggler, 'change', this.toggleBarFixed);
      $.on(this.barPositionToggler, 'change', this.toggleBarPosition);
      $.on(this.scrollHeaderToggler, 'change', this.toggleHideBarOnScroll);
      $.on(this.linkJustifyToggler, 'change', this.toggleLinkJustify);
      $.on(this.footerToggler, 'change', this.toggleFooterVisibility);
      $.on(this.shortcutToggler, 'change', this.toggleShortcutIcons);
      $.on(this.customNavToggler, 'change', this.toggleCustomNav);
      $.on(editCustomNav, 'click', this.editCustomNav);
      this.setBarFixed(Conf['Fixed Header']);
      this.setHideBarOnScroll(Conf['Header auto-hide on scroll']);
      this.setBarVisibility(Conf['Header auto-hide']);
      this.setLinkJustify(Conf['Centered links']);
      this.setShortcutIcons(Conf['Shortcut Icons']);
      this.setFooterVisibility(Conf['Bottom Board List']);
      $.sync('Fixed Header', this.setBarFixed);
      $.sync('Header auto-hide on scroll', this.setHideBarOnScroll);
      $.sync('Bottom Header', this.setBarPosition);
      $.sync('Shortcut Icons', this.setShortcutIcons);
      $.sync('Header auto-hide', this.setBarVisibility);
      $.sync('Centered links', this.setLinkJustify);
      $.sync('Bottom Board List', this.setFooterVisibility);
      this.addShortcut('menu', menuButton, 900);
      this.menu.addEntry({
        el: $.el('span', { textContent: 'Header' }),
        order: 107,
        subEntries: [
          { el: barFixedToggler },
          { el: headerToggler },
          { el: scrollHeaderToggler },
          { el: barPositionToggler },
          { el: linkJustifyToggler },
          { el: footerToggler },
          { el: shortcutToggler },
          { el: customNavToggler },
          { el: editCustomNav }
        ]
      });
      $.on(d, 'CreateNotification', this.createNotification);
      this.setBoardList();
      $.onExists(doc, `${g.SITE.selectors.boardList} + *`, Header.generateFullBoardList);
      PageReady.ready(function () {
        let footer;
        if ((g.SITE.software === 'yotsuba') && !(footer = $.id('boardNavDesktopFoot'))) {
          let absbot;
          if (!(absbot = $.id('absbot'))) {
            return;
          }
          footer = $.id('boardNavDesktop').cloneNode(true);
          footer.id = 'boardNavDesktopFoot';
          $('#navtopright', footer).id = 'navbotright';
          $('#settingsWindowLink', footer).id = 'settingsWindowLinkBot';
          $.before(absbot, footer);
          $.global('stubCloneTopNav');
        }
        if (Header.bottomBoardList = $(g.SITE.selectors.boardListBottom)) {
          for (var a of $$('a', Header.bottomBoardList)) {
            if ((a.hostname === location.hostname) && (a.pathname.split('/')[1] === g.BOARD.ID)) {
              a.className = 'current';
            }
          }
          CatalogLinks.setLinks(Header.bottomBoardList);
        }
      });
      if ((g.SITE.software === 'yotsuba') && ((g.VIEW === 'catalog') || !Conf['Disable Native Extension'])) {
        const cs = $.el('a', { href: 'javascript:;' });
        if (g.VIEW === 'catalog') {
          cs.title = (cs.textContent = 'Catalog Settings');
          Icon.set(cs, 'bookOpen', 'Catalog Settings');
          this.addShortcut('native', cs, 810);
        } else {
          cs.title = (cs.textContent = '4chan Settings');
          cs.className = 'native-settings';
          this.addShortcut('native', cs, 810);
        }
        $.on(cs, 'click', () => $.id('settingsWindowLink').click());
      }
      this.enableDesktopNotifications();
    },
    bar: $.el('div', { id: 'header-bar' }),
    shortcuts: $.el('span', { id: 'shortcuts' }),
    hover: $.el('div', { id: 'hoverUI' }),
    toggle: $.el('div', { id: 'scroll-marker' }),
    setBoardList() {
      let boardList;
      Header.boardList = (boardList = $.el('span', { id: 'board-list' }));
      $.extend(boardList, { innerHTML: "<span id=\"custom-board-list\"></span><span id=\"full-board-list\" hidden><span class=\"hide-board-list-container brackets-wrap\"><a href=\"javascript:;\" class=\"hide-board-list-button\">&nbsp;-&nbsp;</a></span> <span class=\"boardList\"></span></span>" });
      const btn = $('.hide-board-list-button', boardList);
      $.on(btn, 'click', Header.toggleBoardList);
      $.prepend(Header.bar, [Header.boardList, Header.shortcuts]);
      Header.setCustomNav(Conf['Custom Board Navigation']);
      Header.generateBoardList(Conf.boardnav);
      $.sync('Custom Board Navigation', Header.setCustomNav);
      $.sync('boardnav', Header.generateBoardList);
    },
    generateFullBoardList() {
      let nodes;
      if (g.SITE.transformBoardList) {
        nodes = g.SITE.transformBoardList();
      } else {
        nodes = [...$(g.SITE.selectors.boardList).cloneNode(true).childNodes];
      }
      const fullBoardList = $('.boardList', Header.boardList);
      $.add(fullBoardList, nodes);
      for (var a of $$('a', fullBoardList)) {
        if ((a.hostname === location.hostname) && (a.pathname.split('/')[1] === g.BOARD.ID)) {
          a.className = 'current';
        }
      }
      CatalogLinks.setLinks(fullBoardList);
    },
    generateBoardList(boardnav) {
      const list = $('#custom-board-list', Header.boardList);
      $.rmAll(list);
      if (!boardnav)
        return;
      boardnav = boardnav.replace(/(\r\n|\n|\r)/g, ' ');
      const segments = boardnav.split(/(\{\{(?:"[^"]+")?|\}\})/);
      const spanStack = [];
      let currentContainer = list;
      segments.forEach(segment => {
        if (segment.startsWith('{{')) {
          const span = $.el('span');
          $.add(currentContainer, span);
          spanStack.push(span);
          currentContainer = span;
          if (segment.length > 2)
            span.className = segment.slice(3, -1);
        } else if (segment === '}}') {
          spanStack.pop();
          currentContainer = spanStack.length > 0 ? spanStack[spanStack.length - 1] : list;
        } else {
          const re = /[\w@]+(-(all|title|replace|full|index|catalog|archive|expired|nt|(mode|sort|text):"[^"]+"(,"[^"]+")?))*|[^\w@]+/g;
          const segmentNodes = (segment.match(re) || []).map((t) => Header.mapCustomNavigation(t));
          segmentNodes.forEach(node => currentContainer.appendChild(node));
        }
      });
      CatalogLinks.setLinks(list);
    },
    mapCustomNavigation(t) {
      let a, href, m, url;
      if (/^[^\w@]/.test(t)) {
        return $.tn(t);
      }
      let text = (url = null);
      t = t.replace(/-text:"([^"]+)"(?:,"([^"]+)")?/g, function (m0, m1, m2) {
        text = m1;
        url = m2;
        return '';
      });
      let indexOptions = [];
      t = t.replace(/-(?:mode|sort):"([^"]+)"/g, function (m0, m1) {
        indexOptions.push(m1.toLowerCase().replace(/\ /g, '-'));
        return '';
      });
      indexOptions = indexOptions.join('/');
      if (/^toggle-all/.test(t)) {
        a = $.el('a', {
          className: 'show-board-list-button',
          textContent: text || '+',
          href: 'javascript:;'
        });
        $.on(a, 'click', Header.toggleBoardList);
        return a;
      }
      if (/^external/.test(t)) {
        a = $.el('a', {
          href: url || 'javascript:;',
          textContent: text || '+',
          className: 'external'
        });
        if (/-nt/.test(t)) {
          a.target = '_blank';
          a.rel = 'noopener';
        }
        return a;
      }
      let boardID = t.split('-')[0];
      if (boardID === 'current') {
        // if (['boards.4chan.org', 'boards.4channel.org'].includes(location.hostname)) {
        if (location.hostname === 'boards.4chan.org') {
          boardID = g.BOARD.ID;
        } else {
          a = $.el('a', {
            href: `/${g.BOARD.ID}/`,
            textContent: text || decodeURIComponent(g.BOARD.ID),
            className: 'current'
          });
          if (/-nt/.test(t)) {
            a.target = '_blank';
            a.rel = 'noopener';
          }
          if (/-index/.test(t)) {
            a.dataset.only = 'index';
          } else if (/-catalog/.test(t)) {
            a.dataset.only = 'catalog';
            a.href += 'catalog.html';
          } else if (/-(archive|expired)/.test(t)) {
            a = a.firstChild; // Its text node.
          }
          return a;
        }
      }
      a = (function () {
        let urlV;
        if (boardID === '@') {
          return $.el('a', {
            href: 'https://x.com/4chan',
            title: '4chan Twitter',
            className: 'navSmall',
            textContent: '@'
          });
        }
        a = $.el('a', {
          // href: `//${BoardConfig.domain(boardID)}/${boardID}/`,
          href: `//boards.4chan.org/${boardID}/`,
          textContent: boardID,
          title: BoardConfig.title(boardID)
        });
        if (['catalog', 'archive'].includes(g.VIEW) && (urlV = Get.url(g.VIEW, { siteID: '4chan.org', boardID }))) {
          a.href = urlV;
        }
        if ((a.hostname === location.hostname) && (boardID === g.BOARD.ID)) {
          a.className = 'current';
        }
        return a;
      })();
      a.textContent = /-title/.test(t) || (/-replace/.test(t) && (a.hostname === location.hostname) && (boardID === g.BOARD.ID)) ?
        a.title || a.textContent
        : /-full/.test(t) ? (`/${boardID}/`) + (a.title ? ` - ${a.title}` : '')
          : text || boardID;
      if (m = t.match(/-(index|catalog)/)) {
        const urlIC = CatalogLinks[m[1]]({ siteID: '4chan.org', boardID });
        if (urlIC) {
          a.dataset.only = m[1];
          a.href = urlIC;
          if (m[1] === 'catalog') {
            $.addClass(a, 'catalog');
          }
        } else {
          return a.firstChild; // Its text node.
        }
      }
      if (Conf['JSON Index'] && indexOptions) {
        a.dataset.indexOptions = indexOptions;
        // if (['boards.4chan.org', 'boards.4channel.org'].includes(a.hostname) && (a.pathname.split('/')[2] === '')) {
        if (a.hostname === 'boards.4chan.org' && a.pathname.split('/')[2] === '') {
          a.href += (a.hash ? '/' : '#') + indexOptions;
        }
      }
      if (/-archive/.test(t)) {
        if (href = Redirect.to('board', { boardID })) {
          a.href = href;
        } else {
          return a.firstChild; // Its text node.
        }
      }
      if (/-expired/.test(t)) {
        if (BoardConfig.isArchived(boardID)) {
          // a.href = `//${BoardConfig.domain(boardID)}/${boardID}/archive`;
          a.href = `//boards.4chan.org/${boardID}/archive`;
        } else {
          return a.firstChild; // Its text node.
        }
      }
      if (/-nt/.test(t)) {
        a.target = '_blank';
        a.rel = 'noopener';
      }
      return a;
    },
    toggleBoardList() {
      const { bar } = Header;
      const custom = $('#custom-board-list', bar);
      const full = $('#full-board-list', bar);
      const showBoardList = !full.hidden;
      custom.hidden = !showBoardList;
      full.hidden = showBoardList;
    },
    setLinkJustify(centered) {
      Header.linkJustifyToggler.checked = centered;
      if (centered) {
        $.addClass(doc, 'centered-links');
      } else {
        $.rmClass(doc, 'centered-links');
      }
    },
    toggleLinkJustify() {
      $.event('CloseMenu');
      const centered = this.nodeName === 'INPUT' ?
        this.checked : undefined;
      Header.setLinkJustify(centered);
      $.set('Centered links', centered);
    },
    setBarFixed(fixed) {
      Header.barFixedToggler.checked = fixed;
      if (fixed) {
        $.addClass(doc, 'fixed');
        $.addClass(Header.bar, 'dialog');
      } else {
        $.rmClass(doc, 'fixed');
        $.rmClass(Header.bar, 'dialog');
      }
    },
    toggleBarFixed() {
      $.event('CloseMenu');
      Header.setBarFixed(this.checked);
      Conf['Fixed Header'] = this.checked;
      $.set('Fixed Header', this.checked);
    },
    setShortcutIcons(show) {
      Header.shortcutToggler.checked = show;
      if (show) {
        $.addClass(doc, 'shortcut-icons');
      } else {
        $.rmClass(doc, 'shortcut-icons');
      }
    },
    toggleShortcutIcons() {
      $.event('CloseMenu');
      Header.setShortcutIcons(this.checked);
      Conf['Shortcut Icons'] = this.checked;
      $.set('Shortcut Icons', this.checked);
    },
    setBarVisibility(hide) {
      Header.headerToggler.checked = hide;
      $.event('CloseMenu');
      (hide ? $.addClass : $.rmClass)(Header.bar, 'autohide');
      (hide ? $.addClass : $.rmClass)(doc, 'autohide');
    },
    toggleBarVisibility() {
      const hide = this.nodeName === 'INPUT' ? this.checked
        : !$.hasClass(Header.bar, 'autohide');
      Conf['Header auto-hide'] = hide;
      $.set('Header auto-hide', hide);
      Header.setBarVisibility(hide);
      const message = `The header bar will ${hide ?
      'automatically hide itself.' : 'remain visible.'}`;
      return new Notice('info', message, 2);
    },
    setHideBarOnScroll(hide) {
      Header.scrollHeaderToggler.checked = hide;
      if (hide) {
        $.on(window, 'scroll', Header.hideBarOnScroll);
        return;
      }
      $.off(window, 'scroll', Header.hideBarOnScroll);
      $.rmClass(Header.bar, 'scroll');
      Header.bar.classList.toggle('autohide', Conf['Header auto-hide']);
    },
    toggleHideBarOnScroll() {
      const hide = this.checked;
      $.cb.checked.call(this);
      Header.setHideBarOnScroll(hide);
    },
    hideBarOnScroll() {
      const offsetY = window.pageYOffset;
      if (offsetY > (Header.previousOffset || 0)) {
        $.addClass(Header.bar, 'autohide', 'scroll');
      } else {
        $.rmClass(Header.bar, 'autohide', 'scroll');
      }
      return Header.previousOffset = offsetY;
    },
    setBarPosition(bottom) {
      if (Header.barPositionToggler)
        Header.barPositionToggler.checked = bottom;
      $.event('CloseMenu');
      const args = bottom ? [
        'bottom-header',
        'top-header',
        'after'
      ] : [
        'top-header',
        'bottom-header',
        'add'
      ];
      $.addClass(doc, args[0]);
      $.rmClass(doc, args[1]);
      return $[args[2]](Header.bar, noticesRoot);
    },
    toggleBarPosition() {
      $.cb.checked.call(this);
      Header.setBarPosition(this.checked);
    },
    setFooterVisibility(hide) {
      Header.footerToggler.checked = hide;
      doc.classList.toggle('hide-bottom-board-list', hide);
    },
    toggleFooterVisibility() {
      $.event('CloseMenu');
      const hide = this.nodeName === 'INPUT' ? this.checked
        : $.hasClass(doc, 'hide-bottom-board-list');
      Header.setFooterVisibility(hide);
      $.set('Bottom Board List', hide);
      const message = hide ?
        'The bottom navigation will now be hidden.'
        : 'The bottom navigation will remain visible.';
      return new Notice('info', message, 2);
    },
    setCustomNav(show) {
      Header.customNavToggler.checked = show;
      const cust = $('#custom-board-list', Header.bar);
      const full = $('#full-board-list', Header.bar);
      const btn = $('.hide-board-list-container', full);
      return [cust.hidden, full.hidden, btn.hidden] = show ? [false, true, false] : [true, false, true];
    },
    toggleCustomNav() {
      $.cb.checked.call(this);
      Header.setCustomNav(this.checked);
    },
    editCustomNav() {
      Settings.open('Advanced');
      const settings = $.id('fourchanx-settings');
      $('[name=boardnav]', settings).focus();
    },
    scrollTo(root, down = false, needed = false) {
      let height, x;
      if (!root.offsetParent) {
        return;
      } // hidden or fixed
      if (down) {
        x = Header.getBottomOf(root);
        if (Conf['Fixed Header'] && Conf['Header auto-hide on scroll'] && Conf['Bottom header']) {
          ({ height } = Header.bar.getBoundingClientRect());
          if (x <= 0) {
            if (!Header.isHidden()) {
              x += height;
            }
          } else {
            if (Header.isHidden()) {
              x -= height;
            }
          }
        }
        if (!needed || (x < 0)) {
          return window.scrollBy(0, -x);
        }
      } else {
        x = Header.getTopOf(root);
        if (Conf['Fixed Header'] && Conf['Header auto-hide on scroll'] && !Conf['Bottom header']) {
          ({ height } = Header.bar.getBoundingClientRect());
          if (x >= 0) {
            if (!Header.isHidden()) {
              x += height;
            }
          } else {
            if (Header.isHidden()) {
              x -= height;
            }
          }
        }
        if (!needed || (x < 0)) {
          return window.scrollBy(0, x);
        }
      }
    },
    scrollToIfNeeded(root, down) {
      Header.scrollTo(root, down, true);
    },
    getTopOf(root) {
      let { top } = root.getBoundingClientRect();
      if (Conf['Fixed Header'] && !Conf['Bottom Header']) {
        const headRect = Header.toggle.getBoundingClientRect();
        top -= headRect.top + headRect.height;
      }
      return top;
    },
    getBottomOf(root) {
      const { clientHeight } = doc;
      let bottom = clientHeight - root.getBoundingClientRect().bottom;
      if (Conf['Fixed Header'] && Conf['Bottom Header']) {
        const headRect = Header.toggle.getBoundingClientRect();
        bottom -= (clientHeight - headRect.bottom) + headRect.height;
      }
      return bottom;
    },
    isNodeVisible(node) {
      if (d.hidden || !doc.contains(node)) {
        return false;
      }
      const { height } = node.getBoundingClientRect();
      ((Header.getTopOf(node) + height) >= 0) && ((Header.getBottomOf(node) + height) >= 0);
    },
    isHidden() {
      const { top } = Header.bar.getBoundingClientRect();
      if (Conf['Bottom header']) {
        return top === doc.clientHeight;
      } else {
        return top < 0;
      }
    },
    addShortcut(id, el, index) {
      const shortcut = $.el('span', {
        id: `shortcut-${id}`,
        className: 'shortcut brackets-wrap'
      });
      $.add(shortcut, el);
      shortcut.dataset.index = index.toString();
      for (var item of $$('[data-index]', Header.shortcuts)) {
        if (+item.dataset.index > +index) {
          $.before(item, shortcut);
          return;
        }
      }
      $.add(Header.shortcuts, shortcut);
    },
    rmShortcut(el) {
      $.rm(el.parentElement);
    },
    menuToggle(e) {
      Header.menu.toggle(e, this, g);
    },
    createNotification(e) {
      const { type, content, lifetime } = e.detail;
      return new Notice(type, content, lifetime);
    },
    areNotificationsEnabled: false,
    enableDesktopNotifications() {
      let notice;
      if (!window.Notification || !Conf['Desktop Notifications']) {
        return;
      }
      switch (Notification.permission) {
        case 'granted':
          Header.areNotificationsEnabled = true;
          return;
        case 'denied':
          // requestPermission doesn't work if status is 'denied', but it'll still work if status is 'default'.
          return;
      }
      const el = $.el('span', { innerHTML: `${meta.name} needs your permission to show desktop notifications. ` +
          `[<a href=\"${E(meta.upstreamFaq)}#why-is-4chan-x-asking-for-permission-to-show-desktop-notifications\" target=\"_blank\">FAQ</a>]` +
          `<br><button>Authorize</button> or <button>Disable</button>`
      });
      const [authorize, disable] = $$('button', el);
      $.on(authorize, 'click', () => Notification.requestPermission(function (status) {
        Header.areNotificationsEnabled = status === 'granted';
        if (status === 'default') {
          return;
        }
        return notice.close();
      }));
      $.on(disable, 'click', function () {
        $.set('Desktop Notifications', false);
        notice.close();
      });
      return notice = new Notice('info', el);
    }
  };

  function MediaControls() {
    return (h("div", { class: 'media-controls' },
      h("button", { "data-action": "rotateLeft" }, Icon.raw('rotateLeft')),
      h("button", { "data-action": "rotateRight" }, Icon.raw('rotateRight'))));
  }

  const Sound = {
    /** Add event listeners for videos with audio from a third party */
    setupSync(video, audio) {
      const syncTime = () => {
        video.currentTime = audio.currentTime % video.duration;
      };
      $.on(audio, 'playing play', () => {
        syncTime();
        video.play();
      });
      $.on(audio, 'seeked waiting', syncTime);
      $.on(audio, 'pause', () => {
        video.pause();
      });
      $.on(audio, 'ratechange', () => {
        video.currentTime = audio.currentTime;
        video.playbackRate = audio.playbackRate;
      });
      $.on(audio, 'waiting', () => {
        video.pause();
      });
      $.one(audio, 'canplay', () => {
        if (audio.currentTime < .1)
          video.currentTime = 0;
      });
    },
    setupSoundpost(el, file) {
      const soundUrlMatch = file.name.match(/\[sound=([^\]]+\.(?:webm|ogg|mp3|wav|m4a))]/i);
      if (!soundUrlMatch)
        return;
      let url;
      try {
        const src = decodeURIComponent(soundUrlMatch[1]);
        url = new URL(src.startsWith('http') ? src : `https://${src}`);
      } catch {
        return;
      }
      const audioEl = new Audio(url.href);
      Volume.setup(audioEl);
      if (el instanceof HTMLVideoElement) {
        Sound.setupSync(el, audioEl);
        el.controls = false;
      }
      audioEl.loop = true;
      audioEl.controls = Conf['Show Controls'];
      audioEl.autoplay = Conf.Autoplay;
      el.after(audioEl);
      file.audio = audioEl;
    }
  };

  var ImageExpand = {
    init() {
      if (!(this.enabled = Conf['Image Expansion'] && ['index', 'thread'].includes(g.VIEW))) {
        return;
      }
      this.EAI = $.el('a', {
        className: 'expand-all-shortcut',
        title: 'Expand All Images',
        href: 'javascript:;'
      });
      Icon.set(this.EAI, 'expand', 'Expand All Images');
      $.on(this.EAI, 'click', this.cb.toggleAll);
      Header.addShortcut('expand-all', this.EAI, 520);
      $.on(d, 'scroll visibilitychange', this.cb.playVideos);
      this.videoControls = $.el('span', { className: 'video-controls' });
      $.extend(this.videoControls, { innerHTML: " <a href=\"javascript:;\" title=\"You can also contract the video by dragging it to the left.\">contract</a>" });
      Callbacks.Post.push({
        name: 'Image Expansion',
        cb: this.node
      });
    },
    node() {
      if (!this.file || (!this.file.isImage && !this.file.isVideo)) {
        return;
      }
      $.on(this.file.thumbLink, 'click', ImageExpand.cb.toggle);
      if (this.isClone) {
        if (this.file.isExpanding) {
          // If we clone a post where the image is still loading,
          // make it loading in the clone too.
          ImageExpand.contract(this);
          ImageExpand.expand(this);
        } else if (this.file.isExpanded && this.file.isVideo) {
          Volume.setup(this.file.fullImage);
          ImageExpand.setupVideoCB(this);
          ImageExpand.setupVideo(this, !this.origin.file.fullImage?.paused || this.origin.file.wasPlaying, this.file.fullImage.controls);
        }
      } else if (ImageExpand.on && !this.isHidden && !this.isFetchedQuote &&
        (Conf['Expand spoilers'] || !this.file.isSpoiler) &&
        (Conf['Expand videos'] || !this.file.isVideo)) {
        ImageExpand.expand(this);
      }
    },
    cb: {
      toggle(e) {
        if ($.modifiedClick(e)) {
          return;
        }
        const post = Get.postFromNode(this);
        const { file } = post;
        if (file.isExpanded && ImageCommon.onControls(e)) {
          return;
        }
        e.preventDefault();
        if (!Conf.Autoplay && file.fullImage?.paused) {
          file.fullImage.play();
        } else {
          ImageExpand.toggle(post);
        }
      },
      toggleAll() {
        let func;
        $.event('CloseMenu');
        const threadRoot = Nav.getThread();
        const toggle = function (post) {
          const { file } = post;
          if (!file || (!file.isImage && !file.isVideo) || !doc.contains(post.nodes.root)) {
            return;
          }
          if (ImageExpand.on &&
            ((!Conf['Expand spoilers'] && file.isSpoiler) ||
              (!Conf['Expand videos'] && file.isVideo) ||
              (Conf['Expand from here'] && (Header.getTopOf(file.thumb) < 0)) ||
              (Conf['Expand thread only'] && (g.VIEW === 'index') && !threadRoot?.contains(file.thumb)))) {
            return;
          }
          return $.queueTask(func, post);
        };
        if (ImageExpand.on = $.hasClass(ImageExpand.EAI, 'expand-all-shortcut')) {
          ImageExpand.EAI.className = 'contract-all-shortcut';
          ImageExpand.EAI.title = 'Contract All Images';
          Icon.set(ImageExpand.EAI, 'shrink', 'Contract All Images');
          func = ImageExpand.expand;
        } else {
          ImageExpand.EAI.className = 'expand-all-shortcut';
          ImageExpand.EAI.title = 'Expand All Images';
          Icon.set(ImageExpand.EAI, 'expand', 'Expand All Images');
          func = ImageExpand.contract;
        }
        return g.posts.forEach(function (post) {
          for (post of [post, ...post.clones]) {
            toggle(post);
          }
        });
      },
      playVideos() {
        return g.posts.forEach(function (post) {
          for (post of [post, ...post.clones]) {
            var { file } = post;
            if (!file || !file.isVideo || !file.isExpanded) {
              continue;
            }
            var video = file.fullImage;
            var visible = ($.hasAudio(video) && !video.muted) || Header.isNodeVisible(video);
            if (visible && file.wasPlaying) {
              delete file.wasPlaying;
              video.play();
            } else if (!visible && !video.paused) {
              file.wasPlaying = true;
              video.pause();
            }
          }
        });
      },
      setFitness() {
        return $[this.checked ? 'addClass' : 'rmClass'](doc, this.name.toLowerCase().replace(/\s+/g, '-'));
      }
    },
    toggle(post) {
      if (!post.file.isExpanding && !post.file.isExpanded) {
        post.file.scrollIntoView = Conf['Scroll into view'];
        ImageExpand.expand(post);
        return;
      }
      ImageExpand.contract(post);
      if (Conf['Advance on contract']) {
        let next = post.nodes.root;
        while ((next = $.x("following::div[contains(@class,'postContainer')][1]", next))) {
          if (!$('.stub', next) && (next.offsetHeight !== 0)) {
            break;
          }
        }
        if (next) {
          Header.scrollTo(next);
        }
      }
    },
    contract(post) {
      let bottom, el, oldHeight, scrollY;
      const { file } = post;
      if (el = file.fullImage) {
        const top = Header.getTopOf(el);
        bottom = top + el.getBoundingClientRect().height;
        oldHeight = d.body.clientHeight;
        ({ scrollY } = window);
      }
      $.rmClass(post.nodes.root, 'expanded-image');
      $.rmClass(file.thumb, 'expanding');
      $.rm(file.videoControls);
      file.thumbLink.href = file.url;
      file.thumbLink.target = '_blank';
      for (var x of ['isExpanding', 'isExpanded', 'videoControls', 'wasPlaying', 'scrollIntoView']) {
        delete file[x];
      }
      if (!el) {
        return;
      }
      if (doc.contains(el)) {
        if (bottom <= 0) {
          // For images entirely above us, scroll to remain in place.
          window.scrollBy(0, ((scrollY - window.scrollY) + d.body.clientHeight) - oldHeight);
        } else {
          // For images not above us that would be moved above us, scroll to the thumbnail.
          Header.scrollToIfNeeded(post.nodes.root);
        }
        if (window.scrollX > 0) {
          // If we have scrolled right viewing an expanded image, return to the left.
          window.scrollBy(-window.scrollX, 0);
        }
      }
      $.off(el, 'error', ImageExpand.error);
      ImageCommon.pushCache(el);
      if (file.isVideo) {
        ImageCommon.pause(el);
        for (var eventName in ImageExpand.videoCB) {
          var cb = ImageExpand.videoCB[eventName];
          $.off(el, eventName, cb);
        }
      }
      if (Conf['Restart when Opened']) {
        ImageCommon.rewind(file.thumb);
      }
      delete file.fullImage;
      $.queueTask(function () {
        // XXX Work around Chrome/Chromium not firing mouseover on the thumbnail.
        if (file.isExpanding || file.isExpanded) {
          return;
        }
        $.rmClass(el, 'full-image');
        if (el.id) {
          return;
        }
        return $.rm(el);
      });
      if (file.audio) {
        file.audio.remove();
        delete file.audio;
        if (file.audioSlider) {
          file.audioSlider.remove();
          delete file.audioSlider;
        }
      }
      if (file.imageMediaControls) {
        $.rm(file.imageMediaControls);
        delete file.imageMediaControls;
      }
    },
    expand(post, src) {
      const { file } = post;
      const { thumb, thumbLink, isVideo } = file;
      // Do not expand images of hidden/filtered replies, or already expanded pictures.
      if (post.isHidden || file.isExpanding || file.isExpanded) {
        return;
      }
      let el;
      $.addClass(thumb, 'expanding');
      file.isExpanding = true;
      if (file.fullImage) {
        el = file.fullImage;
      } else if (ImageCommon.cache?.dataset.fileID === `${post.fullID}.${file.index}`) {
        el = (file.fullImage = ImageCommon.popCache());
        $.on(el, 'error', ImageExpand.error);
        if (Conf['Restart when Opened'] && (el.id !== 'ihover')) {
          ImageCommon.rewind(el);
        }
        el.removeAttribute('id');
      } else {
        el = (file.fullImage = $.el((isVideo ? 'video' : 'img')));
        el.dataset.fileID = `${post.fullID}.${file.index}`;
        $.on(el, 'error', ImageExpand.error);
        el.src = src || file.url;
      }
      el.className = 'full-image';
      $.after(thumb, el);
      if (isVideo) {
        // add contract link to file info
        if (!file.videoControls) {
          file.videoControls = ImageExpand.videoControls.cloneNode(true);
          $.add(file.text, file.videoControls);
        }
        // disable link to file so native controls can work
        thumbLink.removeAttribute('href');
        thumbLink.removeAttribute('target');
        el.loop = true;
        Volume.setup(el);
        ImageExpand.setupVideoCB(post);
      }
      if (!isVideo) {
        $.asap((() => el.naturalHeight), () => ImageExpand.completeExpand(post));
      } else if (el.readyState >= el.HAVE_METADATA) {
        ImageExpand.completeExpand(post);
      } else {
        $.on(el, 'loadedmetadata', () => ImageExpand.completeExpand(post));
      }
      if (Conf['Enable sound posts'] && Conf['Allow Sound']) {
        Sound.setupSoundpost(el, file);
      }
      if (Conf['Image Media Controls']) {
        const controls = $.el('div', MediaControls());
        const [y, x] = Conf.imageMediaControlsPosition.split('-');
        [...controls.childNodes][0].classList.add(`media-controls-${x}`, `media-controls-${y}`);
        const container = $.el('div', { className: 'media-controls-container' });
        const wrapper = $.el('div', { className: 'media-controls-wrapper' });
        file.imageMediaControls = container;
        $.add(container, [...controls.childNodes]);
        $.add(wrapper, el);
        $.add(container, wrapper);
        $.prepend(thumbLink, container);
        const totalRotationStates = 4;
        let currentRotationState = 0;
        let initialImageContentWidth = 0;
        function positiveModulo(a, n) {
          return ((a % n) + n) % n;
        }
        const compensateTransformedSize = () => {
          const rotationState = positiveModulo(currentRotationState, totalRotationStates);
          const { width, height } = wrapper.getBoundingClientRect();
          if (rotationState === 1 || rotationState === 3) {
            el.style.maxHeight = `${initialImageContentWidth}px`;
          } else {
            el.style.maxHeight = '';
          }
          Object.assign(container.style, { width: `${width}px`, height: `${height}px` });
        };
        const compensateTransformedSizeObserver = new ResizeObserver(compensateTransformedSize);
        // Capture width once the element is actually laid out, regardless of
        // whether expansion was triggered by click or keybinding.
        const initWidthObserver = new ResizeObserver((entries, obs) => {
          const w = entries[0]?.contentRect.width ?? 0;
          if (w > 0) {
            initialImageContentWidth = w;
            el.style.maxWidth = `${w}px`;
            el.style.maxHeight = '';
            obs.disconnect();
          }
        });
        initWidthObserver.observe(el);
        function updateRotation() {
          compensateTransformedSizeObserver.observe(wrapper);
          wrapper.setAttribute('rotation', String(positiveModulo(currentRotationState, totalRotationStates)));
          compensateTransformedSize();
        }
        const leftBtn = thumbLink.querySelector('[data-action="rotateLeft"]');
        const rightBtn = thumbLink.querySelector('[data-action="rotateRight"]');
        $.on(leftBtn, 'click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          currentRotationState--;
          updateRotation();
        });
        $.on(rightBtn, 'click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          currentRotationState++;
          updateRotation();
        });
      }
    },
    completeExpand(post) {
      const { file } = post;
      if (!file.isExpanding) {
        return;
      } // contracted before the image loaded
      const bottom = Header.getTopOf(file.thumb) + file.thumb.getBoundingClientRect().height;
      const oldHeight = d.body.clientHeight;
      const { scrollY } = window;
      $.addClass(post.nodes.root, 'expanded-image');
      $.rmClass(file.thumb, 'expanding');
      file.isExpanded = true;
      delete file.isExpanding;
      // Scroll to keep our place in the thread when images are expanded above us.
      if (doc.contains(post.nodes.root) && (bottom <= 0)) {
        window.scrollBy(0, ((scrollY - window.scrollY) + d.body.clientHeight) - oldHeight);
      }
      // Scroll to display full image.
      if (file.scrollIntoView) {
        delete file.scrollIntoView;
        const imageBottom = Math.min(doc.clientHeight - file.fullImage.getBoundingClientRect().bottom - 25, Header.getBottomOf(file.fullImage));
        if (imageBottom < 0) {
          window.scrollBy(0, Math.min(-imageBottom, Header.getTopOf(file.fullImage)));
        }
      }
      if (file.isVideo) {
        return ImageExpand.setupVideo(post, Conf.Autoplay, Conf['Show Controls']);
      }
    },
    setupVideo(post, playing, controls) {
      const { audio } = post.file;
      const fullImage = post.file.fullImage;
      if (!playing && !audio) {
        fullImage.controls = controls;
        return;
      }
      fullImage.controls = false;
      $.asap((() => doc.contains(fullImage)), function () {
        if (!d.hidden && Header.isNodeVisible(fullImage)) {
          fullImage.play();
        } else {
          post.file.wasPlaying = true;
        }
      });
      fullImage.controls = controls && !audio;
    },
    videoCB: (function () {
      // dragging to the left contracts the video
      let mousedown = false;
      return {
        mouseover() { return mousedown = false; },
        mousedown(e) { if (e.button === 0) {
          return mousedown = true;
        } },
        mouseup(e) { if (e.button === 0) {
          return mousedown = false;
        } },
        mouseout(e) { if (((e.buttons & 1) || mousedown) && (e.clientX <= this.getBoundingClientRect().left)) {
          return ImageExpand.toggle(Get.postFromNode(this));
        } }
      };
    })(),
    setupVideoCB(post) {
      for (var eventName in ImageExpand.videoCB) {
        var cb = ImageExpand.videoCB[eventName];
        $.on(post.file.fullImage, eventName, cb);
      }
      if (post.file.videoControls) {
        $.on(post.file.videoControls.firstElementChild, 'click', () => ImageExpand.toggle(post));
      }
    },
    error() {
      const post = Get.postFromNode(this);
      $.rm(this);
      delete post.file.fullImage;
      // Images can error:
      //  - before the image started loading.
      //  - after the image started loading.
      // Don't try to re-expand if it was already contracted.
      if (!post.file.isExpanding && !post.file.isExpanded) {
        return;
      }
      if (ImageCommon.decodeError(this, post.file)) {
        return ImageExpand.contract(post);
      }
      // Don't autoretry images from the archive.
      if (ImageCommon.isFromArchive(this)) {
        return ImageExpand.contract(post);
      }
      ImageCommon.error(this, post, post.file, 10 * SECOND, function (URL) {
        if (post.file.isExpanding || post.file.isExpanded) {
          ImageExpand.contract(post);
          if (URL) {
            return ImageExpand.expand(post, URL);
          }
        }
      });
    },
    menu: {
      init() {
        if (!ImageExpand.enabled) {
          return;
        }
        const el = $.el('span', {
          textContent: 'Image Expansion',
          className: 'image-expansion-link'
        });
        const { createSubEntry } = ImageExpand.menu;
        const subEntries = [];
        for (var name in Config.imageExpansion) {
          var conf = Config.imageExpansion[name];
          subEntries.push(createSubEntry(name, conf[1]));
        }
        return Header.menu.addEntry({
          el,
          order: 105,
          subEntries
        });
      },
      createSubEntry(name, desc) {
        const label = UI.checkbox(name, name);
        label.title = desc;
        const input = label.firstElementChild;
        if (['Fit width', 'Fit height'].includes(name)) {
          $.on(input, 'change', ImageExpand.cb.setFitness);
        }
        $.event('change', null, input);
        $.on(input, 'change', $.cb.checked);
        return { el: label };
      }
    }
  };

  class Post {
    toString() { return this.ID; }
    constructor(root, thread, board, flags = {}) {

      // Skip initialization for PostClone
      if (root === undefined && thread === undefined && board === undefined)
        return;
      this.root = root;
      this.thread = thread;
      this.board = board;
      $.extend(this, flags);
      this.ID = +root.id.match(/\d*$/)[0];
      this.postID = this.ID;
      this.threadID = this.thread.ID;
      this.boardID = this.board.ID;
      this.siteID = g.SITE.ID;
      this.fullID = `${this.board}.${this.ID}`;
      this.context = this;
      this.isReply = (this.ID !== this.threadID);
      root.dataset.fullID = this.fullID;
      this.nodes = this.parseNodes(root);
      if (!this.isReply) {
        this.thread.OP = this;
        for (var key of ['isSticky', 'isClosed', 'isArchived']) {
          var selector;
          if (selector = g.SITE.selectors.icons[key]) {
            this.thread[key] = !!$(selector, this.nodes.info);
          }
        }
        if (this.thread.isArchived) {
          this.thread.isClosed = true;
          this.thread.kill();
        }
      }
      const name = this.nodes.name?.textContent;
      const tripcode = this.nodes.tripcode?.textContent;
      this.info = {
        subject: this.nodes.subject?.textContent || undefined,
        name,
        email: this.nodes.email ? decodeURIComponent(this.nodes.email.href.replace(/^mailto:/, '')) : undefined,
        tripcode,
        uniqueID: this.nodes.uniqueID?.textContent,
        capcode: this.nodes.capcode?.textContent.replace('## ', ''),
        pass: this.nodes.pass?.title.match(/\d*$/)[0],
        flagCode: this.nodes.flag?.className.match(/flag-(\w+)/)?.[1].toUpperCase(),
        flagCodeTroll: this.nodes.flag?.className.match(/bfl-(\w+)/)?.[1].toUpperCase(),
        flag: this.nodes.flag?.title,
        date: this.nodes.date ? g.SITE.parseDate(this.nodes.date) : undefined,
      };
      g.SITE.parseInfo?.(this); // parses the tripcode
      // this now has to happen after the tripcode parsing
      this.info.nameBlock = Conf.Anonymize ? 'Anonymous' : `${this.info.name || ''} ${this.info.tripcode || ''}`.trim();
      if (this.info.capcode) {
        this.info.nameBlock += ` ## ${this.info.capcode}`;
      }
      if (this.info.uniqueID) {
        this.info.nameBlock += ` (ID: ${this.info.uniqueID})`;
      }
      this.parseComment();
      this.parseQuotes();
      this.parseFiles();
      this.isDead = false;
      this.isHidden = false;
      this.clones = [];

      if (g.posts.get(this.fullID)) {
        this.isRebuilt = true;
        this.clones = g.posts.get(this.fullID).clones;
        for (var clone of this.clones) {
          clone.origin = this;
        }
      }
      if (!this.isFetchedQuote && (this.ID > this.thread.lastPost)) {
        this.thread.lastPost = this.ID;
      }
      if (this.ID < this.thread.lastPost && g.VIEW === 'thread') {
        this.board.posts.insert(this.ID, this);
        this.thread.posts.insert(this.ID, this);
        g.posts.insert(this.fullID, this, key => +(key.split('.')[1]) < this.ID);
      } else {
        this.board.posts.push(this.ID, this);
        this.thread.posts.push(this.ID, this);
        g.posts.push(this.fullID, this);
      }
    }
    parseNodes(root) {
      const s = g.SITE.selectors;
      const post = $(s.post, root) || root;
      const info = $(s.infoRoot, post);
      const nodes = {
        root,
        bottom: this.isReply || !g.SITE.isOPContainerThread ? root : $(s.opBottom, root),
        post,
        info,
        comment: $(s.comment, post),
        quotelinks: [],
        archivelinks: [],
        embedlinks: [],
        backlinks: post.getElementsByClassName('backlink'),
        uniqueIDRoot: undefined,
        uniqueID: undefined,
      };
      for (var key in s.info) {
        var selector = s.info[key];
        nodes[key] = $(selector, info);
      }
      g.SITE.parseNodes?.(this, nodes);
      if (!nodes.uniqueIDRoot) {
        nodes.uniqueIDRoot = nodes.uniqueID;
      }
      return nodes;
    }
    parseComment() {
      // Merge text nodes and remove empty ones.
      let bq;
      this.nodes.comment.normalize();
      // Get the comment's text.
      // <br> -> \n
      // Remove:
      //   'Comment too long'...
      //   EXIF data. (/p/)
      this.nodes.commentClean = (bq = this.nodes.comment.cloneNode(true));
      g.SITE.cleanComment?.(bq);
      return this.info.comment = this.nodesToText(bq);
    }
    commentDisplay() {
      // Get the comment's text for display purposes (e.g. notifications, excerpts).
      // In addition to what's done in generating `@info.comment`, remove:
      //   Spoilers. (filter to '[spoiler]')
      //   Rolls. (/tg/, /qst/)
      //   Fortunes. (/s4s/)
      //   Preceding and following new lines.
      //   Trailing spaces.
      const bq = this.nodes.commentClean.cloneNode(true);
      if (!Conf['Remove Spoilers'] && !Conf['Reveal Spoilers']) {
        this.cleanSpoilers(bq);
      }
      g.SITE.cleanCommentDisplay?.(bq);
      return this.nodesToText(bq).trim().replace(/\s+$/gm, '');
    }
    commentOrig() {
      // Get the comment's text for reposting purposes.
      const bq = this.nodes.commentClean.cloneNode(true);
      g.SITE.insertTags?.(bq);
      return this.nodesToText(bq);
    }
    nodesToText(bq) {
      let node;
      let text = "";
      const nodes = $.X('.//br|.//text()', bq);
      let i = 0;
      while ((node = nodes.snapshotItem(i++))) {
        text += node.data || '\n';
      }
      return text;
    }
    cleanSpoilers(bq) {
      const spoilers = $$(g.SITE.selectors.spoiler, bq);
      for (var node of spoilers) {
        $.replace(node, $.tn('[spoiler]'));
      }
    }
    parseQuotes() {
      this.quotes = [];
      for (var quotelink of $$(g.SITE.selectors.quotelink, this.nodes.comment)) {
        this.parseQuote(quotelink);
      }
    }
    parseQuote(quotelink) {
      // Only add quotes that link to posts on an imageboard.
      // Don't add:
      //  - board links. (>>>/b/)
      //  - catalog links. (>>>/b/catalog or >>>/b/search)
      //  - rules links. (>>>/a/rules)
      //  - text-board quotelinks. (>>>/img/1234)
      const match = quotelink.href.match(g.SITE.regexp.quotelink);
      if (!match && (!this.isClone || !quotelink.dataset.postID)) {
        return;
      } // normal or resurrected quote
      this.nodes.quotelinks.push(quotelink);
      if (this.isClone) {
        return;
      }
      // ES6 Set when?
      const fullID = `${match[1]}.${match[3]}`;
      if (!this.quotes.includes(fullID))
        this.quotes.push(fullID);
    }
    parseFiles() {
      let file;
      this.files = [];
      const fileRoots = this.fileRoots();
      let index = 0;
      for (let docIndex = 0; docIndex < fileRoots.length; docIndex++) {
        var fileRoot = fileRoots[docIndex];
        if (file = this.parseFile(fileRoot)) {
          file.index = (index++);
          file.docIndex = docIndex;
          this.files.push(file);
        }
      }
      if (this.files.length) {
        return this.file = this.files[0];
      }
    }
    fileRoots() {
      if (g.SITE.selectors.multifile) {
        const roots = $$(g.SITE.selectors.multifile, this.nodes.root);
        if (roots.length) {
          return roots;
        }
      }
      return [this.nodes.root];
    }
    parseFile(fileRoot) {
      const file = { isDead: false };
      for (var key in g.SITE.selectors.file) {
        var selector = g.SITE.selectors.file[key];
        file[key] = $(selector, fileRoot);
      }
      file.thumbLink = file.thumb?.parentNode;
      if (!(file.text && file.link)) {
        return;
      }
      if (!g.SITE.parseFile(this, file)) {
        return;
      }
      $.extend(file, {
        url: file.link.href,
        isImage: $.isImage(file.link.href),
        isVideo: $.isVideo(file.link.href)
      });
      let size = +file.size.match(/[\d.]+/)[0];
      let unit = ['B', 'KB', 'MB', 'GB'].indexOf(file.size.match(/\w+$/)[0]);
      while (unit-- > 0) {
        size *= 1024;
      }
      file.sizeInBytes = size;
      return file;
    }
    kill(file = false, index = 0) {
      let strong;
      if (file) {
        if (this.isDead || this.files[index].isDead) {
          return;
        }
        this.files[index].isDead = true;
        $.addClass(this.nodes.root, 'deleted-file');
      } else {
        if (this.isDead) {
          return;
        }
        this.isDead = true;
        $.rmClass(this.nodes.root, 'deleted-file');
        $.addClass(this.nodes.root, 'deleted-post');
      }
      if (!(strong = $('strong.warning', this.nodes.info))) {
        strong = $.el('strong', { className: 'warning' });
        $.after($('input', this.nodes.info), strong);
      }
      strong.textContent = file ? '[File deleted]' : '[Deleted]';
      if (this.isClone) {
        return;
      }
      for (var clone of this.clones) {
        clone.kill(file, index);
      }
      if (file) {
        return;
      }
      // Get quotelinks/backlinks to this post
      // and paint them (Dead).
      for (var quotelink of Get.allQuotelinksLinkingTo(this)) {
        if (!$.hasClass(quotelink, 'deadlink')) {
          $.add(quotelink, Post.deadMark.cloneNode(true));
          $.addClass(quotelink, 'deadlink');
        }
      }
    }
    markAsFromArchive() {
      let strong = $('strong.warning', this.nodes.info);
      if (!strong) {
        strong = $.el('strong', { className: 'warning' });
        $.after($('input', this.nodes.info), strong);
      }
      strong.textContent = '[Deleted, restored from external archive]';
      $.addClass(this.nodes.root, 'from-archive');
      if (this.isClone) {
        return;
      }
      for (var clone of this.clones) {
        clone.markAsFromArchive();
      }
      for (var quotelink of Get.allQuotelinksLinkingTo(this)) {
        $.addClass(quotelink, 'from-archive-link');
      }
    }
    // XXX Workaround for 4chan's racing condition
    // giving us false-positive dead posts.
    resurrect() {
      this.isDead = false;
      $.rmClass(this.nodes.root, 'deleted-post', 'from-archive');
      const strong = $('strong.warning', this.nodes.info);
      // no false-positive files
      if (this.files.some(file => file.isDead)) {
        $.addClass(this.nodes.root, 'deleted-file');
        strong.textContent = '[File deleted]';
      } else {
        $.rm(strong);
      }
      if (this.isClone) {
        return;
      }
      for (var clone of this.clones) {
        clone.resurrect();
      }
      for (var quotelink of Get.allQuotelinksLinkingTo(this)) {
        if ($.hasClass(quotelink, 'deadlink')) {
          $.rm($('.qmark-dead', quotelink));
        }
        $.rmClass(quotelink, 'deadlink', 'from-archive-link');
      }
    }
    collect() {
      g.posts.rm(this.fullID);
      this.thread.posts.rm(this);
      this.board.posts.rm(this);
    }
    addClone(context, contractThumb) {
      // Callbacks may not have been run yet due to anti-browser-lock delay in Main.callbackNodesDB.
      Callbacks.Post.execute(this);
      return new PostClone(this, context, contractThumb);
    }
    rmClone(index) {
      this.clones.splice(index, 1);
      for (var clone of this.clones.slice(index)) {
        clone.nodes.root.dataset.clone = index++;
      }
    }
    setCatalogOP(isCatalogOP) {
      this.nodes.root.classList.toggle('catalog-container', isCatalogOP);
      this.nodes.root.classList.toggle('opContainer', !isCatalogOP);
      this.nodes.post.classList.toggle('catalog-post', isCatalogOP);
      this.nodes.post.classList.toggle('op', !isCatalogOP);
      this.nodes.post.style.left = (this.nodes.post.style.right = null);
    }
  }
  // because of a circular dependency $ might not be initialized, so we can't use $.el
  Post.deadMark = (() => {
    const el = document.createElement('span');
    // \u00A0 is nbsp
    el.textContent = '\u00A0(Dead)';
    el.className = 'qmark-dead';
    return el;
  })();
  class PostClone extends Post {
    constructor(origin, context, contractThumb) {
      super();
      this.isClone = true;
      let file, fileRoots, key;
      this.origin = origin;
      this.context = context;
      for (key of ['ID', 'postID', 'threadID', 'boardID', 'siteID', 'fullID', 'board', 'thread', 'info', 'quotes', 'isReply']) {
        // Copy or point to the origin's key value.
        this[key] = this.origin[key];
      }
      const { nodes } = this.origin;
      const root = contractThumb ? this.cloneWithoutVideo(nodes.root) : nodes.root.cloneNode(true);
      for (var node of [root, ...$$('[id]', root)]) {
        node.id += `_${PostClone.suffix}`;
      }
      PostClone.suffix++;
      // Remove inlined posts inside of this post.
      for (var inline of $$('.inline', root)) {
        $.rm(inline);
      }
      for (var inlined of $$('.inlined', root)) {
        $.rmClass(inlined, 'inlined');
      }
      this.nodes = this.parseNodes(root);
      root.hidden = false; // post hiding
      $.rmClass(root, 'forwarded'); // quote inlining
      $.rmClass(this.nodes.post, 'highlight'); // keybind navigation, ID highlighting
      // Remove catalog stuff.
      if (!this.isReply) {
        this.setCatalogOP(false);
        $.rm($('.catalog-link', this.nodes.post));
        $.rm($('.catalog-stats', this.nodes.post));
        $.rm($('.catalog-replies', this.nodes.post));
      }
      this.parseQuotes();
      this.quotes = [...this.origin.quotes];
      this.files = [];
      if (this.origin.files.length) {
        fileRoots = this.fileRoots();
      }
      for (var originFile of this.origin.files) {
        // Copy values, point to relevant elements.
        file = { ...originFile };
        var fileRoot = fileRoots[file.docIndex];
        for (key in g.SITE.selectors.file) {
          var selector = g.SITE.selectors.file[key];
          file[key] = $(selector, fileRoot);
        }
        file.thumbLink = file.thumb?.parentNode;
        if (file.thumbLink) {
          file.fullImage = $('.full-image', file.thumbLink);
        }
        file.videoControls = $('.video-controls', file.text);
        if (file.videoThumb) {
          file.thumb.muted = true;
        }
        this.files.push(file);
      }
      if (this.files.length) {
        this.file = this.files[0];
        // Contract thumbnails in quote preview
        if (this.file.thumb && contractThumb) {
          ImageExpand.contract(this);
        }
      }
      if (this.origin.isDead) {
        this.isDead = true;
      }
      root.dataset.clone = this.origin.clones.push(this) - 1;
      return this;
    }
    cloneWithoutVideo(node) {
      if ((node.tagName === 'VIDEO') && !node.dataset.md5) { // (exception for WebM thumbnails)
        return [];
      } else if ((node.nodeType === Node.ELEMENT_NODE) && $('video', node)) {
        const clone = node.cloneNode(false);
        for (var child of node.childNodes) {
          $.add(clone, this.cloneWithoutVideo(child));
        }
        return clone;
      } else {
        return node.cloneNode(true);
      }
    }
  }
  PostClone.suffix = 0;

  const Anonymize = {
      init() {
          if (!Conf.Anonymize) {
              return;
          }
          $.addClass(doc, 'anonymize');
      }
  };

  var ImageHover = {
    init() {
      if (!['index', 'thread'].includes(g.VIEW))
        return;
      if (Conf['Image Hover']) {
        Callbacks.Post.push({
          name: 'Image Hover',
          cb: this.node
        });
      }
      if (Conf['Image Hover in Catalog']) {
        Callbacks.CatalogThread.push({
          name: 'Image Hover',
          cb: this.catalogNode
        });
      }
    },
    node() {
      return this.files.filter(file => (file.isImage || file.isVideo) && file.thumb).map(file => $.on(file.thumb, 'mouseover', ImageHover.mouseover(this, file)));
    },
    catalogNode() {
      const file = this.thread.OP.files[0];
      if (!file || (!file.isImage && !file.isVideo))
        return;
      $.on(this.nodes.thumb, 'mouseover', ImageHover.mouseover(this.thread.OP, file));
    },
    mouseover(post, file) {
      return function (e) {
        if (!doc.contains(this))
          return;
        if (file.isExpanding || file.isExpanded || g.SITE.isThumbExpanded?.(file))
          return;
        let el;
        const error = ImageHover.error(post, file);
        if (ImageCommon.cache?.dataset.fileID === `${post.fullID}.${file.index}`) {
          el = ImageCommon.popCache();
          $.on(el, 'error', error);
        } else {
          el = $.el(file.isVideo ? 'video' : 'img');
          el.dataset.fileID = `${post.fullID}.${file.index}`;
          $.on(el, 'error', error);
          el.src = file.url;
        }
        if (Conf['Restart when Opened']) {
          ImageCommon.rewind(el);
          ImageCommon.rewind(this);
        }
        el.id = 'ihover';
        $.add(Header.hover, el);
        if (el instanceof HTMLVideoElement) {
          el.loop = true;
          el.controls = false;
          Volume.setup(el);
          if (Conf.Autoplay) {
            el.play();
            if (this.nodeName === 'VIDEO') {
              this.currentTime = el.currentTime;
            }
          }
        }
        let width, height;
        if (file.dimensions) {
          [width, height] = file.dimensions.split('x').map((x) => +x);
          const maxWidth = doc.clientWidth;
          const maxHeight = doc.clientHeight - UI.hover.padding;
          const scale = Math.min(1, maxWidth / width, maxHeight / height);
          width *= scale;
          height *= scale;
          el.style.maxWidth = `${width}px`;
          el.style.maxHeight = `${height}px`;
        }
        if (Conf['Enable sound posts'] && Conf['Allow Sound']) {
          Sound.setupSoundpost(el, file);
        }
        return UI.hover({
          root: this,
          el,
          latestEvent: e,
          endEvents: 'mouseout click',
          height,
          width,
          noRemove: true,
          cb() {
            $.off(el, 'error', error);
            ImageCommon.pushCache(el);
            ImageCommon.pause(el);
            $.rm(el);
            if (file.audio) {
              file.audio.remove();
              delete file.audio;
              if (file.audioSlider) {
                file.audioSlider.remove();
                delete file.audioSlider;
              }
            }
            return el.removeAttribute('style');
          }
        });
      };
    },
    error(post, file) {
      return function () {
        if (ImageCommon.decodeError(this, file))
          return;
        return ImageCommon.error(this, post, file, 3 * SECOND, URL => {
          if (URL) {
            return this.src = URL + (this.src === URL ? '?' + Date.now() : '');
          } else {
            return $.rm(this);
          }
        });
      };
    }
  };

  const ImageLoader = {
      init() {
          if (!['index', 'thread', 'archive'].includes(g.VIEW)) {
              return;
          }
          const replace = Conf['Replace JPG'] || Conf['Replace PNG'] || Conf['Replace GIF'] || Conf['Replace WEBM'];
          if (!Conf['Image Prefetching'] && !replace) {
              return;
          }
          Callbacks.Post.push({
              name: 'Image Replace',
              cb: this.node
          });
          $.on(d, 'PostsInserted', function () {
              if (ImageLoader.prefetchEnabled || replace) {
                  return g.posts.forEach(ImageLoader.prefetchAll);
              }
          });
          if (Conf['Replace WEBM']) {
              $.on(d, 'scroll visibilitychange 4chanXInitFinished PostsInserted', this.playVideos);
          }
          if (!Conf['Image Prefetching'] || !['index', 'thread'].includes(g.VIEW)) {
              return;
          }
          const el = $.el('a', {
              href: 'javascript:;',
              title: 'Prefetch Images',
              className: 'disabled',
          });
          Icon.set(el, 'bolt', 'Prefetch');
          $.on(el, 'click', this.toggle);
          Header.addShortcut('prefetch', el, 525);
      },
      node() {
          if (this.isClone) {
              return;
          }
          for (const file of this.files) {
              if (Conf['Replace WEBM'] && file.isVideo) {
                  ImageLoader.replaceVideo(this, file);
              }
              ImageLoader.prefetch(this, file);
          }
      },
      replaceVideo(post, file) {
          const { thumb } = file;
          const video = $.el('video', {
              preload: 'none',
              loop: true,
              muted: true,
              poster: thumb.src || thumb.dataset.src,
              textContent: thumb.alt,
              className: thumb.className
          });
          video.setAttribute('muted', 'muted');
          video.dataset.md5 = thumb.dataset.md5;
          for (const attr of ['height', 'width', 'maxHeight', 'maxWidth']) {
              video.style[attr] = thumb.style[attr];
          }
          video.src = file.url;
          $.replace(thumb, video);
          file.thumb = video;
          file.videoThumb = true;
      },
      prefetch(post, file) {
          let clone, type;
          const { isImage, isVideo, thumb, url } = file;
          if (file.isPrefetched || !(isImage || isVideo) || post.isHidden || post.thread.isHidden) {
              return;
          }
          if (isVideo) {
              type = 'WEBM';
          }
          else {
              type = url.match(/\.([^.]+)$/)?.[1].toUpperCase();
              if (type === 'JPEG') {
                  type = 'JPG';
              }
          }
          const replace = Conf[`Replace ${type}`] && !/spoiler/.test(thumb.src || thumb.dataset.src);
          if (!replace && !ImageLoader.prefetchEnabled) {
              return;
          }
          if ($.hasClass(doc, 'catalog-mode')) {
              return;
          }
          if (![post, ...post.clones].some(clone => doc.contains(clone.nodes.root))) {
              return;
          }
          file.isPrefetched = true;
          if (file.videoThumb) {
              for (clone of post.clones) {
                  clone.file.thumb.preload = 'auto';
              }
              thumb.preload = 'auto';
              // XXX Cloned video elements with poster in Firefox cause momentary display of image loading icon.
              if ($.engine === 'gecko') {
                  $.on(thumb, 'loadeddata', function () { return this.removeAttribute('poster'); });
              }
              return;
          }
          const el = $.el(isImage ? 'img' : 'video');
          if (isVideo) {
              el.preload = 'auto';
          }
          if (replace && isImage) {
              $.on(el, 'load', function () {
                  for (clone of post.clones) {
                      clone.file.thumb.src = url;
                  }
                  return thumb.src = url;
              });
          }
          return el.src = url;
      },
      prefetchAll(post) {
          for (const file of post.files) {
              ImageLoader.prefetch(post, file);
          }
      },
      toggle() {
          ImageLoader.prefetchEnabled = !ImageLoader.prefetchEnabled;
          this.classList.toggle('disabled', !ImageLoader.prefetchEnabled);
          if (ImageLoader.prefetchEnabled) {
              g.posts.forEach(ImageLoader.prefetchAll);
          }
      },
      playVideos() {
          // Special case: Quote previews are off screen when inserted into document, but quickly moved on screen.
          const qpClone = $.id('qp')?.firstElementChild;
          return g.posts.forEach(function (post) {
              for (post of [post, ...post.clones]) {
                  for (const file of post.files) {
                      if (file.videoThumb) {
                          const { thumb } = file;
                          if (Header.isNodeVisible(thumb) || (post.nodes.root === qpClone)) {
                              thumb.play();
                          }
                          else {
                              thumb.pause();
                          }
                      }
                  }
              }
          });
      }
  };

  const RevealSpoilers = {
      init() {
          if (!['index', 'thread', 'archive'].includes(g.VIEW) || !Conf['Reveal Spoiler Thumbnails']) {
              return;
          }
          Callbacks.Post.push({
              name: 'Reveal Spoiler Thumbnails',
              cb: this.node
          });
      },
      node() {
          if (this.isClone) {
              return;
          }
          for (const file of this.files) {
              if (file.thumb && file.isSpoiler) {
                  const { thumb } = file;
                  // Remove old width and height.
                  thumb.removeAttribute('style');
                  // Enforce thumbnail size if thumbnail is replaced.
                  thumb.style.maxHeight = (thumb.style.maxWidth = this.isReply ? '125px' : '250px');
                  if (thumb.src) {
                      thumb.src = file.thumbURL;
                  }
                  else {
                      thumb.dataset.src = file.thumbURL;
                  }
              }
          }
      }
  };

  const ArchiveLink = {
      init() {
          if ((g.SITE.software !== 'yotsuba') || !['index', 'thread'].includes(g.VIEW) || !Conf.Menu || !Conf['Archive Link']) {
              return;
          }
          const div = $.el('div', { textContent: 'Archive' });
          const entry = {
              el: div,
              order: 60,
              open({ ID, thread, board }) {
                  return !!Redirect.to('thread', { postID: ID, threadID: thread.ID, boardID: board.ID });
              },
              subEntries: []
          };
          for (var type of [
              ['Post', 'post'],
              ['Name', 'name'],
              ['Tripcode', 'tripcode'],
              ['Capcode', 'capcode'],
              ['Subject', 'subject'],
              ['Flag', 'country'],
              ['Filename', 'filename'],
              ['Image MD5', 'MD5']
          ]) {
              // Add a sub entry for each type.
              entry.subEntries.push(this.createSubEntry(type[0], type[1]));
          }
          Menu.menu.addEntry(entry);
      },
      createSubEntry(text, type) {
          const el = $.el('a', {
              textContent: text,
              target: '_blank'
          });
          const open = type === 'post' ?
              function ({ ID, thread, board }) {
                  el.href = Redirect.to('thread', { postID: ID, threadID: thread.ID, boardID: board.ID });
                  return true;
              }
              :
                  function (post) {
                      const typeParam = (type === 'country') && post.info.flagCodeTroll ?
                          'troll_country'
                          : type;
                      const value = type === 'country' ?
                          post.info.flagCode || post.info.flagCodeTroll?.toLowerCase()
                          : Filter.values(type, post)[0];
                      // We want to parse the exact same stuff as the filter does already.
                      if (!value) {
                          return false;
                      }
                      el.href = Redirect.to('search', {
                          boardID: post.board.ID,
                          type: typeParam,
                          value,
                          isSearch: true
                      });
                      return true;
                  };
          return {
              el,
              open
          };
      }
  };

  var CopyTextLink = {
      init() {
          if (!['index', 'thread'].includes(g.VIEW) || !Conf.Menu || !Conf['Copy Text Link']) {
              return;
          }
          const a = $.el('a', {
              className: 'copy-text-link',
              href: 'javascript:;',
              textContent: 'Copy Text'
          });
          $.on(a, 'click', CopyTextLink.copy);
          Menu.menu.addEntry({
              el: a,
              order: 12,
              open(post) {
                  CopyTextLink.text = (post.origin || post).commentOrig();
                  return true;
              }
          });
      },
      copy() {
          const el = $.el('textarea', {
              className: 'copy-text-element',
              value: CopyTextLink.text
          });
          $.add(d.body, el);
          el.select();
          try {
              d.execCommand('copy');
          }
          catch (error) { }
          $.rm(el);
      }
  };

  var DeleteLink = {
      auto: [dict(), dict()],
      init() {
          if (!['index', 'thread'].includes(g.VIEW) || !Conf.Menu || !Conf['Delete Link']) {
              return;
          }
          const div = $.el('div', {
              className: 'delete-link',
              textContent: 'Delete'
          });
          const postEl = $.el('a', {
              className: 'delete-post',
              href: 'javascript:;'
          });
          const fileEl = $.el('a', {
              className: 'delete-file',
              href: 'javascript:;'
          });
          this.nodes = {
              menu: div.firstChild,
              links: [postEl, fileEl]
          };
          const postEntry = {
              el: postEl,
              open() {
                  postEl.textContent = DeleteLink.linkText(false);
                  $.on(postEl, 'click', DeleteLink.toggle);
                  return true;
              }
          };
          const fileEntry = {
              el: fileEl,
              open({ file }) {
                  if (!file || file.isDead) {
                      return false;
                  }
                  fileEl.textContent = DeleteLink.linkText(true);
                  $.on(fileEl, 'click', DeleteLink.toggle);
                  return true;
              }
          };
          Menu.menu.addEntry({
              el: div,
              order: 40,
              open(post) {
                  if (post.isDead) {
                      return false;
                  }
                  DeleteLink.post = post;
                  DeleteLink.nodes.menu.textContent = DeleteLink.menuText();
                  DeleteLink.cooldown.start(post);
                  return true;
              },
              subEntries: [postEntry, fileEntry]
          });
      },
      menuText() {
          let seconds;
          if ((seconds = DeleteLink.cooldown.seconds[DeleteLink.post.fullID])) {
              return `Delete (${seconds})`;
          }
          else {
              return 'Delete';
          }
      },
      linkText(fileOnly) {
          let text = fileOnly ? 'File' : 'Post';
          if (DeleteLink.auto[+fileOnly][DeleteLink.post.fullID]) {
              text = `Deleting ${text.toLowerCase()}...`;
          }
          return text;
      },
      toggle() {
          const { post } = DeleteLink;
          const fileOnly = $.hasClass(this, 'delete-file');
          const auto = DeleteLink.auto[+fileOnly];
          if (auto[post.fullID]) {
              delete auto[post.fullID];
          }
          else {
              auto[post.fullID] = true;
          }
          this.textContent = DeleteLink.linkText(fileOnly);
          if (!DeleteLink.cooldown.seconds[post.fullID]) {
              DeleteLink.delete(post, fileOnly);
          }
      },
      delete(post, fileOnly) {
          const link = DeleteLink.nodes.links[+fileOnly];
          delete DeleteLink.auto[+fileOnly][post.fullID];
          if (post.fullID === DeleteLink.post.fullID) {
              $.off(link, 'click', DeleteLink.toggle);
          }
          const form = {
              mode: 'usrdel',
              onlyimgdel: fileOnly,
              pwd: QR.persona.getPassword()
          };
          form[+post.ID] = 'delete';
          return $.ajax($.id('delform').action.replace(`/${g.BOARD}/`, `/${post.board}/`), {
              responseType: 'document',
              withCredentials: true,
              onloadend() { return DeleteLink.load(link, post, fileOnly, this.response); },
              form: $.formData(form)
          });
      },
      load(link, post, fileOnly, resDoc) {
          let msg;
          if (!resDoc) {
              new Notice('warning', 'Connection error, please retry.', 20);
              if (post.fullID === DeleteLink.post.fullID) {
                  $.on(link, 'click', DeleteLink.toggle);
              }
              return;
          }
          link.textContent = DeleteLink.linkText(fileOnly);
          if (resDoc.title === '4chan - Banned') { // Ban/warn check
              const el = $.el('span', { innerHTML: "You can&#039;t delete posts because you are <a href=\"//www.4chan.org/banned\" target=\"_blank\">banned</a>." });
              return new Notice('warning', el, 20);
          }
          else if (msg = resDoc.getElementById('errmsg')) { // error!
              new Notice('warning', msg.textContent, 20);
              if (post.fullID === DeleteLink.post.fullID) {
                  $.on(link, 'click', DeleteLink.toggle);
              }
              if (QR.cooldown.data && Conf.Cooldown && /\bwait\b/i.test(msg.textContent)) {
                  DeleteLink.cooldown.start(post, 5);
                  DeleteLink.auto[+fileOnly][post.fullID] = true;
                  return DeleteLink.nodes.links[+fileOnly].textContent = DeleteLink.linkText(fileOnly);
              }
          }
          else {
              if (!fileOnly) {
                  QR.cooldown.delete(post);
              }
              if (resDoc.title === 'Updating index...') {
                  // We're 100% sure.
                  (post.origin || post).kill(fileOnly);
              }
              if (post.fullID === DeleteLink.post.fullID) {
                  return link.textContent = 'Deleted';
              }
          }
      },
      cooldown: {
          seconds: dict(),
          start(post, seconds) {
              // Already counting.
              if (DeleteLink.cooldown.seconds[post.fullID]) {
                  return;
              }
              if (!seconds) {
                  seconds = QR.cooldown.secondsDeletion(post);
              }
              if (seconds > 0) {
                  DeleteLink.cooldown.seconds[post.fullID] = seconds;
                  DeleteLink.cooldown.count(post);
              }
          },
          count(post) {
              if (post.fullID === DeleteLink.post.fullID) {
                  DeleteLink.nodes.menu.textContent = DeleteLink.menuText();
              }
              if ((DeleteLink.cooldown.seconds[post.fullID] > 0) && Conf.Cooldown) {
                  DeleteLink.cooldown.seconds[post.fullID]--;
                  setTimeout(DeleteLink.cooldown.count, 1000, post);
              }
              else {
                  delete DeleteLink.cooldown.seconds[post.fullID];
                  for (var fileOnly of [false, true]) {
                      if (DeleteLink.auto[+fileOnly][post.fullID]) {
                          DeleteLink.delete(post, fileOnly);
                      }
                  }
              }
          }
      }
  };

  const DownloadLink = {
      init() {
          if (!['index', 'thread'].includes(g.VIEW) || !Conf.Menu || !Conf['Download Link']) {
              return;
          }
          const a = $.el('a', {
              className: 'download-link',
              textContent: 'Download file'
          });
          // Specifying the filename with the download attribute only works for same-origin links.
          $.on(a, 'click', ImageCommon.download);
          Menu.menu.addEntry({
              el: a,
              order: 100,
              open({ file }) {
                  if (!file) {
                      return false;
                  }
                  a.href = file.url;
                  a.download = file.name;
                  return true;
              }
          });
      }
  };

  var ReportLink = {
      init() {
          if (!['index', 'thread'].includes(g.VIEW) || !Conf.Menu || !Conf['Report Link']) {
              return;
          }
          const a = $.el('a', {
              className: 'report-link',
              href: 'javascript:;',
              textContent: 'Report'
          });
          $.on(a, 'click', ReportLink.report);
          Menu.menu.addEntry({
              el: a,
              order: 10,
              open(post) {
                  ReportLink.url = `//sys.${location.hostname.split('.')[1]}.org/${post.board}/imgboard.php?mode=report&no=${post}`;
                  if (d.cookie.indexOf('pass_enabled=1') >= 0) {
                      ReportLink.dims = 'width=350,height=275';
                  }
                  else {
                      ReportLink.dims = 'width=400,height=550';
                  }
                  return true;
              }
          });
      },
      report() {
          const { url, dims } = ReportLink;
          const id = Date.now();
          const set = `toolbar=0,scrollbars=1,location=0,status=1,menubar=0,resizable=1,${dims}`;
          window.open(url, id, set);
      }
  };

  var AntiAutoplay = {
      init() {
          if (!Conf['Disable Autoplaying Sounds']) {
              return;
          }
          $.addClass(doc, 'anti-autoplay');
          for (var audio of $$('audio[autoplay]', doc)) {
              this.stop(audio);
          }
          window.addEventListener('loadstart', (e => this.stop(e.target)), true);
          Callbacks.Post.push({
              name: 'Disable Autoplaying Sounds',
              cb: this.node
          });
          $.ready(() => this.process(d.body));
      },
      stop(audio) {
          if (!audio.autoplay) {
              return;
          }
          audio.pause();
          audio.autoplay = false;
          if (audio.controls) {
              return;
          }
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
          if (window.getComputedStyle(el).display === 'none') {
              el.style.display = 'block';
          }
          $.addClass(el, 'autoplay-removed');
      }
  };

  const Banner = {
      init() {
          if (Conf['Custom Board Titles']) {
              this.db = new DataBoard('customTitles', null, true);
          }
          $.asap((() => d.body), () => $.asap((() => $('hr')), Banner.ready));
          // Let 4chan's JS load the banner if enabled; otherwise, load it ourselves.
          if (g.BOARD.ID !== 'f') {
              return PageReady.ready(() => $.queueTask(Banner.load));
          }
      },
      ready() {
          const banner = $(".boardBanner");
          const { children } = banner;
          if ((g.VIEW === 'thread') && Conf['Remove Thread Excerpt']) {
              Banner.setTitle(children[1].textContent);
          }
          children[0].title = "Click to change";
          $.on(children[0], 'click', Banner.cb.toggle);
          if (Conf['Custom Board Titles']) {
              Banner.custom(children[1]);
              if (children[2]) {
                  return Banner.custom(children[2]);
              }
          }
      },
      load() {
          const bannerCnt = $.id('bannerCnt');
          if (!bannerCnt.firstChild) {
              const img = $.el('img', {
                  alt: '4chan',
                  src: '//s.4cdn.org/image/title/' + bannerCnt.dataset.src
              });
              $.add(bannerCnt, img);
          }
      },
      setTitle(title) {
          if (Unread.title) {
              Unread.title = title;
              Unread.update();
          }
          else {
              d.title = title;
          }
      },
      cb: {
          toggle() {
              if (!Banner.choices?.length) {
                  Banner.choices = Conf.knownBanners.split(',').slice();
              }
              const i = Math.floor(Banner.choices.length * Math.random());
              const banner = Banner.choices.splice(i, 1);
              return $('img', this.parentNode).src = `//s.4cdn.org/image/title/${banner}`;
          },
          click(e) {
              var _a, _b;
              if (!e.ctrlKey && !e.metaKey) {
                  return;
              }
              (_a = Banner.original)[_b = this.className] ?? (_a[_b] = this.cloneNode(true));
              this.contentEditable = true;
              for (const br of $$('br', this)) {
                  $.replace(br, $.tn('\n'));
              }
              this.focus();
          },
          keydown(e) {
              e.stopPropagation();
              if (!e.shiftKey && (e.keyCode === 13)) {
                  return this.blur();
              }
          },
          blur() {
              for (const br of $$('br', this)) {
                  $.replace(br, $.tn('\n'));
              }
              if (this.textContent = this.textContent.replace(/\n*$/, '')) {
                  this.contentEditable = false;
                  return Banner.db.set({
                      boardID: g.BOARD.ID,
                      threadID: this.className,
                      val: {
                          title: this.textContent,
                          orig: Banner.original[this.className].textContent
                      }
                  });
              }
              else {
                  $.rmAll(this);
                  $.add(this, [...Banner.original[this.className].cloneNode(true).childNodes]);
                  return Banner.db.delete({
                      boardID: g.BOARD.ID,
                      threadID: this.className
                  });
              }
          }
      },
      original: dict(),
      custom(child) {
          let data;
          const { className } = child;
          child.title = `Ctrl/\u2318+click to edit board ${className.slice(5).toLowerCase()}`;
          child.spellcheck = false;
          for (const event of ['click', 'keydown', 'blur']) {
              $.on(child, event, Banner.cb[event]);
          }
          if (data = Banner.db.get({ boardID: g.BOARD.ID, threadID: className })) {
              if (Conf['Persistent Custom Board Titles'] || (data.orig === child.textContent)) {
                  Banner.original[className] = child.cloneNode(true);
                  return child.textContent = data.title;
              }
              else {
                  return Banner.db.delete({ boardID: g.BOARD.ID, threadID: className });
              }
          }
      }
  };

  const Flash = {
      init() {
          if ((g.BOARD.ID === 'f') && Conf['Enable Native Flash Embedding']) {
              $.ready(Flash.initReady);
          }
      },
      initReady() {
          if ($.hasStorage) {
              $.global('initFlash');
          }
          else {
              if (g.VIEW === 'thread') {
                  $.global('setThreadId');
              }
              $.global('initFlashNoStorage');
          }
      }
  };

  var Fourchan = {
      init() {
          if ((g.SITE.software !== 'yotsuba') || !['index', 'thread', 'archive'].includes(g.VIEW)) {
              return;
          }
          BoardConfig.ready(this.initBoard);
          PageReady.ready(this.initReady);
      },
      initBoard() {
          if (g.BOARD.config.code_tags) {
              $.on(window, 'prettyprint:cb', function (e) {
                  let post, pre;
                  if (!(post = g.posts.get(e.detail.ID))) {
                      return;
                  }
                  if (!(pre = $$('.prettyprint', post.nodes.comment)[+e.detail.i])) {
                      return;
                  }
                  if (!$.hasClass(pre, 'prettyprinted')) {
                      pre.innerHTML = e.detail.html;
                      return $.addClass(pre, 'prettyprinted');
                  }
              });
              $.global('fourChanPrettyPrintListener');
              Callbacks.Post.push({
                  name: 'Parse [code] tags',
                  cb: Fourchan.code
              });
              g.posts.forEach(function (post) {
                  if (post.callbacksExecuted) {
                      return Callbacks.Post.execute(post, ['Parse [code] tags'], true);
                  }
              });
              ExpandComment.callbacks.push(Fourchan.code);
          }
          if (g.BOARD.config.math_tags) {
              $.global('fourChanMathjaxListener');
              Callbacks.Post.push({
                  name: 'Parse [math] tags',
                  cb: Fourchan.math
              });
              g.posts.forEach(function (post) {
                  if (post.callbacksExecuted) {
                      return Callbacks.Post.execute(post, ['Parse [math] tags'], true);
                  }
              });
              ExpandComment.callbacks.push(Fourchan.math);
          }
      },
      // Disable 4chan's ID highlighting (replaced by IDHighlight) and reported post hiding.
      initReady() {
          $.global('disable4chanIdHl');
      },
      code() {
          if (this.isClone) {
              return;
          }
          return $.ready(() => {
              const iterable = $$('.prettyprint', this.nodes.comment);
              for (let i = 0; i < iterable.length; i++) {
                  var pre = iterable[i];
                  if (!$.hasClass(pre, 'prettyprinted')) {
                      $.event('prettyprint', { ID: this.fullID, i, html: pre.innerHTML }, window);
                  }
              }
          });
      },
      math() {
          let wbrs;
          if (!/\[(math|eqn)\]/.test(this.nodes.comment.textContent)) {
              return;
          }
          // XXX <wbr> tags frequently break MathJax; remove them.
          if ((wbrs = $$('wbr', this.nodes.comment)).length) {
              for (var wbr of wbrs) {
                  $.rm(wbr);
              }
              this.nodes.comment.normalize();
          }
          var cb = () => {
              if (!doc.contains(this.nodes.comment)) {
                  return;
              }
              $.off(d, 'PostsInserted', cb);
              $.event('mathjax', null, this.nodes.comment);
          };
          $.on(d, 'PostsInserted', cb);
          return cb();
      }
  };

  var IDColor = {
      init() {
          if (!['index', 'thread'].includes(g.VIEW) || !Conf['Color User IDs']) {
              return;
          }
          this.ids = dict();
          this.ids.Heaven = [0, 0, 0, '#fff'];
          Callbacks.Post.push({
              name: 'Color User IDs',
              cb: this.node
          });
      },
      node() {
          let span, uid;
          if (this.isClone || !((uid = this.info.uniqueID) && (span = this.nodes.uniqueID))) {
              return;
          }
          const rgb = IDColor.ids[uid] || IDColor.compute(uid);
          // Style the damn node.
          const { style } = span;
          style.color = rgb[3];
          style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
          return $.addClass(span, 'painted');
      },
      compute(uid) {
          // Convert chars to integers, bitshift and math to create a larger integer
          // Create a nice string of binary
          const hash = g.SITE.uidColor ? g.SITE.uidColor(uid) : parseInt(uid, 16);
          // Convert binary string to numerical values with bitshift and '&' truncation.
          const rgb = [
              (hash >> 16) & 0xFF,
              (hash >> 8) & 0xFF,
              hash & 0xFF
          ];
          // Weight color luminance values, assign a font color that should be readable.
          rgb.push($.luma(rgb) > 125 ?
              '#000'
              :
                  '#fff');
          // Cache.
          return this.ids[uid] = rgb;
      }
  };

  var IDHighlight = {
      init() {
          if (!['index', 'thread'].includes(g.VIEW)) {
              return;
          }
          Callbacks.Post.push({
              name: 'Highlight by User ID',
              cb: this.node
          });
      },
      uniqueID: null,
      node() {
          if (this.nodes.uniqueIDRoot) {
              $.on(this.nodes.uniqueIDRoot, 'click', IDHighlight.click(this));
          }
          if (this.nodes.capcode) {
              $.on(this.nodes.capcode, 'click', IDHighlight.click(this));
          }
          if (!this.isClone) {
              IDHighlight.set(this);
          }
      },
      set(post) {
          const match = (post.info.uniqueID || post.info.capcode) === IDHighlight.uniqueID;
          return $[match ? 'addClass' : 'rmClass'](post.nodes.post, 'highlight');
      },
      click(post) {
          return function () {
              const uniqueID = post.info.uniqueID || post.info.capcode;
              IDHighlight.uniqueID = IDHighlight.uniqueID === uniqueID ? null : uniqueID;
              g.posts.forEach(IDHighlight.set);
          };
      }
  };

  var IDPostCount = {
      init() {
          if ((g.VIEW !== 'thread') || !Conf['Count Posts by ID']) {
              return;
          }
          Callbacks.Thread.push({
              name: 'Count Posts by ID',
              cb() { return IDPostCount.thread = this; }
          });
          Callbacks.Post.push({
              name: 'Count Posts by ID',
              cb: this.node
          });
      },
      node() {
          if (this.nodes.uniqueID && (this.thread === IDPostCount.thread)) {
              $.on(this.nodes.uniqueID, 'mouseover', IDPostCount.count);
          }
      },
      count() {
          const { uniqueID } = Get.postFromNode(this).info;
          let n = 0;
          IDPostCount.thread.posts.forEach(function (post) {
              if (post.info.uniqueID === uniqueID) {
                  return n++;
              }
          });
          return this.title = `${n} post${n === 1 ? '' : 's'} by this ID`;
      }
  };

  const ModContact = {
      init() {
          if ((g.SITE.software !== 'yotsuba') || !['index', 'thread'].includes(g.VIEW)) {
              return;
          }
          Callbacks.Post.push({
              name: 'Mod Contact Links',
              cb: this.node
          });
      },
      node() {
          let moved;
          if (this.isClone || !$.hasOwn(ModContact.specific, this.info.capcode)) {
              return;
          }
          const links = $.el('span', { className: 'contact-links brackets-wrap' });
          $.extend(links, ModContact.template(this.info.capcode));
          $.after(this.nodes.capcode, links);
          if ((moved = this.info.comment.match(/This thread was moved to >>>\/(\w+)\//)) && $.hasOwn(ModContact.moveNote, moved[1])) {
              const moveNote = $.el('div', { className: 'move-note' });
              $.extend(moveNote, ModContact.moveNote[moved[1]]);
              $.add(this.nodes.post, moveNote);
          }
      },
      template(capcode) {
          return { innerHTML: "<a href=\"https://www.4chan.org/feedback\" target=\"_blank\">feedback</a>" + (ModContact.specific[capcode]()).innerHTML };
      },
      specific: {
          Mod() { return { innerHTML: " <a href=\"https://www.4chan-x.net/4chan-irc.html\" target=\"_blank\">IRC</a>" }; },
          Manager() { return ModContact.specific.Mod(); },
          Developer() { return { innerHTML: " <a href=\"https://github.com/4chan\" target=\"_blank\">github</a>" }; },
          Admin() { return { innerHTML: " <a href=\"https://x.com/hiroyuki_ni\" target=\"_blank\">twitter</a>" }; }
      },
      moveNote: {}
  };

  const NormalizeURL = {
      init() {
          if (!Conf['Normalize URL']) {
              return;
          }
          let pathname = location.pathname.split(/\/+/);
          if (g.SITE.software === 'yotsuba') {
              switch (g.VIEW) {
                  case 'thread':
                      pathname[2] = 'thread';
                      pathname = pathname.slice(0, 4);
                      break;
                  case 'index':
                      pathname = pathname.slice(0, 3);
                      break;
              }
          }
          pathname = pathname.join('/');
          if (location.pathname !== pathname) {
              return history.replaceState(history.state, '', `${location.protocol}//${location.host}${pathname}${location.hash}`);
          }
      }
  };

  const PostJumper = {
      init() {
          if (!Conf['Unique ID and Capcode Navigation'] || !['index', 'thread'].includes(g.VIEW)) {
              return;
          }
          this.buttons = this.makeButtons();
          Icon.set(this.buttons.firstChild, 'arrowUpLong');
          Icon.set(this.buttons.lastChild, 'arrowDownLong');
          Callbacks.Post.push({
              name: 'Post Jumper',
              cb: this.node
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
              PostJumper.addButtons(this, 'uniqueID');
          }
          if (this.nodes.capcode) {
              PostJumper.addButtons(this, 'capcode');
          }
      },
      addButtons(post, type) {
          const value = post.info[type];
          const buttons = PostJumper.buttons.cloneNode(true);
          $.extend(buttons.dataset, { type, value });
          $.after(post.nodes[type + (type === 'capcode' ? '' : 'Root')], buttons);
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
          const { type, value } = jumper.dataset;
          const xpath = `span[contains(@class,"postJumper") and @data-value="${value}" and @data-type="${type}"]`;
          const axis = dir < 0 ? 'preceding' : 'following';
          let node = jumper;
          let wrapped = false;
          while (true) {
              node = $.x(`${axis}::${xpath}`, node);
              if (!node) {
                  if (wrapped) {
                      return null;
                  } // full circle
                  node = $.x(`(//${xpath})[${dir < 0 ? 'last()' : '1'}]`);
                  wrapped = true;
                  if (!node) {
                      return null;
                  }
              }
              if (node === jumper) {
                  return null;
              } // full circle
              if (node.getBoundingClientRect().height) {
                  return node;
              }
          }
      },
      makeButtons() {
          const charPrev = '\u23EB';
          const charNext = '\u23EC';
          const classPrev = 'prev';
          const classNext = 'next';
          const span = $.el('span', { className: 'postJumper' });
          $.extend(span, { innerHTML: "<a href=\"javascript:;\" class=\"" + E(classPrev) + "\">" + E(charPrev) + "</a><a href=\"javascript:;\" class=\"" + E(classNext) + "\">" + E(charNext) + "</a>" });
          return span;
      },
      scroll(fromJumper, toJumper) {
          const prevPos = fromJumper.getBoundingClientRect().top;
          const destPos = toJumper.getBoundingClientRect().top;
          window.scrollBy(0, destPos - prevPos);
      }
  };

  const PSA = {
      init() {
      }
  };

  var PSAHiding = {
      init() {
          if (!Conf['Announcement Hiding'] || !g.SITE.selectors.psa) {
              return;
          }
          $.addClass(doc, 'hide-announcement');
          $.onExists(doc, g.SITE.selectors.psa, this.setup);
          $.ready(function () {
              if (!$(g.SITE.selectors.psa)) {
                  return $.rmClass(doc, 'hide-announcement');
              }
          });
      },
      setup(psa) {
          let btn, hr;
          PSAHiding.psa = psa;
          PSAHiding.text = psa.dataset.utc ?? psa.innerHTML;
          if (g.SITE.selectors.psaTop && (hr = $(g.SITE.selectors.psaTop)?.previousElementSibling) && (hr.nodeName === 'HR')) {
              PSAHiding.hr = hr;
          }
          PSAHiding.content = $.el('div');
          const entry = {
              el: $.el('a', {
                  textContent: 'Show announcement',
                  className: 'show-announcement',
                  href: 'javascript:;'
              }),
              order: 50,
              open() { return psa.hidden; }
          };
          Header.menu.addEntry(entry);
          $.on(entry.el, 'click', PSAHiding.toggle);
          PSAHiding.btn = (btn = $.el('a', {
              title: 'Mark announcement as read and hide.',
              className: 'hide-announcement-button',
              href: 'javascript:;',
              textContent: '➖︎',
          }));
          Icon.set(btn, 'squareMinus');
          $.on(btn, 'click', PSAHiding.toggle);
          if (psa.firstChild?.tagName === 'HR') {
              $.after(psa.firstChild, btn);
          }
          else {
              $.prepend(psa, btn);
          }
          PSAHiding.sync(Conf.hiddenPSAList);
          $.rmClass(doc, 'hide-announcement');
          return $.sync('hiddenPSAList', PSAHiding.sync);
      },
      toggle() {
          const hide = $.hasClass(this, 'hide-announcement-button');
          const set = function (hiddenPSAList) {
              if (hide) {
                  return hiddenPSAList[g.SITE.ID] = PSAHiding.text;
              }
              else {
                  return delete hiddenPSAList[g.SITE.ID];
              }
          };
          set(Conf.hiddenPSAList);
          PSAHiding.sync(Conf.hiddenPSAList);
          return $.get('hiddenPSAList', Conf.hiddenPSAList, function ({ hiddenPSAList }) {
              set(hiddenPSAList);
              return $.set('hiddenPSAList', hiddenPSAList);
          });
      },
      sync(hiddenPSAList) {
          const { psa, content } = PSAHiding;
          psa.hidden = (hiddenPSAList[g.SITE.ID] === PSAHiding.text);
          // Remove content to prevent autoplaying sounds from hidden announcements
          if (psa.hidden) {
              $.add(content, [...psa.childNodes]);
          }
          else {
              $.add(psa, [...content.childNodes]);
          }
          if (PSAHiding.hr)
              PSAHiding.hr.hidden = psa.hidden;
      }
  };

  const RemoveSpoilers = {
      init() {
          if (Conf['Reveal Spoilers']) {
              $.addClass(doc, 'reveal-spoilers');
          }
          if (!Conf['Remove Spoilers']) {
              return;
          }
          Callbacks.Post.push({
              name: 'Reveal Spoilers',
              cb: this.node
          });
          if (g.VIEW === 'archive') {
              return $.ready(() => RemoveSpoilers.unspoiler($.id('arc-list')));
          }
      },
      node() {
          return RemoveSpoilers.unspoiler(this.nodes.comment);
      },
      unspoiler(el) {
          const spoilers = $$(g.SITE.selectors.spoiler, el);
          for (const spoiler of spoilers) {
              const span = $.el('span', { className: 'removed-spoiler' });
              $.replace(spoiler, span);
              $.add(span, [...spoiler.childNodes]);
          }
      }
  };

  var ThreadLinks = {
      init() {
          if ((g.VIEW !== 'index') || !Conf['Open Threads in New Tab']) {
              return;
          }
          Callbacks.Post.push({
              name: 'Thread Links',
              cb: this.node
          });
          Callbacks.CatalogThread.push({
              name: 'Thread Links',
              cb: this.catalogNode
          });
      },
      node() {
          if (this.isReply || this.isClone) {
              return;
          }
          ThreadLinks.process(this.nodes.reply);
      },
      catalogNode() {
          ThreadLinks.process(this.nodes.thumb.parentNode);
      },
      process(link) {
          return link.target = '_blank';
      }
  };

  const Tinyboard = {
      init() {
          if (g.SITE.software !== 'tinyboard') {
              return;
          }
          if (g.VIEW === 'thread') {
              return PageReady.ready(() => $.global("initTinyBoard", { boardID: g.BOARD.ID, threadID: g.THREADID.toString() }));
          }
      }
  };

  var MarkNewIPs = {
      init() {
          if ((g.SITE.software !== 'yotsuba') || (g.VIEW !== 'thread') || !Conf['Mark New IPs']) {
              return;
          }
          Callbacks.Thread.push({
              name: 'Mark New IPs',
              cb: this.node
          });
      },
      node() {
          MarkNewIPs.ipCount = this.ipCount;
          MarkNewIPs.postCount = this.posts.keys.length;
          $.on(d, 'ThreadUpdate', MarkNewIPs.onUpdate);
      },
      onUpdate(e) {
          let fullID;
          const { ipCount, postCount, newPosts, deletedPosts } = e.detail;
          if (ipCount == null) {
              return;
          }
          switch (ipCount - MarkNewIPs.ipCount) {
              case (postCount - MarkNewIPs.postCount) + deletedPosts.length:
                  var i = MarkNewIPs.ipCount;
                  for (fullID of newPosts) {
                      MarkNewIPs.markNew(g.posts.get(fullID), ++i);
                  }
                  break;
              case -deletedPosts.length:
                  for (fullID of newPosts) {
                      MarkNewIPs.markOld(g.posts.get(fullID));
                  }
                  break;
          }
          MarkNewIPs.ipCount = ipCount;
          MarkNewIPs.postCount = postCount;
      },
      markNew(post, ipCount) {
          const suffix = ((Math.floor(ipCount / 10)) % 10) === 1 ?
              'th' : ['st', 'nd', 'rd'][(ipCount % 10) - 1] || 'th'; // fuck switches
          const counter = $.el('span', {
              className: 'ip-counter',
              textContent: `(${ipCount})`
          });
          post.nodes.nameBlock.title = `This is the ${ipCount}${suffix} IP in the thread.`;
          $.add(post.nodes.nameBlock, [$.tn(' '), counter]);
          $.addClass(post.nodes.root, 'new-ip');
      },
      markOld(post) {
          post.nodes.nameBlock.title = 'Not the first post from this IP.';
          $.addClass(post.nodes.root, 'old-ip');
      }
  };

  var ThreadStats = {
      postCount: 0,
      fileCount: 0,
      postIndex: 0,
      init() {
          let sc;
          if ((g.VIEW !== 'thread') || !Conf['Thread Stats']) {
              return;
          }
          if (Conf['Page Count in Stats']) {
              this[g.SITE.isPrunedByAge?.(g.BOARD) ? 'showPurgePos' : 'showPage'] = true;
          }
          const statsHTML = { innerHTML: "<span id=\"post-count\">?</span> / <span id=\"file-count\">?</span>" + ((Conf["IP Count in Stats"] && g.SITE.hasIPCount) ? " / <span id=\"ip-count\">?</span>" : "") + ((Conf["Page Count in Stats"]) ? " / <span id=\"page-count\">?</span>" : "") };
          let statsTitle = 'Posts / Files';
          if (Conf['IP Count in Stats'] && g.SITE.hasIPCount) {
              statsTitle += ' / IPs';
          }
          if (Conf['Page Count in Stats']) {
              if (this.showPurgePos) {
                  statsTitle += ' / Purge Position';
              }
              else {
                  statsTitle += ' / Page';
                  if (Conf['Purge Position'])
                      statsTitle += ' (Purge Position)';
              }
          }
          if (Conf['Updater and Stats in Header']) {
              this.dialog = (sc = $.el('span', {
                  id: 'thread-stats',
                  title: statsTitle
              }));
              $.extend(sc, statsHTML);
              Header.addShortcut('stats', sc, 200);
          }
          else {
              this.dialog = (sc = UI.dialog('thread-stats', { innerHTML: "<div class=\"move\" title=\"" + E(statsTitle) + "\">" + (statsHTML).innerHTML + "</div>" }));
              $.addClass(doc, 'float');
              $.ready(() => $.add(d.body, sc));
          }
          this.postCountEl = $('#post-count', sc);
          this.fileCountEl = $('#file-count', sc);
          this.ipCountEl = $('#ip-count', sc);
          this.pageCountEl = $('#page-count', sc);
          if (this.pageCountEl) {
              $.on(this.pageCountEl, 'click', ThreadStats.fetchPage);
          }
          Callbacks.Thread.push({
              name: 'Thread Stats',
              cb: this.node
          });
      },
      node() {
          ThreadStats.thread = this;
          ThreadStats.count();
          ThreadStats.update();
          ThreadStats.fetchPage();
          $.on(d, 'PostsInserted', () => $.queueTask(ThreadStats.onPostsInserted));
          $.on(d, 'ThreadUpdate', ThreadStats.onUpdate);
      },
      count() {
          const { posts } = ThreadStats.thread;
          const n = posts.keys.length;
          for (let i = ThreadStats.postIndex, end = n; i < end; i++) {
              var post = posts.get(posts.keys[i]);
              if (!post.isFetchedQuote) {
                  ThreadStats.postCount++;
                  ThreadStats.fileCount += post.files.length;
              }
          }
          ThreadStats.postIndex = n;
      },
      onUpdate(e) {
          if (e.detail[404]) {
              return;
          }
          const { postCount, fileCount } = e.detail;
          $.extend(ThreadStats, { postCount, fileCount });
          ThreadStats.postIndex = ThreadStats.thread.posts.keys.length;
          ThreadStats.update();
          if (ThreadStats.showPage && (ThreadStats.pageCountEl.textContent !== '1')) {
              return ThreadStats.fetchPage();
          }
      },
      onPostsInserted() {
          if (ThreadStats.thread.posts.keys.length <= ThreadStats.postIndex) {
              return;
          }
          ThreadStats.count();
          ThreadStats.update();
          if (ThreadStats.showPage && (ThreadStats.pageCountEl.textContent !== '1')) {
              ThreadStats.fetchPage();
          }
      },
      update() {
          const { thread, postCountEl, fileCountEl, ipCountEl } = ThreadStats;
          postCountEl.textContent = ThreadStats.postCount;
          fileCountEl.textContent = ThreadStats.fileCount;
          if (ipCountEl) {
              if (thread.ipCount) {
                  ipCountEl.textContent = thread.ipCount;
              }
              else if (g.BOARD?.config.user_ids) {
                  const IDs = new Set();
                  g.posts.forEach(post => {
                      IDs.add(post.info.uniqueID);
                  });
                  ipCountEl.textContent = IDs.size;
              }
              else {
                  ipCountEl.textContent = '?';
              }
          }
          postCountEl.classList.toggle('warning', (thread.postLimit && !thread.isSticky));
          fileCountEl.classList.toggle('warning', (thread.fileLimit && !thread.isSticky));
      },
      fetchPage() {
          if (!ThreadStats.pageCountEl) {
              return;
          }
          clearTimeout(ThreadStats.timeout);
          if (ThreadStats.thread.isDead) {
              ThreadStats.pageCountEl.textContent = 'Dead';
              $.addClass(ThreadStats.pageCountEl, 'warning');
              return;
          }
          ThreadStats.timeout = setTimeout(ThreadStats.fetchPage, Conf['Purge Position'] && ThreadStats.pageCountEl.classList.contains('warning') ? (5 * SECOND) : (2 * MINUTE));
          $.whenModified(g.SITE.urls.threadsListJSON(ThreadStats.thread), 'ThreadStats', ThreadStats.onThreadsLoad);
      },
      onThreadsLoad() {
          if (this.status === 200) {
              let page, thread;
              if (ThreadStats.showPurgePos) {
                  let purgePos = 1;
                  for (page of this.response) {
                      for (thread of page.threads) {
                          if (thread.no < ThreadStats.thread.ID) {
                              purgePos++;
                          }
                      }
                  }
                  ThreadStats.pageCountEl.textContent = purgePos;
                  ThreadStats.pageCountEl.classList.toggle('warning', (purgePos === 1));
              }
              else {
                  let nThreads;
                  let i = (nThreads = 0);
                  for (page of this.response) {
                      nThreads += page.threads.length;
                  }
                  for (let pageNum = 0; pageNum < this.response.length; pageNum++) {
                      page = this.response[pageNum];
                      for (thread of page.threads) {
                          if (thread.no === ThreadStats.thread.ID) {
                              ThreadStats.pageCountEl.textContent = pageNum + 1;
                              const hasWarning = (i >= (nThreads - this.response[0].threads.length));
                              ThreadStats.pageCountEl.classList.toggle('warning', hasWarning);
                              if (hasWarning && Conf['Purge Position']) {
                                  ThreadStats.pageCountEl.textContent += ` (${nThreads - i - 1})`;
                              }
                              ThreadStats.lastPageUpdate = new Date(thread.last_modified * SECOND);
                              ThreadStats.retry();
                              return;
                          }
                          i++;
                      }
                  }
              }
          }
          else if (this.status === 304) {
              ThreadStats.retry();
          }
      },
      retry() {
          // If thread data is stale (modification date given < time of last post), try again.
          // Skip this on vichan sites due to sage posts not updating modification time in threads.json.
          if (!ThreadStats.showPage ||
              (ThreadStats.pageCountEl.textContent === '1') ||
              !!g.SITE.threadModTimeIgnoresSage ||
              (ThreadStats.thread.posts.get(ThreadStats.thread.lastPost).info.date <= ThreadStats.lastPageUpdate)) {
              return;
          }
          clearTimeout(ThreadStats.timeout);
          ThreadStats.timeout = setTimeout(ThreadStats.fetchPage, 5 * SECOND);
      }
  };

  var QuoteInline = {
      init() {
          if (!['index', 'thread'].includes(g.VIEW) || !Conf['Quote Inlining']) {
              return;
          }
          if (Conf['Comment Expansion']) {
              ExpandComment.callbacks.push(this.node);
          }
          Callbacks.Post.push({
              name: 'Quote Inlining',
              cb: this.node
          });
      },
      node() {
          const { process } = QuoteInline;
          const { isClone } = this;
          for (var link of this.nodes.quotelinks.concat([...this.nodes.backlinks], this.nodes.archivelinks)) {
              process(link, isClone);
          }
      },
      process(link, clone) {
          if (Conf['Quote Hash Navigation']) {
              if (!clone) {
                  $.after(link, QuoteInline.qiQuote(link, $.hasClass(link, 'filtered')));
              }
          }
          $.on(link, 'click', QuoteInline.toggle);
      },
      qiQuote(link, hidden) {
          let name = "hashlink";
          if (hidden) {
              name += " filtered";
          }
          return $.el('a', {
              className: name,
              textContent: '#',
              href: link.href
          });
      },
      toggle(e) {
          if ($.modifiedClick(e)) {
              return;
          }
          const { boardID, threadID, postID } = Get.postDataFromLink(this);
          if (Conf['Inline Cross-thread Quotes Only'] && (g.VIEW === 'thread') && g.posts.get(`${boardID}.${postID}`)?.nodes.root.offsetParent) {
              return;
          } // exists and not hidden
          if ($.hasClass(doc, 'catalog-mode')) {
              return;
          }
          e.preventDefault();
          const quoter = Get.postFromNode(this);
          const { context } = quoter;
          if ($.hasClass(this, 'inlined')) {
              QuoteInline.rm(this, boardID, threadID, postID, context);
          }
          else {
              if ($.x(`ancestor::div[@data-full-i-d='${boardID}.${postID}']`, this)) {
                  return;
              }
              QuoteInline.add(this, boardID, threadID, postID, context, quoter);
          }
          this.classList.toggle('inlined');
      },
      findRoot(quotelink, isBacklink) {
          if (isBacklink) {
              return $.x('ancestor::*[parent::*[contains(@class,"post")]][1]', quotelink);
          }
          else {
              return $.x('ancestor-or-self::*[parent::blockquote][1]', quotelink);
          }
      },
      add(quotelink, boardID, threadID, postID, context, quoter) {
          let post;
          const isBacklink = $.hasClass(quotelink, 'backlink');
          const inline = $.el('div', { className: 'inline' });
          inline.dataset.fullID = `${boardID}.${postID}`;
          const root = QuoteInline.findRoot(quotelink, isBacklink);
          $.after(root, inline);
          const qroot = $.x('ancestor::*[contains(@class,"postContainer")][1]', root);
          $.addClass(qroot, 'hasInline');
          new Fetcher(boardID, threadID, postID, inline, quoter);
          if (!((post = g.posts.get(`${boardID}.${postID}`)) &&
              (context.thread === post.thread))) {
              return;
          }
          // Hide forward post if it's a backlink of a post in this thread.
          // Will only unhide if there's no inlined backlinks of it anymore.
          if (isBacklink && Conf['Forward Hiding']) {
              $.addClass(post.nodes.root, 'forwarded');
              post.forwarded++ || (post.forwarded = 1);
          }
          // Decrease the unread count if this post
          // is in the array of unread posts.
          if (!Unread.posts) {
              return;
          }
          Unread.readSinglePost(post);
      },
      rm(quotelink, boardID, threadID, postID, context) {
          let el;
          let inlined;
          const isBacklink = $.hasClass(quotelink, 'backlink');
          // Select the corresponding inlined quote, and remove it.
          let root = QuoteInline.findRoot(quotelink, isBacklink);
          root = $.x(`following-sibling::div[@data-full-i-d='${boardID}.${postID}'][1]`, root);
          const qroot = $.x('ancestor::*[contains(@class,"postContainer")][1]', root);
          const { parentNode } = root;
          $.rm(root);
          $.event('PostsRemoved', null, parentNode);
          if (!$('.inline', qroot)) {
              $.rmClass(qroot, 'hasInline');
          }
          // Stop if it only contains text.
          if (!(el = root.firstElementChild)) {
              return;
          }
          // Dereference clone.
          const post = g.posts.get(`${boardID}.${postID}`);
          post.rmClone(el.dataset.clone);
          // Decrease forward count and unhide.
          if (Conf['Forward Hiding'] &&
              isBacklink &&
              (context.thread === g.threads.get(`${boardID}.${threadID}`)) &&
              !--post.forwarded) {
              delete post.forwarded;
              $.rmClass(post.nodes.root, 'forwarded');
          }
          // Repeat.
          while ((inlined = $('.inlined', el))) {
              ({ boardID, threadID, postID } = Get.postDataFromLink(inlined));
              QuoteInline.rm(inlined, boardID, threadID, postID, context);
              $.rmClass(inlined, 'inlined');
          }
      }
  };

  var QuoteBacklink = {
      // Backlinks appending need to work for:
      //  - previous, same, and following posts.
      //  - existing and yet-to-exist posts.
      //  - newly fetched posts.
      //  - in copies.
      // XXX what about order for fetched posts?
      //
      // First callback creates backlinks and add them to relevant containers.
      // Second callback adds relevant containers into posts.
      // This is is so that fetched posts can get their backlinks,
      // and that as much backlinks are appended in the background as possible.
      containers: dict(),
      init() {
          if (!['index', 'thread'].includes(g.VIEW) || !Conf['Quote Backlinks']) {
              return;
          }
          // Add a class to differentiate when backlinks are at
          // the top (default) or bottom of a post
          if (this.bottomBacklinks = Conf['Bottom Backlinks']) {
              $.addClass(doc, 'bottom-backlinks');
          }
          Callbacks.Post.push({
              name: 'Quote Backlinking Part 1',
              cb: this.firstNode
          });
          Callbacks.Post.push({
              name: 'Quote Backlinking Part 2',
              cb: this.secondNode
          });
      },
      firstNode() {
          if (this.isClone || !this.quotes.length || this.isRebuilt) {
              return;
          }
          const markYours = Conf['Mark Quotes of You'] && QuoteYou.isYou(this);
          const a = $.el('a', {
              href: g.SITE.Build.postURL(this.board.ID, this.thread.ID, this.ID),
              className: this.isHidden ? 'filtered backlink' : 'backlink',
              textContent: Conf.backlink.replace(/%(?:id|%)/g, x => ({ '%id': this.ID, '%%': '%' })[x])
          });
          if (markYours) {
              $.add(a, QuoteYou.mark.cloneNode(true));
          }
          for (var quote of this.quotes) {
              var post;
              var containers = [QuoteBacklink.getContainer(quote)];
              if ((post = g.posts.get(quote)) && post.nodes.backlinkContainer) {
                  // Don't add OP clones when OP Backlinks is disabled,
                  // as the clones won't have the backlink containers.
                  for (var clone of post.clones) {
                      containers.push(clone.nodes.backlinkContainer);
                  }
              }
              for (var container of containers) {
                  var link = a.cloneNode(true);
                  var nodes = container.firstChild ? [$.tn(' '), link] : [link];
                  if (Conf['Quote Previewing']) {
                      $.on(link, 'mouseover', QuotePreview.mouseover);
                  }
                  if (Conf['Quote Inlining']) {
                      $.on(link, 'click', QuoteInline.toggle);
                      if (Conf['Quote Hash Navigation']) {
                          var hash = QuoteInline.qiQuote(link, $.hasClass(link, 'filtered'));
                          nodes.push(hash);
                      }
                  }
                  $.add(container, nodes);
              }
          }
      },
      secondNode() {
          if (this.isClone && (this.origin.isReply || Conf['OP Backlinks'])) {
              this.nodes.backlinkContainer = $('.container', this.nodes.post);
              return;
          }
          // Don't backlink the OP.
          if (!this.isReply && !Conf['OP Backlinks']) {
              return;
          }
          const container = QuoteBacklink.getContainer(this.fullID);
          this.nodes.backlinkContainer = container;
          if (QuoteBacklink.bottomBacklinks) {
              $.add(this.nodes.post, container);
          }
          else {
              $.add(this.nodes.info, container);
          }
      },
      getContainer(id) {
          return this.containers[id] ||
              (this.containers[id] = $.el('span', { className: 'container' }));
      }
  };

  var QuoteCT = {
      init() {
          if (!['index', 'thread'].includes(g.VIEW) || !Conf['Mark Cross-thread Quotes']) {
              return;
          }
          if (Conf['Comment Expansion']) {
              ExpandComment.callbacks.push(this.node);
          }
          // \u00A0 is nbsp
          this.mark = $.el('span', {
              textContent: '\u00A0(Cross-thread)',
              className: 'qmark-ct'
          });
          Callbacks.Post.push({
              name: 'Mark Cross-thread Quotes',
              cb: this.node
          });
      },
      node() {
          // Stop there if it's a clone of a post in the same thread.
          if (this.isClone && (this.thread === this.context.thread)) {
              return;
          }
          const { board, thread } = this.context;
          for (var quotelink of this.nodes.quotelinks) {
              var { boardID, threadID } = Get.postDataFromLink(quotelink);
              if (!threadID) {
                  continue;
              } // deadlink
              if (this.isClone) {
                  $.rm($('.qmark-ct', quotelink));
              }
              if ((boardID === board.ID) && (threadID !== thread.ID)) {
                  $.add(quotelink, QuoteCT.mark.cloneNode(true));
              }
          }
      }
  };

  var QuoteOP = {
      init() {
          if (!['index', 'thread'].includes(g.VIEW) || !Conf['Mark OP Quotes']) {
              return;
          }
          if (Conf['Comment Expansion']) {
              ExpandComment.callbacks.push(this.node);
          }
          // \u00A0 is nbsp
          this.mark = $.el('span', {
              textContent: '\u00A0(OP)',
              className: 'qmark-op'
          });
          Callbacks.Post.push({
              name: 'Mark OP Quotes',
              cb: this.node
          });
      },
      node() {
          // Stop there if it's a clone of a post in the same thread.
          let i, quotelink, quotes;
          if (this.isClone && (this.thread === this.context.thread)) {
              return;
          }
          // Stop there if there's no quotes in that post.
          if (!(quotes = this.quotes).length) {
              return;
          }
          const { quotelinks } = this.nodes;
          // rm (OP) from cross-thread quotes.
          if (this.isClone && quotes.includes(this.thread.fullID)) {
              i = 0;
              while ((quotelink = quotelinks[i++])) {
                  $.rm($('.qmark-op', quotelink));
              }
          }
          const { fullID } = this.context.thread;
          // add (OP) to quotes quoting this context's OP.
          if (!quotes.includes(fullID)) {
              return;
          }
          i = 0;
          while ((quotelink = quotelinks[i++])) {
              var { boardID, postID } = Get.postDataFromLink(quotelink);
              if (`${boardID}.${postID}` === fullID) {
                  $.add(quotelink, QuoteOP.mark.cloneNode(true));
              }
          }
      }
  };

  const QuoteStrikeThrough = {
      init() {
          if (!['index', 'thread'].includes(g.VIEW) ||
              (!Conf['Reply Hiding Buttons'] && (!Conf.Menu || !Conf['Reply Hiding Link']) && !Conf.Filter)) {
              return;
          }
          Callbacks.Post.push({
              name: 'Strike-through Quotes',
              cb: this.node
          });
      },
      node() {
          if (this.isClone) {
              return;
          }
          for (const quotelink of this.nodes.quotelinks) {
              const { boardID, postID } = Get.postDataFromLink(quotelink);
              if (g.posts.get(`${boardID}.${postID}`)?.isHidden) {
                  $.addClass(quotelink, 'filtered');
              }
          }
      }
  };

  var Quotify = {
      init() {
          if (!['index', 'thread'].includes(g.VIEW) || !Conf['Resurrect Quotes']) {
              return;
          }
          $.addClass(doc, 'resurrect-quotes');
          if (Conf['Comment Expansion']) {
              ExpandComment.callbacks.push(this.node);
          }
          Callbacks.Post.push({
              name: 'Resurrect Quotes',
              cb: this.node
          });
      },
      node() {
          if (this.isClone) {
              this.nodes.archivelinks = $$('a.linkify.quotelink', this.nodes.comment);
              return;
          }
          for (const link of $$('a.linkify, .deadlink', this.nodes.comment)) {
              if (link.classList.contains('deadlink')) {
                  Quotify.parseDeadlink.call(this, link);
              }
              else {
                  Quotify.parseArchivelink.call(this, link);
              }
          }
      },
      parseArchivelink(link) {
          let m;
          if (!(m = link.pathname.match(/^\/([^/]+)\/thread\/S?(\d+)\/?$/))) {
              return;
          }
          // if (['boards.4chan.org', 'boards.4channel.org'].includes(link.hostname)) { return; }
          if (link.hostname === 'boards.4chan.org') {
              return;
          }
          const boardID = m[1];
          const threadID = m[2];
          const postID = link.hash.match(/^#[pq]?(\d+)$|$/)[1] || threadID;
          if (Redirect.to('post', { boardID, postID })) {
              $.addClass(link, 'quotelink');
              $.extend(link.dataset, { boardID, threadID, postID });
              return this.nodes.archivelinks.push(link);
          }
      },
      parseDeadlink(deadlink) {
          let a, m, post, postID;
          if ($.hasClass(deadlink.parentNode, 'prettyprint')) {
              // Don't quotify deadlinks inside code tags, un-`span` them.
              // This won't be necessary once 4chan stops quotifying inside code tags:
              // https://github.com/4chan/4chan-JS/issues/77
              Quotify.fixDeadlink(deadlink);
              return;
          }
          const quote = deadlink.textContent;
          if (!(postID = quote.match(/\d+$/)?.[0])) {
              return;
          }
          if (postID[0] === '0') {
              // Fix quotelinks that start with a `0`.
              Quotify.fixDeadlink(deadlink);
              return;
          }
          const boardID = (m = quote.match(/^>>>\/([a-z\d]+)/)) ? m[1] : this.board.ID;
          const quoteID = `${boardID}.${postID}`;
          if (post = g.posts.get(quoteID)) {
              if (!post.isDead) {
                  // Don't (Dead) when quotifying in an archived post, and we know the post still exists.
                  a = $.el('a', {
                      href: g.SITE.Build.postURL(boardID, post.thread.ID, postID),
                      className: 'quotelink',
                      textContent: quote
                  });
              }
              else {
                  // Replace the .deadlink span if we can redirect.
                  a = $.el('a', {
                      href: g.SITE.Build.postURL(boardID, post.thread.ID, postID),
                      className: 'quotelink deadlink',
                      textContent: quote
                  });
                  $.add(a, Post.deadMark.cloneNode(true));
                  $.extend(a.dataset, { boardID, threadID: post.thread.ID, postID });
              }
          }
          else {
              const redirect = Redirect.to('thread', { boardID, threadID: 0, postID });
              const fetchable = Redirect.to('post', { boardID, postID });
              if (redirect || fetchable) {
                  // Replace the .deadlink span if we can redirect or fetch the post.
                  a = $.el('a', {
                      href: redirect || 'javascript:;',
                      className: 'deadlink',
                      textContent: quote
                  });
                  $.add(a, Post.deadMark.cloneNode(true));
                  if (fetchable) {
                      // Make it function as a normal quote if we can fetch the post.
                      $.addClass(a, 'quotelink');
                      $.extend(a.dataset, { boardID, postID });
                  }
              }
          }
          if (!this.quotes.includes(quoteID)) {
              this.quotes.push(quoteID);
          }
          if (!a) {
              $.add(deadlink, Post.deadMark.cloneNode(true));
              return;
          }
          $.replace(deadlink, a);
          if ($.hasClass(a, 'quotelink')) {
              return this.nodes.quotelinks.push(a);
          }
      },
      fixDeadlink(deadlink) {
          let el;
          if (!(el = deadlink.previousSibling) || (el.nodeName === 'BR')) {
              const green = $.el('span', { className: 'quote' });
              $.before(deadlink, green);
              $.add(green, deadlink);
          }
          $.replace(deadlink, [...deadlink.childNodes]);
      }
  };

  // import CaptchaReplace from "../Posting/Captcha.replace";
  // import Metadata from "../Images/Metadata";
  var Main = {
      init() {
          // Return if the url is exactly https://www.4chan.org, this is only the home page which has a cloudflare checking
          // system which breaks this script. Keep it in the includes so it can be found on greasy fork.
          // __cf is also a cloudflare check page
          if (location.hostname === 'www.4chan.org' || location.search.includes("__cf"))
              return;
          // XXX dwb userscripts extension reloads scripts run at document-start when replaceState/pushState is called.
          // XXX Firefox reinjects WebExtension content scripts when extension is updated / reloaded.
          try {
              let w = window;

              if (`${meta.name} antidup` in w) {
                  return;
              }
              w[`${meta.name} antidup`] = true;
          }
          catch (error) { }
          // Don't run inside ad iframes.
          try {
              if (window.frameElement && ['', 'about:blank'].includes(window.frameElement.src)) {
                  return;
              }
          }
          catch (error1) { }
          // Detect multiple copies of 4chan X
          if (doc && $.hasClass(doc, 'fourchan-x')) {
              return;
          }
          $.asap(docSet, function () {
              $.addClass(doc, 'fourchan-xt', 'fourchan-x', 'seaweedchan');
              if ($.engine)
                  $.addClass(doc, `ua-${$.engine}`);
              BoardConfig.ready(() => {
                  if (g.BOARD?.config.ws_board != null)
                      $.addClass(doc, g.BOARD.config.ws_board ? 'ws' : 'nws');
              });
          });
          try {
              $.global('exposeVersion', { version: g.VERSION, buildDate: g.VERSION_DATE.getTime().toString() });
          }
          catch (e) {
              console.error(e);
          }
          $.on(d, '4chanXInitFinished', function () {
              if (Main.expectInitFinished) {
                  return delete Main.expectInitFinished;
              }
              else {
                  new Notice('error', `Error: Multiple copies of ${meta.name} or 4chan X are enabled.`);
                  return $.addClass(doc, 'tainted');
              }
          });
          // Detect "mounted" event from Kissu
          var mountedCB = function () {
              d.removeEventListener('mounted', mountedCB, true);
              Main.isMounted = true;
              return Main.mountedCBs.map((cb) => (() => {
                  try {
                      return cb();
                  }
                  catch (error2) { }
              })());
          };
          d.addEventListener('mounted', mountedCB, true);
          // Flatten default values from Config into Conf
          var flatten = function (parent, obj) {
              if (obj instanceof Array) {
                  Conf[parent] = dict.clone(obj[0]);
              }
              else if (typeof obj === 'object') {
                  for (var key in obj) {
                      flatten(key, obj[key]);
                  }
              }
              else { // string or number
                  Conf[parent] = obj;
              }
          };
          // XXX Remove document-breaking ad
          if (location.hostname === 'boards.4chan.org') {
              $.asap(docSet, () => $.onExists(doc, 'iframe[srcdoc]', $.rm));
          }
          flatten(null, Config);
          for (var db of DataBoard.keys) {
              Conf[db] = dict();
          }
          Conf['customTitles'] = dict.clone({ '4chan.org': { boards: {} } });
          Conf.boardConfig = { boards: dict() };
          Conf.archives = Redirect.archives;
          Conf.selectedArchives = dict();
          Conf.cooldowns = dict();
          Conf['Index Sort'] = dict();
          for (let i = 0; i < 2; i++) {
              Conf[`Last Long Reply Thresholds ${i}`] = dict();
          }
          Conf.siteProperties = dict();
          // XXX old key names
          Conf['Except Archives from Encryption'] = false;
          Conf['JSON Navigation'] = true;
          Conf['Oekaki Links'] = true;
          Conf['Show Name and Subject'] = false;
          Conf['QR Shortcut'] = true;
          Conf['Bottom QR Link'] = true;
          Conf['Toggleable Thread Watcher'] = true;
          Conf.siteSoftware = '';
          Conf['Use Faster Image Host'] = 'true';
          Conf['Captcha Fixes'] = true;
          Conf.captchaServiceDomain = '';
          Conf.captchaServiceKey = dict();
          // Enforce JS whitelist
          if (
          // /\.4chan(?:nel)?\.org$/.test(location.hostname) &&
          /\.4chan\.org$/.test(location.hostname) &&
              !SW.yotsuba.regexp.pass.test(location.href) &&
              !SW.yotsuba.regexp.captcha.test(location.href) &&
              !$$('script:not([src])', d).filter(s => /this\[/.test(s.textContent)).length) {
              ($.getSync || $.get)({ 'jsWhitelist': Conf.jsWhitelist }, ({ jsWhitelist }) => {
                  const parsedList = jsWhitelist.replace(/^#.*$/mg, '').replace(/[\s;]+/g, ' ').trim();
                  if (/\S/.test(parsedList))
                      $.addCSP(`script-src ${parsedList}`);
              });
          }
          // Get saved values as items
          const items = dict();
          for (const key in Conf)
              items[key] = undefined;
          items.previousversion = undefined;
          ($.getSync || $.get)(items, function (items) {
              $.asap(docSet, function () {
                  // Don't hide the local storage warning behind a settings panel.
                  if ($.cantSet) ;
                  else if ((items.previousversion == null)) {
                      Main.isFirstRun = true;
                      PageReady.ready(function () {
                          $.set('previousversion', g.VERSION);
                          return Settings.open();
                      });
                      // Migrate old settings
                  }
                  else if (items.previousversion !== g.VERSION) {
                      Main.upgrade(items);
                  }
                  // Combine default values with saved values
                  for (const key in Conf) {
                      Conf[key] = items[key] ?? Conf[key];
                  }
                  Site.init(Main.initFeatures);
              });
          });
      },
      upgrade(items) {
          const { previousversion } = items;
          const changes = Settings.upgrade(items, previousversion);
          items.previousversion = (changes.previousversion = g.VERSION);
          return $.set(changes, function () {
              if (items['Show Updated Notifications'] ?? true) {
                  const el = $.el('span', { innerHTML: `${meta.name} has been updated to <a href="${meta.changelog}" target="_blank">version ${g.VERSION}</a>.` });
                  return new Notice('info', el, 15);
              }
          });
      },
      parseURL(site = g.SITE, url = location) {
          const r = {};
          if (!site) {
              return r;
          }
          r.siteID = site.ID;
          if (site.isBoardlessPage?.(url)) {
              return r;
          }
          const pathname = url.pathname.split(/\/+/);
          r.boardID = pathname[1];
          if (site.isFileURL(url)) {
              r.VIEW = 'file';
          }
          else if (site.isAuxiliaryPage?.(url)) ;
          else if (['thread', 'res'].includes(pathname[2])) {
              r.VIEW = 'thread';
              r.threadID = (r.THREADID = +pathname[3].replace(/\.\w+$/, ''));
          }
          else if ((pathname[2] === 'archive') && (pathname[3] === 'res')) {
              r.VIEW = 'thread';
              r.threadID = (r.THREADID = +pathname[4].replace(/\.\w+$/, ''));
              r.threadArchived = true;
          }
          else if (/^(?:catalog|archive)(?:\.\w+)?$/.test(pathname[2])) {
              r.VIEW = pathname[2].replace(/\.\w+$/, '');
          }
          else if (/^(?:index|\d*)(?:\.\w+)?$/.test(pathname[2])) {
              r.VIEW = 'index';
          }
          return r;
      },
      initFeatures() {
          $.global('initMain');
          Main.jsEnabled = $.hasClass(doc, 'js-enabled');
          $.extend(g, Main.parseURL());
          if (g.boardID) {
              g.BOARD = new Board(g.boardID);
          }
          if (!g.VIEW) {
              g.SITE.initAuxiliary?.();
              return;
          }
          if (g.VIEW === 'file') {
              $.asap((() => d.readyState !== 'loading'), function () {
                  let video;
                  if ((g.SITE.software === 'yotsuba') && Conf['404 Redirect'] && g.SITE.is404?.()) {
                      const pathname = location.pathname.split(/\/+/);
                      return Redirect.navigate('file', {
                          boardID: g.BOARD.ID,
                          filename: pathname[pathname.length - 1]
                      });
                  }
                  else if (video = $('video')) {
                      if (Conf['Volume in New Tab']) {
                          Volume.setup(video);
                      }
                      if (Conf['Loop in New Tab']) {
                          video.loop = true;
                          video.controls = true;
                          video.play();
                      }
                  }
              });
              return;
          }
          g.threads = new SimpleDict();
          g.posts = new SimpleDict();
          // set up CSS when <head> is completely loaded
          $.onExists(doc, 'body', Main.initStyle);
          // c.time 'All initializations'
          for (var [name, feature] of Main.features) {
              if (g.SITE.disabledFeatures && g.SITE.disabledFeatures.includes(name)) {
                  continue;
              }
              // c.time "#{name} initialization"
              try {
                  feature.init();
              }
              catch (err) {
                  Main.handleErrors({
                      message: `\"${name}\" initialization crashed.`,
                      error: err
                  });
              }
          }
          // finally
          //   c.timeEnd "#{name} initialization"
          // c.timeEnd 'All initializations'
          $.ready(Main.initReady);
      },
      initStyle() {
          if (!PageReady.isThisPageLegit()) {
              return;
          }
          // disable the mobile layout
          const mobileLink = $('link[href*=mobile]', d.head);
          if (mobileLink)
              mobileLink.disabled = true;
          doc.dataset.host = location.host;
          $.addClass(doc, `sw-${g.SITE.software}`);
          $.addClass(doc, g.VIEW === 'thread' ? 'thread-view' : g.VIEW);
          $.onExists(doc, '.ad-cnt, .adg-rects > .desktop', ad => $.onExists(ad, 'img, iframe', () => $.addClass(doc, 'ads-loaded')));
          if (Conf['Autohiding Scrollbar']) {
              $.addClass(doc, 'autohiding-scrollbar');
          }
          $.ready(function () {
              if ((d.body.clientHeight > doc.clientHeight) && ((window.innerWidth === doc.clientWidth) !== Conf['Autohiding Scrollbar'])) {
                  Conf['Autohiding Scrollbar'] = !Conf['Autohiding Scrollbar'];
                  $.set('Autohiding Scrollbar', Conf['Autohiding Scrollbar']);
                  return $.toggleClass(doc, 'autohiding-scrollbar');
              }
          });
          $.addStyle(CSS$1.sub(CSS$1.boards), 'fourchanx-css');
          Main.bgColorStyle = $.el('style', { id: 'fourchanx-bgcolor-css' });
          Main.setClass();
      },
      setClass() {
          let mainStyleSheet, style, styleSheets;
          const knownStyles = ['yotsuba', 'yotsuba-b', 'futaba', 'burichan', 'photon', 'tomorrow', 'spooky'];
          if ((g.SITE.software === 'yotsuba') && (g.VIEW === 'catalog')) {
              if (mainStyleSheet = $.id('base-css')) {
                  style = mainStyleSheet.href.match(/catalog_(\w+)/)?.[1].replace('_new', '').replace(/_+/g, '-');
                  if (knownStyles.includes(style)) {
                      $.addClass(doc, style);
                      return;
                  }
              }
          }
          style = (mainStyleSheet = (styleSheets = null));
          const setStyle = function () {
              // Use preconfigured CSS for 4chan's default themes.
              if (g.SITE.software === 'yotsuba') {
                  $.rmClass(doc, style);
                  style = null;
                  for (var styleSheet of styleSheets) {
                      if (styleSheet.href === mainStyleSheet?.href) {
                          style = styleSheet.title.toLowerCase().replace('new', '').trim().replace(/\s+/g, '-');
                          if (style === '_special') {
                              style = styleSheet.href.match(/[a-z]*(?=[^/]*$)/)[0];
                          }
                          if (!knownStyles.includes(style)) {
                              style = null;
                          }
                          break;
                      }
                  }
                  if (style) {
                      $.addClass(doc, style);
                      $.rm(Main.bgColorStyle);
                      return;
                  }
              }
              // Determine proper dialog background color for other themes.
              const div = g.SITE.bgColoredEl();
              div.style.position = 'absolute';
              div.style.visibility = 'hidden';
              $.add(d.body, div);
              let bgColor = window.getComputedStyle(div).backgroundColor;
              $.rm(div);
              const rgb = bgColor.match(/[\d.]+/g);
              // Use body background if reply background is transparent
              if (!/^rgb\(/.test(bgColor)) {
                  const s = window.getComputedStyle(d.body);
                  bgColor = `${s.backgroundColor} ${s.backgroundImage} ${s.backgroundRepeat} ${s.backgroundPosition}`;
              }
              let css = `\
.dialog, .suboption-list > div:last-of-type, :root.catalog-hover-expand .catalog-container:hover > .post {
  background: ${bgColor};
}
.unread-mark-read {
  background-color: rgba(${rgb.slice(0, 3).join(', ')}, ${0.5 * (rgb[3] || 1)});
}\
`;
              if ($.luma(rgb) < 100) {
                  css += '.watch-thread-link { --xt-watcher: #c8c8c8 }';
              }
              Main.bgColorStyle.textContent = css;
              return $.after($.id('fourchanx-css'), Main.bgColorStyle);
          };
          $.onExists(d.head, g.SITE.selectors.styleSheet, function (el) {
              mainStyleSheet = el;
              if (g.SITE.software === 'yotsuba') {
                  styleSheets = $$('link[rel="alternate stylesheet"]', d.head);
              }
              new MutationObserver(setStyle).observe(mainStyleSheet, {
                  attributes: true,
                  attributeFilter: ['href']
              });
              $.on(mainStyleSheet, 'load', setStyle);
              return setStyle();
          });
          if (!mainStyleSheet) {
              for (var styleSheet of $$('link[rel="stylesheet"]', d.head)) {
                  $.on(styleSheet, 'load', setStyle);
              }
              return setStyle();
          }
      },
      initReady() {
          if (g.SITE.is404?.()) {
              if (g.VIEW === 'thread') {
                  ThreadWatcher.set404(g.BOARD.ID, g.THREADID, function () {
                      if (Conf['404 Redirect']) {
                          return Redirect.navigate('thread', {
                              boardID: g.BOARD.ID,
                              threadID: g.THREADID,
                              postID: +location.hash.match(/\d+/)
                          } // post number or 0
                          , `/${g.BOARD}/`);
                      }
                  });
              }
              return;
          }
          if (g.SITE.isIncomplete?.()) {
              const msg = $.el('div', { innerHTML: 'The page didn&#039;t load completely.<br>Some features may not work unless you <a href="javascript:;">reload</a>.' });
              $.on($('a', msg), 'click', () => location.reload());
              new Notice('warning', msg);
          }
          // Parse HTML or skip it and start building from JSON.
          if (g.VIEW === 'catalog') {
              Main.initCatalog();
          }
          else if (!indexEnabled) {
              if (g.SITE.awaitBoard) {
                  g.SITE.awaitBoard(Main.initThread);
              }
              else {
                  Main.initThread();
              }
          }
          else {
              Main.expectInitFinished = true;
              $.event('4chanXInitFinished');
          }
      },
      initThread() {
          let board;
          const s = g.SITE.selectors;
          if (board = $((s.boardFor?.[g.VIEW] || s.board))) {
              const threads = [];
              const posts = [];
              const errors = [];
              try {
                  g.SITE.preParsingFixes?.(board);
              }
              catch (error) { }
              Main.addThreadsObserver = new MutationObserver(Main.addThreads);
              Main.addPostsObserver = new MutationObserver(Main.addPosts);
              Main.addThreadsObserver.observe(board, { childList: true });
              Main.parseThreads($$(s.thread, board), threads, posts, errors);
              if (errors.length) {
                  Main.handleErrors(errors);
              }
              if (g.VIEW === 'thread') {
                  if (g.threadArchived) {
                      threads[0].isArchived = true;
                      threads[0].kill();
                  }
                  g.SITE.parseThreadMetadata?.(threads[0]);
              }
              setTimeout(() => {
                  Main.callbackNodes('Thread', threads);
                  Main.callbackNodesDB('Post', posts, function () {
                      for (var post of posts)
                          QuoteThreading.insert(post);
                      Main.expectInitFinished = true;
                      $.event('4chanXInitFinished');
                  });
              }, 0);
          }
          else {
              Main.expectInitFinished = true;
              $.event('4chanXInitFinished');
          }
      },
      parseThreads(threadRoots, threads, posts, errors) {
          for (var threadRoot of threadRoots) {
              var boardObj = (() => {
                  let boardID;
                  if (boardID = threadRoot.dataset.board) {
                      boardID = encodeURIComponent(boardID);
                      return g.boards[boardID] || new Board(boardID);
                  }
                  else {
                      return g.BOARD;
                  }
              })();
              var threadID = +threadRoot.id.match(/\d*$/)[0];
              if (!threadID || boardObj.threads.get(threadID)?.nodes.root) {
                  return;
              }
              var thread = new Thread(threadID, boardObj);
              thread.nodes.root = threadRoot;
              threads.push(thread);
              var postRoots = $$(g.SITE.selectors.postContainer, threadRoot);
              if (g.SITE.isOPContainerThread) {
                  postRoots.unshift(threadRoot);
              }
              Main.parsePosts(postRoots, thread, posts, errors);
              Main.addPostsObserver.observe(threadRoot, { childList: true });
          }
      },
      parsePosts(postRoots, thread, posts, errors) {
          for (var postRoot of postRoots) {
              if (!(postRoot.dataset.fullID && g.posts.get(postRoot.dataset.fullID)) && $(g.SITE.selectors.comment, postRoot)) {
                  try {
                      posts.push(new Post(postRoot, thread, thread.board));
                  }
                  catch (err) {
                      // Skip posts that we failed to parse.
                      errors.push({
                          message: `Parsing of Post No.${postRoot.id.match(/\d+/)} failed. Post will be skipped.`,
                          error: err,
                          html: postRoot.outerHTML
                      });
                  }
              }
          }
      },
      addThreads(records) {
          const threadRoots = [];
          for (var record of records) {
              for (var node of record.addedNodes) {
                  if ((node.nodeType === Node.ELEMENT_NODE) && node.matches(g.SITE.selectors.thread)) {
                      threadRoots.push(node);
                  }
              }
          }
          if (!threadRoots.length) {
              return;
          }
          const threads = [];
          const posts = [];
          const errors = [];
          Main.parseThreads(threadRoots, threads, posts, errors);
          if (errors.length) {
              Main.handleErrors(errors);
          }
          Main.callbackNodes('Thread', threads);
          Main.callbackNodesDB('Post', posts, () => $.event('PostsInserted', null, records[0].target));
      },
      addPosts(records) {
          let thread;
          const threads = [];
          const threadsRM = [];
          const posts = [];
          const errors = [];
          for (var record of records) {
              thread = Get.threadFromRoot(record.target);
              var postRoots = [];
              for (var node of record.addedNodes) {
                  if (node.nodeType === Node.ELEMENT_NODE) {
                      if (node.matches(g.SITE.selectors.postContainer) || (node = $(g.SITE.selectors.postContainer, node))) {
                          postRoots.push(node);
                      }
                  }
              }
              var n = posts.length;
              Main.parsePosts(postRoots, thread, posts, errors);
              if ((posts.length > n) && !threads.includes(thread)) {
                  threads.push(thread);
              }
              var anyRemoved = false;
              for (var el of record.removedNodes) {
                  if ((Get.postFromRoot(el)?.nodes.root === el) && !doc.contains(el)) {
                      anyRemoved = true;
                      break;
                  }
              }
              if (anyRemoved && !threadsRM.includes(thread)) {
                  threadsRM.push(thread);
              }
          }
          if (errors.length) {
              Main.handleErrors(errors);
          }
          Main.callbackNodesDB('Post', posts, function () {
              for (thread of threads) {
                  $.event('PostsInserted', null, thread.nodes.root);
              }
              for (thread of threadsRM) {
                  $.event('PostsRemoved', null, thread.nodes.root);
              }
          });
      },
      initCatalog() {
          let board;
          const s = g.SITE.selectors.catalog;
          if (s && (board = $(s.board))) {
              const threads = [];
              const errors = [];
              Main.addCatalogThreadsObserver = new MutationObserver(Main.addCatalogThreads);
              Main.addCatalogThreadsObserver.observe(board, { childList: true });
              Main.parseCatalogThreads($$(s.thread, board), threads, errors);
              if (errors.length) {
                  Main.handleErrors(errors);
              }
              Main.callbackNodes('CatalogThreadNative', threads);
          }
          Main.expectInitFinished = true;
          $.event('4chanXInitFinished');
      },
      parseCatalogThreads(threadRoots, threads, errors) {
          for (var threadRoot of threadRoots) {
              try {
                  var thread = new CatalogThreadNative(threadRoot);
                  if (thread.thread.catalogViewNative?.nodes.root !== threadRoot) {
                      thread.thread.catalogViewNative = thread;
                      threads.push(thread);
                  }
              }
              catch (err) {
                  // Skip threads that we failed to parse.
                  errors.push({
                      message: `Parsing of Catalog Thread No.${(threadRoot.dataset.id || threadRoot.id).match(/\d+/)} failed. Thread will be skipped.`,
                      error: err,
                      html: threadRoot.outerHTML
                  });
              }
          }
      },
      addCatalogThreads(records) {
          const threadRoots = [];
          for (var record of records) {
              for (var node of record.addedNodes) {
                  if ((node.nodeType === Node.ELEMENT_NODE) && node.matches(g.SITE.selectors.catalog.thread)) {
                      threadRoots.push(node);
                  }
              }
          }
          if (!threadRoots.length) {
              return;
          }
          const threads = [];
          const errors = [];
          Main.parseCatalogThreads(threadRoots, threads, errors);
          if (errors.length) {
              Main.handleErrors(errors);
          }
          return Main.callbackNodes('CatalogThreadNative', threads);
      },
      callbackNodes(klass, nodes) {
          let node;
          let i = 0;
          const cb = Callbacks[klass];
          while ((node = nodes[i++])) {
              cb.execute(node);
          }
      },
      callbackNodesDB(klass, nodes, cb) {
          let i = 0;
          const cbs = Callbacks[klass];
          const fn = function () {
              let node;
              if (!(node = nodes[i])) {
                  return false;
              }
              cbs.execute(node);
              return ++i % 250;
          };
          var softTask = function () {
              while (fn()) {
                  continue;
              }
              if (!nodes[i]) {
                  if (cb) {
                      cb();
                  }
                  return;
              }
              setTimeout(softTask, 0);
          };
          softTask();
      },
      handleErrors(errors) {
          // Detect conflicts with 4chan X v2
          let error;
          if (d.body && $.hasClass(d.body, 'fourchan_x') && !$.hasClass(doc, 'tainted')) {
              new Notice('error', `Error: Multiple copies of ${meta.name} or 4chan X are enabled.`);
              $.addClass(doc, 'tainted');
          }
          // Detect conflicts with native extension
          if (g.SITE.testNativeExtension && !$.hasClass(doc, 'tainted')) {
              g.SITE.testNativeExtension().then(({ enabled }) => {
                  if (enabled) {
                      $.addClass(doc, 'tainted');
                      if (Conf['Disable Native Extension'] && !Main.isFirstRun) {
                          const msg = $.el('div', { innerHTML: 'Failed to disable the native extension. You may need to <a href="' + E(meta.upstreamFaq) +
                                  '#blocking-native-extension" target="_blank">block it</a>.' });
                          new Notice('error', msg);
                      }
                  }
              });
          }
          if (!(errors instanceof Array)) {
              error = errors;
          }
          else if (errors.length === 1) {
              error = errors[0];
          }
          if (error) {
              new Notice('error', Main.parseError(error, Main.reportLink([error])), 15);
              return;
          }
          const div = $.el('div', {
              innerHTML: `${errors.length} errors occurred.${Main.reportLink(errors).innerHTML} [<a href="javascript:;">show</a>]`
          });
          $.on(div.lastElementChild, 'click', function () {
              return [this.textContent, logs.hidden] = this.textContent === 'show' ? ['hide', false] : ['show', true];
          });
          var logs = $.el('div', { hidden: true });
          for (error of errors) {
              $.add(logs, Main.parseError(error));
          }
          return new Notice('error', [div, logs], 30);
      },
      parseError(data, reportLink) {
          c.error(data.message, data.error.stack);
          const message = $.el('div', { innerHTML: E(data.message) + ((reportLink) ? (reportLink).innerHTML : "") });
          const error = $.el('div', { textContent: `${data.error.name || 'Error'}: ${data.error.message || 'see console for details'}` });
          const lines = data.error.stack?.match(/\d+(?=:\d+\)?$)/mg)?.join().replace(/^/, ' at ') || '';
          const context = $.el('div', { textContent: `(${meta.name} ${meta.fork} v${g.VERSION} ${platform} on ${$.engine}${lines})` });
          return [message, error, context];
      },
      reportLink(errors) {
          let info;
          const data = errors[0];
          let title = data.message;
          if (errors.length > 1) {
              title += ` (+${errors.length - 1} other errors)`;
          }
          let details = '';
          const addDetails = function (text) {
              if (encodeURIComponent(title + details + text + '\n').length <= meta.newIssueMaxLength - meta.newIssue.replace(/%(title|details)/, '').length) {
                  return details += text + '\n';
              }
          };
          addDetails(`\
[Please describe the steps needed to reproduce this error.]

Script: ${meta.name} ${meta.fork} v${g.VERSION} ${platform}
URL: ${location.href}
User agent: ${navigator.userAgent}\
`);
          if ((platform === 'userscript') && (info = (() => {
              if (typeof GM !== 'undefined' && GM !== null) {
                  return GM.info;
              }
              else {
                  if (typeof GM_info !== 'undefined' && GM_info !== null) {
                      return GM_info;
                  }
              }
          })())) {
              addDetails(`Userscript manager: ${info.scriptHandler} ${info.version}`);
          }
          addDetails('\n' + data.error);
          if (data.error.stack) {
              addDetails(data.error.stack.replace(data.error.toString(), '').trim());
          }
          if (data.html) {
              addDetails('\n`' + data.html + '`');
          }
          details = details.replace(/file:\/{3}.+\//g, ''); // Remove local file paths
          const url = meta.newIssue.replace('%title', encodeURIComponent(title)).replace('%details', encodeURIComponent(details));
          return { innerHTML: `<span class="report-error"> [<a href="${url}" target="_blank">report</a>]</span>` };
      },
      mounted(cb) {
          if (Main.isMounted) {
              return cb();
          }
          else {
              return Main.mountedCBs.push(cb);
          }
      },
      mountedCBs: [],
      features: [
          ['Board Configuration', BoardConfig],
          ['Normalize URL', NormalizeURL],
          ['Delay Redirect on Post', PostRedirect],
          ['Image Host Rewriting', ImageHost],
          ['Redirect', Redirect],
          ['Header', Header],
          ['Catalog Links', CatalogLinks],
          ['Settings', Settings],
          ['Index Generator', Index],
          ['Disable Autoplay', AntiAutoplay],
          ['Announcement Hiding', PSAHiding],
          ['Fourchan thingies', Fourchan],
          ['Tinyboard Glue', Tinyboard],
          ['Color User IDs', IDColor],
          ['Highlight by User ID', IDHighlight],
          ['Count Posts by ID', IDPostCount],
          ['Custom CSS', CustomCSS],
          ['Thread Links', ThreadLinks],
          ['Linkify', Linkify],
          ['Reveal Spoilers', RemoveSpoilers],
          ['Resurrect Quotes', Quotify],
          ['Filter', Filter],
          ['Thread Hiding Buttons', ThreadHiding],
          ['Reply Hiding Buttons', PostHiding],
          ['Recursive', Recursive],
          ['Strike-through Quotes', QuoteStrikeThrough],
          ['Quick Reply Personas', QR.persona],
          ['Quick Reply', QR],
          ['Cooldown', QR.cooldown],
          ['Post Jumper', PostJumper],
          ['Menu', Menu],
          ['Index Generator (Menu)', Index.menu],
          ['Report Link', ReportLink],
          ['Copy Text Link', CopyTextLink],
          ['Thread Hiding (Menu)', ThreadHiding.menu],
          ['Reply Hiding (Menu)', PostHiding.menu],
          ['Delete Link', DeleteLink],
          ['Filter (Menu)', Filter.menu],
          ['Edit Link', QR.oekaki.menu],
          ['Download Link', DownloadLink],
          ['Archive Link', ArchiveLink],
          ['Quote Inlining', QuoteInline],
          ['Quote Previewing', QuotePreview],
          ['Quote Backlinks', QuoteBacklink],
          ['Mark Quotes of You', QuoteYou],
          ['Mark OP Quotes', QuoteOP],
          ['Mark Cross-thread Quotes', QuoteCT],
          ['Anonymize', Anonymize],
          ['Time Formatting', Time],
          ['Relative Post Dates', RelativeDates],
          ['File Info Formatting', FileInfo],
          ['Fappe Tyme', FappeTyme],
          ['Gallery', Gallery],
          ['Gallery (menu)', Gallery.menu],
          ['Sauce', Sauce],
          ['Image Expansion', ImageExpand],
          ['Image Expansion (Menu)', ImageExpand.menu],
          ['Reveal Spoiler Thumbnails', RevealSpoilers],
          ['Image Loading', ImageLoader],
          ['Image Hover', ImageHover],
          ['Volume Control', Volume],
          ['Comment Expansion', ExpandComment],
          ['Thread Expansion', ExpandThread],
          ['Favicon', Favicon],
          ['Unread', Unread],
          ['Unread Line in Index', UnreadIndex],
          ['Quote Threading', QuoteThreading],
          ['Thread Stats', ThreadStats],
          ['Thread Updater', ThreadUpdater],
          ['Thread Watcher', ThreadWatcher],
          ['Thread Watcher (Menu)', ThreadWatcher.menu],
          ['Mark New IPs', MarkNewIPs],
          ['Index Navigation', Nav],
          ['Keybinds', Keybinds],
          ['Banner', Banner],
          ['Announcements', PSA],
          ['Flash Features', Flash],
          ['Reply Pruning', ReplyPruning],
          ['Mod Contact Links', ModContact],
          ['Restore deleted posts from archive', RestoreDeletedFromArchive],
          ['Mark posts on scroll bar', ScrollMarkers],
          // ['WEBM Metadata',             Metadata],
          // ['Captcha Configuration',     CaptchaReplace],
      ]
  };
  $.ready(() => Main.init());

  return Main;

})();
