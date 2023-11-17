import React from "react";

import Header from '../../src/components/Header/header'
import MainSlider from '../../src/components/MainSlider/main-slider'
import Button from "../../src/components/Button";

import './home.css'
import useAuth from "../../src/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <div className="home">
            <Header />
            <MainSlider />
            <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
                Sair
            </Button>
        </div>
    )
}

export default Home;