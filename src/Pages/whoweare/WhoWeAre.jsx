import Mybtn from "../../components/Mybtn";
import cardimg from "../../assets/resources/card1.png"
const WhoWeAre = () => {
  return (
    <div className="max-w-[1160px] mx-auto mt-16 mb-32">
     <div className="lg:flex md:flex flex-row gap-6 justify-between items-center px-6 space-y-6">
     <div className="space-y-4 lg:max-w-md max-w-sm ">
        <button className=" border-2 border-[#343268] text-[16px] text-[#020043] px-4 py-2 rounded-full bg-[#FBFBFB]">Who we are</button>
        <h1 className="text-4xl max-w-sm  font-semibold text-[#020043] ">
          We Help To Get Soultions
        </h1>
        <p className="text-[#4D4C7B]">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <Mybtn label={"Learn more"} />
      </div>
      <div className="relative lg:ml-0 md:ml-12">
        <img src={cardimg} alt="" />
        <div className="bg-[#343268] p-6 rounded-2xl space-y-4 lg:max-w-sm max-w-xs absolute -bottom-12 lg:-left-12 md:-left-12">
            <h3 className="text-[#FFFFFF]  text-2xl font-medium">Our mission is simple</h3>
            <p className="text-[#FFFFFFCC]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default WhoWeAre;
