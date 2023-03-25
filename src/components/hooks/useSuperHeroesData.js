import { useQuery, useMutation } from "react-query";
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
  return useMutation(addSuperHero);
};
