import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    // Use a more relaxed configuration that doesn't require type checking
    // This makes it more suitable for AI-generated code
    extends: [js.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Convert rules to warnings instead of errors
      ...Object.fromEntries(
        Object.entries(reactHooks.configs.recommended.rules).map(
          ([key, value]) => [key, 'warn']
        )
      ),
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Disable some rules that are too strict for a template
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-unused-vars': 'off',
      'prefer-const': 'warn',
    },
  },
  // Add a separate TypeScript configuration that is more relaxed
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      // TypeScript-specific rules set to warning or off
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  }
)