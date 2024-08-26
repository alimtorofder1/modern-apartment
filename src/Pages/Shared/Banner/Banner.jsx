import benner from  '../../../assets/pexels-ezeta-1996163.jpg';

const Banner = () => {
    return (
        <div className='hero pt-10'>
            <img className='rounded ... w-full ' src={benner} alt=""  />
            <div className='text-5xl text-white font-bold'>
                <h1>Modern Apartment</h1> 
                <h1> In A New Residential</h1>
                <h1>Complex</h1>
                <p className='text-xl mt-14 w-96  font-none primary-text'>Amuli is not only an architectural standout, it is reimagining life in one of the nations most storied cities.</p>
            </div>
               

        </div>
    );
};

export default Banner;