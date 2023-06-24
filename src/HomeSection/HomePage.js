import React from "react";
import Navbar from "../Navigation/Navbar";
import { Row, Col } from 'react-bootstrap';
// import { Grid } from '@mui/material';
import './Home.css'
import Mission from "./Mission";
import Vision from "./Vission";
import Objectives from "./Objective";
import Gallery from "./Gallery";
import WhatWeDo from "./WhatWeDo";
import LatestUpdates from "./Updates";
import Footer from "./Footer";
import './footer.css'
import AboutUs from "./AboutUs";


const HomePage = () => {

    return(
        <>
        <div className="head">
      
            <Navbar />       

            <section id="home">
            <div className="headers">
                <h1>Lorem ipsum dolor sit amet consectetur. Volutpat.</h1>
                
            </div>   
            <div class="text-center  p-4">
            {/* <button className="btn btn-success ">Lorem ipsum</button> */}
            <input type="submit" value="Lorem ipsum" id="header-Lorem-btn1"/>
            </div>
            </section>
        </div>

        <body>
            {/* about section */}
        <section id="about">
        <div className="container">
            <AboutUs />
        
        </div>
        </section>


        
        {/* mission-vision-objectives section */}
       <section id="about">
       <div className="container">
       <div class="mission-vision-objectives">
        
                <Row>
                    
                    
                    <Col
                        xs={24}
                        sm={12}
                        md={3}
                        lg={4}
                        
                    >
                        <div>
                        <Mission />
                        </div>
                    </Col>
                    <Col
                        xs={24}
                        sm={12}
                        md={3}
                        lg={4}
                       
                    >
                        <div>
                        <Vision />
                        </div>
                    </Col>

                    <Col
                        xs={24}
                        sm={12}
                        md={3}
                        lg={4}
                       
                    >
                        <div>
                        <Objectives />

                        </div>
                    </Col>
                    
                </Row>
                
            {/* </Grid> */}
        </div>
       </div>

       </section>
      <section id="gallery">
      <div className="container">
        <Gallery />
        
       </div>
       <div className="container-WhatWeDo">        
        <WhatWeDo />        
       </div>
      </section>

       
      

        <section id="blog">
        <div className="container">
            <LatestUpdates />
        </div>
        </section>

       <section id="contact">
            <footer>
                <Footer />
            </footer>
       </section>

        </body>
        </>

    );
};

export default HomePage