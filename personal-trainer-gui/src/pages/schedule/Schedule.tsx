import WorkoutCard from "../../components/workoutCard/WorkoutCard";
import { useFetchWorkOuts } from "../../hooks/ApiHook";
import { ExercisesProps, WorkoutProps } from "../../types/Types";
import styles from "./schedule.module.scss";

const Schedule = () => {
  const { data, status, isSuccess } = useFetchWorkOuts();
  console.log(data);
  return (
    <section className={styles.wrapper}>
      {data &&
        data.map((workout: WorkoutProps) => (
          <WorkoutCard
            key={workout.id}
            id={workout.id}
            name={workout.name}
            exercises={workout.exercises.map(
              (exercise: ExercisesProps) => exercise
            )}
          />
        ))}
    </section>
  );
};
export default Schedule;
