import * as React from 'react'
import { Link } from 'gatsby'
import { 
    navLinks,
    navLinkItem,
    navLinkText
 } from './layout.module.css'

const Header = () => {
    return(
        <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to ="/" className={navLinkText}>
                        Home
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to ="/about" className={navLinkText}>
                        About
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to ="/information/contact" className={navLinkText}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header