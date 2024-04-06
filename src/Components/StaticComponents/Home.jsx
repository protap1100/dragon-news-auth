import {useLoaderData} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import LeftNews from "../SharedCompo/LeftNews";
import RightNews from "../SharedCompo/RightNews";
import Header from "./Header/Header";
import NewsCard from "./NewsCard";

const Home = () => {

    const news = useLoaderData();
    console.log(news);
    const mainNews = news.slice(0,4);

    return (
        <div className="container mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <div className="mt-5 gap-5 grid grid-cols-1 md:grid-cols-4">
               <div className="col-span-1"> <LeftNews></LeftNews></div>
               <div className="col-span-1 md:col-span-2">
                {
                    mainNews.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                } 
               </div>
               <div className="col-span-1"><RightNews></RightNews></div>
            </div>
        </div>
    );
};

export default Home;