import type {
  Cookies,
  CookiePlugin
} from '../../src/definitions';

const { session } = require('electron')


export class CookieMaster implements CookiePlugin {

  async getCookies(): Promise<Cookies>{
    console.log("GET COOKIES");
    let cookies = await session.defaultSession.cookies.get({}) ;

    return {d : cookies};
  }

  async clearCookies(): Promise<Cookies>{
    console.log("CLEAR COOKIES");
    session.defaultSession.clearStorageData([]);

    return {d : "COOKIES CLEARED"};
  }
}
