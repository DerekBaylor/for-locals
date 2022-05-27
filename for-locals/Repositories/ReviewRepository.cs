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

        public List<Review> GetAllReviews(SqlDataReader reader)
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

        public void DeleteReview(int reviewId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        DELETE FROM Review
                        WHERE ReviewId = @reviewId
                    ";
                    cmd.Parameters.AddWithValue("@Id", reviewId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<Review> GetUserReviewsByBusinessId(int businessId)
        {
            using (SqlConnection conn = Connection)
            {
                conn.Open();
                using (SqlCommand cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT * FROM Review
                        LEFT JOIN Business
                        ON Review = BusinessId
                    ";

                    cmd.Parameters.AddWithValue("@BusinessId", businessId);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var scores = GetAllReviews(reader);
                        return scores;
                    }
                }
            }
        }
    }
}
