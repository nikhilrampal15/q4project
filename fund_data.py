"""
Scrapes Fund Data of every mutual fund available
"""
import bs4
import requests
import csv

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

    for g in soup.find("h1", class_="wsod_fLeft"):
        info.append(''.join(g))

    for i in soup.find("td", class_="wsod_ytd"):
        info.append(i.string)

    nav = soup.find("td", class_="wsod_last")

    for j in nav.find_next("td", class_="wsod_last"):
        info.append(j.string)

    rating = soup.find("td", class_="wsod_mStarRating")

    for k in rating.find_next("td", class_="wsod_mStarRating"):
        info.append(k.string)

    # with open(csv_file, "w") as output:
    #     writer = csv.writer(output, lineterminator=',\n')
    #     for data in info:
    #         writer.writerow([data])

    outfile.write(",".join(info) + '\n')
    print('scraping..  '+''.join(g)+'  from..  '+base_url)

# for i in ticker_arr:
#     base_url = 'http://money.cnn.com/quote/mutualfund/mutualfund.html?symb={}'.format(i)
#     response = requests.get(base_url)
#     soup = bs4.BeautifulSoup(response.text, "html.parser")
#     tickers = []
#     for j in soup.findAll("td", class_="quotelist-symb"):
#         tickers.append(j.string)

