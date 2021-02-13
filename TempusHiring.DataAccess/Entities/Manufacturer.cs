﻿using TempusHiring.DataAccess.EntityEnums;

namespace TempusHiring.DataAccess.Entities
{
    public class Manufacturer
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public Country Country { get; set; }
    }
}
