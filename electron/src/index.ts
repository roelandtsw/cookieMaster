import type {
  // BatteryInfo,
  DeviceId,
  // DeviceInfo,
  DevicePlugin,
  // GetLanguageCodeResult
} from '../../src/definitions';


export class Device implements DevicePlugin {


  async getId(): Promise<DeviceId> {
    return {
      uuid: "wrtesting",
    };
  }

}


// export class CookieMaster {
//   async clearCache(): Promise<void> {
//     // wait dialog.showMessageBox({message: options.message + ' --- electron'});
//     console.log("clear cache WR");
//     // return "DONE";
//   }

//   // async prompt(options: PromptOptions): Promise<PromptResult> {
//   //   const val = window.prompt(options.message, options.inputText || '');
//   //   return {
//   //     value: val !== null ? val : '',
//   //     cancelled: val === null,
//   //   };
//   // }

//   // async confirm(options: ConfirmOptions): Promise<ConfirmResult> {
//   //   const val = window.confirm(options.message);
//   //   return {
//   //     value: val,
//   //   };
//   // }
// }