const common = require('../../common')
const translation = require("../../../public/locales/vi/translation.json");
const { faker } = require('@faker-js/faker');

const Page = {    
    
goToLogin: () => common.amOnPage({ url: variable.baseUrl + '/#/auth/login' }),

clickDropdownProfile: () => common.clickValue({selector: 'section#dropdown-profile'}),
clickMenuMyProfile: () => common.clickValue({selector: 'li#menu-my-profile'}),
clickTabProfile: () => common.clickValue({selector: 'span#tab-profile'}),
submitForm: () => common.clickValue({selector: 'button#submit-change-user-profile'}),
clickLogin: () => common.clickValue({selector: 'button.swal2-confirm'}),

fillValueName: (value = faker.name.firstName() + ' '+ faker.name.lastName()) =>
common.fillValue({selector: 'input#name', value}),
fillValueNameCustom: (value = '') =>
Page.fillValueName(faker.name.firstName() + ' '+ faker.name.lastName() + value),

fillValueEmail: (value = faker.internet.email(faker.name.firstName(), faker.name.lastName(), 'yopmail.com').toLowerCase()) =>
common.fillValue({selector: 'input#email', value}),
fillValueEmailCustom: (value = '') =>
Page.fillValueEmail(faker.internet.email(faker.name.firstName(), faker.name.lastName(), 'yopmail.com').toLowerCase() + value),

fillValueGender: (value = translation.columns.auth.register.Female) =>
common.selectItems({selector: 'input#gender', value}),
fillValueGenderMale: (value = '') => Page.fillValueGender(translation.columns.auth.register.Male + value),
fillValueBrith: (value = '12-06-1998') => common.fillValue({selector: 'input#dateOfBirth', value}),

fillValueIdentity: (value = faker.phone.phoneNumber('############')) =>
common.fillValue({selector: 'input#identityCard', value}),
fillValueIdentityCustom: (value = '') =>
Page.fillValueIdentity(faker.phone.phoneNumber('###########') + value),

fillValuePhone: (value = faker.phone.phoneNumber('############')) =>
common.fillValue({selector: 'input#phoneNumber', value}),
fillValuePhoneCustom: (value = '') =>
Page.fillValuePhone(faker.phone.phoneNumber('############') + value),

fillValueAddress: (value = faker.address.streetAddress(true)) =>
common.fillValue({selector: 'input#address', value}),
fillValueAddressCustom: (value = '') =>
Page.fillValueAddress(faker.address.streetAddress(true) + value),

displayLengthErrorValidationMessage: (length = 4) =>
common.waitNumberOfVisibleElements({selector: '.ant-form-item-explain-error', length}),
// displayNameApplication: () => common.waitForText({text: 'Uhouse', selector: '#name-application'}),
displayTitle: () => common.waitForText({text: translation.columns.admin.profile['User Profile'], selector: '#title'}),
displayNotification: (text) => common.waitForText({text, selector: '#swal2-title'}),
displayError: (text) => common.waitForText({text, selector: '#swal2-title'}),
displayNotificationSaved: () => Page.displayNotification(translation.components.message.Saved),
displayNotificationError: () => Page.displayError(translation.components.message.Fail),

}

module.exports = Page
