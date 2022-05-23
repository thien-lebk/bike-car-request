const page = require('../page/update_profile')
// const pageLogin = require('../page/login')

Given('Go to My profile tab user profile', () => {
    page.clickDropdownProfile();
    page.clickMenuMyProfile();
    page.displayTitle();
    page.clickTabProfile();
})

Then('Display notification Saved', () => page.displayNotificationSaved())
Then('Display notification Error', () => page.displayNotificationError())
// Then('Display validation error', () => page.displayLengthErrorValidationMessage())
// Then('Display title My Profile', () => page.displayTitle())        
Then('Display 1 error validation message', () => page.displayLengthErrorValidationMessage(1))
Then('Display 2 error validation message', () => page.displayLengthErrorValidationMessage(2))
Then('Display 3 error validation message', () => page.displayLengthErrorValidationMessage(3))
Then('Display 4 error validation message', () => page.displayLengthErrorValidationMessage(4))
Then('Display 5 error validation message', () => page.displayLengthErrorValidationMessage(5))
Then('Display 6 error validation message', () => page.displayLengthErrorValidationMessage(6))
Then('Display 7 error validation message', () => page.displayLengthErrorValidationMessage(7))
Then('Display 8 error validation message', () => page.displayLengthErrorValidationMessage(8))

When('UP_01 - Update profile successfuly with all valid information', () => {
    page.fillValueName();
    page.fillValueBrith();
    page.fillValueGenderMale();
    page.fillValueIdentity();
    page.fillValuePhone();
    page.fillValueEmail('uh_user_uat01@getnada.com');
    page.fillValueAddress('abc 123');
    page.submitForm()
    // const username = I.clearField
    // page.fillValueName(username);
})


When('UP_02 - Check validation text when update with all fields are empty', () => {
    page.fillValueName('');
    page.fillValueBrith('');
    page.fillValueGenderMale('');
    page.fillValueIdentity('');
    page.fillValuePhone('');
    page.fillValueEmail('');
    page.fillValueAddress('');
    page.submitForm()
})


When('UP_03 - Check validation text of Họ và tên when update with empty Họ và tên', () => {
    page.fillValueName('');
    page.fillValueEmail('uh_user_uat01@getnada.com');
    page.fillValueBrith();
    page.fillValueGenderMale();
    page.fillValueIdentity();
    page.fillValuePhone();
    page.fillValueAddress('412 America Brige St');
    page.submitForm();
})

When('UP_04 - Check validation text of Ngày sinh when update with empty Ngày sinh', () => {
    page.fillValueName();
    // page.fillValueEmail('uh_user_uat01@getnada.com');
    page.fillValueBrith('');
    page.fillValueGenderMale();
    page.fillValueIdentity();
    page.fillValuePhone();
    page.fillValueAddress('412 America Brige St');
    page.submitForm();
})

When('UP_05 - Check validation text of Giới tính when update with empty Giới tính', () => {
    page.fillValueName();
    // page.fillValueEmail();
    page.fillValueBrith();
    page.fillValueGenderMale('');
    page.fillValueIdentity();
    page.fillValuePhone();
    page.fillValueAddress('1422 CMT8 TPHCHM');
    page.submitForm();
})

When('UP_06 - Check validation text of Số cmnd-cccd when update with empty field Số cmnd-cccd', () => {
    page.fillValueName();
    page.fillValueBrith();
    page.fillValueGenderMale();
    page.fillValueIdentity('');
    page.fillValuePhone();
    page.fillValueAddress('1422 CMT8 TPHCHM');
    page.submitForm();
})

When('UP_07 - Check validation text of Số điện thoại when update with empty Số điện thoại', () => {
    page.fillValueName();
    // page.fillValueEmail();
    page.fillValueBrith();
    page.fillValueGenderMale();
    page.fillValueIdentity();
    page.fillValuePhone('');
    // page.fillValueAddress();
    page.submitForm();
})

When('UP_08 - Check validation text of Email when update with empty Email', () => {
    page.fillValueName();
    page.fillValueEmail('');
    page.fillValueBrith();
    page.fillValueGenderMale();
    page.fillValueIdentity();
    page.fillValuePhone();
    // page.fillValueAddress();
    page.submitForm();
})

When('UP_09 - Check validation text of Địa chỉ when update with empty Địa chỉ', () => {
    page.fillValueName();
    // page.fillValueEmail();
    page.fillValueBrith();
    page.fillValueGenderMale();
    page.fillValueIdentity();
    page.fillValuePhone();
    page.fillValueAddress('');
    page.submitForm();
})

When('UP_10 - Check validation text when update with all fields have special characters @', () => {
    page.fillValueName('Trần Giao Xuân Kỷ@');
    // page.fillValueEmail();
    page.fillValueBrith();
    page.fillValueGenderMale();
    page.fillValueIdentity('4124142124@');
    page.fillValuePhone('123123123@');
    page.fillValueAddress('412 America Brige St');
    page.submitForm();
})

When('UP_11 - Check validation text when update with all fields have icon', () => {
    page.fillValueName('Trần Giao Xuân Kỷ 😏');
    // page.fillValueEmail();
    page.fillValueBrith();
    page.fillValueGenderMale();
    page.fillValueIdentity('4124142124 😏');
    page.fillValuePhone('123123123 😏');
    page.fillValueAddress('Abc 123 😏');
    page.submitForm();
})

When('UP_12 - Check validation text when update with all fields have space', () => {
    page.fillValueName('Trần Giao Xuân Kỷ ');
    // page.fillValueEmail();
    page.fillValueBrith();
    page.fillValueGenderMale();
    page.fillValueIdentity('4124142124 ');
    page.fillValuePhone('123123123 ');
    page.fillValueAddress('Abc 123 ');
    page.submitForm();
})

When('UP_13 - Check validation text of Email when update profile with invalid Email', () => {
    page.fillValueName();
    page.fillValueEmail('.uhousetest@gmail.com@');
    page.fillValueBrith();
    page.fillValueGenderMale();
    page.fillValueIdentity();
    page.fillValuePhone();
    page.fillValueAddress();
    page.submitForm();
})

When('UP_14 - Update profile unsuccessfuly with Email for the update was registered', () => {
    page.fillValueName();
    page.fillValueEmail('thaison5qt@gmail.com');
    page.fillValueBrith();
    page.fillValueGenderMale();
    page.fillValueIdentity();
    page.fillValuePhone('345465463453');
    page.fillValueAddress('412 Vancover');
    page.submitForm();
})

When('UP_15 - Update profile unsuccessfuly with Số cmnd-cccd for the update was registered', () => {
    page.fillValueName();
    // page.fillValueEmail();
    page.fillValueBrith();
    page.fillValueGenderMale();
    page.fillValueIdentity('1234567899');
    page.fillValuePhone('1234567898');
    page.fillValueAddress('412 Vancover');
    page.submitForm();
})

When('UP_16 - Update profile unsuccessfuly with Số điện thoại for the update was registered', () => {
    page.fillValueName();
    // page.fillValueEmail();
    page.fillValueBrith();
    page.fillValueGenderMale();
    page.fillValueIdentity('1234567899');
    page.fillValuePhone('1234567898');
    page.fillValueAddress('412 Vancover');
    page.submitForm();
})


