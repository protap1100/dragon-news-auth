import { Link } from "react-router-dom";

const NewsCard = ({singleNews}) => {
    console.log(singleNews)
    const {title,_id,image_url,details,author} = singleNews;

    return (
        <div>
            <div className="flex flex-col  p-6 space-y-6 overflow-hidden rounded-lg shadow-md  text-gray-100">
                <div className="flex space-x-4">
                    <img alt="" src={author.img} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm text-black font-semibold">{author.name}</a>
                        <span className="text-xs text-gray-400">{author.published_date}</span>
                    </div>
                </div>
                    <p className="text-2xl font-bold text-gray-700">{title}</p>
                <div>
                    <img src={image_url} alt="" className="object-cover w-full mb-4 h-60 rounded-xl sm:h-96 bg-gray-500" />
                </div>
                <div>
                    <h1 className="text-gray-600">{details}</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                    <Link className="btn btn-primary" to={`/news/${_id}`}>Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;