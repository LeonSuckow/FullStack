"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const greeting_1 = require("./utils/greeting");
const express_1 = __importDefault(require("express"));
(0, greeting_1.saudacao)();
const app = (0, express_1.default)();
const port = 3333;
app.listen(port, () => {
    console.log(`Application running localhost:${port}`);
});
//# sourceMappingURL=server.js.map