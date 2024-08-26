import { Link } from "react-router-dom";


const BuildingCard = ({building}) => {

  const {estate_title , description , area , thumbnail , location , price}=building
  
    return (
     
    <div>
      
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={thumbnail}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <p>{description}</p>
    <p>Location : {location}</p>
    <p>Area : {area}</p>
    <p>Price : {price}</p>
    <div className="card-actions justify-end">
      <Link to={"/buydone"} className="btn btn-primary">Buy Now</Link>
      
    </div>
  </div>
</div>
    </div>

    );
};

export default BuildingCard;