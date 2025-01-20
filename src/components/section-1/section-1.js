import './section-1.css';
export function Section1() {
    return (
        <div className='section-1 d-flex flex-column justify-content-center align-items-center container-fluid'>
            <div className="mycontainer1 text-center ">
                <div className='content  flex-column text-center'>
                    <div className='heading-and-supporting-text  justify-content-center align-items-center text-center'>
                        <div className='heading-and-badge text-center '>
                            <div className="d-flex justify-content-center text-center  p-1 text-danger ">
                                <div className='borders  p-1 d-flex'>
                                    <div className=" align-items-center  ">
                                        <p className="borders px-2 text text-danger mb-0 ">New Feature</p>
                                    </div>
                                    <p className="mb-0  text">
                                        Check out the team dashboard <span className="bi bi-arrow-right "></span>
                                    </p>
                                </div>
                            </div>
                            <div className="heading">
                                <h1 className='mb-3 heading1'>Beautiful analytics to grow smarter</h1>
                            </div>
                        </div>
                        <div className='supporting-text'>
                            <p className='para supporting-text text-center'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                        </div>


                    </div>
                    <div className='text-center'>
                        <div className='d-flex flex-column-reverse justify-content-center gap-2 flex-md-row'>
                            <div className=' mb-md-0'>
                                <button className='btn border border-2 rounded-pill w-100 w-md-auto'>
                                    <span className="bi bi-play-circle"></span> Demo
                                </button>
                            </div>
                            <div>
                                <button className='btn btn-danger rounded-pill w-100 w-md-auto'>
                                    Sign up
                                </button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <div className='mycontainer1 text-center '>
                <div className='content1'>
                    <div className='screen-mockup'>
                        <img src='/assests/img/image 1.png'alt='' className='img-fluid'/>
                        {/* <img src='/assests/img/Mockup shadow.png'alt='' className='img-fluid'/> */}
                    </div>
                    <div>
                    
                    </div>

                </div>


            </div>


        </div>
    )
}