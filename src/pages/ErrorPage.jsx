import React from "react"
import "./pages.scss"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-card">
        <span className="error-code">404</span>
        <h1>Page not found</h1>
        <p>
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <Link to="/" className="error-btn">
          Go back to dashboard
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
