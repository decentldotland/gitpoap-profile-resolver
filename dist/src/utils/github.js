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
exports.isValidGithubHandle = exports.getGithubProfile = void 0;
const axios_1 = __importDefault(require("axios"));
const github_username_regex_1 = __importDefault(require("github-username-regex"));
function getGithubProfile(github_handle) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = (_a = (yield axios_1.default.get(`https://api.github.com/users/${github_handle}`))) === null || _a === void 0 ? void 0 : _a.data;
            return res;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    });
}
exports.getGithubProfile = getGithubProfile;
function isValidGithubHandle(username) {
    return github_username_regex_1.default.test(username);
}
exports.isValidGithubHandle = isValidGithubHandle;
