﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace WCFServiceWebRole
{
    
    public class WCFTestService : IWCFTestService
    {

        public string Hello()
        {
            return "Hello!";
        }

    }

}