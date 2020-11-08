using IdentityServer4.Models;
using IdentityServer4.Stores;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FDS.Infrastructure.Identity
{
    //This could easily be changed with distributed cache as Redis or NCache 
    public class InMemoryPersistedGrantStore : IPersistedGrantStore
    {
        private readonly IMemoryCache _cache;

        public InMemoryPersistedGrantStore(IMemoryCache cache)
        {
            _cache = cache;
        }

        public Task<IEnumerable<PersistedGrant>> GetAllAsync(string subjectId)
        {
            throw new NotImplementedException();
        }

        public Task<PersistedGrant> GetAsync(string key)
        {
            var encodedKey = Base64UrlEncoder.Encode(key);
            var result = _cache.Get<PersistedGrant>(encodedKey);

            return Task.FromResult(result);
        }

        public Task RemoveAllAsync(string subjectId, string clientId)
        {
            throw new NotImplementedException();
        }

        public Task RemoveAllAsync(string subjectId, string clientId, string type)
        {
            throw new NotImplementedException();
        }

        public Task RemoveAsync(string key)
        {
            var encodedKey = Base64UrlEncoder.Encode(key);
            _cache.Remove(encodedKey);

            return Task.FromResult(0);
        }

        public Task StoreAsync(PersistedGrant grant)
        {
            var encodedKey = Base64UrlEncoder.Encode(grant.Key);

            _cache.Set(encodedKey, grant, new MemoryCacheEntryOptions { 
                SlidingExpiration = TimeSpan.FromMinutes(60)
            });

            return Task.FromResult(0);
        }
    }
}
