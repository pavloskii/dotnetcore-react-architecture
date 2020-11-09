namespace FDS.Application.Features.UserOwnedPackages.Queries.CheckForUpdate
{
    public class CheckForUpdateVm 
    {
        public bool HasAvailable { get; set; } = false;
        public string Version { get; set; } = null;
    }
}
