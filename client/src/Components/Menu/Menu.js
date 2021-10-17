
import { NavLink } from "react-router-dom";
import React,{ Component } from 'react';
import './Menu.css';


import Fade from 'react-reveal/Fade';

import img from '../../Imgs/website photos/Raze-Clone-Hidden.jpg';
import artstation from '../../Imgs/artstation-logo-blk.png';
import instagram from '../../Imgs/instagram.svg';
import behance from '../../Imgs/behance.svg';

export class Menu extends Component {
    render(){

        function refreshPage(){ 
            document.location.assign('/'); 
        }


        const pages = (
            <>
           <NavLink  className="pagesStyled hvr-forward" to="/">Home</NavLink>
            <p className="pageInfo">For the experience</p>
            <NavLink className="pagesStyled hvr-forward" to="/about">About</NavLink>            
            <p className="pageInfo">For satisfying your curiosity</p>
            <NavLink className="pagesStyled hvr-forward" to="/work">Work</NavLink>
             <p className="pageInfo">For those who are interested</p>
             <a href="https://shop.taylorsiemens.com" target="_self" rel="noopener noreferrer" style={{textDecoration: "none"}}><button type="button" className="pagesStyled hvr-forward">Shop</button></a>
             <p className="pageInfo">Support the artist</p>
             <NavLink className="pagesStyled hvr-forward" to="/contact">Contact</NavLink>
             <p className="pageInfo">For those who want to connect</p>
            </>
        )

        return( 
          
        <div id="menuDiv" >
             
            
            <div className="menuContentDiv">
                <Fade casscade>
                    <div id="Menu-img"><img src={img}  alt="A rad image that unfortunately didn't load."/></div>
                    <p id="menuPhotoTitle"> Be Humble </p>
                </Fade>
                <div className="pages"> {pages} </div>
                <div className="vl-left" />

                <div className="socialMedia">
                    <a href="https://www.artstation.com/tayyy" ><img src={artstation} id="artstation-menu" alt="artstation"/></a>
                    <a href="https://www.behance.net/itstayyy"><img src={behance} id="behance-menu" alt="behance"/></a>
                    <a href="https://www.instagram.com/itstayyy/"><img src={instagram} id="instagram-menu" alt="instagram"/></a>
                </div>
            </div>

            <div className="vl-right" />
                <NavLink  className="nameTitle" to="/">Portfolio Menu</NavLink>
          
        </div>
      
    );
}
}

export default Menu;