using for_locals.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace for_locals.Repositories
{
    public interface IReviewRepository
    {
        void AddReview(Review review);
        void DeleteReview(int reviewId);
        Review GetReviewById(int ReviewId);
        List<Review> GetReviewsByBusinessId(int BusinessId);
        List<Review> GetAllReviews();
    }
}
