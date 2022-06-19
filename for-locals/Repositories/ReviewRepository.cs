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
                                        ReviewId,
                                        UserId, 
                                        BusinessId, 
                                        ReviewTitle,
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
                            ReviewId = reader.GetInt32(reader.GetOrdinal("ReviewId")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            BusinessId = reader.GetInt32(reader.GetOrdinal("BusinessId")),
                            ReviewTitle = reader.GetString(reader.GetOrdinal("ReviewTitle")),
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
                                        ReviewId,
                                        UserId, 
                                        BusinessId, 
                                        ReviewTitle,
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
                                ReviewId = reader.GetInt32(reader.GetOrdinal("ReviewId")),
                                UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                                BusinessId = reader.GetInt32(reader.GetOrdinal("BusinessId")),
                                ReviewTitle = reader.GetString(reader.GetOrdinal("ReviewTitle")),
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
                                        (UserId, BusinessId, ReviewTitle, ReviewText, ImgUrl, Score)
                                        OUTPUT INSERTED.BusinessId
                                        VALUES (@UserId, @BusinessId, @ReviewTitle, @ReviewText, @ImgUrl, @Score)
                                        ";

                    if (review.ImgUrl == "")
                    {
                        cmd.Parameters.AddWithValue("@Imgurl", "https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/ReviewIcon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9SZXZpZXdJY29uLnBuZyIsImlhdCI6MTY1NTU1ODA5NCwiZXhwIjoxOTcwOTE4MDk0fQ.phspICuNYjbQisR_WkhL9PfFikqgDCBhMmXlAt4_HQc");
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@ImgUrl", review.ImgUrl);
                    }
                    cmd.Parameters.AddWithValue("@ReviewId", review.ReviewId);
                    cmd.Parameters.AddWithValue("@UserId", review.UserId);
                    cmd.Parameters.AddWithValue("@BusinessId", review.BusinessId);
                    cmd.Parameters.AddWithValue("@ReviewTitle", review.ReviewTitle);
                    cmd.Parameters.AddWithValue("@ReviewText", review.ReviewText);
                    cmd.Parameters.AddWithValue("@Score", review.Score);

                    int newlyCreatedId = (int)cmd.ExecuteScalar();

                    review.ReviewId = newlyCreatedId;
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
                                        ReviewId,
                                        UserId, 
                                        BusinessId,
                                        ReviewTitle,
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
                                ReviewId = reader.GetInt32(reader.GetOrdinal("ReviewId")),
                                UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                                BusinessId = reader.GetInt32(reader.GetOrdinal("BusinessId")),
                                ReviewTitle = reader.GetString(reader.GetOrdinal("ReviewTitle")),
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

        public void UpdateReview(Review review)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                                        UPDATE Review
                                        SET
                                        UserId = @UserId,
                                        BusinessId = @BusinessId,
                                        ReviewTitle = @ReviewTitle,
                                        ReviewText = @ReviewText,
                                        ImgUrl = @ImgUrl,
                                        Score = @Score
                                        WHERE ReviewId = @ReviewId
                                        ";
                    if (review.ImgUrl == "")
                    {
                        cmd.Parameters.AddWithValue("@Imgurl", "https://zfjepfckphrvbatmvyud.supabase.co/storage/v1/object/sign/for-locals-img/ReviewIcon.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmb3ItbG9jYWxzLWltZy9SZXZpZXdJY29uLnBuZyIsImlhdCI6MTY1NTU1ODA5NCwiZXhwIjoxOTcwOTE4MDk0fQ.phspICuNYjbQisR_WkhL9PfFikqgDCBhMmXlAt4_HQc");
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@ImgUrl", review.ImgUrl);
                    }
                    cmd.Parameters.AddWithValue("@UserId", review.UserId);
                    cmd.Parameters.AddWithValue("@BusinessId", review.BusinessId);
                    cmd.Parameters.AddWithValue("@ReviewTitle", review.ReviewTitle);
                    cmd.Parameters.AddWithValue("@ReviewText", review.ReviewText);
                    cmd.Parameters.AddWithValue("@Score", review.Score);
                    cmd.Parameters.AddWithValue("@ReviewId", review.ReviewId);

                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
