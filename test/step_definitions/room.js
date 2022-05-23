const page = require('../page/room')
const translation = require("../../public/locales/vi/translation.json")
const pageRoomUtilities = require('../page/building-utilities')
const {I} = inject()
Given('Go to the Login', () => {
    page.goToLogin()
})
When ('Go to My profile tab room list',()=>{
     pageRoomUtilities.gotoBuildingPage()
     pageRoomUtilities.clickButtonEditFirstBuilding()
     page.gotoTabRoomList()
 })
Then('Display notification successfully', () => page.displayNotificationSuccessfully())
Then('Display notification failed', () => page.displayNotificationFailed())
Then('Display 1 error validation message', () => page.displayLengthErrorValidationMessage(1))
Then('Display 2 error validation message', () => page.displayLengthErrorValidationMessage(2))
Then('Display 3 error validation message', () => page.displayLengthErrorValidationMessage(3))
Then('Display 4 error validation message', () => page.displayLengthErrorValidationMessage(4))
Then('Display 5 error validation message', () => page.displayLengthErrorValidationMessage(5))
Then('Display 6 error validation message', () => page.displayLengthErrorValidationMessage(6))
Then('Display 7 error validation message', () => page.displayLengthErrorValidationMessage(7))
Then('Display 8 error validation message', () => page.displayLengthErrorValidationMessage(8))
When('SC_AddRoom_01 Verify that Landlord are successfully Add room  with correct data in all fields',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('005')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo['Mezzanine Room'])
    page.fillValueNumTenants('10')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
})
When('SC_AddRoom_02 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Chdv 1 phòng ngủ"',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('1')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo['One Bedroom'])
    page.fillValueNumTenants('10')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
})
When('SC_AddRoom_03 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Chdv 2 phòng ngủ"',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('2')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo['Two Bedroom'])
    page.fillValueNumTenants('10')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
})
When('SC_AddRoom_04 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Chdv 3 phòng ngủ"',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('3')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo['Three Bedroom'])
    page.fillValueNumTenants('10')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
})

