
import React from 'react'

import { TfiFacebook } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <section className='my-12 rounded-xl '>
            <div className=''>
                <footer className="footer bg-gray-200 text-base-content p-10">
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">24/7</a>
                        <a className="link link-hover">Home dalivary</a>
                        <a className="link link-hover">Weranty & Garanty</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
                <footer className="footer bg-gray-200 text-base-content border-base-300 border-t px-10 py-4">
                    <aside className="grid-flow-col items-center">


                        <p className="-ml-3">
                            <span className="text-xl font-semibold">E-Commerce</span>
                            <br />Online Shooping. All rights reserved.
                        </p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4 text-2xl ">
                            <a href="" className="text-[#33ffffda]">
                                <IoMailUnreadSharp />
                            </a>
                            <a href="" className="text-[#d8379d]">
                                <FaFacebookMessenger />
                            </a>
                            <a href="" className="text-[#1c74f8]">
                                <TfiFacebook />
                            </a>
                            <a href="" className="text-[#e71919]">
                                <BsInstagram />
                            </a>
                        </div>
                    </nav>
                </footer>
            </div>


        </section>
    );
};

export default Footer;