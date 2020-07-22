import React, {useState} from "react"; // new hook in react for useState
import MovieCard from './movieCard.js'
export default function SearchMovies(){

    /// states - input query
    const [query, setQuery] = useState('')

    // create the state for movies, and update the stat appropriately
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) =>{
        e.preventDefault();
        const query = 'Jurassic Parks';

        const url = `https://api.themoviedb.org/3/search/movie?api_key=a89842db3e5424c93c679acd490e840fab&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try{
            const res = await fetch(url);
            const data = res.json();
            console.log(data.results);
            setMovies(data.results);
        } catch(err){
            console.log(err);
        }
    }

    return (
        <>
        <form className="form">
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query"
                placeholder="i.e. Jurassic Parks"
                value={query} onChange={(e) => setQuery(e.target.value)}
                />
            <button className="button" type="submit">Search</button>
        </form>
        <div className="card-list"> 
            {movies.filter(movie=> movie.poster_path).map(movie =>(
                <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
        </>
    )
}