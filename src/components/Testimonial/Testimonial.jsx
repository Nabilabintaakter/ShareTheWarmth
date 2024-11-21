import review1 from '../../assets/review-1.jpg';
import review2 from '../../assets/review-2.webp';
import review3 from '../../assets/review-3.jpeg';
import review4 from '../../assets/review-4.png';
import review5 from '../../assets/review-5.jpeg';
import review6 from '../../assets/review-6.webp';

const Testimonial = () => {
    return (
        <div className='w-[95%] flex justify-center mx-auto mb-[60px] lg:mb-24'>
            <div data-aos="fade" data-aos-duration="1200"
                data-aos-delay="200" className="carousel carousel-center  rounded-box max-w-[990px] mx-auto space-x-4 p-4">
                {/* 1 */}
                <div className="carousel-item">
                    <div className='bg-[#FFA415] h-[400px] rounded-xl p-8 flex flex-col justify-between'>
                        <div className='flex items-center gap-3'>
                            <div><img className='w-12 h-12 rounded-full object-cover' src={review1} alt="" /></div>
                            <div>
                                <h1 className='text-white font-bold'>Minhazur Rahman</h1>
                                <p className='text-sm font-medium'>Volunteer</p>
                            </div>
                        </div>
                        <div>
                            <p className='w-[245px] text-white'>I’m so glad I found this platform! Donating winter clothes has never been this easy. It's heartwarming to know that my contribution is directly helping those in need. The website is user-friendly, and I highly recommend it to anyone looking to make a difference.</p>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star"  />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="carousel-item">
                    <div className='bg-[#FF5528] h-[400px] rounded-xl p-8 flex flex-col justify-between'>
                        <div className='flex items-center gap-3'>
                            <div><img className='w-12 h-12 rounded-full object-cover bg-white' src={review2} alt="" /></div>
                            <div>
                                <h1 className='text-white font-bold'>Mohammad Ali</h1>
                                <p className='text-sm font-medium'>Volunteer</p>
                            </div>
                        </div>
                        <div>
                            <p className='w-[245px] text-white'>The platform is incredibly well-organized, making the process of donating so simple and efficient. The user authentication is smooth, and I appreciate the beautiful design and seamless experience it provides. It’s a great initiative for a worthy cause, and I’m proud to be a part of it.</p>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star"  />
                            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked/>
                            <input type="radio" name="rating-1" className="mask mask-star"  />
                            <input type="radio" name="rating-1" className="mask mask-star"  />
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="carousel-item">
                    <div className='bg-[#FFA415] h-[400px] rounded-xl p-8 flex flex-col justify-between'>
                        <div className='flex items-center gap-3'>
                            <div><img className='w-12 h-12 rounded-full object-cover' src={review3} alt="" /></div>
                            <div>
                                <h1 className='text-white font-bold'>Muhibur Rahman</h1>
                                <p className='text-sm font-medium'>Volunteer</p>
                            </div>
                        </div>
                        <div>
                            <p className='w-[245px] text-white'>This platform has truly simplified the process of donating winter clothes. I feel much more connected to the cause, knowing that my small contribution makes a big difference. The website is easy to navigate and provides all the necessary details, making it a very trustworthy platform.</p>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star"  />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked/>
                            <input type="radio" name="rating-1" className="mask mask-star"  />
                        </div>
                    </div>
                </div>
                {/* 4 */}
                <div className="carousel-item">
                    <div className='bg-[#90B3D2] h-[400px] rounded-xl p-8 flex flex-col justify-between'>
                        <div className='flex items-center gap-3'>
                            <div><img className='w-12 h-12 rounded-full object-cover bg-white' src={review4} alt="" /></div>
                            <div>
                                <h1 className='text-white font-bold'>Rafiq Ahmed</h1>
                                <p className='text-sm font-medium'>Volunteer</p>
                            </div>
                        </div>
                        <div>
                            <p className='w-[245px] text-white'>What I love about this website is how it blends convenience and transparency. Donating winter clothes was easy, and the process felt secure and well-managed. It's a thoughtful initiative that goes beyond just helping the less fortunate; it creates a community of givers. Keep it up!</p>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star"  />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                        </div>
                    </div>
                </div>
                {/* 5 */}
                <div className="carousel-item">
                    <div className='bg-[#FF5528] h-[400px] rounded-xl p-8 flex flex-col justify-between'>
                        <div className='flex items-center gap-3'>
                            <div><img className='w-12 h-12 rounded-full object-cover' src={review5} alt="" /></div>
                            <div>
                                <h1 className='text-white font-bold'>Imran Hossain</h1>
                                <p className='text-sm font-medium'>Volunteer</p>
                            </div>
                        </div>
                        <div>
                            <p className='w-[245px] text-white'>I’ve always wanted to help those in need, and this website made it so easy for me to donate winter clothing. The user-friendly design and secure authentication system made me feel confident about my contributions. It’s an amazing initiative, and I’ll continue to support it!</p>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star"  />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                        </div>
                    </div>
                </div>
                {/* 6 */}
                <div className="carousel-item">
                    <div className='bg-[#90B3D2] h-[400px] rounded-xl p-8 flex flex-col justify-between'>
                        <div className='flex items-center gap-3'>
                            <div><img className='w-12 h-12 rounded-full object-cover' src={review6} alt="" /></div>
                            <div>
                                <h1 className='text-white font-bold'>Shofiq Hossain</h1>
                                <p className='text-sm font-medium'>Volunteer</p>
                            </div>
                        </div>
                        <div>
                            <p className='w-[245px] text-white'>Such an incredible and meaningful platform! The donation process was seamless, and I could easily track my contributions. I appreciate how this website ensures that clothes reach the right people. It’s heartwarming to see technology being used for such a noble cause.</p>
                        </div>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star"  />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked/>
                            <input type="radio" name="rating-1" className="mask mask-star"  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;