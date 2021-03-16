
Feature: I want to test the Login functionality
   

@Mobtest1    
Scenario: SDET Login Test
Given user is on login page
When user login with email "kiran@gmail.com" and password "helo"
Then validate the outcomes
    
  
@Mobtest2   
Scenario Outline: SDET Login Test
Given user is on login page
When user is given the email <username>
And user is given the password <password>    
Then validate the outcomes
    

Examples:
| username | password |
| pk970750@gmail.com| Pavan@1996 |
| pavankumarm@gmail.com | Koushk213 |