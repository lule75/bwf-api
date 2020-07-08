from flask import Flask

app = Flask(__name__)

@app.route('/')
def main():
    return "bob"

if __name__ == '__main__':
    app.run(debug=True)