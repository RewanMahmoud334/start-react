import { Component } from "react";
import styleHome from "./Home.module.css"
import img1 from "./../img/avataaars.svg"




export default function Home(){
    
    
        return <>


        <section className={`${styleHome.homeSection}  d-flex align-items-center justify-content-center ` } id="home">
                <div>
             <figure className=" d-flex align-items-center pt-5 justify-content-center">
             <img src={img1} className="w-50 " alt="" />
             </figure>
                <div className="text-center">
                        <h1 className={` ${styleHome.header}  text-white text-center`}>START REACT</h1>
                        <div className="d-flex align-items-center justify-content-center">
                        <div className={`${styleHome.afterLine}`}></div>
                        <i class={` ${styleHome.homeIcon}   fa-solid fa-star fs-2 px-2 py-3 text-white`}></i>
                        <div className={`${styleHome.beforeLine}`}></div>
                        </div>
                       
                        <p className="text-white text-center fs-4">Graphic Artist - Web Designer - Illustrator</p>
                </div>
                </div>
            

        </section>
       
        
        
        </>
}