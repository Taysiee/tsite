
import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';
import React,{ Component } from 'react';


import projGif from '../../Imgs/website photos/Projects-GIF.gif';

import pCase from '../../Imgs/website photos/Nintendo-Case-web.jpg';
import Tea from '../../Imgs/website photos/infinitea-3can-mockup-web.jpg';
import Wellington from '../../Imgs/website photos/Wellington-web.jpg';
import Landscape from '../../Imgs/website photos/Landscape-mockup-wextra.jpg';
import Portrait from '../../Imgs/website photos/Portrait-mockup-extra.jpg';





  export function Gallery() {
        
              
    // Add your images here...
    const items = [
       
        { // HTML item:
            itemId: 'htmlItem',
            mediaUrl: projGif,
            metadata: {
                    type: "image",
                    height: 200,
                    width: 300,
                    description: 'Just a gif.',    
            },

         },
        { //Image item:
            itemId: 'Infinitea',
            mediaUrl: Tea,
            metaData: {
                    type: 'image',
                    height: 300,
                    width: 400,
                    title: 'Infinitea',
                    description: 'Tea infused Cider - Label and logo design',
                    focalPoint: [0, 0],
            }
        },
        { //Image item:
            itemId: 'pCase',
            mediaUrl: pCase,
            metaData: {
                    type: 'image',
                    height: 300,
                    width: 400,
                    title: 'Nintendo x Zelda Phone case',
                    description: 'Fan art/personal work',
                    focalPoint: [0, 0],
            }
           
        },
        // { // Image item:
        //     itemId: 'adelaide',
        //     mediaUrl: Adelaide,
        //     metaData: {
        //             type: 'image',
        //             height: 200,
        //             width: 300,
        //             title: 'Adelaide',
        //             description: 'Personal Project',
        //             focalPoint: [0, 0],
        //             link: {
        //                     url: 'https://www.behance.net/gallery/111070763/Adelaide',
        //                     target: '_blank'
        //             },
        //     }
        // },
        // { //Image item:
        //     itemId: 'ostentatious',
        //     mediaUrl: Oten,
        //     metaData: {
        //             type: 'image',
        //             height: 300,
        //             width: 200,
        //             title: 'Ostentatious',
        //             description: 'Personal work.',
        //             focalPoint: [0, 100],
        //     }
        //  },
         { //Image item:
          itemId: 'wellington',
          mediaUrl: Wellington,
          metaData: {
                  type: 'image',
                  height: 300,
                  width: 200,
                  title: 'Wellington',
                  description: 'Personal work.',
                  focalPoint: [0, 0],
          }
       },
        { //Image item:
            itemId: 'landscape',
            mediaUrl: Landscape,
            metaData: {
                    type: 'image',
                    height: 300,
                    width: 400,
                    title: 'Landscape',
                    description: 'Made with charcoal. 40+ hours.',
                    focalPoint: [0, 0],
            }
        },
        { //Image item:
            itemId: 'portrait',
            mediaUrl: Portrait,
            metaData: {
                    type: 'image',
                    height: 200,
                    width: 300,
                    title: 'Portrait',
                    description: 'Made with charcoal. 40+ hours.',
                    focalPoint: [0, 0],
            }
        },
    ]

    //check to see if the window has been resized. If so update the gallery width/height
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    const updateWidthAndHeight = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    // The options of the gallery (from the playground current state)
    const options = {
      galleryLayout: 1,
      scrollAnimation: 'FADE_IN',
      imageHoverAnimation: 'GRAYSCALE',
      overlayBackground: 'rgba(255,255,255,0.8)',
    };

    // The size of the gallery container. The images will fit themselves in it
    const container = {
      width: width,
      height: height
    };

    // The eventsListener will notify you anytime something has happened in the gallery.
    const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

    // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
    const scrollingElement = window;

    return (
      <ProGallery
        items={items}
        options={options}
        container={container}
        eventsListener={eventsListener}
        scrollingElement={scrollingElement}
        customHoverRenderer={itemProps => <div style={{marginTop:"30%", color: "black"}}><h3 style={{color: "black"}}>{itemProps.title}</h3>{itemProps.description}</div>}
        customImageRenderer={imageProps => <img {...imageProps} />}
        customNavArrowsRenderer={direction => <button>{direction}</button>}
      />
    );
  }

  // Enjoy using your new gallery!
  // For more options, visit https://github.com/wix/pro-gallery
  export default Gallery;