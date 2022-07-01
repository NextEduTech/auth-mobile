/**
 * This library is used to handle operations related to authentication in the Motivapp ecosystem.
 * The purpose of this library is to be able to swap the authentication logic in the mobile repository.
 */
export default class Authentication {
    /**
     * Gets the access token from the local storage.
     * @returns The access token as string.
     */
    static getAccessToken(): Promise<string | null>;
    /**
     * Gets the access token from the local storage.
     * @returns The refresh token as string.
     */
    static getRefreshToken(): Promise<string | null>;
    /**
     * Saves the access token to the local storage.
     */
    static setAccessToken(token: string): Promise<void>;
    /**
     * Saves the refresh token to the local storage.
     */
    static setRefreshToken(token: string): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map