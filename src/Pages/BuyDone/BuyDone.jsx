import { Link } from "react-router-dom";



const BuyDone = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-9xl pt-56">Buy Done</h1>
            <div className="mt-24 w-52 mx-auto">
            <Link to={"/"} className="btn  btn-primary text-center">Go Back</Link>
            </div>
        </div>
    );
};

export default BuyDone;