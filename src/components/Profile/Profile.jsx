import React from 'react'
import "./Profile.scss"

const Profile = () => {
    return (
        <>
            <div className="profile">
                <div className="profile__wrapper">
                    <div className="profile__content">
                        <img src="./avatar.png" alt="" />
                        <div className="profile__name">
                            <p>Salom</p>
                            <h3>Salima Karimova</h3>
                        </div>
                    </div>
                    <div className="profile__coin">
                        <img src="./coin.svg" alt="" />
                        <h3>10</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
