from flask import Flask, render_template
import pymongo
import json

app = Flask(__name__)

# Load config from config.json
with open('config.json', 'r') as config_file:
    config = json.load(config_file)

# Access API key
mongo_uri = config['MONGO_URI']

# Database
client = pymongo.MongoClient(mongo_uri)
db = client.task_management

#  Routes
from user import routes

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/dashboard/')
def dashboard():
    return render_template('dashboard.html')
