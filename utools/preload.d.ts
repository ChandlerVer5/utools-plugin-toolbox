// generated by @ver5/vite-plugin-utools
// DO NOT CHANGE THIS FILE!
/// <reference types="@ver5/vite-plugin-utools/utools" />

interface Window {
  preload: {
    execSync: typeof import('./preload')['execSync']
    fs: typeof import('./preload')['fs']
    longExec: typeof import('./preload')['longExec']
    openUrl: typeof import('./preload')['openUrl']
    osascriptExec: typeof import('./preload')['osascriptExec']
    run: typeof import('./preload')['run']
  }
}