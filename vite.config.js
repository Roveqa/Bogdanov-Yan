import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
var rootDir = fileURLToPath(new URL('.', import.meta.url));
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@app': resolve(rootDir, 'src/app'),
            '@pages': resolve(rootDir, 'src/pages'),
            '@widgets': resolve(rootDir, 'src/widgets'),
            '@features': resolve(rootDir, 'src/features'),
            '@entities': resolve(rootDir, 'src/entities'),
            '@shared': resolve(rootDir, 'src/shared'),
            '@content': resolve(rootDir, 'src/content'),
            '@transitions': resolve(rootDir, 'src/transitions'),
            '@themes': resolve(rootDir, 'src/themes'),
            '@seo': resolve(rootDir, 'src/seo'),
        },
    },
});
