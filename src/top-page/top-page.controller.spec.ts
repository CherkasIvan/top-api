import { Test, TestingModule } from '@nestjs/testing';

import { TopPageController } from './top-page.controller';

describe('TopPageController', () => {
    let controller: TopPageController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TopPageController],
        }).compile();

        controller = module.get<TopPageController>(TopPageController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
