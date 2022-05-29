using for_locals.Models;
using Microsoft.Data.SqlClient;

namespace for_locals.Repositories
{
    public class ReviewRepository : IReviewRepository
    {
        private readonly IConfiguration _config;
        public ReviewRepository(IConfiguration config)
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

        public List<Review> GetAllReviews()
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT
                                        UserId, 
                                        BusinessId, 
                                        ReviewText, 
                                        ImgUrl, 
                                        Score
                                        FROM Review
                                        ";
                    SqlDataReader reader = cmd.ExecuteReader();

                    List<Review> reviews = new List<Review>();
                    while (reader.Read())
                    {
                        Review review = new Review
                        {
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            BusinessId = reader.GetInt32(reader.GetOrdinal("BusinessId")),
                            ReviewText = reader.GetString(reader.GetOrdinal("ReviewText")),
                            ImgUrl = reader.GetString(reader.GetOrdinal("ImgUrl")),
                            Score = reader.GetInt32(reader.GetOrdinal("Score")),
                        };
                        reviews.Add(review);
                    }
                    reader.Close();
                    return reviews;
                }
            }
        }

        public Review GetReviewById(int ReviewId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        SELECT
                                        UserId, 
                                        BusinessId, 
                                        ReviewText, 
                                        ImgUrl, 
                                        Score
                                        FROM Review
                                        Where ReviewId = @ReviewId
                                        ";

                    cmd.Parameters.AddWithValue("@ReviewId", ReviewId);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        List<Review> reviews = new List<Review>();
                        if (reader.Read())
                        {
                            Review review = new Review
                            {
                                UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                                BusinessId = reader.GetInt32(reader.GetOrdinal("BusinessId")),
                                ReviewText = reader.GetString(reader.GetOrdinal("ReviewText")),
                                ImgUrl = reader.GetString(reader.GetOrdinal("ImgUrl")),
                                Score = reader.GetInt32(reader.GetOrdinal("Score")),
                            };
                            return review;
                        }
                        else
                        {
                            return null;
                        }

                    }
                }
            }
        }

        public void AddReview(Review review)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        INSERT INTO Review 
                                        (UserId, BusinessId, ReviewText, ImgUrl, Score)
                                        OUT INSERTED.ID
                                        VALUES (@UserId, @BusinessId, @ReviewText, @ImgUrl, @Score)
                                        ";
                    cmd.Parameters.AddWithValue("@UserId", review.UserId);
                    cmd.Parameters.AddWithValue("@BusinessId", review.BusinessId);
                    cmd.Parameters.AddWithValue("@ReviewText", review.ReviewText);
                    cmd.Parameters.AddWithValue("@ImgUrl", review.ImgUrl);
                    cmd.Parameters.AddWithValue("@Score", review.Score);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteReview(int ReviewId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE FROM Review
                        WHERE ReviewId = @ReviewId
                    ";
                    cmd.Parameters.AddWithValue("@ReviewId", ReviewId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<Review> GetReviewsByBusinessId(int BusinessId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                    SELECT
                                        UserId, 
                                        BusinessId, 
                                        ReviewText, 
                                        ImgUrl, 
                                        Score
                                        FROM Review
                                        WHERE BusinessId = @BusinessId
                    ";

                    cmd.Parameters.AddWithValue("@BusinessId", BusinessId);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    { 
                        List<Review> reviews = new List<Review>();
                        while (reader.Read())
                        {
                            Review review = new Review
                            {
                                UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                                BusinessId = reader.GetInt32(reader.GetOrdinal("BusinessId")),
                                ReviewText = reader.GetString(reader.GetOrdinal("ReviewText")),
                                ImgUrl = reader.GetString(reader.GetOrdinal("ImgUrl")),
                                Score = reader.GetInt32(reader.GetOrdinal("Score")),
                            };
                            reviews.Add(review);
                        }
                            return reviews;
                    }
                }   
            }
        }
    }
}
