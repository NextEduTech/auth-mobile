import * as SecureStore from "expo-secure-store";

/**
 * This library is used to handle operations related to authentication in the Motivapp ecosystem.
 * The purpose of this library is to be able to swap the authentication logic in the mobile repository.
 */
export default class Authentication {
    private static SECURE_STORE_ACCESS_TOKEN_KEY = "access_token";
    private static SECURE_STORE_REFRESH_TOKEN_KEY = "refresh_token";

    /**
     * Gets the access token from the local storage.
     * @returns The access token as string.
     */
    public static async getAccessToken(): Promise<string | null> {
        return SecureStore.getItemAsync(Authentication.SECURE_STORE_ACCESS_TOKEN_KEY);
    }

    /**
     * Gets the access token from the local storage.
     * @returns The refresh token as string.
     */
    public static async getRefreshToken(): Promise<string | null> {
        return SecureStore.getItemAsync(Authentication.SECURE_STORE_REFRESH_TOKEN_KEY);
    }
    
    /**
     * Saves the access token to the local storage.
     */
    public static async setAccessToken(token: string): Promise<void> {
        return SecureStore.setItemAsync(Authentication.SECURE_STORE_ACCESS_TOKEN_KEY, token);
    }

    /**
     * Saves the refresh token to the local storage.
     */
    public static async setRefreshToken(token: string): Promise<void> {
        return SecureStore.setItemAsync(Authentication.SECURE_STORE_REFRESH_TOKEN_KEY, token);
    }
}