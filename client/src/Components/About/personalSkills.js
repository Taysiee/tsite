
import React,{ Component } from 'react';


// import Inforgraphic from '../../Imgs/webite photos/Talents-Infographic.jpg';
import './aboutSection.css';
import CDimg from '../../Imgs/website photos/The-Council.jpg';
import GDimg from '../../Imgs/website photos/Infinitea-ICS.jpg';
import GDimgMobile from '../../Imgs/website photos/Infinitea-ICS-mobile.jpg';
import artstation from '../../Imgs/artstation-logo-blk.png';
import instagram from '../../Imgs/instagram.svg';
import behance from '../../Imgs/behance.svg';

export class personalSkills extends Component {
    render(){
    

        return( 
          
        <div id="personalSkills-DIV">
           

            <div className="containter" id="container-edits-talents">
                    <div class="row" >
                        <div class="col-sm-7" id="GD-img-div" >
                            <div >
                                <img src={GDimg}  id='GD-img' alt="Level-Up Magazine"/>
                            </div> 
                           
                        </div>

                        <div class="col-sm-1" >
                            <h1 id="talentsNumbering-01">01 |</h1>
                        </div>

                        <div class="col-sm-4" >
                        <div className="col-edits-talents">
                            <p id="sm-header-about">- Exist loudly!</p>
                            <h4>Graphic Design</h4>
                            <p id="pPadding">Defy the limits with Product Design, Editorial Design, Brand/Logo Design, Reports, Slide Decks, Digital and Print Ads. The list goes on.</p>
                            <p><strong>Programs:</strong> Illustrator | InDesign | Photoshop | Google Suite | Microsoft Office</p>
                            <a href="https://www.behance.net/itstayyy"><img src={behance} id="behance" alt="behance"/></a>
                        </div>
                        </div>
                        <img src={GDimgMobile}  id='GD-img-mobile' alt="Level-Up Magazine"/>
                    </div>


                    <div class="row" id="row-padding-CD">

                          
                        <div class="col-sm-2" >
                            <h1 id="talentsNumbering-02">02 |</h1>
                        </div>

                        <div class="col-sm-4">
                            <div className="col-edits-talents">
                                <p id="sm-header-about">- Passion led us here.</p>
                                <h4>Illustration & Character Design</h4>
                                <p id="pPadding">Creativity is your greatest power. Make memorial characters
                                recognizable worldwide.  </p>
                                <p><strong>Programs:</strong>  Photoshop | Procreate</p>
                                <a href="https://www.instagram.com/itstayyy/"><img src={instagram} id="instagram" alt="instagram"/></a>
                                <a href="https://www.artstation.com/tayyy" ><img src={artstation} id="artstation" alt="artstation"/></a>
                            </div>
                        </div>

                        <div class="col-sm-6" id="CD-img-div">
                            <div >
                                <img src={CDimg}  id='CD-img' alt="Raze 2.0"/>
                            </div> 
                        </div> 
                        <div id="CD-img-div-mobile">
                                <img src={CDimg}  id='CD-img' alt="Raze 2.0"/>
                            </div>  
 
                    </div>
                </div>
           
        </div>
      
    );
}
}

export default personalSkills;