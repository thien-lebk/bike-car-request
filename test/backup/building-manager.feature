Feature: Building Manager
  I want to create building manager

  Scenario: AED_BM_01 Add Building Manager successfully with correct cmnd-cccd or passport
    Given Go to Login
    When DN_01 - User login successfuly with valid Email and Password without "Remember login" option
    Then Go to menu building
    Then Go to building Detail
    When Go to tab building Manager
