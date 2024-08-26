import Photo1 from  '../../../src/assets/worms_eye_view_of_building_windows_architecture_in_black_background_4k_hd_black_background.jpg';
import author1 from '../../../src/assets/author-1.webp';
import author2 from '../../assets/author-2.jpg';
import author3 from '../../assets/author-3.jpg';

const Slider = () => {
    return (
      <div className="carousel w-full">
       
  <div id="slide1" className="carousel-item hero relative w-full">
    <img
      src={Photo1}
      className="w-full" />
            <div className=' text-white mx-auto'>
      <div className='text-5xl font-bold'>
      <img className='w-20 rounded-full mx-auto' src={author1}  />
      <h2 className='text-2xl text-center font-serif mt-4'>Mr johon</h2>
      <p className='text-xs text-center font-serif'>Engineer</p>
      </div>
     <div className='mt-6 text-center max-w-96'>
     <p>Each apartment has been individually designed to maximise space and light. Smart Home Technology installed as standard in each apartment  putting you in total control of your home at the touch of a button from wherever you might be.</p>
     </div>
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative hero w-full">
    <img
      src={Photo1}
      className="w-full" />
            <div className=' text-white mx-auto'>
      <div className='text-5xl font-bold'>
      <img className='w-20 rounded-full mx-auto' src={author1}  />
      <h2 className='text-2xl text-center font-serif mt-4'>Mr johon</h2>
      <p className='text-xs text-center font-serif'>Doctor</p>
      </div>
     <div className='mt-6 text-center max-w-96'>
     <p>Each apartment has been individually designed to maximise space and light. Smart Home Technology installed as standard in each apartment  putting you in total control of your home at the touch of a button from wherever you might be.</p>
     </div>
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative hero w-full">
    <img
      src={Photo1}
      className="w-full" />
            <div className=' text-white mx-auto'>
      <div className='text-5xl font-bold'>
      <img className='w-20 rounded-full mx-auto' src={author3}  />
      <h2 className='text-2xl text-center font-serif mt-4'>Mr Somun</h2>
      <p className='text-xs text-center font-serif'>Engineer</p>
      </div>
     <div className='mt-6 text-center max-w-96'>
     <p>Each apartment has been individually designed to maximise space and light. Smart Home Technology installed as standard in each apartment  putting you in total control of your home at the touch of a button from wherever you might be.</p>
     </div>
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative hero w-full">
    <img
      src={Photo1}
      className="w-full" />
            <div className=' text-white mx-auto'>
      <div className='text-5xl font-bold'>
      <img className='w-20 rounded-full mx-auto' src={author2}  />
      <h2 className='text-2xl text-center font-serif mt-4'>Mr Rajon</h2>
      <p className='text-xs text-center font-serif'>Engineer</p>
      </div>
     <div className='mt-6 text-center max-w-96'>
     <p>Each apartment has been individually designed to maximise space and light. Smart Home Technology installed as standard in each apartment  putting you in total control of your home at the touch of a button from wherever you might be.</p>
     </div>
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Slider;