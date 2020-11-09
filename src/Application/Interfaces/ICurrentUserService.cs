using FDS.Domain.Enums;
using System.Security.Claims;

namespace FDS.Application.Interfaces
{
    public interface ICurrentUserService
    {
        ClaimsPrincipal User { get; set; }
        string UserId { get; }
        string Country { get; }
        bool IsInRole(string role);
    }
}
