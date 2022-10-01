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
exports.getProfile = void 0;
const github_1 = require("./github");
const gitpoap_1 = require("./gitpoap");
const rss3_1 = require("./rss3");
require("./setEnv");
function getProfile(github_handle) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!(0, github_1.isValidGithubHandle)(github_handle)) {
                return { error: "invalid github username syntax" };
            }
            const githubProfile = yield (0, github_1.getGithubProfile)(github_handle);
            if (!githubProfile) {
                return { error: "invalid github username syntax" };
            }
            const userGitPoaps = yield (0, gitpoap_1.poapsOf)(github_handle);
            if (userGitPoaps.length === 0) {
                return {
                    github_object: githubProfile,
                    eth_address: null,
                    ens: null,
                    gitpoaps: [],
                };
            }
            const ethAddress = (_a = (yield (0, gitpoap_1.getPoapOwnerOf)(userGitPoaps[0].poapTokenId))) === null || _a === void 0 ? void 0 : _a.owner;
            const ens = yield (0, rss3_1.getEnsFromRss3)(ethAddress);
            return {
                github_profile: githubProfile,
                eth_address: ethAddress,
                ens: ens,
                gitpoaps: userGitPoaps,
            };
        }
        catch (error) {
            return { error: "something went wrong, try again later :-)" };
        }
    });
}
exports.getProfile = getProfile;
