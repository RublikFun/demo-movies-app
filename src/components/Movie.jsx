function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <div id={imdbID} className='movie card'>
      <div className='card-image'>
        {Poster !== 'N/A' ? (
          <img src={Poster} alt={Title} />
        ) : (
          <img src={`https://via.placeholder.com/320x470/000000/FFFFFF/?text=${Title}`} alt={Title} />
        )}
      </div>
      <div className='card-content'>
        <span className='card-title'>{Title}</span>
        <p>
          {Type} <span className='right'>{Year}</span>
        </p>
      </div>
    </div>
  );
}

export { Movie };
