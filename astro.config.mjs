import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://silviaschohn.com',
  image: {
    // built-in image optimization: automatically generates
    // responsive, lazy-loaded, modern-format (webp/avif) images
    // from anything referenced with the <Image /> component.
  }
});
