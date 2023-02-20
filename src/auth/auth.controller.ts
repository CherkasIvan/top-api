import { AuthDto } from './dto/auth.dto';
import { Controller, Post, Body } from '@nestjs/common';
import { HttpCode } from '@nestjs/common/decorators';

@Controller('auth')
export class AuthController {
	@Post('register')
	async register(@Body() dto: AuthDto) {}

	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto) {}
}
