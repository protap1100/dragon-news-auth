import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from '../../../src/assets/1.png';
import img2 from '../../../src/assets/2.png';
import img3 from '../../../src/assets/3.png';
import { CiCalendar } from "react-icons/ci";

const LeftNews = () => {

    const [category, setCategory] = useState([]);
    
    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setCategory(data));
    },[]);
    return (
        <div className="bg-gray-50 shadow-xl">
            <h1 className="text-xl font-semibold">All Category</h1>
            <div>
                <div className="p-5 mt-5 bg-gray-300 rounded ">
                    <h1 className="text-2xl text-center font-bold">National News</h1>
                </div>
                <div>
                    {category.map(cat => 
                        <Link  className="block text-center mt-5 font-2xl font-semibold text-gray-500" key={cat.id}>{cat.name}</Link>
                    )}
                </div>
                <div className="mt-10">
                    <div className="flex flex-col justify-center mt-10 items-center">
                        <img className="object-fill" src={img1} alt="" />
                        <h1 className="text-2xl mt-2 font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                        <div className="mt-5 flex justify-between gap-24  text-gray-600 font-bold  ">
                                <div> 
                                    <h1 className="text-xl">Sports</h1>
                                </div>
                                <div className="flex gap-2 text-xl items-center">
                                    <h1 className="text-3xl"><CiCalendar></CiCalendar></h1>
                                    <h1>4 Jan 2024</h1>
                                </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-10 items-center">
                        <img className="object-fill" src={img2} alt="" />
                        <h1 className="text-2xl mt-2 font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                        <div className="mt-5 flex justify-between gap-24  text-gray-600 font-bold  ">
                                <div> 
                                    <h1 className="text-xl">Sports</h1>
                                </div>
                                <div className="flex gap-2 text-xl items-center">
                                    <h1 className="text-3xl"><CiCalendar></CiCalendar></h1>
                                    <h1>4 Jan 2024</h1>
                                </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-10 items-center">
                        <img className="object-fill" src={img3} alt="" />
                        <h1 className="text-2xl mt-2 font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                        <div className="mt-5 flex justify-between gap-24  text-gray-600 font-bold  ">
                                <div> 
                                    <h1 className="text-xl">Sports</h1>
                                </div>
                                <div className="flex gap-2 text-xl items-center">
                                    <h1 className="text-3xl"><CiCalendar></CiCalendar></h1>
                                    <h1>4 Jan 2024</h1>
                                </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default LeftNews;