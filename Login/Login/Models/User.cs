using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Login.Models
{
    public class User
    {
        public string Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        static IEnumerable<User> _getUsers;

        public static IEnumerable<User> GetUsers
        {
            get
            {
                Random rand = new Random();
                List<User> lstUsers = new List<User>();
                using (var hmac = new System.Security.Cryptography.HMACSHA512())
                {
                    lstUsers.Add(new User
                    {
                        Id = rand.Next(100).ToString(),
                        Username = "santiago",
                        Password = "santiago",
                        FirstName = "Santiago",
                        LastName = "Gualotuña",
                        PasswordSalt = hmac.Key,
                        PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes("santiago"))
                    });
                    lstUsers.Add(new User
                    {
                        Id = rand.Next(100).ToString(),
                        Username = "juan",
                        Password = "juan",
                        FirstName = "Juan",
                        LastName = "Perez",
                        PasswordSalt = hmac.Key,
                        PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes("juan"))
                    });
                    lstUsers.Add(new User
                    {
                        Id = rand.Next(100).ToString(),
                        Username = "ana",
                        Password = "ana",
                        FirstName = "Ana",
                        LastName = "Campana",
                        PasswordSalt = hmac.Key,
                        PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes("ana"))
                    });
                }
                return lstUsers;
            }
        }
    }
}
