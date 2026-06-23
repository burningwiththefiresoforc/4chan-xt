// cSpell:ignore installGentoo, webfont

import $ from '../platform/$';
import variableBase from './variableBase.css';
import photon from './photon.css';
import report from './report.css';
import spooky from './spooky.css';
import style from './style.css';
import tomorrow from './tomorrow.css';
import www from './www.css';
import yotsubaB from './yotsuba-b.css';
import yotsuba from './yotsuba.css';
import burichan from './burichan.css';
import futaba from './futaba.css';
import { g } from '../globals/globals';
import iconCss from '../Icons/icons.css';
import fxTwitterCss from '../Linkification/Embedding/FxTwitter.css';

const mainCSS = style + variableBase + yotsuba + yotsubaB + futaba + burichan + tomorrow + photon + spooky + iconCss + fxTwitterCss;

const CSS = {

  boards: mainCSS,

  report,

  www,

  sub: function(css: string) {
    var variables = {
      site: g.SITE.selectors
    };
    return css.replace(/\$[\w\$]+/g, function(name) {
      var words = name.slice(1).split('$');
      var sel = variables;
      for (var i = 0; i < words.length; i++) {
        if (typeof sel !== 'object') return ':not(*)';
        sel = $.getOwn(sel, words[i]);
      }
      if (typeof sel !== 'string') return ':not(*)';
      return sel;
    });
  }

};

export default CSS;
