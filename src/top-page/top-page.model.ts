import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum ETopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}
export interface TopPageModel extends Base {}

export class HhData {
	@prop()
		count: number;

	@prop()
		juniorSalary: number;

	@prop()
		middleSalary: number;

	@prop()
		seniorSalary: number;
}

export class TopPageAdvantage {
	title: string;
	description: string;
}
export class TopPageModel extends TimeStamps {
	@prop({ ETopLevelCategory })
		firstLevelCategory: ETopLevelCategory;

	@prop()
		secondCategory: string;

	@prop({ unique: true })
		alias: string;

	@prop()
		title: string;

	@prop()
		category: string;

	@prop({ type: () => [HhData] })
		hh?: HhData;

	@prop({ type: () => [TopPageAdvantage] })
		advantages: TopPageAdvantage[];

	@prop()
		seoText: string;

	@prop()
		tagsTitle: string;

	@prop({ type: () => [String] })
		tags: string[];
}
