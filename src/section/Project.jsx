import {Element} from "react-scroll"

// const props = [
//     {
//         title: "",
//         description: "",
//         technologies: [
//             {
//                 name: ""
//             }
//         ]
//     }
// ]

const props = []

const ProjectSection = () => {
    return (<Element name="projects" className="projects">
        <h2 className="section-title">Portfolio Terbaru</h2>
        <div className="project-grid">
            {(props.length === 0) && (
                <div className='project-card'>
                    <p className="project-not-found">Tidak ada proyek untuk ditampilkan.</p>
                </div>
            )}
            {props.map((item, index) => (<div className="project-card" key={index+item.title}>
                <h3 className="project-title">RESTful API E-Commerce</h3>
                <p className="project-desc">Membangun REST API scalable untuk platform e-commerce dengan authentication,
                    payment gateway integration, dan real-time inventory management.</p>
                <div className="project-tech">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Express</span>
                    <span className="tech-tag">PostgreSQL</span>
                    <span className="tech-tag">Redis</span>
                </div>
            </div>))}
        </div>
    </Element>)
}

export default ProjectSection;