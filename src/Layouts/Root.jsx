import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto text-left">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;