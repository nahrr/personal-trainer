import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAddWorkOut } from "../../hooks/ApiHook";
import { IExercise } from "../../interfaces/IExercise";
import { IWorkout } from "../../interfaces/IWorkout";
import styles from "./addworkout.module.scss";
import { IoIosFitness } from "react-icons/io";
import { MdCloudUpload } from "react-icons/md";

const AddWorkout = () => {
  const addWorkOut = useAddWorkOut();
  const ref = useRef<HTMLDivElement>(null);
  const [workout, setWorkout] = useState<IWorkout>({
    name: "",
    exercises: [
      {
        name: "",
        sets: 0,
        reps: 0,
        videoUrl: "",
        id: uuidv4(),
      },
    ],
  });

  const addFields = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let _exercise = [...workout.exercises];
    _exercise.push({
      name: "",
      sets: 0,
      reps: 0,
      videoUrl: "",
      id: uuidv4(),
    });

    setWorkout({ ...workout, exercises: _exercise });
  };

  const setExerciseData = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = workout.exercises.findIndex((m) => m.id === id);
    let _exercise = [...workout.exercises] as IExercise[];
    _exercise[index][event.target.name] = event.target.value;
    setWorkout({ ...workout, exercises: _exercise });
  };

  const setWorkoutName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkout({ ...workout, name: event.target.value });
  };

  const submitWorkout = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateFormData()) {
      addWorkOut.mutate(workout);
      return;
    }
    alert("Please fill in the required fields (*)");
  };

  //TODO temp solution for form validation
  const validateFormData = () => {
    return workout.exercises.every((exercise) => {
      return exercise.name.length > 1 && exercise.reps > 1 && exercise.sets > 1;
    });
  };
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }),
    [ref];

  return (
    <section className={`${styles.wrapper} inner_page_wrapper`}>
      <form onSubmit={submitWorkout}>
        <div className={styles.btn_container}>
          <button
            onClick={addFields}
            className={`${styles.add_exercise} ${styles.btn_generic} btn`}
          >
            <span>Add row</span> <IoIosFitness className={styles.icon} />
          </button>
          <button
            type="submit"
            className={`${styles.save_btn} ${styles.btn_generic} btn`}
          >
            <span>Upload</span>
            <MdCloudUpload className={styles.icon} />
          </button>
        </div>
        <div
          className={`${styles.input_container} ${styles.workout_name_container}`}
        >
          <input
            id="workout-name"
            name="workout-name"
            type="text"
            value={workout.name}
            placeholder=" "
            onChange={(e) => setWorkoutName(e)}
          />
          <label className={styles.required} htmlFor="workout-name">
            Workout name
          </label>
        </div>
        <div className={styles.num_of_exercises_wrapper}>
          <h2>Number of exercises: {workout.exercises.length}</h2>
        </div>
        <div className={styles.exercises_wrapper}>
          {workout &&
            workout.exercises.map((exercise, i) => {
              return (
                <div key={exercise.id} className={styles.exercises}>
                  <div className={styles.input_container}>
                    <input
                      id={`name-${exercise.id}`}
                      name="name"
                      type="text"
                      value={workout.exercises[i].name}
                      placeholder=" "
                      onChange={(e) => setExerciseData(exercise.id, e)}
                    />
                    <label
                      className={styles.required}
                      htmlFor={`name-${exercise.id}`}
                    >
                      Name
                    </label>
                  </div>

                  <div className={styles.input_container}>
                    <input
                      id={`sets-${exercise.id}`}
                      name="sets"
                      type="number"
                      placeholder=" "
                      value={workout.exercises[i].sets}
                      onChange={(e) => setExerciseData(exercise.id, e)}
                    />
                    <label
                      className={styles.required}
                      htmlFor={`sets-${exercise.id}`}
                    >
                      Sets
                    </label>
                  </div>

                  <div className={styles.input_container}>
                    <input
                      id={`reps-${exercise.id}`}
                      name="reps"
                      type="number"
                      placeholder=" "
                      value={workout.exercises[i].reps}
                      onChange={(e) => setExerciseData(exercise.id, e)}
                    />
                    <label
                      className={styles.required}
                      htmlFor={`reps-${exercise.id}`}
                    >
                      Reps
                    </label>
                  </div>

                  <div ref={ref} className={styles.input_container}>
                    <input
                      id={`video-${exercise.id}`}
                      name="videoUrl"
                      type="text"
                      placeholder=" "
                      value={workout.exercises[i].videoUrl}
                      onChange={(e) => setExerciseData(exercise.id, e)}
                    />
                    <label htmlFor={`video-${exercise.id}`}>Video url</label>
                  </div>
                </div>
              );
            })}
        </div>
      </form>
    </section>
  );
};

export default AddWorkout;
