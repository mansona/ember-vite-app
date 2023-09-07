import Application from '@ember/application';
import Resolver from '@embroider/resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'vite-app/config/environment';

import resolverModules from '#embroider_compat/app';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver.withModules(resolverModules);
}

loadInitializers(App, config.modulePrefix);
