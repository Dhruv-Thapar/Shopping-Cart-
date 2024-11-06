import React from 'react'

import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ items, cart, setCart }) => {
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

            <div className='container'>
                <div className='row my-5' >
                    {
                        items.map((product) => {
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
                                    <div key={product.id} className="col-lg-4 col-md-6 my-3">
                                        <div className="card" style={{ width: '90%', textAlign: 'center', }}>
                                            <Link to={`/product/${product.id}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src={product.imgSrc} className="card-img-top" alt="..." /></Link>
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <button style={{margin:'5px'}}className='btn btn-primary'>₹ {product.price}</button>
                                                <button onClick={()=>addToCart(product.id, product.price, product.title, product.description, product.imgSrc)} className='btn btn-success'>Add to Cart</button>

                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Product
