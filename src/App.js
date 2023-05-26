import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => (
  <div class="text-center">
    <div className="Background" />
    <Header />
    <Home />
    <Footer />
  </div>
);

export default App;