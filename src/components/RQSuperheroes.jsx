import React, { useState } from "react";
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from "./hooks/useSuperHeroesData";

const RQSuperheroes = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const handleAddHeroClick = () => {
    // console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  const { isLoading, data, isError, error, isFetching } = useSuperHeroesData();

  const { mutate:addHero } = useAddSuperHeroData();

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2 className='text-2xl py-5'>RQSuperheroes</h2>
      <div className='flex gap-2'>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-2'
        />
        <input
          type='text'
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
          className='border-2'
        />
        <button
          onClick={handleAddHeroClick}
          className='bg-gray-500 text-white py-1 px-3 rounded-md'
        >
          Add Hero
        </button>
      </div>
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
