﻿using FDS.Domain.Enums;
using FDS.Domain.ValueObjects;
using FluentAssertions;
using NUnit.Framework;

namespace FDS.Domain.UnitTests.ValueObjects
{
    public class CountryVoTests
    {
        [Test]
        public void ShouldBeEqualByValue()
        {
            var countryVo1 = new CountryVo(Country.MK);
            var countryVo2 = new CountryVo(Country.MK);

            countryVo1.Equals(countryVo2).Should().Be(true);
        }
    }
}
