
Feature: Room Expenses
  I want to create room expenses


  Scenario: AED_RC_01 Add room Cost successfully with correct data
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_01 - Add room Cost successfully with correct data
    Then Display notification successfully


Scenario: AED_RC_02 - Add room Cost cost successfully from list
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_02 - Add room Cost cost successfully from list
    Then Display notification successfully


Scenario: AED_RC_03 - Add room Cost cost successfully when edit data collect from list
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_03 - Add room Cost cost successfully when edit data collect from list
    Then Display notification successfully


Scenario: AED_RC_04 - Edit room cost successfully with correct data
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_04 - Edit room cost successfully with correct data
    Then Display notification successfully

Scenario: AED_RC_05 - Edit room cost successfully when changing "Tiện ích"
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_05 - Edit room cost successfully when changing "Tiện ích"
    Then Display notification successfully

Scenario: AED_RC_06 - Edit room cost successfully when changing "Mô tả"
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_06 - Edit room cost successfully when changing "Mô tả"
    Then Display notification successfully


Scenario: AED_RC_07 - Edit room cost successfully when changing "Đơn giá"
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_07 - Edit room cost successfully when changing "Đơn giá"
    Then Display notification successfully

Scenario: AED_RC_08 - Edit room cost successfully when changing "Đơn vị tính"
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_08 - Edit room cost successfully when changing "Đơn vị tính"
    Then Display notification successfully

Scenario: AED_RC_09 - Check successful message when Delete Buidling Cost successfully
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_09 - Check successful message when Delete Buidling Cost successfully
    Then Display notification successfully

Scenario: AED_RC_10 - Check validation text when Add room Cost with empty for all fields
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_10 - Check validation text when Add room Cost with empty for all fields
   
Scenario: AED_RC_11 - Check validation text for "Chi phí" when Add room Cost with empty "Chi phí"
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_11 - Check validation text for "Chi phí" when Add room Cost with empty "Chi phí"
   
Scenario: AED_RC_12 - Check validation text for "Mô tả" when Add room Cost with empty "Mô tả"
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_12 - Check validation text for "Mô tả" when Add room Cost with empty "Mô tả"
   

Scenario: AED_RC_13 - Check validation text for "Đơn giá" when Add room Cost with empty "Đơn giá"
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_13 - Check validation text for "Đơn giá" when Add room Cost with empty "Đơn giá"
   
Scenario: AED_RC_14 - Check validation text for "Đơn vị tính" when Add room Cost with empty "Đơn vị tính"
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_14 - Check validation text for "Đơn vị tính" when Add room Cost with empty "Đơn vị tính"
      
Scenario: AED_RC_15 - Check validation text for "Đơn giá" when Add room Cost with enter character for "Đơn giá"
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_15 - Check validation text for "Đơn giá" when Add room Cost with enter character for "Đơn giá"
   
Scenario: AED_RC_16 - Check validation text when Edit room Cost with empty for all fields
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_16 - Check validation text when Edit room Cost with empty for all fields
     
Scenario: AED_RC_17 - Check validation text for "Chi phí" when Edit room Cost with empty "Chi phí"
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_17 - Check validation text for "Chi phí" when Edit room Cost with empty "Chi phí"
   

Scenario: AED_RC_18 - Check validation text for "Mô tả" when Edit room Cost with empty "Mô tả"
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_18 - Check validation text for "Mô tả" when Edit room Cost with empty "Mô tả"

   
Scenario: AED_RC_19 - Check validation text for "Đơn giá" when Edit room Cost with empty "Đơn giá"
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_19 - Check validation text for "Đơn giá" when Edit room Cost with empty "Đơn giá"
   
Scenario: AED_RC_20 - Check validation text for "Đơn vị tính" when Edit room Cost with empty "Đơn vị tính"
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_20 - Check validation text for "Đơn vị tính" when Edit room Cost with empty "Đơn vị tính"
   
Scenario: AED_RC_21 - Check validation text for "Chi phí" when Edit Room Cost with enter character for "Đơn vị tính"
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_21 - Check validation text for "Chi phí" when Edit Room Cost with enter character for "Đơn vị tính"

   Scenario: AED_RC_22 - Check error message when Delete Room Cost
       Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to room Detail
    When AED_RC_22 - Check error message when Delete Room Cost

