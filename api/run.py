from flask import Flask, request
from scrape import get_cheapest_flight
app = Flask(__name__)

@app.route('/', methods=["POST"])
def hello_world():
    return get_cheapest_flight(request.form["depart"], request.form["arrive"], request.form["date1"], request.form["date2"], int(request.form["num_ppl"]))

if __name__ == "__main__":
   app.run()
