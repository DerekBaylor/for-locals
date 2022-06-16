using for_locals.Models;

namespace for_locals.Repositories
{
    public interface IBusinessRepository
    {
        List<Business> GetAllBusiness();
        Business GetBusinessById(int BusinessId);
        void AddBusiness(Business business);
        void UpdateBusiness(Business business);
        void DeleteBusiness(int businessId);
        Business GetBusinessByOwnerKey(string OwnerKey);
    }
}
