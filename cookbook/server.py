from flask import Flask, request, render_template, jsonify
from flask_cors import CORS
import requests
import json
app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET', 'POST'])
def helloWorld():
    return "hello"
    """if request.get.args('text', None):
        print("test " + request.args['text'])
        return "Hello world " + request.args['text']
     params = {
        'thing1': request.values.get('thing1'),
        'thing2': request.get_json().get('thing2')
    }
    print(params)
    return json.dumps(params) """

@app.route('/index')
def hello():
    return render_template('main.html')

@app.route('/tex', methods=['GET'])
def get_t():
    response = jsonify({'text': 'this is a set text from the server lol'})
    return response