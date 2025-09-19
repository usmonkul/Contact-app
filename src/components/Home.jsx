import { useState } from "react"
import Header from "./Header"
import avatar from "../assets/avatar.png"
import addImage from "../assets/addImage.png"
import ContactUser from "./ContactUser"
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { CiPhone } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { SlNote } from "react-icons/sl";
import { CiStar } from "react-icons/ci";


const contactsData = [
    {
        id: 1,
        name: "Usmonqul",
        lastName: "Hakimov",
        phone: "+998 90 123 45 67",
        email: "usmonqul@gmail.com",
        additionalInfo: "Qo'shimcha ma'lumot",
        isFavorite: true

    },
    {
        id: 2,
        name: "Alisher",
        lastName: "Karimov",
        phone: "+998 90 123 45 67",
        email: "usmonqul@gmail.com",
        additionalInfo: "Qo'shimcha ma'lumot",
        isFavorite: false

    },
    {
        id: 3,
        name: "Abdug'affor",
        lastName: "Rahimov",
        phone: "+998 90 123 45 67",
        email: "usmonqul@gmail.com",
        additionalInfo: "Qo'shimcha ma'lumot",
        isFavorite: false
    }
]

export default function Home() {
    const [contacts, setContacts] = useState(contactsData)
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [additionalInfo, setAdditionalInfo] = useState("")
    const [isFavorite, setIsFavorite] = useState(false)
    const [search, setSearch] = useState("")

    const handleAddContact = () => {

        setContacts([{name, lastName, phone, email, additionalInfo, isFavorite}, ...contacts])
    }

    const handleFavorite = (id) => {
        setContacts(contacts.map(c => c.id === id ? {...c, isFavorite: !c.isFavorite} : c))
    }

    const handleFilder = () => {
        if (search === "") {
            return contacts
        } else {
            return contacts.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
        }
    }

    return (
        <section className="">
            <Header theme="light" />
            <div className="flex py-10 flex-col lg:flex-row gap-10 md:gap-2 px-4">
                <div className="">
                    <h2 className="text-xl font-medium mb-4 tracking-wide">Kontakt yaratish</h2>
                    <div className="w-full md:w-[450px] bg-[#394867] rounded-2xl shadow-2xl">
                        <div className="relative w-fit py-8 m-auto">
                            <img className="m-auto" src={avatar} alt="" />
                            <img className="absolute right-0 bottom-8" src={addImage} alt="" />
                        </div>
                        <div className="border-top-2 p-3 rounded-2xl bg-white">
                            <h3 className="mb-2 text-lg ">Iltmos ismingizni kiriting</h3>
                            <div className="border-1 rounded-lg mb-2 flex items-center gap-2 p-2">
                                <CiUser className="text-2xl" />
                                <span className="h-6 w-[1px] bg-black"></span>
                                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full h-full outline-none border-none" type="text" placeholder="Ism" />
                            </div>
                            <div className="border-1 rounded-lg mb-2 flex items-center gap-2 p-2">
                                <FiUsers className="text-xl" />
                                <span className="h-6 w-[1px] bg-black"></span>
                                <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full h-full outline-none border-none"  type="text" placeholder="Familiya (Ixtiyoriy)" />
                            </div>
                            <div className="border-1 rounded-lg mb-2 flex items-center gap-2 p-2">
                                <CiPhone className="text-2xl" />
                                <span className="h-6 w-[1px] bg-black"></span>
                                <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full h-full outline-none border-none"  type="phone" placeholder="Telefon raqam" />
                            </div>
                            <div className="border-1 rounded-lg mb-2 flex items-center gap-2 p-2">
                                <HiOutlineMail className="text-xl" />
                                <span className="h-6 w-[1px] bg-black"></span>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-full outline-none border-none"  type="email" placeholder="Elektron pochta" />
                            </div>
                            <div className="border-1 rounded-lg mb-2 flex items-center gap-2 p-2">
                                <SlNote className="text-xl" />
                                <span className="h-6 w-[1px] bg-black"></span>
                                <input value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} className="w-full h-full outline-none border-none"  type="text" placeholder="Qo'shimcha ma'lumot" />
                            </div>
                            <button onClick={handleAddContact} className="w-full bg-[#394867] text-white p-2 rounded-lg flex items-center justify-center">
                               <CiStar className="text-2xl mr-2" />
                               <span className="h-6 w-[1px] bg-white"></span>
                                <span className="grow">Qo'shish &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:ml-6 w-full">
                    <h2  className="text-xl font-medium mb-4 tracking-wide text-center">Kontaktlar</h2>
                    <div className="bg-gray-200 rounded-2xl shadow-2xl w-full py-5">
                        <div className="flex items-center justify-between mb-6 px-4 ">
                            <h3>Usmonqul Hakimov</h3>
                            <img className="w-8 h-8 border-1 rounded-full" src={avatar} alt="" />
                        </div>
                        <div className="border-1 rounded-lg mb-2 flex items-center gap-2 p-1.5 mx-4">
                                <CiSearch className="text-2xl" />
                                <span className="h-6 w-[1px] bg-black"></span>
                                <input value={search} onChange={(e) => setSearch(e.target.value)} className="w-full grow h-full outline-none border-none"  type="search" placeholder="Kontakt qidirish" />
                                <span className="h-6 w-[1px] bg-black"></span>
                                <button className="text-sm">Barchasi</button>
                        </div>
                        <ul>
                           {handleFilder().map((contact, index) => (
                            <ContactUser key={index} contact={contact} handleFavorite={handleFavorite} />
                           ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}