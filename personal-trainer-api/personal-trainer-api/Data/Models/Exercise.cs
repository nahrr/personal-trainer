namespace personal_trainer_api.Data.Models
{
    public class Exercise
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Sets { get; set; }
        public int Reps { get; set; }
        public string? VideoUrl { get; set; }
        public string? Comments { get; set; }
    }
}
