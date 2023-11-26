# TypeScript Chrome Extension Template

## Getting Started 

The template is developed using Pnpm, but feel free to use another package manager. 

```sh 

pnpm i // or install dependencies which your preferred package manager

```

To build use 

```sh 

pnpm build

```

This compiled your Typescript and bundles the public folder into dist. 

Use 

```sh 

pnpm build:dev

```
 to build in watch mode. I've found that the watch mode build sometimes causes issues with Chrome
 not being able to find the manifest.json. If that happens, just run a normal build.

By setting `NODE_ENV` to "development", type declarations and sourcemaps will be included in the
build output.

By setting `NODE_ENV` to "production", `console` statements will be removed in the build output.

### Manifest

This template comes with a preconfigured `manifest.json`. 

You will need to configure the extension's name, description, permissions and the URLs where you
want to run the content script.

There is no background script set up in the template.


