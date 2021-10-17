import React,{ Component } from 'react';
import './mobileErr.css';

import artstation from '../../Imgs/artstation-logo-blk.png';
import instagram from '../../Imgs/instagram.svg';
import behance from '../../Imgs/behance.svg';


export class mobileErr extends Component {
    render(){
        return( 
        <div id="mobileDiv">
            <div id="errTxt">
                <h2 id="errTitle" style={{color: 'black'}}>(·_·)</h2>
                <p id="errDesc"> Hang on. This site is in progress to be mobile friendly...  
                    In the meantime, checkout my social channels for now!<br></br>
                    <p style={{fontSize: "12px", color: "black"}}>(and thank you for your understanding) </p>
                    </p>
                   
                    
                   

                    <div id='errChannels-DIV'>
                    <a href="https://www.artstation.com/tayyy" activeClassName="link"><img src={artstation} id="artstation-error" alt="artstation"/></a>
                    <a href="https://www.behance.net/itstayyy"><img src={behance} id="behance-error" alt="behance"/></a>
                    <a href="https://www.instagram.com/itstayyy/"><img src={instagram} id="instagram-error" alt="instagram"/></a>
                    </div>
                    

                    
            </div>
        </div>
    );
}
}

export default mobileErr;