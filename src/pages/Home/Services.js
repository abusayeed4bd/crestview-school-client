import { faBusAlt, faCarAlt, faSchoolCircleExclamation, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Services = () => {
    return (
        <div className="py-5">
            <div className="container ">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div data-aos="zoom-in" class="card my-3 bg-light border-0 shadow-sm">
                            <div class="card-body d-flex justify-content-between">
                                <div className="icon h-100 me-3">
                                    <FontAwesomeIcon className="display-3 text-primary" icon={faSchoolCircleExclamation}></FontAwesomeIcon>
                                </div>
                                <div className="text text-start">
                                    <h2 className='text-primary'>Service title</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptas!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div data-aos="zoom-in" class="card my-3  bg-light border-0 shadow-sm">
                            <div class="card-body d-flex justify-content-between">
                                <div className="icon h-100 me-3">
                                    <FontAwesomeIcon className="display-3 text-primary" icon={faBusAlt} />
                                </div>
                                <div className="text text-start">
                                    <h2 className='text-primary'>Service title</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptas!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div data-aos="zoom-in" class="card my-3  bg-light border-0 shadow-sm">
                            <div class="card-body d-flex justify-content-between">
                                <div className="icon h-100 me-3">
                                    <FontAwesomeIcon className="display-3 text-primary" icon={faBusAlt} />
                                </div>
                                <div className="text text-start">
                                    <h2 className='text-primary'>Service title</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptas!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div data-aos="zoom-in" class="card my-3  bg-light border-0 shadow-sm">
                            <div class="card-body d-flex justify-content-between">
                                <div className="icon h-100 me-3">
                                    <FontAwesomeIcon className="display-3 text-primary" icon={faBusAlt} />
                                </div>
                                <div className="text text-start">
                                    <h2 className='text-primary'>Service title</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptas!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div data-aos="zoom-in" class="card my-3  bg-light border-0 shadow-sm">
                            <div class="card-body d-flex justify-content-between">
                                <div className="icon h-100 me-3">
                                    <FontAwesomeIcon className="display-3 text-primary" icon={faBusAlt} />
                                </div>
                                <div className="text text-start">
                                    <h2 className='text-primary'>Service title</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, voluptas!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div data-aos="zoom-in" class="card my-3  bg-light border-0 shadow-sm">
                            <div class="card-body d-flex justify-content-between">
                                <div className="icon h-100 me-3">
                                    <FontAwesomeIcon className="display-3 text-primary" icon={faBusAlt} />
                                </div>
                                <div className="text text-start">
                                    <h2 className='text-primary'>Service title</h2>
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