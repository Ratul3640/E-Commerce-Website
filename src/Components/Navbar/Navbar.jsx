import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";





const Navbar = () => {
    return (
        <section className="bg-[#0D7C66] text-white">
            <div id="dower">

            </div>
            <div className="flex justify-around">
                <div id="img" >
                    <img className="w-16" src="https://i.ibb.co/XzRtKdm/logo.png" alt="" />
                </div>

                <div id="search" className="my-auto flex">
                    <input type="text" className="p-1 border text-black rounded-xl w-48 " />
                    <IoSearch className="my-auto text-2xl border-l-2 bg-white border-[#0D7C66] p-1 text-black -ml-7" />


                </div>
                <div id="routes" className="my-auto">
                    <ul className="flex gap-2 font-bold">
                        <NavLink to={'/'} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline" : ""
                        }><li>Home</li></NavLink>
                        <NavLink to={'/products'} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline" : ""
                        }><li>All Products</li></NavLink>
                        <NavLink to={'/about us'} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline" : ""
                        }><li>About Us</li></NavLink>
                        <NavLink to={'/services'} className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline" : ""
                        }><li>Services</li></NavLink>
                    </ul>
                </div>
                <div id="icons" className="flex gap-2">
                    <button className="flex btn gap-2 btn-sm my-auto text-[#1e7462] font-semibold"><FiLogIn></FiLogIn>Login
                    </button>
                    <button className="flex btn gap-2 btn-sm my-auto text-[#1f7363] font-semibold"><GrCart></GrCart>Cart
                    </button>
                    <button>Became a seller</button>
                </div>
            </div>

        </section>
    );
};

export default Navbar;






