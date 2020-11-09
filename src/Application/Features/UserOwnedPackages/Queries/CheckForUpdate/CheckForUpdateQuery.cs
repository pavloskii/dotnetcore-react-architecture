using FDS.Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace FDS.Application.Features.UserOwnedPackages.Queries.CheckForUpdate
{
    public class CheckForUpdateQuery : IRequest<CheckForUpdateVm>
    {
        public string PackageId { get; set; }
        public string FromVersion { get; set; }
    }

    public class CheckForUpdateQueryHandler : IRequestHandler<CheckForUpdateQuery, CheckForUpdateVm>
    {
        private readonly IApplicationDbContext _context;
        private readonly ICurrentUserService _currentUserService;

        public CheckForUpdateQueryHandler(IApplicationDbContext context, ICurrentUserService currentUserService)
        {
            _context = context;
            _currentUserService = currentUserService;
        }

        public async Task<CheckForUpdateVm> Handle(CheckForUpdateQuery request, CancellationToken cancellationToken)
        {
            var vm = new CheckForUpdateVm();

            //Ensures updating in stages
            var packageVersion = await _context.PackageVersions
                .FirstOrDefaultAsync(pv => pv.PreviousPackageVersionId == request.FromVersion);

            //If the version is the newest
            if (packageVersion == null) return vm;

            //If it is not released yet
            if (packageVersion.ReleaseDate > DateTime.Now) return vm;

            //If user has no access to it
            if (!_currentUserService.IsInRole(packageVersion.Channel)) return vm;

            //If the user is from a banned country
            if (packageVersion.BannedCountries.FirstOrDefault(bc => bc.Iso == _currentUserService.Country) != null)
                return vm;

            vm.HasAvailable = true;
            vm.Version = packageVersion.Version;
            return vm;
        }
    }
}
