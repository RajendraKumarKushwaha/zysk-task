import { useState } from 'react';
import './hero-header-section.css';
import { Link } from 'react-router-dom';
export function HeroHeaderSections() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className="dropdown-header-navigation border-bottom border-light">
            <div className='header py-4'>
                <div className='mycontainer container-fluid  d-flex justify-content-space-between align-items-center'>
                    <div className='content custom-padding-x-32'>

                        <div>
                            <Link to="/"> <img src="/assests/img/Group 160.png" alt="logo" /></Link>
                        </div>
                    </div>
                    <button
                        className="menu-toggle d-md-none"
                        onClick={handleToggle}
                        style={{
                            background: "transparent",
                            border: "none",

                            fontSize: "24px",
                            cursor: "pointer",
                        }}
                    >
                        ☰
                    </button>

                    <div
                        className={`menu-container d-md-flex ${isMenuOpen ? "menu-open" : "d-none"
                            }`}
                    >
                        <nav className="menu  fw-bold">
                            <span className="me-3"><Link to="/" className="text-secondary text-decoration-none">Home</Link></span>
                            <span className="me-3"><Link to="/" className="text-secondary text-decoration-none">Products</Link></span>
                            <span className="me-3"><Link to="/" className="text-secondary text-decoration-none">Resources</Link></span>
                            <span className="me-3"><Link to="/" className="text-secondary text-decoration-none">Pricing</Link></span>
                        </nav>

                    </div>

                    <div>
                       
                    </div>
                    {/* <div className="d-none d-md-block align-right margin-left">
                            <img src="/assests/img/_Navigation actions.png" alt="logo" />
                        </div> */}
                </div>

            </div>

        </div>
    )
}