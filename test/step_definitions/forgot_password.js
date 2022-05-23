const page = require('../page/forgot_password')
// const pageLogin = require('../page/login')

Given('Go to Forgot Password', () => page.goToForgotPass())

Then('FG_01 - Forgot password successfully with Email was registered', () => {
    page.fillValueEmail()
    page.clickGetOTP()
    page.clickConfirmOTP()
    page.goToYopmail()
}) 