import P from "../atoms/P/P"
import FooterColumn from "./FooterColumn/FooterColumn"

const Footer = () => {

    return (
        <footer className="footer" id="footer-section">
            <div className="footer__info">
                <img src="/svg/logo.svg" alt=" logo for footer" className="footer__info__logo" />
                <div className="footer__info__column">
                    <P className="footer__info__text">Remote</P>
                    <P className="footer__info__text">Costa Rica</P>
                </div>
            </div>
            <div className="footer__columns">
                <FooterColumn title="Social" links={[{name: "LinkedIn", href: "https://www.linkedin.com/in/daniel-z%C3%BA%C3%B1iga-205113226/"},{name: "CV", href: "/Resume_DanielZunigaRojas.pdf"},{name: "Github", href: "https://github.com/DanielGit28?tab=repositories"}]} />
                <FooterColumn title="Contact" links={[{name: "Buy me a coffee", href: ""},{name: "Email", href: "mailto:duniel12@gmail.com"}]} />
            </div>
        </footer>
    )
}
export default Footer