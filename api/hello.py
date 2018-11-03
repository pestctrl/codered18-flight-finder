from selen_help import *
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary



def main():

    binary = FirefoxBinary(r'C:\Program Files\Mozilla Firefox\firefox.exe')
    driver = webdriver.Firefox(firefox_binary=binary)
    driver.get("https://www.expedia.com/")
    find_element(driver, By.ID, "package-origin-hp-package").send_keys("houston")
    find_element(driver, By.ID, "package-destination-hp-package").send_keys("atlanta")
    find_element(driver, By.ID, "package-returning-hp-package").send_keys("12/3/2018")
    find_element(driver, By.ID, "package-departing-hp-package").send_keys("11/3/2018")
    #find_element(driver, By.XPATH, "/html/body/main/div/section/div[2]/form/div/div[1]/i/input").click()

if __name__ == "__main__":
    main()
