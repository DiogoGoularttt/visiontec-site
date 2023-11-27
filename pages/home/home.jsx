import React from "react";

import Header from '../../src/components/Header/header'
import MainSlider from '../../src/components/MainSlider/main-slider'
import Button from "../../src/components/Button";

import ImageTeste from "../../public/img/3.png"

import './home.css'
import useAuth from "../../src/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../src/components/Sidebar";

const Home = () => {
    // const { signout } = useAuth();
    // const navigate = useNavigate();

    return (
        <>
            <Header /> 
            <MainSlider/>
        </>
    )
}
export default Home;