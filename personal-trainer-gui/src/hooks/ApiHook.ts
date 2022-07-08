import axios, { AxiosError } from "axios";
import { useQuery } from "react-query";
import config from "../config";
const useFetchWorkOuts = () => {
  return useQuery<any, AxiosError>("Workouts", () =>
    axios
      .get(`${config.baseApiUrl}/Workout/Get`)
      .then((response) => response.data)
  );
};

const useFetchWorkOut = (id: number) => {
  return useQuery<any, AxiosError>("WorkoutX", () =>
    axios
      .get(`${config.baseApiUrl}/Workout/Get/${id}`)
      .then((response) => response.data)
  );
};

export { useFetchWorkOuts, useFetchWorkOut };
