
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kannada Quotes Studio',
    short_name: 'Kannada Studio',
    description: 'Create and share beautiful Kannada quotes for your status',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#FF9500',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    orientation: 'portrait',
    scope: '/',
    categories: ['entertainment', 'social', 'lifestyle'],
    screenshots: [
      {
        src: 'https://picsum.photos/seed/pwa1/1080/1920',
        sizes: '1080x1920',
        type: 'image/png',
        label: 'App Home Screen',
      },
    ],
  }
}
