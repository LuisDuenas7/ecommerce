import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/login'



const Login = () => {

    const {handleSubmit, register} = useForm( )
    const navigate = useNavigate()
    const [userObj, setUserObj] = useState({})
// ===========================================================================================
    const onSubmit = (data) => {
                setUserObj(data)
    }

//============================================================================================ 

    useEffect(() => {
        if(userObj.email){
            loginUser(userObj)
                .then((res) => {
                    localStorage.setItem("token", res.access)
                })
                .then(() => {
                    navigate('/shop')
                })
        }
     //eslint-disable-next-line   
    }, [userObj])

// ================================================================================================
    return (
        <div className='box-login'>
            <h1 className='header-text'>Jewelry E-Shop</h1>
           <div className='login-data'> 
            <form className='login-data' onSubmit={handleSubmit(onSubmit)}  >
                <label className='normal-text' htmlFor='email'>Email</label>
                <input className='input-login' id='email' placeholder='example@example.com' type='email' {...register('email')} />
                <label className='normal-text' htmlFor='password'>Password</label>
                <input className='input-login' id='password' placeholder='Your password' type='password' {...register('password')} />
                <input className='button' type='submit' />
            </form>
        </div>
    </div>
    )
}

export default Login