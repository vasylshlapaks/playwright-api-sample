import {test as base, request, APIRequestContext} from '@playwright/test';
import {userForLogin} from "../testData/text/users";
import config from "../playwright.config";

type apiFixtures = {
  authorizedRequest: APIRequestContext;
};

export const test = base.extend<apiFixtures>({
  authorizedRequest: async ({}, use) => {
    let authorizedRequest = await request.newContext({
      baseURL: config.use.baseURL
    });

    const tokenFetch = await authorizedRequest.post('/api/authaccount/login', {
      data: {
        "email": userForLogin.email,
        "password": userForLogin.password
      }
    });

    const response = await tokenFetch.json();
    await authorizedRequest.dispose();

    authorizedRequest = await request.newContext({
      baseURL: config.use.baseURL,
      extraHTTPHeaders: {
        Authorization: `Bearer ${response.data.Token}`
      }
    });

    await use(authorizedRequest);
  }
});

export { expect, request} from '@playwright/test';
