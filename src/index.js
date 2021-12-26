"use strict";
exports.__esModule = true;
exports.survivant = void 0;
var cima_h_json_1 = require("./cima_h.json");
// import { People } from './people'
var survivant = function (age) {
    var rawData = cima_h_json_1["default"].find(function (obj) { return obj.age === age; });
    console.log(rawData);
    return;
};
exports.survivant = survivant;
