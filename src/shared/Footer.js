import React from 'react'
import logo from '../Image/logo.png'

export default function Footer() {
    return (
        <div className='bg-dark py-4 text-secondary'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={logo} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ad vitae cum sequi, deserunt non quasi eligendi odit animi sapiente.</p>
                    </div>
                    <div className="col-lg-3">
                        <h3>Pages</h3>
                        <ul>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Illo, libero numquam?</li>
                            <li>Vitae, cupiditate ex!</li>
                            <li>Cum, fugit tenetur.</li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h3>Links</h3>
                        <ul>
                            <li>Lorem, ipsum dolor.</li>
                            <li>Illo, libero numquam?</li>
                            <li>Vitae, cupiditate ex!</li>
                            <li>Cum, fugit tenetur.</li>
                        </ul>
                    </div>
                </div>
                <p className='text-center mt-4'>All right reserved by &copy; Abusayeed</p>
            </div>
        </div>
    )
}
