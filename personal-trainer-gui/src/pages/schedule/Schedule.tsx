import WorkoutCard from "../../components/workoutCard/WorkoutCard";
import { useFetchWorkOuts } from "../../hooks/ApiHook";
import { IExercise } from "../../interfaces/IExercise";
import { IWorkout } from "../../interfaces/IWorkout";
import styles from "./schedule.module.scss";

const Schedule = () => {
  const { data, status, isSuccess } = useFetchWorkOuts();
  return (
    <section className={`${styles.wrapper} inner_page_wrapper`}>
      {data &&
        data.map((workout: IWorkout) => (
          <WorkoutCard
            key={workout.id}
            id={workout.id}
            name={workout.name}
            exercises={workout.exercises.map((exercise: IExercise) => exercise)}
          />
        ))}
    </section>
  );
};
export default Schedule;
