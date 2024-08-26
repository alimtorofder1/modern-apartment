import photo from '../../../assets/photo-building.jpg'

const Card = () => {
    return (
        <div className="card mt-10 mb-10 lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={photo}
      alt="Album" className='w-full' />
  </figure>
  <div className="card-body">
      <div className='pt-28 pr-10'>
      <h2 className="card-title text-3xl font-bold">Introducing A New Residential Complex</h2>
    <p className='text-2xl pb-8'>Luxury Apartments</p>
    <p className='w-96 h-96'>Each apartment has been individually designed to maximise space and light. Smart Home Technology installed as standard in each apartment putting you in total control of your home at the touch of a button from wherever you might be.</p>
      </div>
  </div>
</div>
    );
};

export default Card;