import { WebPlugin } from '@capacitor/core';

import type {
//   BatteryInfo,
  DeviceId,
//   DeviceInfo,
  DevicePlugin,
//   GetLanguageCodeResult,
} from './definitions';

// declare global {
//   interface Navigator {
//     getBattery: any;
//     oscpu: any;
//   }

//   interface Window {
//     InstallTrigger?: any;
//     ApplePaySession?: any;
//     chrome?: any;
//   }
// }

export class DeviceWeb extends WebPlugin implements DevicePlugin {
  async getId(): Promise<DeviceId> {
    return {
      uuid: this.getUid(),
    };
  }


  getUid(): string {
    return "wrtest"
  }

}