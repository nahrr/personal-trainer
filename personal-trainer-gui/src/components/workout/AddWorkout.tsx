import { useState } from "react";
import styles from "./addworkout.module.scss";
const AddWorkout = () => {
  const [fields, setFields] = useState([
    {
      name: "",
      sets: 0,
      reps: 0,
      videoUrl: "",
    },
  ]);

  const addFields = () => {
    event!.preventDefault();
    setFields([
      ...fields,
      {
        name: "",
        sets: 0,
        reps: 0,
        videoUrl: "",
      },
    ]);
  };
  return (
    <div className={styles.wrapper}>
      <h1>Add Workout</h1>
      <button onClick={addFields}>Add exercise</button>
      <form>
        <label htmlFor="workout-name">Workout name</label>
        <input id="workout-name" type="text" placeholder="Workout name" />
        {fields.map((field, i) => {
          return (
            <div key={i} className={styles.exercises}>
              <label htmlFor="exercise-name">Exercise name</label>
              <input
                id="exercise-name"
                type="text"
                placeholder="Exercise name"
              />
              <label htmlFor="exercise-sets">Sets</label>
              <input id="exercise-sets" type="text" placeholder="Sets" />
              <label htmlFor="exercise-reps">Reps</label>
              <input id="exercise-reps" type="text" placeholder="Reps" />
              <label htmlFor="exercise-video-url">Video url</label>
              <input
                id="exercise-video-url"
                type="text"
                placeholder="Video url"
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default AddWorkout;
