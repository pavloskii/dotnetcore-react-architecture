﻿using FDS.Domain.Common;
using FDS.Domain.Enums;
using System.Collections.Generic;

namespace FDS.Domain.ValueObjects
{
    public class CountryVo : ValueObject
    {
        public CountryVo() { }

        public CountryVo(Country country)
        {
            Iso = country.ToString();
        }

        public string Iso { get; private set; }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Iso;
        }
    }
}
