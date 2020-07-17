from flask import Flask, jsonify
from flask_caching import Cache
from bwf import rankings
from datetime import datetime

app = Flask(__name__)
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

@app.route('/<event>/<year>/<month>/<rows>', methods=['GET'])
@cache.cached(timeout=60)
def rank(event, year, month, rows):
    output = rankings(event, year, month, rows)
    return jsonify(output)

@app.route('/<event>', methods=['GET'])
@cache.cached(timeout=60)
def default_rank(event):
    currentMonth = datetime.now().month
    currentYear = datetime.now().year
    output = rankings(event, currentYear, currentMonth, 10)
    return jsonify(output)

@app.route('/<event>/<rows>', methods=['GET'])
@cache.cached(timeout=60)
def default_row_rank(event, rows):
    currentMonth = datetime.now().month
    currentYear = datetime.now().year
    output = rankings(event, currentYear, currentMonth, rows)
    return jsonify(output)

@app.route('/<event>/<year>/<month>', methods=['GET'])
@cache.cached(timeout=60)
def historical_rank(event, year, month):
    output = rankings(event, year, month, 10)
    return jsonify(output)

if __name__ == '__main__':
    app.run(debug=True)