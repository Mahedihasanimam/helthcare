import cardimg from "../../assets/resources/Rectangle 27-2.png";
import cardimg2 from "../../assets/resources/card2.png";
import cardimg3 from "../../assets/resources/card3.png";
import Mybtn from "../../components/Mybtn";
import { LuArrowUpRight } from "react-icons/lu";
const Service = () => {
  return (
    <div className="bg-[#FFFFF5] max-w-[1156px] mx-auto rounded-3xl px-10 my-16 pb-12">
      <div className="max-w-[1160px] mx-auto my-16">
        <div className="lg:flex md:flex flex-row gap-6 justify-between items-center px-6 space-y-6 my-12">
          <div className="space-y-4 lg:max-w-md max-w-sm ">
            <button className=" bg-[#FBFBFB] border-2 border-[#343268] text-[16px] text-[#020043] px-6 py-2 rounded-full">
              Service
            </button>
            <h1 className="text-4xl max-w-sm  font-semibold text-[#020043] ">
              Empowering Health, Enriching Lives
            </h1>
            <p className="text-[#4D4C7B]">
              We are committed to providing high-quality, compassionate care to
              every patient we serve. Whatever your healthcare needs may be, you
              can trust us to be your partner in health and wellness.
            </p>
            <Mybtn label={"Appointment"} />
          </div>
          <div className="relative lg:ml-0 md:ml-12">
            <img className="rounded-2xl" src={cardimg} alt="" />
            <div className="bg-[#343268] bg-opacity-80 p-6 rounded-2xl space-y-4 lg:max-w-sm max-w-xs absolute lg:bottom-5 md:bottom-5 -bottom-12 left-5 ">
              <h3 className="text-[#FFFFFF]  text-2xl font-medium">
                Advanced Technology
              </h3>
              <div className="flex justify-between items-center ">
              <p className="text-[#FFFFFFCC]">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
              <p className="bg-[#FFC637] text-white rounded-full p-2 "><LuArrowUpRight size={30} /></p>
              </div>
              
            </div>
          </div>
        </div>
      </div>


      <div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
        <div className="relative lg:ml-0 md:ml-12">
            <img className="rounded-2xl" src={cardimg3} alt="" />
            <div className="bg-[#343268] bg-opacity-80 p-6 rounded-2xl space-y-4 lg:max-w-sm max-w-xs absolute bottom-5  left-5 ">
              <h3 className="text-[#FFFFFF]  text-2xl font-medium">
                Advanced Technology
              </h3>
              <div className="flex justify-between items-center ">
              <p className="text-[#FFFFFFCC]">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
              <p className="bg-[#FFC637] text-white rounded-full p-2 "><LuArrowUpRight size={30} /></p>
              </div>
            </div>
          </div>
          <div className="relative lg:ml-0 md:ml-12">
            <img className="rounded-2xl" src={cardimg2} alt="" />
            <div className="bg-[#343268] bg-opacity-80 p-6 rounded-2xl space-y-4 lg:max-w-sm max-w-xs absolute bottom-5  left-5 ">
              <h3 className="text-[#FFFFFF]  text-2xl font-medium">
                Advanced Technology
              </h3>
              <div className="flex justify-between items-center ">
              <p className="text-[#FFFFFFCC]">
                Our surgeons are trained in the latest robotic surgical
                techniques, which allow for greater precision
              </p>
              <p className="bg-[#FFC637] text-white rounded-full p-2 "><LuArrowUpRight size={30} /></p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Service;
