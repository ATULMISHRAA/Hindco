
import {useState} from "react";
import "../Pages/Styles/Navbar.css"

const Navbar=()=>{
    const [navbarShow, setNavbarShow] = useState(false);
    const [exploreShow, setExploreShow] = useState(false);
    const handleNavbarToggle = () => {
        setNavbarShow(!navbarShow);
        setExploreShow(false); // Close Explore when Navbar is toggled
      };
    return(
        <>
          <div className="navbar-style">
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <div className="container">
                <h1><a href="#" className="navbar-brand">ORGANIC</a></h1>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#mynav" onClick={handleNavbarToggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${navbarShow ? 'show' : ''}`} id="mynav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                </ul>
                </div>
                </div>
            </nav>
          </div>
        </>
    )
}
export default Navbar;