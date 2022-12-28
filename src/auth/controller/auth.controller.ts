import { Controller, Request, Post, UseGuards, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../service/auth.service';
import { Users } from '../user.entity';

@Controller('auth')
export class AuthController {
    constructor(private usersService: AuthService) { }
    
    @Post('signup')
    async signup(@Body() user: Users): Promise<Users> {
        try {
            return this.usersService.signup(user);
        } catch (error) {
            throw new HttpException({
                message: error.message
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    };

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        try {
            return this.usersService.login(req.user)
        } catch (error) {
            throw new HttpException({
                message: error.message
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}