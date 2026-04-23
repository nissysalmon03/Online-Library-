import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

/**
 * BookCard component displays a summary of a book.
 * It takes a book object as a prop and renders its title, author, category, and a link to view details.
 */
const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-card-image">
        {/* Placeholder for book cover, using category initial for visual interest */}
        <span>{book.category.charAt(0).toUpperCase()}</span>
      </div>
      <div className="book-card-content">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <span className="book-category">{book.category}</span>
        <div className="book-card-footer">
          <div className="book-rating">★ {book.rating}</div>
          <Link to={`/book/${book.id}`} className="view-details-btn">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
