using FluentValidation;
using personal_trainer_api.Data.Models;

namespace personal_trainer_api.Dtos
{
    public record WorkoutDto(int? Id, string Name, List<ExerciseDto> Exercises);

   
}
