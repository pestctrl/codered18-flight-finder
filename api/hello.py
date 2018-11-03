from selen_help import *

def main():
    driver = webdriver.Firefox()
    driver.get("https://accessuh.uh.edu")
    find_element(driver, By.ID, "param1").send_keys("bchu3")
    find_element(driver, By.ID, "param2").send_keys("not_my_password")
    find_element(driver, By.XPATH, "/html/body/main/div/section/div[2]/form/div/div[1]/i/input").click()

if __name__ == "__main__":
    main()
