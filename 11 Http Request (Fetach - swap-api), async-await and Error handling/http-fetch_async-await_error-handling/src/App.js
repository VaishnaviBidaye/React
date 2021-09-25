import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

  // Loading State
  const [isLoading, setIsLoading] = useState(false);

  // Error State
  const [error,setError] = useState(null);


  // Working with promises by using 'then' statement
  // For 'then' only catch block is fine

  // function fetchMoviesHandler() {
  //   fetch('https://swapi.dev/api/films/')
  //     .then(response => {
  //         // json to JS object
  //         return response.json();
  //     })
  //     .then(data => {
  //         const transformedMovies = data.results.map((movieData) => {
  //           return {
  //             id: movieData.episode_id,
  //             title: movieData.title,
  //             openingText: movieData.opening_crawl,
  //             releaseDate: movieData.release_date
  //           };
  //         });
  //         setMovies(transformedMovies);
  //     });
  // }


  // Working with promises
  // async await - for synchronous process running
  // for async - await use try-catch
  const fetchMoviesHandler = useCallback( async () => {
    setIsLoading(true);
    setError(null);

    try{
        const response = await fetch('https://swapi.dev/api/films/');
        
        if(!response.ok) {
          throw new Error('Something went wrong');
        }
        
        // json to JS object
        const data = await response.json();
        const transformedMovies = data.results.map((movieData) => {
            return {
              id: movieData.episode_id,
              title: movieData.title,
              openingText: movieData.opening_crawl,
              releaseDate: movieData.release_date
            };
          });

        setMovies(transformedMovies);
        
    } catch(error) {
        setError(error.message);
    }

    setIsLoading(false);

   }, []);


  // To display the data immedately  when we open the application
  // before clicking on the button
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);



   let content = <p>No Movies Found !</p>;

   if (movies.length > 0 ) {
      content = <MoviesList movies={movies} />;
   }

   if (error) {
      content = <p>{error}</p>;
   }

   if (isLoading) {
      content = <p>Loading ...</p>;
   }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
