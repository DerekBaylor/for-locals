namespace for_locals.Models
{
    public class Review
    {
        public int ReviewId { get; set; }
        public int UserId { get; set; }
        public int BusinessId { get; set; }
        public string ReviewTitle { get; set; }
        public string ReviewText { get; set; }
        public string ImgUrl { get; set; }
        public int Score { get; set; }
    }
}
