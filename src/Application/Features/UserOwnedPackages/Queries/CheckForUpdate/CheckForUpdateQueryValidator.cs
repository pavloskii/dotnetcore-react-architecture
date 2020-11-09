using FDS.Application.Features.UserOwnedPackages.Queries.CheckForUpdate;
using FDS.Application.Interfaces;
using FluentValidation;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace FDS.Application.TodoLists.Commands.CreateTodoList
{
    public class CheckForUpdateQueryValidator : AbstractValidator<CheckForUpdateQuery>
    {
        public CheckForUpdateQueryValidator()
        {
            RuleFor(v => v.PackageId)
                .NotEmpty().WithMessage("PackageId is required.");

            RuleFor(v => v.FromPackageVersionId)
                .NotEmpty().WithMessage("FromPackageVersionId is required");
        }
    }
}
