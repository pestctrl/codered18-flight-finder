from flask import Flask
from scrape import get_cheapest_flight
app = Flask(__name__)

@app.route('/')
def hello_world():
   return get_cheapest_flight("Houston","Atlanta","11/15/2018", "11/25/2018", 4)

if __name__ == "__main__":
   app.run()
