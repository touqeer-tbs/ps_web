import { env } from './.env';

export const environment = {
  production: false,
  version: env['npm_package_version'] + '-dev',
  defaultLanguage: 'en-GB',
  apiUrl: 'api/',
  supportedLanguages: ['de-DE', 'en-GB'],
};
