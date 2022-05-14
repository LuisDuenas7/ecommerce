import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCartProductsThunk } from "../actions"
import CartProduct from "../components/cartProduct"
import { postCheckout } from "../services/login"
import { MdAddShoppingCart } from "react-icons/md";


const Cart =()=>{

const dispatch=useDispatch()
const cartValues=useSelector((state) => state.cart)
const navigate=useNavigate()

// ===================================================================
const[confirmCheckout,setConfirmCheckout]=useState(false)
const[total,setTotal]=useState(0)
// ====================================================================
useEffect(()=>{
  let amount=0;
  cartValues.forEach(item => amount += item.product.price* item.quantity)
  setTotal(amount)
},[cartValues])


useEffect(()=>{
    dispatch(setCartProductsThunk())
},[dispatch])


useEffect(()=>{
    if(confirmCheckout){
     postCheckout()
      .then(()=>{
         setConfirmCheckout(false)
        navigate('/cart/succes')
      }) 
    }
},[confirmCheckout,navigate])

// =====================================================================================

const list= cartValues.map((item)=> { return <CartProduct key={item.id} prodObj={item}  />})

// ============================================================================================
    return(
        <div className="box-cart3">
            <div className="header-cart3">  
            <div className="text-cart-header">
              <h1 className="header-text3">Cart</h1>
            </div> 
            <div className="icon-move">
              <label htmlFor="shop"> <span>  <MdAddShoppingCart className="icon-home" />  </span> </label>
                  <button className="button-hide" id="shop"onClick={()=> navigate(-1)}>  </button>
              </div>
            </div>  
      <div className="content-cart"> 
       <div>    
          {list}
      </div> 
      <div className="total-box">
        <button className="button-shop2" onClick={()=> {total ? setConfirmCheckout(true) : alert(" You have no items in your shopping cart.")} } >Checkout</button>
        <h4> Total ${total}</h4>
    </div>
     </div>
    </div>
    )
}
export default Cart