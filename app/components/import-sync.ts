import Component from '@glimmer/component';
import { importSync } from '@embroider/macros';

export default class extends Component {
  get message () {
    return importSync('./import-sync/util');
  }
}
