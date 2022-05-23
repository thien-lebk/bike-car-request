const common = require('../../common')
const variable = require('../../common/variable.js')
const translation = require("../../../public/locales/vi/translation.json");
const { faker } = require('@faker-js/faker');


const Page = {
    goToLogin: () => common.amOnPage({ url: variable.baseUrl + '/#/auth/login' }),
    gotoBuildingPage: () => common.clickValue({ selector: '.uhome-toanha' }),
    gotoTabRoomList :()=> common.clickValue({ selector: `//main/div[3]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div/div[8]`}),
    gotoTabRoomUtilities : ()=> common.clickValue({ selector:'//main/div[3]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div/div[5]'}),

    fillValueEmail: (value = 'uh_user_uat01@getnada.com') => common.fillValue({ selector: 'input#username', value: value.prefixAutoTest + value }),
    fillValuePassword: (value = 'Ari123456') => common.fillValue({ selector: 'input#password', value }),

    fillValueTypeUtilities: (value='d') => common.selectItems({ selector: '//*[@id="name"]', value }),

    fillValueNameUtilities: (value = '') => common.fillValue({ selector: '//*[@id="name"]', value }),

     fillValueDescription: (value='' ) => common.fillValue({ selector: '#description',value}),
     fillvalue : ()=> common.clickValue({ selector:'//*[@id="description"]'}),
     clickButtonEditFirstBuilding: () => common.clickValue({ selector: `//table/tbody/tr[2]//*[contains(@class, 'la-edit')]` }),
     clickButtonEditFirstRoomUtilities :()=> common.clickValue({selector:'//div[2]//table/tbody/tr[2]/td[3]//button[1]'}),
     clickButtonDeleteFirstRoom: () => common.clickValue({ selector: `//table/tbody/tr[2]//*[contains(@class, 'uhome-trash')]` }),
     clickButtonAcceptDelete: () => common.clickValue({ selector: '.ant-btn.ant-btn-primary.ant-btn-sm' }),
     clickButtonCancelDelete: () => common.clickValue({ selector: '.ant-btn.ant-btn-default.ant-btn-sm' }),


    clickAddRoomUtilitiesFromList: () => common.clickValue({ selector: '//div/div[1]/div[2]/div/button[1]' }),
    clickButtonAddNew: () => common.clickValue({ selector: '//div/div[1]/div[2]/div/button[2]' }),

    clickButtonSaveAdd: () => common.clickValue({ selector: 'button.btn-save' }),

    clickButtonCancelAdd: () => common.clickValue({ selector: 'button.btn-cancel' }),
    clickButtonEditFirstRoom: () => common.clickValue({ selector: `//table/tbody/tr[2]//*[contains(@class, 'la-edit')]` }),


    displayNotification: (text) => common.waitForText({ text, selector: '#swal2-title' }),
    displayNotificationSuccessfully: () => Page.displayNotification(translation.components.message.Success),
    displayNotificationFailed: () => Page.displayNotification(translation.components.message.Fail),
    displayLengthErrorValidationMessage: (length = 3) =>
        common.waitNumberOfVisibleElements({ selector: '.ant-form-item-explain-error', length })

}
module.exports = Page
