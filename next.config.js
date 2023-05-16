const path = require('path');

module.exports = {
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'stay-with-ukraine-next.vercel.app' }],
      destination: 'https://www.stay-with-ukraine-next.vercel.app/:path*',
      permanent: true
    }
  ],
  experimental: {
    nextScriptWorkers: true,
  },
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'en',
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(woff(2)?|eot|ttf|otf|)$/,
      type: 'asset/resource',
      generator: {
        filename: 'fonts/[hash][ext][query]',
      },
    });

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};
