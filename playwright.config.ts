import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'https://reqres.in/',
    extraHTTPHeaders: {
      'Accept': 'application/json',
    },
  }
};
export default config;
