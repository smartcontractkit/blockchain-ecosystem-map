const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: 'yaml-loader',
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      }
    );

    return config;
  },
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
});
