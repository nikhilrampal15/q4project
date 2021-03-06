import pandas as pd
from sklearn.cluster import KMeans

array = [1, 2, 3, 4]


def k_means(arr):
    mutual_funds = pd.read_csv('fund_data.csv')
    no_percents = mutual_funds['C'].str.replace('+', '').str.replace('%', '').str.replace('--', '0')
    tickers = mutual_funds['B'].str.replace('(', '').str.replace(')', '')
    float_type = pd.to_numeric(no_percents, errors='coerce')._get_numeric_data()
    kmeans_model = KMeans(n_clusters=5, random_state=1).fit(float_type.reshape(-1, 1))
    labels = kmeans_model.labels_
    sheet = pd.crosstab([tickers, no_percents, mutual_funds['E']], labels).reset_index()
    sheet.to_csv('pandas.csv')

    """
    categorize funds based on investment style
    """
    cluster_1 = sheet[sheet[0] == 1]
    cluster_2 = sheet[sheet[1] == 1]
    cluster_3 = sheet[sheet[2] == 1]
    cluster_4 = sheet[sheet[3] == 1]
    cluster_5 = sheet[sheet[4] == 1]

    with pd.option_context('display.max_rows', 21, 'display.max_columns', 10):
        if arr[2] == 1:
            cluster_tick_arr = list(cluster_1[:4]['B'])
            return cluster_tick_arr
        elif arr[2] == 25:
            cluster_tick_arr = list(cluster_5[:4]['B'])
            print(cluster_tick_arr)
            print(cluster_tick_arr)
        elif arr[2] == 50:
            cluster_tick_arr = list(cluster_4[:4]['B'])
            print(cluster_tick_arr)
            return cluster_tick_arr
        elif arr[2] == 75:
            cluster_tick_arr = list(cluster_3[:4]['B'])
            print(cluster_tick_arr)
            return cluster_tick_arr
        elif arr[2] == 100:
            cluster_tick_arr = list(cluster_2[:4]['B'])
            print(cluster_tick_arr)
            return cluster_tick_arr
k_means(array)
    #percents = mutual_funds['C']
    #percent_2 = no_percents.astype(float)
    #first_one = percents[:1]
    # print(first_one.str.replace('+', '').str.replace('%', ''))
    # print(type(float(no_percents[8905])))
    #
    # print(mutual_funds['B'][8905])
    #
    # print(mutual_funds['C'])
    #arr = mutual_funds.iloc[0, 0]
    # if arr[1] == 1:
        #answer = cluster_5[:4]

        #all_ticks = cluster_5.index[:].levels[0]
        # for obs in cluster_5:
        #     if cluster_5[4]==1:
        #         print()
        #ticks = cluster_5.index[:].levels[0]
        #print(ticks)











