import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import java from '../assets/java.png';
import spring from '../assets/spring.png';
import react from '../assets/react.png';
import git from '../assets/git.png';
import github from '../assets/github.png';

function Skills() {

    const skills = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: javascript,
            title: "Javascript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: java,
            title: "Java",
            style: "shadow-red-500"
        },
        {
            id: 5,
            src: spring,
            title: "Spring",
            style: "shadow-green-500"
        },
        {
            id: 6,
            src: react,
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id: 7,
            src: git,
            title: "Git",
            style: "shadow-orange-500"
        },
        {
            id: 8,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400"
        }
    ]


    return (
        <div name="Skills" className="bg-[#000a23] w-full h-screen pt-10">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className=''>
                    <h3 className='text-4xl font-bold border-b-4 border-blue-700 inline'>Skills</h3>
                    <p className='py-6'>
                        Estas son las tecnologías y lenguajes que manejo
                    </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-5 text-center py-8 px-12 sm:px-0'>
                    {skills.map(skill => (
                        <div key={skill.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${skill.style}`}>
                            <img src={skill.src} alt={skill.title} className='w-20 mx-auto max-h-[100px]'/>
                            <p className='mt-4'>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills