import React from 'react';

const SingleClass = ({ singleClass }) => {
    const { img, age, descriptions, className, seat, fee, time } = singleClass;

    return (
        <div>
            <div class="card border-0 bg-light shadow-sm mb-3 text-center pb-3">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body border-bottom">
                    <h5 class="card-title fs-3 fw-bold">{className}</h5>
                    <p class="card-text fw-bold">{descriptions}</p>



                </div>
                <div className="card-body">
                    {/* table */}
                    <div>
                        <div className="row border-bottom border-box ">
                            <div className="col-6 border-end">
                                <strong>Age of Kids:</strong>
                            </div>
                            <div className="col-6">
                                <p className="m-0">{age}</p>
                            </div>
                        </div>
                        <div className="row border-bottom">
                            <div className="col-6 border-end">
                                <strong>Total Seat:</strong>
                            </div>
                            <div className="col-6">
                                <p className="m-0">{seat}</p>
                            </div>
                        </div>
                        <div className="row border-bottom">
                            <div className="col-6 border-end">
                                <strong>Time:</strong>
                            </div>
                            <div className="col-6">
                                <p className="m-0">{time}</p>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-6 border-end">
                                <strong>Tuition Fees:</strong>
                            </div>
                            <div className="col-6">
                                <p className="m-0">{fee} /month</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn btn-primary rounded-pill px-4 fs-5 fw-bold mx-auto">Join Now</button>

            </div>
        </div>
    );
};

export default SingleClass;