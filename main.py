"""
Scrapes Ticker symbol of every mutual fund available
"""
from bs4 import BeautifulSoup

from selenium import webdriver

driver = webdriver.Firefox()
#conservative allocation
url = 'http://finance.yahoo.com/funds/lists/?bypass=true&mod_id=mediaquotesmutualfunds&scol=nav3m&stype=desc&rcnt=100&tab=tab1&cat=%24FOCA%24CA%24%24&page=1'
driver.get(url)
html = driver.page_source
driver.quit()
soup = BeautifulSoup(html)

for tag in soup.find_all('td', class_='tkr'):
    print (tag.string)