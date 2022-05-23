const common = require('../../common')
const variable = require('../../common/variable.js')
const translation = require("../../../public/locales/vi/translation.json");
const { faker } = require('@faker-js/faker');

const Page = {
  
  goToLogin: () => common.amOnPage({ url: variable.baseUrl + '/#/auth/login' }),
  gotoBuildingPage: () => common.clickValue({ selector: '.uhome-toanha' }),

  fillValueEmail: (value = 'thaison5qt@gmail.com') => common.fillValue({ selector: 'input#username', value: value.prefixAutoTest + value }),
  fillValuePassword: (value = 'Ari123456') => common.fillValue({ selector: 'input#password', value }),
  fillValueNameBuilding: (value = 'Auto-test ' + faker.company.companyName()) => common.fillValue({ selector: 'input#name', value: value.prefixAutoTest + value }),
  fillValueTypeBuilding: (value) => common.selectItems({ selector: 'input#type', value }),
  fillValueAddressBuilding: (value = faker.address.county()) => common.fillValue({ selector: 'input#address',value: value.prefixAutoTest + value }),

  submitFormLogin: () => common.clickValue({ selector: 'button#btnLogin' }),

  clickButtonEditFirstBuilding: () => common.clickValue({ selector: `//table/tbody/tr[2]//*[contains(@class, 'la-edit')]` }),
  clickButtonDeleteFirstBuilding: () => common.clickValue({ selector: `//table/tbody/tr[2]//*[contains(@class, 'uhome-trash')]` }),
  clickButtonAcceptDelete: () => common.clickValue({ selector: '.ant-btn-primary.ant-btn-sm' }),
  clickButtonAddNew: () => common.clickValue({ selector: '.btn-add-building' }),
  clickButtonAddSaveNewBuilding: () => common.clickValue({ selector: '#button-addnewbuilding' }),
  clickButtonCancelDelete: () => common.clickValue({ selector: '.ant-btn.ant-btn-default.ant-btn-sm' }),
  displayNotification: (text) => common.waitForText({ text, selector: '#swal2-title' }),
  displayNotificationSuccessfully: () => Page.displayNotification(translation.components.message.Success),
  displayNotificationFailed: () => Page.displayNotification(translation.components.message.Fail),
  displayLengthErrorValidationMessage: (length = 3) =>
    common.waitNumberOfVisibleElements({ selector: '.ant-form-item-explain-error', length })

}
module.exports = Page
