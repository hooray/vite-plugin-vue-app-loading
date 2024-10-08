# vite-plugin-app-loading

[![NPM version](https://img.shields.io/npm/v/vite-plugin-app-loading?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-app-loading)

**English** | [中文](./README.CN.md)

Add a loading animation to your website

![vite-plugin-app-loading](https://github.com/user-attachments/assets/95217497-7022-43c1-987a-cec101db7671)

## Installation

```bash
npm i vite-plugin-app-loading -D
```

## Usage

```ts
// vite.config.ts
import AppLoading from 'vite-plugin-app-loading'

export default defineConfig({
  plugins: [
    AppLoading(),
  ],
})
```

Hide the loading animation at the right time:

```ts
// src/main.ts
import { loadingFadeOut } from 'virtual:app-loading'
loadingFadeOut()
```

## Types

There are two ways of telling typescript about the types of the virtual import:

- In your `global.d.ts` file add the following line:

  ```ts
  /// <reference types="vite-plugin-app-loading/client" />
  ```

- In your `tsconfig.json` add the following to your compilerOptions.types array:

  ```json
  {
    // ...
    "compilerOptions": {
      // ...
      "types": [
        "vite-plugin-app-loading/client"
      ]
    }
  }
  ```

## Custom animations

Create a `loading.html` file at the root directory:

```html
<style>
.loader {
  font-weight: bold;
  font-family: sans-serif;
  font-size: 30px;
  animation: l1 1s linear infinite alternate;
}
.loader:before {
  content:"Loading..."
}
@keyframes l1 {to{opacity: 0}}
</style>
<div class="loader"></div>
```

```ts
// vite.config.ts
import AppLoading from 'vite-plugin-app-loading'

export default defineConfig({
  plugins: [
    AppLoading('loading.html'),
  ],
})
```

![](https://github.com/user-attachments/assets/b05f8157-2f06-44af-b8bb-fa53701daf29)

> [!TIP]
> You can find inspiration from the following websites, which all provide CSS-only loading animations that are perfect for use with this plugin.
>
> - [CSS Loaders](https://css-loaders.com/)
> - [CSS Loader Generator](https://10015.io/tools/css-loader-generator)
> - [Loaders](https://cssloaders.github.io/)

## Example

[Fantastic-admin](https://github.com/fantastic-admin/basic)

## Thanks

Thanks to [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin/tree/7bcb973d6595545e2cef6ad4006d781b3176f67b/internal/vite-config/src/plugins/inject-app-loading) for the inspiration.
