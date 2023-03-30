
export interface Cookies {
  /**
   * Generic message interface
   *
   * @since 1.0.0
   */
  d: any;
}

export interface CookiePlugin {
  
  /**
   * Return all cookies from the node.js layer (electron)
   *
   * @since 1.0.0
   */
  getCookies(): Promise<Cookies>;

  /**
   * Clear all cookies on the node.js layer (electron)
   *
   * @since 1.0.0
   */
  clearCookies(): Promise<Cookies>;

}
