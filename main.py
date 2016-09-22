"""
Scrapes Ticker symbol of every mutual fund available
"""
import bs4
import requests
import string
import csv

tickers = []
alphabet_arr = list(string.ascii_uppercase)
for i in alphabet_arr:
    base_url = 'http://www.marketwatch.com/tools/mutual-fund/list?firstLetter={}'.format(i)
    response = requests.get(base_url)
    soup = bs4.BeautifulSoup(response.text, "html.parser")
    tickers = []
    for j in soup.findAll("td", class_="quotelist-symb"):
        tickers.append(j.string)


csv_file = "./tickers.csv"

with open(csv_file, "w") as output:
    writer = csv.writer(output, lineterminator='\n')
    for symbol in tickers:
        writer.writerow([symbol])