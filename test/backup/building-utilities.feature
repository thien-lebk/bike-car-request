Scenario: AED_BU_01 Add building utility successfully with correct data
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab building detail
    When AED_BU_01 Add building utility successfully with correct data
    Then Display notification successfully
Scenario: AED_BU_02 Add building utility successfully from list
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab building detail
   When AED_BU_02 Add building utility successfully from list
   Then Display notification successfully
Scenario: AED_BU_03 Add building utility successfully when edit data collect from list
   Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab building detail
  When AED_BU_03 Add building utility successfully when edit data collect from list
  Then Display notification successfully
 Scenario: AED_BU_04 Edit building utility successfully with correct data
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab building detail
   When AED_BU_04 Edit building utility successfully with correct data
   Then Display notification successfully
  
 Scenario: AED_BU_05 Edit building utility successfully when changing "Tiện ích"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab building detail
   When AED_BU_05 Edit building utility successfully when changing "Tiện ích"
   Then Display notification successfully
 
 Scenario: AED_BU_06 Edit building utility successfully when changing "Mô tả"
      Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab building detail
     When AED_BU_06 Edit building utility successfully when changing "Mô tả"
     Then Display notification successfully
  Scenario: AED_BU_07 Check successful message when Delete Buidling Utility successfully
      Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab building detail
     When AED_BU_07 Check successful message when Delete Buidling Utility successfully
     Then Display notification successfully
  Scenario: AED_BU_08 Check validation text for "Tiện Ích" when Add Building with empty "Tiện Ích"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab building detail
   When AED_BU_08 Check validation text for "Tiện Ích" when Add Building with empty "Tiện Ích"
   Then Display 1 error validation message
 
Scenario: AED_BU_09 Check validation text for "Tiện Ích" when Edit Building with empty "Tiện Ích"
   Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab building detail
  When AED_BU_09 Check validation text for "Tiện Ích" when Edit Building with empty "Tiện Ích"
   Then Display 1 error validation message

 Scenario:  AED_BU_10 Check error message when Delete Buidling Utility
   When  AED_BU_10 Check error message when Delete Buidling Utility
   
