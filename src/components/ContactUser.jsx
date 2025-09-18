import avatar from "../assets/avatar.png"
import { CiStar } from "react-icons/ci";
import { GoStarFill } from "react-icons/go";

export default function ContactUser({contact}) {
    const {name, lastName, phone, email, additionalInfo, isFavorite} = contact
    return (
        <li className="flex items-center gap-2 p-4 [&:nth-child(even)]:bg-gray-300">
            <img className="w-16 h-16 border-1 rounded-full" src={avatar} alt="" />
            <div className="">
                <h3 className="font-medium mb-1">{name} {lastName}</h3>
                <p className="text-sm text-gray-500">{phone}</p>
            </div>
            <div className="ml-auto flex items-center gap-4">
                {isFavorite ? <GoStarFill className="text-yellow-500 text-2xl" /> : <CiStar className="text-2xl" />}
                <div className="flex flex-col gap-1">
                    <span className="w-1 h-1 bg-gray-500 rounded-full block"></span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full block"></span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full block"></span>
                </div>
            </div>
        </li>
    )
}