import eslintPluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const compat = new FlatCompat();

export default [
	js.configs.recommended,
	{
		ignores: ['**/*.d.ts', 'dist/**', 'node_modules/**'],
	},
	{
		files: ['**/*.ts', '**/*.model.ts'],
		languageOptions: {
			globals: {
				...globals.node,
				...globals.jest,
			},
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		plugins: {
			'@typescript-eslint': tsEslint,
			prettier: eslintPluginPrettier,
		},
		rules: {
			// Базовые правила
			curly: 'error',
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'no-debugger': 'error',
			'no-var': 'error',
			'prefer-const': 'error',
			semi: ['error', 'always'],
			quotes: ['error', 'single'],
			indent: ['error', 'tab', { SwitchCase: 2 }],
			'max-len': ['error', { code: 80, ignoreComments: true }],
			'no-trailing-spaces': 'error',

			// TypeScript правила
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/no-misused-new': 'error',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/require-await': 'error',
			'@typescript-eslint/no-shadow': 'error',
			'@typescript-eslint/no-duplicate-enum-values': 'error',
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
			'@typescript-eslint/prefer-for-of': 'error',
			'@typescript-eslint/no-require-imports': 'error',
			'@typescript-eslint/no-empty-interface': 'off',
			'@typescript-eslint/no-unsafe-declaration-merging': 'off',
			'no-redeclare': 'off',
			'@typescript-eslint/no-redeclare': 'off',

			// Стилевые правила
			'@typescript-eslint/naming-convention': [
				'error',
				{ selector: 'class', format: ['PascalCase'] },
				{ selector: 'interface', format: ['PascalCase'] },
				{ selector: 'typeAlias', format: ['PascalCase'] },
			],
			'prettier/prettier': 'error',
		},
	},
	{
		files: ['**/*.model.ts'],
		rules: {
			'@typescript-eslint/no-empty-interface': 'off',
			'@typescript-eslint/no-unsafe-declaration-merging': 'off',
		},
	},
];
