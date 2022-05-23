const page = require('../page/building-utilities-room')
const translation = require("../../public/locales/vi/translation.json")
const {I} = inject()
Given('Go to Login', () => {
    page.goToLogin()
})
When ('Go to My profile tab building detail',()=>{
     page.gotoBuildingPage()
 })
Then('Display notification successfully', () => page.displayNotificationSuccessfully())
Then('Display notification failed', () => page.displayNotificationFailed())
Then('Display 1 error validation message', () => page.displayLengthErrorValidationMessage(1))
Then('Display 2 error validation message', () => page.displayLengthErrorValidationMessage(2))
Then('Display 3 error validation message', () => page.displayLengthErrorValidationMessage(3))
Then('Display 4 error validation message', () => page.displayLengthErrorValidationMessage(4))


When('AED_RU_01 Add room utility successfully with correct data', () => {
    page.clickButtonEditFirstBuilding()
    page.gotoTabRoomList()
    page.clickButtonEditFirstRoom()
    page.gotoTabRoomUtilities()
    page.clickButtonAddNew()
    page.fillValueNameUtilities("Wifi miễn phí")
    page.fillValueDescription("Wifi miễn phí hoạt động 24/24")
    page.clickButtonSaveAdd()
})
When('AED_RU_02 Add room utility successfully from list', () => {
    page.clickButtonEditFirstBuilding()
    page.gotoTabRoomList()
    page.clickButtonEditFirstRoom()
    page.gotoTabRoomUtilities()
    page.clickAddRoomUtilitiesFromList()
    page.fillValueTypeUtilities()
    page.fillValueDescription()
    page.clickButtonSaveAdd()
})
When('AED_RU_03 Add room utility successfully when edit data collect from list', () => {
    page.clickButtonEditFirstBuilding()
    page.gotoTabRoomList()
    page.clickButtonEditFirstRoom()
    page.gotoTabRoomUtilities()
    page.clickAddRoomUtilitiesFromList()
    page.fillValueTypeUtilities()
    page.fillValueDescription("Wifi miễn phí phục vụ 24/7")
    page.clickButtonSaveAdd()
})
When('AED_RU_04 Edit room utility successfully with correct data', () => {
    page.clickButtonEditFirstBuilding()
    page.gotoTabRoomList()
    page.clickButtonEditFirstRoom()
    page.gotoTabRoomUtilities()
    page. clickButtonEditFirstRoomUtilities()
    page.fillValueNameUtilities("thang máy") 
    page.fillValueDescription(' Thang máy phục vụ 24')
    page.clickButtonSaveAdd()
})
When('AED_RU_05 Edit room utility successfully when changing "Tiện ích"', () => {
    page.clickButtonEditFirstBuilding()
    page.gotoTabRoomList()
    page.clickButtonEditFirstRoom()
    page.gotoTabRoomUtilities()
    page. clickButtonEditFirstRoomUtilities()
    page.fillValueNameUtilities("Có thang máy")
    page.clickButtonSaveAdd()
})

When('AED_RU_06 Edit room utility successfully when changing "Mô tả"', () => {
    page.clickButtonEditFirstBuilding()
    page.gotoTabRoomList()
    page.clickButtonEditFirstRoom()
    page.gotoTabRoomUtilities()
    page. clickButtonEditFirstRoomUtilities()
    page.fillValueNameUtilities("Thang máy hoạt động 24/24")
    page.clickButtonSaveAdd()
})

When('AED_RU_07 Check successful message when Delete Room Utility successfully', () => {
    page.clickButtonEditFirstBuilding()
    page.gotoTabRoomList()
    page.clickButtonEditFirstRoom()
    page.gotoTabRoomUtilities()
    page.clickButtonDeleteFirstRoom()
    page.clickButtonAcceptDelete()
})
When('AED_RU_08 Check validation text for "Tiện Ích" when Add Room with empty "Tiện Ích"', () => {
    page.clickButtonEditFirstBuilding()
    page.gotoTabRoomList()
    page.clickButtonEditFirstRoom()
    page.gotoTabRoomUtilities()
    page.clickButtonAddNew()
    page.fillValueNameUtilities('')
    page.fillValueDescription("Wifi miễn phí hoạt động 24/24")
    page.clickButtonSaveAdd()
})
When('AED_RU_09 Check validation text for "Tiện Ích" when Edit Room with empty "Tiện Ích"', () => {
    page.clickButtonEditFirstBuilding()
    page.gotoTabRoomList()
    page.clickButtonEditFirstRoom()
    page.gotoTabRoomUtilities()
    page. clickButtonEditFirstRoomUtilities()
    page.fillValueNameUtilities(' ') 
    page.clickButtonSaveAdd()
})

When('AED_RU_10 Check error message when Delete Buidling Utility', () => {
    page.clickButtonEditFirstBuilding()
    page.gotoTabRoomList()
    page.clickButtonEditFirstRoom()
    page.gotoTabRoomUtilities()
    page.clickButtonDeleteFirstRoom()
   page.clickButtonCancelDelete()
})