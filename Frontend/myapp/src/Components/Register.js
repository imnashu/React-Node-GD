import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Login from './Login';

export default function Register() {
    return (
        <div className='loginform'>
            <h1>Please Register as a New user</h1>
            <form>
                <input type="text" className = 'form-control' value='' placeholder="Enter the name" />
                <br />
                <input type='email' className='form-control' value='' placeholder='Enter your email'/>
                <br/>
                <input type='password' className = 'form-control' value='' placeholder="Enter the password" />
                <br />
                <button className='btn-btn-secondary'>Register as new user</button>
                <br />
                <br />
                <h6>Already a user? Then login</h6>
                <br /><Link to='/login'><button className='btn-btn-secondary'>Login</button></Link>
            </form>

        </div>
    )
}