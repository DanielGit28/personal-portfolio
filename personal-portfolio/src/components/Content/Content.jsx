import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import Projects from '../Projects/Projects';
import MobileMenu from '../MobileMenu/MobileMenu';
import Hero from '../Hero/Hero';

const Content = ( {children, className, sectionView, setSectionView}) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className={`content ${className}`}>
            <button id="menu-open" className="content__menu" onClick={() => setShowMenu(true)}><TiThMenu /></button>
            {showMenu && <MobileMenu closeMenu={() => setShowMenu(false)}/>}
            <Hero />
            <Projects activateScroll={sectionView} setProjectView={setSectionView}/>
        </div>
    )
}
export default Content