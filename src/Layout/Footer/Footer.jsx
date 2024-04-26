

const Footer = () => {
    return (
        <div>
            <div className="mt-20">

                <footer className='bg-primary-content lg:h-[420px] lg:p-20 md:p-20 p-5 pt-10'>
                    <footer className=" footer text-base-content lg:ml-20 md:ml-20 ml-8">
                        <nav>
                            <h6 className="footer-title">Services</h6>
                            <a className="link link-hover">Branding</a>
                            <a className="link link-hover">Design</a>
                            <a className="link link-hover">Marketing</a>
                            <a className="link link-hover">Advertisement</a>
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
                        <form>
                            <h6 className="footer-title">Market or Promotions</h6>
                            <fieldset className="form-control w-80">
                                {/* <label className="label">
                                    <span className="label-text">Enter your email address</span>
                                </label> */}
                                <div className="join">
                                    <input type="text" placeholder="your@email.com" className="input input-bordered join-item" />
                                    <button className="btn btn-primary join-item">Next</button>
                                </div>
                                {/* <div className="flex mt-5 gap-4">
                                    <img className=' cursor-pointer' src={facebook} alt="" />
                                    <img className=' cursor-pointer' src={twitter} alt="" />
                                    <img className=' cursor-pointer' src={instagram} alt="" />
                                    <img className=' cursor-pointer' src={github} alt="" />
                                </div> */}
                            </fieldset>
                        </form>
                    </footer>
                    <p className='bg-gray-500 mt-24 h-[1px] lg:w-[1200px] ml-16'></p>
                    <p className='text-center mt-10 font-semibold'>© 2023, Finderland. Powered by Toha</p>

                </footer>

            </div>
        </div>
    );
};

export default Footer;