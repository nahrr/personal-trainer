using Microsoft.AspNetCore.Mvc;
using personal_trainer_api.Data;
using personal_trainer_api.Data.Models;
using personal_trainer_api.Dtos;
using personal_trainer_api.Repository;

namespace personal_trainer_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class WorkoutController : ControllerBase
    {
        private readonly ILogger<WorkoutController> _logger;
        private readonly IWorkoutRepo _repo;

        public WorkoutController(ILogger<WorkoutController> logger, IWorkoutRepo repo)
        {
            _logger = logger;
            _repo = repo;

        }

        [HttpGet("Get")]
        public async Task<ActionResult<List<Workout>>> Get()
        {
            var workouts = await _repo.GetWorkouts();

            return Ok(workouts);
        }
        [HttpGet("Get/{id}")]
        public async Task<ActionResult<Workout>> Get(int id)
        {
            var workouts = await _repo.GetWorkout(id);

            return Ok(workouts);
        }

        [HttpPost("Add")]
        public async Task<ActionResult> Add(WorkoutDto dto)
        {
            var workout = await _repo.AddWorkout(dto);

            return Created($"/Test{workout}", workout);

        }
    }
}