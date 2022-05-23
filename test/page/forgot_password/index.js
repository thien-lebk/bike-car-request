const common = require('../../common')
const translation = require("../../../public/locales/vi/translation.json");
const { faker } = require('@faker-js/faker');
const variable = require('../../common/variable.js')

const Page = {
    goToForgotPass: () => common.amOnPage({url: variable.baseUrl + '/#/auth/forgot-password'}),
    
    goToYopmail: () => common.amOnPage({url: 'https://yopmail.com/en/'}),
    clickAddInbox: () => common.clickValue({selector: 'button#__layout'}),
    fillValueEmailInbox : (value = 'uh_user02@yopmail.com') => common.fillValue({selector: 'input#emailOrPhoneNumber', value}),
    goToLinkActive: () => common.clickValue({selector: '#mail a', iframe: '#ifmail', nextTab: true}),
    
    fillValueYopmail: (value = '') => common.fillValue({selector: 'input.ycptinput', value, keyboardKey:'Enter'}),
    
    fillValueEmail: (value = 'uh_user_02@getnada.com') => common.fillValue({selector: 'input#emailOrPhoneNumber', value}),
    clickGetOTP:() => common.clickValue({ selector: 'button#idSubmit' }),
    clickConfirmOTP: () => common.clickValue({selector: '.swal2-confirm'}),
}

module.exports = Page
