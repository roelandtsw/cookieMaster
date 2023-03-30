# @capacitor/device

The Device API exposes internal information about the device, such as the model and operating system version, along with user information such as unique ids.

## Install

```bash
npm install @capacitor/device
npx cap sync
```

## Example

```typescript
import { Device } from '@capacitor/device';

const logDeviceInfo = async () => {
  const info = await Device.getInfo();

  console.log(info);
};

const logBatteryInfo = async () => {
  const info = await Device.getBatteryInfo();

  console.log(info);
};
```

## API

<docgen-index>

* [`getCookies()`](#getcookies)
* [`clearCookies()`](#clearcookies)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getCookies()

```typescript
getCookies() => Promise<Cookies>
```

Return an unique identifier for the device.

**Returns:** <code>Promise&lt;<a href="#cookies">Cookies</a>&gt;</code>

**Since:** 1.0.0

--------------------


### clearCookies()

```typescript
clearCookies() => Promise<Cookies>
```

Return an unique identifier for the device.

**Returns:** <code>Promise&lt;<a href="#cookies">Cookies</a>&gt;</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### Cookies

| Prop    | Type             | Description                                                                                                                                                                                                                            | Since |
| ------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`d`** | <code>any</code> | The UUID of the device as available to the app. This identifier may change on modern mobile platforms that only allow per-app install UUIDs. On web, a random identifier is generated and stored on localStorage for subsequent calls. | 1.0.0 |

</docgen-api>
