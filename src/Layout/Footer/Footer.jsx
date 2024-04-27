

const Footer = () => {
    return (
        <div>
            <div className="mt-20">

                <footer className='bg-[#fae8d3] lg:h-[350px] lg:pt-32 pt-20'>
                    <footer className=" footer text-base-content">
                        <nav>
                            <h6 className="text-4xl font-bold ml-28 mt-[26px]">BRUSH STROKES</h6>
                        </nav>
                        <nav className="ml-24">
                            <h6 className="lg:text-4xl text-2xl ml-[85px] font-semibold mb-3 lg:ml-[64px]">Quick Links</h6>
                            <div className=" text-lg font-medium lg:mt-0 mt-8">
                                <a className="">History</a>
                                <a className=" mx-5">Artist</a>
                                <a className="">Search</a>
                                <a className=" ml-5">Help Center</a>
                            </div>
                        </nav>
                        <nav className="ml-[90px] lg:mt-0 mt-8 mb-8">
                            <h6 className="lg:text-xl font-medium">58 A, East Madison Street, Baltimore, MD, USA 4508</h6>
                            <div className="lg:ml-[235px] ml-[79px] lg:text-xl font-medium">
                                <a className="">Mail: devtoha@gmail.com</a>
                            </div>
                            <div className="lg:ml-[283px] ml-[89px] lg:text-xl font-medium">
                                <a className="">Phone: 01934670567</a>
                            </div>
                        </nav>

                    </footer>

                </footer>

            </div>
        </div>
    );
};

export default Footer;