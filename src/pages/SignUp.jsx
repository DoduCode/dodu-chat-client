import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import styled from "styled-components";

import { registerRoute } from "../utils/APIRoutes";

function SignUp() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const toastOptions = {
        position: 'bottom-right',
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            const {username, email, password} = values;
            const {data} = await axios.post(registerRoute, {
                username, 
                email,
                password,
            });
            if (data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                localStorage.setItem('chat-app-user', JSON.stringify(data.user));
                navigate("/");
            }
        }
    };
    
    const handleValidation = () => {
        const {username, email, password, confirmPassword} = values;
        if (password !== confirmPassword) {
            console.log("HIII")
            toast.error("Password and Confirm Password should be the same", toastOptions);
            return false;
        } else if (password.length < 8) {
            toast.error("Password should be more than 8 characters", toastOptions);
            return false;
        } else if (email === "") {
            toast.error("Email field is mandatory", toastOptions);
            return false;
        } else if (username.length < 3) {
            toast.error("Username should be more than 3 characters", toastOptions);
            return false;
        }
        return true;
    };

    const updateValue = (event) => {
        setValues({...values, [event.target.name]:event.target.value})
    }

    return (
        <>
            <FormContainer>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="logo">
                        <h1>DoduChat</h1>
                    </div>

                    <input 
                        type="username" 
                        placeholder = "Username" 
                        name = "username" 
                        onChange={e => updateValue(e)} 
                    />
                    
                    <input 
                        type="email" 
                        placeholder = "Email" 
                        name = "email" 
                        onChange={e => updateValue(e)} 
                    />

                    <input 
                        type="password" 
                        placeholder = "Password" 
                        name = "password" 
                        onChange={e => updateValue(e)} 
                    />

                    <input 
                        type="password" 
                        placeholder = "Confirm Password" 
                        name = "confirmPassword" 
                        onChange={e => updateValue(e)} 
                    />

                    <button type = "submit">Create Account!</button>
                    <span>Already have an Account? <Link to = "/login">Login</Link></span>
                </form>
            </FormContainer>
            <ToastContainer />
        </>
    )
}

const FormContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #131324;
    gap: 1rem;
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        h1 {
            color: white;
        }
    }
    
    form {
        display: flex;
        flex-direction: column;
        padding: 3rem 5rem;
        gap: 2rem;
        /* border-radius: 2rem; */
        background-color: #00000076;

        input {
            background-color: transparent;
            padding: 1rem;
            border: 0.1rem solid #4e0eff;
            color: white;
            width: 100%;
            font-size: 1rem;
            &:focus {
                border: 0.1rem solid #997af0;
                outline: none;
            }
        }
        
        button {
            background-color: #997af0;
            color: white;
            padding: 1rem 2rem;
            border: none;
            font-weight: bold;
            cursor: pointer;
            border-radius: 0.4rem;
            font-size: 1rem;
            transition: 0.3s ease-in-out;
            &:hover {
                background-color: #4e0eff;
            }
        }

        span {
            color: white;
            a {
                color: #4e0eff;
                text-decoration: none;
                font-weight: bold;
            }
        }
    }`;

export default SignUp;