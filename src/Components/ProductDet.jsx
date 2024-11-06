import React, { useEffect, useState } from 'react'
import { items } from './Data'
import { useParams } from 'react-router-dom'
import Product from './Product'

const ProductDet = ({ cart, setCart }) => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [relatedproducts, setRelatedProducts] = useState([])
  useEffect(() => {
    const filterProducts = items.filter((product) => product.id == id)
    const relatedProducts = items.filter((p) => p.category == product.category)
    setProduct(filterProducts[0])
    setRelatedProducts(relatedProducts)
  }, [id, product.category])
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id, price, title, description, imgSrc
    }
    setCart([...cart, obj])
    // toast.success('Item added', {
    //     position: "top-right",
    //     autoClose: 1500,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",
    //     transition: Bounce,
    //     });

  }
  return (
    <>
      {/* <ToastContainer
                                        position="top-right"
                                        autoClose={1500}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="dark"
                                        transition:Bounce
                                            /> */}
      <div className='container '>
        <div className='img'><img src={product.imgSrc} alt="" /></div>
        <div className='title'>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <button className='button'> ₹ {product.price}</button>
          <button onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)} className='button'>Add to Cart</button>
        </div>
      </div>
      <h1 className='text-center'>Related Products</h1>
      <Product Cart cart={cart} setCart={setCart} items={relatedproducts} />
    </>
  )
}

export default ProductDet
