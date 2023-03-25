import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperheroes = () => {
return axios.get(" http://localhost:4000/superheroes");
};

const RQSuperheroes = () => {
  const { isLoading, data,isError, error } = useQuery("super-heroes", fetchSuperheroes);

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }
  if(isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2 className='text-2xl py-5'>RQSuperheroes</h2>
      <div>
        {data?.data.map((hero) => (
          <div key={hero.id}>{hero.name}</div>
        ))}
      </div>
    </>
  );
};

export default RQSuperheroes;
