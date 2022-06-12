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
                                       SELECT *
                                       FROM Locals";

                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Local> locals = new List<Local>();
                    while (reader.Read())
                    {
                        Local local = new Local
                        {
                            Name = reader.GetString(reader.GetOrdinal("Name")),
                            Email = reader.GetString(reader.GetOrdinal("Email")),
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
                                       SELECT *
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
                                Email = reader.GetString(reader.GetOrdinal("Email")),
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
        public Local GetLocalByFirebaseKey(string firebaseKey)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT *
                                        FROM Locals 
                                        WHERE FirebaseKey = @firebaseKey";

                    cmd.Parameters.AddWithValue("@firebaseKey", firebaseKey);

                    SqlDataReader reader = cmd.ExecuteReader();
                    
                        if (reader.Read())
                        {
                            Local local = new Local
                            {
                                Name = reader.GetString(reader.GetOrdinal("Name")),
                                Email = reader.GetString(reader.GetOrdinal("Email")),
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

        public void AddLocal(Local local)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        INSERT INTO Locals ([Name], Email, UserId, ImgUrl, Bio, isAdmin, FirebaseKey)
                                        OUTPUT INSERTED.ID
                                        VALUES (@name, @email, @imgurl, @bio, @firebasekey)
                                        ";
                    cmd.Parameters.AddWithValue("@name", local.Name);
                    cmd.Parameters.AddWithValue("@email", local.Email);
                    cmd.Parameters.AddWithValue("@userId", local.UserId);
                    cmd.Parameters.AddWithValue("@imgurl", local.ImgUrl);
                    cmd.Parameters.AddWithValue("@bio", local.Bio);
                    cmd.Parameters.AddWithValue("@isAdmin", local.IsAdmin);
                    cmd.Parameters.AddWithValue("@firebasekey", local.FirebaseKey);

                    int UserId = (int)cmd.ExecuteScalar();

                }
            }
        }

        public void UpdateLocal(Local local)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        UPDATE Locals
                                        SET
                                        [Name], Email, ImgUrl, Bio,
                                        Where FirebaseKey = @firebasekey
                                        ";
                    cmd.Parameters.AddWithValue("@name", local.Name);
                    cmd.Parameters.AddWithValue("@email", local.Email);
                    cmd.Parameters.AddWithValue("@imgurl", local.ImgUrl);
                    cmd.Parameters.AddWithValue("@bio", local.Bio);

                    cmd.ExecuteNonQuery();

                }
            }
        }
        public void DeleteLocal(string firebasekey)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        DELETE FROM Locals
                                        WHERE FirebaseKey = @firebasekey
                                        ";
                    cmd.Parameters.AddWithValue(@"firebasekey", firebasekey);
                }
            }
        }

    }
}
