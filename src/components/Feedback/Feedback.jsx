import React from 'react'
import "./Feedback.scss"

const Feedback = () => {
    return (
        <>
            <div className="feed">
                <div className="feed__wrapper">
                    <div className="feed__flex">
                        <img src="./feedback.svg" alt="" />
                        <div className="feed__text-flex">
                            <p>AI Feedback</p>
                            <h3>Mock test feedback</h3>
                        </div>
                    </div>
                    <button className="feed__btn">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="#A4A4A4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Feedback
