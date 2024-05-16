import unittest
from selenium import webdriver
import time

class ArticleRenderTest(unittest.TestCase):
    def setUp(self):
        # Initialize Selenium WebDriver (assuming Chrome)
        self.driver = webdriver.Chrome()
        self.driver.get("http://localhost:8080")  # Assuming the Vue app is hosted on this URL
        
    def test_news_articles_rendered_correctly(self):
        time.sleep(2)  # Wait for the page to load
        
        # Check if specific text content associated with news articles is present on the page
        articles_text = self.driver.find_element_by_tag_name('body').text
        
        # Specify some text that should be associated with news articles
        expected_text = "News Articles"
        
        # Check if the expected text is present on the page
        self.assertIn(expected_text, articles_text, "News articles not rendered")

    def tearDown(self):
        # Quit the WebDriver
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
