import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart,setCart}) => {
  return (
    <>
    <div className='container ' style={{width:'55%',flexDirection:'column'}}>
      {
        cart.length==0 ?(
          <>
          <div className='text-center'>
            <h1>Your cart is empty</h1>
            <Link className='btn btn-warning' to={'/'}>Continue Shopping</Link>
          </div>
          </>
        ):cart.map((product)=>{

          return(
            <><div className="card mb-3 my-5" style={{width:'700px',height:'300px',textAlign:'center'}}>
            <div className="row g-0" style={{justifyContent:'center'}}>
              <div className="col-md-8 " style={{width:'100%'}}>
                <img src={product.imgSrc} style={{width:'120px',textAlign:'center'}} className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title" >{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className='btn btn-primary'>₹ {product.price}</button>
                                                    <button className='btn btn-success'>Buy Now</button>
                  
                </div>
              </div>
            </div>
          </div></>
          ) 
        })}
      
      </div>
      {
        cart.length!=0 && <div className='text-center '>
        <button onClick={()=>setCart('') }className='btn btn-primary ' style={{margin:'30px'}}>Clear Cart</button>
        <button className='btn btn-warning'>Checkout</button>
      </div>
      }
      
    </>
  )
}

export default Cart
