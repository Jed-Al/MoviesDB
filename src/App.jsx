import { useState } from 'react';
import { Input, Button } from 'reactstrap';
import MovieCard from './MovieCard';
import './App.css';

const API = {
  url: "https://api.themoviedb.org",
  key: "1d0ac694d3f0f10b817c4e30ceea7696"
}

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const performSearch = () => {
    fetch(`${API.url}/3/search/movie?api_key=${API.key}&query=${query}`)
      .then(res => res.json())
      .then((response) => {
        let movieList = response.results.map((result) => {
          let movie = {
            imagePath: "https://image.tmdb.org/t/p/w185" + result.poster_path,
            plotName: result.original_title,
            plotOverview: result.overview
          }
          return movie;
        })
        setMovies(movieList)
      })
  }

  return (
    <div>
      <div className='navBar'>
        <img className='logoImage' width="50" src='movie-icon.webp' alt='logoImage' />
        <p className='title'> MoviesDB Search</p>
      </div>
      <div className='searchBar'>
        <Input
          className="search"
          placeholder="Search movies and tv shows..."
          onChange={e => setQuery(e.target.value)}
          value={query} />
        <Button className="search-btn" color="primary" onClick={performSearch}>
          Search
        </Button>
      </div>
      {
        movies.map((movie) => (
          <MovieCard image={movie.imagePath} name={movie.plotName} plot={movie.plotOverview}></MovieCard>
        ))
      }
    </div>
  );
}
