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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPoapOwnerOf = exports.poapsOf = void 0;
const axios_1 = __importDefault(require("axios"));
function poapsOf(github_handle) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const poapsClaimed = (_a = (yield axios_1.default.get(`https://public-api.gitpoap.io/v1/github/user/${github_handle}/gitpoaps?status=claimed`))) === null || _a === void 0 ? void 0 : _a.data;
            const poapsUnclaimed = (_b = (yield axios_1.default.get(`https://public-api.gitpoap.io/v1/github/user/${github_handle}/gitpoaps?status=unclaimed`))) === null || _b === void 0 ? void 0 : _b.data;
            return poapsClaimed.concat(poapsUnclaimed);
        }
        catch (error) {
            return [];
        }
    });
}
exports.poapsOf = poapsOf;
function getPoapOwnerOf(poap_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // "test" is used on https://documentation.poap.tech/reference/postactionsclaim-delivery-v2
            const API_KEY = process.env.POAP_API_KEY || "test";
            const res = yield axios_1.default.get(`https://api.poap.tech/token/${poap_id}`, {
                headers: { "Content-Type": "application/json", "X-API-Key": API_KEY },
            });
            return res === null || res === void 0 ? void 0 : res.data;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    });
}
exports.getPoapOwnerOf = getPoapOwnerOf;
