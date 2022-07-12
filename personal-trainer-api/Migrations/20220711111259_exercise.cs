using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace personal_trainer_api.Migrations
{
    public partial class exercise : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Comments",
                table: "Exercises");

            migrationBuilder.AlterColumn<string>(
                name: "Id",
                table: "Exercises",
                type: "TEXT",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Id",
                table: "Exercises",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "TEXT")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<string>(
                name: "Comments",
                table: "Exercises",
                type: "TEXT",
                nullable: true);
        }
    }
}
