using System.Diagnostics;
using GroomingWeb.Models;
using Microsoft.AspNetCore.Mvc;

namespace GroomingWeb.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Catalogo()
        {
            return View();
        }

        public IActionResult Citas()
        {
            return View();
        }

        public IActionResult Conocenos()
        {
            return View();
        }

        public IActionResult Contacto()
        {
            return View();
        }

        public IActionResult Carrito()
        {
            return View();
        }

        public IActionResult Factura()
        {
            return View();
        }

        public IActionResult Detalle(int id)
        {
            ViewBag.ProductoId = id;
            return View();
        }
    }
}
