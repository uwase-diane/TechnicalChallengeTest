
import React from "react";
import { Row, Col } from 'react-bootstrap';
import './Updates.css'

const WhatWeDo = () => {
    return(
        <div className="whatWeDo">
            <div>
                <img className="img1" src="https://res.cloudinary.com/auca/image/upload/v1687444827/Group1111_ebky3c.png"/>
                <img className="img2" src="https://res.cloudinary.com/auca/image/upload/v1687442975/fram24_eexmqw.png"/>
            </div>
            <div className="whatWeDo-2">
            <Row className="justify-content-center">
                    <Col
                        xs={24} sm={12} md={3} lg={4}>

                        <div className="Lorem-1">
                            <h1>Lorem ipsum dolor sit consectetur.</h1>
                            <p>Mauris suscipit faucibus felis risus lectus platea neque ut. Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. </p>
                            {/* <button className="btn btn-success">Lorem ipsum</button> */}
                            <input type="submit" value="Lorem ipsum" id="header-Lorem-btn"/>
                        </div>
                    </Col>

                    <Col
                        xs={24} sm={12} md={3} lg={4}>
                            
                            <div className="Lorem-2">
                            <h1>Lorem ipsum dolor sit consectetur.</h1>
                            <p>Mauris suscipit faucibus felis risus lectus platea neque ut. Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. </p>
                            <button className="btn btn-outline-light">Lorem ipsum</button>
                        </div>
                    </Col>                    
                </Row>
                {/* <div className="container">
                <div class="row justify-content-center">
                    <div class="col-4">
                    One of two columns
                    </div>
                    <div class="col-4">
                    One of two columns
                    </div>
                </div>
                </div> */}
            </div>
        </div>
    );
};

export default WhatWeDo