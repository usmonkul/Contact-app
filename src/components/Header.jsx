import { FaCode } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
export default function Header({theme}) {

    return (
        <header className="flex items-center justify-between bg-gray-200 p-4">
            <a className="border-1 rounded-lg py-1 px-2 flex items-center gap-2 hover:bg-[#394867] hover:text-white" href="/">
                <span className="hidden md:block tracking-wide">Yaqinlarim.uz</span>
                <FaCode className="text-xl" />

            </a>

            <p className="text-[#394867] font-bold text-2xl">Kontaktlar</p>

            <button className="border-1 rounded-lg py-1 px-2 flex items-center gap-2 hover:bg-[#394867] hover:text-white">
                {theme === "dark" ? <MdOutlineWbSunny className="text-xl" /> : <FaRegMoon className="text-xl" />}
                <span className="hidden md:block">{theme === "dark" ? "Kun rejimi" : "Tun rejimi"}</span>
            </button>
        </header>
    )
}