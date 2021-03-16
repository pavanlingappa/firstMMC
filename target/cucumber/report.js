$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/loginBDD.feature");
formatter.feature({
  "line": 2,
  "name": "I want to test the Login functionality",
  "description": "",
  "id": "i-want-to-test-the-login-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "SDET Login Test",
  "description": "",
  "id": "i-want-to-test-the-login-functionality;sdet-login-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Mobtest1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user login with email \"kiran@gmail.com\" and password \"helo\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 64975228500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 23
    },
    {
      "val": "helo",
      "offset": 54
    }
  ],
  "location": "stepDefinition.user_is_given_the_email_something_and_password_something(String,String)"
});
formatter.result({
  "duration": 4110397100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.validate_the_outcomes()"
});
formatter.result({
  "duration": 4110806100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "SDET Login Test",
  "description": "",
  "id": "i-want-to-test-the-login-functionality;sdet-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Mobtest2"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user is given the email \u003cusername\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user is given the password \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate the outcomes",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "i-want-to-test-the-login-functionality;sdet-login-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "i-want-to-test-the-login-functionality;sdet-login-test;;1"
    },
    {
      "cells": [
        "pk970750@gmail.com",
        "Pavan@1996"
      ],
      "line": 22,
      "id": "i-want-to-test-the-login-functionality;sdet-login-test;;2"
    },
    {
      "cells": [
        "pavankumarm@gmail.com",
        "Koushk213"
      ],
      "line": 23,
      "id": "i-want-to-test-the-login-functionality;sdet-login-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "SDET Login Test",
  "description": "",
  "id": "i-want-to-test-the-login-functionality;sdet-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Mobtest2"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user is given the email pk970750@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user is given the password Pavan@1996",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 15957795900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pk970750@gmail.com",
      "offset": 24
    }
  ],
  "location": "stepDefinition.user_is_given_the_email(String)"
});
formatter.result({
  "duration": 2648828800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pavan@1996",
      "offset": 27
    }
  ],
  "location": "stepDefinition.user_is_given_the_password(String)"
});
formatter.result({
  "duration": 3037591800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.validate_the_outcomes()"
});
formatter.result({
  "duration": 1454885300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "SDET Login Test",
  "description": "",
  "id": "i-want-to-test-the-login-functionality;sdet-login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Mobtest2"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user is given the email pavankumarm@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user is given the password Koushk213",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 6918803200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pavankumarm@gmail.com",
      "offset": 24
    }
  ],
  "location": "stepDefinition.user_is_given_the_email(String)"
});
formatter.result({
  "duration": 124500700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Koushk213",
      "offset": 27
    }
  ],
  "location": "stepDefinition.user_is_given_the_password(String)"
});
formatter.result({
  "duration": 693296900,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.validate_the_outcomes()"
});
formatter.result({
  "duration": 1153716000,
  "status": "passed"
});
});