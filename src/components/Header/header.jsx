import React, { useState, useEffect } from 'react';

import LogoMobile from '../../../public/img/logo.png';
import LogoDesktop from '../../../public/img/logo_alter.png';
import Signup from '../../../pages/signup/signup' //configurar para quando o usuário clicar no botão "Criar conta" abra a page de Sign

import useMobile from '../../hooks/isMobile';

import '../Header/header.css';



export default function Header() {

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={LogoMobile} alt="Logo" height={50} />
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
          <a><button className='btn-entrar'type="button">Entrar</button></a>
        </div>
      </div>
    </header>
  )
}