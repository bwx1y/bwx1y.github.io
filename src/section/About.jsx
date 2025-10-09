import {Element} from "react-scroll"

const props = [
    {
        name: "Node.js",
    },
    {
        name: "TS"
    },
    {
        name: "Java"
    },
    {
        name: "PHP"
    },
    {
        name: "C#"
    },
    {
        name: "Go"
    },
    {
        name: "Kotlin"
    }
]

const AboutSection = () => {
    return (<Element name="about" className="about">
        <h2 className="section-title">Tentang Saya</h2>
        <div className="about-content">
            <div className="about-text">
                <p>Saya adalah seorang Backend Developer dengan passion untuk membangun sistem yang scalable dan
                    efisien. Dengan pengalaman dalam mengembangkan RESTful API, microservices, dan database management,
                    saya fokus menciptakan solusi backend yang reliable dan performant.</p>

                <p>Saya percaya bahwa backend yang baik adalah fondasi dari setiap aplikasi yang sukses. Saya terus
                    belajar teknologi terbaru dan best practices untuk memberikan solusi terbaik dalam setiap
                    project.</p>
            </div>

            <div className="skills">

                {props.sort((a, b) => {
                    if (a.name.length !== b.name.length) {
                        return a.name.length - b.name.length;
                    }
                    return a.name.localeCompare(b.name);
                }).map((item, index) => (<div className="skill-card" key={index + item.name}>
                    <h3>{item.name}</h3>
                </div>))}
            </div>
        </div>
    </Element>)
}

export default AboutSection;