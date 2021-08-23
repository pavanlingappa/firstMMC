$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/linkedin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user is on linkedin page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "details are given",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click on sigin button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "validate the user",
  "keyword": "Then "
});
formatter.match({
  "location": "linkedinStepImplementation.user_is_on_linkedin_page()"
});
formatter.result({
  "duration": 8635038900,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepDefinition.linkedinStepImplementation.user_is_on_linkedin_page(linkedinStepImplementation.java:23)\r\n\tat ✽.Given user is on linkedin page(src/test/java/features/linkedin.feature:25)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "linkedinStepImplementation.details_are_given()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "linkedinStepImplementation.click_on_sigin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "linkedinStepImplementation.validate_the_user()"
});
formatter.result({
  "status": "skipped"
});
});