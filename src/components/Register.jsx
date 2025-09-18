import avatar from "../assets/avatar.png"
import addImage from "../assets/addImage.png"
import user from "../assets/user.svg"
import twoUsers from "../assets/twoUsers.svg"
import loginBg from "../assets/loginBg.png"
import { useState } from "react"

export default function Register({ handleLogin }) {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")

    const fakeUser = {
        name: "Ali",
        lastName: "Valiyev"
    }

    const handleSignIn = () => {
        if (name === fakeUser.name.toLowerCase() && lastName === fakeUser.lastName.toLowerCase()) {
            alert("Kirish muvaffaqiyatli")
            handleLogin()
        } else {
            alert("Ism va Familiya noto'g'ri")
        }
    }

  return (
    <section className="w-full h-screen flex items-center justify-center">
        <div className="w-1/2 lg:w-1/3 bg-[#394867] rounded-2xl shadow-2xl">
            <div className="relative w-fit py-8 m-auto">
                <img className="m-auto" src={avatar} alt="" />
                <img className="absolute right-0 bottom-8" src={addImage} alt="" />
            </div>
            <div className="border-top-2 p-3 rounded-2xl bg-white">
                <h1 className="mb-2 text-lg ">Iltmos ismingizni kiriting</h1>
                <div className="border-2 rounded-lg mb-2 flex items-center gap-2 p-2">
                    <img src={user} alt="" />
                    <input value={name} onChange={(e) => setName(e.target.value)} className="w-full h-full outline-none border-none" type="text" placeholder="Ism" />
                </div>
                <div className="border-2 rounded-lg mb-2 flex items-center gap-2 p-2">
                    <img src={twoUsers} alt="" />
                    <span className="h-6 w-[1px] bg-black"></span>
                    <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full h-full outline-none border-none"  type="text" placeholder="Familiya (Ixtiyoriy)" />
                </div>
                <button onClick={handleSignIn} className="w-full bg-[#394867] text-white p-2 rounded-lg">Kirish</button>
            </div>
        </div>
        <img className="w-1/2 lg:w-1/3 absolute bottom-0 right-0 -z-10" src={loginBg} alt="" />
    </section>
  )
}