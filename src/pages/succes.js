import { useNavigate } from "react-router-dom"
import {RiHomeSmile2Fill } from "react-icons/ri";

const Succes=()=>{
 const navigate=useNavigate()
 return(
   <div className="box-succes">
     <div >

     <label htmlFor="home"> <span>  <RiHomeSmile2Fill className="icon-home-succes" />  </span> </label>
        <button className="button-hide" id="home"  onClick={()=> navigate('/shop/')}> Home </button>    
    </div>  
   <div className="text-succes"> 
    <h1 className="header-text">your purchase has been a success!!! </h1>
    </div> 

   </div>

    )
}
export default Succes