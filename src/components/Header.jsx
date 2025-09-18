import logo from "../assets/logo.svg"
import moon from "../assets/moon.svg"
import sun from "../assets/sun.svg"
export default function Header({theme}) {

    return (
        <header className="flex items-center justify-between bg-gray-200 p-4">
            <a className="border-1 rounded-lg py-1 px-2 flex items-center gap-2" href="/">
                <span className="hidden md:block">Yaqinlarim.uz</span>
                <img className="" src={logo} alt="" />
            </a>

            <p className="text-[#394867] font-bold text-lg">Kontaktlar</p>

            <button className="border-1 rounded-lg py-1 px-2 flex items-center gap-2">
                <img src={theme === "dark" ? sun : moon} alt="" />
                {theme === "dark" ? "Kun rejimi" : "Tun rejimi"}</button>
        </header>
    )
}