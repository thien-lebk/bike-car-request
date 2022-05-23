const page = require('../page/building-manager')
const translation = require("../../public/locales/vi/translation.json");
const { faker } = require('@faker-js/faker');
const {I} = inject()

Then('Display notification Saved', () => page.displayNotificationSaved())
Then('Display notification Error', () => page.displayNotificationError())
Then('Go to menu building', () => page.gotoBuildingPage())

Then('Go to building Detail', ()=>{
    page.clickBuildingDetail();
})

When('Go to tab building Manager', () => {
     page.goToTabBuildingManager()
     page.clickButtonAddBuildingStaff()
     page.fillValueBuildingStaffid('1234567899')
     page.clickButtonSearch()
    //  page.fillValueBuildingRoles()
     page.clickRole()
     page.selectValueBuildingRole()
    //  page.fillValueBuildingDesc()
    //  page.selectValueBuildingRole()
    //  page.clickButtonSaveBuildingStaff()

})

