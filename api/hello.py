from selen_help import *
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary



def main():

    driver = webdriver.Firefox()
    driver.get("https://www.expedia.com/")
    find_element(driver, By.ID, "tab-flight-tab-hp").click()
    find_element(driver, By.ID, "flight-returning-hp-flight").send_keys("11/25/2018")
    find_element(driver, By.ID, "flight-departing-hp-flight").send_keys("11/15/2018")
    find_element(driver, By.ID, "flight-origin-hp-flight").send_keys("houston")
    find_element(driver, By.ID, "flight-destination-hp-flight").send_keys("atlanta")

    elem = find_element(driver, By.XPATH, "/html/body/section[1]/div/div/div/section/div[1]/div[2]/div[2]/section[3]/form/section/div[4]/div[8]/div/div/ul/li/div/div/div[1]/div[2]/input")
    driver.execute_script("arguments[0].setAttribute('value', arguments[1])",
                          elem, 4)

    time.sleep(1)
    find_element(driver, By.CLASS_NAME, "btn-primary.btn-action.gcw-submit").click()

    #find_element(driver, By.XPATH, "/html/body/main/div/section/div[2]/form/div/div[1]/i/input").click()

if __name__ == "__main__":
    main()

    
