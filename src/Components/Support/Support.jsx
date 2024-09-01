import Lottie from "lottie-react";
import support from "../../../public/support.json"

const Support = () => {
    return (
        <section className="flex justify-around">
            
            <Lottie animationData={support} className="w-[400px]"></Lottie>
            <div>
                <form action="" className="w-80">
                    <div>
                        <label className="text-lg font-semibold" htmlFor="">Email</label>
                        <input type="text" placeholder="email" className="p-1 border-2 border-black rounded-xl w-full" />
                    </div>
                    <div>
                        <label className="text-lg font-semibold" htmlFor="">Subject</label>
                        <input type="text" placeholder="subject" className="p-1 border-2 border-black rounded-xl w-full" />
                    </div>
                    <div>
                        <label className="text-lg font-semibold" htmlFor="">Description</label>
                        <textarea placeholder="comments Here" className="w-full h-24 border-2 rounded-xl p-2 border-black"></textarea>
                    </div>
                    <div>
                        <button className="w-full btn border-2 text-white bg-[#0D7C66]">Submit</button>
                    </div>
                </form>
            </div>

        </section>
        
    );
};

export default Support;