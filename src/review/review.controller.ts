import { ReviewModel } from './review.model';
import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';

@Controller('review')
export class ReviewController {
	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Get('byProduct/:productId')
	async byProduct(@Param('productId') productId: string) {}
}
