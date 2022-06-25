import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading';
import SingleClass from './SingleClass';

const Classes = () => {
    const { data: classes, isLoading } = useQuery('classes', () => fetch('https://crestview-school.herokuapp.com/classes').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="container py-3">
            <div className="d-flex justify-content-center align-items-center">
                <div style={{ height: '2px', width: '40px' }} className="bg-secondary " ></div>
                <p className="text-secondary fs-5 mt-3 mx-2">Popular Classes</p>
                <div style={{ height: '2px', width: '40px' }} className="bg-secondary" ></div>
            </div>
            <h2 className='text-center text-primary display-5 fw-bold'>Classes for Your Kids</h2>
            <div className="row card-group row-cols-1 row-cols-md-2 row-cols-lg-3">
                {
                    classes.map(singleClass => <SingleClass singleClass={singleClass}></SingleClass>)
                }
            </div>
        </div>
    );
};

export default Classes;