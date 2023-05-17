const path = require('path');

module.exports = {
  // experimental: {
  //   nextScriptWorkers: true,
  // },
  // redirects: async () => [
  //   {
  //     source: '/:path*',
  //     has: [{ type: 'host', value: 'stayua.com' }],
  //     destination: 'https://www.stayua.com/:path*',
  //     permanent: true
  //   }
  // ],
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
