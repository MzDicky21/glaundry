"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErr = getErr;
exports.messageErr = messageErr;
exports.throwErr = throwErr;
function getErr(c, error = {}, message = "An error occurred, please wait a moment!", code = 500) {
    c.status(code);
    return c.json({
        message,
        error: error?.message || "internal server error",
    });
}
function messageErr(c, message = "An error occurred, please wait a moment!", code = 500, error) {
    const err = error ? error : "Internal server error";
    c.status(code);
    return c.json({
        message,
        error: err
    });
}
function throwErr(status, message) {
    throw { status, message };
}
