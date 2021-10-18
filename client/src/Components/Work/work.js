import React,{ Component } from 'react';


import './work.css';
import AllGallery from '../Gallery/gallery-all.js'


// import artstation from '../../Imgs/artstation-logo-blk.png';
// import instagram from '../../Imgs/instagram.svg';
// import behance from '../../Imgs/behance.svg';



export class work extends Component {
    render(){
    

        return( 
          
        <div className="Work">
             
           <header className="Work-header">
           <div className="vl-left-home" />
          
                {/* <div class="container" id="headerDiv">
                  <div class="row">
                    <div class="col-xm">
                      <div id="workText-div">
                        <h4 id="workText">Projects</h4>

                        <a href="https://www.artstation.com/tayyy" ><img src={artstation} id="artstation-work" alt="artstation"/></a>
                        <a href="https://www.behance.net/itstayyy"><img src={behance} id="behance-work" alt="behance"/></a>
                        <a href="https://www.instagram.com/itstayyy/"><img src={instagram} id="instagram-work" alt="instagram"/></a>
                      </div>

                    </div>
                   
                  </div>
                </div> */}
            </header>

            {/* <div id="work-intro">

                <h4>Live & Breathe Design</h4>
                <p id="work-intro-info-blurb">A collection of personal and client work. </p> 

            </div> */}

            <div id="workGallery">
                <AllGallery />
           </div>
            
       
    
        </div> //end of return div
      
    );
}
}

export default work;