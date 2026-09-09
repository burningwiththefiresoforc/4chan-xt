import { g, Conf } from "../globals/globals";
import Main from "../main/Main";

export function resolve(url = location) {
  let { hostname } = url;
  while (hostname && !Object.hasOwn(Conf.siteProperties, hostname)) {
    hostname = hostname.replace(/^[^.]*\.?/, '');
  }
  if (hostname) {
    const canonical = Conf.siteProperties[hostname].canonical;
    if (canonical) hostname = canonical;
  }
  return hostname;
}

export function parseURL(url) {
  const siteID = resolve(url);
  return Main.parseURL(g.sites[siteID], url);
}
