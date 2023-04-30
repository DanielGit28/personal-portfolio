import H3 from "../atoms/H3/H3"
import H2 from "../atoms/H2/H2"
import P from "../atoms/P/P"

const Hero = ({ className }) => {

    return (
        <section className="hero" id="about-section">
           {
            // <img src="/images/acuarela-pincel-naranja.jpg" alt="Acuarela naranja fondo" className="hero__acuarela--naranja" />
           }

            <div className="hero__info">
                <img src="/images/acuarela-celeste.png" alt="Acuarela celeste" className="hero__acuarela--celeste" />
                <H3 className="hero__info__title">Hi, I&apos;m Daniel. It&apos;s a pleasure!</H3>
                <P className="hero__info__text">Since my beginning as a Software Engineer I&apos;ve been working with big and complex applications but also internal and small tools.  Working with end users and clients it&apos;s the best way to make sure the product succeeds. My work is focused on simple, accessible and good looking things. </P>
            </div>
            <div className="hero__skills">
                <div className="hero__skills__title-cnt">
                    <H2 className="hero__skills__title">Main skills</H2>
                </div>
                
            </div>
            <div className="hero__skills__carousel">
                    <img src="/images/nodejs.png" alt="Logo NodeJS" className="hero__skills__image" />
                    <img src="/images/react.png" alt="Logo ReactJS" className="hero__skills__image" />
                    <img src="/images/spring-boot.png" alt="Logo SpringBoot" className="hero__skills__image" />
                </div>
        </section>
    )
}
export default Hero