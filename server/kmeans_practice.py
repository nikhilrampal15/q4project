import pandas as pd
from sklearn.cluster import KMeans

read_file = pd.read_csv('fund_data.csv')

formatted = read_file['C'].str.replace('+', '').str.replace('%', '').str.replace('--', 0)

first_nineteen = formatted[4:5]

print(type(first_nineteen))

#kmeans_model = KMeans(n_clusters=10).fit(formatted.reshape(-1, 1))

#sheet = pd.crosstab(formatted, kmeans_model.labels_,)

#print(sheet)
#sheet.to_csv('pandas.csv')



