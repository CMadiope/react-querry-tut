import React, { useEffect, useState } from "react";
import axios from "axios";

const Superheroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(second)

  useEffect(() => {
    axios.get(" http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    }).catch((error) => {
      setError(error.message)
      setIsLoading(false)
    }) 
  }, []);
  if (isLoading) {
    return <h2>Loading ...</h2>;
  }
  if(error) {
    return <h2>
      {error}
    </h2>
    }

  return (
    <div>
      <h2 className="text-xl font-bold">Superheroes Page</h2>
      {data?.map((hero) => {
        return <div key={hero.id} className='py-1 text-lg'>{hero.name}</div>;
      })}
    </div>
  );
};

export default Superheroes;
