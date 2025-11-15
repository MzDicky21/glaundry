"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseUtils {
    static async succes(c, message = "succes", data, code = 200) {
        c.status(code);
        return c.json({
            message,
            data
        });
    }
    static async created(c, message = "craeted succes fully", data, code = 201) {
        c.status(code);
        return c.json({
            message,
            data
        });
    }
    static async deleted(c, message = "deleted succes fully", code = 200, data) {
        c.status(code);
        return c.json({
            message,
            data
        });
    }
}
exports.default = ResponseUtils;
