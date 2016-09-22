"""
Scrapes Fund Data of every mutual fund available
"""
import bs4
import requests
import csv

with open('tickers.csv', 'r') as f:
    reader = csv.reader(f)
    ticker_arr = list(reader)

info = []

base_url = 'http://money.cnn.com/quote/mutualfund/mutualfund.html?symb=UBPIX'
response = requests.get(base_url)
soup = bs4.BeautifulSoup(response.text, "html.parser")

for h in soup.find("span", class_="wsod_smallSubHeading"):
    info.append(h.string.replace('(', '').replace(')', ''))

for i in soup.find("td", class_="wsod_ytd"):
    info.append(i.string)

nav = soup.find("td", class_="wsod_last")

for j in nav.find_next("td", class_="wsod_last"):
    info.append(j.string)

rating = soup.find("td", class_="wsod_mStarRating")

for k in rating.find_next("td", class_="wsod_mStarRating"):
    info.append(k.string)

csv_file = "./fund_data.csv"

with open(csv_file, "w") as output:
    writer = csv.writer(output, lineterminator=',\n')
    for data in info:
        writer.writerow([data])


# for i in ticker_arr:
#     base_url = 'http://money.cnn.com/quote/mutualfund/mutualfund.html?symb={}'.format(i)
#     response = requests.get(base_url)
#     soup = bs4.BeautifulSoup(response.text, "html.parser")
#     tickers = []
#     for j in soup.findAll("td", class_="quotelist-symb"):
#         tickers.append(j.string)

