import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        outDir: 'public',
        assetsDir: 'assets',
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'assets'),
        },
    },
    rollupInputOptions: {
        input: {
            main: [
                path.resolve(__dirname, 'assets/js/main.js')
            ],
        },
    },
});
