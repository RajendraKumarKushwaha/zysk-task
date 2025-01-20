import './testimonial-section.css';
export function TestimonialSection() {
    return (
        <div className='testimonial-section d-flex flex-column align-items-center'>
            <div className='mycontainer1 d-flex flex-column align-items-center'>
                <div className='testimonial-content d-flex flex-column align-items-center'>
                    <div className='quote-and-attribute d-flex flex-column align-items-center'>
                        <div className='fictional-company-logo'>
                            <img src='assests/img/Logomark.png' alt='' />
                            <img src='/assests/img/Logotype.png' alt='' />
                        </div>
                        <div className='quotes fs-48 lh-60 fw-500 text-center'>
                            <p >We’ve been using Untitled to kick start every new project and can’t imagine working without it.</p>

                        </div>
                        <div className='avtar-and-text d-flex flex-column align-items-center'>
                            <div className='avatar'>
                                <img src='/assests/img/Avatar.png' alt='' />

                            </div>
                            <div className='text-and-support text-center'>
                                <p>Candice</p>
                                <p>Product Manager Sisyphus</p>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}