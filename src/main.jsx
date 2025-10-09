import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import './index.css'

import HeroSection from "./section/Hero.jsx";
import NavbarComponent from "./component/Navbar.jsx";
import AboutSection from "./section/About.jsx";
import FrameworkSection from "./section/Framework.jsx";
import ToolsSection from "./section/Tools.jsx";
import ProjectSection from "./section/Project.jsx";
import FormSection from "./section/Form.jsx";
import ScrollIndicatorComponent from "./component/ScrollIndicator.jsx";
import Particles from "./component/Particles.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ScrollIndicatorComponent/>

        <Particles/>

        <NavbarComponent/>

        <HeroSection/>
        <AboutSection/>
        <FrameworkSection/>
        <ToolsSection/>
        <ProjectSection/>
        <FormSection/>
    </StrictMode>,
)
