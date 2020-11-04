using FDS.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FDS.Infrastructure.Persistence.Configurations
{
    public class PackageVersionConfiguration : IEntityTypeConfiguration<PackageVersion>
    {
        public void Configure(EntityTypeBuilder<PackageVersion> builder)
        {
            //builder.HasPartitionKey(o => o.PreviousPackageVersionId);
            builder.OwnsMany(p => p.BannedCountries);
            //builder.OwnsOne(p => p.Package);
            //builder.OwnsOne(p => p.PreviousPackageVersion);
            //builder.UseETagConcurrency();
        }
    }
}
