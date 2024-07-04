import Banner from "../share/banner/Banner";
import Service from "./Service/Service";
import WhoWeAre from "./whoweare/WhoWeAre";


const Home = () => {
    return (
        <div>
            <Banner/>
            <WhoWeAre/>
            <Service/>
        </div>
    );
};

export default Home;