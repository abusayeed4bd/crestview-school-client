import React from 'react';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import 'swiper/css/scrollbar';
import { useQuery } from 'react-query';
import Loading from './../../shared/Loading';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch('reviews.json').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="container py-5 ">
            <div className="d-flex justify-content-center align-items-center">
                <div style={{ height: '2px', width: '40px' }} className="bg-secondary " ></div>
                <p className="text-secondary fs-5 mt-3 mx-2">Reviws</p>
                <div style={{ height: '2px', width: '40px' }} className="bg-secondary" ></div>
            </div>
            <h2 className='text-center text-primary display-5 fw-bold'>What parants say's</h2>
            <Swiper className="py-5 w-100 mx-auto"
                // install Swiper modules
                modules={[Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}

                pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            >

                <div className="">
                    {
                        reviews.map(review => <SwiperSlide>

                            <div class="card border-0 bg-light mx-auto shadow col-12 col-md-12 col-lg-6" style={{ width: '18rem' }}>
                                <div class="card-body text-center">

                                    <p className='text-muted fst-italic '>{review.comment}</p>
                                    <p className='text-primary fw-bold'>{review.name}</p>



                                </div>
                            </div>

                        </SwiperSlide>)
                    }


                </div>


            </Swiper>
        </div>
    );
};

export default Reviews;