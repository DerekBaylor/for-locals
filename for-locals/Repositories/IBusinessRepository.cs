using for_locals.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace for_locals.Repositories
{
    public interface IBusinessRepository
    {
        List<Business> GetAllBusiness();
        Business GetBusinessById(int id);
        void AddBusiness(Business business);
        void UpdateBusiness(Business business);
        void DeleteBusiness(int businessId);
    }
}
