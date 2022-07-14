using FluentValidation;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using personal_trainer_api.Data;
using personal_trainer_api.Dtos;
using personal_trainer_api.Repository;
using System.Security.Claims;
using static personal_trainer_api.Validators.WorkoutDtoValidatorcs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
          .AddJwtBearer(options =>
          {
              options.Authority = builder.Configuration["Auth0:Domain"];
              options.Audience = builder.Configuration["Auth0:Audience"];
              options.TokenValidationParameters = new TokenValidationParameters
              {
                  NameClaimType = ClaimTypes.NameIdentifier,
                  ValidAudience = builder.Configuration["Auth0:Audience"],
                  ValidateAudience = true,
              };
          });

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
    .AllowAnyMethod().AllowAnyHeader()); //WithHeaders("Authorization"));

app.UseRouting();
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();