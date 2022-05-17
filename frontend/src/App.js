import React from 'react'
import { Route, BrowserRouter, Routes, useParams } from 'react-router-dom';
import ListProduct from './components/ListProduct.js';
import ProductPage from './components/ProductPage.js';
import './global.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListProduct />}>
        </Route>
        <Route exact path=":userId" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
