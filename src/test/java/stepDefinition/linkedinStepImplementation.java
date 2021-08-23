package stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import Testing.MMC.Browser;

@RunWith(Cucumber.class)
public class linkedinStepImplementation {
	WebDriver driver;

    @Given("^user is on linkedin page$")
    public void user_is_on_linkedin_page() throws Throwable {
    	driver = Browser.BrowserType("chrome");
    	driver.get("https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin");
    	System.out.println("Ji");
throw new PendingException();
    }

    @When("^click on sigin button$")
    public void click_on_sigin_button() throws Throwable {
    	System.out.println("Ji");
        throw new PendingException();
    }

    @Then("^validate the user$")
    public void validate_the_user() throws Throwable {
    	System.out.println("Ji");
    	throw new PendingException();
    }

    @And("^details are given$")
    public void details_are_given() throws Throwable {
    	System.out.println("Ji");
    	throw new PendingException();
    }

}