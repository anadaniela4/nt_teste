import { useState, useEffect } from 'react';
import { getAllMovies } from '../../api/service';


export default function useMovieList() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      const movieData = await getAllMovies();

      if (mounted) {
        setMovieList(movieData);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false
    }
  }, []);

  return { loading, movieList }
}
