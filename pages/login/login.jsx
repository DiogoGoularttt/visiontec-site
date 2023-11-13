import React, { useState } from "react";

import Logo_login from '../../public/img/logo_alter.png'

import './login.css'


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="conteudo">
            <div className="conteudo-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title"><img src={Logo_login} alt="Visiontec Informática" height={100} width={250} /></span>

                        <div className="wrap-input">
                            <input
                                className={email !== "" ? "has-val input" : "input"}
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />

                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={password !== "" ? "has-val input" : "input"}
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>

                        <div className="conteudo-login-form-btn">
                            <button className="login-form-btn">Login</button>
                        </div>

                        <div className="texto-final">
                            <span className="text1">Não possui conta?</span>
                            <a href="#" className="text2">Criar conta</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;