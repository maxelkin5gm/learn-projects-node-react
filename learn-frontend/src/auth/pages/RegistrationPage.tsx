import React, {useState} from 'react';

import Form from "../components/Form/Form";
import InputForm from "../components/inputs/InputForm";
import ButtonForm from "../components/buttons/ButtonForm";
import {AuthService} from "../services/AuthService";
import {useAppDispatch} from "../store/hooks";
import {authActions} from "../store/slices/authSlice";
import {Link, useNavigate} from "react-router-dom";


const RegistrationPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [emailInput, setEmailInput] = useState("")
    const [nameInput, setNameInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [formError, setFormError] = useState("")


    function registrationHandler() {
        AuthService.registration(emailInput, nameInput, passwordInput)
            .then((user) => {
                dispatch(authActions.setUser(user))
                navigate('/')
            })
            .catch((e) => setFormError(e.response?.data?.message || "ERROR"))
        setTimeout(() => setFormError(""), 3000)
    }

    return (
        <div>
            <h1>Registration Page</h1>

            <Form>
                <InputForm placeholder={"Enter email"} value={emailInput} onChange={setEmailInput}/>
                <InputForm placeholder={"Enter name"} value={nameInput} onChange={setNameInput}/>
                <InputForm placeholder={"Enter password"} value={passwordInput} onChange={setPasswordInput}
                           type={"password"}/>
                <ButtonForm onClick={registrationHandler} name={"Зарегестрироваться"}/>

                {formError && <div style={{color: "red"}}>{formError}</div>}
            </Form>
            <Link to={'/'}>Go Main Page</Link>
        </div>
    );
};

export default RegistrationPage;