import React from 'react';
import ".././style.scss";
import cjenikimg from "./cjenik-img.jpg";
import Fade from 'react-reveal/Fade';


function galerija(){
    return(
        <body>
            <div className="nav-bg"></div>
            <div className="container">
                <Fade bottom>
                    <div className="galerija-page">
                        <h1>GALERIJA</h1>
                        <div className="galerija-inner">
                            <img src={cjenikimg} alt="3dkod"/>
                            <img src={cjenikimg} alt="3dkod"/>
                            <img src={cjenikimg} alt="3dkod"/>
                            <img src={cjenikimg} alt="3dkod"/>
                            <img src={cjenikimg} alt="3dkod"/>
                            <img src={cjenikimg} alt="3dkod"/>

                        </div>
                    </div>
                </Fade>
            </div>
        </body>



    );
}

export default galerija;