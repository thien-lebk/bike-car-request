
Feature: Add, Edit, Delete Building Rule


  Scenario:SC_DeleteBuildingRule_01 - Verify that Landlord are successfully Delete building rule
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Enter the building rule tab
    When SC_DeleteBuildingRule_01 - Verify that Landlord are successfully Delete building rule
    Then Display notification successfully





