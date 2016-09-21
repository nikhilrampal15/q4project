"""
Scrapes Ticker symbol of every mutual fund available
"""
import bs4
import requests
base_url = 'http://www.marketwatch.com/tools/mutual-fund/list?firstLetter=A'
response = requests.get(base_url)
soup = bs4.BeautifulSoup(response.text, "html.parser")
for x in soup.findAll("td", class_="quotelist-symb"):
    print(x.string)
