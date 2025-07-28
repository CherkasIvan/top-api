import { ProductModel } from 'src/product/product.model';

import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Post,
} from '@nestjs/common';

import { REVIEW_NOT_FOUND } from './consts/review.const';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './service/review.service';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Post('create')
	async create(@Body() dto: CreateReviewDto) {
		return await this.reviewService.create(dto);
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {
		const deletedDocument = await this.reviewService.delete(id);
		if (!deletedDocument) {
			this.reviewService.delete(id);
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
		return await deletedDocument;
	}

	@Get('byProduct/:id')
	async getByProduct(@Param('productId') productId: string) {
		return await this.reviewService.findByProductId(productId);
	}
}
