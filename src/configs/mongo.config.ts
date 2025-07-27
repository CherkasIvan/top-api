import { TypegooseModuleOptions } from 'nestjs-typegoose';

import { ConfigService } from '@nestjs/config';

export const getMongoConfig = async (
	configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
	await Promise.resolve();
	return {
		uri: getMongoString(configService),
		...getMongoOptions(),
	};
};

const getMongoString = (configService: ConfigService): string => {
	const authSource = configService.get<string>('MONGO_AUTHSOURCE');
	const login = configService.get<string>('MONGO_LOGIN');
	const password = configService.get<string>('MONGO_PASSWORD');
	const host = configService.get<string>('MONGO_HOST');
	const port = configService.get<string>('MONGO_PORT');
	const authDatabase = configService.get<string>('MONGO_AUTHDATABASE');

	// eslint-disable-next-line max-len
	return `mongodb://${login}:${password}@${host}:${port}/${authDatabase}?authSource=${authSource}`;
};

const getMongoOptions = (): Pick<
	TypegooseModuleOptions,
	'retryWrites' | 'w'
> => ({
	retryWrites: true,
	w: 'majority',
});
