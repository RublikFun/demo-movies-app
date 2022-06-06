import React, { Component } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const APY_KEY = process.env.REACT_APP_APY_KEY;

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  searchRequest = (requestKey, type = 'all') => {
    this.setState({loading: true});

    fetch(`http://www.omdbapi.com/?apikey=${APY_KEY}&s=${requestKey}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  componentDidMount() {
    this.searchRequest('mask');
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div className='container app-content'>
        <Search searchRequest={this.searchRequest} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </div>
    );
  }
}

export { Main };

