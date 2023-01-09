import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from  './search.svg';
import MovieCard from './MovieCard';
const API_URL = 'http://www.omdbapi.com?apikey=d67afd80';

const movie1= {
    "Title" : "Amazing Spiderman Syndrome",
    "Year": "2022",
    "imdbID": "tt2586634",
    "Type": "movie",   
    "Poster": "N/A"
}

const App = () => {

    const [movies , setMovies] = useState([]);
    const [searchItem , setSearchItem] = useState('')
    const searchMovies = async (title) => {

        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    } 
    useEffect(() => {
searchMovies('Spiderman');
    } ,[]);

    return(
        <div className="app">
            <h1> MovieLand </h1>

            <div className="search">
                <input placeholder="Search for Movies"value={searchItem}  onChange={(e) => setSearchItem(e.target.value)} />

                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchItem) }
                />
                
        </div>
        {
            movies?.length > 0 
            ? (

        <div className="container">
            {movies.map((movie) => (
                <MovieCard movie={movie}/>
            ))}
        </div>

            ) : 
            (
                <div className="empty">
                    <h2> No Movies foun </h2>
                    </div> 
            )
        }
        
        </div>
    )
}
export default App;