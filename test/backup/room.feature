
Scenario: SC_AddRoom_01 Verify that Landlord are successfully Add room  with correct data in all fields
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_01 Verify that Landlord are successfully Add room  with correct data in all fields
    Then Display notification successfully
Scenario: SC_AddRoom_02 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Chdv 1 phòng ngủ"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_02 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Chdv 1 phòng ngủ"
    Then Display notification successfully
Scenario: SC_AddRoom_03 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Chdv 2 phòng ngủ"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_03 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Chdv 2 phòng ngủ"
    Then Display notification successfully
Scenario: SC_AddRoom_04 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Chdv 3 phòng ngủ"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_04 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Chdv 3 phòng ngủ"
    Then Display notification successfully

Scenario: SC_AddRoom_05 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Phòng có gác"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_05 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Phòng có gác"
    Then Display notification successfully
Scenario: SC_AddRoom_06 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Phòng studio"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_06 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Phòng studio"
    Then Display notification successfully
  
Scenario:SC_AddRoom_07 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Chdv duplex"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_07 Verify that Landlord are successfully Add room with valid all fields and Phân loại is "Chdv duplex"
    Then Display notification successfully
  Scenario: SC_AddRoom_08 Verify that Landlord are successfully Add room with "Số người tối đa" is number
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_08 Verify that Landlord are successfully Add room with "Số người tối đa" is number
    Then Display notification successfully

  Scenario: SC_AddRoom_09 Verify that Landlord are successfully Add room with "Diện tích" is number
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_09 Verify that Landlord are successfully Add room with "Diện tích" is number
    Then Display notification successfully
    
  Scenario: SC_AddRoom_10 Verify that Landlord are successfully Add room with "Hoa hồng" is number
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_10 Verify that Landlord are successfully Add room with "Hoa hồng" is number
    Then Display notification successfully
    
  Scenario: SC_AddRoom_11 Verify that Landlord are successfully Add room with "Tiền cọc" is number
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_11 Verify that Landlord are successfully Add room with "Tiền cọc" is number
    Then Display notification successfully
 
Scenario: SC_AddRoom_12 Check validation text of "Giá" when add room with "Giá" is number
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_12 Check validation text of "Giá" when add room with "Giá" is number
    Then Display notification successfully
  Scenario: SC_AddRoom_13 Verify that Landlord are successfully Add room with "Diện tích" is decimal 
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_13 Verify that Landlord are successfully Add room with "Diện tích" is decimal 
    Then Display notification successfully
   Scenario: SC_AddRoom_15 Verify that Landlord are successfully Add room with "Tiền cọc" is decimal  
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_15 Verify that Landlord are successfully Add room with "Tiền cọc" is decimal
    Then Display notification successfully
 
  Scenario: SC_AddRoom_14 Verify that Landlord are successfully Add room with "Hoa hồng" is decimal
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_AddRoom_14 Verify that Landlord are successfully Add room with "Hoa hồng" is decimal
    Then Display notification successfully
 Scenario: SC_AddRoom_16 Verify that Landlord are successfully Add room with "Giá" is decimal 
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When  SC_AddRoom_16  Verify that Landlord are successfully Add room with "Giá" is decimal 
    Then Display notification successfully 
  Scenario: SC_AddRoom_17 Verify that Landlord are successfully Add room with "Tên/Mã số phòng" used to exist and has been deleted
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When  SC_AddRoom_17 Verify that Landlord are successfully Add room with "Tên/Mã số phòng" used to exist and has been deleted
    Then Display notification successfully 
  
  
