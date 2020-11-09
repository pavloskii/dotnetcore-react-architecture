using AutoMapper;
using AutoMapper.QueryableExtensions;
using FDS.Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace FDS.Application.Features.Packages.Queries.GetPackages
{
    public class GetPackagesQuery : IRequest<PackagesVm>
    {
    }

    public class GetPackagesQueryHandler : IRequestHandler<GetPackagesQuery, PackagesVm>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetPackagesQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<PackagesVm> Handle(GetPackagesQuery request, CancellationToken cancellationToken)
        {
            return new PackagesVm
            {
                Packages = await _context.Packages.ProjectTo<PackageDto>(_mapper.ConfigurationProvider).ToListAsync(cancellationToken)
            };
        }
    }
}
