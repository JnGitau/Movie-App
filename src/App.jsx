import React, { useEffect, useState } from 'react'
import Search from './Components/Search.jsx';
import Spinner from './Components/Spinner.jsx';
import MovieCard from './Components/MovieCard.jsx';

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept:"application/json",
    authorization: `Bearer ${API_KEY}`,
  }
}

function App() {
const[searchTerm, setSearchTerm] = useState("");
const[errorMessage, setErrorMessage] = useState(null);
const[movieList, setMovieList] = useState([]);
const[isLoading, setIsLoading] = useState(false);

const fetchMovies = async (query = '') => {
  setIsLoading(true);
  setErrorMessage('');

  try{
    const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response = await fetch(endpoint, API_OPTIONS);
    
    if(!response.ok) {
      throw new error("failed to fetch movies");
    }

    const data = await response.json();

    if(data.response === 'false') {
      setErrorMessage(data.error || "failed to fetch movies")
      setMovieList([]);
      return;
    }
      setMovieList(data.results || []);
    console.log(data);
  } catch (error) {
    console.error(`error fetching movie: ${error}`);
    setErrorMessage("Error fetching movie,please try again later.");
  } finally {
    setIsLoading(false);
  }
}

useEffect(() => {
  fetchMovies(searchTerm);
}, [searchTerm]);

  return (
 <main>
<div className='pattern' />

<div className='wrapper'>
  <header>
    <img src='./hero.png' alt='Hero Banner'></img>
<h1 >Find <span className='text-gradient'>Movies</span> You'll Enjoy Without The Hassle</h1>
<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
  </header>

  <section className='all-movies'>

<h2 className='mt-[40px]'>ALL MOVIES</h2>

    {isLoading ? (
      <Spinner />
    ) : errorMessage ? (
      <p className='text-red-500'>{errorMessage}</p>
    ) : (
      <ul>
        {movieList.map((movie) => (
         <MovieCard key={movie.id} movie= {movie}/>
        ))}
      </ul>
    )}
  </section>

</div>
 </main>
  )
}

export default App;