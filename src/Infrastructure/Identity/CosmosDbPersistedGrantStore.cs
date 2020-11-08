using FDS.Application.Interfaces;
using IdentityServer4.Models;
using IdentityServer4.Stores;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FDS.Infrastructure.Identity
{
    public class CosmosDbPersistedGrantStore : IPersistedGrantStore
    {
        private readonly IApplicationDbContext _context;

        public CosmosDbPersistedGrantStore(IApplicationDbContext context)
        {
            _context = context;
        }

        public Task<PersistedGrant> GetAsync(string key)
        {
            throw new NotImplementedException();
            //key = EncodePersistedGrantKey(key);

            //var result = await _context.per
            //    _container.ReadItemAsync<PersistedGrantItem>(key, new PartitionKey(key));
            //if (result.StatusCode == HttpStatusCode.NotFound)
            //{
            //    return null;
            //}

            //var persistedGrantItem = (PersistedGrantItem)result;
            //var persistedGrant = persistedGrantItem.ToModel();
            //return persistedGrant;
        }

        public Task StoreAsync(PersistedGrant grant)
        {
            throw new NotImplementedException();
            //    grant.Key = EncodePersistedGrantKey(grant.Key);
            //    var persistedGrantItem = grant.ToItem();
            //    return _container.CreateItemAsync(persistedGrantItem);
        }

        public Task RemoveAsync(string key)
        {
            throw new NotImplementedException();
            //    key = EncodePersistedGrantKey(key);
            //    return _container.DeleteItemAsync<PersistedGrantItem>(key, new PartitionKey(key));
        }

        public Task RemoveAllAsync(string subjectId, string clientId)
        {
            throw new NotImplementedException();
        }

        public Task RemoveAllAsync(string subjectId, string clientId, string type)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<PersistedGrant>> GetAllAsync(string subjectId)
        {
            throw new NotImplementedException();
        }

        private static string EncodePersistedGrantKey(string key)
        {
            key = Base64UrlEncoder.Encode(key);
            return key;
        }
    }
}