Scenario: Val_AddRoom_01 Check validation text of required fields when leaving blank all of them
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When  Val_AddRoom_01 Check validation text of required fields when leaving blank all of them
    Then Display 7 error validation message 
 Scenario: Val_AddRoom_001 Check validation text of "Tên và Mã số phòng" when adding room with empty "Tên và Mã số phòng"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_AddRoom_001 Check validation text of "Tên và Mã số phòng" when adding room with empty "Tên và Mã số phòng"
    Then Display 1 error validation message 


  Scenario: Val_AddRoom_02 Check validation text of "Phân loại" when adding room with empty "Phân loại"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When   Val_AddRoom_02 Check validation text of "Phân loại" when adding room with empty "Phân loại"
    Then Display 1 error validation message 
  
 Scenario: Val_AddRoom_03 Check validation text of "Số người tối đa" when adding room with empty "Số người tối đa"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When   Val_AddRoom_03 Check validation text of "Số người tối đa" when adding room with empty "Số người tối đa"
    Then Display 1 error validation message 
Scenario: Val_AddRoom_04 Check validation text of "Diện tích" when adding room with empty "Diện tích"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_AddRoom_04 Check validation text of "Diện tích" when adding room with empty "Diện tích"
    Then Display 1 error validation message 
Scenario: Val_AddRoom_05 Check validation text of "Hoa hồng" when adding room with empty "Hoa hồng"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_AddRoom_05 Check validation text of "Hoa hồng" when adding room with empty "Hoa hồng"
    Then Display 1 error validation message 
Scenario: Val_AddRoom_06 Check validation text of "Tiền cọc" when adding room with empty "Tiền cọc"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_AddRoom_06 Check validation text of "Tiền cọc" when adding room with empty "Tiền cọc"
    Then Display 1 error validation message 
Scenario: Val_AddRoom_07 Check validation text of "Giá" when adding room with empty "Giá"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_AddRoom_07 Check validation text of "Giá" when adding room with empty "Giá"
    Then Display 1 error validation message 
Scenario: Val_AddRoom_08 Check validation text of "Số người tối đa" when adding room with "Số người tối đa" is decimal
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_AddRoom_08 Check validation text of "Số người tối đa" when adding room with "Số người tối đa" is decimal
    Then Display 1 error validation message 

Scenario: Val_AddRoom_09 Check validation text of "Số người tối đa" when adding room with "Số người tối đa" is letter
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_AddRoom_09 Check validation text of "Số người tối đa" when adding room with "Số người tối đa" is letter
    Then Display 1 error validation message 

Scenario: Val_AddRoom_10 Check validation text of "Diện tích",  when adding room with "Diện tích" is letter.
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_AddRoom_10 Check validation text of "Diện tích",  when adding room with "Diện tích" is letter.
    Then Display 1 error validation message 

Scenario: Val_AddRoom_11 Check validation text of "Hoa hồng" when adding room with "Hoa hồng" is letter.
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_AddRoom_11 Check validation text of "Hoa hồng" when adding room with "Hoa hồng" is letter.
    Then Display 1 error validation message   

    Scenario: Val_AddRoom_13 Check validation text of "Giá" when adding room with "Giá" is letter.
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_AddRoom_13 Check validation text of "Giá" when adding room with "Giá" is letter.
    Then Display 1 error validation message 
 Scenario: Val_AddRoom_14 Check validation text of "Số người tối đa", "Diện tích", "Hoa hồng", "Tiền cọc", "Giá" when adding room with  "Số người tối đa", "Diện tích", "Hoa hồng", "Tiền cọc", "Giá is special character
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_AddRoom_14 Check validation text of "Số người tối đa", "Diện tích", "Hoa hồng", "Tiền cọc", "Giá" when adding room with  "Số người tối đa", "Diện tích", "Hoa hồng", "Tiền cọc", "Giá is special character
    Then Display 5 error validation message 

 Scenario: USC_AddRoom_01 Check error message display when adding room with Tên và Mã số phòng already exists in the system
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When USC_AddRoom_01 Check error message display when adding room with Tên và Mã số phòng already exists in the system
    Then Display notification failed
 
  Scenario: Val_EditRoom_01 Check validation text of required fields when leaving blank all of them
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_01 Check validation text of required fields when leaving blank all of them
    Then Display 5 error validation message
 

    

 Scenario: Val_EditRoom_02 Check validation text of "Tên or Mã số phòng" when editing room with empty "Tên or Mã số phòng"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_02 Check validation text of "Tên or Mã số phòng" when editing room with empty "Tên or Mã số phòng"
    Then Display 1 error validation message
 Scenario: Val_EditRoom_03 Check validation text of "Phân loại" when editing room with empty "Phân loại"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_03 Check validation text of "Phân loại" when editing room with empty "Phân loại"
    Then Display 1 error validation message
 Scenario: Val_EditRoom_04 Check validation text of "Số người tối đa" when editing room with empty "Số người tối đa"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_04 Check validation text of "Số người tối đa" when editing room with empty "Số người tối đa"
    Then Display 1 error validation message
 Scenario: Val_EditRoom_05 Check validation text of "Diện tích" when editing room with empty "Diện tích"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_05 Check validation text of "Diện tích" when editing room with empty "Diện tích"
    Then Display 1 error validation message
