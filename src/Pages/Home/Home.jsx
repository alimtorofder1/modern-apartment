
import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Banner from "../Shared/Banner/Banner";
import BuildingCard from "../Shared/BuildingCard/BuildingCard";
import Navber from "../Shared/Navber/Navber";
import Slider from "../Slider/Slider";
import Card from "../Shared/Card/Card";


const Home = () => {
    const building =useLoaderData();
    console.log(building)
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <div className="text-4xl font-bold text-center pt-16"><h2>Latest News</h2></div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16 gap-14">
            
           {
                building.map(abuilding => <BuildingCard key={abuilding._id} building={abuilding}></BuildingCard>)
            }
           </div>
           <div>
            <h2  className="text-4xl font-bold text-center pt-16">What Our Client Say</h2>
           <p className='mt-5 mb-10 text-center w-96 mx-auto'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
           </div>
            <Slider></Slider>
            <Card></Card>
            <Footer></Footer>
        </div>
    );
};

export default Home;