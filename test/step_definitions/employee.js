const page = require('../page/employee');

Given('Go to Login', () => page.goToLogin())
Then('Fill Email', () => page.fillValueEmail())
Then('Fill Password', () => page.fillValuePassword())
Then('Submit', () => page.submitFormLogin())
Then('Go to employee page', () => page.gotoEmployeePage())
Then('Display notification successfully', () => page.displayNotificationSuccessfully())
Then('Display notification failed', () => page.displayNotificationFailed())
Then('Display 1 error validation message', () => page.displayLengthErrorValidationMessage(1))


When('EL_06 Delete successfully all employee in "Danh sách nhân viên"', () => {
    page.goToLogin()
    page.fillValueEmail()
    page.fillValuePassword()
    page.submitFormLogin()

    page.gotoEmployeePage()
    page.clickCheckBoxAllEmployee()
    page.clickDeleteSelect()
    page.clickCofirmDelete()
})