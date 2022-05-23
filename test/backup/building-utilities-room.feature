 Feature:Building-utilities-rooms
    I want to create building-utilities-rooms


   
Scenario: AED_RU_01 Add room utility successfully with correct data
  Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When AED_RU_01 Add room utility successfully with correct data
  Then Display notification successfully
Scenario: AED_RU_02 Add room utility successfully from list
 Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When AED_RU_02 Add room utility successfully from list
  Then Display notification successfully
 Scenario: AED_RU_03 Add room utility successfully when edit data collect from list
  Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When AED_RU_03 Add room utility successfully when edit data collect from list
  Then Display notification successfully
  

 Scenario: AED_RU_04 Edit room utility successfully with correct data
   Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When AED_RU_04 Edit room utility successfully with correct data
  Then Display notification successfully

 
 Scenario: AED_RU_05 Edit room utility successfully when changing "Tiện ích"
   Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When AED_RU_05 Edit room utility successfully when changing "Tiện ích"
  Then Display notification successfully

 Scenario: AED_RU_06 Edit room utility successfully when changing "Mô tả"
   Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When AED_RU_06 Edit room utility successfully when changing "Mô tả"
  Then Display notification successfully



 Scenario: AED_BM_07 Check successful message when Delete Room Utility successfully
   Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When AED_BM_07 Check successful message when Delete Room Utility successfully
  Then Display notification successfully
   

 Scenario: AED_RU_08 Check validation text for "Tiện Ích" when Add Room with empty "Tiện Ích"
   Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When AED_RU_08 Check validation text for "Tiện Ích" when Add Room with empty "Tiện Ích"
  Then Display 1 error validation message
Scenario: AED_RU_09 Check validation text for "Tiện Ích" when Edit Room with empty "Tiện Ích"
   Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When AED_RU_09 Check validation text for "Tiện Ích" when Edit Room with empty "Tiện Ích"
  Then Display 1 error validation message
  
  

  Scenario: AED_RU_10 Check error message when Delete Buidling Utility
   Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When AED_RU_10 Check error message when Delete Buidling Utility
 
 
