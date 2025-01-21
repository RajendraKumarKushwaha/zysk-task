import { useState } from "react";
import { Link } from "react-router-dom";
export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="containers container-fluid d-flex justify-content-between align-items-center p-2">
            <div>
                <Link to="/"> <img src="/assests/img/Group 160.png" alt="logo" /></Link>
            </div>

            <button className="menu-toggle d-md-none btn  fs-4 p-0 cursor-pointer" onClick={handleToggle} >
                ☰
            </button>

            <div className={`menu-container d-md-flex ${isMenuOpen ? "menu-open " : "d-none"}`} >
                <nav className="menu d-flex flex-column flex-md-row gap-4 fw-bold">
                    <span className="me-3"><Link to="/" className="text-secondary text-decoration-none">Home</Link></span>
                    <span className="me-3"><Link to="/" className="text-secondary text-decoration-none">Products</Link></span>
                    <span className="me-3"><Link to="/" className="text-secondary text-decoration-none">Resources</Link></span>
                    <span className="me-3"><Link to="/" className="text-secondary text-decoration-none">Pricing</Link></span>
                </nav>
            </div>
            <div className="d-none d-md-block ">
                <img src="/assests/img/_Navigation actions.png" alt="logo" />
            </div>
        
        </header>
        
    )
}