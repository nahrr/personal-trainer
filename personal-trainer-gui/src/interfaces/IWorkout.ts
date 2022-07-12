import { IExercise } from "./IExercise";
export interface IWorkout {
  id?: number;
  name: string;
  exercises: IExercise[];
}
