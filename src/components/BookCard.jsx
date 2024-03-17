import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../modules/BookCard.module.scss';


const BookCard = ({ book }) => {
  const { id, volumeInfo } = book;
  const { title, imageLinks } = volumeInfo || {};

  console.log('Id:', id);
  console.log('Title:', title);
  console.log('Image:', imageLinks);

  return (
    <Link to={`/description/${id}`}>
      <div className={classes["book-card"]}>
        {imageLinks && <img src={imageLinks.thumbnail} alt={title} />}
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default BookCard;
