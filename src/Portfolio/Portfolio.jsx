import { Component } from "react";
import stylePortfolio from "./Portfolio.module.css"
import img1 from "./../img/cabin.png"
import img2 from "./../img/cake.png"
import img3 from "./../img/circus.png"
import img4 from "./../img/game.png"
import img5 from "./../img/safe.png"
import img6 from "./../img/submarine.png"



export default function Portfolio(){
    
    
        return <>
              <section id="portfolio" className="py-5">
                <div className="container py-5">
                <h2 className={`${stylePortfolio.header}`}>PORTFOLIO</h2>
                <div>
                <div className="d-flex align-items-center justify-content-center w-25 mx-auto">
                        <div className={`${stylePortfolio.afterLine}`}></div>
                        <i class={` ${stylePortfolio.portfolioIcon}   fa-solid fa-star fs-2 px-2 py-3 `}></i>
                        <div className={`${stylePortfolio.beforeLine}`}></div>
                        </div>

                        <div className="row">
                                <div className="col-md-4">
                                        <figure className="rounded-2 position-relative">
                                                <img src={img1} className="w-100 rounded-2" alt="" />
                                                <div className={` ${stylePortfolio.layer} d-flex align-items-center justify-content-center rounded-2` }>
                                                <i class={`${stylePortfolio.layerIcon} fa-solid fa-plus`}></i>
                                                </div>
                                        </figure>
                                </div>
                                <div className="col-md-4">
                                        <figure className="rounded-2 position-relative">
                                                <img src={img2} className="w-100 rounded-2" alt="" />
                                                <div className={` ${stylePortfolio.layer} d-flex align-items-center justify-content-center rounded-2` }>
                                                <i class={`${stylePortfolio.layerIcon} fa-solid fa-plus`}></i>
                                                </div>
                                        </figure>
                                </div>
                                <div className="col-md-4">
                                        <figure className="rounded-2 position-relative">
                                                <img src={img3} className="w-100 rounded-2" alt="" />
                                                <div className={` ${stylePortfolio.layer} d-flex align-items-center justify-content-center rounded-2` }>
                                                <i class={`${stylePortfolio.layerIcon} fa-solid fa-plus`}></i>
                                                </div>
                                        </figure>
                                </div>
                                <div className="col-md-4">
                                        <figure className="rounded-2 position-relative">
                                                <img src={img4} className="w-100 rounded-2" alt="" />
                                                <div className={` ${stylePortfolio.layer} d-flex align-items-center justify-content-center rounded-2` }>
                                                <i class={`${stylePortfolio.layerIcon} fa-solid fa-plus`}></i>
                                                </div>
                                        </figure>
                                </div>
                                <div className="col-md-4">
                                        <figure className="rounded-2 position-relative">
                                                <img src={img5} className="w-100 rounded-2" alt="" />
                                                <div className={` ${stylePortfolio.layer} d-flex align-items-center justify-content-center rounded-2` }>
                                                <i class={`${stylePortfolio.layerIcon} fa-solid fa-plus`}></i>
                                                </div>
                                        </figure>
                                </div>
                                <div className="col-md-4">
                                        <figure className="rounded-2 position-relative">
                                                <img src={img6} className="w-100 rounded-2" alt="" />
                                                <div className={` ${stylePortfolio.layer} d-flex align-items-center justify-content-center rounded-2` }>
                                                <i class={`${stylePortfolio.layerIcon} fa-solid fa-plus`}></i>
                                                </div>
                                        </figure>
                                </div>
                        </div>
                </div>
                </div>
          
              </section>
        
        
        </>
}