import { FaGithub, FaLinkedin } from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs"

function SocialLinks() {

    const links = [
        {
            id: 1,
            content:(
                <><FaLinkedin size={30}/>LinkedIn</>
            ),
            href: "https://linkedin.com/in/israel-hernandez-dorantes",
            style: "rounded-tl-md"
        },
        {
            id: 2,
            content:(
                <><FaGithub size={30}/>Github</>
            ),
            href: "https://github.com/hdisra318",
            style: "rounded-bl-md"
        }
    ]


    return (
        <div className="hidden lg:flex flex-col top-[40%] right-0 fixed">
            <ul>
                {links.map((link) => (
                    <li key={link.id} className={"flex justify-between items-center w-40 h-14 px-4 mr-[-100px] bg-blue-950 hover:mr-[-10px] duration-300" + " "+ link.style}>
                        <a href={link.href}
                            className="flex justify-between items-center w-full text-white "
                            target="blank"
                        >
                            {link.content}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SocialLinks;