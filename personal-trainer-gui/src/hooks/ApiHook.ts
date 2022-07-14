import { useAuth0 } from "@auth0/auth0-react";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import config from "../config";
import { IProblem } from "../interfaces/IProblem";
import { IWorkout } from "../interfaces/IWorkout";

const useFetchWorkOuts = () => {
  const { getAccessTokenSilently } = useAuth0();
  return useQuery<IWorkout[], AxiosError>("Workouts", async () => {
    const { data } = await axios.get(`${config.baseApiUrl}/Workout/Get`, {
      headers: {
        Authorization: `Bearer ${await getAccessTokenSilently()}`,
      },
    });
    return data;
  });
};

const useFetchWorkOut = (id: number) => {
  const { getAccessTokenSilently } = useAuth0();
  return useQuery<IWorkout[], AxiosError>(["workout", id], async () => {
    const { data } = await axios.get(`${config.baseApiUrl}/Workout/Get/${id}`, {
      headers: {
        Authorization: `Bearer ${await getAccessTokenSilently()}`,
      },
    });
    return data;
  });
};

const useAddWorkOut = () => {
  const { getAccessTokenSilently } = useAuth0();
  return useMutation<AxiosResponse, AxiosError<IProblem>, IWorkout>(
    async (workout) =>
      axios.post(`${config.baseApiUrl}/Workout/Add`, workout, {
        headers: {
          Authorization: `Bearer ${await getAccessTokenSilently()}`,
        },
      }),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  // return useMutation<AxiosResponse, AxiosError<IProblem>, IWorkout>,
  // async (workout: any) => {
  //   const {data} =  await axios.post(`${config.baseApiUrl}/Workout/Add`, workout,{
  //     headers: {
  //       Authorization: `Bearer ${await getAccessTokenSilently()}`,
  //     },
  //   });
  //   data.onSuccess = () => {
  //     console.log("Workout added");
  //   }
  // }
};

export { useFetchWorkOuts, useFetchWorkOut, useAddWorkOut };
