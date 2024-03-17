import React, { useState } from 'react';
import { searchBooks } from '../api';
import BookList from '../components/BookList';
import SearchForm from '../components/SearchForm';


const Home = () => {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = async (query) => {
    const results = await searchBooks(query);
    setSearchResults(results);
  };

  return (
    <div className="Home">
      <SearchForm onSearch={handleSearch} />
      {searchResults && (
        <>
          <h2>Search Results</h2>
          <BookList books={searchResults.googleBooks} />
          <BookList books={searchResults.openLibrary} />
        </>
      )}
    </div>
  );
};

export default Home;
