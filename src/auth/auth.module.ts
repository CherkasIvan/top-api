import { TypegooseModule } from 'nestjs-typegoose';

import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthModel } from './auth.model';
import { AuthService } from './service/auth.service';

@Module({
	providers: [AuthService],
	controllers: [AuthController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: AuthModel,
				schemaOptions: { collection: 'Auth' },
			},
		]),
	],
})
export class AuthModule {}
