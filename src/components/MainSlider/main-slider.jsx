import React, { useState, useEffect } from "react";

import '../MainSlider/main-slider.css'

import Banner1 from '../../../public/img/1.png';
import Banner2 from '../../../public/img/2.png';
import Banner3 from '../../../public/img/3.png';

import Banner1Mobile from '../../../public/img/1.png';
import Banner2Mobile from '../../../public/img/2.png';
import Banner3Mobile from '../../../public/img/3.png';

import useMobile from '../../hooks/isMobile';




const SliderMain = () => {
    const isMobile = useMobile();

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={isMobile ? Banner1Mobile : Banner1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={isMobile ? Banner2Mobile : Banner2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={isMobile ? Banner3Mobile : Banner3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default SliderMain;
