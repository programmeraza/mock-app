import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
import Preloader from '../components/Preloader/Preloader'

const RegistrationPage = ({ setIsAuth  }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Preloader />

  return (
    <AnimatePresence mode="wait">
      {isLogin ? (
        <motion.div
          key="login"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4 }}
        >
          <Login switchToSignup={() => setIsLogin(false)} setIsAuth={setIsAuth} />
        </motion.div>
      ) : (
        <motion.div
          key="signup"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          <Signup switchToLogin={() => setIsLogin(true)} setIsAuth={setIsAuth} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default RegistrationPage
