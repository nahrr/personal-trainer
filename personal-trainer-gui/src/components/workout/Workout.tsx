import { useParams } from "react-router-dom";
import { useFetchWorkOut } from "../../hooks/ApiHook";
import { IExercise } from "../../interfaces/IExercise";

import Exercise from "../exercise/Exercise";
import styles from "./workout.module.scss";
const Workout = () => {
  const params = useParams();
  const { data, status, isSuccess } = useFetchWorkOut(
    Number(params.exerciseId)
  );
  // data && console.log(data);
  return (
    <section className={`${styles.wrapper} inner_page_wrapper`}>
      {data &&
        data.exercises.map((exercise: IExercise) => (
          <Exercise
            key={exercise.id}
            name={exercise.name}
            reps={exercise.reps}
            sets={exercise.sets}
            videoUrl={exercise.videoUrl}
          />
        ))}
      {data && <button className={`${styles.btn} btn`}>Finish workout</button>}
      {!data && <h1>Workout not found...</h1>}
    </section>
  );
};

export default Workout;
