
Feature: Building Expenses
  I want to create building expenses


  Scenario: AED_BC_01 Add Building Cost successfully with correct data
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_01 - Add Building Cost successfully with correct data
    Then Display notification successfully

Scenario: AED_BC_02 - Add Building Cost cost successfully from list
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_02 - Add Building Cost cost successfully from list
    Then Display notification successfully

Scenario: AED_BC_03 - Add Building Cost cost successfully when edit data collect from list
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_03 - Add Building Cost cost successfully when edit data collect from list
    Then Display notification successfully


Scenario: AED_BC_04 - Edit building cost successfully with correct data
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_04 - Edit building cost successfully with correct data
    Then Display notification successfully


Scenario: AED_BC_05 - Edit building cost successfully when changing "Tiện ích"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_05 - Edit building cost successfully when changing "Tiện ích"
    Then Display notification successfully

Scenario: AED_BC_06 - Edit building cost successfully when changing "Mô tả"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_06 - Edit building cost successfully when changing "Mô tả"
    Then Display notification successfully


Scenario: AED_BC_07 - Edit building cost successfully when changing "Đơn giá"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_07 - Edit building cost successfully when changing "Đơn giá"
    Then Display notification successfully

Scenario: AED_BC_08 - Edit building cost successfully when changing "Đơn vị tính"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_08 - Edit building cost successfully when changing "Đơn vị tính"
    Then Display notification successfully


Scenario: AED_BC_09 - Check successful message when Delete Buidling Cost successfully
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_09 - Check successful message when Delete Buidling Cost successfully
    Then Display notification successfully


Scenario: AED_BC_10 - Check validation text when Add Building Cost with empty for all fields
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_10 - Check validation text when Add Building Cost with empty for all fields
   
Scenario: AED_BC_11 - Check validation text for "Chi phí" when Add Building Cost with empty "Chi phí"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_11 - Check validation text for "Chi phí" when Add Building Cost with empty "Chi phí"
   
Scenario: AED_BC_12 - Check validation text for "Mô tả" when Add Building Cost with empty "Mô tả"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_12 - Check validation text for "Mô tả" when Add Building Cost with empty "Mô tả"
   

Scenario: AED_BC_13 - Check validation text for "Đơn giá" when Add Building Cost with empty "Đơn giá"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_13 - Check validation text for "Đơn giá" when Add Building Cost with empty "Đơn giá"
   
Scenario: AED_BC_14 - Check validation text for "Đơn vị tính" when Add Building Cost with empty "Đơn vị tính"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_14 - Check validation text for "Mô vị tính" when Add Building Cost with empty "Đơn vị tính"
      
Scenario: AED_BC_15 - Check validation text for "Đơn giá" when Add Building Cost with enter character for "Đơn giá"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_15 - Check validation text for "Đơn giá" when Add Building Cost with enter character for "Đơn giá"
   
Scenario: AED_BC_16 - Check validation text when Edit Building Cost with empty for all fields
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_16 - Check validation text when Edit Building Cost with empty for all fields
     
Scenario: AED_BC_17 - Check validation text for "Chi phí" when Edit Building Cost with empty "Chi phí"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_17 - Check validation text for "Chi phí" when Edit Building Cost with empty "Chi phí"
   

Scenario: AED_BC_18 - Check validation text for "Mô tả" when Edit Building Cost with empty "Mô tả"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_18 - Check validation text for "Mô tả" when Edit Building Cost with empty "Mô tả"

   
Scenario: AED_BC_19 - Check validation text for "Đơn giá" when Edit Building Cost with empty "Đơn giá"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_19 - Check validation text for "Đơn giá" when Edit Building Cost with empty "Đơn giá"
   
Scenario: AED_BC_20 - Check validation text for "Đơn vị tính" when Edit Building Cost with empty "Đơn vị tính"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_20 - Check validation text for "Đơn vị tính" when Edit Building Cost with empty "Đơn vị tính"
   
Scenario: AED_BC_21 - Check validation text for "Chi phí" when Edit Room Cost with enter character for "Đơn vị tính"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_21 - Check validation text for "Chi phí" when Edit Room Cost with enter character for "Đơn vị tính"

Scenario: AED_BC_22 - Check error message when Delete Buidling Cost
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
   Then Go to menu building
    Then Go to building Detail
    Then Go to building expenses
    When AED_BC_22 - Check error message when Delete Buidling Cost
