using FDS.Application.Features._Packages.Commands;
using FDS.Application.Interfaces;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace FDS.Application.TodoLists.Commands.CreateTodoList
{
    public class InstallPackageCommandValidator : AbstractValidator<InstallPackageCommand>
    {
        private readonly IApplicationDbContext _context;

        public InstallPackageCommandValidator(IApplicationDbContext context)
        {
            _context = context;

            RuleFor(v => v.PackageId)
                .NotEmpty().WithMessage("PackageId is required.")
                .MustAsync(ExistsPackage).WithMessage("The package is not found.");
        }

        public async Task<bool> ExistsPackage(string packageId, CancellationToken cancellationToken)
        {
            //No anyasync in EF Cosmosdb
            return await _context.Packages.FirstOrDefaultAsync(p => p.PackageId == packageId) != null;
        }
    }
}
