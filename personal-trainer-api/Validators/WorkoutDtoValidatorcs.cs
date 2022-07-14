using FluentValidation;
using personal_trainer_api.Dtos;

namespace personal_trainer_api.Validators
{
    public class WorkoutDtoValidatorcs
    {
        public class WorkoutDtoValidator : AbstractValidator<WorkoutDto>
        {
            public WorkoutDtoValidator()
            {
                RuleFor(x => x.Name).Length(1, 10);
                RuleForEach(x => x.Exercises).SetValidator(new ExerciseDtoValidator());
            }
        }
    }
}
