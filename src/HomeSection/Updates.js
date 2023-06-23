
import React from "react";
import { MdAddCircle } from "react-icons/md";
import './Home.css'



const LatestUpdates = () => {
    return(
        <div className="latestUpdates">
            <h1 className="">LATEST STORIES AND UPDATES</h1>
            <div className="divider-1"></div>   
            <div class="card-group">
  <div class="card">
    <img src="https://res.cloudinary.com/auca/image/upload/v1687376167/Rectangle_8_tagxp9.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Blandit dolor eu enim ac nisl enim sed diam. </h5>
      <p class="card-text">Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.</p>
      <p class="card-text"><MdAddCircle style={{color: 'rgba(0, 170, 229, 1)', fontSize:'150%'}}/></p>
    </div>
  </div>
  <div class="card">
    <img src="https://res.cloudinary.com/auca/image/upload/v1687376166/2_d9f81u.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"> Egestas integer bibendum sapien</h5>
      <p class="card-text">Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.</p>
      <p class="card-text"><MdAddCircle style={{color: 'rgba(0, 170, 229, 1)', fontSize:'150%'}}/></p>
    </div>
  </div>
  <div class="card">
    <img src="https://res.cloudinary.com/auca/image/upload/v1687376166/3_fpewiq.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Blandit dolor eu enim ac nisl enim sed diam Egestas.</h5>
      <p class="card-text">Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.</p>
      <p class="card-text"><MdAddCircle style={{color: 'rgba(0, 170, 229, 1)', fontSize:'150%'}}/></p>
    </div>
  </div>

            
</div>
        <div class="text-center p-2">
                {/* <button className="btn btn-success ">Lorem ipsum</button> */}
                <input type="submit" value="Lorem ipsum" id="header-Lorem-btn"/>
            </div>
</div>
    );
};

export default LatestUpdates