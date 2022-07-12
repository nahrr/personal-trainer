import { Link } from "react-router-dom";
import { IExercise } from "../../interfaces/IExercise";

import styles from "./workoutCard.module.scss";
type Args = {
  id?: number;
  name: string;
  exercises: IExercise[];
};
const WorkoutCard = ({ exercises, id, name }: Args) => {
  console.log(exercises);
  return (
    <div className={styles.wrapper}>
      <div></div>
      <div>
        <h3>{name}</h3>
        <div className={styles.exercises}>
          {exercises &&
            exercises.map((exercise: IExercise) => (
              <span key={exercise.id}>{exercise.name}</span>
            ))}
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <Link to={`workout/${id}`}>
          <button>View workout</button>
        </Link>
      </div>
    </div>
  );
};
export default WorkoutCard;
