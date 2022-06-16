using for_locals.Models;
using Microsoft.Data.SqlClient;

namespace for_locals.Repositories
{
    public class BusinessRepository : IBusinessRepository
    {
        private readonly IConfiguration _config;

        public BusinessRepository(IConfiguration config)
        {
            _config = config;
        }

        public SqlConnection Connection
        {
            get
            {
                return new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            }
        }

        public List<Business> GetAllBusiness()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT *
                                        FROM Business
                                        ";

                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Business> businesses = new List<Business>();
                    while (reader.Read())
                    {
                        Business business = new Business
                        {
                            BusinessId = reader.GetInt32(reader.GetOrdinal("BusinessId")),
                            OwnerKey = reader.GetString(reader.GetOrdinal("OwnerKey")),
                            StateControlNum = reader.GetString(reader.GetOrdinal("StateControlNum")),
                            BusinessName = reader.GetString(reader.GetOrdinal("BusinessName")),
                            Phone = reader.GetString(reader.GetOrdinal("Phone")),
                            Address = reader.GetString(reader.GetOrdinal("Address")),
                            Description = reader.GetString(reader.GetOrdinal("Description")),
                            Keywords = reader.GetString(reader.GetOrdinal("Keywords")),
                            Industry = reader.GetString(reader.GetOrdinal("Industry")),
                            Logo = reader.GetString(reader.GetOrdinal("Logo")),
                            ImgUrl = reader.GetString(reader.GetOrdinal("ImgUrl")),
                            WebUrl = reader.GetString(reader.GetOrdinal("WebUrl")),
                            ReviewScore = reader.GetInt32(reader.GetOrdinal("ReviewScore")),
                            Verified = reader.GetString(reader.GetOrdinal("Verified")),
                        };
                        businesses.Add(business);
                    }
                    reader.Close();
                    return businesses;
                }
            }
        }

        public Business GetBusinessById(int BusinessId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT *
                                        FROM Business
                                        WHERE BusinessId = @BusinessId
                                        ";

                    cmd.Parameters.AddWithValue("@BusinessId", BusinessId);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        List<Business> businesses = new List<Business>();
                        if (reader.Read())
                        {
                            Business business = new Business
                            {
                                BusinessId = reader.GetInt32(reader.GetOrdinal("BusinessId")),
                                OwnerKey = reader.GetString(reader.GetOrdinal("OwnerKey")),
                                StateControlNum = reader.GetString(reader.GetOrdinal("StateControlNum")),
                                BusinessName = reader.GetString(reader.GetOrdinal("BusinessName")),
                                Phone = reader.GetString(reader.GetOrdinal("Phone")),
                                Address = reader.GetString(reader.GetOrdinal("Address")),
                                Description = reader.GetString(reader.GetOrdinal("Description")),
                                Keywords = reader.GetString(reader.GetOrdinal("Keywords")),
                                Industry = reader.GetString(reader.GetOrdinal("Industry")),
                                Logo = reader.GetString(reader.GetOrdinal("Logo")),
                                ImgUrl = reader.GetString(reader.GetOrdinal("ImgUrl")),
                                WebUrl = reader.GetString(reader.GetOrdinal("WebUrl")),
                                ReviewScore = reader.GetInt32(reader.GetOrdinal("ReviewScore")),
                                Verified = reader.GetString(reader.GetOrdinal("Verified")),
                            };
                            return business;
                        }
                        else
                        {
                            return null;
                        }

                    }
                }
            }
        }

        public void AddBusiness(Business business)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        INSERT INTO Business
                                        (OwnerKey, StateControlNum, BusinessName, Phone, Address, Description, Keywords,
                                        Industry, ImgUrl, WebUrl, ReviewScore, Verified)
                                        OUTPUT INSERTED.BusinessId
                                        VALUES (@OwnerKey, @StateControlNum, @BusinessName, @Phone, @Address, @Description, @Keywords, @Industry, @ImgUrl, @WebUrl, @ReviewScore, @Verified)
                                        ";
                    cmd.Parameters.AddWithValue("@OwnerKey", business.OwnerKey);
                    cmd.Parameters.AddWithValue("@StateControlNum", business.StateControlNum);
                    cmd.Parameters.AddWithValue("@BusinessName", business.BusinessName);
                    cmd.Parameters.AddWithValue("@Phone", business.Phone);
                    cmd.Parameters.AddWithValue("@Address", business.Address);
                    cmd.Parameters.AddWithValue("@Description", business.Description);
                    cmd.Parameters.AddWithValue("@Keywords", business.Keywords);
                    cmd.Parameters.AddWithValue("@Industry", business.Industry);
                    cmd.Parameters.AddWithValue("@ImgUrl", business.ImgUrl);
                    cmd.Parameters.AddWithValue("@WebUrl", business.WebUrl);
                    cmd.Parameters.AddWithValue("@ReviewScore", business.ReviewScore);
                    cmd.Parameters.AddWithValue("@Verified", business.Verified);

                    int newlyCreatedId = (int)cmd.ExecuteScalar();

                    business.BusinessId = newlyCreatedId;
                }
            }
        }

        public void UpdateBusiness(Business business)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        UPDATE Business
                                        SET
                                        OwnerKey = @OwnerKey,
                                        StateControlNum = @StatecontrolNum, 
                                        BusinessName = @BusinessName, 
                                        Phone = @Phone, 
                                        Address = @Address, 
                                        Description = @Description, 
                                        Keywords = @Keywords,
                                        Industry = @Industry, 
                                        ImgUrl = @ImgUrl, 
                                        WebUrl = @WebUrl, 
                                        ReviewScore = @ReviewScore, 
                                        Verified = @Verified
                                        WHERE BusinessId = @BusinessId
                                        ";
                    cmd.Parameters.AddWithValue("@OwnerKey", business.OwnerKey);
                    cmd.Parameters.AddWithValue("@StateControlNum", business.StateControlNum);
                    cmd.Parameters.AddWithValue("@BusinessName", business.BusinessName);
                    cmd.Parameters.AddWithValue("@Phone", business.Phone);
                    cmd.Parameters.AddWithValue("@Address", business.Address);
                    cmd.Parameters.AddWithValue("@Description", business.Description);
                    cmd.Parameters.AddWithValue("@Keywords", business.Keywords);
                    cmd.Parameters.AddWithValue("@Industry", business.Industry);
                    cmd.Parameters.AddWithValue("@ImgUrl", business.ImgUrl);
                    cmd.Parameters.AddWithValue("@WebUrl", business.WebUrl);
                    cmd.Parameters.AddWithValue("@ReviewScore", business.ReviewScore);
                    cmd.Parameters.AddWithValue("@Verified", business.Verified);
                    cmd.Parameters.AddWithValue("@BusinessId", business.BusinessId);

                    cmd.ExecuteNonQuery();

                }
            }
        }

        public void DeleteBusiness(int businessId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        DELETE FROM Business
                                        WHERE BusinessId = @businessId
                                        ";
                    cmd.Parameters.AddWithValue(@"BusinessId", businessId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public Business GetBusinessByOwnerKey(string OwnerKey)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT *
                                        FROM Business
                                        WHERE OwnerKey = @OwnerKey
                                        ";

                    cmd.Parameters.AddWithValue("@OwnerKey", OwnerKey);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        List<Business> businesses = new List<Business>();
                        if (reader.Read())
                        {
                            Business business = new Business
                            {
                                BusinessId = reader.GetInt32(reader.GetOrdinal("BusinessId")),
                                OwnerKey = reader.GetString(reader.GetOrdinal("OwnerKey")),
                                StateControlNum = reader.GetString(reader.GetOrdinal("StateControlNum")),
                                BusinessName = reader.GetString(reader.GetOrdinal("BusinessName")),
                                Phone = reader.GetString(reader.GetOrdinal("Phone")),
                                Address = reader.GetString(reader.GetOrdinal("Address")),
                                Description = reader.GetString(reader.GetOrdinal("Description")),
                                Keywords = reader.GetString(reader.GetOrdinal("Keywords")),
                                Industry = reader.GetString(reader.GetOrdinal("Industry")),
                                Logo = reader.GetString(reader.GetOrdinal("Logo")),
                                ImgUrl = reader.GetString(reader.GetOrdinal("ImgUrl")),
                                WebUrl = reader.GetString(reader.GetOrdinal("WebUrl")),
                                ReviewScore = reader.GetInt32(reader.GetOrdinal("ReviewScore")),
                                Verified = reader.GetString(reader.GetOrdinal("Verified")),
                            };
                            return business;
                        }
                        else
                        {
                            return null;
                        }

                    }
                }
            }
        }

    }
}
