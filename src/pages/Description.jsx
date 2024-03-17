import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchBooks } from '../api';
import { Link } from 'react-router-dom';
import classes from '../modules/Description.module.scss'

const Description = () => {
  const { id } = useParams();
  console.log('Params:', useParams()); 
  const [bookDetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        console.log('Fetching book details for ID:', id); 
        const response = await searchBooks(id);
        console.log('API Response:', response); 
        if (response && response.googleBooks && response.googleBooks.length > 0) {
          const bookDetails = response.googleBooks[0].volumeInfo; 
          console.log('Book Details:', bookDetails);
          setBookDetails(bookDetails);
        } else {
          console.error('No book details found for ID:', id);
        }
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBookDetails();
  }, [id]);

  console.log('ID:', id); 
  console.log('Book Details:', bookDetails); 

  return (
    <div>
      <Link to="/">Go Back</Link>
      {bookDetails && (
        <div className={classes['Description']}>
          <div className={classes['Main']}>
              <img src={bookDetails.imageLinks?.thumbnail} alt={bookDetails.title} />
              <button>borrow</button>
          </div>
            <div className={classes['Details']}>
              <h2>{bookDetails.title}</h2>
              <h3>By: {bookDetails.authors}</h3>
              <p>Publisher: {bookDetails.publisher}</p>
              <p>Date: {bookDetails.publishedDate}</p>
              <p className={classes['description']}><span>Description:</span>{bookDetails.description}</p>
            </div>
        </div>
      )}
    </div>
  );
};

export default Description;
