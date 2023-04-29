
//Background: type of image
//Orientation: horizontal - vertical

import P from "../../atoms/P/P"

//Information: array of strings
const Stages = ({stageInfo}) => {

    return (
        <>
        <div className={`stages ${stageInfo.orientation === 'vertical' ? 'stages--vertical' : 'stages--horizontal'}`} style={{backgroundImage: `url(${stageInfo.backgroundSrc})`}} >
            {stageInfo.stages.map((text) => <P className="stages__text">{text}</P>)}
        </div>
        </>
    )
}
export default Stages