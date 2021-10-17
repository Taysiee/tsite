import './home.css';
import React from "react";


import homeImg from '../../Imgs/website photos/Creator,the.png';




function Home() {
  return (
    <div className="Home">
      {/* <header className="header"> */}
       
      
          <div className="vl-left-home" />

              <div class="container" id="headerDiv">
                  <div class="row">
                    <div class="col-4 col-sm-6 col-lg-6 col-xl-6">
                      
                      <div id="homeText-div">
                        <h4 id="homeText">Taylor Siemens</h4>
                      </div>
                      
                      <div id="homeText-div-mobile">
                        <h4 id="homeText">TA</h4>
                        <h4 id="homeText">YL</h4>
                        <h4 id="homeText">OR</h4>
                      </div>

                      <div className="homeBlurb">
                        <p>DESIGN | ILLUSTRATION | UI/UX | CHARACTER DESIGN</p>
                      </div>

                      <div className="homeBlurb" id="homeBlurb-mobile">
                        <p>DESIGN ILLUSTRATION <br></br>UI/UX CHARCTER DESIGN</p>
                      </div>

                    </div>

                    <div class="col-6 col-sm-6 col-lg-6 col-xl-5">
                      <img className="img-fluid" src={homeImg} id="home-img"/>
                    </div>
                   
                  </div>
              </div>
 
      {/* </header> */}

      {/* <div className="encapsulatingDiv-main"><ErrorScreen /></div> */}
    </div >
  );
}

export default Home;
