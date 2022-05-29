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

        [HttpGet("review/{BusinessId}")]
        public List<Review> GetReviewsByBusinessId(int BusinessId)
        {
            return _reviewRepository.GetReviewsByBusinessId(BusinessId);
        }

        [HttpGet("{ReviewId}")]
        public IActionResult Get(int ReviewId)
        {
            var review = _reviewRepository.GetReviewById(ReviewId);
            if (review == null) return NotFound();
            return Ok(review);
        
        }

        [HttpPost]
        public IActionResult AddReview(Review review)
        {
            _reviewRepository.AddReview(review);
            return Ok(review);
        }

        [HttpDelete("{ReviewId}")]
        public IActionResult Delete(int ReviewId)
        {
            var currentReview = _reviewRepository.GetReviewById(ReviewId);
            if (currentReview == null)
            {
                return NotFound();
            }
            else
            {
                _reviewRepository.DeleteReview(currentReview.ReviewId);
                return NoContent();
            }
        }
    }
}
