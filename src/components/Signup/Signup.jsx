import React, { useState } from 'react'
import "./Signup.scss"
import { Link, useNavigate } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"
import { MdErrorOutline } from "react-icons/md"
import toast from 'react-hot-toast'

const Signup = ({ switchToLogin, setIsAuth }) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const isPasswordValid = password.length >= 6
  const isRepeatValid = repeatPassword === password && repeatPassword.length >= 6

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!isEmailValid) {
      toast.error("Введите корректный Email")
      return
    }

    if (!isPasswordValid) {
      toast.error("Пароль минимум 6 символов")
      return
    }

    if (!isRepeatValid) {
      toast.error("Пароли не совпадают")
      return
    }

    toast.success("Регистрация прошла успешно!")

    setTimeout(() => {
      setIsAuth(true)
      navigate("/")
    }, 1000)
  }

  return (
    <div className="signup">
      <div className="container">
        <div className="signup__wrapper">
          <h1>Sign Up</h1>

          <form onSubmit={handleSubmit}>
            <div className="signup__inp-flex">

              {/* ===== EMAIL ===== */}
              <div className="signup__label">
                <p>Email adress</p>
                <div className="signup__inp">
                  <input
                    type="email"
                    placeholder='youremail@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="signup__position">
                    {email.length > 0 && (
                      isEmailValid
                        ? <FaCheckCircle color="#A175F0" />
                        : <MdErrorOutline color="red" />
                    )}
                  </div>
                </div>

                {!isEmailValid && email.length > 0 && (
                  <span style={{ color: 'red', fontSize: 12 }}>
                    Введите корректный Email
                  </span>
                )}
              </div>

              {/* ===== PASSWORD ===== */}
              <div className="signup__label">
                <p>Create Password</p>
                <div className="signup__inp">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div
                    className="signup__position"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </div>
                </div>

                {!isPasswordValid && password.length > 0 && (
                  <span style={{ color: 'red', fontSize: 12 }}>
                    Минимум 6 символов
                  </span>
                )}
              </div>

              {/* ===== REPEAT PASSWORD ===== */}
              <div className="signup__label">
                <p>Repeat Password</p>
                <div className="signup__inp">
                  <input
                    type={showRepeatPassword ? "text" : "password"}
                    placeholder='Password'
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    required
                  />
                  <div
                    className="signup__position"
                    onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                  >
                    {showRepeatPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                  </div>
                </div>

                {repeatPassword.length > 0 && !isRepeatValid && (
                  <span style={{ color: 'red', fontSize: 12 }}>
                    Пароли не совпадают
                  </span>
                )}

                {isRepeatValid && repeatPassword.length > 0 && (
                  <span style={{ color: '#A175F0', fontSize: 12 }}>
                    Пароли совпадают
                  </span>
                )}
              </div>

            </div>

            {/* ===== BUTTONS ===== */}
            <div className="signup__btn-next">
              <button
                className="signup__btn"
                type="submit"
                disabled={!isEmailValid || !isPasswordValid || !isRepeatValid}
              >
                Sign up
              </button>

              <div className="signup__line-flex">
                <div className='signup__line'></div>
                <p>Or Sign up with</p>
                <div className='signup__line'></div>
              </div>

              <div className="signup__btn-flex">
                <button type="button" className="signup__btn-app">
                  <img src="./google.svg" alt="" />
                </button>
                <button type="button" className="signup__btn-app">
                  <img src="./apple.svg" alt="" />
                </button>
              </div>
            </div>

            <div className="signup__text">
              <p>Already have an account?
                <Link
                  className='signup__link'
                  onClick={switchToLogin}
                >
                  Sign in
                </Link>
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
