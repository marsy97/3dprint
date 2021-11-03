import React from 'react';
import ".././style.scss";


function kontakt(){
    return(
        <body>
            <div className="nav-bg"></div>
            <div className="container">
                <div className="kontakt-page">
                    <div className="kontakt-left">
                        <h1>KONTAKT</h1>
                        <p>Pošaljite poruku na <a href="mailto:3dkod@gmail.com">3dkod@gmail.com</a></p>

                        <h1>RADNO VRIJEME</h1>
                        <p>Radnim danom: 08:00-16:00</p>
                        <p>Subota: 09:00-16:00</p>
                        <p>Nedjelja: Zatvoreno</p>
                                                                   
                    </div>

                    <div className="kontakt-right">
                        <h1>LOKACIJA</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2780.9121690249463!2d15.974937123503729!3d45.81301737910657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6fdc2523427%3A0x38ba0548d814fdc9!2sTrg%20bana%20Josipa%20Jela%C4%8Di%C4%87a%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1635380558620!5m2!1shr!2shr"  allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </body>



    );
}

export default kontakt;