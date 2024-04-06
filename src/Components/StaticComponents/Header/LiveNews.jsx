import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LiveNews = () => {
  return (
    <div className="flex mt-5">
      <button className="btn btn-secondary">Live News</button>
      <Marquee>
        <Link to='/' className="mr-10 font-bold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link to='/' className="mr-10 font-bold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default LiveNews;