When('SC_AddRoom_05 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Phòng có gác"',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('4')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["One Bed Room"])
    page.fillValueNumTenants('10')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('30000002');
    page.clickButtonSave()
})
When('SC_AddRoom_06 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Phòng studio"',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('4')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Studio Room"])
    page.fillValueNumTenants('10')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('30000002');
    page.clickButtonSave()
})
When('SC_AddRoom_07 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Chdv duplex"',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('6')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('10')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('30000002');
    page.clickButtonSave()
})
When('SC_AddRoom_08 Verify that Landlord are successfully Add room with "Số người tối đa" is number',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('008')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('4')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('30000002');
    page.clickButtonSave()
})
When('SC_AddRoom_09 Verify that Landlord are successfully Add room with "Diện tích" is number',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('005')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('4')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('30000004');
    page.clickButtonSave()
})
When('SC_AddRoom_10 Verify that Landlord are successfully Add room with "Hoa hồng" is number',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('010')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('4')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('30000006');
    page.clickButtonSave()
})
When('SC_AddRoom_11 Verify that Landlord are successfully Add room with "Tiền cọc" is number',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('011')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('4')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('30000007');
    page.clickButtonSave()
})
When('SC_AddRoom_12 Check validation text of "Giá" when add room with "Giá" is number',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('012')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('4')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('30000007');
    page.clickButtonSave()
})
When('SC_AddRoom_13 Verify that Landlord are successfully Add room with "Diện tích" is decimal',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('013')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('4')
    page.fillValueAcreage('30.5')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('30000007');
    page.clickButtonSave()
})
When('SC_AddRoom_14 Verify that Landlord are successfully Add room with "Hoa hồng" is decimal',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('014')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('4')
    page.fillValueAcreage('30.5')
    page.fillValueBonus('200000.5')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('30000007');
    page.clickButtonSave()
})
When('SC_AddRoom_15 Verify that Landlord are successfully Add room with "Tiền cọc" is decimal',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('015')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('4')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000.5')
    page.fillValuePrice('30000007');
    page.clickButtonSave()
})
When('SC_AddRoom_16 Verify that Landlord are successfully Add room with "Giá" is decimal',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('016')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('4')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000.5')
    page.fillValuePrice('30000007');
    page.clickButtonSave()
})
When('SC_AddRoom_17 Verify that Landlord are successfully Add room with "Tên và Mã số phòng" used to exist and has been deleted',()=>{
    page.clickButtonDeleteFirstRoom()
    page.clickButtonAcceptDelete()
    page.clickButtonAddNew()
    page.fillValueRoomNum('016')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('4')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000.5')
    page.fillValuePrice('30000007');
    page.clickButtonSave()
})
When('Val_AddRoom_01 Check validation text of required fields when leaving blank all of them',()=>{
    page.clickButtonAddNew()
    page.clickButtonSave()
})
When('Val_AddRoom_001 Check validation text of "Tên và Mã số phòng" when adding room with empty "Tên và Mã số phòng"',()=>{
    page.clickButtonAddNew()
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('4')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
})
When('Val_AddRoom_02 Check validation text of "Phân loại" when adding room with empty "Phân loại"',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('02')
    page.fillValueNumTenants('4')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
})
When('Val_AddRoom_03 Check validation text of "Số người tối đa" when adding room with empty "Số người tối đa"',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('03')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
})
When('Val_AddRoom_04 Check validation text of "Diện tích" when adding room with empty "Diện tích"',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('03')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('5')
    // page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
})
When('Val_AddRoom_05 Check validation text of "Hoa hồng" when adding room with empty "Hoa hồng"',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('03')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('5')
    page.fillValueAcreage('30')
    // page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
})
When('Val_AddRoom_06 Check validation text of "Tiền cọc" when adding room with empty "Tiền cọc"',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('03')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('5')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    // page.fillValueDeposit('1000000')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
})
When('Val_AddRoom_07 Check validation text of "Giá" when adding room with empty "Giá"',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('03')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('5')
    page.fillValueAcreage('30')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    // page.fillValuePrice('3000000');
    page.clickButtonSave()
})
When('Val_AddRoom_08 Check validation text of "Số người tối đa" when adding room with "Số người tối đa" is decimal',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('03')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('30.5')
    page.fillValueAcreage('25')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_AddRoom_09 Check validation text of "Số người tối đa" when adding room with "Số người tối đa" is letter',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('03')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('abc')
    page.fillValueAcreage('25')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_AddRoom_10 Check validation text of "Diện tích",  when adding room with "Diện tích" is letter.',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('03')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('25')
    page.fillValueAcreage('abc')
    page.fillValueBonus('200000')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_AddRoom_11 Check validation text of "Hoa hồng" when adding room with "Hoa hồng" is letter.',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('03')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('25')
    page.fillValueAcreage('123')
    page.fillValueBonus('abc')
    page.fillValueDeposit('1000000')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_AddRoom_12 Check validation text of "Tiền cọc" when adding room with "Tiền cọc" is letter.',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('03')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('25')
    page.fillValueAcreage('123')
    page.fillValueBonus('1313')
    page.fillValueDeposit('abc')
    page.fillValuePrice('3000000');
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_AddRoom_13 Check validation text of "Giá" when adding room with "Giá" is letter.',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('03')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('25')
    page.fillValueAcreage('123')
    page.fillValueBonus('1313')
    page.fillValueDeposit('131212')
    page.fillValuePrice('abc');
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_AddRoom_14 Check validation text of "Số người tối đa", "Diện tích", "Hoa hồng", "Tiền cọc", "Giá" when adding room with  "Số người tối đa", "Diện tích", "Hoa hồng", "Tiền cọc", "Giá is special character',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('03')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('\\')
    page.fillValueAcreage('{}')
    page.fillValueBonus('<>')
    page.fillValueDeposit(';;')
    page.fillValuePrice('?');
    page.clickButtonSave()
    I.wait(0.5)
})
When('USC_AddRoom_01 Check error message display when adding room with Tên và Mã số phòng already exists in the system',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('03')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('111')
    page.fillValueAcreage('222')
    page.fillValueBonus('333')
    page.fillValueDeposit('44444')
    page.fillValuePrice('555555');
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_EditRoom_01 Check validation text of required fields when leaving blank all of them',()=>{
    page.clickButtonEditFirstRoom()
    page.fillValueRoomNum(' ')
    page.fillValueTypeclassify(value=null)
    page.fillValueNumTenants(' ')
    page.fillValueAcreage(' ')
    page.fillValueBonus(' ')
    page.fillValueDeposit(' ')
    page.fillValuePrice(' ');
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_EditRoom_02 Check validation text of "Tên or Mã số phòng" when editing room with empty "Tên or Mã số phòng"',()=>{
    page.clickButtonEditFirstRoom()
    page.fillValueRoomNum(' ')
    page.fillValueTypeclassify(value=null)
    page.fillValueNumTenants('111')
    page.fillValueAcreage('222')
    page.fillValueBonus('333')
    page.fillValueDeposit('44444')
    page.fillValuePrice('555555');
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_EditRoom_03 Check validation text of "Phân loại" when editing room with empty "Phân loại"',()=>{
    page.clickButtonEditFirstRoom()
    page.fillValueTypeclassify(value=null) //chưa thành công
    page.fillValueNumTenants('111')
    page.fillValueAcreage('222')
    page.fillValueBonus('333')
    page.fillValueDeposit('44444')
    page.fillValuePrice('555555');
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_EditRoom_04 Check validation text of "Số người tối đa" when editing room with empty "Số người tối đa"',()=>{
    page.clickButtonEditFirstRoom()
    page.fillValueRoomNum('1')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants(value=null)
    page.fillValueAcreage('222')
    page.fillValueBonus('333')
    page.fillValueDeposit('44444')
    page.fillValuePrice('555555');
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_EditRoom_05 Check validation text of "Diện tích" when editing room with empty "Diện tích"',()=>{
    page.clickButtonEditFirstRoom()
    page.fillValueAcreage(value='0')
    page.fillValueBonus('333')
    page.fillValueDeposit('44444')
    page.fillValuePrice('555555');
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_EditRoom_06 Check validation text of "Hoa hồng" when editing room with empty "Hoa hồng"',()=>{
    page.clickButtonEditFirstRoom()
    page.fillValueBonus(value=null)
    page.fillValueDeposit('44444')
    page.fillValuePrice('555555');
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_EditRoom_07 Check validation text of "Tiền cọc" when editing room with empty "Tiền cọc"',()=>{
    page.clickButtonEditFirstRoom()
    page.fillValueDeposit(value=null)
    page.fillValuePrice('555555');
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_EditRoom_08 Check validation text of "Giá" when editing room with empty "Giá"',()=>{
    page.clickButtonEditFirstRoom()
    page.fillValuePrice(value=null);
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_EditRoom_09 Check validation text of "Số người tối đa" when editing room with "Số người tối đa" is decimal.',()=>{
    page.clickButtonEditFirstRoom()
    page.fillValueNumTenants('4.5')
    page.clickButtonSave()
    I.wait(0.5)
})
When('Val_EditRoom_10 Check validation text of "Số người tối đa" when editing room with "Số người tối đa" is letter.',()=>{
    page.clickButtonEditFirstRoom()
    page.fillValueNumTenants('abc')
    page.clickButtonSave()
    I.wait(0.5)
})  
When('Val_EditRoom_11 Check validation text of "Diện tích",  when editing room with "Diện tích" is letter.',()=>{
    page.clickButtonEditFirstRoom()
    page.fillValueAcreage('abc')
    page.clickButtonSave()
    I.wait(0.5)
})  
When('Val_EditRoom_12 Check validation text of "Hoa hồng" when editing room with "Hoa hồng" is letter.',()=>{
    page.clickButtonEditFirstRoom()
    page.fillValueBonus('abc')
    page.clickButtonSave()
    I.wait(0.5)
})  

When('Val_AddRoom_14 Check validation text of "Số người tối đa", "Diện tích", "Hoa hồng", "Tiền cọc", "Giá" when adding room with  "Số người tối đa", "Diện tích", "Hoa hồng", "Tiền cọc", "Giá is special character',()=>{
    page.clickButtonAddNew()
    page.fillValueRoomNum('03')
    page.fillValueTypeclassify(translation.columns.admin.roomInfo["Duplex Room"])
    page.fillValueNumTenants('\\')
    page.fillValueAcreage('{}')
    page.fillValueBonus('<>')
    page.fillValueDeposit(';;')
    page.fillValuePrice('?');
    page.clickButtonSave()
    I.wait(0.5)
})













