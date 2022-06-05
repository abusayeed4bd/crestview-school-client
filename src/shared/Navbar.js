import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Image/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth)
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
            <div class="container">
                <Link to="/"><img src={logo} alt="" /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li><Link className='text-decoration-none fw-bold  fs-5 mx-4 ' to="">Home</Link></li>
                        <li><Link className='text-decoration-none fw-bold  fs-5 mx-4 ' to="">About</Link></li>
                        <li><Link className='text-decoration-none fw-bold  fs-5 mx-4 ' to="">Admission</Link></li>
                        <li><Link className='text-decoration-none fw-bold  fs-5 mx-4 ' to="">Classes</Link></li>

                    </ul>


                    <div>
                        {user ? <button onClick={logOut} class="btn btn-primary rounded-pill px-4 fs-5 fw-bold mx-auto">Logout</button> :
                            <Link to="/login" class="btn btn-primary rounded-pill px-4 fs-5 fw-bold mx-auto" >Login</Link>
                        }
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;