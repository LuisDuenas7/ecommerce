import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCategoriesThunk, setProductThunk,setSearchNameThunk } from "../actions"
import ProductItem from "../components/ProductItem"
import { RiShoppingCartFill,RiDoorLockFill } from "react-icons/ri";



const Shop=()=>{

    const dispatch = useDispatch()
    const productArr = useSelector((state) => state.products)
    const categoriesArr= useSelector((state) => state.categories)
    const navigate=useNavigate()
//======================================================================================= 
    const[currentCategory,setCurrentCategory]=useState('')
    const[searchName,setSearchName]=useState('')
    
    
//======================================================================================= 
    useEffect(() => {
        if(searchName){

            dispatch(setSearchNameThunk(searchName))   

        }else{
        
        dispatch(setProductThunk(currentCategory))
        dispatch(setCategoriesThunk())
        }
    }, [dispatch,currentCategory,searchName])

    

// =======================================================================================
    const list = productArr.map(item => <ProductItem key={item.id} prodObj={item} />)
    
    const categoriesList = categoriesArr.map(item => <button className="button-shop" key={item.id} onClick={() => setCurrentCategory(item.id)} >{item.name}</button>) 

// =====================================================================================
const handlerCategories=()=>{
    setCurrentCategory('')
   
}

   
// ======================================================================================   
    return (
        <div className="box-shop">
          <div className="header-shop">
             <div className="header-tittle"> 
               <h1 className="header-text-shop" >Jewelry Shop</h1>
            </div>   
                 <div className="icons-header"> 
                    <label htmlFor="cart"> <span>  <RiShoppingCartFill className="icon" />  </span> </label>
                    <button className="button-hide" id="cart" onClick={()=> navigate('/cart/')}></button>
               
                   <label htmlFor="logout"> <span>  < RiDoorLockFill className="icon-logout" />  </span> </label>
                   <button className="button-hide" id="logout" onClick={()=> navigate('/login/')}> Logout</button>
                </div>
          </div>
          
          <div className="box-content">  

              <div className="box-input-categories">  
                <div className="input-search">
                   <input className="input-search-component" placeholder="Search" onChange={(e)=> setSearchName(e.target.value) }></input>
                 </div> 
                 
                 <div className="filter-search"> 
                   <button className="button-shop" onClick={handlerCategories}> All products </button>
                   {categoriesList}
                  </div>
               </div>  

              <div className="box-content-products1">
                    
                    {list}
               </div>

            </div> 
             <div className="footer">
                 <h4>Luis Dueñas 2022®</h4></div>
            <div>     

          </div>   
        </div>
    )
}
export default Shop