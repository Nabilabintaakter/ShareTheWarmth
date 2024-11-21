import review1 from '../../assets/review-1.jpg';
import review2 from '../../assets/review-2.webp';
import review3 from '../../assets/review-3.jpeg';
import review4 from '../../assets/review-4.png';
import review5 from '../../assets/review-5.jpeg';
import review6 from '../../assets/review-6.webp';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Reviews = () => {
    return (
        <>
            <div data-aos="fade" data-aos-duration="1200"
                data-aos-delay="200" className="w-full flex justify-center mx-auto mb-[60px] lg:mb-24">
                <Swiper
                    slidesPerView={1} 
                    spaceBetween={20} 
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper max-w-[300px] md:max-w-[990px] mx-auto space-x-4 p-4"
                    breakpoints={{
                        320: {
                            slidesPerView: 1, 
                            spaceBetween: 20,  
                        },
                        480: {
                            slidesPerView: 1,  
                            spaceBetween: 20,  
                        },
                        768: {
                            slidesPerView: 1,  
                            spaceBetween: 20,  
                        },
                        1024: {
                            slidesPerView: 2,  
                            spaceBetween: 30,  
                        },
                        1200: {
                            slidesPerView: 3,  
                            spaceBetween: 30,  
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className='bg-[#FFA415] h-[400px] md:h-[450px] lg:h-[500px] rounded-xl p-6 md:p-8 flex flex-col justify-between'>
                            <div className='flex items-center gap-3'>
                                <div><img className='w-12 h-12 rounded-full object-cover' src={review1} alt="" /></div>
                                <div>
                                    <h1 className='text-white font-bold text-sm md:text-lg'>Minhazur Rahman</h1>
                                    <p className='text-xs font-medium text-white'>Volunteer</p>
                                </div>
                            </div>
                            <div className="flex-grow flex justify-center items-center">
                                <p className='w-full text-white text-xs md:text-base text-center'>I’m so glad I found this platform! Donating winter clothes has never been this easy. It's heartwarming to know that my contribution is directly helping those in need. The website is user-friendly, and I highly recommend it to anyone looking to make a difference.</p>
                            </div>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#FF5528] h-[400px] md:h-[450px] lg:h-[500px] rounded-xl p-6 md:p-8 flex flex-col justify-between'>
                            <div className='flex items-center gap-3'>
                                <div><img className='w-12 h-12 rounded-full object-cover bg-white' src={review2} alt="" /></div>
                                <div>
                                    <h1 className='text-white font-bold text-sm md:text-lg'>Mohammad Ali</h1>
                                    <p className='text-xs font-medium text-white'>Volunteer</p>
                                </div>
                            </div>
                            <div className="flex-grow flex justify-center items-center">
                                <p className='w-full text-white text-xs md:text-base text-center'>The platform is incredibly well-organized, making the process of donating so simple and efficient. The user authentication is smooth, and I appreciate the beautiful design and seamless experience it provides. It’s a great initiative for a worthy cause, and I’m proud to be a part of it.</p>
                            </div>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#FFA415] h-[400px] md:h-[450px] lg:h-[500px] rounded-xl p-6 md:p-8 flex flex-col justify-between'>
                            <div className='flex items-center gap-3'>
                                <div><img className='w-12 h-12 rounded-full object-cover' src={review3} alt="" /></div>
                                <div>
                                    <h1 className='text-white font-bold text-sm md:text-lg'>Muhibur Rahman</h1>
                                    <p className='text-xs font-medium text-white'>Volunteer</p>
                                </div>
                            </div>
                            <div className="flex-grow flex justify-center items-center">
                                <p className='w-full text-white text-xs md:text-base text-center'>This platform has truly simplified the process of donating winter clothes. I feel much more connected to the cause, knowing that my small contribution makes a big difference. The website is easy to navigate and provides all the necessary details, making it a very trustworthy platform.</p>
                            </div>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-[#90B3D2] h-[400px] md:h-[450px] lg:h-[500px] rounded-xl p-6 md:p-8 flex flex-col justify-between'>
                            <div className='flex items-center gap-3'>
                                <div><img className='w-12 h-12 rounded-full object-cover bg-white' src={review4} alt="" /></div>
                                <div>
                                    <h1 className='text-white font-bold text-sm md:text-lg'>Rafiq Ahmed</h1>
                                    <p className='text-xs font-medium text-white'>Volunteer</p>
                                </div>
                            </div>
                            <div className="flex-grow flex justify-center items-center">
                                <p className='w-full text-white text-xs md:text-base text-center'>What I love about this website is how it blends convenience and transparency. Donating winter clothes was easy, and the process felt secure and well-managed. It's a thoughtful initiative that goes beyond just helping the less fortunate; it creates a community of givers. Keep it up!</p>
                            </div>
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Reviews;
