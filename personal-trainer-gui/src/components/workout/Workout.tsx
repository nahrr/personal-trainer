import { useParams } from "react-router-dom";
import { useFetchWorkOut } from "../../hooks/ApiHook";
import { ExercisesProps } from "../../types/Types";
import Exercise from "../exercise/Exercise";
import styles from "./workout.module.scss";
const Workout = () => {
  //TODO fetch workout data from server
  const params = useParams();
  const { data, status, isSuccess } = useFetchWorkOut(
    Number(params.exerciseId)
  );
  data && console.log(data);
  return (
    <div className={styles.wrapper}>
      {data &&
        data.exercises.map((exercise: ExercisesProps) => (
          <Exercise
            name={exercise.name}
            reps={exercise.reps}
            sets={exercise.sets}
            videoUrl={exercise.videoUrl}
          />
        ))}
      {data && <button className={styles.btn}>Finish workout</button>}
      {!data && <h1>Workout not found...</h1>}
    </div>
  );
};

export default Workout;
