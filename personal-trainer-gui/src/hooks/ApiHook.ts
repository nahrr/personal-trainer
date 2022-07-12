import axios, { AxiosError, AxiosResponse } from "axios";
import { useMutation, useQuery } from "react-query";
import config from "../config";
import { IProblem } from "../interfaces/IProblem";
import { IWorkout } from "../interfaces/IWorkout";
const useFetchWorkOuts = () => {
  return useQuery<IWorkout[], AxiosError>("Workouts", () =>
    axios
      .get(`${config.baseApiUrl}/Workout/Get`)
      .then((response) => response.data)
  );
};

const useFetchWorkOut = (id: number) => {
  return useQuery<IWorkout, AxiosError>(["workout", id], () =>
    axios
      .get(`${config.baseApiUrl}/Workout/Get/${id}`)
      .then((response) => response.data)
  );
};

const useAddWorkOut = () => {
  return useMutation<AxiosResponse, AxiosError<IProblem>, IWorkout>(
    (workout) => axios.post(`${config.baseApiUrl}/Workout/Add`, workout),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );
};

export { useFetchWorkOuts, useFetchWorkOut, useAddWorkOut };
