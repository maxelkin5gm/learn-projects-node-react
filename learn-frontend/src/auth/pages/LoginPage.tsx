import React, {useState} from 'react';
import Form from "../components/Form/Form";
import InputForm from "../components/inputs/InputForm";
import ButtonForm from "../components/buttons/ButtonForm";
import {AuthService} from "../services/AuthService";
import {authActions} from "../store/slices/authSlice";
import {useAppDispatch} from "../store/hooks";
import {Link, useNavigate} from "react-router-dom";


const LoginPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [formError, setFormError] = useState("")

    function loginHandler() {
        AuthService.login(emailInput, passwordInput)
            .then((user) => {
                dispatch(authActions.setUser(user))
                navigate('/')
            })
            .catch((e) => setFormError(e.response?.data?.message || "ERROR"))
        setTimeout(() => setFormError(""), 3000)
    }

    return (
        <main>
            <h1>Login Page</h1>

            <Form>
                <InputForm placeholder={"Enter email"} value={emailInput} onChange={setEmailInput} />
                <InputForm placeholder={"Enter password"} value={passwordInput} onChange={setPasswordInput} type={"password"} />
                <ButtonForm onClick={loginHandler} name={"Войти"}/>

                {formError && <div style={{color: "red"}}>{formError}</div>}
            </Form>
            <Link to={'/'}>Go Main Page</Link>
        </main>
    );
};

export default LoginPage;