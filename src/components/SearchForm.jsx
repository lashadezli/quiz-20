
import React, { useState } from 'react';
import { searchBooks } from '../api';
import BookList from './BookList';
import classes from '../modules/SearchForm.module.scss'

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchBooks(query);
    setSearchResults(results);
  };

  return (
    <div className={classes['Form']}>
      <h1>Book Discovery Platform</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {searchResults && <BookList books={searchResults.googleBooks} />}
    </div>
  );
};

export default SearchForm;
