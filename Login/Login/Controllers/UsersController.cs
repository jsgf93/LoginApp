using Login.Models;
using Login.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Login.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]UserDTO userDTO)
        {

            var localUser = _userService.Authenticate(userDTO.Username, userDTO.Password);

            if (localUser == null)
                return Ok(new { });

            string tokenString = _userService.GenerateToken(localUser);

            return Ok(new
            {
                Username = localUser.Username,
                FirstName = localUser.FirstName,
                LastName = localUser.LastName,
                Token = tokenString
            });
        }
    }
}