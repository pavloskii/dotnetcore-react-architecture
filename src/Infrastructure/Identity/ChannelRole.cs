using Microsoft.AspNetCore.Identity;

namespace FDS.Infrastructure.Identity
{
    public class ChannelRole : IdentityRole
    {
        public ChannelRole():base()
        {
        }

        public ChannelRole(string roleName) : base(roleName)
        {
        }
    }
}
