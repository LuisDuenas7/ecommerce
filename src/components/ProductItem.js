import { Link } from "react-router-dom"

const ProductItem=({prodObj})=>{
    return(
        <Link to={`/shop/${prodObj.id}`}>
          <div style={{margin: "20px"}}>
                <h2>{prodObj.name}</h2>

                <h5>{prodObj.description}</h5>
                <img width='140px'   src={prodObj.images[0].url} alt='loading...'/>
                
            </div>
          
        
        </Link>
    )
}
export default ProductItem