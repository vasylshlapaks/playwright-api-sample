import { PlaywrightTestConfig } from '@playwright/test';
import {timeouts} from "./helpers/timeouts";

const config: PlaywrightTestConfig = {
  globalTimeout: timeouts.globalTestsTimeout,
  timeout: timeouts.testTimeout,
  outputDir: './test-results',
  reporter: [['list'], ['html', { outputFolder: 'test-results/report' }] ],
  use: {
    baseURL: 'http://restapi.adequateshop.com',
    extraHTTPHeaders: {
      'Accept': 'application/json',
    },
  }
};
export default config;
