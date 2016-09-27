"""
Scrapes Fund Data of every mutual fund available
"""
import bs4
import requests
import csv
import time

with open('tickers.csv', 'r') as f:
    reader = csv.reader(f)
    ticker_arr = list(reader)


csv_file = "./fund_data.csv"

outfile = open('fund_data.csv', 'a')

for f in ticker_arr:
    info = []
    base_url = 'http://money.cnn.com/quote/mutualfund/mutualfund.html?symb={}'.format(''.join(f))
    response = requests.get(base_url)
    soup = bs4.BeautifulSoup(response.text, "html.parser")

    if soup.find("h1", class_="wsod_fLeft") is not None:
        for g in soup.find("h1", class_="wsod_fLeft"):
            info.append(''.join(g))
    else:
        pass

    if soup.find("td", class_="wsod_ytd") is not None:
        for i in soup.find("td", class_="wsod_ytd"):
            info.append(i.string)
    else:
        pass

    nav = soup.find("td", class_="wsod_last")

    if soup.find("td", class_="wsod_last") is not None:
        for j in nav.find_next("td", class_="wsod_last"):
            info.append(j.string)
    else:
        pass

    rating = soup.find("td", class_="wsod_mStarRating")

    if rating and rating.find_next("td", class_="wsod_mStarRating") is not None:
        for k in rating.find_next("td", class_="wsod_mStarRating"):
            info.append(k.string)
    else:
        pass

    outfile.write(",".join(info) + '\n')
    print('scraping..  '+''.join(g)+'  from..  '+base_url)
