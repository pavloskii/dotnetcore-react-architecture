using FDS.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace FDS.Application.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Package> Packages { get; set; }

        DbSet<PackageVersion> PackageVersions { get; set; }

        DbSet<UserOwnedPackage> UserOwnedPackages { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}
