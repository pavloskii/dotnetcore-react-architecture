using FDS.Domain.Entities;
using FDS.Domain.Enums;
using FDS.Domain.ValueObjects;
using FDS.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FDS.Infrastructure.Persistence
{
    public static class ApplicationDbContextSeed
    {
        public static async Task SeedDefaultUsersAsync(UserManager<ApplicationUser> userManager)
        {
            var insiderUser = new ApplicationUser
            {
                UserName = "insider@fds.com",
                Email = "insider@fds.com",
                Country = Country.MK.ToString(),
                Channels = new HashSet<ChannelVo>{
                    new ChannelVo(Channel.Public),
                    new ChannelVo(Channel.Insiders),
                }
            };

            //EF Core 3.1 with CosmosDB does not support Any or AnyAsync
            if (await userManager.Users.FirstOrDefaultAsync(u => u.UserName == insiderUser.UserName) == null)
            {
                var insiderCreatedResult = await userManager.CreateAsync(insiderUser, "Insider!1");
            }

            var publicUser = new ApplicationUser
            {
                UserName = "public@fds.com",
                Email = "public@fds.com",
                Country = Country.DK.ToString(),
                Channels = new HashSet<ChannelVo> { new ChannelVo(Channel.Public) }
            };

            if (await userManager.Users.FirstOrDefaultAsync(u => u.UserName == publicUser.UserName) == null)
            {
                var publicCreatedResult = await userManager.CreateAsync(publicUser, "Public!1");
            }
        }

        public static async Task SeedSampleDataAsync(ApplicationDbContext context)
        {
            if (await context.Packages.FirstOrDefaultAsync() == null)
            {
                var packageId = Guid.NewGuid().ToString();
                context.Packages.Add(new Package
                {
                    PackageId = packageId,
                    LatestVersion = "2.0.1",
                    Description = "Hearing Aids Software",
                    ImageUrl = "hearing-aids-software.svg",
                    Name = "HASoft"
                });

                var packageVersionId1 = Guid.NewGuid().ToString();

                context.PackageVersions.Add(new PackageVersion
                {
                    PackageVersionId = packageVersionId1,
                    BannedCountries = new HashSet<CountryVo>(),
                    PackageId = packageId,
                    PackageUrl = "path/to/cloud/storage",
                    PreviousPackageVersionId = "none",
                    ReleaseDate = new DateTime(2018, 12, 20),
                    Channel = Channel.Public.ToString(),
                    Version = "1.0.0"
                });

                var packageVersionId2 = Guid.NewGuid().ToString();

                context.PackageVersions.Add(new PackageVersion
                {
                    PackageVersionId = packageVersionId2,
                    BannedCountries = new HashSet<CountryVo>(),
                    PackageId = packageId,
                    PackageUrl = "path/to/cloud/storage",
                    PreviousPackageVersionId = packageVersionId1,
                    ReleaseDate = new DateTime(2019, 10, 27),
                    Channel = Channel.Public.ToString(),
                    Version = "2.0.0"
                }); ;

                var packageVersionId3 = Guid.NewGuid().ToString();

                context.PackageVersions.Add(new PackageVersion
                {
                    PackageVersionId = packageVersionId3,
                    BannedCountries = new HashSet<CountryVo>() { new CountryVo(Country.MK) },
                    PackageId = packageId,
                    PackageUrl = "path/to/cloud/storage",
                    PreviousPackageVersionId = packageVersionId2,
                    ReleaseDate = new DateTime(2020, 10, 10),
                    Channel = Channel.Public.ToString(),
                    Version = "2.0.1"
                });

                var packageId2 = Guid.NewGuid().ToString();
                context.Packages.Add(new Package
                {
                    PackageId = packageId2,
                    LatestVersion = "2.0.0",
                    Description = "Anti-virus Software",
                    ImageUrl = "anti-virus.svg",
                    Name = "AntiV"
                });

                var package2VersionId1 = Guid.NewGuid().ToString();

                context.PackageVersions.Add(new PackageVersion
                {
                    PackageVersionId = package2VersionId1,
                    BannedCountries = new HashSet<CountryVo>(),
                    PackageId = packageId2,
                    PackageUrl = "path/to/cloud/storage",
                    PreviousPackageVersionId = "none",
                    ReleaseDate = new DateTime(2018, 12, 20),
                    Channel = Channel.Public.ToString(),
                    Version = "1.0.0"
                });

                var package2VersionId2 = Guid.NewGuid().ToString();

                context.PackageVersions.Add(new PackageVersion
                {
                    PackageVersionId = package2VersionId2,
                    BannedCountries = new HashSet<CountryVo>(),
                    PackageId = packageId2,
                    PackageUrl = "path/to/cloud/storage",
                    PreviousPackageVersionId = package2VersionId1,
                    ReleaseDate = new DateTime(2021, 10, 27),
                    Channel = Channel.Public.ToString(),
                    Version = "2.0.0"
                });


                var packageId3 = Guid.NewGuid().ToString();
                context.Packages.Add(new Package
                {
                    PackageId = packageId3,
                    LatestVersion = "1.0.0",
                    Description = "Printer drivers",
                    ImageUrl = "printer-drivers.svg",
                    Name = "PrintDriver"
                });

                context.PackageVersions.Add(new PackageVersion
                {
                    PackageVersionId = Guid.NewGuid().ToString(),
                    BannedCountries = new HashSet<CountryVo>(),
                    PackageId = packageId3,
                    PackageUrl = "path/to/cloud/storage",
                    PreviousPackageVersionId = "none",
                    ReleaseDate = new DateTime(2015, 12, 20),
                    Channel = Channel.Public.ToString(),
                    Version = "1.0.0"
                });
                await context.SaveChangesAsync();
            }
        }
    }
}
