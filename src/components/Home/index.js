import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './index.css';

function Home() {
  return (
    <>
      <Header />
      <div className="home-page">
        <h1 className="home-head">Welcome To Books Palace</h1>
        <p className="home-para">Welcome to Books Palace, where you embark on a journey through the realm of literature. Our extensive collection of books caters to every taste and interest, offering a plethora of options for readers of all ages and preferences.
        Immerse yourself in the enchanting worlds crafted by renowned authors, from classic tales that have stood the test of time to contemporary bestsellers that captivate modern audiences. Whether you seek adventure, romance, mystery, or knowledge, Books Palace has something for everyone.
        Join our vibrant community of book enthusiasts and engage in lively discussions, share recommendations, and discover new literary treasures. At Books Palace, we believe in the transformative power of storytelling and the boundless joy of reading.</p>
        <div>
          <Link to="/bookmarketplace" className="btn">Visit Book Marketplace</Link>
          <Link to="/submission" className="btn">Submit Your Poem</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
