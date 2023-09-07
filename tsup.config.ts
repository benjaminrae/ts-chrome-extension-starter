import dotenv from 'dotenv';
import { defineConfig } from 'tsup';
// load node env

dotenv.config();

const NODE_ENV = process.env.NODE_ENV;

export default defineConfig({
  entryPoints: ['src/index.ts'],
  format: ['cjs'],
  dts: NODE_ENV === 'development',
  sourcemap: NODE_ENV === 'development',
  minify: 'terser',
  terserOptions: {
    compress: {
      drop_console: NODE_ENV === 'production',
    },
  },
  clean: true,
  splitting: true,
  publicDir: 'public',
  outDir: 'dist',
  legacyOutput: true,
});
