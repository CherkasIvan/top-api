import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface AuthModel extends Base {}

export interface AuthModel extends TimeStamps {}
export class AuthModel extends TimeStamps {
	@prop({ unique: true, required: true })
		email: string;

	@prop({ required: true })
		passwordHash: string;
}
