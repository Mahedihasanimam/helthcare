import Banner from "../../share/banner/Banner";
import Service from "../Service/Service";
import WhoWeAre from "../whoweare/WhoWeAre";
import Appinment from "./Appinment";
import Faq from "./Faq";
import Review from "./Review";


const Home = () => {
    return (
        <div>
            <Banner/>
            <WhoWeAre/>
            <Service/>
            <Review/>
            <Faq/>
            <Appinment/>
        </div>
    );
};

export default Home;