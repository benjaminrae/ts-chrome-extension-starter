# TypeScript Chrome Extension Starter

![TypeScript Chrome Extension Starter](https://github.com/benjaminrae/ts-chrome-extension-starter/assets/63359209/bef7af1d-c073-49e2-a254-18e3775ddb7b)

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

This template uses **tsup** to to compile TypeScript and bundle the extension

[tsup Docs]https://tsup.egoist.dev/

### Manifest

This template comes with a preconfigured `manifest.json`. 

You will need to configure the extension's name, description, permissions and the URLs where you want to run the content script. This is also where you can add icons for your extension.

[Manifest V3 Permission
Guidelines](https://developer.chrome.com/docs/extensions/mv3/permission_warnings/)

### Files

This template already has an options page, popup, content script and background service worker.
Choose what you need to use and you can delete the rest. Don't forget to update the `manifest.json`
and `tsup.config.ts` files if you do add or remove anything. 

In the `tsup.config.ts` file, you need to make sure that you configure all of the entry points.
Basically, any file that you need in the final bundle, must be set as an entry point. All of the
other files, imported by your entry point files, will be tree shaken and bundled.

I have added some placeholder icons, remember to change them. 

You can use this [tool](https://alexleybourne.github.io/chrome-extension-icon-generator/) to create
the icons you need from a single image.
