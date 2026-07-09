import $ from '../platform/$';
import { g, d } from '../globals/globals';

const PageReady = {
  isThisPageLegit() {
    if (!('thisPageIsLegit' in PageReady)) {
      PageReady.thisPageIsLegit = g.SITE.isThisPageLegit ?
        g.SITE.isThisPageLegit()
      :
        !/^[45]\d\d\b/.test(d.title) && !/\.(?:json|rss)$/.test(location.pathname);
    }
    return PageReady.thisPageIsLegit;
  },

  ready(cb) {
    return $.ready(function() {
      if (PageReady.isThisPageLegit()) { return cb(); }
    });
  }
};

export default PageReady;
