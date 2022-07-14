import { Link } from "react-router-dom";
import { IExercise } from "../../interfaces/IExercise";

import styles from "./workoutCard.module.scss";
type Args = {
  id?: number;
  name: string;
  exercises: IExercise[];
};
const WorkoutCard = ({ exercises, id, name }: Args) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.exercises_wrapper}>
        <div className={styles.header_wrapper}>
          <div className={styles.col}>
            <h3>{name}</h3>
          </div>
          <div className={styles.btn_wrapper}>
            <Link to={`/workout/${id}`}>
              <button>Details</button>
            </Link>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.exercises}>
          <ol>
            {exercises &&
              exercises.map((exercise: IExercise) => (
                <li key={exercise.id}>
                  <span>{exercise.name}</span>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default WorkoutCard;
