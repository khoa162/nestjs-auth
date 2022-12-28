import e, { NextFunction, Request, Response } from 'express';
import { UnauthorizedException, BadRequestException } from '@nestjs/common';

export const checkCredsSignup = (req: Request, res: Response, next: NextFunction) => {
    if ('username' in req.body && 'password' in req.body && 'role' in req.body) {
        if (req.body.username.replace(/\s/g, '').length > 0 && req.body.password.replace(/\s/g, '').length >0) {
            next();
        } else {
            throw new BadRequestException('Bad Request', {  description: 'Invalid Inputs' })
        }
    } else {
        throw new UnauthorizedException();
    }
};

export const checkCredsLogin = (req: Request, res: Response, next: NextFunction) => {
    if ('username' in req.body && 'password' in req.body) {
        if (req.body.username.replace(/\s/g, '').length > 0 && req.body.password.replace(/\s/g, '').length >0) {
            next();
        } else {
            throw new BadRequestException('Bad Request', {  description: 'Invalid Inputs' })
        }
    } else {
        throw new UnauthorizedException();
    }
};

