const Header = ({ title, subTitle }) => {
    return (
        <div className='flex flex-col justify-center items-center mx-auto'>
            <h1  className='text-[#FEA501] text-center text-base mb-3  md:text-lg font-semibold'>{title}</h1>
            <p data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-delay="200" className='text-3xl md:text-4xl lg:text-6xl font-bold text-black  text-center'>{subTitle}</p>
        </div>
    );
};

export default Header;