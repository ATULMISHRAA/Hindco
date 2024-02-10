import React from "react";
import "../Pages/Styles/Footer.css"
import { FaFacebook, FaTwitterSquare, FaInstagramSquare, FaYoutube } from "react-icons/fa";

const Footer=()=>{
    return(
        <>
          <div className="container-fluid footer-style1" style={{backgroundImage:`url(../Images/img3.jpg)`}}>
            <div className="container">
             <div  className="row">
                <div className="col">
                    <h2>Organic</h2>
                    <p className="text1">The basic idea of organic agriculture is to provide food with optimum nutritional value and minimum dangerous
                        ingredients, with only permitted substances used.
                    </p>
                </div>
                <div className="col">
                    <h2>Principle</h2>
                    <div className="footer-style2">
                        <li><a href="#">Health</a></li>
                        <li><a href="#">Ecology</a></li>
                        <li><a href="#">Fairness</a></li>
                        <li><a href="#">Care</a></li>
                    </div>
                    
                </div>
                <div className="col">
                    <h2>Quick Links</h2>
                    <div className="footer-style2">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact</a></li>
                    </div>
                </div>
                <div className="col">
                    <h2>Newsletter</h2>
                    <p className="text1">organic is the pure vegitable is the market its is good for all people</p>
                    <div className="pl-1" style={{justifyContent:"center",textAlign:"center"}}>
                        <input type="email" placeholder="Enter your email"/>
                        <button>click</button>
                    </div>
                    <div className="social-icons">
                        <li><a href="#"><FaFacebook/></a></li>
                        <li><a href="#"><FaTwitterSquare/></a></li>
                        <li><a href="#"><FaInstagramSquare/></a></li>
                        <li><a href="#"><FaYoutube/></a></li>
                    </div>
                </div>
             </div>
             </div>

          </div>
        </>
    )
}
export default Footer;