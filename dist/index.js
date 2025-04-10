"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trycatch = exports.$try = exports.when = void 0;
function when(...args) {
    let prev = null;
    for (const arg of args) {
        if (typeof arg === "boolean") {
            if (prev === true)
                continue;
        }
        else {
            if (prev === true || prev !== false)
                return arg;
        }
        prev = arg;
    }
    throw new Error("Invalid when usage.");
}
exports.when = when;
function $try(_try, _catch) {
    try {
        return _try.bind(null)();
    }
    catch (e) {
        return _catch.bind(null, e)();
    }
}
exports.$try = $try;
exports.trycatch = $try;
