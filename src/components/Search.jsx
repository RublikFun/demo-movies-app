import React, { useState } from 'react';

function Search(props) {
  const { searchRequest = Function.prototype } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (e) => {
    if (e.code === 'Enter') {
      searchRequest(search, type);
    }
  };

  const handleChangeType = (e) => {
    setType(e.target.dataset.type);
    searchRequest(search, e.target.dataset.type);
  };

  return (
    <>
      <div className='app-search'>
        <input
          id='search'
          type='search'
          placeholder='Search'
          className='validate white-text blue-grey darken-4'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <i className='icon material-icons blue-grey-text darken-2 right' onClick={() => searchRequest(search, type)}>
          search
        </i>
      </div>
      <div className='app-filters'>
        <label>
          <input name='type' type='radio' data-type='all' onChange={handleChangeType} checked={type === 'all'} />
          <span>All</span>
        </label>
        <label>
          <input name='type' type='radio' data-type='movie' onChange={handleChangeType} checked={type === 'movie'} />
          <span>Movies</span>
        </label>
        <label>
          <input name='type' type='radio' data-type='series' onChange={handleChangeType} checked={type === 'series'} />
          <span>Series</span>
        </label>
      </div>
    </>
  );
}

export { Search };

