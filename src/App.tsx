import React from 'react';
import './App.css';
import Footer from './layout/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import OurCoffe from './pages/OurCoffe/OurCoffe';
import Pleasure from './pages/Pleasure/Pleasure';
import NotFound from './pages/NotFound/NotFound';
import CardSingle from './components/CardSingle/CardSingle';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-coffee" element={<OurCoffe />} />
          <Route path="/for-your-pleasure" element={<Pleasure />} />
          <Route path="/coffe/:id" element={<CardSingle />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
