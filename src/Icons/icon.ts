import { E } from '../globals/globals';
import $ from '../platform/$';
import { isEscaped, type EscapedHtml } from '../globals/jsx';
import { svgPathData as imgSvg, width as imgW, height as imgH } from "@fa/faImage";
import { svgPathData as eyeSvg, width as eyeW, height as eyeH } from "@fa/faEye";
import { svgPathData as expandSvg, width as expandW, height as expandH } from "@fas/faUpRightAndDownLeftFromCenter";
import { svgPathData as commentSvg, width as commentW, height as commentH } from "@fa/faComment";
import { svgPathData as refreshSvg, width as refreshW, height as refreshH } from "@fas/faRotate";
import { svgPathData as wrenchSvg, width as wrenchW, height as wrenchH } from "@fas/faWrench";
import { svgPathData as boltSvg, width as boltW, height as boltH } from "@fas/faBolt";
import { svgPathData as pencilSvg, width as pencilW, height as pencilH } from "@fas/faPencil";
import { svgPathData as clipboardSvg, width as clipboardW, height as clipboardH } from "@fas/faClipboard";
import { svgPathData as clockSvg, width as clockW, height as clockH } from "@fa/faClock";
import { svgPathData as linkSvg, width as linkW, height as linkH } from "@fas/faLink";
import { svgPathData as shuffleSvg, width as shuffleW, height as shuffleH } from "@fas/faShuffle";
import { svgPathData as undoSvg, width as undoW, height as undoH } from "@fas/faRotateLeft";
import { svgPathData as rotateLeftSvg, width as rotateLeftW, height as rotateLeftH } from "@fas/faRotateLeft";
import { svgPathData as rotateRightSvg, width as rotateRightW, height as rotateRightH } from "@fas/faRotateRight";
import { svgPathData as downloadSvg, width as downloadW, height as downloadH } from "@fas/faDownload";
import { svgPathData as bookOpenSvg, width as bookOpenW, height as bookOpenH } from "@fas/faBookOpen";
import { svgPathData as shrinkSvg, width as shrinkW, height as shrinkH } from "@fas/faDownLeftAndUpRightToCenter";
import { svgPathData as heartSvg, width as heartW, height as heartH } from "@fas/faHeart";
import { svgPathData as caretRightSvg, width as caretRightW, height as caretRightH } from "@fas/faCaretRight";
import { svgPathData as caretLeftSvg, width as caretLeftW, height as caretLeftH } from "@fas/faCaretLeft";
import { svgPathData as caretDownSvg, width as caretDownW, height as caretDownH } from "@fas/faCaretDown";
import { svgPathData as scissorsSvg, width as scissorsW, height as scissorsH } from "@fas/faScissors";
import { svgPathData as xmarkSvg, width as xmarkW, height as xmarkH } from "@fas/faXmark";
import { svgPathData as arrowRightLongSvg, width as arrowRightLongW, height as arrowRightLongH } from "@fas/faArrowRightLong";
import { svgPathData as plusSvg, width as plusW, height as plusH } from "@fas/faPlus";
import { svgPathData as squarePlusSvg, width as squarePlusW, height as squarePlusH } from "@fa/faSquarePlus";
import { svgPathData as squareMinusSvg, width as squareMinusW, height as squareMinusH } from "@fa/faSquareMinus";
import { svgPathData as playSvg, width as playW, height as playH } from "@fas/faPlay";
import { svgPathData as stopSvg, width as stopW, height as stopH } from "@fas/faStop";
import { svgPathData as arrowUpLongSvg, width as arrowUpLongW, height as arrowUpLongH } from "@fas/faArrowUpLong";
import { svgPathData as arrowDownLongSvg, width as arrowDownLongW, height as arrowDownLongH } from "@fas/faArrowDownLong";

//linkification
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

