from flask import Flask, render_template, session, redirect
from functools import wraps
import pymongo
import json

# Load config from config.json
with open('config.json', 'r') as config_file:
    config = json.load(config_file)


app = Flask(__name__)
app.secret_key = config['SESSION_KEY']


# Access API key
mongo_uri = config['MONGO_URI']

# Database
client = pymongo.MongoClient(mongo_uri)
db = client.task_management

# Decorators
def login_required(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if 'logged_in' in session:
            return f(*args, **kwargs)
        else:
            return redirect('/')

    return wrap

#  Routes
from user import routes

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/dashboard/')
@login_required
def dashboard():
    return render_template('dashboard.html')
