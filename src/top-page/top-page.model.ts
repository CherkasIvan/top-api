import { TopLevelCategory } from './top-level-category.enum';

export class TopPageModel {
	_id: string;
	firstCategory: TopLevelCategory;
	secondCategory: string;
	title: string;
	category: string;
	hh?: {
		count: number;
		junior: number;
		middle: number;
		sinior: number;
	};
	advantages:
		{
			title: string;
			description: string;
		}[];
	seoTitle: string;
	tagsTitle: string;
	tags: string[];
}
