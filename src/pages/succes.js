import { useNavigate } from "react-router-dom"

const Succes=()=>{
 const navigate=useNavigate()
 return(
   <div className="box-succes">
     <div >
        <button onClick={()=> navigate('/shop/')}> Home </button>    
    </div>  
    <h1 className="header-text">Gracias Por su compra!!!</h1>


   </div>

    )
}
export default Succes