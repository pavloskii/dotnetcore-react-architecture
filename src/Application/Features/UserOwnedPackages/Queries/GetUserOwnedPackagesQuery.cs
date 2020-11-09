using AutoMapper;
using AutoMapper.QueryableExtensions;
using FDS.Application.Features.Packages.Queries.GetPackages;
using FDS.Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
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

        public GetUserOwnedPackagesQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<UserOwnedPackagesVm> Handle(GetUserOwnedPackagesQuery request, CancellationToken cancellationToken)
        {
            return new UserOwnedPackagesVm
            {
                UserOwnedPackages = await _context.UserOwnedPackages
                    .ProjectTo<UserOwnedPackageDto>(_mapper.ConfigurationProvider).ToListAsync(cancellationToken)
            };
        }
    }
}
