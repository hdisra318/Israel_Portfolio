function Contact() {


    return (
        <div name="Contact" className="w-full h-screen bg-gray-900 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <h3 className="text-4xl font-bold inline border-b-4 border-blue-700">Contact</h3>
                    <p className="py-6">Contáctame!</p>
                </div>

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/96ce22c0-5004-46d3-873f-b9927f51edca" method="POST" className="flex flex-col w-full md:w-1/2 ">
                        <input type="text"
                            name="name"
                            required
                            placeholder="Tu Nombre"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />

                        <input type="email"
                            name="email"
                            required
                            placeholder="Tu E-mail"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />

                        <textarea name="message" 
                            rows="10"
                            required
                            className="p-2 bg-transparent border-2 rounded-md text-whhite focus:outline-none"
                            placeholder="Tus Comentarios"
                        ></textarea>

                        <button className="text-white bg-gradient-to-b from-cyan-700 to-blue-700 cursor-pointer
                        px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
                        >Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;