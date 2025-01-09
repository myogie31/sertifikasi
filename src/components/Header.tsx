import { Lusitana } from "next/font/google";

export default function Header() {
    return(
        <>
        <div className="w-screen p-8 bg-[#A31D1D] flex justify-between items-center">
            <div>
                <p className="font-bold text-white text-2xl">Muhammad Yogie Mayendra</p>
            </div>

            <div>
                <ul className="flex justify-between items-center">
                    <li className="text-white text-lg p-2 font-bold">Home</li>
                    <li className="text-white text-lg p-2 font-bold">Techs</li>
                    <li className="text-white text-lg p-2 font-bold">Biograhpy</li>
                    <li className="text-white text-lg p-2 font-bold">Contacts</li>
                </ul>
            </div>
        </div>
        </>
    )
}