import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperheroes = () => {
  return axios.get(" http://localhost:4000/superheroes");
};

const addSuperHero = (hero) => {
  return axios.post(" http://localhost:4000/superheroes", hero);
};

export const useSuperHeroesData = () => {
  return useQuery("super-heroes", fetchSuperheroes, {});
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries('super-heroes')
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};
