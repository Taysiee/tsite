
// import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import React,{ useState }from 'react';
import './topnav.css';


const TopNav = () => {

  
      const [isOpen, setOpen] = useState(false);
        // function refreshPage(){ 
        //     document.location.assign('/'); 
        // }


        // const pages = (
        //     <>
        //     <Link to = "/" style={{textDecoration: "none"}}><button type="button" id="pagesStyled" onClick={refreshPage}>Home</button></Link>
        //      <Link to = "/about" style={{textDecoration: "none"}}><button type="button" id="pagesStyled">About</button></Link>             
        //      <Link to = "/work" style={{textDecoration: "none"}}><button type="button" id="pagesStyled">Work</button></Link>
        //      <a href="https://shop.taylorsiemens.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}><button type="button" id="pagesStyled">Shop</button></a>
        //      <Link to = "/contact" style={{textDecoration: "none"}}><button type="button" id="pagesStyled">Contact</button></Link>
        //     </>
        // )

        return( 
          
        <>
          <nav className="pagesTopNav" role="navigation" aria-label="main navigation">
            <div className="container">
                  {/* <div className="navbar-brand">
                    <a role="button" className={`navbar-burger burger ${isOpen && "is-active"}`} aria-label="menu" aria-expanded="false" onClick={() => setOpen(!isOpen)}>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                      <span aria-hidden="true"></span>
                    </a>
                  </div> */}

            
            <NavLink id="pagesStyled" to="/">
              Home
            </NavLink>

            <NavLink id="pagesStyled" to="/about">
              About
            </NavLink>

            <NavLink id="pagesStyled" to="/work">
              Work
            </NavLink>

            <a href="https://shop.taylorsiemens.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                <button type="button" id="pagesStyled">Shop</button>
            </a>

            <NavLink id="pagesStyled" to="/contact">
              Contact
            </NavLink>

            </div>
        </nav>
           
        </>
      
    );

}


export default TopNav;