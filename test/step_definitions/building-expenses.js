const page = require('../page/building-expenses')

Then('Display notification successfully', () => page.displayNotificationSaved())
Then('Display notification Error', () => page.displayNotificationError())
Then('Go to menu building', () => page.gotoBuildingPage())
Then('Go to building Detail', ()=> page.clickBuildingDetail())

Then('Go to building expenses', () => {
    page.goToTabBuildingExpenses()
})

When('AED_BC_01 - Add Building Cost successfully with correct data', () => {
      page.clickButtonAdd()
      page.fillValueExpenses('200000')
      page.fillValueDescription('chi phi nuoc')
      page.fillValueUnitPrice('10200')
      page.fillValuecalculationUnite('usd')
      page.clickButtonSave()
 })

When('AED_BC_02 - Add Building Cost cost successfully from list', () => {
    page.clickButtonAddFromList()
    page.selectBuildingCost()
    page.clickButtonSave()

 })
When('AED_BC_03 - Add Building Cost cost successfully when edit data collect from list', () => {
    page.clickButtonAddFromList()
    page.selectBuildingCost()
    page.fillValueDescription('Changing description')
    page.fillValueUnitPrice('20000')
    page.fillValuecalculationUnite('Unit')
    page.clickButtonSave()

 })
When('AED_BC_09 - Check successful message when Delete Buidling Cost successfully', () => {
    page.clickDeleteBuilding()
    page.clickConfirmDelete()
 })

 When('AED_BC_04 - Edit building cost successfully with correct data', () => {
    page.clickButtonEditCost()
    page.fillValueDescription('200000')
    page.fillValueExpenses('Chi phi điện')
    page.fillValueUnitPrice('10000')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()

 })
 When('AED_BC_05 - Edit building cost successfully when changing "Tiện ích"', () => {
    page.clickButtonEditCost()
    page.fillValueExpenses('Vệ sinh')
    page.clickButtonSave()

 })
 When('AED_BC_06 - Edit building cost successfully when changing "Mô tả"', () => {
    page.clickButtonEditCost()
    page.fillValueDescription('Dọn vệ sinh tòa nhà 1 tuần 1 lần')
    page.clickButtonSave()
 })

 When('AED_BC_07 - Edit building cost successfully when changing "Đơn giá"', () => {
    page.clickButtonEditCost()
    page.fillValueUnitPrice('50000')
    page.clickButtonSave()
 })

 When('AED_BC_08 - Edit building cost successfully when changing "Đơn vị tính"', () => {
    page.clickButtonEditCost()
    page.fillValuecalculationUnite('1 tuần')
    page.clickButtonSave()
 })

 When('AED_BC_10 - Check validation text when Add Building Cost with empty for all fields', () => {
    page.clickButtonAdd()
    page.fillValueExpenses('200000')
    page.fillValueExpenses('')
    page.clickButtonSave()
})

 When('AED_BC_11 - Check validation text for "Chi phí" when Add Building Cost with empty "Chi phí"', () => {
    page.clickButtonAdd()
    page.fillValueExpenses('')
    page.fillValueDescription('Vệ sinh tòa nhà 3 tháng')
    page.fillValueUnitPrice('10000')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})

 When('AED_BC_12 - Check validation text for "Mô tả" when Add Building Cost with empty "Mô tả"', () => {
    page.clickButtonAdd()
    page.fillValueExpenses('200000')
    page.fillValueUnitPrice('10000')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})

 When('AED_BC_13 - Check validation text for "Đơn giá" when Add Building Cost with empty "Đơn giá"', () => {
    page.clickButtonAdd()
    page.fillValueExpenses('200000')
    page.fillValueDescription('Tiền điện tổng cộng trong vòng ba tháng')
    page.fillValueUnitPrice('')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})
 When('AED_BC_14 - Check validation text for "Mô tả" when Add Building Cost with empty "Đơn vị tính"', () => {
    page.clickButtonAdd()
    page.fillValueExpenses('200000')
    page.fillValueDescription('Chi phí bảo trì')
    page.clickButtonSave()
})

 When('AED_BC_15 - Check validation text for "Đơn giá" when Add Building Cost with enter character for "Đơn giá"', () => {
    page.clickButtonAdd()
    page.fillValueExpenses('200000')
    page.fillValueDescription('Chi phí bảo trì')
    page.fillValueUnitPrice('2 mươi nghìn')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})

 When('AED_BC_16 - Check validation text when Edit Building Cost with empty for all fields', () => {
    page.clickButtonAdd()
    page.fillValueExpenses('200000')
    page.fillValueDescription('Chi phí bảo trì')
    page.fillValueUnitPrice('2 mươi nghìn')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})

 When('AED_BC_17 - Check validation text for "Chi phí" when Edit Building Cost with empty "Chi phí"', () => {
    page.clickButtonEditCost()
    page.fillValueExpenses('')
    page.fillValueDescription('Chi phí bảo trì')
    page.fillValueUnitPrice('2 mươi nghìn')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})

When('AED_BC_18 - Check validation text for "Mô tả" when Edit Building Cost with empty "Mô tả"', () => {
    page.clickButtonEditCost()
    page.fillValueExpenses('200000')
    page.fillValueDescription('')
    page.fillValueUnitPrice('100000')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})
 When('AED_BC_19 - Check validation text for "Đơn giá" when Edit Building Cost with empty "Đơn giá"', () => {
    page.clickButtonEditCost()
    page.fillValueExpenses('200000')
    page.fillValueDescription('Nhập mô tả nè')
    page.fillValueUnitPrice('')
    page.fillValuecalculationUnite('VND')
    page.clickButtonSave()
})

 When('AED_BC_20 - Check validation text for "Đơn vị tính" when Edit Building Cost with empty "Đơn vị tính"', () => {
    page.clickButtonEditCost()
    page.fillValueExpenses('200000')
    page.fillValueDescription('Nhập mô tả nè')
    page.fillValueUnitPrice('100000')
    page.fillValuecalculationUnite('')
    page.clickButtonSave()
})

When('AED_BC_21 - Check validation text for "Chi phí" when Edit Room Cost with enter character for "Đơn vị tính"', () => {
   page.clickButtonEditCost()
   page.fillValueExpenses('200000')
   page.fillValueDescription('Nhập mô tả nè')
   page.fillValueUnitPrice('2 mươi nghìn')
   page.fillValuecalculationUnite('VND')
   page.clickButtonSave()
})


When('AED_BC_22 - Check error message when Delete Buidling Cost', () => {
   page.clickDeleteBuilding()
   page.clickCancelDelele()
})


