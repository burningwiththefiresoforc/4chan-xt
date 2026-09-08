// Filtering/parseBoards.js
import { g } from "../globals/globals";
import { dict } from "../platform/helpers";

const parseBoardsMemo = dict();

// Parse comma-separated list of boards.
// Sites can be specified by a beginning part of the site domain followed by a colon.
export function parseBoards(boardsRaw) {
  if (!boardsRaw) return false;

  let boards = parseBoardsMemo[boardsRaw];
  if (boards) return boards;

  boards = dict();
  let siteFilter = '';

  for (const boardID_ of boardsRaw.split(',')) {
    let boardID = boardID_;
    if (boardID.includes(':')) [siteFilter, boardID] = boardID.split(':').slice(-2);

    for (const siteID in g.sites) {
      const site = g.sites[siteID];
      if (siteID.slice(0, siteFilter.length) === siteFilter) {
        if (['nsfw', 'sfw'].includes(boardID)) {
          for (const boardID2 of site.sfwBoards?.(boardID === 'sfw') || []) {
            boards[`${siteID}/${boardID2}`] = true;
          }
        } else {
          boards[`${siteID}/${encodeURIComponent(boardID)}`] = true;
        }
      }
    }
  }

  parseBoardsMemo[boardsRaw] = boards;
  return boards;
}
