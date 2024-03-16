import icat from '../assets/experience/icat.png'

function Experience() {

    const exp = [
        {
            id: 1,
            time: "March 2023 - Present",
            company: "ICAT",
            job: "Full Stack Developer",
            work: "Desarrollar y dar mantenimiento a una aplicación web utilizando NodeJS, dedicada para profesores y alumnos de la UNAM.",
            logo: icat
        }
    ]

    return(
        <div name="Experience" className="bg-gray-900 w-full h-screen text-white text-center">
            <div className="max-w-screen-lg mx-auto p-10 w-full h-full flex flex-col justify-center items-center">
                <h3 className="text-4xl font-bold border-b-4 border-blue-700 p-2">Experience</h3>

                <p className="font-3xl mt-3">
                    Aquí es en lo que he trabajado
                </p>

                {exp.map( e => (
                    <div key={e.id} className="shadow-md shadow-[gray] rounded-lg flex flex-col items-start 
                        p-5 mt-5 duration-300 hover:scale-105">
                        <p className="text-bold text-2xl border-b-2 border-gray-500">{e.job}</p>
                        <p className='mt-3 text-xl'>{e.company}</p>
                        <p className='mt-1'>{e.time}</p>
                        <p className="mt-5 text-justify ">{e.work}</p>

                        <img src={e.logo} alt="logo" className='mx-auto mt-5 rounded-lg' />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;