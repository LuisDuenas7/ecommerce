import { useEffect, useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCategoriesThunk, setProductThunk,setSearchNameThunk } from "../actions"
import ProductItem from "../components/ProductItem"



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
    const list = productArr.map((item) => <ProductItem key={item.id} prodObj={item} />)
    
    const categoriesList = categoriesArr.map(item => <button key={item.id} onClick={() => setCurrentCategory(item.id)} >{item.name}</button>) 

// =====================================================================================
const handlerCategories=()=>{
    setCurrentCategory('')
   
}

   
// ======================================================================================   
    return (
        <div className="box-shop">
            <div>
             <button onClick={()=> navigate('/cart/')}> Cart</button>
             <button onClick={()=> navigate('/login/')}> Logout</button>
            </div>

            <h1 className="header-text" >Jewelry Shop</h1>
              <input className="input-login" placeholder="Search" onChange={(e)=> setSearchName(e.target.value) }></input>
             <button onClick={handlerCategories}> All products </button>
            
            {categoriesList}
            {list}
        </div>
    )
}
export default Shop