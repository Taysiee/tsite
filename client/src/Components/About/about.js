
import React,{ Component } from 'react';


import './aboutSection.css';
import './about.css';

import TopNav from '../TopNav/topnav.js';
import Navbar from '../Navbar/Navbar.js';



export class about extends Component {
    render(){
    

        return( 
          
        <div className="About">
           <header className="About-header">
    
           

            <div className="containter" id="aboutSection-one">
                <div className="row marginMobile">
                        <div className="col-sm-12 col-lg-5">
                            <div className="col-edits-about">
                                    <div className="title" >Taylor Siemens — Designer & Illustrator — Canada</div>
                                    <p id="pPadding">40% Designer, 40% Illustrator, 20% Gamer.</p>
                                    <p id="pPadding">Hi, I'm Taylor, an Illustrator, Graphic Designer and UI/UX Designer. 
                                    When not illustrating and playing video games, I'm busy designing and developing new creations to build my portfolio and skillset.  </p> 
                                    <p id="pPadding">  
                                    I also love my pomeranian mini american eskimo. Though anyone who knows me, knows that.</p>
                                    <p className="whisperText" id="whisperText-mobile">...Find anything unsual about this site? It's a feature not a bug. For now.</p>
                            </div>
                        </div>

                        
                        <div className="col-sm-3 col-lg-3">
                            <div className="lineheight-sm" id="col-edits-about-2">
                                <p><strong>Degree.</strong></p>
                                <p>BA — Major COSC —</p>
                                <p>Minor VISA</p><br></br>
                                
                                <p><strong>Tools.</strong></p>
                                <p>Adobe Creative Suite</p>
                                <p>Procreate</p>
                                <p>Google Suite</p>
                                <p>Microsoft Office</p>
                                <p>Figma</p> 
                            </div>
                        </div>

                        <div className="col-10 col-sm-7 col-lg-3">
                            <div  >
                                <p><strong>Expertise.</strong></p>
                                <p style={{color:"darkGray"}}> <strong>GRAPHIC DESIGN</strong></p>
                                <p>This is where my career started. Defy the limits with Product Design, Editorial Design, Brand/Logo Design, 
                                    Reports, Slide Decks, Digital and Print Ads. The list goes on. </p>
                            
                                <p style={{color:"darkGray"}}><strong>CHARACTER DESIGN & ILLUSTRATION</strong></p>
                                <p>As an avid gamer, this is where my passion truly lies. Creating memorial characters that are recognizable worldwide, is an ongoing dream of mine. 
                                    For that reason, most of my free time is spent drawing.
                                </p>

                                <p style={{color:"darkGray"}}> <strong>UI/UX</strong></p>
                                <p>Always pushing my limits and striving to learn more, I dove into UI/UX design. A perfect pairing for my passion for technology and design. </p>
                            </div>
                        </div>

                </div>

            </div>
             
        </header>


            <div className="containter" id="aboutSection-two">
                <div className="row marginMobile">
                <div className="col-sm-12 col-lg-5">
                        <div className="col-edits-about">
                            <div className="lineheight-sm">
                            <p><strong>Fun facts.</strong></p>
                            <a href="https://www.behance.net/gallery/36731381/Infection"><p className="link">ADAA — Adobe Design Achievement Awards Semifinalist</p></a>
                            <a href="https://twitter.com/Pixxel_Perfect/status/1385029874486702080"><p className="link">Twitter — Ryan Reynolds liked my tweet! (49K+ Impr)</p></a>
                            <a href="https://vimeo.com/256717186"><p className="link">Film production — behind and in front of the camera</p></a>
                            <a href="http://watersoftheokanagan.ca/exhibit/#1"><p className="link">Exhibition panels — designed + toured Canada</p></a>
                            <p>Photogrammetry — lead researcher & designer for 3D models </p>
                            <p>Code — programmed this site myself </p>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                            <div className="lineheight-sm">
                                <p><strong>Some cool clients.*</strong></p>
                                <p>TELUS / TCSS</p>
                                <p>Memorial Cup 2020</p>
                                <p>SASCU</p>
                                <p>RE/MAX</p>

                                <p className="whisperText" id="whisperText-mobile">*Client projects during employment<br></br> at an agency.</p>
                            </div>
                    </div>
                   
                    <div className="col-sm-6 col-lg-3">
                        <div className="lineheight-med">
                            <p><strong>Certifications</strong></p>
                            <a href="https://www.credly.com/badges/3287261d-653f-4aa4-85ce-c282cdab14d9/public_url" ><p className="link">ADAA 2016 Semifinalist</p></a>
                            <a href="https://www.credly.com/badges/645a6b80-698d-43e1-8a72-bab30877968e/public_url" ><p className="link">2019 Offical Entry (ADAA)</p></a>
                        </div>
                    </div>
                   
                </div>
            </div>

    </div> //end of return div
      
    );}
}

export default about;