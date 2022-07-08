export type WorkoutProps = {
  id: number;
  name: string;
  exercises: ExercisesProps[];
};

export type ExercisesProps = {
  id: number;
  name: string;
  sets: number;
  reps: number;
  videoUrl?: string;
};
