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
                                        SELECT
                                        BusinessId,
                                        OwnerId,
                                        StateControlNum,
                                        BusinessName,
                                        Phone,
                                        Address,
                                        Description,
                                        Keywords,
                                        Industry,
                                        Logo,
                                        ImgUrl,
                                        WebUrl,
                                        ReviewScore,
                                        Verified,
                                        FROM Business
                                        ";

                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Business> businesses = new List<Business>();
                    while (reader.Read())
                    {
                        Business business = new Business
                        {
                            BusinessId = reader.GetInt32(reader.GetOrdinal("BusinessId")),
                            OwnerId = reader.GetString(reader.GetOrdinal("OwnerId")),
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
                                        SELECT
                                        BusinessId,
                                        OwnerId,
                                        StateControlNum,
                                        BusinessName,
                                        Phone,
                                        Address,
                                        Description,
                                        Keywords,
                                        Industry,
                                        Logo,
                                        ImgUrl,
                                        WebUrl,
                                        ReviewScore,
                                        Verified,
                                        FROM Business
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
                                OwnerId = reader.GetString(reader.GetOrdinal("OwnerId")),
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
                                        (OwnerId, StateControlNum, BusinessName, Phone, Address, Description, Keywords,
                                        Industry, ImgUrl, WebUrl, ReviewScore, Verified)
                                        OUTPUT INSERTED.ID
                                        VALUES (@OwnerId, @StateControlNum, @BusinessName, @Phone, @Address, @Description,       @Keywords, @Industry, @ImgUrl, @WebUrl, @ReviewScore, @Verified)
                                        ";
                    cmd.Parameters.AddWithValue("@OwnerId", business.OwnerId);
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

                    int UserId = (int)cmd.ExecuteScalar();
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
                                        OwnerId, StateControlNum, BusinessName, Phone, Address, Description, Keywords,
                                        Industry, ImgUrl, WebUrl, ReviewScore, Verified
                                        Where BusinessId = @BusinessId
                                        ";
                    cmd.Parameters.AddWithValue("@OwnerId", business.OwnerId);
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
                }
            }
        }
    }
}
