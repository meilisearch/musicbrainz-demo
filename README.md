<p align="center">
  <img src="https://raw.githubusercontent.com/meilisearch/integration-guides/main/assets/logos/logo.svg" alt="Meilisearch logo" width="200" height="200" />
</p>

<h1 align="center">MusicBrainz Demo</h1>

<h4 align="center">
  <a href="https://www.meilisearch.com/?utm_campaign=oss&utm_source=github&utm_medium=minidashboard">Website</a> |
  <a href="https://www.meilisearch.com/cloud?utm_campaign=oss&utm_source=github&utm_medium=minidashboard">Meilisearch Cloud</a> |
  <a href="https://blog.meilisearch.com/?utm_campaign=oss&utm_source=github&utm_medium=minidashboard">Blog</a> |
  <a href="https://meilisearch.com/docs?utm_campaign=oss&utm_source=github&utm_medium=minidashboard">Documentation</a> |
  <a href="https://discord.meilisearch.com/?utm_campaign=oss&utm_source=github&utm_medium=minidashboard">Discord</a>
</h4>

> Meilisearch is an open-source search engine that offers fast, relevant search out of the box.

**Table of Contents**:

- [Setup](#setup)
- [Run](#run)
- [Build](#build)
  - [Generate build](#generate-build)
  - [Specify Meilisearch's server URL](#specify-meilisearchs-server-url)
  - [Run your build](#run-your-build)
- [Storybook](#storybook)
- [Contributing](#contributing)

<br/>

## Setup

```bash
yarn
```

## Run

```bash
yarn start
```

Go to `http://localhost:3000/` and enjoy ! 🎉

## Build

### Generate build

You can generate a build of this project with the following command:

```bash
yarn build
```

### Specify Meilisearch's server URL

⚠️ By default, the application will call Meilisearch at the exact same address as it is running.
Example: if your app is running at `http://localhost:5000`, it will try to call `http://localhost:5000/indexes` to retrieve the list of your indexes.

If you want to specify the URL where your Meilisearch is running, use the `REACT_APP_MEILI_SERVER_ADDRESS` environment variable.

Example:

```bash
REACT_APP_MEILI_SERVER_ADDRESS=http://0.0.0.0:7700 REACT_APP_MEILI_API_KEY=xxx yarn build
```

### Run your build

The above commands will generate an optimized version of the app, inside the `build` folder.

You can then serve it with any web server of your choice.

Example:

```bash
serve build
```

## Storybook

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively test components.

![Storybook](assets/storybook.png)

```bash
yarn storybook
```

## Contributing

If you want to contribute to this project, please make sure to read [the contributing guidelines](./CONTRIBUTING.md)

## Compatibility with Meilisearch

This package guarantees compatibility with [version v1.x of Meilisearch](https://github.com/meilisearch/meilisearch/releases/latest), but some features may not be present. Please check the [issues](https://github.com/meilisearch/mini-dashboard/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+label%3Aenhancement) for more info.
