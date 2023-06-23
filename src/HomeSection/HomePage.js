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

            <div className="headers">
                <h1>Lorem ipsum dolor sit amet consectetur. Volutpat.
                    Lorem ipsum</h1>
                
            </div>   
            <div class="text-center">
            {/* <button className="btn btn-success ">Lorem ipsum</button> */}
            <input type="submit" value="Lorem ipsum" id="header-Lorem-btn"/>
            </div>
        </div>

        <body>
            {/* about section */}
        <div className="container">
            <AboutUs />
        
        </div>


        
        {/* mission-vision-objectives section */}
       <div className="container">
       <div class="mission-vision-objectives">
           
        {/* <Grid> */}
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

       <div className="container">
        <Gallery />
        
       </div>

       <div className="container-WhatWeDo">        
        <WhatWeDo />        
       </div>

        <div className="container">
            <LatestUpdates />
        </div>

        <footer>
            <Footer />
        </footer>

        </body>
        </>

    );
};

export default HomePage