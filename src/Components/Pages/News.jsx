import Navbar from "../Navbar/Navbar";
import RightNews from "../SharedCompo/RightNews";
import Header from "../StaticComponents/Header/Header";
import {useParams} from "react-router-dom";

const News = () => {

    const {id} =useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-10">
                <div className="col-span-3 border border-black mt-10 " >
                    <h1>News Detail</h1>
                    <h1>{id}</h1>
                </div>
                <div className="col-span-1 mt-10" ><RightNews></RightNews></div>
            </div>
        </div>
    );
};

export default News;