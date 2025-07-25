import { Module } from '@nestjs/common';

import { AuthService } from './service/auth.service';

@Module({
    providers: [AuthService],
})
export class AuthModule {}
