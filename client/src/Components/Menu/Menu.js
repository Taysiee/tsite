
import { NavLink } from "react-router-dom";
import React,{ Component } from 'react';
import './Menu.css';


import Fade from 'react-reveal/Fade';

import img from '../../Imgs/website photos/Raze-Clone-Hidden.jpg';
import artstation from '../../Imgs/artstation-logo-blk.png';
import instagram from '../../Imgs/instagram.svg';
import behance from '../../Imgs/behance.svg';

export class Menu extends Component {

    myFunction() {
        var x = document.getElementById("menuDiv");
       
          
       
      }
      

      constructor () {
        super()
        this.state = {
          isHidden: false,
          
        }
        
      };
      toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden,
        
          
        })
        var x = document.getElementById("menuDiv");
        x.style.display = "none";

        var i = document.getElementsByClassName("toggle-icon pushed");
        if (i){
            while (i.length) {
                i[0].classList.remove("pushed");
            }
          
        }
        
      }

   
      


    render(){

        const {toggleHidden} = this.props;
        function refreshPage(){ 
            document.location.assign('/'); 
        }


        const pages = (
            <>
           <NavLink  onClick={this.toggleHidden.bind(this)}  className="pagesStyled hvr-forward" to="/" >Home</NavLink>
            <p className="pageInfo">For the experience</p>
            <NavLink onClick={this.toggleHidden.bind(this)} className="pagesStyled hvr-forward" to="/about">About</NavLink>            
            <p className="pageInfo">For satisfying your curiosity</p>
            <NavLink onClick={this.toggleHidden.bind(this)} className="pagesStyled hvr-forward" to="/work">Work</NavLink>
             <p className="pageInfo">For those who are interested</p>
             <a href="https://shop.taylorsiemens.com" target="_self" rel="noopener noreferrer" style={{textDecoration: "none"}}><button type="button" className="pagesStyled hvr-forward">Shop</button></a>
             <p className="pageInfo">Support the artist</p>
             <NavLink onClick={this.toggleHidden.bind(this)} className="pagesStyled hvr-forward" to="/contact">Contact</NavLink>
             <p className="pageInfo">For those who want to connect</p>
            </>
        )

        return( 
          
        <div id="menuDiv" >
            
            <div className="menuContentDiv">
                <Fade casscade>
                    <div id="Menu-img"><img src={img}  alt="An image that unfortunately didn't load."/></div>
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