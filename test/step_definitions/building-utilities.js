const page = require('../page/building-utilities')
const translation = require("../../public/locales/vi/translation.json")

Given('Go to Login', () => page.goToLogin())
When('Go to My profile tab building detail',()=>{
    page.gotoBuildingPage()
    page.clickButtonEditFirstBuilding()
    page.clickTabUtilityBuilding()
})
Then('Display notification successfully', () => page.displayNotificationSuccessfully())
Then('Display notification failed', () => page.displayNotificationFailed())
Then('Display notification failed', () => page.displayNotificationFailed())
Then('Display 1 error validation message', () => page.displayLengthErrorValidationMessage(1))
Then('Display 2 error validation message', () => page.displayLengthErrorValidationMessage(2))
When('AED_BU_01 Add building utility successfully with correct data', () => {
    page.clickButtonAddNew();
    page.fillValueNameUtilities('Có Thang máy');
    page.fillValueDescription('Thang máy phục vụ 24/24');
    page.clickButtonSaveAddnew();
})
When('AED_BU_02 Add building utility successfully from list', () => {
    page.clickAddUtilitiesFromList()
    page.fillValueTypeUtilities()
    page.clickButtonSaveAddnew();
})
When('AED_BU_03 Add building utility successfully when edit data collect from list', () => {
    page.clickAddUtilitiesFromList()
    page.fillValueTypeUtilities()
    page.fillValueDescription('Bảo vệ hỗ trợ 24/7')
    page.clickButtonSaveAddnew();
})
When('AED_BU_04 Edit building utility successfully with correct data', () => {
    page.clickButtonEditFirstBuilding()
    page.fillValueNameUtilities('Thang máy')
    page.fillValueDescription('Thang máy phục vụ 24/24')
    page.clickButtonSaveAddnew()
})
When('AED_BU_05 Edit building utility successfully when changing "Tiện ích"', () => {
    page.clickButtonEditFirstBuilding()
    page.fillValueNameUtilities('Có thang máy')
    page.clickButtonSaveAddnew()
})
When('AED_BU_06 Edit building utility successfully when changing "Mô tả"', () => {
    page.clickButtonEditFirstBuilding()
    page.fillValueDescription('tran nguyen trung anh')
    page.clickButtonSaveAddnew()
})

When('AED_BU_07 Check successful message when Delete Buidling Utility successfully', () => {
    page.clickButtonDeleteFirstBuilding()
    page.clickButtonAcceptDelete()
})
When('AED_BU_08 Check validation text for "Tiện Ích" when Add Building with empty "Tiện Ích"', () => {
    page.clickButtonAddNew()
    page.fillValueNameUtilities(' ')
    page.fillValueDescription('Thang máy phục vụ 24/24')
    page.clickButtonSaveAddnew()
})
When('AED_BU_09 Check validation text for "Tiện Ích" when Edit Building with empty "Tiện Ích"', () => {
    page.clickButtonEditFirstBuilding()
    page.fillValueNameUtilities(' ')
    page.clickButtonSaveAddnew()
})
When('AED_BU_10 Check error message when Delete Buidling Utility', () => {
    page.clickButtonDeleteFirstUtility()
    page.clickButtonCancelDelete()
})







