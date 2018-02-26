using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Login.Models
{
    public class User
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public List<User> getUsers()
        {
            List<User> lstUsers = new List<User>();
            lstUsers.Add(new User
            {
                Username = "santiago",
                Password = "santiago",
                FirstName = "Santiago",
                LastName = "Gualotuña"
            });
            lstUsers.Add(new User
            {
                Username = "juan",
                Password = "juan",
                FirstName = "Juan",
                LastName = "Perez"
            });
            lstUsers.Add(new User
            {
                Username = "ana",
                Password = "ana",
                FirstName = "Ana",
                LastName = "Campana"
            });

            return lstUsers;
        }
    }
}
