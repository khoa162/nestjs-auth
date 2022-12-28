"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCredsLogin = exports.checkCredsSignup = void 0;
const common_1 = require("@nestjs/common");
const checkCredsSignup = (req, res, next) => {
    if ('username' in req.body && 'password' in req.body && 'role' in req.body) {
        if (req.body.username.replace(/\s/g, '').length > 0 && req.body.password.replace(/\s/g, '').length > 0) {
            next();
        }
        else {
            throw new common_1.BadRequestException('Bad Request', { description: 'Invalid Inputs' });
        }
    }
    else {
        throw new common_1.UnauthorizedException();
    }
};
exports.checkCredsSignup = checkCredsSignup;
const checkCredsLogin = (req, res, next) => {
    if ('username' in req.body && 'password' in req.body) {
        if (req.body.username.replace(/\s/g, '').length > 0 && req.body.password.replace(/\s/g, '').length > 0) {
            next();
        }
        else {
            throw new common_1.BadRequestException('Bad Request', { description: 'Invalid Inputs' });
        }
    }
    else {
        throw new common_1.UnauthorizedException();
    }
};
exports.checkCredsLogin = checkCredsLogin;
//# sourceMappingURL=index.js.map