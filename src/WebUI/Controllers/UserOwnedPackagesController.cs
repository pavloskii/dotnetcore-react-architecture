using FDS.Application.Features.Packages.Queries.GetPackages;
using FDS.Application.Features.UserOwnedPackages.Queries;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
    }
}
