import React, { useState } from 'react';
import LogoMobile from '../../../public/img/logo.png';
import LogoDesktop from '../../../public/img/logo_alter.png';
import Signup from '../../../pages/signup/signup';
import { HiOutlineMenu } from "react-icons/hi";
import useMobile from '../../hooks/isMobile';
import '../Header/header.css';

// Importe o componente Sidebar aqui
import Sidebar from '../Sidebar'; // Verifique se o caminho do componente está correto

export default function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const isMobile = useMobile()

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={LogoMobile} alt="Logo" height={isMobile ? 45 : 50} />
        </div>

        <div className="menu">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Monte seu PC</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        <div className="buttons">
          <a><button className='btn-criar' type="button">Criar Conta</button></a>
          <a><button className='btn-entrar' type="button">Entrar</button></a>
        </div>

        {/* Adicione um evento de clique para mostrar/esconder a Sidebar */}
        <HiOutlineMenu className='sanduiche-icon' onClick={toggleSidebar} />

        {/* Renderize a Sidebar condicionalmente com base no estado sidebarVisible */}
        {sidebarVisible && <Sidebar />}
      </div>
    </header>
  )
}
