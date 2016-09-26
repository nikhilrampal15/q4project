from flask import Flask, render_template, request

app = Flask(__name__)

answer = []

@app.route('/', methods=['GET'])
def home_page():
    return render_template('index.html')


@app.route('/results', methods=['POST'])
def results():
    if request.headers['Content-Type'] == 'application/json':
        print(request.get_json())
        answer.append(request.get_json())
        return 'success'

#print('hello')
#print(answer)






