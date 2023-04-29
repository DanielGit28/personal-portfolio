import H1 from '../atoms/H1/H1'
import P from '../atoms/P/P'

const Welcome = ({setProjectView}) => {

    return (
        <section id="welcome-section" className="welcome">
            {
            //<img src="/images/acuarela-beige.jpg" alt="Acuarela naranja fondo" className="welcome__acuarela--beige" />
            }
            <div className="welcome__information">
                <H1 className="welcome__information__title welcome__information--spacing">Daniel Zuniga</H1>
                <P className="welcome__information__text welcome__information--spacing">Front-end developer specialized in React JS, Node JS, non-relational databases &#40;MongoDB&#41; and UX/UI.Applying web accessibility to products to make the user interaction smooth and enjoyable.</P>
                <button className="welcome__btn" onClick={() => setProjectView(true)}>View my work</button>
            </div>  
            <img src="/images/acuarela-pincel-naranja.jpg" alt="Acuarela naranja fondo" className="welcome__acuarela--naranja" />
        </section>
    )
}
export default Welcome