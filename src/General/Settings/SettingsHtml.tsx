import { g } from "../../globals/globals";
import h from "../../globals/jsx";
import meta from '../../../package.json';

const settingsHtml = <div id="fourchanx-settings" class="dialog">
  <nav>
    <div class="sections-list"></div>
    <p class="imp-exp-result warning"></p>
    <div class="credits">
      <a href="javascript:;" class="export">Export</a>
      <a href="javascript:;" class="import">Import</a>
      <a href="javascript:;" class="reset">Reset Settings</a>
      <input type="file" hidden accept=".json,application/json" />
      <a href={meta.page} target="_blank">{meta.name}</a>
      <a href={meta.changelog} target="_blank">{g.VERSION}</a>
      <a href={meta.issues} target="_blank">Issues</a>
      <a href="javascript:;" class="close" title="Close">✕</a>
    </div>
  </nav>
  <div class="section-container"><section></section></div>
</div>;

export default settingsHtml;
