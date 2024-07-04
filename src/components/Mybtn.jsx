import { LuArrowUpRight } from "react-icons/lu";
const Mybtn = ({label}) => {
    return (
        <div>
            <button className="btn rounded-md text-[16px] font-medium px-6 bg-[#FFC637] hover:bg-[#FFC637] flex gap-2 items-center justify-center">{label}  <LuArrowUpRight className="font-bold"/> </button>
        </div>
    );
};

export default Mybtn;