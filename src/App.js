import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();

    setLoading(false);
    setMovies(json.data.movies)
  };

  useEffect(() => {
    getMovies();

    /*
      fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
        .then((response) => response.json())
        .then((json) => {
          setLoading(false);
          setMovies(json.data.movies)
        });

      ➡️ 요즈음은 then보다 async, await를 더 보편적으로 사용함
    */
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
    </div>
  );
}

export default App;
