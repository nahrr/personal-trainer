

namespace personal_trainer_api.Dtos
{
    public record ExerciseDto(string? Id,string Name,  int Sets, int Reps, string? VideoUrl);
}

//public string? Id { get; set; }
//public string Name { get; set; } = string.Empty;
//public int Sets { get; set; }
//public int Reps { get; set; }
//public string? VideoUrl { get; set; }