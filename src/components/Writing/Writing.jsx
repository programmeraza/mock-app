import React from 'react'
import { Link } from 'react-router-dom'
import './Writing.scss'
const Writing = () => {
    return (
        <div>
            <div className="writing writingpage">
                <div className="writing__header">
                    <div className="container">
                        <div className="writing__wrapper">
                            <Link to="/tests">
                                <button className="writing__btn">
                                    <img src="./arrow1.svg" alt="" />
                                </button>
                            </Link>
                            <h2 className="writing__title">Writing test</h2>
                            <div className="writing__time"></div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="writing__task">
                        <h1>IELTS Writing Test</h1>
                        <h4>Improve structure + idea development</h4>
                        <div className="writing__card">
                            <img src="./wallet.svg" alt="" className="writing__image" />
                            <div className="writing__text">
                                <h3>Task 1 & Task 2</h3>
                                <p>Formal writing tasks</p>
                            </div>
                        </div>
                        <div className="writing__card">
                            <img src="./clock.svg" alt="" className="writing__image" />
                            <div className="writing__text">
                                <h3>60 mins</h3>
                                <p>Total Duration</p>
                            </div>
                        </div>
                    </div>

                    <div className="writing__rule">
                        <h1>Before you start</h1>
                        <ul>
                            <li>
                                The writing section includes Task 1 (150 words) and Task 2 (250 words).
                            </li>
                            <li>
                                You must manage time on your own — there is no separate timer for each task.
                            </li>
                            <li>Answers should be original and written in your own words.</li>
                            <li>AI will analyze structure, vocabulary, coherence, and grammar.</li>
                            <li>
                                You can retry this section to improve your writing performance.
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to="/tests/writing/start">
                    <div className="writing__bottom">
                        <button>Start writing test</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Writing
