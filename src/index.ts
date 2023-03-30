import { registerPlugin } from '@capacitor/core';

import type { CookiePlugin } from './definitions';

const CookieMaster = registerPlugin<CookiePlugin>('cookieMaster', {
  web: () => import('./web').then(m => new m.DeviceWeb()),
  electron: () => (window as any).CapacitorCustomPlatform.plugins.cookieMaster,
});

export * from './definitions';
export { CookieMaster };
