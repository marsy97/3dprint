import React from 'react';
import ".././style.scss";
import cjenikimg from "./cjenik-img.jpg";


function cjenik(){
    return(
        <body>
            <div className="container">
             <div className="cjenik-page">
                    <h1>PRIPREMA 3D MODELA I PRORAČUN CIJENE</h1>
                    <div className="cjenik-inner">
                        <div className="cjenik-left">
                            
                            <img src={cjenikimg} alt="3d printing" />
                        </div>

                        <div className="cjenik-right">
                            <p>Nije važno imate li gotov 3D model ili ne. Za Vas možemo izraditi 3D model po želji i pripremiti ga za 3D printanje. U slučaju da već imate 3D model za željeni predmet, naš tim će pregledati model te ga pripremiti za proizvodnju na 3D printeru. </p>

                            <p>Cijena usluge 3D printanja ovisi o samom modelu (veličina i kompleksnost) i parametrima poput debljine slojeva i postotka ispunjenosti, ali i količine željenih predmeta. Cijena pada kako količina predmeta raste.</p>

                            <p>Dogovorite se s nama preko maila <a href="mailto:3dkod@gmail.com">3dkod@gmail.com</a> ili na broj <a href="tel:091-576-4565">091 576 4565</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </body>



    );
}

export default cjenik;