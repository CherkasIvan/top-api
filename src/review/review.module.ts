import { TypegooseModule } from 'nestjs-typegoose/dist/typegoose.module';

import { Module } from '@nestjs/common';

import { ReviewController } from './review.controller';
import { ReviewModel } from './review.model';

@Module({
	controllers: [ReviewController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ReviewModel,
				schemaOptions: { collection: 'Review' },
			},
		]),
	],
})
export class ReviewModule {}
