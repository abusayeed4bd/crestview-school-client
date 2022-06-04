import { faBusAlt, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import bus from '../../Image/icon/bus.png'
import sports from '../../Image/icon/sport.png'
import education from '../../Image/icon/education.png'
import travel from '../../Image/icon/travel-map.png'
import creativity from '../../Image/icon/creativity.png'
import computer from '../../Image/icon/computer.png'

const Services = () => {
    return (
        <div className="py-5">
            <div className="container ">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div data-aos="zoom-in" class="card my-2 bg-light border-0 shadow-sm">
                            <div class="card-body d-flex justify-content-between">
                                <div className="icon h-100 me-3">
                                    <img src={bus} alt="" />
                                </div>
                                <div className="text text-start">
                                    <h2 className='text-secondary'>Service title</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptas!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div data-aos="zoom-in" class="card my-2  bg-light border-0 shadow-sm">
                            <div class="card-body d-flex justify-content-between">
                                <div className="icon h-100 me-3">
                                    <img src={sports} alt="" />
                                </div>
                                <div className="text text-start">
                                    <h2 className='text-secondary'>Service title</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptas!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div data-aos="zoom-in" class="card my-2  bg-light border-0 shadow-sm">
                            <div class="card-body d-flex justify-content-between">
                                <div className="icon h-100 me-3">
                                    <img src={education} alt="" />
                                </div>
                                <div className="text text-start">
                                    <h2 className='text-secondary'>Service title</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptas!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div data-aos="zoom-in" class="card my-2  bg-light border-0 shadow-sm">
                            <div class="card-body d-flex justify-content-between">
                                <div className="icon h-100 me-3">
                                    <img src={travel} alt="" />
                                </div>
                                <div className="text text-start">
                                    <h2 className='text-secondary'>Service title</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptas!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div data-aos="zoom-in" class="card my-2  bg-light border-0 shadow-sm">
                            <div class="card-body d-flex justify-content-between">
                                <div className="icon h-100 me-3">
                                    <img src={creativity} alt="" />
                                </div>
                                <div className="text text-start">
                                    <h2 className='text-secondary'>Service title</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptas!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div data-aos="zoom-in" class="card my-2  bg-light border-0 shadow-sm">
                            <div class="card-body d-flex justify-content-between">
                                <div className="icon h-100 me-3">
                                    <img src={computer} alt="" />
                                </div>
                                <div className="text text-start">
                                    <h2 className='text-secondary'>Service title</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptas!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;