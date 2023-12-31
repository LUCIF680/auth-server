"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const userServices = tslib_1.__importStar(require("../services/user"));
const router = express_1.default.Router();
/* GET all users */
router.get('/', userServices.getAllUsers);
exports.default = router;
//# sourceMappingURL=users.js.map