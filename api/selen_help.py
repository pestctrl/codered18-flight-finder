from selenium import webdriver
from selenium.webdriver.support.ui import Select
from selenium.webdriver.common.by import By
import selenium.webdriver.common.by
import urllib3
import certifi
import time

def find_element(driver, by, text):
    while True:
        try:
            return driver.find_element(by, text)
        except Exception:
            print("Waiting for page to load...", end='\r')


def wait_for_internet_connection():
    message = False
    while True:
        try:
            urllib3.PoolManager(
                cert_reqs='CERT_REQUIRED',
                ca_certs=certifi.where()).request('GET', "https://google.com")
# print('Good connection.')
            return True
        except Exception:
            if not message:
                print('No connection! Please connect to the internet to continue.')
                message = True
                time.sleep(1)


