using FluentValidation;
using Microsoft.EntityFrameworkCore;
using personal_trainer_api.Data;
using personal_trainer_api.Dtos;
using personal_trainer_api.Repository;
using static personal_trainer_api.Validators.WorkoutDtoValidatorcs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
//builder.Services.AddFluentValidationAutoValidation();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

builder.Services.AddDbContext<PersonalTrainerDbContext>(options => options.UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));

builder.Services.AddScoped<IValidator<WorkoutDto>, WorkoutDtoValidator>();
builder.Services.AddScoped<IWorkoutRepo, WorkoutRepo>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(p => p.WithOrigins("http://localhost:3000")
    .AllowAnyMethod().AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
