using IdentityServer4.EntityFramework.Entities;

namespace FDS.Infrastructure.Identity
{
    public class PersistedGrantItem : PersistedGrant
    {
        public string Id { get; set; }
    }
}
