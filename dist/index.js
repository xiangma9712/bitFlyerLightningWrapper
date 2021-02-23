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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var invoker_1 = require("./lib/invoker");
var LightningApi = /** @class */ (function () {
    function LightningApi(key, secret) {
        this.invoker = new invoker_1.ApiInvoker(key, secret);
    }
    LightningApi.prototype.getMarkets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoker.get('markets', false)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.validateResponse(response)];
                }
            });
        });
    };
    LightningApi.prototype.getBoard = function (queryParam) {
        if (queryParam === void 0) { queryParam = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoker.get("board" + this.getProductQuery(queryParam), false)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.validateResponse(response)];
                }
            });
        });
    };
    LightningApi.prototype.getTicker = function (queryParam) {
        if (queryParam === void 0) { queryParam = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoker.get("ticker" + this.getProductQuery(queryParam), false)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.validateResponse(response)];
                }
            });
        });
    };
    LightningApi.prototype.getExecutions = function (productQuery, pageQuery) {
        if (productQuery === void 0) { productQuery = {}; }
        if (pageQuery === void 0) { pageQuery = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var productQueryStr, pageQueryStr, hasBothQuery, hasNoQuery, query, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productQueryStr = this.getProductQuery(productQuery, false);
                        pageQueryStr = this.getQuery(pageQuery, false);
                        hasBothQuery = productQueryStr !== '' && pageQueryStr !== '';
                        hasNoQuery = productQueryStr === '' && pageQueryStr === '';
                        query = "" + (hasNoQuery ? '' : '?') + productQueryStr + (hasBothQuery ? '&' : '') + pageQueryStr;
                        return [4 /*yield*/, this.invoker.get("executions" + query, false)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.validateResponse(response)];
                }
            });
        });
    };
    LightningApi.prototype.getBoardState = function (queryParam) {
        if (queryParam === void 0) { queryParam = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoker.get("getboardstate" + this.getProductQuery(queryParam), false)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.validateResponse(response)];
                }
            });
        });
    };
    LightningApi.prototype.getHealth = function (queryParam) {
        if (queryParam === void 0) { queryParam = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoker.get("gethealth" + this.getProductQuery(queryParam), false)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.validateResponse(response)];
                }
            });
        });
    };
    LightningApi.prototype.getChats = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoker.get('getchats', false)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.validateResponse(response)];
                }
            });
        });
    };
    LightningApi.prototype.getPermissions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoker.get('me/getpermissions')];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.validateResponse(response)];
                }
            });
        });
    };
    LightningApi.prototype.getBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.invoker.get('me/getbalance')];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.validateResponse(response)];
                }
            });
        });
    };
    LightningApi.prototype.validateResponse = function (response) {
        if (response.data != undefined) {
            return response.data;
        }
        else {
            throw new Error(response.status + ": " + JSON.stringify(response.data));
        }
    };
    LightningApi.prototype.getProductQuery = function (queryParam, withQuestionMark) {
        if (withQuestionMark === void 0) { withQuestionMark = true; }
        if (queryParam.productCode == undefined && queryParam.alias == undefined) {
            return '';
        }
        var query = queryParam.productCode ? queryParam.productCode : queryParam.alias;
        return (withQuestionMark ? '?' : '') + "product_code=" + query;
    };
    LightningApi.prototype.getQuery = function (queryParam, withQuestionMark) {
        if (withQuestionMark === void 0) { withQuestionMark = true; }
        var query = Object.keys(queryParam).map(function (key) { return key + "=" + queryParam[key]; }).join('&');
        return withQuestionMark ? '?' + query : query;
    };
    return LightningApi;
}());
exports.default = LightningApi;
