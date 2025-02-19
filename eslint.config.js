import globals from 'globals';
import pluginJs from '@eslint/js';
import react from 'eslint-plugin-react';
import ts from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

/** @type {import('eslint').Linter.Config[]} */
export default ts.config(
	pluginJs.configs.recommended,
	...ts.configs.recommended,
	{
		files: ['**/*.{ts,tsx}'],
		extends: [importPlugin.flatConfigs.recommended],
		plugins: {
			react
		},
		settings: {
			'react': {
				version: 'detect'
			},
			'import/resolver': {
				typescript: true,
				node: true
			}
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			},
			globals: {
				...globals.browser,
				...globals.node,
				NodeJS: true
			}
		},
		rules: {
			'semi': ['error'],
			'no-console': 'error',
			'no-unused-vars': 'off',
			'no-useless-catch': 'off',
			'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],

			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-unused-vars': 'off',

			'quote-props': ['warn', 'as-needed'],
			'import/order': [
				'error',
				{
					'newlines-between': 'always',
					'groups': [
						['builtin', 'external'],
						'internal',
						'parent',
						'sibling',
						'index'
					]
				}
			],

			'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
			'react/jsx-first-prop-new-line': ['error', 'multiline'],
			'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
			'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
			'react/function-component-definition': [
				'error',
				{
					namedComponents: 'function-declaration',
					unnamedComponents: 'function-expression'
				}
			],
			'react/jsx-one-expression-per-line': ['error'],
			'react/jsx-wrap-multilines': [
				'error',
				{
					declaration: 'parens-new-line', // Для компонентов, определяемых через переменные
					assignment: 'parens-new-line', // Для присвоений значений в JSX
					return: 'parens-new-line', // Для return выражений с JSX
					arrow: 'parens-new-line', // Для стрелочных функций с JSX
					condition: 'parens-new-line', // Для тернарных операторов с JSX
					logical: 'parens-new-line', // Для логических операций с JSX
					prop: 'parens-new-line' // Для пропсов JSX
				}
			],
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/jsx-closing-tag-location': 'error',
			'react/jsx-indent': ['error', 4],
			'react/jsx-indent-props': ['error', 4],
			'react/jsx-key': ['error', { checkFragmentShorthand: true }]
		}
	},
	{
		ignores: [
			'build/**/*',
			'.next/**/*',
			'**/gen/*',
			'next.config.js',
			'next-i18next.config.js'
		]
	}
);
