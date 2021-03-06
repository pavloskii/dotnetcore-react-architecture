﻿using FDS.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace FDS.Infrastructure.Persistence.Configurations
{
    public class UserOwnedPackageConfiguration : IEntityTypeConfiguration<UserOwnedPackage>
    {
        public void Configure(EntityTypeBuilder<UserOwnedPackage> builder)
        {
            builder.ToContainer("UserOwnedPackages")
                .HasPartitionKey(o => o.UserId)
                .OwnsOne(o => o.Package);
            //.UseETagConcurrency();
        }
    }
}
