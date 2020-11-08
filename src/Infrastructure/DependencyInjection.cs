using FDS.Application.Interfaces;
using FDS.Infrastructure.Identity;
using FDS.Infrastructure.Persistence;
using IdentityServer4.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace FDS.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseCosmos(configuration["CosmosDB:Uri"], configuration["CosmosDB:PrimaryKey"], configuration["CosmosDB:Name"]));

            services.AddScoped<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext>());

            services.AddDefaultIdentity<ApplicationUser>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

            services.AddIdentityServer()
                .AddApiAuthorization<ApplicationUser, ApplicationDbContext>()
                .AddProfileService<ProfileService>();

            services.AddTransient<IIdentityService, IdentityService>();
            services.AddTransient<IProfileService, ProfileService>();

            services.AddAuthentication()
                .AddIdentityServerJwt();

            return services;
        }
    }
}
