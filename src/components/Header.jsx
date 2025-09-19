import clsx from "clsx";
import { FaCode } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
export default function Header({theme, setTheme}) {

    return (
        <header className={clsx("flex items-center justify-between p-4", theme === "dark" ? "bg-[#263148] text-white" : "bg-gray-200")}>
            <a className="border-1 rounded-lg py-1 px-2 flex items-center gap-2 hover:bg-[#394867] hover:text-white" href="/">
                <span className="hidden md:block tracking-wide">Yaqinlarim.uz</span>
                <FaCode className="text-xl" />

            </a>

            <p className={clsx("font-bold text-2xl", theme === "dark" ? "text-white" : "text-[#394867]")}>Kontaktlar</p>

            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="border-1 rounded-lg py-1 px-2 flex items-center gap-2 hover:bg-[#394867] hover:text-white">
                {theme === "dark" ? <MdOutlineWbSunny className="text-xl" /> : <FaRegMoon className="text-xl" />}
                <span className="hidden md:block">{theme === "dark" ? "Kun rejimi" : "Tun rejimi"}</span>
            </button>
        </header>
    )
}