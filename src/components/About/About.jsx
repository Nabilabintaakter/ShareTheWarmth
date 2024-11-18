import about1 from '../../assets/about-1.jpg'
import about2 from '../../assets/about-2.jpg'

const About = () => {
    return (
        <div className=' flex flex-col lg:flex-row gap-5 lg:gap-20 lg:mb-24 mb-[330px] max-h-[510px] max-w-7xl mx-auto'>
            <div className='relative w-full lg:w-1/2'>
                <img className='w-full h-full object-cover' src={about1} alt="" />
                <div className=''><img className='bg-white pt-1 md:pt-2 pl-1 md:pl-2 absolute w-[180px] md:w-[300px] bottom-0 right-0' src={about2} alt="" /></div>
            </div>
            <div className='w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between '>
                <div className=''>
                    <h1 className='text-3xl font-bold mb-3 xl:w-8/12'>Spreading Warmth, One Donation at a Time</h1>
                    <p className='text-gray-500'>Our mission is to bridge the gap between compassionate donors and those in need during the harsh winters of Bangladesh. By connecting generous hearts with vulnerable communities, we aim to ensure no one has to endure the cold without proper clothing. Users can contribute by donating winter clothes, spreading the word, or volunteering their time to help others. Together, let’s create a warmer, kinder world.</p>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div className=' h-[84px] w-44'>
                        <p className='text-[#FEA501] text-3xl font-extrabold'>100+</p>
                        <p className='text-gray-500'>Families Received Winter Aid Last Year</p>
                    </div>
                    <div className=' h-[84px] w-48'>
                        <p className='text-[#FEA501] text-3xl font-extrabold'>8 Divisions</p>
                        <p className='text-gray-500'>Supporting Communities Across Bangladesh</p>
                    </div>
                    <div className=' h-[84px] w-44'>
                        <p className='text-[#FEA501] text-3xl font-extrabold'>50+</p>
                        <p className='text-gray-500'>Active Volunteers Contributing</p>
                    </div>
                    <div className=' h-[84px] w-44'>
                        <p className='text-[#FEA501] text-3xl font-extrabold'>Over 5,000 </p>
                        <p className='text-gray-500'>Donations Collected</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;