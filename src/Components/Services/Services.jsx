import Lottie from "lottie-react";
import Animation from "../../../public/Animation - 1721287073244.json"
import best from "../../../public/best.json"
import services from "../../../public/services.json"
import support from "../../../public/support.json"
import hours from "../../../public/hours.json"


const Services = () => {
    return (
        <section >
            <h1 className="text-center font-bold text-4xl">Our services</h1>
            <div className="flex text-center gap-10 items-center justify-around">
                <div className="bg-[#0D7C66] rounded-xl" >
                    <Lottie className="w-36" animationData={best} loop={true}></Lottie>
                    <h1 className="text-center text-lg font-bold">Best Seller</h1>
                </div>
                <div className="bg-[#0D7C66] rounded-xl">
                    <Lottie className="w-36" animationData={Animation} loop={true}></Lottie>
                    <h1 className="text-center text-lg font-bold"> Best Quality</h1>
                </div>
                <div className="bg-[#0D7C66] rounded-xl">
                    <Lottie className="w-36" animationData={services} loop={true}></Lottie>
                    <h1 className="text-center text-lg font-bold">Shooping</h1>
                </div>
                <div className="bg-[#0D7C66] rounded-xl">
                    <Lottie className="w-36" animationData={support} loop={true}></Lottie>
                    <h1 className="text-center text-lg font-bold">Services</h1>
                </div>
                <div className="bg-[#0D7C66] rounded-xl">
                    <Lottie className="w-36" animationData={hours} loop={true}></Lottie>
                    <h1 className="text-center text-lg font-bold">24 Hours Delevery</h1>
                </div>
            </div>
        </section>
    );
};

export default Services;