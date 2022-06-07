import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from './../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/');
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);

        event.target.reset();
    }
    const handleGoogleLogin = () => {
        signInWithGoogle()
    }
    return (
        <div>
            <div class="card border-primary mb-3 w-sm-75 w-50  mx-auto my-5" >
                <div class="card-header bg-primary">
                    <h2 className="fw-bold text-white">Login</h2>
                </div>
                <div class="card-body text-primary">
                    <form onSubmit={handleLogin}>
                        <div class="mb-3">
                            <label className='fs-4' for="exampleInputEmail1" class="form-label">Email address</label>
                            <input name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label className='fs-4' for="exampleInputPassword1" class="form-label">Password</label>
                            <input name='password' type="password" class="form-control" id="exampleInputPassword1" />
                        </div>

                        {
                            loading ?
                                <button class="btn btn-primary d-block w-100 fs-4 disabled" >
                                    <div class="spinner-border text-light" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </button> :
                                <input type="submit" class="btn btn-primary d-block w-100 fs-4" value='Login' />
                        }
                    </form>

                    <p className='fs-5 my-2 text-black'>New to this website? <Link className='text-decoratin-none  text-primary' to="/register">Register here</Link></p>

                    <button onClick={handleGoogleLogin} className='btn btn-outline-primary w-100'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="30" height="30"
                            viewBox="0 0 48 48"
                        ><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
                        Sign in with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;