import { useEffect } from 'react';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Header from '../Header/Header';
import HowItWorks from '../HowItWorks/HowItWorks';
import Slider from '../Slider/Slider';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    useEffect(()=>{
        document.title = 'Home | Share the Warmth';
    },[])
    return (
        <div >
            {/* banner starts */}
            <Slider></Slider>
            {/* about section starts*/}
            <section className='w-[90%] md:w-[75%] mx-auto'>
                <div className='my-8 lg:my-14'>
                    <Header title='About Us' subTitle='How users can contribute'></Header>
                </div>
                <About></About>
            </section>
            {/* How it works section starts */}
            <section>
                <HowItWorks></HowItWorks>
            </section>
            {/* Blogs section starts */}
            <section className='w-[90%] md:w-[75%] mx-auto'>
                <div className='my-8 lg:my-14'>
                    <Header title='Blogs' subTitle='Winter Donation Stories'></Header>
                </div>
                <Blogs></Blogs>
            </section>
            {/* testimonial section starts */}
            <section className='w-[90%] md:w-[75%] mx-auto'>
                <div className='my-8 lg:my-14'>
                    <Header title='Testimonial' subTitle='What People Think About Us'></Header>
                </div>
                <Testimonial></Testimonial>
            </section>
        </div>
    );
};

export default Home;