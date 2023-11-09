import React, { useState, useEffect } from 'react';

import LogoMobile from '../../../public/img/logo.png';
import LogoDesktop from '../../../public/img/logo_alter.png';

import useMobile from '../../hooks/isMobile';

import '../Header/header.css';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Defina a largura limite que define dispositivos móveis
    };

    checkIfMobile(); // Verifique o tamanho inicialmente
    window.addEventListener('resize', checkIfMobile); // Atualize quando a janela for redimensionada

    return () => {
      window.removeEventListener('resize', checkIfMobile); // Remova o ouvinte quando o componente for desmontado
    };
  }, []);

  return (
    <>
      <section className='header'>
        <nav className="navbar navbar-dark" >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={LogoDesktop} alt="Logo da visiontec informática" height={isMobile ? 60 : 90} />
            </a>
            <div className="icones-header">
              <svg xmlns="http://www.w3.org/2000/svg" height={isMobile ? "1.5rem" : "1.65rem"} viewBox="0 0 576 512" fill="#FFF" cursor="pointer">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              <button className="nav-bar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="offcanvas offcanvas-end " id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header" >
                {/* <h5 className="offcanvas-title" style={{ color: "#FFF", fontSize: "1.5rem", margin: "0 auto", fontWeight: "700" }}>MENU</h5> */}
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end pe-3">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">A VISIONTEC</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">NOTEBOOK'S</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">PC'S GAMER</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ACESSÓRIOS
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">HD</a></li>
                      <li><a className="dropdown-item" href="#">SSD</a></li>
                      <li><a className="dropdown-item" href="#">Memória</a></li>
                      <li><a className="dropdown-item" href="#">Adaptadores</a></li>
                      <li><a className="dropdown-item" href="#">Placa de Vídeo</a></li>
                      <li><a className="dropdown-item" href="#">Monitor</a></li>
                      <li><a className="dropdown-item" href="#">Mouse</a></li>
                      <li><a className="dropdown-item" href="#">Teclado</a></li>
                      <li><a className="dropdown-item" href="#">Mouse Pad</a></li>
                      <li><a className="dropdown-item" href="#">Headset</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">MONTE SEU PC</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">CONTATO</a>
                  </li>
                </ul>
                {/* <form className="d-flex mt-3" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-success" type="submit">Search</button>
                </form> */}
                <div className="log-in_sign-in_button">
                  <button type="button" className="btn btn-outline-success" >Criar conta</button>
                  <button type="button" className="btn btn-outline-primary">Entrar</button>
                </div>
                <div className="social-medias-menu">
                  {/**ícone faceboook */}
                  <div className="social-icon-fb">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#0866FF">
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                  </div>
                  {/**ícone instagram */}
                  <div className="social-icon-ig">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#A814D2">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </div>
                  {/**ícone whatsapp */}
                  <div className="social-icon-wpp">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#2BB741">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section >
    </>
  )
}