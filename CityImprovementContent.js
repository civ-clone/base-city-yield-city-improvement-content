"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CityImprovementContent_cityImprovement;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityImprovementContent = void 0;
const Unhappiness_1 = require("@civ-clone/base-city-yield-unhappiness/Unhappiness");
const NegativeYield_1 = require("@civ-clone/core-yield/NegativeYield");
class CityImprovementContent extends Unhappiness_1.default {
    constructor(value, cityImprovement) {
        super(value, cityImprovement.id());
        _CityImprovementContent_cityImprovement.set(this, void 0);
        __classPrivateFieldSet(this, _CityImprovementContent_cityImprovement, cityImprovement, "f");
    }
    cityImprovement() {
        return __classPrivateFieldGet(this, _CityImprovementContent_cityImprovement, "f");
    }
}
exports.CityImprovementContent = CityImprovementContent;
_CityImprovementContent_cityImprovement = new WeakMap();
(0, NegativeYield_1.makeNegative)(CityImprovementContent);
exports.default = CityImprovementContent;
//# sourceMappingURL=CityImprovementContent.js.map