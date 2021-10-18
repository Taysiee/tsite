

// import { Link } from 'react-router-dom';
import React,{ Component } from 'react';
import './Navbar.css';




import Menu from '../Menu/Menu';


export class Navbar extends Component {

    constructor () {
        super()
        this.state = {
          isHidden: true,
        }
        
      };
      toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden,
          
          
        })
      }

      


    render(){
      
        
        const ham = this.state.isHidden ? 'toggle-icon' : 'toggle-icon pushed';
        // const menuTag = this.state.isHidden ? 'MENU' : 'CLOSE';
        // const nameColor = this.state.isHidden ? 'black' : 'orange';


        function refreshPage(){ 
          document.location.assign('/'); 
      }
      
    
      
      
       
return( 
  
    <div id="navDiv">
        <nav className="navbarItems">
          
                <div className="hamburgerBtn-div"  onClick={this.toggleHidden.bind(this)}>
                  <div className={ham} >
                    {/* <p id="menuTag" style={{color: nameColor }}>{menuTag}</p> */}
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                  </div>
                </div>  
        </nav>

        <div className="menu-show"> {!this.state.isHidden && <Child />} </div>
    </div>
    );
  }
}

const Child = () => (
    <Menu  />
    )

export default Navbar;