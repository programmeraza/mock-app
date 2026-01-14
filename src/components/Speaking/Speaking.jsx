import React from 'react'
import { Link } from 'react-router-dom'
import './Speaking.scss'
const Speaking = () => {
    return (
        <div>
            <div>
                <div className="speaking speakingpage">
                    <div className="speaking__header">
                        <div className="container">
                            <div className="speaking__wrapper">
                                <Link to="/tests">
                                    <button className="speaking__btn">
                                        <img src="/arrow1.svg" alt="" />
                                    </button>
                                </Link>
                                <h2 className="speaking__title">Speaking Test</h2>
                                <div className="speaking__time"></div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="speaking__task">
                            <h1>IELTS Speaking Test</h1>
                            <h4>Improve comprehension skills</h4>

                            <div className="speaking__card">
                                <img src="/wallet.svg" alt="" className="speaking__image" />
                                <div className="speaking__text">
                                    <h3>3 Parts</h3>
                                    <p>Structured interview format</p>
                                </div>
                            </div>
                            <div className="speaking__card">
                                <img src="/clock.svg" alt="" className="speaking__image" />
                                <div className="speaking__text">
                                    <h3>11–14 mins</h3>
                                    <p>Total Duration</p>
                                </div>
                            </div>
                        </div>
                        <div className="speaking__rule">
                            <h1>Before you start</h1>
                            <ul>
                                <li>
                                    Make sure your microphone is working and you’re in a quiet environment.
                                </li>
                                <li>
                                    You will respond to questions verbally — audio recording is necessary.
                                </li>
                                <li>The test includes Introduction, Cue Card, and Discussion sections.</li>
                                <li>Your speaking performance will be analyzed based on IELTS criteria.</li>
                                <li>
                                    You can retake the speaking test multiple times to improve fluency.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link to="/tests/speaking/start">
                        <div className="speaking__bottom">
                            <button>Start speaking test</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Speaking
