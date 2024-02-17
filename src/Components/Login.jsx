import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import {app} from '../Config/FirebaseConfig'
import {Input_Field} from './Input_Field'
import { Custom_Button } from './Custom_Button'

const Login = () => {
    const navigate=useNavigate();
    const [data, setData] = useState({})

    const change_handle = (e) => {
        const {value, id} = e.target

        setData({...data, [id]:value})

    }

    const auth = getAuth(app);
    const submit_handle = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         console.log(user)
         navigate("/home")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      

    }
    // console.log(data)
    return (

<center>
<br /><br /><br />
            <form onSubmit={submit_handle} className='bg-info rounded-md max-w-md py-6 px-3 grid grid-cols-2 w-50  gap-5'>
<br /><br />
                <div className='text-primary_color col-span-2 text-center text-3xl font-bold'>
                    <h1>
                        LOGIN
                    </h1>
                </div>
                <div className='col-span-2'>
                    <Input_Field id='email' type='email' required={true} onChange={change_handle} placeholder='Email Address' />
                </div><br />
                <div className='col-span-2'>
                    <Input_Field id='password' required={true} onChange={change_handle} type='password' placeholder='Password' />
                </div><br />
                <div className='col-span-2'>
                    <Custom_Button type='submit' >
                      Login
                    </Custom_Button>
                </div><br />
                <div className='col-span-2 space-x-1 text-center'>
                    <span>Don't have account </span>
                    <Link to='/' className='underline text-primary_color'>
                        Signup now
                    </Link>
                </div>
                <br /><br />
            </form>
            </center>
    )
}

export default Login
