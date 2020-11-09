using AutoMapper;
using AutoMapper.QueryableExtensions;
using FDS.Application.Features.Packages.Queries.GetPackages;
using FDS.Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace FDS.Application.Features.UserOwnedPackages.Queries
{
    public class GetUserOwnedPackagesQuery : IRequest<UserOwnedPackagesVm>
    {
    }

    public class GetUserOwnedPackagesQueryHandler : IRequestHandler<GetUserOwnedPackagesQuery, UserOwnedPackagesVm>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;
        private readonly ICurrentUserService _currentUserService;

        public GetUserOwnedPackagesQueryHandler(IApplicationDbContext context, IMapper mapper, ICurrentUserService currentUserService)
        {
            _context = context;
            _mapper = mapper;
            _currentUserService = currentUserService;
        }

        public async Task<UserOwnedPackagesVm> Handle(GetUserOwnedPackagesQuery request, CancellationToken cancellationToken)
        {
            return new UserOwnedPackagesVm
            {
                UserOwnedPackages = await _context.UserOwnedPackages
                    .Where(u => u.UserId == _currentUserService.UserId)
                    .ProjectTo<UserOwnedPackageDto>(_mapper.ConfigurationProvider)
                    .ToListAsync(cancellationToken)
            };
        }
    }
}
