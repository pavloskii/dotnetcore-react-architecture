using FDS.Domain.Enums;

namespace FDS.Application.Interfaces
{
    public interface ICurrentUserService
    {
        string UserId { get; }
        string Country { get; }
    }
}
