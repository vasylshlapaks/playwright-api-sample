import {test, expect} from '../fixtures/baseFixture';
import {userForLogin} from "../testData/text/users";
import {getRandomEmail} from "../helpers/utils";

test('Checks user data fetching', async ({authorizedRequest}) => {
  const userData = await authorizedRequest.get(`/api/users/${userForLogin.id}`);

  expect(userData.ok()).toBeTruthy();
  expect(await userData.json()).toHaveProperty('id', userForLogin.id);
  expect(await userData.json()).toHaveProperty('email', userForLogin.email);
});

test('Checks user registration', async ({ request }) => {
  const newEmail = getRandomEmail();

  const registeredUser = await request.post(`api/authaccount/registration`, {
    data: {
      "name": userForLogin.name,
      "email": newEmail,
      "password": userForLogin.password
    }
  });

  expect(registeredUser.ok()).toBeTruthy();
  expect(await registeredUser.json()).toHaveProperty('message', 'success');
  expect(await registeredUser.json()).toHaveProperty('data.Name', userForLogin.name);
  expect(await registeredUser.json()).toHaveProperty('data.Email', newEmail);
});
