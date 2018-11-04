using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FlightFinder.Controllers
{
    [Route("api/[controller]")]
    public class FlightsController : Controller
    {
        [HttpPost("[action]")]
            public JsonResult GetFlights(string start, string end)
        {
            return Json(new { success = true, message= "Hello, " + start + " to " + end + "!"});
        }
        

        public class FlightRequest
        {
            public string start { get; set; }
            public string end { get; set; }
        }
    }
}
