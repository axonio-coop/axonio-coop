"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(args, ctx) {
    var _a;
    if ((_a = ctx.data) === null || _a === void 0 ? void 0 : _a.title) {
        return "".concat(ctx.data.title, " \u00B7 ").concat(ctx.config.name);
    }
    else {
        return ctx.config.name;
    }
}
exports.default = default_1;
