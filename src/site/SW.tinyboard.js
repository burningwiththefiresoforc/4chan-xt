import { Conf, d } from "../globals/globals";
import Main from "../main/Main";
import $ from "../platform/$";
import $$ from "../platform/$$";
import { dict } from "../platform/helpers";
import SWYotsuba from "./SW.yotsuba";

/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */

const rootFor = ({siteID}) => Conf.siteProperties[siteID]?.root || `http://${siteID}/`;
const rootOrEmptyFor = ({siteID}) => Conf.siteProperties[siteID]?.root || '';

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
    for (const script of $$('script:not([src])', d.head)) {
      let m = script.textContent.match(/\bvar configRoot=(".*?")/);
      if (m) {
        var properties = dict();
        try {
          var root = JSON.parse(m[1]);
          if (root[0] === '/') {
            properties.root = location.origin + root;
          } else if (/^https?:/.test(root)) {
            properties.root = root;
          }
        } catch (error) {}
        return properties;
      }
    }
    return false;
  },

  awaitBoard(cb) {
    let reactUI = $.id('react-ui');
    if (reactUI) {
      const s = (this.selectors = Object.create(this.selectors));
      s.boardFor = {index: '.page-container'};
      s.thread = 'div[id^="thread_"]';
      Main.mounted(cb);
    } else {
      cb();
    }
  },

  urls: {
    post: ({postID}) => `#${postID}`,
    index: ({siteID, boardID}) => `${rootFor({siteID})}${boardID}/`,
    catalog: ({siteID, boardID}) => `${rootFor({siteID})}${boardID}/catalog.html`,
    file: ({siteID, boardID}, filename) => `${rootFor({siteID})}${boardID}/${filename}`,
    archivedThreadJSON: (thread) => SWTinyboard.urls.threadJSON(thread, true),
    thumb: (board, filename) => SWTinyboard.urls.file(board, filename),
    thread: ({siteID, boardID, threadID}, isArchived) =>
      `${rootFor({siteID})}${boardID}/${isArchived ? 'archive/' : ''}res/${threadID}.html`,
    threadJSON: ({siteID, boardID, threadID}, isArchived) => {
      const root = rootOrEmptyFor({siteID});
      return root && `${root}${boardID}/${isArchived ? 'archive/' : ''}res/${threadID}.json`;
    },
    threadsListJSON({siteID, boardID}) {
      const root = rootOrEmptyFor({siteID});
      return root && `${root}${boardID}/threads.json`;
    },
    archiveListJSON({siteID, boardID}) {
      const root = rootOrEmptyFor({siteID});
      return root && `${root}${boardID}/archive/archive.json`;
    },
    catalogJSON({siteID, boardID}) {
      const root = rootOrEmptyFor({siteID});
      return root && `${root}${boardID}/catalog.json`;
    },
  },

  selectors: {
    board:         'form[name="postcontrols"]',
    thread:        'input[name="board"] ~ div[id^="thread_"]',
    threadDivider: 'div[id^="thread_"] > hr:last-child',
    summary:       '.omitted',
    postContainer: 'div[id^="reply_"]:not(.hidden)', // postContainer is thread for OP
    opBottom:      '.op',
    replyOriginal: 'div[id^="reply_"]:not(.hidden)',
    infoRoot:      '.intro',
    info: {
      subject:   '.subject',
      name:      '.name',
      email:     '.email',
      tripcode:  '.trip',
      uniqueID:  '.poster_id',
      capcode:   '.capcode',
      flag:      '.flag',
      date:      'time',
      nameBlock: 'label',
      quote:     'a[href*="#q"]',
      reply:     'a[href*="/res/"]:not([href*="#"])'
    },
    icons: {
      isSticky:   '.fa-thumb-tack',
      isClosed:   '.fa-lock'
    },
    file: {
      text:  '.fileinfo',
      link:  '.fileinfo > a',
      thumb: 'a > .post-image'
    },
    thumbLink: '.file > a',
    multifile: '.files > .file',
    highlightable: {
      op:      ' > .op',
      reply:   '.reply',
      catalog: ' > .thread'
    },
    comment:   '.body',
    spoiler:   '.spoiler',
    quotelink: 'a[onclick*="highlightReply("]',
    catalog: {
      board:  '#Grid',
      thread: '.mix',
      thumb:  '.thread-image'
    },
    boardList: '.boardlist',
    boardListBottom: '.boardlist.bottom',
    styleSheet: '#stylesheet',
    psa:       '.blotter',
    nav: {
      prev: '.pages > form > [value=Previous]',
      next: '.pages > form > [value=Next]'
    }
  },

  classes: {
    highlight: 'highlighted'
  },

  xpath: {
    thread:         'div[starts-with(@id,"thread_")]',
    postContainer:  'div[starts-with(@id,"reply_") or starts-with(@id,"thread_")]',
    replyContainer: 'div[starts-with(@id,"reply_")]'
  },

  regexp: {
    quotelink:
      new RegExp(`\
/\
([^/]+)\
/res/\
(\\d+)\
(?:\\.\\w+)?#\
(\\d+)\
$\
`),
    quotelinkHTML:
      /<a [^>]*\bhref="[^"]*\/([^\/]+)\/res\/(\d+)(?:\.\w+)?#(\d+)"/g
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
          } else {
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

  bgColoredEl: () => $.el('div', {className: 'post reply'}),

  isFileURL: (url) => /\/src\/[^\/]+/.test(url.pathname),

  preParsingFixes(board) {
    // fixes effects of unclosed link in announcement
    let broken = $('a > input[name="board"]', board);
    if (broken) {
      return $.before(broken.parentNode, broken);
    }
  },

  parseNodes(post, nodes) {
    // Add vichan's span.poster_id around the ID if not already present.
    if (nodes.uniqueID) return;
    let text = '';
    let node = nodes.nameBlock.nextSibling;
    while (node && (node.nodeType === 3)) {
      text += node.textContent;
      node = node.nextSibling;
    }
    let m = text.match(/(\s*ID:\s*)(\S+)/);
    if (m) {
      nodes.info.normalize();
      let {nextSibling} = nodes.nameBlock;
      nextSibling = nextSibling.splitText(m[1].length);
      nextSibling.splitText(m[2].length);
      let uniqueID = $.el('span', {className: 'poster_id'});
      nodes.uniqueID = uniqueID;
      $.replace(nextSibling, uniqueID);
      $.add(uniqueID, nextSibling);
    }
  },

  parseDate(node) {
    let date = Date.parse(node.getAttribute('datetime')?.trim());
    if (!isNaN(date)) return new Date(date);
    date = Date.parse(node.textContent.trim() + ' UTC'); // e.g. onesixtwo.club
    if (!isNaN(date)) return new Date(date);
    return undefined;
  },

  parseFile(post, file) {
    let info, infoNode;
    const {text, link, thumb} = file;
    if ($.x(`ancestor::${this.xpath.postContainer}[1]`, text) !== post.nodes.root) return false; // file belongs to a reply
    if (!(infoNode = link.nextSibling?.textContent.includes('(') ? link.nextSibling : link.nextElementSibling)) return false;
    if (!(info = infoNode.textContent.match(/\((.*,\s*)?([\d.]+ ?[KMG]?B).*\)/))) return false;
    const nameNode = $('.postfilename', text);
    $.extend(file, {
      name:       nameNode ? (nameNode.title || nameNode.textContent) : link.pathname.match(/[^/]*$/)[0],
      size:       info[2],
      dimensions: info[0].match(/\d+x\d+/)?.[0]
    });
    if (thumb) {
      $.extend(file, {
        thumbURL:  /\/static\//.test(thumb.src) && $.isImage(link.href) ? link.href : thumb.src,
        isSpoiler: /^Spoiler/i.test(info[1] || '') || (link.textContent === 'Spoiler Image')
      });
    }
    return true;
  },

    // Detect old Tinyboard image expansion that changes src attribute on thumbnail.
  isThumbExpanded: (file) => $.hasClass(file.thumb.parentNode, 'expanded') || (file.thumb.parentNode.dataset.expanded === 'true'),

  isLinkified: (link) => /\bnofollow\b/.test(link.rel),

  catalogPin: (threadRoot) => threadRoot.dataset.sticky = 'true',
};
export default SWTinyboard;
