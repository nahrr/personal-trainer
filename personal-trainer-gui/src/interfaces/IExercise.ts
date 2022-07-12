interface IObjectKeys {
  [key: string]: string | number;
}
export interface IExercise extends IObjectKeys {
  name: string;
  sets: number;
  reps: number;
  videoUrl: string;
  id: string;
}
