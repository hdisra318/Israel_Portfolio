import photo from '../assets/fotoPerfil.jpg';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import resume from '/CV.pdf';

function Home() {

    return (
        <div name="Home" className='w-full h-screen bg-gradient-to-b from-black via-black
            to-blue-900'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center
                h-full px-4 py-7 md:py-0 md:flex-row'>
                <div className='mt-10 sm:mt-[25rem] md:mt-0 flex flex-col justify-center h-full pt-12'>
                    <h2 className='text-4xl sm:text-5xl font-bold text-white'>Desarrollador FullStack Jr</h2>
                    <p className='text-blue-400 py-4 max-w-md text-[1.1rem] sm:text-xl'>
                        Hola, soy Israel Hernández, desarrollador fullstack jr enfocado en NodeJS y React. 
                        Actualmente me encuentro en el final de mi carrera de Ciencias de la Computación en
                        la UNAM
                    </p>

                    <div className='mb-5'>
                        <a href={resume} download={true} className='group md:text-[1.1rem] text-white w-fit px-6 py-3 flex items-center rounded-md
                            bg-gradient-to-r from-cyan-700 to-blue-700 cursor-pointer'>
                            Resume
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </a>
                    </div>
                </div>

                <div>
                    <img src={photo} alt="My photo" className='rounded-2xl mx-auto w-2/3 md:w-50 hover:scale-105 duration-300' />
                </div>
            </div>
        </div>
    );
}

export default Home;