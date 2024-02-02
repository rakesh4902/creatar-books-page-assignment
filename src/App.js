import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookMarketplace from './components/BookMarketplace';
import Submission from './components/Submission';


const App=()=>(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/BookMarketplace" element={<BookMarketplace />} />
      <Route path="/Submission" element={<Submission />}/>
    </Routes>
  </Router>

)

export default App;
