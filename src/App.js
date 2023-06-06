import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/about",
    element: <Home />
    //replace with element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
])

const App = () => (
  <>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </>
);

export default App;