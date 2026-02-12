using Microsoft.AspNetCore.Mvc;

namespace GroomingWeb.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Productos()
        {
            return View();
        }
    }
}
