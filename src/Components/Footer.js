import React from 'react';
import ".././style.scss";
import {Link} from 'react-router-dom';
import logo from "./3dkod.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";

function Footer(){

    return(
        <body>
             <div className="footer">
                <div className="container">
                    <div className="footer-wrapper">
                        <Link className="logo" to="/" className="logo"><img src={logo}/> </Link>
                        <div className="Links">
                            <a href="facebook.com"><img src={facebook} alt="3dkod-facebook"/></a>
                            <a href="instagram.com"><img src={instagram} alt="3dkod-instagram"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Footer;