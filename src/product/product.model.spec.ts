import { ProductModel } from './product.model';

describe('ProductModel', () => {
    it('should be defined', () => {
        expect(new ProductModel()).toBeDefined();
    });
});
