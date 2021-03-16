package Testing.MMC;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Browser {
public static WebDriver BrowserType(String WebbrowserType) {
		
		if(WebbrowserType.equalsIgnoreCase("chrome"))
			
		{
			System.setProperty("webdriver.chrome.driver", "D:\\Selenium_learning\\chromedriver.exe");
			return new ChromeDriver();
		}
		else
		{
			System.setProperty("webdriver.gecko.driver", "D:\\Selenium_learning\\geckodriver.exe");
			 return new FirefoxDriver();
		}
		

		// TODO Auto-generated method stub

	}


}
