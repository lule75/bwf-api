from flask import Flask, jsonify
from flask_caching import Cache
from bwf import rankings

app = Flask(__name__)
cache = Cache(app, config={'CACHE_TYPE': 'simple'})

@app.route('/<event>/<year>/<month>/<rows>', methods=['GET'])
@cache.cached(timeout=60)
def rank(event, year, month, rows):
    output = rankings(event, year, month, rows)
    return jsonify(output)  

if __name__ == '__main__':
    app.run(debug=True)