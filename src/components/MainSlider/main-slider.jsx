import React, { useState, useEffect } from "react";

import '../MainSlider/main-slider.css'

import Banner1 from '../../../public/img/1.png';
import Banner2 from '../../../public/img/2.png';
import Banner3 from '../../../public/img/3.png';

//  import Banner1Mobile from '../../img/slide-1-.jpg';
//  import Banner2Mobile from '../../img/slide-2-mob.jpg';
//  import Banner3Mobile from '../../img/slide-3-mob.jpg';




const SliderMain = () => {
    const [cont, setCont] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            proximaImg();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [cont]);

    function proximaImg() {
        let nextCont = cont + 1;

        if (nextCont > 3) {
            nextCont = 1;
        }

        setCont(nextCont);
    }

    return (
        <section className="slider">
            <div className="slider-content">
                <input type="radio" name="btn-radio" id="radio1" checked={cont === 1} />
                <input type="radio" name="btn-radio" id="radio2" checked={cont === 2} />
                <input type="radio" name="btn-radio" id="radio3" checked={cont === 3} />

                <div className={`slide-box primeiro ${cont === 1 ? 'active' : ''}`}>
                    <img className="img-desktop" src={Banner3} alt="slide 1" />
                    <img className="img-mobile" src={''} alt="slide 1" />
                </div>

                <div className={`slide-box ${cont === 2 ? 'active' : ''}`}>
                    <img className="img-desktop" src={Banner1} alt="slide 2" />
                    <img className="img-mobile" src={''} alt="slide 2" />
                </div>

                <div className={`slide-box ${cont === 3 ? 'active' : ''}`}>
                    <img className="img-desktop" src={Banner2} alt="slide 3" />
                    <img className="img-mobile" src={''} alt="slide 3" />
                </div>

                <div className="nav-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                </div>

                <div className="nav-manual">
                    <label htmlFor="radio1" className="manual-btn"></label>
                    <label htmlFor="radio2" className="manual-btn"></label>
                    <label htmlFor="radio3" className="manual-btn"></label>
                </div>
            </div>
        </section >
    );
}

export default SliderMain;
