import React from 'react';
import ".././style.scss";
import {Link} from 'react-router-dom';
import { NavLink } from "react-router-dom";
import logo from "./3dkod.svg";
import Nav from 'react-bootstrap/Nav';
import {useState} from 'react';




function Navigation() {

    const [state,setState]=useState(true);
    
    const width=window.innerWidth;


    return (
      
        <body >
            <div className="container">
                <div className="nav">
                    
                <Link to="/" className="logo"><img src={logo}/> </Link>
                        
                                 

                    <Nav className="nav-inner">
                    
                        <div style={state &&width<500 ?{display:'none'}:{display:'flex'}} className="links">
                            <NavLink eventKey="1" as={Link} id="link" activeClassName="plavo" exact to="/">POČETNA</NavLink>
                            <NavLink eventKey="1" as={Link}id="link" activeClassName="plavo"exact to="/kontakt">KONTAKT</NavLink>
                            <NavLink eventKey="1" as={Link}id="link" activeClassName="plavo"exact to="/cjenik">CJENIK</NavLink>
                            <NavLink eventKey="1" as={Link}id="link" activeClassName="plavo"exact to="/galerija">GALERIJA</NavLink>
                        </div>

                        <div onClick={()=>{setState(!state)}} className="menu-mobile">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d4dbf7" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>MENU
                        </div>
                        
                    </Nav>
                </div>
          </div>
        </body>
      
    );
  }
  
  export default Navigation;