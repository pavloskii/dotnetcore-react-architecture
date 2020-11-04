using FDS.Domain.Common;
using System;

namespace FDS.Domain.Entities
{
    public class Package : AuditableEntity
    {
        public string PackageId { get; set; }

        public string LatestVersion { get; set; }

        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public string Description { get; set; }
    }
}
