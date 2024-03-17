import axios from 'axios';

const googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes';
const openLibraryAPI = 'https://openlibrary.org';

export const searchBooks = async (query) => {
  try {
    const googleBooksResponse = await axios.get(`${googleBooksAPI}?q=${query}`);
    
    const openLibraryResponse = await axios.get(`${openLibraryAPI}/search.json?q=${query}`);

    return {
      googleBooks: googleBooksResponse.data.items,
      openLibrary: openLibraryResponse.data.docs,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
