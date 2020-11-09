using FDS.Application.Features.Packages.Queries.GetPackages;
using FDS.Application.Features.UserOwnedPackages.Queries;
using FDS.Application.Features.UserOwnedPackages.Queries.CheckForUpdate;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace FDS.WebUI.Controllers
{
    [Authorize]
    public class UserOwnedPackagesController : ApiController
    {
        [HttpGet]
        public async Task<ActionResult<UserOwnedPackagesVm>> Get()
        {
            return await Mediator.Send(new GetUserOwnedPackagesQuery());
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<CheckForUpdateVm>> CheckForUpdate([FromQuery] string version, [FromQuery] string packageId)
        {
            return await Mediator.Send(new CheckForUpdateQuery() { FromPackageVersionId = version, PackageId = packageId});
        }
    }
}
