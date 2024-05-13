import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/app.scss";
import Header from './components/Header';
import Footer from './components/Footer';
import HomeBanner from './components/HomeBanner';
import RecommendedMovies from './components/RecommendedMovies';

const App = () => {
  return (
    <>
      <Header />
      <HomeBanner />
      <RecommendedMovies />
      <Footer />
    </>
  )
}

export default App
