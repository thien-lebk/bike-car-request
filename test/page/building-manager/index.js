const common = require('../../common')
const variable = require('../../common/variable.js')
const translation = require("../../../public/locales/vi/translation.json");
const { faker } = require('@faker-js/faker');

const Page = {
goToLogin: () => common.amOnPage({ url: variable.baseUrl + '/#/auth/login' }),
gotoBuildingPage: () => common.clickValue({ selector: '.uhome-toanha' }),

fillValueEmail: (value = 'uh_user_uat01@getnada.com') => common.fillValue({ selector: 'input#username', value }),
fillValuePassword: (value = 'Ari123456') => common.fillValue({ selector: 'input#password', value }),
submitFormLogin: () => common.clickValue({ selector: 'button#btnLogin' }),
fillValueBuildingStaffid: (value ) => common.fillValue({ selector: 'input#building-staff', value }),
// selectValueBuildingRole: () =>
// common.clickValue({selector: `//*[@class='ant-select-selection-item-content' and text()='quản trị viên hệ thống']`}),

// selectValueBuildingStaffdes: (value) => common.selectItems({selector: '#select-role' }),
clickBuildingDetail: () => common.clickValue({selector: `//table/tbody/tr[2]//*[contains(@class, 'la-edit')]`}),
goToTabBuildingManager: () => common.clickValue({selector: `//main/div[3]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div/div[3]`}),
clickButtonAddBuildingStaff: () => common.clickValue({selector: '.btn-add-staff'}),
clickButtonSearch:() => common.clickValue({selector: '#search-user'}),
clickButtonSaveBuildingStaff: () => common.clickValue({selector: `//*[@id='btn-save-roles']`}),

clickRole:() => common.clickValue({selector: `//*[@class='ant-select select-roles ant-select-multiple ant-select-show-search']`}),
selectValueBuildingRole: (value='quản trị viên hệ thống') =>
common.selectItems({selector: `//*[@id="select-role"]`}),

}

module.exports = Page;