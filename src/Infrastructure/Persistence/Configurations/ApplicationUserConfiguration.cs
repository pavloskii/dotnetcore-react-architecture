using FDS.Infrastructure.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FDS.Infrastructure.Persistence.Configurations
{
    public class ApplicationUserConfiguration : IEntityTypeConfiguration<ApplicationUser>
    {
        public void Configure(EntityTypeBuilder<ApplicationUser> builder)
        {
            //builder
            //    .ToContainer("Identity")
            //    .Property<string>("_etag")
            //    .IsConcurrencyToken();
            builder.ToContainer("Identity");
            //builder.Property(d => d.).UseETagConcurrency();
            //builder.HasNoDiscriminator();
        }
    }
}
