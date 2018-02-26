using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Login.Models;
using Microsoft.AspNetCore.Mvc;

namespace Login.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("Authenticate")]
        public IActionResult Authenticate([FromBody]UserDTO user)
        {
            User newUser = new User();
            List<User> lstUsers = newUser.getUsers();
            string token = "token";
            var localUser = lstUsers.SingleOrDefault(x => x.Username == user.Username);

            if (localUser == null)
                return Ok(new { });


            if (localUser.Password.Equals(user.Password))
                return Ok(new
                {
                    Username = localUser.Username,
                    FirstName = localUser.FirstName,
                    LastName = localUser.LastName,
                    Token = token
                });
            return Ok(new { });
        }
    }
}