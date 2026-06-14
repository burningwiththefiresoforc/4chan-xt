// cSpell:ignore installGentoo, webfont

import $ from '../platform/$';

import burichan from './burichan.css';
import futaba from './futaba.css';
import { body as peerBody, width as peerW, height as peerH } from './Assets/linkify.peertube.svg'; // svgregpo.com
import { body as streamBody, width as streamW, height as streamH } from './Assets/linkify.streamable.svg'; // streamable.com
import { body as bitchBody, width as bitchW, height as bitchH } from './Assets/linkify.bitchute.svg'; // github.com/jerryjappinen/lateralnord-svg
import { body as clypBody, width as clypW, height as clypH } from './Assets/linkify.clyp.svg'; // svgrepo.com
import { body as pbBody, width as pbW, height as pbH } from './Assets/linkify.pastebin.svg'; // thesvg.org
import { body as twitchBody, width as twitchW, height as twitchH } from './Assets/linkify.twitchtv.svg'; // vectorlogo.zone
import { svgPathData as vidlSvg, width as vidlW, height as vidlH } from '@fas/faPlay';
import { svgPathData as vocaSvg, width as vocaW, height as vocaH } from '@fas/faMicrophone';
import { svgPathData as imgSvg, width as imgW, height as imgH } from "@fas/faFileImage";
import { svgPathData as audSvg, width as audW, height as audH } from "@fas/faFileAudio";
import { svgPathData as vidSvg, width as vidW, height as vidH } from "@fas/faFileVideo";
import { svgPathData as twitSvg, width as twitW, height as twitH } from "@fab/faXTwitter";
import { svgPathData as scSvg, width as scW, height as scH } from "@fab/faSoundcloud";
import { svgPathData as dmSvg, width as dmW, height as dmH } from "@fab/faDailymotion";
import { svgPathData as gistSvg, width as gistW, height as gistH } from "@fab/faGithub";
import { svgPathData as vimeoSvg, width as vimeoW, height as vimeoH } from "@fab/faVimeo";
import { svgPathData as ytSvg, width as ytW, height as ytH } from "@fab/faYoutube";
// import linkifyInstallgentoo from './linkify.installgentoo.png';

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

// This is set up to deal with .js and .svgs differently. If it is ever simplified  change it .
const toCssSvg = (svgPathData: string, w: number | string, h: number | string, color: string = '#3546c2') => {
  let inner: string;
  if (svgPathData.trimStart().startsWith('<')) {
        inner = svgPathData
      .replace(/fill="[^"]*"/g, '')
      .replace(/(<\w+)/g, `$1 fill="${color}"`);
  } else {
    inner = `<path fill="${color}" d="${svgPathData}"/>`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const mainCSS = style + variableBase + yotsuba +yotsubaB+futaba+burichan+tomorrow + photon + spooky + iconCss + fxTwitterCss;
const faIcons: { name: string, data: string }[] = [
  { name: "peertube", data: toCssSvg(peerBody, peerW, peerH) },
  { name: "streamable", data: toCssSvg(streamBody, streamW, streamH) },
  { name: "bitchute", data: toCssSvg(bitchBody, bitchW, bitchH) },
  { name: "clyp", data: toCssSvg(clypBody, clypW, clypH) },
  { name: "pastebin", data: toCssSvg(pbBody, pbW, pbH) },
  { name: "twitchtv", data: toCssSvg(twitchBody, twitchW, twitchH) },
  { name: "vocaroo", data: toCssSvg(vocaSvg, vocaW, vocaH) },
  { name: "vidlii", data: toCssSvg(vidlSvg, vidlW, vidlH) },
  { name: "image", data: toCssSvg(imgSvg, imgW, imgH) },
  { name: "video", data: toCssSvg(vidSvg, vidW, vidH) },
  { name: "audio", data: toCssSvg(audSvg, audW, audH) },
  { name: "youtube", data: toCssSvg(ytSvg, ytW, ytH) },
  { name: "twitter", data: toCssSvg(twitSvg, twitW, twitH) },
  { name: "soundcloud", data: toCssSvg(scSvg, scW, scH) },
  { name: "dailymotion", data: toCssSvg(dmSvg, dmW, dmH) },
  { name: "gist", data: toCssSvg(gistSvg, gistW, gistH) },
  { name: "vimeo", data: toCssSvg(vimeoSvg, vimeoW, vimeoH) }
  // { name: "installgentoo", data: `data:image/png;base64,${linkifyInstallgentoo }`},
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
