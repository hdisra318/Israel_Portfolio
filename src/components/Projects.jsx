import medfil from "../assets/projects/logo_medfil.jpeg";
import calcApp from '../assets/projects/calc_app.png';
import springProj from "../assets/projects/spring_proj.png";
import youtubeClone from "../assets/projects/youtube_clone.png";

function Projects() {

    const projects = [
        {
            id: 1,
            src: youtubeClone,
            title: "Proyecto \"Youtube Clone\"",
            description: "Aplicación web similar a \"YouTube\" con algunas funciones similares. Desarrollada utilizando React, MUI y consumo de API's.",
            link: "https://github.com/hdisra318/youtube-clone"
        },
        {
            id: 2,
            src: springProj,
            title: "Proyecto \"Ensaladas Ciencias\"",
            description: "Aplicación web full stack realizada para un proyecto de la materia de \"Tecnologías para Desarrollos en Internet\" utilizando React, Bootstrap, Spring, SQL y Docker.",
            link: "https://github.com/hdisra318/Proyecto-React-Spring"
        },
        {
            id: 3,
            src: medfil,
            title: "MedFil app",
            description: "Aplicación hecha para la Facultad de Medicina de la Universidad Nacional Autónoma de México (UNAM) que consiste en una app diseñada para que los estudiantes de medicina practiquen sus habilidades de diagnóstico a través de 'filtros' sobre algunas enfermedades/condiciones.",
            link: "https://github.com/hdisra318/MiztliMedFil"
        },
        {
            id: 4,
            src: calcApp,
            title: "Calculdora",
            description: "App de una calculadora sencilla para Android, hecha en Android Studio.",
            link: "https://github.com/hdisra318/calculadoraAndroid"
        },
    ]

    return (
        <div name="Projects" className="bg-[#000a23] w-full text-white py-5">
            <div className="max-w-screen-lg p-4 pt-5 mx-auto flex flex-col justify-center items-center w-full h-full">
                <div className="pb-8">
                    <h3 className="text-4xl font-bold inline border-b-4 border-blue-700">Projects</h3>
                    <p className="py-5 text-xl">
                        Estos son algunos de mis proyectos que he hecho a lo largo de mi carrera.
                        Refleja mis habilidades y conocimiento que he adquirido con diferentes teconologías.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {projects.map(project => (
                        <div key={project.id} className="shadow-md shadow-black rounded-lg flex flex-col">
                            <img src={project.src} alt="proyect image" className="rounded-md duration-300 hover:scale-105 max-h-[250px]" />
                            <div className="p-3">
                                <p className="font-bold mb-3 text-xl">{project.title}</p>
                                <p className="">
                                    {project.description}
                                </p>
                            </div>
                                <button className="py-3 px-5 bg-blue-950 rounded-md my-2 mx-auto flex justify-center duration-300 hover:scale-105"><a href={project.link} target="blank">Code</a></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;