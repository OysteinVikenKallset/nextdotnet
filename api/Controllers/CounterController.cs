using Microsoft.AspNetCore.Mvc;

namespace SimpleCounterApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CounterController : ControllerBase
    {
        private static int _count = 0;

        [HttpGet]
        public ActionResult<int> GetCount()
        {
            return _count;
        }

        [HttpPost]
        public ActionResult<int> IncrementCount()
        {
            _count = _count + 2;
            return _count;
        }
    }
}
