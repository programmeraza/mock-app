import React from "react"
import "./ScoreCards.scss"

const ScoreCards = ({ scores }) => {
    if (!scores) return null

    // 🔹 массив карточек с иконками и типами
    const cards = [
        { key: "listening", label: "LISTENING", type: "listening", icon: "./listening.svg" },
        { key: "reading", label: "READING", type: "reading", icon: "./reading.svg" },
        { key: "writing", label: "WRITING", type: "writing", icon: "./writing.svg" },
        { key: "speaking", label: "SPEAKING", type: "speaking", icon: "./speaking.svg" }
    ]

    return (
        <>
            <div className="score">
                <div className="score-cards">
                    {cards.map(card => (
                        <div className="score-card" key={card.key}>
                            <div className={`icon ${card.type}`}>
                                <img src={card.icon} alt={card.label} />
                            </div>
                            <div className="info">
                                <span className="label">{card.label}</span>
                                <strong>{scores[card.key]}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ScoreCards
