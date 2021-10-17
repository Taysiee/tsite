import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import React,{ Component } from 'react';



import './footer.css';


export class footer extends Component {
    render(){
    

        return( 
          
        <>
       
            <div className="containter" id="container-edits-footer">
                <div id="footerEdits" className="row">
                    <div className="col-sm-6" id="col-edits" >
                        <p>© Taylor Siemens 2021</p>
                        
                    </div>
                    <div className="col-sm-2" id="col-edits-footer">
                        <p><strong>Explore.</strong></p>
                        <a href = "/" style={{textDecoration: "none"}}><p className="link">Home</p></a>
                        <Link to = "/about" style={{textDecoration: "none"}}><p className="link"> About</p></Link>
                        <Link to = "/work" style={{textDecoration: "none"}}><p className="link">Work</p></Link>
                        <a href="https://shop.taylorsiemens.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}><p className="link">Shop</p></a>
                        <Link to = "/contact" style={{textDecoration: "none"}}><p className="link">Contact</p></Link>
                    </div>
                    <div className="col-sm-4" id="col-edits-footer">
                        <p><strong>Social media.</strong></p>
                        <a href="https://www.behance.net/itstayyy" ><p className="link"> Behance</p></a>
                        <a href="https://www.artstation.com/tayyy" ><p className="link">Artstation</p></a>
                        <a href="https://www.instagram.com/itstayyy/" ><p className="link">Instagram</p></a>
                        
                    </div>
                </div>
            </div>
       
        </> //end of return div
      
    );
}
}

export default footer;