import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import axios from 'axios'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './ProductDetailes/ProdutDetails'

const App = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios('https://dummyjson.com/products');

      setProducts(response.data.products);

    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
