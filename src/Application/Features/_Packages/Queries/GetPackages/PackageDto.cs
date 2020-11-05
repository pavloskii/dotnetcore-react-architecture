using FDS.Application.Mappings;
using FDS.Domain.Entities;

namespace FDS.Application.Features.Packages.Queries.GetPackages
{
    public class PackageDto : IMapFrom<Package>
    {
        public string PackageId { get; set; }

        public string LatestVersion { get; set; }

        public string Name { get; set; }

        public string ImageUrl { get; set; }

        public string Description { get; set; }
    }
}
