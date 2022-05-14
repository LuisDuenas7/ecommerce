import { Link } from "react-router-dom"

const ProductItem=({prodObj})=>{
    return(
        <Link to={`/shop/${prodObj.id}`}>
          <div className="box-item-product">
                <h2 className="name-product">{prodObj.name}</h2>
                <h5 className="description-product">{prodObj.description}</h5>
                <img className="img-product" src={prodObj.images[0].url} alt='loading...'/>
                
            </div>
          
        
        </Link>
    )
}
export default ProductItem