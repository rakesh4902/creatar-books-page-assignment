import './index.css'

const BookItem = ({ cover, title, author, price, description }) => {
  return (
    <li className="book-item">
      <img src={cover} alt="Book Cover" className="book-cover" />
      <div className="book-details">
        <h2 className="book-title">{title}</h2>
        <p className="book-author"><span className="author">Author:</span> {author}</p>
        <p className="book-author"><span className="author">Price:</span>  ${price}</p>
        <p className="book-description">{description}</p>
      </div>
    </li>
  );
};

export default BookItem;
