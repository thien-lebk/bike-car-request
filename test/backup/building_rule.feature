
Feature: Add, Edit, Delete Building Rule

   Scenario:SC_AddBuildingRule_01 - Verify that Landlord are successfully Add building rule with correct data in all fields
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Enter the building rule tab
    When SC_AddBuildingRule_01 - Verify that Landlord are successfully Add building rule with correct data in all fields

  Scenario:UI_AddBuildingRule_02 - Check actions work well between fields In "Nội quy tòa nhà" form
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Enter the building rule tab
    When SC_AddBuildingRule_02 - Check validation text of "Nội quy"  when adding building rule with "Nội dung" more than 1000 characters

  Scenario:USC_AddBuilding_Rule_01 - Verify web can back to "Nội quy tòa nhà" tab after cancel Add building rule.
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Enter the building rule tab
    When USC_AddBuilding_Rule_01 - Verify web can back to "Nội quy tòa nhà" tab after cancel Add building rule.

  Scenario:USC_AddBuilding_Rule_02 - Check validation text of "Nội dung" when adding building rule with empty "Nội dung"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Enter the building rule tab
    When USC_AddBuilding_Rule_02 - Check validation text of "Nội dung" when adding building rule with empty "Nội dung"

  Scenario:SC_EditBuildingRule_01 - Verify that Landlord are successfully Edit building rule when changing "Quy định" with correct data. (data is min length more than 0 character)
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Enter the building rule tab
    When SC_EditBuildingRule_01 - Verify that Landlord are successfully Edit building rule when changing "Quy định" with correct data. (data is min length more than 0 character)
    Then Display notification successfully

  Scenario:SC_SearchBuildingRule_01 - Verify that Landlord are unsuccessfully Search regulations with incorrect data in "Quy định"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Enter the building rule tab
    When SC_SearchBuildingRule_01 - Verify that Landlord are unsuccessfully Search regulations with incorrect data in "Quy định"

  Scenario:SC_SearchBuildingRule_02 - Verify that Landlord are unsuccessfully Search regulations with incorrect data in "Nội dung"
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Enter the building rule tab
    When SC_SearchBuildingRule_02 - Verify that Landlord are unsuccessfully Search regulations with incorrect data in "Nội dung"

