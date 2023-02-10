import { ReviewModel } from './review.model';
import { Controller } from '@nestjs/common';

@Controller('review')
export class ReviewController {
	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>) {

	}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Get('byProduct/:productId')
	async byProduct(@Param('productId') productId: string) {}
}
