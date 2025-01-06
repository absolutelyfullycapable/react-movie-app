import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail () {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

    console.log(json.data.movie);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail</h1>;
}

export default Detail;

// await는 async 함수 내부에 있지 않으면 사용할 수 없음
