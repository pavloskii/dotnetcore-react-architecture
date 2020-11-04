using FDS.Domain.Common;
using System.Collections.Generic;

namespace FDS.Domain.ValueObjects
{
    public class CountryVo : ValueObject
    {
        public CountryVo() { }

        public CountryVo(string iso)
        {
            Iso = iso;
        }

        public string Iso { get; private set; }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Iso;
        }
    }
}