Scenario: Val_EditRoom_06 Check validation text of "Hoa hồng" when editing room with empty "Hoa hồng"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_06 Check validation text of "Hoa hồng" when editing room with empty "Hoa hồng"
    Then Display 1 error validation message
Scenario: Val_EditRoom_07 Check validation text of "Tiền cọc" when editing room with empty "Tiền cọc"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_07 Check validation text of "Tiền cọc" when editing room with empty "Tiền cọc"
    Then Display 1 error validation message
Scenario: Val_EditRoom_08 Check validation text of "Giá" when editing room with empty "Giá"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_08 Check validation text of "Giá" when editing room with empty "Giá"
    Then Display 1 error validation message
Scenario: Val_EditRoom_09 Check validation text of "Số người tối đa" when editing room with "Số người tối đa" is decimal.
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_09 Check validation text of "Số người tối đa" when editing room with "Số người tối đa" is decimal.
    Then Display 1 error validation message
Scenario: Val_EditRoom_10 Check validation text of "Số người tối đa" when editing room with "Số người tối đa" is letter.
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_10 Check validation text of "Số người tối đa" when editing room with "Số người tối đa" is letter.
    Then Display 1 error validation message
Scenario: Val_EditRoom_11 Check validation text of "Diện tích",  when editing room with "Diện tích" is letter.
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_11 Check validation text of "Diện tích",  when editing room with "Diện tích" is letter.
    Then Display 1 error validation message
Scenario: Val_EditRoom_12 Check validation text of "Hoa hồng" when editing room with "Hoa hồng" is letter.
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_12 Check validation text of "Hoa hồng" when editing room with "Hoa hồng" is letter.
    Then Display 1 error validation message
Scenario: Val_EditRoom_13 Check validation text of "Tiền cọc" when editing room with "Tiền cọc is letter.
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_13 Check validation text of "Tiền cọc" when editing room with "Tiền cọc is letter.
    Then Display 1 error validation message
Scenario: Val_EditRoom_14 Check validation text of "Giá" when editing room with "Giá" is letter.
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_14 Check validation text of "Giá" when editing room with "Giá" is letter.
    Then Display 1 error validation message
Scenario: Val_EditRoom_15 Check validation text of "Số người tối đa", "Diện tích", "Hoa hồng", "Tiền cọc", "Giá" when editing room with  "Số người tối đa", "Diện tích", "Hoa hồng", "Tiền cọc", "Giá is special character
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When Val_EditRoom_15 Check validation text of "Số người tối đa", "Diện tích", "Hoa hồng", "Tiền cọc", "Giá" when editing room with  "Số người tối đa", "Diện tích", "Hoa hồng", "Tiền cọc", "Giá is special character
    Then Display 1 error validation message
// test edit room unsuccessfuly

Scenario: USC_EditRoom_01 Check error message display when editing room with Tên/Mã số phòng does exists in the system
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When USC_EditRoom_01 Check error message display when editing room with Tên/Mã số phòng does exists in the system
    Then Display 1 error validation message

