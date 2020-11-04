using Microsoft.AspNetCore.Identity;

namespace FDS.Infrastructure.Identity
{
    public class ApplicationUser : IdentityUser
    {
        public string Country { get; set; }
    }
}
