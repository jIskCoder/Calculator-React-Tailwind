import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'icons/icon-192.png', 'icons/icon-512.png'],
      manifest: {
        name: 'React Calculator',
        short_name: 'Calculator',
        description: 'A calculator built with React and Tailwind CSS.',
        theme_color: '#1E2A3A',
        background_color: '#000000',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/apple-touch-icon.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
});
