import { ProductModel } from 'src/product/product.model';

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('review')
export class ReviewController {
    @Post('create')
    async create(@Body() dto: Omit<ProductModel, '_id>'>) {}

    @Delete(':id')
    async delete(@Param('id') id: string) {}

    @Get('byProduct/:id')
    async getByProduct(@Param('productId') productId: string) {}
}
