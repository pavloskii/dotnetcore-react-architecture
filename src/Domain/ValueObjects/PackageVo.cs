using FDS.Domain.Common;
using System.Collections.Generic;

namespace FDS.Domain.ValueObjects
{
    public class PackageVo : ValueObject
    {
        public PackageVo() { }

        public PackageVo(string packageId, string name)
        {
            PackageId = packageId;
            Name = name;
        }

        public string PackageId { get; private set; }
        public string Name { get; private set; }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return PackageId;
            yield return Name;
        }
    }
}
