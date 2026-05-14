/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // output 'standalone' só é usado em deploy self-hosted (Docker/PM2).
  // Na Vercel, este setting é ignorado automaticamente. Pra deixar explícito,
  // ativamos só quando a env var BUILD_STANDALONE estiver definida.
  ...(process.env.BUILD_STANDALONE === 'true' ? { output: 'standalone' } : {}),
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
