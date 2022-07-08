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

        private static Workout DtoToEntity (Workout w, WorkoutDto dto)
        {
            w.Exercises = dto.Exercises;
            w.Name = dto.Name;

            return w;
        } 

        private static WorkoutDto EntityToDto(Workout w)
        {
            return new WorkoutDto(w.Id, w.Name, w.Exercises);
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
                        .Select(w => new WorkoutDto(w.Id, w.Name, w.Exercises))
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
