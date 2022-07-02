"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TokenStorage = void 0;

var SecureStore = _interopRequireWildcard(require("expo-secure-store"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * This library is used to handle operations related to authentication in the Motivapp ecosystem.
 * The purpose of this library is to be able to swap the authentication logic in the mobile repository.
 */
class TokenStorage {
  static SECURE_STORE_ACCESS_TOKEN_KEY = "access_token";
  static SECURE_STORE_REFRESH_TOKEN_KEY = "refresh_token";
  /**
   * Gets the access token from the local storage.
   * @returns The access token as string.
   */

  static async getAccessToken() {
    return SecureStore.getItemAsync(TokenStorage.SECURE_STORE_ACCESS_TOKEN_KEY);
  }
  /**
   * Gets the access token from the local storage.
   * @returns The refresh token as string.
   */


  static async getRefreshToken() {
    return SecureStore.getItemAsync(TokenStorage.SECURE_STORE_REFRESH_TOKEN_KEY);
  }
  /**
   * Saves the access token to the local storage.
   */


  static async setAccessToken(token) {
    return SecureStore.setItemAsync(TokenStorage.SECURE_STORE_ACCESS_TOKEN_KEY, token);
  }
  /**
   * Saves the refresh token to the local storage.
   */


  static async setRefreshToken(token) {
    return SecureStore.setItemAsync(TokenStorage.SECURE_STORE_REFRESH_TOKEN_KEY, token);
  }
  /**
   * Clears the tokens from the local storage.
   */


  static async clear() {
    await Promise.all([SecureStore.deleteItemAsync(TokenStorage.SECURE_STORE_ACCESS_TOKEN_KEY), SecureStore.deleteItemAsync(TokenStorage.SECURE_STORE_REFRESH_TOKEN_KEY)]);
  }

}

exports.TokenStorage = TokenStorage;