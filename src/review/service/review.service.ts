import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

import { Inject, Injectable } from '@nestjs/common';

import { ReturnModelType } from '@typegoose/typegoose';

import { CreateReviewDto } from '../dto/create-review.dto';
import { ReviewModel } from '../review.model';

@Injectable()
export class ReviewService {
	constructor(
		@Inject(ReviewModel)
		private readonly reviewModel: ReturnModelType<typeof ReviewModel>,
	) {}

	async create(dto: CreateReviewDto): Promise<ReviewModel> {
		return this.reviewModel.create(dto);
	}

	async delete(id: string): Promise<ReviewModel | null> {
		return this.reviewModel.findByIdAndDelete(id).exec();
	}

	async findByProductId(productId: string): Promise<ReviewModel[]> {
		return this.reviewModel
			.find({ productId: new Types.ObjectId(productId) })
			.exec();
	}
}
