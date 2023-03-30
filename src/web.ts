import { WebPlugin } from '@capacitor/core';

import type {
  Cookies,
  CookiePlugin
} from './definitions';

export class DeviceWeb extends WebPlugin implements CookiePlugin {

  async getCookies(): Promise<Cookies> {
    return {
      d : "not yet implemented"
    };
  }

  async clearCookies(): Promise<Cookies> {
    return {
      d : "not yet implemented"
    };
  }
}
