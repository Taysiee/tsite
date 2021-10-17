import React,{ Component } from 'react';
import './mobileErr.css';

import artstation from '../../Imgs/artstation-logo.png';
import instagram from '../../Imgs/instagram-logo.png';
import behance from '../../Imgs/behance-logo.png';


export class notFound extends Component {
    render(){
        return( 
        <div id="notFound">
            
                
                   

                    
                    <a href="https://www.artstation.com/tayyy" activeClassName="link"><img src={artstation} id="artstation" alt="artstation"/></a>
                    <a href="https://www.behance.net/itstayyy"><img src={behance} id="behance" alt="behance"/></a>
                    <a href="https://www.instagram.com/itstayyy/"><img src={instagram} id="instagram" alt="instagram"/></a>
                   
                    

                    
            
        </div>
    );
}
}

export default notFound;