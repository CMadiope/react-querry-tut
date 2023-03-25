import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchColors = (pageNumber) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`);
};

const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, data, error, isError } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber)
  );

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div>
      {data?.data.map((color) => (
        <div key={color.id}>
          <h2>
            {color.id}. {color.label}
          </h2>
        </div>
      ))}
      <div className="flex gap-2">
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
          className='bg-red-400 rounded-lg py-2 px-4'
        >
          Prev Page
        </button>


        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
          className='bg-green-400 rounded-lg py-2 px-4'
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default PaginatedQueries;
