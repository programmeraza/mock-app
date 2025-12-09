    import React, { useState } from 'react'
    import "./Login.scss"
    import { Link, useNavigate } from 'react-router-dom'
    import { FaCheckCircle } from "react-icons/fa"
    import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"
    import { MdErrorOutline } from "react-icons/md"
    import toast from 'react-hot-toast'

    const Login = ({ switchToSignup, setIsAuth }) => {
        const navigate = useNavigate()
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [showPassword, setShowPassword] = useState(false)

        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

        const isPasswordValid = password.length >= 6

        const handleSubmit = (e) => {
            e.preventDefault()

            if (!isEmailValid || !isPasswordValid) {
                toast.error("Заполните поля правильно!")
                return
            }

            toast.success("Успешный вход!")

            setTimeout(() => {
                setIsAuth(true)
                navigate("/") 
            }, 1000)
        }

        return (
            <div className="login">
                <div className="container">
                    <div className="login__wrapper">
                        <h1>Sign In</h1>

                        <form onSubmit={handleSubmit}>
                            <div className="login__inp-flex">

                                {/* ====== EMAIL ====== */}
                                <div className="login__label">
                                    <p>Email adress</p>
                                    <div className="login__inp">
                                        <input
                                            type="email"
                                            placeholder='youremail@gmail.com'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />

                                        <div className="login__position">
                                            {email.length > 0 && (
                                                isEmailValid
                                                    ? <FaCheckCircle color="#A175F0" />
                                                    : <MdErrorOutline color="red" />
                                            )}
                                        </div>
                                    </div>

                                    {!isEmailValid && email.length > 0 && (
                                        <span className="login__error">Введите корректный email</span>
                                    )}
                                </div>

                                {/* ====== PASSWORD ====== */}
                                <div className="login__label">
                                    <p>Password</p>
                                    <div className="login__inp">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder='Password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />

                                        <div
                                            className="login__position"
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                        </div>
                                    </div>

                                    {!isPasswordValid && password.length > 0 && (
                                        <span className="login__error">
                                            Минимум 6 символов
                                        </span>
                                    )}
                                </div>

                            </div>

                            {/* ====== BUTTONS ====== */}
                            <div className="login__btn-next">
                                <button
                                    className="login__btn"
                                    type="submit"
                                    disabled={!isEmailValid || !isPasswordValid}
                                >
                                    Sign in
                                </button>

                                <div className="login__line-flex">
                                    <div className='login__line'></div>
                                    <p>Or Login with</p>
                                    <div className='login__line'></div>
                                </div>

                                <div className="login__btn-flex">
                                    <button type="button" className="login__btn-app">
                                        <img src="./google.svg" alt="" />
                                    </button>
                                    <button type="button" className="login__btn-app">
                                        <img src="./apple.svg" alt="" />
                                    </button>
                                </div>
                            </div>

                            <div className="login__text">
                                <p>Don’t have an account?
                                    <Link
                                        className='login__link'
                                        onClick={switchToSignup}
                                    >
                                        Sign up
                                    </Link>
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }

    export default Login
