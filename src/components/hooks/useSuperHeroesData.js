import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperheroes = () => {
  return axios.get(" http://localhost:4000/superheroes");
};

export const useSuperHeroesData = () => {
  return useQuery("super-heroes", fetchSuperheroes, {});
};