const toSvg = (data: string, w: number | string, h: number | string): string => {
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
   image:           toSvg(imgSvg, imgW, imgH),
   eye:             toSvg(eyeSvg, eyeW, eyeH),
   expand:          toSvg(expandSvg, expandW, expandH),
   comment:         toSvg(commentSvg, commentW, commentH),
   refresh:         toSvg(refreshSvg, refreshW, refreshH),
   wrench:          toSvg(wrenchSvg, wrenchW, wrenchH),
   bolt:            toSvg(boltSvg, boltW, boltH),
   link:            toSvg(linkSvg, linkW, linkH),
   pencil:          toSvg(pencilSvg, pencilW, pencilH),
   clipboard:       toSvg(clipboardSvg, clipboardW, clipboardH),
   clock:           toSvg(clockSvg, clockW, clockH),
   shuffle:         toSvg(shuffleSvg, shuffleW, shuffleH),
   undo:            toSvg(undoSvg, undoW, undoH),
   rotateLeft:      toSvg(rotateLeftSvg, rotateLeftW, rotateLeftH),
   rotateRight:     toSvg(rotateRightSvg, rotateRightW, rotateRightH),
   download:        toSvg(downloadSvg, downloadW, downloadH),
   bookOpen:        toSvg(bookOpenSvg, bookOpenW, bookOpenH),
   shrink:          toSvg(shrinkSvg, shrinkW, shrinkH),
   heart:           toSvg(heartSvg, heartW, heartH),
   caretRight:      toSvg(caretRightSvg, caretRightW, caretRightH),
   caretLeft:       toSvg(caretLeftSvg, caretLeftW, caretLeftH),
   caretDown:       toSvg(caretDownSvg, caretDownW, caretDownH),
   scissors:        toSvg(scissorsSvg, scissorsW, scissorsH),
   xmark:           toSvg(xmarkSvg, xmarkW, xmarkH),
   arrowRightLong:  toSvg(arrowRightLongSvg, arrowRightLongW, arrowRightLongH),
   plus:            toSvg(plusSvg, plusW, plusH),
   squarePlus:      toSvg(squarePlusSvg, squarePlusW, squarePlusH),
   squareMinus:     toSvg(squareMinusSvg, squareMinusW, squareMinusH),
   play:            toSvg(playSvg, playW, playH),
   stop:            toSvg(stopSvg, stopW, stopH),
   arrowUpLong:     toSvg(arrowUpLongSvg, arrowUpLongW, arrowUpLongH),
   arrowDownLong:   toSvg(arrowDownLongSvg, arrowDownLongW, arrowDownLongH)
} as const;

const linkifyIcons: Record<string, string> = {
  peertube:    toSvg(peerBody,    peerW,    peerH),
  streamable:  toSvg(streamBody,  streamW,  streamH),
  bitchute:    toSvg(bitchBody,   bitchW,   bitchH),
  clyp:        toSvg(clypBody,    clypW,    clypH),
  pastebin:    toSvg(pbBody,      pbW,      pbH),
  twitchtv:    toSvg(twitchBody,  twitchW,  twitchH),
  vocaroo:     toSvg(vocaSvg,     vocaW,    vocaH),
  vidlii:      toSvg(vidlSvg,     vidlW,    vidlH),
  image:       toSvg(imgSvg,      imgW,     imgH),
  video:       toSvg(vidSvg,      vidW,     vidH),
  audio:       toSvg(audSvg,      audW,     audH),
  youtube:     toSvg(ytSvg,       ytW,      ytH),
  twitter:     toSvg(twitSvg,     twitW,    twitH),
  soundcloud:  toSvg(scSvg,       scW,      scH),
  dailymotion: toSvg(dmSvg,       dmW,      dmH),
  gist:        toSvg(gistSvg,     gistW,    gistH),
  vimeo:       toSvg(vimeoSvg,    vimeoW,   vimeoH),
};

var Icon = {
  /** Sets an icon in an HTML element */
  set (node: HTMLElement, name: keyof typeof icons, altText?: string) {
    const html = icons[name];
    if (!html) throw new Error(`Icon "${name}" not found.`);
    if (altText) {
      node.innerHTML = `<span class="icon--alt-text">${E(altText)}</span>${html}`;
    } else {
      node.innerHTML = html;
    }
  },

  setLinkify(el: HTMLElement) {
    if (el.querySelector('.linkify-icon')) return;
    const iconName = [...el.classList].find(c => c in linkifyIcons) as keyof typeof linkifyIcons | undefined;
    if (!iconName) return;
    $.prepend(el, $.el('span', {
      className: 'linkify-icon icon',
      innerHTML: linkifyIcons[iconName],
    }));
  },

  /** Get the raw SVG string for an icon. */
  get(name: keyof typeof icons): string {
    return icons[name];
  },

  /** Get the raw SVG string for an icon wrapped for use in JSX. */
  raw(name: keyof typeof icons): EscapedHtml {
    return { innerHTML: icons[name], [isEscaped]: true };
  },
};

export default Icon;
