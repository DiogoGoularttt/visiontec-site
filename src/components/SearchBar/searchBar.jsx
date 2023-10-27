import React from "react";

import "../SearchBar/searchBar.css"

import Lupa from '../SearchBar/magnifying-glass-solid.svg';

export default function SearchBar() {
    return (
        <>
            <section>
                <div className="search-box">
                    <input type="text" className="search-txt" placeholder="O que você procura?" />
                    <a href="#" className="search-btn">
                        <img className="search-icon" src={Lupa} alt="Lupa" height={25} width={25}/>
                    </a>
                </div>
            </section> 
        </>
    )
}