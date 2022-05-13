
import { changeQuantityInCart, deleteProductFromCart, getFilterCategories, getFilterProductByName, getFilterProducts, getProductById, getProducts, getProductsFromCart } from "../services/login"

export const actions =  {
    productSetAll : "@product/setAll",
    productInfoSetById: "@productInfo/setById",
    categoriesSetValues: "@categories/setValues",
    cartSetProducts: "@cart/setProducts",
    

}

// ===============================================================================

export const productSetAll = (data) => ({
    type : actions.productSetAll,
    payload: data
})


export const setProductThunk = (category) => {
    return (dispatch) => {
        if(category){
            getFilterProducts(category)
                .then((res) => {
                    dispatch(productSetAll(res))
                })
        }  else  {
            getProducts()
                .then((res) => {
                    dispatch(productSetAll(res))
                })
        } 
        
    }
}


export const setSearchNameThunk=(name)=>{
    return(dispatch)=>{
        if(name){
            getFilterProductByName(name)
              .then((res)=>{
             dispatch(productSetAll(res))
              })
        }
    }
}


// =================================================================================
export const setProductInfo = (data) => ({
    type: actions.productInfoSetById,
    payload: data
})


export const setInfoProductThunk = (id) => {
    return (dispatch) => {
        getProductById(id)
            .then((res) => {
                dispatch(setProductInfo(res))
            })
    }
}




// ==================================================================================

export const setCategories=(data)=>({
    type: actions.categoriesSetValues  ,
    payload:data
    })
    



    export const setCategoriesThunk =()=>{
        return(dispatch)=>{
            getFilterCategories()
              .then((res)=>{
                  dispatch(setCategories(res))
              })
        }
    }


// =========================================================================


export const setProductsToCart = (data)=>({
    type:actions.cartSetProducts,
    payload:data

})

export const setCartProductsThunk =()=>{
    return(dispatch)=>{
        getProductsFromCart()
          .then((res)=>{
              dispatch(setProductsToCart(res))
          })
    }

}


// =========================Delete Product Cart==========================================================

export const deleteCartProductThunk=(id)=>{
    return(dispatch)=>{
        deleteProductFromCart(id)
         .then(()=>{
             dispatch(setCartProductsThunk())
         })
    }

}


// =========================Change Quantity in Cart=============================================================


export const changeQuantityCartThunk=(id,data)=>{
    return(dispatch)=>{
        changeQuantityInCart(id,data)
         .then(()=>{
             dispatch(setCartProductsThunk())
         })
    }
}