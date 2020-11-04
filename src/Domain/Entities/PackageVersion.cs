using FDS.Domain.Common;
using FDS.Domain.ValueObjects;
using System;
using System.Collections.Generic;

namespace FDS.Domain.Entities
{
    public class PackageVersion : AuditableEntity
    {
        public string PackageVersionId { get; set; }

        public string PackageId { get; set; }

        public string PackageUrl { get; set; }

        public string Version { get; set; }

        public string Channel { get; set; }

        public string PreviousPackageVersionId { get; set; }

        public DateTime ReleaseDate { get; set; }

        public ICollection<CountryVo> BannedCountries { get; set; }
    }
}
