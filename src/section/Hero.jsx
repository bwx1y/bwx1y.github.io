import {Element, Link} from "react-scroll"

const props = {
    title: "Nedy Nugroho Mulyadi",
    description: "Saya membangun sistem backend yang scalable, robust, dan efisien. Menciptakan API dan arsitektur server yang mendukung aplikasi modern."
}

const HeroSection = () => {
    return (<Element name="home" className="hero">
        <div className="hero-content">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <Link to="projects"
                  smooth={true}
                  duration={600}
                  className="cta-button">Lihat Portfolio</Link>
        </div>
    </Element>)
}
export default HeroSection;