import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: {
      server: 'src/server.ts',
      worker: 'src/worker.ts',
    },
    format: ['esm'],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ['pg-native'], // optional peer dependencies
  },
]);
