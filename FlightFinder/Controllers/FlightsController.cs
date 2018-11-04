using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FlightFinder.Controllers
{
    [Route("api/[controller]")]
    public class FlightsController : Controller
    {
        [HttpPost("[action]")]
        public ActionResult GetFlights(string start, string end)
        {
            using (HttpClient client = new HttpClient())
            {
                var formContent = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("depart", start),
                    new KeyValuePair<string, string>("arrive", end),
                    new KeyValuePair<string, string>("date1", "11/15/2018"),
                    new KeyValuePair<string, string>("date2", "11/25/2018"),
                    new KeyValuePair<string, string>("num_ppl", "2")
                });

                var myHttpClient = new HttpClient();
                var response = Task.Run(() => myHttpClient.PostAsync("http://35.231.94.254:5000/", formContent)).Result;
                var content = Task.Run(() => response.Content.ReadAsStringAsync()).Result;
                return new ContentResult
                {
                    Content = content,
                    ContentType = "application/json"
                };
            }
        }
        

        public class FlightRequest
        {
            public string start { get; set; }
            public string end { get; set; }
        }
    }
}
