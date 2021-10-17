
import '../../../node_modules/react-lightbox-component/build/css/index.css'
import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import '../Snapshot/snapshot.css';

import Gallery from '../Gallery/gallery.js'


export class snapshot extends Component {


    
    

    render(){
         
        
        return( 
          
        <div id="snapshot-DIV">
            
            <div id="snapshotTitle-DIV">
             <div className="container" id="col-edits">
                <div class="row">
                        <div class="col-8" >
                            <h4 id="snapshotTitle">Projects Snapshot</h4>
                            <p>A quick look of some favourites.</p>
                         </div>

                         <div class="col-4" >
                            <div className="view-more-div">
                                <Link to = "/work" style={{textDecoration: "none"}}><p id="view-more-link">Explore More</p></Link>
                            </div>
                         </div>
                </div>
              
                <div className="view-more-div-mobile">
                    <Link to = "/work" style={{textDecoration: "none"}}><p id="view-more-link">Explore More</p></Link>
                </div>
            </div>
           
        </div> 
            
              <Gallery />

          
           
        </div> //end of return DIV
      
    );
}
}

export default snapshot;