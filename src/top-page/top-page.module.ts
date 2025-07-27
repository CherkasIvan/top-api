import { TypegooseModule } from 'nestjs-typegoose/dist/typegoose.module';

import { Module } from '@nestjs/common';

import { TopPageController } from './top-page.controller';
import { TopPageModel } from './top-page.model';

@Module({
	controllers: [TopPageController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: TopPageModel,
				schemaOptions: { collection: 'TopPage' },
			},
		]),
	],
})
export class TopPageModule {}
