// eslint.config.js
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    ignores: ['node_modules', 'dist', 'build', 'coverage'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        React: true,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
])
