import React from 'react'
import HomeBanner from '../components/HomeBanner'
import RecommendedMovies from '../components/RecommendedMovies'

const Home = () => {
  return (
    <div className='page-home'>
      <HomeBanner />
      <RecommendedMovies />
    </div>
  )
}

export default Home
