using personal_trainer_api.Data;
using personal_trainer_api.Data.Models;
using personal_trainer_api.Dtos;
using Microsoft.EntityFrameworkCore;

namespace personal_trainer_api.Repository
{
    public interface IWorkoutRepo
    {
        Task<WorkoutDto> AddWorkout(WorkoutDto dto);
        Task<List<WorkoutDto>> GetWorkouts();
        Task<WorkoutDto> GetWorkout(int id);
    }
    public class WorkoutRepo : IWorkoutRepo
    {
        private readonly PersonalTrainerDbContext _ctx;

        public WorkoutRepo(PersonalTrainerDbContext ctx)
        {
            _ctx = ctx;
        }

        private static Workout DtoToEntity(Workout w, WorkoutDto dto)
        {
            var list = new List<Exercise>();
            foreach (var item in dto.Exercises)
            {
                var exercise = new Exercise
                {
                    Id = item.Id,
                    Name = item.Name,
                    Reps = item.Reps,
                    Sets = item.Sets,
                    VideoUrl = item.VideoUrl,
                };
                list.Add(exercise);
            }
            w.Exercises = list;
            w.Name = dto.Name;

            return w;
        }

        private static WorkoutDto EntityToDto(Workout w)
        {
            var list = new List<ExerciseDto>();
            foreach (var item in w.Exercises)
            {
                var exercise = new ExerciseDto(
                    item.Id,
                    item.Name,
                    item.Reps,
                    item.Sets,
                    item.VideoUrl
                    );
                list.Add(exercise);
            }
            return new WorkoutDto(w.Id, w.Name, list);
        }

        private static List<ExerciseDto> ExerciseToDto(List<Exercise> exercises)
        {
            List<ExerciseDto> list = new();
            foreach (var exercise in exercises)
            {
                var dto = new ExerciseDto(exercise.Id, exercise.Name, exercise.Sets, exercise.Reps, exercise.VideoUrl);
                list.Add(dto);
            }
            return list;
        }

        public async Task<WorkoutDto> AddWorkout(WorkoutDto dto)
        {
            var workout = new Workout();

            var entitiy = DtoToEntity(workout, dto);

            _ctx.Workouts.Add(entitiy);
            await _ctx.SaveChangesAsync();

            return EntityToDto(workout);

        }

        public async Task<List<WorkoutDto>> GetWorkouts()
        {
            return await _ctx.Workouts
                        .Select(w => new WorkoutDto(w.Id, w.Name, ExerciseToDto(w.Exercises)))
                        .ToListAsync();
        }

        public async Task<WorkoutDto> GetWorkout(int id)
        {
            var workout = await _ctx.Workouts.Where(i => i.Id == id)
                                             .Include(e => e.Exercises)
                                             .FirstOrDefaultAsync();

            if (workout is null)  //TODO
                return null!;

            return EntityToDto(workout);
        }
    }
}
