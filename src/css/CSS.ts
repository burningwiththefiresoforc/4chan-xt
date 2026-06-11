// cSpell:ignore installGentoo, webfont

import $ from '../platform/$';

import burichan from './burichan.css';
import futaba from './futaba.css';
import linkifyBitchute from './linkify.bitchute.png';
import linkifyGfycat from './linkify.gfycat.png';
// import linkifyInstallgentoo from './linkify.installgentoo.png';
import linkifyPeertube from './linkify.peertube.png';
import linkifyStreamable from './linkify.streamable.png';
import linkifyVidlii from './linkify.vidlii.png';
import linkifyVocaroo from './linkify.vocaroo.png';
import linkifyClyp from './linkify.clyp.png';
import linkifyTwitchtv from './linkify.twitchtv.png';
import linkifyPastebin from './linkify.pastebin.png';
import { svgPathData as imgSvg, width as imgW, height as imgH } from "@fas/faFileImage";
import { svgPathData as audSvg, width as audW, height as audH } from "@fas/faFileAudio";
import { svgPathData as vidSvg, width as vidW, height as vidH } from "@fas/faFileVideo";
import { svgPathData as twitSvg, width as twitW, height as twitH } from "@fab/faXTwitter";
import { svgPathData as scSvg, width as scW, height as scH } from "@fab/faSoundcloud";
import { svgPathData as dmSvg, width as dmW, height as dmH } from "@fab/faDailymotion";
import { svgPathData as gistSvg, width as gistW, height as gistH } from "@fab/faGithub";
import { svgPathData as vimeoSvg, width as vimeoW, height as vimeoH } from "@fab/faVimeo";
import { svgPathData as ytSvg, width as ytW, height as ytH } from "@fab/faYoutube";

import variableBase from './variableBase.css';
import photon from './photon.css';
import report from './report.css';
import spooky from './spooky.css';
import style from './style.css';
import tomorrow from './tomorrow.css';
import www from './www.css';
import yotsubaB from './yotsuba-b.css';
import yotsuba from './yotsuba.css';
import { icons } from './style';
import { g } from '../globals/globals';
import iconCss from '../Icons/icons.css';
import fxTwitterCss from '../Linkification/Embedding/FxTwitter.css';

const toCssSvg = (svgPathData: string, w: number | string, h: number | string, color: string = '#3546c2') => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"><path fill="${color}" d="${svgPathData}"/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const mainCSS = style + variableBase + yotsuba +yotsubaB+futaba+burichan+tomorrow + photon + spooky + iconCss + fxTwitterCss;
const faIcons: { name: string, data: string }[] = [
  { name: "bitchute", data: `data:image/png;base64,${linkifyBitchute }`},
  { name: "clyp", data: `data:image/png;base64,${linkifyClyp }`},
  { name: "gfycat", data: `data:image/png;base64,${linkifyGfycat }`},
  // { name: "installgentoo", data: `data:image/png;base64,${linkifyInstallgentoo }`},
  { name: "pastebin", data: `data:image/png;base64,${linkifyPastebin }`},
  { name: "peertube", data: `data:image/png;base64,${linkifyPeertube }`},
  { name: "streamable", data: `data:image/png;base64,${linkifyStreamable }`},
  { name: "twitchtv", data: `data:image/png;base64,${linkifyTwitchtv }`},
  { name: "vidlii", data: `data:image/png;base64,${linkifyVidlii }`},
  { name: "vocaroo", data: `data:image/png;base64,${linkifyVocaroo }`},
  { name: "image", data: toCssSvg(imgSvg, imgW, imgH) },
  { name: "video", data: toCssSvg(vidSvg, vidW, vidH) },
  { name: "audio", data: toCssSvg(audSvg, audW, audH) },
  { name: "youtube", data: toCssSvg(ytSvg, ytW, ytH) },
  { name: "twitter", data: toCssSvg(twitSvg, twitW, twitH) },
  { name: "soundcloud", data: toCssSvg(scSvg, scW, scH) },
  { name: "dailymotion", data: toCssSvg(dmSvg, dmW, dmH) },
  { name: "gist", data: toCssSvg(gistSvg, gistW, gistH) },
  { name: "vimeo", data: toCssSvg(vimeoSvg, vimeoW, vimeoH) }
];

const CSS = {

  boards: mainCSS + icons(faIcons),

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
