import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { cached } from 'tracked-toolbox';

export default class ApplicationController extends Controller {
  @tracked firstName = 'Tom';
  @tracked lastName = 'Dale';

  @cached
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
