import { useEffect, useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { AiOutlineArrowUp } from 'react-icons/ai'
import Projects from '../Projects/Projects';
import MobileMenu from '../MobileMenu/MobileMenu';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

const Content = ({ children, className, sectionView, setSectionView }) => {
    const [showMenu, setShowMenu] = useState(false)
    const [showGoTop, setShowGoTop] = useState(false)
    const handleScroll = () => {
        if (window.scrollY > 500) {
            setShowGoTop(true)
        } else {
            setShowGoTop(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={`content ${className}`}>
            <button id="menu-open" className="content__menu" onClick={() => setShowMenu(true)}><TiThMenu /></button>
            {showMenu && <MobileMenu closeMenu={() => setShowMenu(false)} />}
            {!showMenu &&
                <>
                    <Hero />
                    <Projects activateScroll={sectionView} setProjectView={setSectionView} />
                    <Contact />
                    <Footer />
                </>
            }
            {showGoTop && <a id="go-to-top" href="#welcome-section" className="content__go-top"><AiOutlineArrowUp /></a>}
        </div>
    )
}
export default Content