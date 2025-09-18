import { useState } from "react"
import Header from "./Header"
import avatar from "../assets/avatar.png"
import addImage from "../assets/addImage.png"
import user from "../assets/user.svg"
import twoUsers from "../assets/twoUsers.svg"

export default function Home() {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    return (
        <section className="">
            <Header theme="light" />
            <div className="flex px-4 py-10 flex-col gap-10">
                <div className="">
                    <h2 className="text-xl font-medium mb-4 tracking-wide">Kontakt yaratish</h2>
                    <div className="w-full md:w-[350px] bg-[#394867] rounded-2xl shadow-2xl">
                        <div className="relative w-fit py-8 m-auto">
                            <img className="m-auto" src={avatar} alt="" />
                            <img className="absolute right-0 bottom-8" src={addImage} alt="" />
                        </div>
                        <div className="border-top-2 p-3 rounded-2xl bg-white">
                            <h3 className="mb-2 text-lg ">Iltmos ismingizni kiriting</h3>
                            <div className="border-2 rounded-lg mb-2 flex items-center gap-2 p-2">
                                <img src={user} alt="" />
                                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full h-full outline-none border-none" type="text" placeholder="Ism" />
                            </div>
                            <div className="border-2 rounded-lg mb-2 flex items-center gap-2 p-2">
                                <img src={twoUsers} alt="" />
                                <span className="h-6 w-[1px] bg-black"></span>
                                <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full h-full outline-none border-none"  type="text" placeholder="Familiya (Ixtiyoriy)" />
                            </div>
                            <div className="border-2 rounded-lg mb-2 flex items-center gap-2 p-2">
                                <img src={twoUsers} alt="" />
                                <span className="h-6 w-[1px] bg-black"></span>
                                <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full h-full outline-none border-none"  type="phone" placeholder="Telefon raqam" />
                            </div>
                            <div className="border-2 rounded-lg mb-2 flex items-center gap-2 p-2">
                                <img src={twoUsers} alt="" />
                                <span className="h-6 w-[1px] bg-black"></span>
                                <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full h-full outline-none border-none"  type="email" placeholder="Elektron pochta" />
                            </div>
                            <div className="border-2 rounded-lg mb-2 flex items-center gap-2 p-2">
                                <img src={twoUsers} alt="" />
                                <span className="h-6 w-[1px] bg-black"></span>
                                <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full h-full outline-none border-none"  type="text" placeholder="Qo'shimcha ma'lumot" />
                            </div>
                            <button className="w-full bg-[#394867] text-white p-2 rounded-lg">Qo'shish</button>
                        </div>
                    </div>
                </div>
                <div className="ml-6 w-full">
                    <h2  className="text-xl font-medium mb-4 tracking-wide text-center">Kontaktlar</h2>
                    <div className="bg-gray-200 rounded-2xl shadow-2xl w-full px-4 py-5">
                        <div className="flex items-center justify-between mb-6">
                            <h3>Usmonqul Hakimov</h3>
                            <img className="w-8 h-8 border-1 rounded-full" src={avatar} alt="" />
                        </div>
                        <div className="border-1 rounded-lg mb-2 flex items-center gap-2 p-1.5">
                                <img src={twoUsers} alt="" />
                                <span className="h-6 w-[1px] bg-black"></span>
                                <input className="w-full grow h-full outline-none border-none"  type="text" placeholder="Qo'shimcha ma'lumot" />
                                <span className="h-6 w-[1px] bg-black"></span>
                                <button className="text-sm">Barchasi</button>
                        </div>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}