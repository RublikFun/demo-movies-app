import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (e) => {
    if (e.code === 'Enter') {
      this.props.searchRequest(this.state.search, this.state.type);
    }
  };

  handleChangeType = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchRequest(this.state.search, this.state.type);
      },
    );
  };

  render() {
    return (
      <>
        <div className='app-search'>
          <input
            id='search'
            type='search'
            placeholder='Search'
            className='validate white-text blue-grey darken-4'
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <i
            className='icon material-icons blue-grey-text darken-2 right'
            onClick={() => this.props.searchRequest(this.state.search, this.state.type)}>
            search
          </i>
        </div>
        <div className='app-filters'>
          <label>
            <input
              name='type'
              type='radio'
              data-type='all'
              onChange={this.handleChangeType}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name='type'
              type='radio'
              data-type='movie'
              onChange={this.handleChangeType}
              checked={this.state.type === 'movie'}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              name='type'
              type='radio'
              data-type='series'
              onChange={this.handleChangeType}
              checked={this.state.type === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
      </>
    );
  }
}

export { Search };

