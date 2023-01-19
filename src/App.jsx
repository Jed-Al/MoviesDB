import { useState } from 'react';
import { Input, Button } from 'reactstrap';
import './App.css';

export default function App() {
  const [query, setQuery] = useState("");

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
        <Button className="search-btn" color="primary">
          Search
        </Button>
      </div>
    </div>
  );
}
