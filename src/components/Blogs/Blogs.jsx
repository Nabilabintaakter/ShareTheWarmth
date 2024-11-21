import { Link } from 'react-router-dom';
import blog2 from '../../assets/blog-2.jpg'
import blog3 from '../../assets/blog-3.jpg';
import blog4 from '../../assets/blog-4.jpg';
import userEdit from '../../assets/user-avatar.png'

const Blogs = () => {
    return (
        <div>
            <div data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 mb-[60px] lg:mb-24 max-w-7xl mx-auto">
                <Link className="card card-compact bg-base-100 shadow-md group overflow-hidden">
                    <figure className='relative'>
                        <img
                            className='h-[322px] object-cover w-full transform transition-all duration-1000 group-hover:scale-110'
                            src={blog3}
                            alt="Shoes" />
                        <p className='absolute top-5 left-5 badge bg-[#FEA501] border-none text-white'>Community Impact</p>
                    </figure>
                    <div className="card-body">
                        <p className='text-[#FEA501]'>October 25, 2023</p>
                        <h4 className='text-xl font-bold hover:text-[#FEA501] transition-all duration-300'>How Donations Change Lives: A Family's Story</h4>
                        <p className='text-gray-500 pb-4 border-b-[1px] border-b-slate-300'>A touching story about how one family in Dhaka received much-needed winter clothes through our program.</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1'>
                                <img className='w-5 h-5' src={userEdit} alt="" />
                                <p className=' text-[#FEA501]'>Sarah Hossain</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>

                        </div>
                    </div>
                </Link>
                <Link className="card card-compact bg-base-100 shadow-md group overflow-hidden">
                    <figure className='relative'>
                        <img
                            className='h-[322px] object-cover w-full transform transition-all duration-1000 group-hover:scale-110'
                            src={blog2}
                            alt="Shoes" />
                        <p className='absolute top-5 left-5 badge bg-[#FEA501] border-none text-white'>Volunteer Stories</p>
                    </figure>
                    <div className="card-body">
                        <p className='text-[#FEA501]'>November 12, 2023</p>
                        <h4 className='text-xl font-bold hover:text-[#FEA501] transition-all duration-300'>The Heart of Giving: Stories from Our Volunteers</h4>
                        <p className='text-gray-500 pb-4 border-b-[1px] border-b-slate-300'>Meet the heroes behind the scenes who dedicate their time to collect and distribute winter donations.</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1'>
                                <img className='w-5 h-5' src={userEdit} alt="" />
                                <p className=' text-[#FEA501]'>Abdullah Khan</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>

                        </div>
                    </div>
                </Link>
                <Link className="card card-compact bg-base-100 shadow-md group overflow-hidden">
                    <figure className='relative'>
                        <img
                            className='h-[322px] object-cover w-full transform transition-all duration-1000 group-hover:scale-110'
                            src={blog4}
                            alt="Shoes" />
                        <p className='absolute top-5 left-5 badge bg-[#FEA501] border-none text-white'>Campaign Highlights</p>
                    </figure>
                    <div className="card-body">
                        <p className='text-[#FEA501]'>January 3, 2024</p>
                        <h4 className='text-xl font-bold hover:text-[#FEA501] transition-all duration-300'>Spreading Warmth in Sylhet's Coldest Nights</h4>
                        <p className='text-gray-500 pb-4 border-b-[1px] border-b-slate-300'>Learn how our winter donation campaign in Sylhet brought hope and comfort to families braving the harsh cold.</p>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-1'>
                                <img className='w-5 h-5' src={userEdit} alt="" />
                                <p className=' text-[#FEA501]'>Ayesha Rahman</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Blogs;