package stepDefinition;


import org.junit.After;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefinition {
	
	WebDriver driver;
	  @Given("^user is on login page$")
	    public void user_is_on_login_page() {
		  System.out.println("githubsss");
	    	driver = Testing.MMC.Browser.BrowserType("chrome");
	 		driver.get("https://auth.testproject.io/auth/realms/TP/protocol/openid-connect/auth?client_id=tp.app&redirect_uri=https%3A%2F%2Fapp.testproject.io%2Fcallback.html&response_type=id_token%20token&scope=openid%20profile&state=6b6f6b8b33ab425c9b11b7c69ccb9729&nonce=82208088bd92425bae02a7bab27e9f4c");
	     
	    }

	    @When("^user is given the email (.*)$")
	    public void user_is_given_the_email(String username)  {
	    	
	    	driver.findElement(By.cssSelector("input[id = 'username']")).sendKeys(username);
	    	System.out.println("UserName is: " + username);
	    
	    }
	    
	    @And("^user is given the password (.*)$")
	    public void user_is_given_the_password(String password)  {    	
	    	driver.findElement(By.cssSelector("input[id = 'password']")).sendKeys(password);
	    	System.out.println("Password is: "+ password);
	    	driver.findElement(By.cssSelector("input[name = 'login']")).click();
	     
	    }
	    
	    @When("^user login with email \"([^\"]*)\" and password \"([^\"]*)\"$")
	    public void user_is_given_the_email_something_and_password_something(String username, String password) throws Throwable {
	    	driver.findElement(By.cssSelector("input[id = 'username']")).sendKeys(username);
	    	driver.findElement(By.cssSelector("input[id = 'password']")).sendKeys(password);	    	
	    	driver.findElement(By.cssSelector("input[name = 'login']")).click();
	    	System.out.println("UserName is: " + username + " and Password is " + password);
	    	
	    }
	    

	   
	    
	    @Then("^validate the outcomes$")
	    public void validate_the_outcomes()  {
	    	System.out.println("validated the outcome");
	    	driver.quit();
	       // throw new PendingException();
	    }

	    
	    
	    
	    
	    
	    
	    
	    
	    @After
	    public void tearDown() {
	    	driver.quit();
	    }

}
