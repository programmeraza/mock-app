import { useState } from "react"

export const useProfile = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    phone: "",
    email: "",
    birthday: "",
    avatar: null
  })

  const [preview, setPreview] = useState(null)
  const [language, setLanguage] = useState("en")

  const updateField = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }))
  }

  const changeAvatar = (file) => {
    if (!file) return
    setProfile(prev => ({ ...prev, avatar: file }))
    setPreview(URL.createObjectURL(file))
  }

  const logout = () => {
    // тут можно очистить token / localStorage
    console.log("Logout")
  }

  return {
    profile,
    preview,
    language,
    setLanguage,
    updateField,
    changeAvatar,
    logout
  }
}
