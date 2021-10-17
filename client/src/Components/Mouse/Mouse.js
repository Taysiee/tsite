import React,{ Component }from 'react';
import  '../Mouse/Mouse.css';






    // eslint-disable-next-line
    let ballDiv, ball;
    // eslint-disable-next-line
    var $ = document.querySelector.bind(document);
    var $on = document.addEventListener.bind(document);

    ballDiv = document.createElement('div');
    ballDiv.setAttribute("id", "ball");
    // ball = $(ballDiv.setAttribute("id", "ball"));

    var xmouse, ymouse;
    $on('mousemove', function (e) {
         xmouse = e.clientX || e.pageX;
         ymouse = e.clientY || e.pageY;
    });

   //  var ball = $('#ball');
   var yscroll = 0;
   window.onscroll = function (e) {yscroll = window.scrollY; };
    var x = void 0,
         y = void 0,
         dx = void 0,
         dy = void 0,
         // eslint-disable-next-line
         tx = 0,
         // eslint-disable-next-line
         ty = 0,
         // eslint-disable-next-line
         key = -1; 

export class Mouse extends Component {
    // componentDidMount(){
    //     followMouse();
    //    }
    constructor(props) {
        super(props);
        this.state = {
            mouse : this.followMouse = this.followMouse.bind(this)
        }
        
        }

    //     // this.state.followMouse = this.followMouse.bind(this);
    //   }

      
    render() {

  
     

        // window.onload = () => {
        //     followMouse();
        // }
        
    
        return( 
          
            <div id="wrap" ></div>
            
           
        );
    }

    componentDidMount(){
        this.followMouse();
    }
    
 

    followMouse() {
       document.getElementById("wrap").appendChild(ballDiv);
    
       
         key = requestAnimationFrame(this.state.mouse);

         if(!x || !y) {
              x = xmouse;
              y = ymouse;
         } else {
              dx = (xmouse - x) * 0.125;
              dy = (ymouse - y) * 0.125;
              if(Math.abs(dx) + Math.abs(dy) < 0.1) {
                   x = xmouse;
                   y = ymouse;
              } else {
                   x += dx;
                   y += dy;
              }
         }
         ballDiv.style.left = x + 'px';
         ballDiv.style.top = ( y + yscroll ) + 'px';;
    };
}


export default Mouse;




