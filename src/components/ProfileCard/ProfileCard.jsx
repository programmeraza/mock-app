import React from "react"
import { useProfile } from "./ProfileCard"
import "./ProfileCard.scss"

const Profile = () => {
    const {
        profile,
        preview,
        language,
        setLanguage,
        updateField,
        changeAvatar,
        logout
    } = useProfile()

    return (
        <div className="profile-ca">
            <div className="container">
                <div className="profile-wrapper">
                    <div className="profile-card">
                        {/* Avatar */}
                        <div className="profile-avatar">
                            <img
                                src={preview || "./avatar-placeholder.png"}
                                alt="avatar"
                            />

                            <label className="avatar-btn">
                                Edit image
                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={(e) => changeAvatar(e.target.files[0])}
                                />
                            </label>
                        </div>

                        {/* Inputs */}
                        <div className="profile-fields">
                            <Field
                                label="Full Name"
                                value={profile.fullName}
                                onChange={(v) => updateField("fullName", v)}
                            />
                            <Field
                                label="Phone Number"
                                value={profile.phone}
                                onChange={(v) => updateField("phone", v)}
                            />
                            <Field
                                label="Email Address"
                                value={profile.email}
                                onChange={(v) => updateField("email", v)}
                            />
                            <Field
                                label="Date of Birth"
                                type="date"
                                value={profile.birthday}
                                onChange={(v) => updateField("birthday", v)}
                            />
                        </div>

                    </div>
                    <div className="profile-actions">
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                        >
                            <option value="en">English</option>
                            <option value="ru">Русский</option>
                            <option value="uz">O‘zbekcha</option>
                        </select>
                        <button className="logout-btn" onClick={logout}>
                            Log out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Field = ({ label, value, onChange, type = "text" }) => (
    <div className="profile-field">
        <label>{label}</label>
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={`Enter ${label.toLowerCase()}`}
        />
    </div>
)

export default Profile

