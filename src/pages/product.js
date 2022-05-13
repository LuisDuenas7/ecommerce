import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams,Link } from "react-router-dom"
import { setInfoProductThunk, setProductThunk } from "../actions"
import { addProductToCart } from "../services/login"

const Product =()=>{

    const {id} =useParams()
    const dispatch= useDispatch()
    const product = useSelector((state)=> state.productInfo)
    const filterProducts=useSelector(state=> state.products)
    const navigate=useNavigate()
//======================================================================= 
    const[quantity,setQuantity]=useState(1)
    const [confirm, setConfirm] = useState(false)
    
// ==========================================================================
    const decrement=()=>{
        if(quantity > 1){
        setQuantity( quantity -1)}
    }
    
    const increment = () => {
        // setConfirm(false)
        setQuantity(quantity + 1)
      }
    


// ===========================================================================
    useEffect(()=>{
     dispatch(setInfoProductThunk(id))
    },[dispatch,id])



    useEffect(() => {
        if(quantity && confirm){
          addProductToCart({
            product: id,
            quantity: quantity
          })
            .then((res) => {
              
              setConfirm(false)
            })
        }
      }, [quantity, confirm, id])


      useEffect(()=>{
      if(product.category){
          dispatch(setProductThunk(product.category.id))
      }  
      },[dispatch,product])


 //===================================================================================== 
    return(
        <div className="box-product">
           
         <div>
            <button onClick={()=> navigate('/shop/')}>Home</button>
            <button onClick={()=> navigate('/cart/')}>Cart</button> 
          </div>  

          <h1>{product.name}</h1>
          <div>
              <button onClick={decrement}>-</button>
                     <h6>{quantity}</h6>
              <button onClick={increment}>+</button>
              <br></br>
            <h2>${product.price}</h2>
             <button onClick={() => setConfirm(true)} >Add To Cart</button>
        </div>


          <h3>{product.description}</h3>
          {product.images?.map((item)=> <img width='300px' className="prod-images" src={item.url} alt='alt' key={item.id}/>)}
          
           <h1>Related Products</h1>          
            
            
            {
             
              filterProducts.map((product=> (
              
                <Link to={`/shop/${product.id}`}>
                  
                  <div key={product.id}>
                    <label  className="related" htmlFor="see">  
                    <h3>{product.name}</h3>
                    <img  width='200px' src={product.images[0].url} alt="" />
                     </label>
                  </div>
                </Link>
                ) 
                 ))
            }

        </div>
    )

}

export default Product