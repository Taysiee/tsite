
import React,{ Component } from 'react';



import './contact.css';

import TopNav from '../TopNav/topnav.js';
import Navbar from '../Navbar/Navbar.js';

import artstation from '../../Imgs/artstation-logo-blk.png';
import instagram from '../../Imgs/instagram.svg';
import behance from '../../Imgs/behance.svg';

import contactImg from '../../Imgs/website photos/Hylia2.jpg';


export class contact extends Component {
    render(){
    

        return( 
          
        <div className="contact header" id="contactEdits-header">
           <header >
            <div className="vl-left-home" />

            <div className="containter" >
                <div className="row" id="contactEdits">
                        <div className="col-12 col-sm-6 col-lg-5">
                            <img src={contactImg} id="contactImg"/>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-7" id="contactInfo">
                            <h4>Contact Me</h4>
                            <p>Have a project? Let's chat. </p>
                            <a href = "mailto: hello@taylorsiemens.com?subject=Introduction"><p id="email-edited">hello[at]taylorsiemens.com </p></a>

                            <div>
                                <a href="https://www.artstation.com/tayyy" ><img src={artstation} id="artstation-menu" alt="artstation"/></a>
                                <a href="https://www.behance.net/itstayyy"><img src={behance} id="behance-menu" alt="behance"/></a>
                                <a href="https://www.instagram.com/itstayyy/"><img src={instagram} id="instagram-menu" alt="instagram"/></a>
                            </div>
                        </div>
                        
                </div>
            </div>


           </header>

        </div>
            

  
    );}
}

export default contact;