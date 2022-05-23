 Feature:Building-cost-rooms
    I want to create building-cost-rooms

Scenario: AED_RC_01 Add room cost successfully with correct data
  Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When Go to room list and select first room
  When Go to room tab cost
  When AED_RC_01 Add room cost successfully with correct data
  Then Display notification successfully

Scenario: AED_RC_02 Add room utility successfully from list
 Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When Go to room list and select first room
  When Go to room tab cost
  When AED_RC_02 Add room cost successfully from list
  Then Display notification successfully

Scenario: AED_RC_03 Add room cost successfully when edit data collect from list
 Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When Go to room list and select first room
  When Go to room tab cost
  When AED_RC_03 Add room cost successfully when edit data collect from list
  Then Display notification successfully

Scenario: AED_RC_04 Edit room cost successfully with correct data
 Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When Go to room list and select first room
  When Go to room tab cost
  When AED_RC_04 Edit room cost successfully with correct data
  Then Display notification successfully

Scenario: AED_RC_05 Edit room cost successfully when changing "Chi phí"
 Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When Go to room list and select first room
  When Go to room tab cost
  When AED_RC_05 Edit room cost successfully when changing "Chi phí"
  Then Display notification successfully

Scenario: AED_RC_06 Edit room cost successfully when changing "Mô tả"
 Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When Go to room list and select first room
  When Go to room tab cost
  When AED_RC_06 Edit room cost successfully when changing "Mô tả"
  Then Display notification successfully

Scenario: AED_RC_07 Edit room cost successfully when changing "Đơn giá"
 Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When Go to room list and select first room
  When Go to room tab cost
  When AED_RC_07 Edit room cost successfully when changing "Đơn giá"
  Then Display notification successfully

Scenario: AED_RC_08 Edit room cost successfully when changing "Đơn vị tính"
 Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When Go to room list and select first room
  When Go to room tab cost
  When AED_RC_08 Edit room cost successfully when changing "Đơn vị tính"
  Then Display notification successfully

Scenario: AED_RC_09 Check successful message when Delete Room cost successfully
 Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When Go to room list and select first room
  When Go to room tab cost
  When AED_RC_09 Check successful message when Delete Room cost successfully
  Then Display notification successfully

Scenario: AED_RC_10 Check validation text when Add Room Cost with empty for all fields
 Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When Go to room list and select first room
  When Go to room tab cost
  When AED_RC_10 Check validation text when Add Room Cost with empty for all fields
  Then Display 4 error validation message


Scenario: AED_RC_11 Check validation text for "Chi Phí" when Add Room with empty "Chi Phí"
 Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When Go to room list and select first room
  When Go to room tab cost
  When AED_RC_11 Check validation text for "Chi Phí" when Add Room with empty "Chi Phí"
  Then Display 1 error validation message


Scenario: AED_RC_12 Check validation text for "Chi Phí" when Edit Room with empty "Mô tả"
 Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When Go to room list and select first room
  When Go to room tab cost
  When AED_RC_12 Check validation text for "Chi Phí" when Edit Room with empty "Mô tả"
  Display 1 error validation message

Scenario: AED_RC_13 Check validation text for "Chi Phí" when Edit Room with empty "Đơn vị tính"
 Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When Go to room list and select first room
  When Go to room tab cost
  When AED_RC_13 Check validation text for "Chi Phí" when Edit Room with empty "Đơn vị tính"
  Then Display 1 error validation message

Scenario: AED_RC_14 Check validation text for "Chi Phí" when Edit Room with empty "Đơn giá"
 Given Go to Login
  When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
  When Go to My profile tab building detail
  When Go to room list and select first room
  When Go to room tab cost
  When AED_RC_14 Check validation text for "Chi Phí" when Edit Room with empty "Đơn giá"
  Then Display 1 error validation message



