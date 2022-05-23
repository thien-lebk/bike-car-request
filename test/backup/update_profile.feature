Feature: Update Profile
  I want to change user profile to systems

  Scenario: UP_01 - Update profile successfuly with all valid information
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab user profile
    When UP_01 - Update profile successfuly with all valid information
    Then Display notification Saved
 
   Scenario: UP_02 - Check validation text when update with all fields are empty
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab user profile
    When UP_02 - Check validation text when update with all fields are empty
    Then Display notification Saved
 
    Scenario: UP_03 - Check validation text of Họ và tên when update with empty Họ và tên
      Given Go to Login
      When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
      When Go to My profile tab user profile
      When UP_03 - Check validation text of Họ và tên when update with empty Họ và tên
      Then Display notification Saved

    Scenario: UP_04 - Check validation text of Ngày sinh when update with empty Ngày sinh
      Given Go to Login
      When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
      When Go to My profile tab user profile
      When UP_04 - Check validation text of Ngày sinh when update with empty Ngày sinh
      Then Display notification Saved

    Scenario: UP_05 - Check validation text of Giới tính when update with empty Giới tính
      Given Go to Login
      When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
      When Go to My profile tab user profile
      When UP_05 - Check validation text of Giới tính when update with empty Giới tính
      Then Display notification Saved

    Scenario: UP_06 - Check validation text of Số cmnd-cccd when update with empty field Số cmnd-cccd
      Given Go to Login
      When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
      When Go to My profile tab user profile
      When UP_06 - Check validation text of Số cmnd-cccd when update with empty field Số cmnd-cccd
      Then Display notification Saved
      
    Scenario: UP_07 - Check validation text of Số điện thoại when update with empty Số điện thoại
      Given Go to Login
      When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
      When Go to My profile tab user profile
      When UP_07 - Check validation text of Số điện thoại when update with empty Số điện thoại
      Then Display notification Saved
      
    Scenario: UP_08 - Check validation text of Email when update with empty Email
      Given Go to Login
      When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
      When Go to My profile tab user profile
      When UP_08 - Check validation text of Email when update with empty Email
      Then Display notification Saved
      
    Scenario: UP_09 - Check validation text of Địa chỉ when update with empty Địa chỉ
      Given Go to Login
      When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
      When Go to My profile tab user profile
      When UP_09 - Check validation text of Địa chỉ when update with empty Địa chỉ
      Then Display notification Saved

    Scenario: UP_10 - Check validation text when update with all fields have special characters @
      Given Go to Login
      When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
      When Go to My profile tab user profile
      When UP_10 - Check validation text when update with all fields have special characters @
    
    Scenario: UP_11 - Check validation text when update with all fields have icon
      Given Go to Login
      When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
      When Go to My profile tab user profile
      When UP_11 - Check validation text when update with all fields have icon
    
    
    Scenario: UP_12 - Check validation text when update with all fields have space
      Given Go to Login
      When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
      When Go to My profile tab user profile
      When UP_12 - Check validation text when update with all fields have space
    
    Scenario: UP_13 - Check validation text of Email when update profile with invalid Email
      Given Go to Login
      When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
      When Go to My profile tab user profile
      When UP_13 - Check validation text of Email when update profile with invalid Email
   
     Scenario: UP_14 - Update profile unsuccessfuly with Email for the update was registered
      Given Go to Login
      When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
      When Go to My profile tab user profile
      When UP_14 - Update profile unsuccessfuly with Email for the update was registered
      Then Display notification Error
    
    Scenario: UP_15 - Update profile unsuccessfuly with Số cmnd-cccd for the update was registered
      Given Go to Login
      When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
      When Go to My profile tab user profile
      When UP_15 - Update profile unsuccessfuly with Số cmnd-cccd for the update was registered
      Then Display notification Error

    Scenario: UP_16 - Update profile unsuccessfuly with Số điện thoại for the update was registered
      Given Go to Login
      When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
      When Go to My profile tab user profile
      When UP_16 - Update profile unsuccessfuly with Số điện thoại for the update was registered
      Then Display notification Error