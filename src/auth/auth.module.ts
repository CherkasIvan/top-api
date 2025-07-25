import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './service/auth.service';

@Module({
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
