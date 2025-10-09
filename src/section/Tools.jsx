import {Element} from "react-scroll"

const props = [
    {
        title: "Databases",
        items: [
            {name: "PostgreSQL"},
            {name: "MySQL"},
            {name: "MongoDB"},
            {name: "Redis"},
            {name: "SQLite"},
        ],
    },
    {
        title: "DevOps & Tools",
        items: [
            {name: "Docker"},
            {name: "Git"},
            {name: "CI/CD"},
            {name: "Nginx"},
        ],
    },
    {
        title: "Testing & API",
        items: [
            {name: "Postman"},
            {name: "Swagger"},
            {name: "REST API"},
            {name: "GRPC"}
        ],
    },
];


const ToolsSection = () => {
    return (<Element name="tools" className="tools">
        <h2 className="section-title">Database & Tools</h2>
        <div className="tools-container">

            {props.map((item, index) => (
                <div className="tool-category" key={index + item.title}>
                    <h3 className="category-title">{item.title}</h3>
                    <div className="tool-grid">
                        {item.items.map((value, i) => (
                            <div className="tool-item" key={i + value.name}>{value.name}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </Element>)
}

export default ToolsSection;