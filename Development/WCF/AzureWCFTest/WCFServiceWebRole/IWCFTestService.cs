using System.ServiceModel;
using System.ServiceModel.Web;

namespace WCFServiceWebRole
{
    
    [ServiceContract]
    public interface IWCFTestService
    {

        [WebInvoke(
            Method = "GET", 
            UriTemplate = "Hello")]
        [OperationContract]
        string Hello();

    }

}