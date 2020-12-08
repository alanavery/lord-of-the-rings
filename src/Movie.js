function Movie(props) {
  return (
    <div>
      <h3>The Lord of the Rings: {props.title}</h3>
      <p>{props.hours}h {props.minutes}min</p>
    </div>
  );
}

export default Movie;