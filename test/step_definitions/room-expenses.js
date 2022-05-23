const page = require('../page/room-expenses')

Then('Display notification successfully', () => page.displayNotificationSaved())
Then('Display notification Error', () => page.displayNotificationError())
Then('Go to menu building', () => page.gotoBuildingPage())
Then('Go to room Detail', ()=>  {
   page.clickBuildingDetail()
   page.goToTabRoomList()
   page.clickRoomDetail()
   page.goToRoomExpenses()
})   

// Then('Go to room list', () => {
//     page.goToTabRoomExpenses()
//     page.goToTabRoomList
// })

// Then('Go to room expenses', () => {
//     page.goToTabRoomExpenses()
//     page.goToTabRoomList
// })

When('AED_RC_01 - Add room Cost successfully with correct data', () => {
      page.clickButtonAdd()
      page.fillValueExpenses('200000')
      page.fillValueDescription('chi phi nuoc')
      page.fillValueUnitPrice('10200')
      page.fillValuecalculationUnite('usd')
      page.clickButtonSave()
 })

When('AED_RC_02 - Add room Cost cost successfully from list', () => {
    page.clickButtonAddFromList()
    page.selectRoomCost()
    page.clickButtonSave()

 })
When('AED_RC_03 - Add room Cost cost successfully when edit data collect from list', () => {
    page.clickButtonAddFromList()
    page.selectRoomCost()
    page.fillValueDescription('Entering description')
    page.fillValueUnitPrice('300000')
    page.fillValuecalculationUnite('Unit')
    page.clickButtonSave()

 })
When('AED_RC_09 - Check successful message when Delete Buidling Cost successfully', () => {
    page.clickDeleteRoom()
    page.clickConfirmDelete()
 })

 When('AED_RC_04 - Edit room cost successfully with correct data', () => {
    page.clickButtonEdit()
    page.fillValueDescription('200000')
    page.fillValueExpenses('Chi phi điện')
    page.fillValueUnitPrice('10000')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()

 })
 When('AED_RC_05 - Edit room cost successfully when changing "Tiện ích"', () => {
    page.clickButtonEdit()
    page.fillValueExpenses('Vệ sinh')
    page.clickButtonSave()

 })
 When('AED_RC_06 - Edit room cost successfully when changing "Mô tả"', () => {
    page.clickButtonEdit()
    page.fillValueDescription('Dọn vệ sinh tòa nhà 1 tuần 1 lần')
    page.clickButtonSave()
 })

 When('AED_RC_07 - Edit room cost successfully when changing "Đơn giá"', () => {
    page.clickButtonEdit()
    page.fillValueUnitPrice('50000')
    page.clickButtonSave()
 })

 When('AED_RC_08 - Edit room cost successfully when changing "Đơn vị tính"', () => {
    page.clickButtonEdit()
    page.fillValuecalculationUnite('1 tuần')
    page.clickButtonSave()
 })

 When('AED_RC_10 - Check validation text when Add room Cost with empty for all fields', () => {
    page.clickButtonAdd()
    page.fillValueExpenses('200000')
    page.fillValueExpenses('')
    page.clickButtonSave()
})

 When('AED_RC_11 - Check validation text for "Chi phí" when Add room Cost with empty "Chi phí"', () => {
    page.clickButtonAdd()
    page.fillValueExpenses('')
    page.fillValueDescription('Vệ sinh tòa nhà 3 tháng')
    page.fillValueUnitPrice('10000')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})

 When('AED_RC_12 - Check validation text for "Mô tả" when Add room Cost with empty "Mô tả"', () => {
    page.clickButtonAdd()
    page.fillValueExpenses('200000')
    page.fillValueUnitPrice('10000')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})

 When('AED_RC_13 - Check validation text for "Đơn giá" when Add room Cost with empty "Đơn giá"', () => {
    page.clickButtonAdd()
    page.fillValueExpenses('200000')
    page.fillValueDescription('Tiền điện tổng cộng trong vòng ba tháng')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})

 When('AED_RC_14 - Check validation text for "Đơn vị tính" when Add room Cost with empty "Đơn vị tính"', () => {
    page.clickButtonAdd()
    page.fillValueExpenses('200000')
    page.fillValueDescription('Chi phí bảo trì')
    page.clickButtonSave()
})

 When('AED_RC_15 - Check validation text for "Đơn giá" when Add room Cost with enter character for "Đơn giá"', () => {
    page.clickButtonAdd()
    page.fillValueExpenses('200000')
    page.fillValueDescription('Chi phí bảo trì')
    page.fillValueUnitPrice('2 mươi nghìn')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})

 When('AED_RC_16 - Check validation text when Edit room Cost with empty for all fields', () => {
    page.clickButtonAdd()
    page.fillValueExpenses('200000')
    page.fillValueDescription('Chi phí bảo trì')
    page.fillValueUnitPrice('2 mươi nghìn')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})

 When('AED_RC_17 - Check validation text for "Chi phí" when Edit room Cost with empty "Chi phí"', () => {
    page.clickButtonEdit()
    page.fillValueExpenses('')
    page.fillValueDescription('Chi phí bảo trì')
    page.fillValueUnitPrice('2 mươi nghìn')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})

When('AED_RC_18 - Check validation text for "Mô tả" when Edit room Cost with empty "Mô tả"', () => {
    page.clickButtonEdit()
    page.fillValueExpenses('200000')
    page.fillValueDescription('')
    page.fillValueUnitPrice('100000')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})
 When('AED_RC_19 - Check validation text for "Đơn giá" when Edit room Cost with empty "Đơn giá"', () => {
    page.clickButtonEdit()
    page.fillValueExpenses('200000')
    page.fillValueDescription('Nhập mô tả nè')
    page.fillValueUnitPrice('')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})

 When('AED_RC_20 - Check validation text for "Đơn vị tính" when Edit room Cost with empty "Đơn vị tính"', () => {
    page.clickButtonEdit()
    page.fillValueExpenses('200000')
    page.fillValueDescription('Nhập mô tả nè')
    page.fillValueUnitPrice('100000')
    page.fillValuecalculationUnite('')
    page.clickButtonSave()
})

When('AED_RC_21 - Check validation text for "Chi phí" when Edit Room Cost with enter character for "Đơn vị tính"', () => {
   page.clickButtonEdit()
   page.fillValueExpenses('200000')
   page.fillValueDescription('Nhập mô tả nè')
   page.fillValueUnitPrice('2 mươi nghìn')
   page.fillValuecalculationUnite('VND')
   page.clickButtonSave()
})


When('AED_RC_22 - Check error message when Delete Room Cost', () => {
   page.clickDeleteRoom()
   page.clickCancelDelele()
})


