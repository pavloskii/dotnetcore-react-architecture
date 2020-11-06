using FDS.Domain.Common;
using FDS.Domain.Enums;
using System.Collections.Generic;

namespace FDS.Domain.ValueObjects
{
    public class ChannelVo : ValueObject
    {
        public ChannelVo() { }

        public ChannelVo(Channel channel)
        {
            Name = channel.ToString();
        }

        public string Name { get; private set; }

        protected override IEnumerable<object> GetEqualityComponents()
        {
            yield return Name;
        }
    }
}
