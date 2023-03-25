import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const RQSuperheroes = () => {
  const { isLoading, data } = useQuery("super-heroes", () => {
    return axios.get(" http://localhost:4000/superheroes");
  });

  if (isLoading) {
    return <h3>Loading ...</h3>;
  }

  return (
    <>
      <h2 className="text-2xl py-5">RQSuperheroes</h2>
      <div>
        {data?.data.map((hero) => (
          <div key={hero.id}>
            {hero.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default RQSuperheroes;
