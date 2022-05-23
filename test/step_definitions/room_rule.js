const page = require('../page/room_rule')

const {I} = inject()

Given('Go to Login', () => page.goToLogin())

Then('Display room rule tab', () => page.displayTextSuccessfully())
Then('I change page register successfully', () => page.checkIsPageRegister())
Then('Display notification failed', () => page.displayNotificationFailed())
Then('Display 1 error validation message', () => page.displayLengthErrorValidationMessage(1))
Then('Display 2 error validation message', () => page.displayLengthErrorValidationMessage(2))
Then('Display 3 error validation message', () => page.displayLengthErrorValidationMessage(3))
Then('Display 4 error validation message', () => page.displayLengthErrorValidationMessage(4))
Then('Display 5 error validation message', () => page.displayLengthErrorValidationMessage(5))
Then('Display 6 error validation message', () => page.displayLengthErrorValidationMessage(6))
Then('Display 7 error validation message', () => page.displayLengthErrorValidationMessage(7))
Then('Display 8 error validation message', () => page.displayLengthErrorValidationMessage(8))

When('UI_AddRoomRule_01 - Verify full elements displays in the "Thêm mới quy định"', () => {
  page.checkIsPageLogin()
  page.fillValueEmail('thaison5qt@gmail.com')
  page.fillValuePassword()
  page.submitFormLogin()
  page.accessBuildingList()
  page.accessBuildingDetail();
  page.accessRoomList();
  page.accessRoomDetail();
  page.accessRuleTab();
  I.wait(2);

})
