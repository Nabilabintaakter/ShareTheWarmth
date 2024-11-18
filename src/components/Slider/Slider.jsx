import slide1 from '../../assets/slide-1.jpg'
import slide2 from '../../assets/slide-2.png'
import slide3 from '../../assets/slide-3.jpg'
import slide5 from '../../assets/slide-5.webp'

const Slider = () => {
    return (
        <div >
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full max-h-screen">
                    <div
                        className="hero"
                        style={{
                            backgroundImage: `url(${slide1})`,
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="flex justify-center lg:justify-start items-center">
                            <div className="text-white w-3/5 text-center md:text-left mt-16 ">
                                <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold">Spread Warmth, Save Lives</h1>
                                <p className="mb-5 text-sm md:text-base">
                                Join us in bringing hope this winter. Your donation of warm clothes can make a life-changing difference for those in need across Bangladesh.
                                </p>
                                <button className="btn btn-md bg-[#FEA501] rounded-md text-white hover:text-black hover:bg-white font-bold border-none transition-all duration-700">DONATE NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[400px]  xl:h-[700px]">
                    <div
                        className="hero"
                        style={{
                            backgroundImage: `url(${slide2})`,
                        }}>
                        <div className="hero-overlay bg-opacity-30"></div>

                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[400px]  xl:h-[700px]">
                <div
                        className="hero"
                        style={{
                            backgroundImage: `url(${slide3})`,
                        }}>
                        <div className="hero-overlay bg-opacity-30"></div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[400px]  xl:h-[700px]">
                <div
                        className="hero"
                        style={{
                            backgroundImage: `url(${slide5})`,
                        }}>
                        <div className="hero-overlay bg-opacity-30"></div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;