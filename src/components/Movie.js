import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie ({ coverImg, title, id, year, genres, summary }) {
  // coverImg, title, year, genres, summary ➡️ props (object)
  return (
    <div>
      <div className="thumb-img-box">
        <img src={coverImg} alt={`${title} poster`} />
      </div>
      <p className="movie-tit">
        <Link to={`/movie/${id}`}>{title} ({year})</Link>
      </p>
      <ul className="movie-genres">
        {genres.map((genre) => <li key={genre}>{genre}</li>)}
      </ul>
      <p className="movie-desc">{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // string을 가진 배열
  summary: PropTypes.string.isRequired
}

export default Movie;
