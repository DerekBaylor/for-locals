using for_locals.Models;
using Microsoft.Data.SqlClient;


namespace for_locals.Repositories
{
    public class LocalRepository : ILocalRepository
    {
        private readonly IConfiguration _config;
        public LocalRepository(IConfiguration config)
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

        public List<Local> GetAllLocals()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       SELECT
                                       [Name],
                                       UserId,
                                       ImgUrl,
                                       Bio,
                                       IsAdmin,
                                       FirebaseKey 
                                       FROM Locals";

                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Local> locals = new List<Local>();
                    while (reader.Read())
                    {
                        Local local = new Local
                        {
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            ImgUrl = reader.GetString(reader.GetOrdinal("ImgUrl")),
                            Bio = reader.GetString(reader.GetOrdinal("Bio")),
                            IsAdmin = reader.GetString(reader.GetOrdinal("IsAdmin")),
                            FirebaseKey = reader.GetString(reader.GetOrdinal("FirebaseKey")),
                        };
                        locals.Add(local);
                    }
                    reader.Close();
                    return locals;

                }
            }
        }

        public Local GetLocalById(int UserId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                       SELECT
                                       [Name],
                                       UserId,
                                       ImgUrl,
                                       Bio,
                                       IsAdmin,
                                       FirebaseKey 
                                       FROM Locals
                                       WHERE UserId = @UserId";

                    cmd.Parameters.AddWithValue("@UserId", UserId);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {

                        List<Local> locals = new List<Local>();
                        if (reader.Read())
                        {
                            Local local = new Local
                            {
                                Name = reader.GetString(reader.GetOrdinal("Name")),
                                UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                                ImgUrl = reader.GetString(reader.GetOrdinal("ImgUrl")),
                                Bio = reader.GetString(reader.GetOrdinal("Bio")),
                                IsAdmin = reader.GetString(reader.GetOrdinal("IsAdmin")),
                                FirebaseKey = reader.GetString(reader.GetOrdinal("FirebaseKey")),
                            };
                            return local;
                        }
                        else
                        {
                            return null;
                        }

                    }
                }
            }
        }

        public Local GetUserById(int UserId)
        {
            throw new NotImplementedException();
        }
    }
}
