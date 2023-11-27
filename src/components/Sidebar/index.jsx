import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";
import { BiSolidWrench } from "react-icons/bi";
import { BsExclamationCircleFill } from "react-icons/bs";
import { GiTwoCoins } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { FaGear } from "react-icons/fa6";


import './style.css';

const Sidebar = () => {
    const [sidebarVisibleOff, setSidebarVisibleOff] = useState(true);

    const toggleSidebarOff = () => {
        setSidebarVisibleOff(!sidebarVisibleOff);
    };

    return (
        <div className={`sidebar ${sidebarVisibleOff ? 'visible' : 'hidden'}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <HiX
                    onClick={toggleSidebarOff}
                    style={{
                        color: '#FFF',
                        fontSize: '3rem',
                        padding: '20px 0 0 20px'
                    }}
                />
                <div>
                    <FaGear
                        style={{
                            color: '#FFF',
                            fontSize: '2.2rem',
                            padding: '20px 5px 0 0'
                        }} />


                    <IoIosNotifications
                        style={{
                            color: '#FFF',
                            fontSize: '2.5rem',
                            padding: '20px 20px 0 0'
                        }}
                    />
                </div>
            </div>
            <div className="menu-mobile">
                <ul>
                    <li><a href="#"><AiFillHome />Home</a></li>
                    <li><a href="#"><FaShop />Produtos</a></li>
                    <li><a href="#"><BiSolidWrench />Monte seu PC</a></li>
                    <li><a href="#"><FaCartShopping />Carrinho</a></li>
                    <li><a href="#"><IoChatbubbleEllipsesSharp />Chat</a></li>
                    <li><a href=""><GiTwoCoins />Moedas</a></li>
                    <li><a href="#"><BsExclamationCircleFill />Suporte</a></li>
                    <li><a href=""><HiOutlineDesktopComputer />Sobre nós</a></li>

                </ul>
            </div>

            <div className="buttons-mobile">
                <a><button className='btn-criar' type="button">Criar Conta</button></a>
                <a><button className='btn-entrar' type="button">Entrar</button></a>
            </div>
        </div>
    );
};

export default Sidebar;
