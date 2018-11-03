using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace FlightFinder.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        [HttpGet("[action]")]
        public JsonResult GetFlights(String start, String end)
        {
            return Json();
        }
    }
}
