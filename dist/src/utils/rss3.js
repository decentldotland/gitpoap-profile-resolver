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
exports.getEnsFromRss3 = void 0;
const axios_1 = __importDefault(require("axios"));
function getEnsFromRss3(eth_address) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const profileConfig = {
                method: "get",
                url: `https://pregod.rss3.dev/v1.1.0/profiles/${eth_address}?network=ethereum`,
                headers: {
                    Accept: "application/json",
                },
            };
            const res = (_b = (_a = (yield (0, axios_1.default)(profileConfig))) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.result;
            // filter instead of find incase the wallet owns multiple ENS domains
            const ens = res.filter((element) => element.platform === "ENS Registrar");
            return ens ? ens : null;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    });
}
exports.getEnsFromRss3 = getEnsFromRss3;
