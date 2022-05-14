import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams,Link } from "react-router-dom"
import { setInfoProductThunk, setProductThunk } from "../actions"
import { addProductToCart } from "../services/login"
import { RiShoppingCartFill,RiHomeSmile2Fill } from "react-icons/ri";
import { MdOutlinePlusOne,MdOutlineExposureNeg1 } from "react-icons/md";

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
           
         <div className="header-product2">

         <div className="icons-header2">  
         <label htmlFor="home"> <span>  <RiHomeSmile2Fill className="icon-home" />  </span> </label>
            <button id="home" className="button-hide" onClick={()=> navigate('/shop/')}>Home</button>
           
            <label htmlFor="cart"> <span>  <RiShoppingCartFill className="icon-cart" />  </span> </label>
            <button id="cart" className="button-hide" onClick={()=> navigate('/cart/')}>Cart</button> 
          </div>
          </div>  
     
         <div className="box-description">
            <h1>{product.name}</h1>
            <h2>${product.price}</h2>
            <h3>{product.description}</h3>
          </div>
          <div className="img-prod">
            {product.images?.map((item)=> <img className="prod-images" src={item.url} alt='alt' key={item.id}/>)}
          </div>
          
          <div className=" box-content">
          <div className="box-input-categories2">
                   <button className="button-shop2" onClick={decrement}><MdOutlineExposureNeg1 className="icon-plus"/></button>
                     <h6>{quantity}</h6>
                   <button className="button-shop2" onClick={increment}><MdOutlinePlusOne className="icon-plus"/></button>
               
                <button className="button-shop2" onClick={() => setConfirm(true)} >Add To Cart</button>
         </div>


          <div className="related-products">
              <h1>Related Products</h1>          
            
            <div className="related-box1">            {
             
              filterProducts.map((product=> (
              
                <Link to={`/shop/${product.id}`}>
                <div className="box-related">  
                  <div key={product.id}>
                    <label  className="related" htmlFor="see">  
                    <h3>{product.name}</h3>
                    <img className="img-related" src={product.images[0].url} alt="" />
                     </label>
                  </div>
                  </div>
                </Link>
                ) 
                 ))
             }
           </div> 
           </div>

     </div>  
</div>
    )

}

export default Product