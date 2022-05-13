import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCartProductsThunk } from "../actions"
import CartProduct from "../components/cartProduct"
import { postCheckout } from "../services/login"


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
        <div className="box-cart">
        <h1 className="header-text">Cart</h1>
        <div>
            <button onClick={()=> navigate(-1)}> Continue Shopping </button>
        </div>
        {list}
        <button onClick={()=> {total ? setConfirmCheckout(true) : alert(" You have no items in your shopping cart.")} } >Checkout</button>
        <h4> Total ${total}</h4>
        </div>

    )
}
export default Cart