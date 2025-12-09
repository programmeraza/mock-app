import React, { useState } from 'react'
import "./Signup.scss"
import { Link } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"
import { MdErrorOutline } from "react-icons/md"

const Signup = ({ switchToLogin  }) => {
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

    if (!isEmailValid || !isPasswordValid || !isRepeatValid) {
      alert("❌ Заполните поля правильно!")
      return
    }

    alert("✅ Регистрация успешна!")
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

