using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace brunchapp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Simple Brunch TypeScript Demo";
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
