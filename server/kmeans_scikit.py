import pandas as pd
from sklearn.cluster import KMeans

mutual_funds = pd.read_csv('fund_data.csv')

no_percents = mutual_funds['C'].str.replace('+', '').str.replace('%', '').str.replace('--', '0')

#print(no_percents.shape)

kmeans_model = KMeans(n_clusters=4).fit(no_percents.reshape(-1, 1))

labels = kmeans_model.labels_
sheet = pd.crosstab(no_percents, labels)

sheet.to_csv('pandas.csv')

#with pd.option_context('display.max_rows', 1, 'display.max_columns', 1):
 #   print(sheet)

percents = mutual_funds['C']

percent_2 = no_percents.astype(float)

first_one = percents[:1]
#
#
print(first_one.str.replace('+', '').str.replace('%', ''))
print(type(float(no_percents[8905])))

print(mutual_funds['B'][8905])

print(mutual_funds['C'])