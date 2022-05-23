const common = require('../../common')
const variable = require('../../common/variable.js')
const translation = require("../../../public/locales/vi/translation.json");
const { faker } = require('@faker-js/faker');

const Page = {
    goToLogin: () => common.amOnPage({ url: variable.baseUrl + '/#/auth/login' }),
    gotoBuildingPage: () => common.clickValue({ selector: '.uhome-toanha' }),
    clickTabUtilityBuilding: () => common.clickValue({ selector: '//main/div[3]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div/div[5]' }),

    fillValueEmail: (value = 'uh_user_uat01@getnada.com') => common.fillValue({ selector: 'input#username', value: value.prefixAutoTest + value }),
    fillValuePassword: (value = 'Ari123456') => common.fillValue({ selector: 'input#password', value }),

    fillValueDescription: (value='' ) => common.fillValue({ selector: '#description',value}),
    fillValueTypeUtilities: (value='s') => common.selectItems({ selector: '(//*[@id="name"])[2]', value }),
    //(//*[@id="name"])[2]
    fillValueNameUtilities: (value = '') => common.fillValue({ selector: '(//*[@id="name"])[2]', value }),
    submitFormLogin: () => common.clickValue({ selector: 'button#btnLogin' }),
    clickButtonSaveAddnew: () => common.clickValue({ selector: 'button.btn-save' }),
    clickButtonCancelAddnew: () => common.clickValue({ selector: 'button.btn-cancel' }),

    clickButtonEditFirstBuilding: () => common.clickValue({ selector: `//table/tbody/tr[2]//*[contains(@class, 'la-edit')]` }),
    clickButtonDeleteFirstBuilding: () => common.clickValue({ selector: `//table/tbody/tr[2]//*[contains(@class, 'uhome-trash')]` }),
   
    // clickEditFirstUtilities : ()=> common.clickValue({selector:'span.uhome-edit-solid'}),
    

    clickButtonDeleteFirstUtility: () => common.clickValue({ selector: '.uhome-trash' }),
    clickButtonAcceptDelete: () => common.clickValue({ selector: '.ant-btn.ant-btn-primary.ant-btn-sm' }),
    clickButtonCancelDelete: () => common.clickValue({ selector: '.ant-btn.ant-btn-default.ant-btn-sm' }),
    clickAddUtilitiesFromList: () => common.clickValue({ selector: '.btn-add-list' }),

    clickButtonAddNew: () => common.clickValue({ selector: '.btn-addnew' }),

    displayNotification: (text) => common.waitForText({ text, selector: '#swal2-title' }),
    displayNotificationSuccessfully: () => Page.displayNotification(translation.components.message.Success),
    displayNotificationFailed: () => Page.displayNotification(translation.components.message.Fail),
    displayLengthErrorValidationMessage: (length = 3) =>
        common.waitNumberOfVisibleElements({ selector: '.ant-form-item-explain-error', length })

}
module.exports = Page
