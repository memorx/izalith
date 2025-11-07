import { defineConfig, globalIgnores } from 'eslint/config';
import next from 'eslint-config-next/core-web-vitals.js';
import nextTs from 'eslint-config-next/typescript.js'; // ← Agregar .js

const eslintConfig = defineConfig([
  ...next,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts'])
]);

export default eslintConfig;
