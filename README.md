# NHS.UK error pages

Repository to build simple error pages which share the same simple HTML and CSS.

## Install

`npm install`

## Development

`npm run build` will compile the HTML files and add them to `./dist` so you can check them locally.
The `./dist` directory is not committed to the repository as a fresh build takes place within Azure pipeline

## CI

Build and release pipelines are in https://dev.azure.com/nhsuk/nhsuk.error-pages

View the HTML generated by the latest build of `main` branch on https://nhsukerrorpagesdevuks.blob.core.windows.net/pages/index.html
