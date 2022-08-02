import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://restapi.adequateshop.com',
    extraHTTPHeaders: {
      'Accept': 'application/json',
    },
  }
};
export default config;
