from selen_help import *
from bs4 import BeautifulSoup
import html
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary


def get_cheapest_flight(depart, arrive, date1, date2, num_ppl):
    driver = webdriver.Firefox()
    driver.get("https://www.expedia.com/")
    find_element(driver, By.ID, "tab-flight-tab-hp").click()
    find_element(driver, By.ID, "flight-returning-hp-flight").send_keys(date2)
    find_element(driver, By.ID, "flight-departing-hp-flight").send_keys(date1)
    find_element(driver, By.ID, "flight-origin-hp-flight").send_keys(depart)
    find_element(driver, By.ID, "flight-destination-hp-flight").send_keys(arrive)

    elem = find_element(driver, By.XPATH, "/html/body/section[1]/div/div/div/section/div[1]/div[2]/div[2]/section[3]/form/section/div[4]/div[8]/div/div/ul/li/div/div/div[1]/div[2]/input")
    driver.execute_script("arguments[0].setAttribute('value', arguments[1])",
                          elem, num_ppl)

    time.sleep(1)
    find_element(driver, By.CLASS_NAME, "btn-primary.btn-action.gcw-submit").click()

    elemHTML = find_element(driver, By.CLASS_NAME, "uitk-grid.all-grid-fallback-alt").get_attribute("outerHTML")

    soup = BeautifulSoup(elemHTML, features="html.parser")

    uList = soup.find("ul", id="flightModuleList")

    listItem = uList.findChild().find_next_sibling("li")

    price = listItem.find_all("span")[11].get_text()

    price = price[1:]

    targetSpan = listItem.find_all("span")[9]

    departLocation = targetSpan.find_parent("div").get_text()

    departLocation = departLocation[19:].lstrip()

    departLocation = departLocation[:3]

    arrivalLocation = targetSpan.find_parent("div").get_text()

    arrivalLocation = arrivalLocation.rstrip()

    arrivalLocation = arrivalLocation[206:]

    driver.quit()

    return {
        "price": price,
        "departure": departLocation,
        "arrival": arrivalLocation
    }

if __name__ == "__main__":
    print(get_cheapest_flight("Houston","Atlanta","11/15/2018", "11/25/2018", 4))

