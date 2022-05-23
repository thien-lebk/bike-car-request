const common = require('../../common')
const variable = require('../../common/variable.js')
const translation = require("../../../public/locales/vi/translation.json");

const Page = {
    goToLogin: () => common.amOnPage({ url: variable.baseUrl + '/#/auth/login' }),
    gotoTabRoomList :()=> common.clickValue({ selector: `//main/div[3]/div[1]/div[2]/div[2]/div/div[1]/div[1]/div/div[8]`}),
   
    fillValueEmail: (value = 'uh_user_uat01@getnada.com') => common.fillValue({ selector: 'input#username', value: value.prefixAutoTest + value }),
    fillValuePassword: (value = 'Ari123456') => common.fillValue({ selector: 'input#password', value }),
    fillValueRoomNum : (value = '')=> common.fillValue({selector: 'input#roomNumber',value}),
    fillValueTypeclassify :(value)=> common.selectItems({selector: 'input#type',value}), //+++
    fillValueNumTenants :(value='')=> common.fillValue({selector: 'input#numTenants',value}),
    fillValueAcreage : (value='')=> common.fillValue({selector: 'input#acreage',value}),
    fillValueBonus :(value='')=> common.fillValue({selector: 'input#bonus',value}),
    fillValueDeposit :(value='')=> common.fillValue({selector: 'input#deposit',value}),
    fillValuePrice :(value='')=> common.fillValue({selector: 'input#price',value}),
    fillValueCalssify : (value='')=> common.fillValue({selector: 'input#type',value}), 
 
    clickButtonEditFirstRoom: () => common.clickValue({ selector: `//table/tbody/tr[2]//*[contains(@class, 'la-edit')]` }),
    clickButtonDeleteFirstRoom: () => common.clickValue({ selector: `//table/tbody/tr[2]//*[contains(@class, 'uhome-trash')]` }),
    clickButtonAcceptDelete: () => common.clickValue({ selector: '.ant-btn-primary.ant-btn-sm' }),

    clickButtonAddNew: () => common.clickValue({ selector: '//div/div[1]/div[2]/div/button[2]' }),
    clickButtonSave :() => common.clickValue({ selector: '//div[3]/button'}),

    displayNotification: (text) => common.waitForText({ text, selector: '#swal2-title' }),
    displayNotificationSuccessfully: () => Page.displayNotification(translation.components.message.Success),
    displayNotificationFailed: () => Page.displayNotification(translation.components.message.Fail),
    displayLengthErrorValidationMessage: (length = 3) =>
        common.waitNumberOfVisibleElements({ selector: '.ant-form-item-explain-error', length })

}
module.exports = Page