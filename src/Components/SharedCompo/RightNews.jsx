import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import img1 from '../../assets/qZone1.png';
import img2 from '../../assets/qZone2.png';
import img3 from '../../assets/qZone3.png';
import bg1 from '../../assets/bg.png';

const RightNews = () => {
    return (
        <div className="border-2">
            <h1 className="text-xl font-bold">Login With</h1>
            <div>
                <button className="btn border-2 border-black mt-5 w-full"> <FaGoogle></FaGoogle> Login With Google</button>
                <button className="btn border-2 border-black mt-5  w-full"> <FaGithub></FaGithub> Login With Github</button>
            </div>
            <div>
                <h1 className="text-2xl">Find Us On</h1>
                <div>
                    <h1 className="p-3 flex gap-5 rounded-xl mt-5 items-center border text-3xl"><FaFacebookF></FaFacebookF> <span className="text-xl text-gray-700">Facebook</span></h1>
                    <h1 className="p-3 flex gap-5 rounded-xl mt-5 items-center border text-3xl"><FaInstagram></FaInstagram> <span className="text-xl text-gray-700">Instagram</span></h1>
                    <h1 className="p-3 flex gap-5 rounded-xl mt-5 items-center border text-3xl"><FaTwitter></FaTwitter> <span className="text-xl text-gray-700">Twitter</span></h1>
                </div>
            </div>
            <div className="bg-gray-200 mt-10">
                <h1 className="font-bold text-2xl my-5">Q-Zone</h1>
                <div>
                    <div className="border-dashed border-2 mt-10 border-gray-500 flex items-center justify-center">
                          <img src={img1} alt="" />
                    </div>
                    <div className="border-dashed border-2 mt-10 border-gray-500 flex items-center justify-center">
                          <img src={img2} alt="" />
                    </div>
                    <div className="border-dashed border-2 mt-10 border-gray-500 flex items-center justify-center">
                          <img src={img3} alt="" />
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div style={{
                    backgroundImage: `url('${bg1}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }} >
                        <div className="text-white p-2 lg:p-10 flex justify-center items-center flex-col gap-10 text-center">
                              <h1 className="font-bold text-4xl leading-10 ">Create an Amazing Newspaper</h1>
                              <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                              <button className="btn btn-secondary">Learn More</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default RightNews;