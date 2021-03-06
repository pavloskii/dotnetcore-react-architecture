﻿using FDS.Application.Interfaces;
using FDS.Domain.Enums;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;

namespace FDS.WebUI.Services
{
    public class CurrentUserService : ICurrentUserService
    {
        public CurrentUserService(IHttpContextAccessor httpContextAccessor)
        {
            UserId = httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier);
            Country = httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.Country);
            User = httpContextAccessor.HttpContext?.User;
        }

        public ClaimsPrincipal User { get; set; }

        public string UserId { get; }

        public string Country { get; }

        public bool IsInRole(string role) => User.IsInRole(role);
    }
}
