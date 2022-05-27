using for_locals.Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace for_locals.Repositories
{
    public interface IReviewRepository
    {
        void AddReview(Review review);
        void DeleteReview(int reviewId);
        List<Review> GetUserReviewsByBusinessId(string businessId);
    }
}
