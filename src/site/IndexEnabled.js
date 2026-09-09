import { Conf, g } from "../globals/globals";

export function indexEnabledOn({ siteID }) {
  return Conf['JSON Index'] && g.sites[siteID].software === 'yotsuba';
}
