from flask import Flask, request, jsonify
from scrape import get_cheapest_flight
app = Flask(__name__)

@app.route('/', methods=["POST"])
def hello_world():
    # thisdict = get_cheapest_flight(request.form["depart"],
    #                                    request.form["arrive"],
    #                                    request.form["date1"],
    #                                    request.form["date2"],
    #                                    int(request.form["num_ppl"]))
    thisdict = return {
        "price": price,
        "airports": ["IAH", "ATL"],
        "url": "https://google.com"
    }
    print(thisdict)

    return jsonify(thisdict)

if __name__ == "__main__":
   app.run()
