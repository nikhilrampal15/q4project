from flask import Flask, render_template, request
from kmeans_scikit import k_means
import json

app = Flask(__name__)



@app.route('/', methods=['GET'])
def home_page():
    return render_template('index.html')


@app.route('/results', methods=['POST'])
def results():
    print(request.get_json())
    resultarr = k_means(request.get_json())
    print(resultarr)
    return json.dumps(resultarr)

@app.route('/mycharts',methods=['GET'])
def charts():
    print(request.query_string)
    return render_template('results.html', kmeans_array=request.query_string)


#print('hello')
#print(answer)


@app.route('/quote', methods=['GET'])
def quote():
    return render_template('quote.html')





