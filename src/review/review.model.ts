import { Types } from 'mongoose';

import { modelOptions, prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

// Базовый класс с объединением Base и TimeStamps
class BaseEntity extends TimeStamps implements Base {
	_id!: Types.ObjectId;
	id!: string;
}

@modelOptions({
	schemaOptions: {
		timestamps: true,
	},
})
export class ReviewModel extends BaseEntity {
	@prop()
		name!: string;

	@prop()
		title!: string;

	@prop()
		description!: string;

	@prop({ required: true, min: 1, max: 5 })
		rating!: number;

	@prop({ type: Types.ObjectId, required: true })
		productId!: Types.ObjectId;
}
