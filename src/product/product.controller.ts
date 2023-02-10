import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';
import { Controller } from '@nestjs/common';

@Controller('product')
export class ProductController {

	@Post('create')
	async create(@Body() dto: Omit<ProductModel, '_id'>) {

	}

	@Get(':id')
	async get(@Param('id') id: string) {

	}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: ProductModel) {}

	@HttpCode('200')
	@Post()
	async finde(@Body() dto: FindProductDto) {}
}
