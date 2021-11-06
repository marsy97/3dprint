import ".././style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import {useState} from 'react';


function Home() {

    const [navbar,setNavbar]=useState(false);

    const changeBackground=()=>{
        if(window.scrollY>=80){
            setNavbar(true);
        }else{
            setNavbar(false);
        }

    }

    window.addEventListener('scroll',changeBackground);


    return (

        <body>
            <div className={navbar?'scroll active':'scroll'}></div>
            
                <header>
                    <div className="overlay">
                        
                            <div className="middleText">
                            <Fade bottom>
                                <h1>BRZO, EFIKASNO & 
                                    POVOLJNO
                                </h1>

                                <p>Izradite 3D print u najkraćem roku po niskim cijenama.</p>

                            <Link to="/kontakt" className="rounded-pill">KONTAKT</Link>
                            </Fade>
                            </div>
                        

                    </div>
                </header>
                <div className="container">
                    <div className="about-bg">
                        <div className="overlay-svg">
                        
                        
                        <Fade bottom>
                                <div className="about">
                                    <div className="about-left">
                                        <h2>TKO SMO MI</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas vehicula nisi, elementum tincidunt nisi vehicula ut. Proin sit amet sagittis neque.</p>
                                    </div>

                                    <div className="about-right">
                                        <h2>POŠALJITE PORUKU</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas vehicula nisi, elementum tincidunt nisi vehicula ut. </p>

                                    </div>

                                </div>
                                </Fade>
                            </div>
                        </div>
                </div>

                <div className="container">
                    <div className="gallery-bg">
                        <div className="overlay-svg">
                            <Fade bottom>
                                    <div className="gallery">
                                        <div className="gallery-left">
                                            <h2>GALERIJA</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas vehicula nisi.</p>
                                            <Link to="/galerija" className="rounded-pill">Galerija</Link>
                                        </div>

                                        <div className="gallery-right">
                                            <iframe  src="https://www.youtube.com/embed/t8aU5A9XC0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </Fade>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="tst-bg">
                        <div className="testimonials"><h2>ŠTO KORISNICI KAŽU O NAMA?</h2>
                        <Fade bottom>
                            <div className="tst-box"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas vehicula nisi, elementum tincidunt nisi vehicula ut. Proin sit amet sagittis neque, nec tincidunt lacus. </p><p className="name">- Ivan</p></div>
                            <div className="tst-box"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas vehicula nisi, elementum tincidunt nisi vehicula ut. Proin sit amet sagittis neque, nec tincidunt lacus. </p><p className="name">- Ivan</p></div>
                            <div className="tst-box"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas vehicula nisi, elementum tincidunt nisi vehicula ut. Proin sit amet sagittis neque, nec tincidunt lacus. </p><p className="name">- Ivan</p></div>
                        </Fade>
                        </div>
                    </div>
                </div>

                <div className="contact-bg">
                    <div className="overlay-svg">
                        <div className="contact">
                        <Fade bottom>
                            <h2>KONTAKTIRAJTE NAS</h2>
                            <p>Pošaljite poruku na <a href="mailto:3dkod@gmail.com">3dkod@gmail.com</a></p>
                        </Fade>
                        </div>
                    </div>
                </div>


        </body>
    );
}

export default Home;