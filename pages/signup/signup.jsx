import React, { useState } from "react";
import {toast} from "react-toastify"
import Input from '../../src/components/Input/index';
import Button from '../../src/components/Button/index';
import * as C from './style';
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../src/hooks/useAuth';
import LogoSignin from "../../src/components/LogoSignin/logo_signin";

const Signup = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os E-mails não coincidem!")
            return;
        }
        const res = signup(email, senha);
        if (res) {
            setError(res);
            return;
        }
        alert("Usuário cadastrado com sucesso!")
        navigate("/");
    }

    return (
        <C.Container>
            <C.Content>
                <LogoSignin />
                <Input
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                    type="email"
                    placeholder="Confirme seu E-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />
                <Input
                    type="password"
                    placeholder="Digite sua Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="Cadastrar" onClick={handleSignup} />
                <C.LabelSignup>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/">&nbsp;Entre</Link>
                    </C.Strong>
                </C.LabelSignup>
            </C.Content>
        </C.Container>
    )
}

export default Signup

