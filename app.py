from flask import Flask, jsonify
from flask_caching import Cache
from bwf import rankings
import datetime

app = Flask(__name__, static_folder='./react-app/build', static_url_path='/')
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

@app.route('/<event>/<year>/<week>/<rows>', methods=['GET'])
@cache.cached(timeout=60)
def rank(event, year, week, rows):
    output = rankings(event, year, week, rows)
    return jsonify(output)

@app.route('/<event>', methods=['GET'])
@cache.cached(timeout=60)
def default_rank(event):
    date = datetime.date.today()
    year, week, day_of_week = date.isocalendar()
    output = rankings(event, year, week, 10)
    return jsonify(output)

@app.route('/<event>/<rows>', methods=['GET'])
@cache.cached(timeout=60)
def default_row_rank(event, rows):
    date = datetime.date.today()
    year, week, day_of_week = date.isocalendar()
    output = rankings(event, year, week, rows)
    return jsonify(output)

@app.route('/<event>/<year>/<week>', methods=['GET'])
@cache.cached(timeout=60)
def historical_rank(event, year, week):
    output = rankings(event, year, week, 10)
    return jsonify(output)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))