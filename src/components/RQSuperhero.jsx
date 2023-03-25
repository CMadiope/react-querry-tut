import React from 'react'
import { useSuperHeroData } from './hooks/useSuperHeroData'
import { useParams } from 'react-router'

const RQSuperhero = () => {
  const {heroId} = useParams()

const {isLoading, error, data, isError} = useSuperHeroData(heroId)

if(isLoading) {
  return <h2 className='font-bold text-xl'>Loading ....</h2>
}
if(error) {
  return <h2 className='font-bold text-xl'>
    {error.message}
  </h2>
}

  return (
    <div>
      {
        data.data.name
      } - {data.data.alterego}
    </div>
  )
}

export default RQSuperhero