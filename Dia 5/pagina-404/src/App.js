import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Pagina404 from './pages/Pagina404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
