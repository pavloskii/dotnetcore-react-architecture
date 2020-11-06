using FDS.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FDS.Infrastructure.Persistence.Configurations
{
    public class PackageVersionConfiguration : IEntityTypeConfiguration<PackageVersion>
    {
        public void Configure(EntityTypeBuilder<PackageVersion> builder)
        {
            builder.ToContainer("PackageVersions")
                .HasPartitionKey(o => o.PreviousPackageVersionId)
                .OwnsMany(p => p.BannedCountries);
            //.OwnsOne(p => p.Package)
            //.OwnsOne(p => p.PreviousPackageVersion)
            //.UseETagConcurrency();
        }
    }
}
