import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WritingTest.scss";
import { WiCloudUp } from "react-icons/wi";

const WritingTest = () => {
    const [activeTab, setActiveTab] = useState("content");
    const [task1File, setTask1File] = useState(null);
    const [task2File, setTask2File] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="writingpage">
            <div className="writing">
                <div className="writing__header">
                    <div className="container">
                        <div className="writing__wrapper">
                            <Link to="/tests">
                                <button className="writing__btn">
                                    <img src="/arrow1.svg" alt="back" />
                                </button>
                            </Link>
                            <h2 className="writing__title">Writing Test</h2>
                            <div className="writing__time">30:00</div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="writing__nav">
                        <button
                            className={activeTab === "content" ? "active" : ""}
                            onClick={() => setActiveTab("content")}
                        >
                            Tasks
                        </button>
                        <button
                            className={activeTab === "questions" ? "active" : ""}
                            onClick={() => setActiveTab("questions")}
                        >
                            Upload
                        </button>
                    </div>
                    {activeTab === "content" && (
                        <div className="writing__contents">
                            <div className="content-section">
                                <input type="checkbox" id="task1" className="content-toggle" />
                                <label htmlFor="task1" className="content-header">
                                    <h2>IELTS Academic Writing Task 1</h2>
                                    <span className="toggle-icon">⯆</span>
                                </label>

                                <div className="content-body">
                                    <p>
                                        This graph shows the proportion of four different materials
                                        that were recycled from 1982 to 2010.
                                    </p>

                                    <img src="/logo.png" alt="graph" />

                                    <button
                                        className="content-btn"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        See the graph
                                    </button>
                                </div>
                            </div>
                            <div className="content-section">
                                <input type="checkbox" id="task2" className="content-toggle" />
                                <label htmlFor="task2" className="content-header">
                                    <h2>IELTS Academic Writing Task 2</h2>
                                    <span className="toggle-icon">⯆</span>
                                </label>
                                <div className="content-body">
                                    <p>
                                        Learning English at school is often seen as more important than learning local languages. If these are not taught, many are at risk of dying out.
                                    </p>
                                    <p>
                                        In your opinion, is it important for everyone to learn English? Should we try to ensure the survival of local languages and, if so, how?
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "questions" && (
                        <div className="writing__questions">
                            <div className="writing__question">
                                <h3>Upload the answer for Task 1</h3>

                                <label htmlFor="file1" className="upload-box">
                                    <input
                                        id="file1"
                                        type="file"
                                        accept=".pdf,.png,.jpg,.jpeg"
                                        onChange={(e) => setTask1File(e.target.files[0])}
                                    />
                                    <div>
                                        <WiCloudUp className="upload-icon" />
                                        <h5>
                                            {task1File ? task1File.name : "Press to choose a file"}
                                        </h5>
                                        <h6>PDF, PNG, JPG (max 50MB)</h6>
                                    </div>
                                </label>
                            </div>

                            <div className="writing__question">
                                <h3>Upload the answer for Task 2</h3>

                                <label htmlFor="file2" className="upload-box">
                                    <input
                                        id="file2"
                                        type="file"
                                        accept=".pdf,.png,.jpg,.jpeg"
                                        onChange={(e) => setTask2File(e.target.files[0])}
                                    />
                                    <div>
                                        <WiCloudUp className="upload-icon" />
                                        <h5>
                                            {task2File ? task2File.name : "Press to choose a file"}
                                        </h5>
                                        <h6>PDF, PNG, JPG (max 50MB)</h6>
                                    </div>
                                </label>
                            </div>

                            <div className="writing__test-bottom">
                                <Link to="/tests">
                                    <button className="writing__button-1">
                                        <img src="/arrow1.svg" alt="prev" />
                                    </button>
                                </Link>

                                <button
                                    className="writing__button-2"
                                    disabled={!task1File || !task2File}
                                >
                                    Confirm
                                </button>

                                <Link to="/tests/writing/start">
                                    <button className="writing__button-3">
                                        <img src="/arrow1.svg" alt="next" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* MODAL */}
            {isModalOpen && (
                <div
                    className="image-modal"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="image-modal__content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="image-modal__close"
                            onClick={() => setIsModalOpen(false)}
                        >
                            ✕
                        </button>

                        <img src="/logo.png" alt="Graph large" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default WritingTest;
