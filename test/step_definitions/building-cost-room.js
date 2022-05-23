const page = require('../page/building-cost-room')
const translation = require("../../public/locales/vi/translation.json")
const {I} = inject()
Given('Go to Login', () => {
    page.goToLogin()
})
When ('Go to My profile tab building detail',()=>{
     page.gotoBuildingPage()
 })

 When ('Go to room list and select first room',()=>{
  page.gotoTabRoomList()
  page.clickButtonEditFirstRoom()
})

When ('Go to room tab cost',()=>{
  page.gotoTabRoomCost()
})

Then('Display notification successfully', () => page.displayNotificationSuccessfully())
Then('Display notification failed', () => page.displayNotificationFailed())
Then('Display 1 error validation message', () => page.displayLengthErrorValidationMessage(1))
Then('Display 2 error validation message', () => page.displayLengthErrorValidationMessage(2))
Then('Display 3 error validation message', () => page.displayLengthErrorValidationMessage(3))
Then('Display 4 error validation message', () => page.displayLengthErrorValidationMessage(4))


When('AED_RC_01 Add room cost successfully with correct data', () => {
    page.clickButtonAddNew()
    page.fillValueNameCost("Wifi ko miễn phí")
    page.fillValueDescription("Wifi ko miễn phí hoạt động 24/24")
    page.fillValueUnitPrice()
    page.fillValueUnit()
    page.clickButtonSaveAdd()
})
When('AED_RC_02 Add room cost successfully from list', () => {
    page.clickAddRoomCostFromList()
    page.fillValueTypeCost()
    page.fillValueDescription('description')
    page.fillValueUnitPrice()
    page.fillValueUnit()
    page.clickButtonSaveAdd()
})
When('AED_RC_03 Add room cost successfully when edit data collect from list', () => {
    page.clickAddRoomCostFromList()
    page.fillValueTypeCost()
    page.fillValueDescription("Wifi miễn phí phục vụ 24/7")
    page.fillValueUnitPrice()
    page.fillValueUnit()
    page.clickButtonSaveAdd()
})

When('AED_RC_04 Edit room cost successfully with correct data', () => {
    page. clickButtonEditFirstRoomCost()
    page.fillValueNameCost("Vệ sinh phòng theo tháng")
    page.fillValueDescription('Dọn vệ sinh phòng 1 tháng 1 lần')
    page.fillValueUnitPrice(100000)
    page.fillValueUnit('1 Tháng')
    page.clickButtonSaveAdd()
})

When('AED_RC_05 Edit room cost successfully when changing "Chi phí"', () => {
    page.clickButtonEditFirstRoomCost()
    page.fillValueNameCost("Vệ sinh phòng")
    page.clickButtonSaveAdd()
})

When('AED_RC_06 Edit room cost successfully when changing "Mô tả"', () => {
    page. clickButtonEditFirstRoomCost()
    page.fillValueDescription("Dọn vệ sinh phòng 1 tuần 1 lần")
    page.clickButtonSaveAdd()
})

When('AED_RC_07 Edit room cost successfully when changing "Đơn giá"', () => {
  page. clickButtonEditFirstRoomCost()
  page.fillValueUnitPrice(1000)
  page.clickButtonSaveAdd()
})

When('AED_RC_08 Edit room cost successfully when changing "Đơn vị tính"', () => {
  page. clickButtonEditFirstRoomCost()
  page.fillValueUnit(1000)
  page.clickButtonSaveAdd()
})

When('AED_RC_09 Check successful message when Delete Room cost successfully', () => {
    page.clickButtonDeleteFirstRoom()
    page.clickButtonAcceptDelete()
})

When('AED_RC_10 Check validation text when Add Room Cost with empty for all fields', () => {
  page.clickButtonAddNew()
  page.fillValueNameCost(null)
  page.fillValueDescription(null)
  page.fillValueUnitPrice(null)
  page.fillValueUnit(null)
  page.clickButtonSaveAdd()
})


When('AED_RC_11 Check validation text for "Chi Phí" when Add Room with empty "Chi Phí"', () => {
  page.clickButtonAddNew()
  page.fillValueNameCost(null)
  page.fillValueDescription("Wifi miễn phí hoạt động 24/24")
  page.fillValueUnitPrice(100000)
  page.fillValueUnit('1 Tháng')
  page.clickButtonSaveAdd()
})
When('AED_RC_12 Check validation text for "Chi Phí" when Edit Room with empty "Mô tả"', () => {
  page. clickButtonEditFirstRoomCost()
  page.fillValueNameCost(' ')
  page.fillValueUnitPrice(100000)
  page.fillValueUnit('1 Tháng')
  page.clickButtonSaveAdd()
})

When('AED_RC_13 Check validation text for "Chi Phí" when Edit Room with empty "Đơn vị tính"', () => {
page. clickButtonEditFirstRoomCost()
page.fillValueDescription("Wifi miễn phí hoạt động 24/24")
page.fillValueNameCost('wifi')
page.fillValueUnitPrice(null)

page.fillValueUnit('1 Tháng')
page.clickButtonSaveAdd()
})

When('AED_RC_14 Check validation text for "Chi Phí" when Edit Room with empty "Đơn giá"', () => {
page. clickButtonEditFirstRoomCost()
page.fillValueNameCost('Wifi')
page.fillValueDescription("Wifi miễn phí hoạt động 24/24")
page.fillValueUnitPrice(100000)
page.fillValueUnit(null)

page.clickButtonSaveAdd()
})
