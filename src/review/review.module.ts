import { TypegooseModule } from 'nestjs-typegoose/dist/typegoose.module';

import { Module } from '@nestjs/common';

import { ReviewController } from './review.controller';
import { ReviewModel } from './review.model';
import { ReviewService } from './service/review.service';

@Module({
	controllers: [ReviewController],
	imports: [TypegooseModule.forFeature([ReviewModel])],
	providers: [ReviewService],
})
export class ReviewModule {}
