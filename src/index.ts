/**
 * This library is used to handle operations related to authentication in the Motivapp ecosystem.
 * The purpose of this library is to be able to swap the authentication logic in the mobile repository.
 */
export default class Authentication {
    /**
     * Gets the access token from the local storage.
     * @returns The access token as string.
     */
    public static async getAccessToken(): Promise<string | null> {
        return localStorage.getItem("access_token");
    }

    /**
     * Gets the access token from the local storage.
     * @returns The refresh token as string.
     */
    public static async getRefreshToken(): Promise<string | null> {
        return localStorage.getItem("refresh_token");
    }
    
    /**
     * Saves the access token to the local storage.
     */
    public static async setAccessToken(token: string): Promise<void> {
        return localStorage.setItem("access_token", token);
    }

    /**
     * Saves the refresh token to the local storage.
     */
    public static async setRefreshToken(token: string): Promise<void> {
        return localStorage.setItem("refresh_token", token);
    }
}