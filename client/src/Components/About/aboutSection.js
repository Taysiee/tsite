import React,{ Component } from 'react';



import Tay2 from '../../Imgs/Profile-Img.jpg';
import './aboutSection.css';





export class aboutSection extends Component {
    
    

    render(){


    

        return( 
          
        <div id="aboutSection-DIV">
            <div className="containter">
                <div class="row" >
                    <div className="col-sm-7">
                        <div className="col-edits">
                        <p id="sm-header-about">- an introducion</p>
                        <h4>Important stuff you need to know.</h4>
                        
                        <p id="pPadding">Hi, I'm Taylor.</p>
                        <p></p>
                        <p id="pPadding">A Designer and Illustrator who's goal is to utlimately define new trends and question the status quo. </p>
                        {/* <Link to = "/about" style={{textDecoration: "none"}}><p className="learnMore">Learn more</p></Link>  */}
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div id="tay-img-div">
                            <img src={Tay2}  id='tay-img' alt="Taylor "/>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
      
    );
}
}

export default aboutSection;