import { AiOutlineClose } from 'react-icons/ai'
const MobileMenu = ({ closeMenu }) => {

    return (
        <div className="mobile-menu">
            <div className="mobile-menu__cnt">
                <button id="close-menu" className="mobile-menu__close" onClick={closeMenu}><AiOutlineClose /></button>
                <img src="/svg/logo.svg" alt=" logo for menu" className="mobile-menu__logo" />
                <a href="#welcome-section" className="mobile-menu__link" onClick={closeMenu}>Home</a>
                <a href="#about-section" className="mobile-menu__link" onClick={closeMenu}>About me</a>
                <a href="#projects-section" className="mobile-menu__link" onClick={closeMenu}>Projects</a>
                <a href="#services-section" className="mobile-menu__link" onClick={closeMenu}>Services</a>
                <a href="#contact-section" className="mobile-menu__link" onClick={closeMenu}>Contact</a>
            </div>
        </div>
    )
}
export default MobileMenu