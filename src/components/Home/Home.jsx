
import About from '../About/About';
import Header from '../Header/Header';
import HowItWorks from '../HowItWorks/HowItWorks';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div >
            <Slider></Slider>
            {/* about section starts*/}
            <section className='w-[75%] mx-auto'>
                <div className='my-8 lg:my-14'>
                    <Header title='About Us' subTitle='How users can contribute'></Header>
                </div>
                <About></About>
            </section>
            {/* How it works section starts */}
            <section>
                <HowItWorks></HowItWorks>
            </section>
        </div>
    );
};

export default Home;