Scenario: USC_EditRoom_02 Check error message display when editing room with Tòa nhà does not exists in the system
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When USC_EditRoom_02 Check error message display when editing room with Tòa nhà does not exists in the system
    Then Display 1 error validation message

Scenario: USC_EditRoom_03 Check error message display when editing room with Tòa nhà does not exists in the system
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When USC_EditRoom_03 Check error message display when editing room with Tòa nhà does not exists in the system
    Then Display 1 error validation message
// verify edit successfuly
Scenario: SC_EditRoom_01 Verify that Landlord are successfully Edit room when changing "Tên/Mã số phòng" not already exists. 
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_EditRoom_01 Verify that Landlord are successfully Edit room when changing "Tên/Mã số phòng" not already exists. 
    Then Display 1 error validation message
Scenario: SC_EditRoom_02 Verify that Landlord are successfully Edit room when changing "Phân loại" is Chdv 2 phòng ngủ.  
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_EditRoom_02 Verify that Landlord are successfully Edit room when changing "Phân loại" is Chdv 2 phòng ngủ.  
    Then Display 1 error validation message
Scenario: SC_EditRoom_03 Verify that Landlord are successfully Edit room when changing "Số người tối đa" with correct data
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_EditRoom_03	Verify that Landlord are successfully Edit room when changing "Số người tối đa" with correct data
    Then Display 1 error validation message
Scenario: SC_EditRoom_04 Verify that Landlord are successfully Edit room when changing "Số người tối đa" with correct data
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_EditRoom_03	Verify that Landlord are successfully Edit room when changing "Số người tối đa" with correct data
    Then Display 1 error validation message
Scenario: SC_EditRoom_05 Verify that Landlord are successfully Edit room when changing "Hoa hồng" with correct data. (data is number)
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_EditRoom_05 Verify that Landlord are successfully Edit room when changing "Hoa hồng" with correct data. (data is number)
    Then Display 1 error validation message
Scenario: SC_EditRoom_06 Verify that Landlord are successfully Edit room when changing "Tiền cọc" with correct data. (data is number)
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_EditRoom_06 Verify that Landlord are successfully Edit room when changing "Tiền cọc" with correct data. (data is number)
    Then Display 1 error validation message
Scenario: SC_EditRoom_07 Verify that Landlord are successfully Edit room when changing "Giá" with correct data. (data is number)
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_EditRoom_07 Verify that Landlord are successfully Edit room when changing "Giá" with correct data. (data is number)
    Then Display 1 error validation message
//Verify Edit Room unsuccessfully
Scenario: USC_EditRoom_01 Check error message display when editing room without making any changes
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When USC_EditRoom_01 Check error message display when editing room without making any changes
    Then Display 1 error validation message
Scenario: USC_EditRoom_02 Check error message display when changing ""Tên/Mã số phòng"", ""Phân loại"", ""Số người tối đa"", ""Diện tích"", ""Hoa hồng"", ""Tiền cọc"", ""Giá"", "" is the same as the previous value
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When USC_EditRoom_02 Check error message display when changing ""Tên/Mã số phòng"", ""Phân loại"", ""Số người tối đa"", ""Diện tích"", ""Hoa hồng"", ""Tiền cọc"", ""Giá"", "" is the same as the previous value
    Then Display 1 error validation message
Scenario: USC_EditRoom_03 Check error message display when editing room with Tên/Mã số phòng already exists in the system
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When USC_EditRoom_03 Check error message display when editing room with Tên/Mã số phòng already exists in the system
    Then Display 1 error validation message
///Verify Delete Room successfully 
Scenario: SC_DeleteRoom_01 Verify that Landlord are successfully Delete room 
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    When Go to My profile tab room list
    When SC_DeleteRoom_01 Verify that Landlord are successfully Delete room 
    Then Display 1 error validation message
