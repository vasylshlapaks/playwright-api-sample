import {test, expect} from '../fixtures/baseFixture';
import {userForLogin} from "../testData/text/users";

test('Checks user data fetching', async ({authorizedRequest}) => {
  const userData = await authorizedRequest.get(`/api/users/${userForLogin.id}`);

  expect(userData.ok()).toBeTruthy();
  expect(await userData.json()).toHaveProperty('id', userForLogin.id);
  expect(await userData.json()).toHaveProperty('email', userForLogin.email);
});
