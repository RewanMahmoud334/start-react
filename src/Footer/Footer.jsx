

import styleFooter from "./Footer.module.css"




export default function Footer(){



    return <>
    
    <footer className={`${styleFooter.footerSection}`}>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4">
                    <h3 className="text-white fw-bold text-center">
                    LOCATION
                    </h3>
                    <p className="text-white fs-5 text-center">2215 John Daniel Drive</p>
                    <p className="text-white fs-5 text-center">Clark, MO 65243</p>
                </div>
                <div className="col-md-4">
                    <h3 className="text-white fw-bold text-center">AROUND THE WEB</h3>
                    <div className="d-flex justify-content-around align-items-center w-75 mx-auto my-4">
                    <div className={`${styleFooter.footerIcon}`}>
                    <i class="fa-brands fa-facebook-f"></i>
                      </div>
                      <div className={`${styleFooter.footerIcon}`}>
                      <i class="fa-brands fa-twitter"></i>
                      </div>
                      <div className={`${styleFooter.footerIcon}`}>
                      <i class="fa-brands fa-linkedin-in"></i>
                      </div>
                      <div className={`${styleFooter.footerIcon}`}>
                      <i class="fa-solid fa-basketball"></i>
                      </div>
                    </div>
                   
                </div>
                <div className="col-md-4 text-center">
                    <h3 className="text-white fw-bold text-center">ABOUT FREELANCER</h3>
                   <p className="text-white fs-5 text-center">Freelance is a free to use,MITt</p>
                   <p className="text-white fs-5 text-center">licensed Bootstrap theme created by</p>
                   <p className="text-white fs-5 text-center">Route</p>
                </div>
            </div>

            
        </div>
        <div className={`${styleFooter.footerEnd} py-3`}>
                <p className="text-center">Copyright © Your Website 2021</p>

            </div>



    </footer>
 
    
    </>
}