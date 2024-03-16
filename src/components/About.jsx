function About() {


    return (
        <div name="About" className="w-full h-screen bg-gray-900 text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <h3 className="text-4xl font-bold inline border-b-4 border-blue-700">About</h3>
                </div>

                <p className="text-xl mt-20">
                    Hola, soy Israel Hernández, desarrollador Fullstack Jr y estudiante de la carrerar de Ciencias de la Computación de
                    la Facultad de Ciencias, UNAM. Actualmente me encuentro en el útimo semestre de la carrera 
                    y estoy en busca de oportunidades laborales en el campo de Desarrollo de Web.
                </p>

                <p className="text-xl mt-5">
                    Estoy constantemente aprendiendo y mejorando mis conocimientos en tecnologías como NodeJs, React y Nextjs.
                </p>
            </div>
        </div>
    );
}

export default About;