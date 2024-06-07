# vite-vue-template

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Mock Server

[Mock Service Worker](https://mswjs.io/) - 在浏览器中模拟真实的网络请求和响应

```sh
npm install msw@latest --save-dev
npx msw init public
```

[Faker.js](https://fakerjs.dev/) - 一个制造假数据的库

```sh
npm install @faker-js/faker --save-dev
```

#### new dir in src, name is mocks

```sh
mkdir src/mocks
touch src/mocks/index.ts

import { setupWorker } from 'msw/browser'
import { UserHandles } from './modules/user'

export const browserWorker = setupWorker(...UserHandles)

export function setupMockWorker() {
  if (import.meta.env.DEV) {
    return browserWorker.start()
  } else {
    return Promise.resolve()
  }
}
```
