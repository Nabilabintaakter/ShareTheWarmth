const Header = ({title,subTitle}) => {
    return (
        <div className='flex flex-col justify-center items-center mx-auto'>
            <h1 className='text-[#FEA501] text-center text-base md:text-lg font-semibold'>{title}</h1>
            <p className=' text-4xl md:text-6xl font-bold text-black text-center'>{subTitle}</p>
        </div>
    );
};

export default Header;