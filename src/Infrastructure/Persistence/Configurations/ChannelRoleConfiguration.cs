using FDS.Infrastructure.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FDS.Infrastructure.Persistence.Configurations
{
    public class ChannelRoleConfiguration : IEntityTypeConfiguration<ChannelRole>
    {
        public void Configure(EntityTypeBuilder<ChannelRole> builder)
        {
            builder.ToContainer("Identity");
            //builder.UseETagConcurrency();
            //builder.HasNoDiscriminator();
        }
    }
}
