using Microsoft.EntityFrameworkCore;
using personal_trainer_api.Data.Models;

namespace personal_trainer_api.Data
{
    public class PersonalTrainerDbContext : DbContext
    {
        public PersonalTrainerDbContext(DbContextOptions<PersonalTrainerDbContext> options)
       : base(options)
        {
        }

        public DbSet<Workout> Workouts => Set<Workout>();
        public DbSet<Exercise> Exercises => Set<Exercise>();
            
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            optionsBuilder
                    .UseSqlite($"Data Source={Path.Join(path, "personal-trainer.db")}");
        }
    }
}


