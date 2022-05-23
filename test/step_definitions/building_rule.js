
const page= require('../page/building_rule')
const {I} = inject()

Then('Display notification successfully', () => page.displayNotificationSaved())
Then('Enter the building rule tab',()=>{
  page.checkIsPageAdmin();
  page.gotoBuildingPage();
  page.checkIsPageBuilding();
  page.enterBuildingDetail();
  page.enterTabBuildingRule();
})

When('SC_AddBuildingRule_01 - Verify that Landlord are successfully Add building rule with correct data in all fields', () => {
  page.clickButtonAdd();
  page.fillValueRule('auto-test');
  page.fillValueContent('auto-test');
  page.clickButtonSave();
})

When('USC_AddBuilding_Rule_01 - Verify web can back to "Nội quy tòa nhà" tab after cancel Add building rule.', () => {
  page.clickButtonAdd();
  page.clickButtonCancel();
})

When('USC_AddBuilding_Rule_02 - Check validation text of "Nội dung" when adding building rule with empty "Nội dung"', () => {
  page.clickButtonAdd();
  page.fillValueRule('auto-test');
  page.clickButtonSave();
  page.checkValidationContent();
})

When('Val_AddBuilding_Rule_02 - Check validation text of "Quy định" when adding building rule with empty "Quy định"', () => {
  page.clickButtonAdd();
  page.fillValueContent('auto test');
  page.clickButtonSave();
  page.checkValidationRule();
})

When('SC_EditBuildingRule_01 - Verify that Landlord are successfully Edit building rule when changing "Quy định" with correct data. (data is min length more than 0 character)', () => {
  page.clickButtonEdit();
  page.fillValueRule('auto-test1');
  page.clickButtonSave('auto-test2');
  page.clickButtonSave();
})

When('SC_SearchBuildingRule_01 - Verify that Landlord are unsuccessfully Search regulations with incorrect data in "Quy định"', () => {
  page.fillValueSearch('abc');
  page.checkResultSearchNoData();
})

When('SC_SearchBuildingRule_02 - Verify that Landlord are unsuccessfully Search regulations with incorrect data in "Nội dung" ', () => {
  page.fillValueSearch('123');
  page.checkResultSearchNoData();
})

When('SC_DeleteBuildingRule_01 - Verify that Landlord are successfully Delete building rule', () => {
  page.clickButtonDelete();
  page.clickButtonDeleteOk();
})




