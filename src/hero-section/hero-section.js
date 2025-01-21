import { SocialSection } from "../social-section/social-section";

export function HeroSection() {
    return (
        <section className="containers container-fluid d-flex flex-column align-items-center padding">
            <div className="d-flex p-1 text-danger align-items-center justify-content-center">
                <div className="d-flex align-items-center border border-1 border-danger gap-2 rounded-pill p-1">
                    <div className=" d-flex  align-items-center p-1">
                        <p className="border border-1 border-danger rounded-pill text text-danger mb-0 p-1 fs-12">New Feature</p>
                    </div>
                    <p className="mb-0 fs-12 text">
                        Check out the team dashboard <span className="bi bi-arrow-right"></span>
                    </p>
                </div>

            </div>
            <div>
                <h1 className="heading1">Beautiful analytics to grow smarter</h1>
                <p className="paragraph1">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
            </div>
            <div className="d-flex flex-column justify-content-center  w-100 flex-md-row gap-2">
                <button className='btn buttons  border border-2  rounded-pill'><span className="bi bi-play-circle"></span> Demo</button>
                <button className=' btn btn-danger buttons rounded-pill'>Sign up</button>
            </div>
            <div className="mt-5">
                <img src="/assests/img/image 1.png" alt="" className="img-fluid"/>
                <div>
                <SocialSection/>
                </div>
            </div>
           
                
            
        </section>
    )
}