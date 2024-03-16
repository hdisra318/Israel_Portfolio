import { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"

function NavBar() {

    const [menu, setMenu] = useState(false)

    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Projects'
        },
        {
            id: 4,
            link: 'Experience'
        },
        {
            id: 5,
            link: 'Skills'
        },
        {
            id: 6,
            link: 'Contact'
        }
    ]

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-gray-950 bg-opacity-70">
            <div>
                <h1 className="text-3xl md:text-4xl ml-2 name">Israel Hernandez</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(link => (
                    <li key={link.id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500
                                hover:scale-110 duration-200 hover:text-white">
                        <Link to={link.link} smooth duration={500}>{link.link}</Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu */}
            <div className="md:hidden cursor-pointer pr-4 z-10 text-gray-500"
                onClick={() => setMenu(!menu)}>
                {menu ? <FaTimes size={30} /> : <FaBars size={30}/>}
            </div>

            {menu ? (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full
                h-screen bg-gradient-to-b from-black to-blue-950 text-gray-500">
                {links.map(link => (
                    <li key={link.id}
                        className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-white">
                        <Link onClick={() => setMenu(false)} to={link.link} smooth duration={500}>{link.link}</Link>
                    </li>
                ))}
            </ul>
            ): null}
            

        </div>
    );
}

export default NavBar;