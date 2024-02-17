import React, { useState } from 'react'
import { Custom_Button } from './Custom_Button'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from '../Config/FirebaseConfig'
import { Input_Field } from './Input_Field'

const Signup = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({})

    const change_handle = (e) => {
        const { value, id } = e.target

        setData({ ...data, [id]: value })

    }

    const auth = getAuth(app);
    const submit_handle = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                navigate("/home")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });

    }

    // console.log(data)
    return (
        <center>
            <br />
            <form onSubmit={submit_handle} className='bg-info rounded-md max-w-md py-6 px-3 grid grid-cols-2 w-50  gap-5'>
<br />
                <div className='text-primary_color col-span-2 text-center text-3xl font-bold'>
                    <h1>
                        SIGNUP
                    </h1>
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <Input_Field id='first_name' type='text' required={true} onChange={change_handle} placeholder='First Name' />
                </div><br />
                <div className='col-span-2 md:col-span-1'>
                    <Input_Field id='last_name' type='text' required={true} onChange={change_handle} placeholder='Last Name' />
                </div>
                <br />
                <div className='col-span-2'>
                    <Input_Field id='username' type='text' required={true} onChange={change_handle} placeholder='Username' />
                </div><br />
                <div className='col-span-2'>
                    <Input_Field id='phone_number' type='number' required={true} onChange={change_handle} placeholder='Phone Number' />
                </div><br />
                <div className='col-span-2'>
                    <Input_Field id='email' type='email' required={true} onChange={change_handle} placeholder='Email Address' />
                </div><br />
                <div className='col-span-2'>
                    <Input_Field id='password' required={true} onChange={change_handle} type='password' placeholder='Password' />
                </div>
                <br />

                <div className='col-span-2'>
                    <Custom_Button type='submit' >
                        Signup
                    </Custom_Button>
                </div><br />
                <div className=''>
                    <span>Already have account </span>
                    <Link to='/login' className='underline text-primary_color'>
                        Login now
                    </Link>
                </div>
                <br />
            </form>
           <br /><br /><br />
        </center>
    )
}

export default Signup
