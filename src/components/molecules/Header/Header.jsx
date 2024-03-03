import React, {useState} from 'react';
import listItems from './list-items'
import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";
import './Header.css'
import { Link } from 'react-scroll';

const Header = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [switchMenu, setSwitchMenu] = useState(false);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    }



    return (
        <header className={'container'}>
            <div>
                <Image
                    url={`${process.env.PUBLIC_URL}/assets/img/logo.png`}
                    alt={'logo'}
                    width={'80px'}
                    height={'auto'}
                />
            </div>
            <div id="menu-toggle" onClick={() => setSwitchMenu(!switchMenu)} className={`menu-toggle ${switchMenu ? 'nav-open' : ''}`}>
                <span className="menu-toggle-bar menu-toggle-bar--top"></span>
                <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
                <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
            </div>
            <nav className={`menu-transition ${switchMenu ? 'menu-visible' : 'menu-hidden'}`}>
                <ul>
                    {listItems.map((item, index) => (
                        <Link key={index} to={item.to} spy={true} smooth={true} offset={item.offset} duration={500} className={'cursor-pointer'}>
                            <li
                                className={index === activeIndex ? 'active' : ''}
                                onClick={() => handleItemClick(index)}
                            >
                                <Text
                                    tag={item.tag}
                                    content={item.title}
                                    href={item.link}
                                    className={'text-black bold'}
                                />
                            </li>
                        </Link>

                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;