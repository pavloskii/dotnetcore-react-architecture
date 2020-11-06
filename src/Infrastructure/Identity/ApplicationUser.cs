using FDS.Domain.ValueObjects;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace FDS.Infrastructure.Identity
{
    public class ApplicationUser : IdentityUser
    {
        public string Country { get; set; }
        public ICollection<ChannelVo> Channels { get; set; }
    }
}
