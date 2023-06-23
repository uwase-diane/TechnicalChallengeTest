
import { MdFacebook, MdTwitter, MdLinkedIn, MdYoutube } from 'react-icons/md';
import { AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube } from 'react-icons/ai';

import './footer.css'


const Footer = () => {
    return(
        <div className="foot">
            <div className="footer-container">
            <div className="footer">

                <div className='footer-email-form'>
                    <h5>Subscribe to our weekly newsletter </h5>
                    <input type="email" placeholder="email" id="footer-email"/>
                    <input type="submit" value="submit" id="footer-email-btn"/>
                </div>

                <div className="footer-heading footer-1">
                    <h5>Reach Us</h5>
                    <a href="#">Home</a>
                    <a href="#">Gallery</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact us</a>
                    <a href="#">Blog</a>
                </div>

                <div className="footer-heading footer-2">
                    <h5>Be Social</h5>
                    <a href="#"><MdFacebook style={{color:'rgba(0, 97, 152, 1)', fontSize:'20px'}}/> Facebook</a>
                    <a href="#"><AiFillTwitterCircle style={{color:'rgba(0, 97, 152, 1)',fontSize:'20px'}}/> Twiter</a>
                    <a href="#"><AiFillLinkedin style={{color:'rgba(0, 97, 152, 1)',fontSize:'20px'}}/> LinkedIn</a>
                    <a href="#"><AiFillYoutube style={{color:'rgba(0, 97, 152, 1)',fontSize:'20px'}}/> Youtube channel</a>
                   
                </div>
                <div className="footer-heading footer-3">
                    <h5>Quick links</h5>
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>

            <div className='container'>
                <div className="footer-line"></div>
                
                <p className="footer-p"><span className="footers-2">© 2023 Rwanda, All right Reserved. </span> |<strong> Privacy policy</strong></p>
                
            </div>
        </div>
        </div>
    );
};

export default Footer