using FDS.Application.Features._Packages.Commands;
using FDS.Application.Features.Packages.Queries.GetPackages;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FDS.WebUI.Controllers
{
    [Authorize]
    public class PackagesController : ApiController
    {
        [HttpGet]
        public async Task<ActionResult<PackagesVm>> Get()
        {
            return await Mediator.Send(new GetPackagesQuery());
        }

        [HttpPost("[action]")]
        public async Task<ActionResult<string>> Install(InstallPackageCommand command)
        {
            return await Mediator.Send(command);
        }
    }
}
