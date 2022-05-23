const common = require('../../common')
const variable = require('../../common/variable.js')
const translation = require("../../../public/locales/vi/translation.json");
const { faker } = require('@faker-js/faker');

const Page = {
  goToLogin: () => common.amOnPage({url: variable.baseUrl + '/#/auth/login'}),

  fillValueEmail: (value = faker.internet.email()) => common.fillValue({selector: 'input#username', value}),
  fillValuePassword: (value = 'Ari123456') => common.fillValue({selector: 'input#password', value}),
  submitFormLogin: () => common.clickValue({selector: 'button#btnLogin'}),

  checkIsPageLogin: () => common.waitForText({text: translation.routes.auth.login['Log In'], selector: '#title-login'}),

  checkIsPageRegister: () => common.waitForText({text: translation.routes.auth.register.title, selector: '#title-register'}),
  displayText: (text) => common.waitForText({text, selector: 'th.ant-table-cell'}),

  displayTextSuccessfully: () => Page.displayText(translation.columns.admin.roomRules.Regulations),
  displayNotificationFailed: () => Page.displayNotification(translation.components.message.Fail),

  displayLengthErrorValidationMessage: (length = 4) =>
    common.waitNumberOfVisibleElements({selector: '.ant-form-item-explain-error', length}),

  accessBuildingList:() =>common.clickValue({selector:'li#Buildinglistid'}),
  accessBuildingDetail:()=> common.clickValue({selector:"td.ant-table-cell.ant-table-cell-fix-left.ant-table-cell-fix-left-last:nth-of-type(1)"}),
  accessRoomList:()=> common.clickValue({selector:"div.ant-tabs-tab:nth-of-type(8)"}),
  accessRoomDetail:()=> common.clickValue({selector:'td.ant-table-cell.ant-table-cell-fix-left.ant-table-cell-fix-left-last'}),
  accessRuleTab:()=> common.clickValue({selector:'div.ant-tabs-tab:nth-of-type(6)'}),


}
module.exports = Page

