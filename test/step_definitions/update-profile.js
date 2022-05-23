const page = require('../page/my_profile')
const pageRegister = require('../page/register')

Given('Go to My profile tab info', () => {
  page.displayNameApplication();
  page.clickDropdownProfile();
  page.clickMenuMyProfile();
  page.displayTitle();
})
When('UP_02 - Check validation text when update with all fields are empty', () => {
  pageRegister.fillValueName(null);
  pageRegister.fillValueIdentity(null);
  pageRegister.fillValueEmail(null);
  pageRegister.fillValueAddress(null);
  pageRegister.fillValuePhone(null);
  page.submitFormInfo();
})
