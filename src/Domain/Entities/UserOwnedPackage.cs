using FDS.Domain.ValueObjects;
using System;

namespace FDS.Domain.Entities
{
    public class UserOwnedPackage
    {
        public string UserOwnedPackageId { get; set; }

        public string UserId { get; set; }

        public PackageVo Package { get; set; }
    }
}
