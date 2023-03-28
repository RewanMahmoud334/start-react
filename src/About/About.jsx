import React from "react"
import styleAbout from "./About.module.css"


export default function About(){



    return <>

    <section className={`${styleAbout.aboutSection} py-5`} id="about">
        <div className="container py-5 ">

        <h2 className={`${styleAbout.header}`}>About</h2>
                <div className="d-flex align-items-center justify-content-center w-25 mx-auto">
                        <div className={`${styleAbout.afterLine}`}></div>
                        <i class={` ${styleAbout.aboutIcon}   fa-solid fa-star fs-2 px-2 py-3 `}></i>
                        <div className={`${styleAbout.beforeLine}`}></div>
                        </div>
            <div className="row">
                <div className="col-md-4 offset-2 ">
                    <p className={`${styleAbout.paragraph} `}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>

                <div className="col-md-4 ">
                    <p className={`${styleAbout.paragraph}`}>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>

            </div>

        </div>
    </section>
    
    
    </>
}