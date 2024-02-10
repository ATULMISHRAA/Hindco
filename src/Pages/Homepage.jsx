import React from "react";
import "./Styles/Homepage.css"
import { LuHand } from "react-icons/lu";
import { FcBullish ,FcCircuit, FcCloseUpMode,FcSlrBackSide,FcManager} from "react-icons/fc";

const Homepage=()=>{
    return(
        <>
        <div className="home-style-main">
           <div>
              <div className="home-style1">
                  <img src="../Images/img1.jpg" alt="image"/>
                  <div className="home-style2">
                     <h2>100% ORGANIC</h2>
                     <button className="btn btn-primary">View</button>
                   </div>
               </div>           
           </div>
           <div className="container home-style3">
                <div className="row gy-4" style={{justifyContent:"center"}}>
                    <div className=" col-md-6 col-lg-4">
                        <div className="card">
                            <img src="../Images/img9.jfif" class="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-4">
                        <div className="card">
                            <img src="../Images/img3.jpg" class="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <img src="../Images/img4.jfif" class="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <img src="../Images/img14.jfif" class="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <img src="../Images/img12.jfif" class="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <img src="../Images/img8.jfif" class="card-img-top" alt="image"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                           </div>
                        </div>
                    </div>
                    
                </div>
           </div>
           <div className="container-flud home-style4">
               <div className="img-bg" style={{backgroundImage:`url(../Images/img14.jfif)`}}>
                   <div>
                       <h2>FRESH & NON-GMO PRODUCTS</h2>
                       <p>Some quick example text to build on the card title and make up the bulk of the card's content</p>
                   </div>
               </div>
               

           </div>
           <div className="container home-style5">
                <div className="row gy-4" style={{justifyContent:"center"}}>
                    <div className=" col-md-6 col-lg-4">
                        <div className="card">
                            <LuHand className="icon"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <br/>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                        </div>
                    </div>
                    <div className=" col-md-6 col-lg-4">
                        <div className="card">
                            <FcBullish className="icon"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <br/>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                           <FcCircuit className="icon"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <br/>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <FcCloseUpMode className="icon"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <br/>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <FcSlrBackSide className="icon"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <br/>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="card">
                            <FcManager className="icon"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <br/>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                           </div>
                        </div>
                    </div>
                    
                </div>
           </div>
           </div>
        </>
        
    )
}
export default Homepage;