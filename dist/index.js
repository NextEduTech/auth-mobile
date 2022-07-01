"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This library is used to handle operations related to authentication in the Motivapp ecosystem.
 * The purpose of this library is to be able to swap the authentication logic in the mobile repository.
 */
class Authentication {
    /**
     * Gets the access token from the local storage.
     * @returns The access token as string.
     */
    static getAccessToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return localStorage.getItem("access_token");
        });
    }
    /**
     * Gets the access token from the local storage.
     * @returns The refresh token as string.
     */
    static getRefreshToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return localStorage.getItem("refresh_token");
        });
    }
    /**
     * Saves the access token to the local storage.
     */
    static setAccessToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return localStorage.setItem("access_token", token);
        });
    }
    /**
     * Saves the refresh token to the local storage.
     */
    static setRefreshToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return localStorage.setItem("refresh_token", token);
        });
    }
}
exports.default = Authentication;
//# sourceMappingURL=index.js.map