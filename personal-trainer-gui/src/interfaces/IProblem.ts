interface Error {
  [name: string]: string[];
}

export interface IProblem {
  type: string;
  title: string;
  status: number;
  errors: Error;
}
