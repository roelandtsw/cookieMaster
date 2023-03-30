
export interface DeviceId {
    /**
     * The UUID of the device as available to the app. This identifier may change
     * on modern mobile platforms that only allow per-app install UUIDs.
     *
     * On web, a random identifier is generated and stored on localStorage for subsequent calls.
     *
     * @since 1.0.0
     */
    uuid: string;
  }


export interface DevicePlugin {
    /**
     * Return an unique identifier for the device.
     *
     * @since 1.0.0
     */
    getId(): Promise<DeviceId>;

}