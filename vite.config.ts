import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { UserConfig as VitestUserConfig } from 'vitest/config';

declare module 'vite' {
    export interface UserConfig {
        test: VitestUserConfig['test'];
    }
}

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
    }
});
