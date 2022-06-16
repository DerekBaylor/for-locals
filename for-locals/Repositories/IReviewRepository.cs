using for_locals.Models;

namespace for_locals.Repositories
{
    public interface IReviewRepository
    {
        void AddReview(Review review);
        void UpdateReview(Review review); 
        void DeleteReview(int reviewId);
        Review GetReviewById(int ReviewId);
        List<Review> GetReviewsByBusinessId(int BusinessId);
        List<Review> GetAllReviews();
    }
}
