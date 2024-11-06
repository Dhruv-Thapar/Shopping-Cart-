import Navbar from "./Components/Navbar"
import Product from "./Components/Product"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Cart from "./Components/Cart"
import ProductDet from "./Components/ProductDet"
import SearchItem from "./Components/SearchItem"
import { useState } from "react"
import { items } from "./Components/Data"
function App() {
  const [data,setData]=useState([...items])
  const [cart,setCart]=useState([])
return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData}/>
      <Routes>
        <Route path="/" element={<Product cart={cart} setCart={setCart} items={data}/>}/>
        <Route path="/product/:id" element={<ProductDet />}/>
        <Route path="/search/:term" element={<SearchItem Cart cart={cart} setCart={setCart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
    
    
    </Routes>
    </Router>
    </>
  )
}

export default App
