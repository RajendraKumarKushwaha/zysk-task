import './social-proof-section.css';
export function SocialSection(){
    return(
        <div className=" social-proof-section d-flex  justify-content-center ">

            <div className=' social-container flex-column  bg-white'>
                <p className=' text-center fs-14  fw-500 lh-base'>Join 4000+ companies already growing</p>
                <div className=' d-flex logos  flex-wrap gap-4 company-logo-container'>
                    <span><img src="/assests/img/Fictional company logo.png" class="img-fluid company-logo" alt="" /></span>
                    <span><img src="/assests/img/Fictional company logo (2).png" class="img-fluid company-logo" alt="company-logo" /></span>
                    <span><img src="/assests/img/Fictional company logo (1).png" class="img-fluid company-logo" alt="company-logo" /></span>
                    <span><img src="/assests/img/Fictional company logo (3).png" class="img-fluid company-logo" alt="company-logo" /></span>
                    <span><img src="/assests/img/Fictional company logo (4).png" class="img-fluid company-logo" alt="company-logo" /></span>
                    <span><img src="/assests/img/Fictional company logo (5).png" class="img-fluid company-logo" alt="company-logo" /></span>

                </div>
            </div>
        </div>
    )
}