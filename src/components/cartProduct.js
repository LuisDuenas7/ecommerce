import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { changeQuantityCartThunk, deleteCartProductThunk } from "../actions"

const CartProduct=({prodObj})=>{
const dispatch=useDispatch()

// ===========================================================================
const[deleteId,setDeleteId]=useState('')
const[changeId,setChangeId]=useState('')
const[quantity,setQuantity]=useState(prodObj.quantity)



// ===========================================================================
useEffect(()=>{
    if(deleteId){
dispatch(deleteCartProductThunk(deleteId))

}},[deleteId,dispatch])




 useEffect(()=>{
     if(changeId){
         dispatch(changeQuantityCartThunk(changeId,{quantity:quantity}))
     }
 },[dispatch,changeId,quantity])

// ======================For increment & Decrement from the cart======================================================
const decrement=()=>{
        if(quantity > 1){
        setChangeId(prodObj.id) 
        setQuantity(quantity -1)
        }
     }
const increment=()=>{
   setChangeId(prodObj.id)
   setQuantity(quantity +1)

}


// ===========================================================================
    return(
     <div>
        
       <h1>{prodObj.product.name}</h1>
            <h3>Cantidad: {prodObj.quantity} </h3>
            <div>
              <button onClick={decrement}>-</button>
              <button onClick={increment}>+</button>


            </div>
            <h3>Total: ${prodObj.product.price * prodObj.quantity}</h3>
            <button onClick={()=> setDeleteId(prodObj.id) }>❌</button>
     </div>

    )
}
export default CartProduct