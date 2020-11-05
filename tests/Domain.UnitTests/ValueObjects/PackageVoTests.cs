using FDS.Domain.ValueObjects;
using FluentAssertions;
using NUnit.Framework;
using System;

namespace FDS.Domain.UnitTests.ValueObjects
{
    public class PackageVoTests
    {
        [Test]
        public void ShouldBeEqualByValue()
        {
            var packageId = Guid.NewGuid().ToString();
            var packageVo1 = new PackageVo(packageId, "Test");
            var packageVo2 = new PackageVo(packageId, "Test");

            packageVo1.Equals(packageVo2).Should().Be(true);
        }
    }
}
