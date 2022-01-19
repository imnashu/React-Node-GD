import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

export default function Login() {
    return (
        <div className="loginform">
            <h1>Please Login</h1>
            <form>
                <input type="text" className = 'form-control' value='' placeholder="Enter the name" />
                <br />
                <input type='password' className = 'form-control' value='' placeholder="Enter the password" />
                <br />
                <button className='btn-btn-secondary'>Login</button>
                <br />
                <br />
                <h6>Yet to register?</h6>
                <br /><Link to='/register'><button className='btn-btn-secondary'>Register</button></Link>
            </form>
        </div>
    )
}