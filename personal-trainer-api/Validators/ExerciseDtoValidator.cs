using FluentValidation;
using personal_trainer_api.Dtos;

namespace personal_trainer_api.Validators
{
    public class ExerciseDtoValidator : AbstractValidator<ExerciseDto>
    {
        public ExerciseDtoValidator()
        {
            RuleFor(x => x.Name).Length(1, 20);
            RuleFor(x => x.Reps).InclusiveBetween(1, 50);
            RuleFor(x => x.Sets).InclusiveBetween(1, 30);
        }
    }
}
