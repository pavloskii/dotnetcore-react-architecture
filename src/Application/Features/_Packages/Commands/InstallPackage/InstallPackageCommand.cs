using FDS.Application.Interfaces;
using FDS.Domain.Entities;
using FDS.Domain.ValueObjects;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace FDS.Application.Features._Packages.Commands
{
    public class InstallPackageCommand : IRequest<string>
    {
        public string PackageId { get; set; }
    }

    public class InstallPackageCommandHandler : IRequestHandler<InstallPackageCommand, string>
    {
        private readonly IApplicationDbContext _context;
        private readonly ICurrentUserService _currentUserService;

        public InstallPackageCommandHandler(IApplicationDbContext context, ICurrentUserService currentUserService)
        {
            _context = context;
            _currentUserService = currentUserService;
        }

        public async Task<string> Handle(InstallPackageCommand request, CancellationToken cancellationToken)
        {
            var package = await _context.Packages.FirstAsync(p => p.PackageId == request.PackageId);

            var entity = new UserOwnedPackage
            {
                Package = new PackageVo(request.PackageId, package.Name, "1.0.0"),
                UserId = _currentUserService.UserId,
                UserOwnedPackageId = Guid.NewGuid().ToString()
            };

            await _context.UserOwnedPackages.AddAsync(entity);

            await _context.SaveChangesAsync(cancellationToken);

            return entity.UserOwnedPackageId;
        }
    }
}
