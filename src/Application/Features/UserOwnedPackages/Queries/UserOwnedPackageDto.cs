using AutoMapper;
using FDS.Application.Mappings;
using FDS.Domain.Entities;

namespace FDS.Application.Features.Packages.Queries.GetPackages
{
    public class UserOwnedPackageDto : IMapFrom<UserOwnedPackage>
    {
        public string PackageId { get; private set; }
        public string Name { get; private set; }
        public string Version { get; private set; }

        public void Mapping(Profile profile)
        {
            profile.CreateMap<UserOwnedPackage, UserOwnedPackageDto>()
                .ForMember(d => d.PackageId, opt => opt.MapFrom(s => s.Package.PackageId))
                .ForMember(d => d.Name, opt => opt.MapFrom(s => s.Package.Name))
                .ForMember(d => d.Version, opt => opt.MapFrom(s => s.Package.Version));
        }
    }
}
