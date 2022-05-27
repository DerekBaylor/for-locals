using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using for_locals.Models;
using for_locals.Repositories;

namespace for_locals.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewRepository _reviewRepository;

        public ReviewController(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }

        [HttpGet]
        public List<Review> GetAllReviews()
        {
            return _reviewRepository.GetAllReviews();
        }

        [HttpGet("business/businessId")]
        public List<Review> GetUserReviewsByBusinessId(int businessId)
        {
            return _reviewRepository.GetUserReviewsByBusinessId(businessId);
        }

        [HttpGet("review/reviewId")]
        public IActionResult Get(int ReviewId)
        {
            Review reivew = _reviewRepository.GetReviewById(ReviewId);
            if (local == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(review);
            }
        }

        [HttpPost]
        public IActionResult AddReview(Review review)
        {
            _reviewRepository.AddReview(review);
            return Ok(review);
        }

        [HttpDelete("{reviewId}")]
        public IActionResult Delete(int reviewId)
        {
            var currentReview = _reviewRepository.GetReviewById(reviewId);
            if (currentReview == null)
            {
                return NotFound();
            }
            else
            {
                _localRepository.DeleteReview(currentReview.reviewId);
                return NoContent();
            }
        }
    }
}
