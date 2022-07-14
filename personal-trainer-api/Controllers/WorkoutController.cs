using FluentValidation;
using FluentValidation.Results;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
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
        private IValidator<WorkoutDto> _validator;

        public WorkoutController(ILogger<WorkoutController> logger, IWorkoutRepo repo, IValidator<WorkoutDto> validator)
        {
            _logger = logger;
            _repo = repo;
            _validator = validator;
        }

        [HttpGet("Get")]
        [Authorize]
        public async Task<ActionResult<List<Workout>>> Get()
        {
            var accessToken = await
                HttpContext.GetTokenAsync("Bearer");
            var workouts = await _repo.GetWorkouts();

            return Ok(workouts);
        }
        [HttpGet("Get/{id}")]
        [Authorize]
        public async Task<ActionResult<Workout>> Get(int id)
        {
            var workouts = await _repo.GetWorkout(id);

            return Ok(workouts);
        }

        [HttpPost("Add")]
        [Authorize]
        public async Task<ActionResult> Add([FromBody] WorkoutDto dto)
        {
            ValidationResult result = await _validator.ValidateAsync(dto);

            if (!result.IsValid)
            {
                return BadRequest(result);
            }

            var workout = await _repo.AddWorkout(dto);

            return Created($"/Test{workout}", workout);
        }

        [HttpGet("private")]
        [Authorize]
        public IActionResult Private()
        {
            return Ok(new
            {
                Message = "Hello from a private endpoint! You need to be authenticated to see this."
            });
        }
    }
}