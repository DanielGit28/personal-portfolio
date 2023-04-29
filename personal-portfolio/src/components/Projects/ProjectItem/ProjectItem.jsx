import H3 from "../../atoms/H3/H3"
import P from "../../atoms/P/P"
import Stages from "../Stages/Stages"
//orientation: left-right
//images: Array<{src: string, alt: string}>
//title of the project
//description of the project
//stageInfo: {backgroundSrc: string, alt: string, Array<string>, orientation: string}

//<Stages /> of the project
const ProjectItem = ({ orientation, images, title, text, stageInfo }) => {

    return (
        <div className="project-item">
            <div className="project-item__images">
                <img src={images[0].src} alt={images[0].alt} className="project-item__images__main" />
                <img src={images[1].src} alt={images[1].alt} className="project-item__images__secondary" />
            </div>
            <H3 className="project-item__title">{title}</H3>
            <P className="project-item__text">{text}</P>
            <Stages stageInfo={stageInfo}/>
        </div>
    )
}
export default ProjectItem