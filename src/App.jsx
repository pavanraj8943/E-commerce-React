import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import axios from 'axios'
import Home from './Pages/Home'

const App = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchData()
  },[])

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
      <Header />
      <main>
        <Home products={products} />
      </main>

      <Footer />
    </div>
  )
}

export default App
