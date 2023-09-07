# Demo vite app

This vite app was created using the following steps

- download the test vite app from the embroider github https://github.com/embroider-build/embroider/tree/main/tests/vite-app
- remove the workspace items from the package.json
  - you can do `pnpm i @embroider/compat@latest @embroider/core@latest @embroider/vite@latest` to do this quickly
- profit 🎉


## TODO to make this mainstream

-  [ ] undo the babel config hack
-  [ ] figure out a way to get the meta tag into your html (i.e. plugin for vite)
   -  [ ] add a target that gets updated
-  [ ] config updates
   -  [ ] remove the root that points at the rewritten i.e. don't move our app
      -  [ ] new embroider feature to opt out of rewritten-app/assets/vite-app.js syntisis
      -  [ ] implement `#embroider_compat/app` as a core resolver functionality
         -  [ ] create a feature request on vite to run load for virtual files (i.e. staring with `\0`)
         -  [ ] (performance) implement it as a rollup plugin for vite (to allow for optimisation)
      -  [ ] add an embroider resolver that can accept `withModules`
      -  [ ] (performance) implement a way for vite to use real files to be able to optimize `i("./-embroider-implicit-modules.js");`
