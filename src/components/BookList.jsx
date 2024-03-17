import BookCard from './BookCard';
import classes from '../modules/BookList.module.scss';

const BookList = ({ books }) => {
  return (
    <div className={classes['book-list']}>
      {books.map((book, index) => (
        <div key={book.id || index} className={classes['book-card']}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
