import Header from '../Header';
import BookItem from '../BookItem';
import './index.css';



const booksData=[
  {
    "id": 1,
    "title": "MongoDB in Action",
    "author": "Harper Lee",
    "description": "Harness the power of MongoDB to build robust and scalable applications.",
    "cover_image": "https://itbook.store/img/books/9781617291609.png",
    "price": 25.99
  },
  {
    "id": 2,
    "title": "MongoDB and Python",
    "author": "George Orwell",
    "description": "Discover the integration of MongoDB with Python and unlock the potential of document-oriented databases.",
    "cover_image": "https://itbook.store/img/books/9781449310370.png",
    "price": 29.99
  },
  {
    "id": 3,
    "title": "Building Node Applications",
    "author": "Jane Austen",
    "description": "Explore the synergy between MongoDB, Node.js, and Backbone.js to create scalable applications.",
    "cover_image": "https://itbook.store/img/books/9781449337391.png",
    "price": 19.99
  },
  {
    "id": 4,
    "title": "Practical MongoDB",
    "author": "F. Scott Fitzgerald",
    "description": "Get hands-on experience with MongoDB through practical examples and master database administration.",
    "cover_image": "https://itbook.store/img/books/9781484206485.png",
    "price": 35.99
  },
  {
    "id": 5,
    "title": "The Definitive Guide to MongoDB",
    "author": "Herman Melville",
    "description": "Embark on a comprehensive journey through MongoDB, covering everything from basic concepts to advanced techniques.",
    "cover_image": "https://itbook.store/img/books/9781484211830.png",
    "price": 45.99
  },
  {
    "id": 6,
    "title": "MongoDB Performance",
    "author": "J.R.R. Tolkien",
    "description": "Optimize the performance of your MongoDB databases and applications with expert tips.",
    "cover_image": "https://itbook.store/img/books/9781484268780.png",
    "price": 27.99
  },
  {
    "id": 7,
    "title": "Pentaho Analytics",
    "author": "J.D. Salinger",
    "description": "Leverage Pentaho Analytics to unlock the potential of MongoDB and gain valuable insights.",
    "cover_image": "https://itbook.store/img/books/9781782168355.png",
    "price": 39.99
  },
  {
    "id": 8,
    "title": "Pentaho Analytics Cookbook",
    "author": "J.R.R. Tolkien",
    "description": "Master data analysis with Pentaho Analytics and MongoDB through practical recipes.",
    "cover_image": "https://itbook.store/img/books/9781783553273.png",
    "price": 32.99
  },
  {
    "id": 9,
    "title": "Web Development with MongoDB",
    "author": "Gabriel Garcia Marquez",
    "description": "Unlock the potential of web development with MongoDB and Node.js.",
    "cover_image": "https://itbook.store/img/books/9781785287527.png",
    "price": 28.99
  },
  {
    "id": 10,
    "title": "MongoDB Cookbook",
    "author": "Leo Tolstoy",
    "description": "Dive into MongoDB with this collection of recipes covering basic management to advanced development.",
    "cover_image": "https://itbook.store/img/books/9781785289989.png",
    "price": 37.99
  }
]



const  BookMarketplace = () => {
  const renderBooksView = () => {
    return (
      <ul className="book-list">
        {booksData.map(book => (
          <BookItem
            key={book.id}
            cover={book.cover_image}
            title={book.title}
            author={book.author}
            description={book.description}
            price={book.price}
          />
        ))}
      </ul>
    );
  };  
  
    return (
      <>
        <Header />
        <div className="marketplace-page">
          <h1 className="marketplace-head">Book Marketplace</h1>
          {renderBooksView()}
        </div>
      </>
    );
  
}

export default BookMarketplace;
