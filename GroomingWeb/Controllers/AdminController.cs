using Microsoft.AspNetCore.Mvc;

namespace GroomingWeb.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Productos() => View();

        public IActionResult Compras() => View();

        public IActionResult CompraDetalle(string id)
        {
            ViewBag.CompraId = id;
            return View();
        }
    }
}