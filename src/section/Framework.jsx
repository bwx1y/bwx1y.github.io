import {Element} from "react-scroll"

const props = [
    {
        icon: "⚡",
        name: "Express.js",
        description: "Fast, minimalist web framework untuk Node.js",
    },
    {
        icon: "🔥",
        name: "NestJS",
        description: "Progressive Node.js framework untuk aplikasi enterprise",
    },
    {
          icon: "🍃",
        name: "Spring Boot",
        description: "Java framework untuk microservices",
    },
    {
        icon: "⚙️",
        name: "Laravel",
        description: "PHP framework dengan elegant syntax",
    },
    {
        icon: "💠",
        name: "ASP.NET",
        description: "Framework web Microsoft untuk membangun aplikasi dan API modern menggunakan C# atau VB.NET",
    },
    {
        icon: "🧩",
        name: ".NET Framework",
        description: "Platform pengembangan Microsoft untuk aplikasi desktop, web, dan layanan backend berbasis CLR",
    },
    {
        icon: "📱",
        name: "Android (Kotlin)",
        description: "Platform pengembangan aplikasi mobile menggunakan bahasa Kotlin dan Android SDK",
    },
    {
        icon: "🎨",
        name: "Jetpack Compose",
        description: "Modern toolkit declarative UI dari Android untuk membangun antarmuka dengan Kotlin",
    },
    {
        icon: "🏗️",
        name: "Serenity",
        description: "Framework aplikasi web full-stack berbasis ASP.NET Core dan Entity Framework untuk pengembangan enterprise di C#",
    },
];

const FrameworkSection = () => {
    return (<Element name="framework" className="frameworks">
        <h2 className="section-title">Frameworks & Libraries</h2>
        <div className="tech-grid">
            {props.map((item, index) => (
                <div className="tech-card" key={index+item.icon}>
                    <div className="tech-icon">{item.icon}</div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    </Element>)
}

export default FrameworkSection;