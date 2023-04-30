import { useRef } from 'react';
import H2 from '../atoms/H2/H2';
import ProjectItem from './ProjectItem/ProjectItem';
const Projects = ({ activateScroll, setProjectView }) => {
    const sectionRef = useRef(null)
    const executeScroll = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView()
        }
    }
    if (activateScroll) {
        executeScroll()
        setProjectView(false)
    }
    return (
        <section ref={sectionRef} className="projects" id="projects-section">
            <div className="projects__title__cnt">
                <H2 className="projects__title" >Projects</H2>
            </div>
            <div className="projects__cnt">
                <ProjectItem orientation="right" images={[{ src: '/images/projects/MobilityHome.png', alt: 'AN Project image' }, { src: '/images/projects/MobilityVDP.png', alt: 'AN Project image' }]} title="AutoNation Mobility" text="Mobility is a new car reservation service from AutoNation. It is an ongoing project that involves West Monroe and AutoNation and expects to launch mid 2023. It is a completely new service that allows customers to reserve cars for 6, 12 or 18 months with miles available per month. It will only be available for California and Florida at start. My participation is on the Front-end side." stageInfo={{ backgroundSrc: '/images/acuarela-salmon.jpg', alt: 'Stages info background', stages: ['Filters', 'Prequal', 'Checkout'], orientation: 'vertical' }} />

                <ProjectItem orientation="right" images={[{ src: '/images/projects/ProjectKonradHome.png', alt: 'Konrad Bank Project image' }, { src: '/images/projects/ProjectKonradLogin.png', alt: 'Konrad Project image' }]} title="Konrad Bank" text="Third project for Immersive Program at Candian Agency, Konrad. It was the final project for the web immersive program that took 2 weeks with FE on React, Node backend with MongoDB and mobile first design. Also has some special accessibility work to achieve WCAG Level II." stageInfo={{ backgroundSrc: '/images/acuarela-beige.jpg', alt: 'Stages info background', stages: ['Back-end', 'UI', 'Accessibility'], orientation: 'vertical' }} />

                <ProjectItem orientation="right" 
                images={[{ src: '/images/projects/StartupSafeDashboard.png', alt: 'StartupSafe Project image' }, { src: '/images/projects/StartupSafeLogin.png', alt: 'StartupSafe Project image' }]} title="StartupSafe" text="Web project for Cenfotec. Consisted on a startup community platform with packages service, reviews and SSO." stageInfo={{ backgroundSrc: '/images/acuarela-celeste.png', alt: 'Stages info background', stages: ['Documentation', 'Back-end', 'Front-end'], orientation: 'vertical' }} />

                <ProjectItem orientation="right" images={[{ src: '/images/projects/GoogleUX-Login-HiFi.png', alt: 'AN Project image' }, { src: '/images/projects/GoogleUX-Mocks2.png', alt: 'Google UX Project image' }]} title="Google UX" text="First project for Google UX certification. Has mock-ups, hi-fi designs and reviews from interviews with different people." stageInfo={{ backgroundSrc: '/images/acuarela-verde-claro.jpg', alt: 'Stages info background', stages: ['Mock-ups', 'Feedback', 'Hi-Fi'], orientation: 'vertical' }} />
            </div>
        </section>
    )
}
export default Projects