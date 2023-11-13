import React from "react";

import Header from '../../src/components/Header/header'
import MainSlider from '../../src/components/MainSlider/main-slider'

import './home.css'

const Home = () => {
    return (
        <div className="home">
            <Header />
            <MainSlider />
        </div>
    )
}

export default Home;