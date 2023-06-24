
import React from "react";
import { Row, Col } from 'react-bootstrap';
import './Home.css'

const Gallery = () => {
    return(
       <section id="gallery">
         <div className="gallery">
            <h1>TELLUS ERAT ALIQUAN BLANDIT ETIAM</h1>
            <div className="divider-1"></div>                       
            <div className="pictures">
            <Row>                    
                    <Col
                        xs={24}
                        sm={12}
                        md={3}
                        lg={4}
                        
                    >
                        <div>
                        <img alt="" src="https://res.cloudinary.com/auca/image/upload/v1687376166/BANNER_04_zffozd.png"/>
                        </div>
                    </Col>
                    <Col
                        xs={24}
                        sm={12}
                        md={3}
                        lg={4}
                       
                    >
                        <div>
                        <img alt="" src="https://res.cloudinary.com/auca/image/upload/v1687376168/Mask_group_ybibet.png"/>
                        
                        </div>
                    </Col>

                    <Col
                        xs={24}
                        sm={12}
                        md={3}
                        lg={4}
                       
                    >
                        <div>
                        <img alt="" src="https://res.cloudinary.com/auca/image/upload/v1687396300/Mask_group_vb1ngj.png"/>

                        </div>
                    </Col>
                    
                </Row>
            </div>

        </div>
       </section>
    );
};

export default Gallery
