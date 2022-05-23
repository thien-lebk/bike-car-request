const common = require('../../common')
const variable = require('../../common/variable.js')
const translation = require("../../../public/locales/vi/translation.json");

const Page = {
    // goToLogin: () => common.amOnPage({ url: variable.baseUrl + '/#/auth/login' }),
    goToLogin: () => common.amOnPage({ url: variable.baseUrl + '/#/auth/login' }),
    gotoEmployeePage: () => common.clickValue({ selector: '.uhome-contract' }),
    // gotoEmployeePage: () => common.clickValue({ selector: '.uhome-contract' }),

    fillValueEmail: (value = 'thaison5qt@gmail.com') => common.fillValue({ selector: 'input#username', value }),
    fillValuePassword: (value = 'Ari123456') => common.fillValue({ selector: 'input#password', value }),
    // fillValueSearch : (value) =>common.fillValue({ selector:'input#'})
    fillValueRole: (value) => common.fillValue({ selector: 'input#rc_select_17', value }),
    fillValueStatus: (value) => common.fillValue({ selector: 'input#rc_select_16', value }),

    submitFormLogin: () => common.clickValue({ selector: 'button#btnLogin' }),

    clickButtonEditFirstBuilding: () => common.clickValue({ selector: `//table/tbody/tr[2]//*[contains(@class, 'la-edit')]` }),
    clickButtonDeleteEmployee: () => common.clickValue({ selector: `//table/tbody/tr[2]//*[contains(@class, 'uhome-trash')]` }),
    clickButtonAcceptDelete: () => common.clickValue({ selector: 'ant-btn.ant-btn-primary.ant-btn-sm' }),
    //clickButtonSelectedAll: () => common.clickValue({ selector: '.text-white.w-40.h-10.justify-center.rounded-xl.inline-flex.items-center.bg-blue-500.hover:bg-blue-700.mr-4' }),
    clickDeleteSelect: () => common.clickValue({ selector: '.btn-deleteselect' }),
    clickCofirmDelete: () => common.clickValue({ selector: '.swal2-confirm' }),
    clickCheckBoxAllEmployee: () => common.clickValue({ selector: '.ant-checkbox' }),
    clickCheckBoxOneEmployee: () => common.clickValue({ selector: '.ant-checkbox-input' }),
    clickUhomeTrash: () => common.clickValue({ selector: '.uhome-trash' }),
    clickEditEmployee: () => common.clickValue({ selector: '.las.la-edit' }),

    displayNotification: (text) => common.waitForText({ text, selector: '#swal2-title' }),
    displayNotificationSuccessfully: () => Page.displayNotification(translation.components.message.Success),
    displayNotificationFailed: () => Page.displayNotification(translation.components.message.Fail),
    displayLengthErrorValidationMessage: (length = 3) => {
        common.waitNumberOfVisibleElements({ selector: '.ant-form-item-explain-error', length })
    }
}
module.exports = Page