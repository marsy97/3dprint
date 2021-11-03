import React from 'react';
import ".././style.scss";
import cjenikimg from "./cjenik-img.jpg";


function galerija(){
    return(
        <body>
            <div className="nav-bg"></div>
            <div className="container">
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

            </div>
        </body>



    );
}

export default galerija;