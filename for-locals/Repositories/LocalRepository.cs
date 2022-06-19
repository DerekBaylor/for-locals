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
                                        INSERT INTO Locals 
                                        ([Name], Email, ImgUrl, Bio, IsAdmin, FirebaseKey)
                                        OUTPUT INSERTED.UserId
                                        VALUES (@name, @email, @imgUrl, @bio, @isAdmin, @firebaseKey)
                                        ";

                    if (local.Name == null)
                    {
                        cmd.Parameters.AddWithValue("@Name", DBNull.Value);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@Name", local.Name);
                    }
                    if (local.Email == null)
                    {
                        cmd.Parameters.AddWithValue("@Email", "null");
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@Email", local.Email);
                    }
                    if (local.ImgUrl == null)
                    {
                        cmd.Parameters.AddWithValue("@Imgurl", "https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/BlankProfileImg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9CbGFua1Byb2ZpbGVJbWcucG5nIiwiaWF0IjoxNjU1NDE0NjIyLCJleHAiOjE5NzA3NzQ2MjJ9.HiyaZQqeWZg3qtTB8T5tZki0pV4YRNhwsRU2eBI-wdY");
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@ImgUrl", local.ImgUrl);
                    }
                    if (local.Bio == null)
                    {
                        cmd.Parameters.AddWithValue("@Bio", "Hi, I'm new here.");
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@Bio", local.Bio);
                    }
                    if (local.IsAdmin == null)
                    {
                        cmd.Parameters.AddWithValue("@IsAdmin", "N");
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@IsAdmin", local.IsAdmin);
                    }
                    if (local.FirebaseKey == null)
                    {
                        cmd.Parameters.AddWithValue("@FirebaseKey", DBNull.Value);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@FirebaseKey", local.FirebaseKey);
                    }

                    int uid = (int)cmd.ExecuteScalar();

                    local.UserId = uid;
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
                                        Name = @Name, 
                                        Email = @Email, 
                                        ImgUrl = @ImgUrl, 
                                        Bio = @Bio,
                                        IsAdmin = @IsAdmin
                                        WHERE FirebaseKey = @Firebasekey
                                        ";
                    if (local.ImgUrl == "")
                    {
                        cmd.Parameters.AddWithValue("@Imgurl", "https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/BlankProfileImg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9CbGFua1Byb2ZpbGVJbWcucG5nIiwiaWF0IjoxNjU1NDE0NjIyLCJleHAiOjE5NzA3NzQ2MjJ9.HiyaZQqeWZg3qtTB8T5tZki0pV4YRNhwsRU2eBI-wdY");
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@ImgUrl", local.ImgUrl);
                    }
                    cmd.Parameters.AddWithValue("@Name", local.Name);
                    cmd.Parameters.AddWithValue("@Email", local.Email);
                    cmd.Parameters.AddWithValue("@Bio", local.Bio);
                    cmd.Parameters.AddWithValue("@UserId", local.UserId);
                    cmd.Parameters.AddWithValue("@IsAdmin", local.IsAdmin);
                    cmd.Parameters.AddWithValue("@FirebaseKey", local.FirebaseKey);

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

        public bool LocalExists(string firebaseKey)
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
                        return true;
                    }
                    else
                    {
                        reader.Close();
                        return false;
                    }

                }
            }
        }

    }
}
