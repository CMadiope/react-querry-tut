import React from "react";
import { useSuperHeroesData } from "./hooks/useSuperHeroesData";



const RQSuperheroes = () => {
  const { isLoading, data, isError, error, isFetching } = useSuperHeroesData()

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2 className='text-2xl py-5'>RQSuperheroes</h2>
      <div>
        {data?.data.map((hero) => (
          <div key={hero.id}>
            <a href={`/rq-super-heroes/${hero.id}`}>{hero.name}</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default RQSuperheroes;
