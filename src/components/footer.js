import * as React from 'react'
import {
    footerLeft,
    footerRight,
} from './footer.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const Footer = () => {
    return(
        <footer>
            <div className={footerLeft}>
                <StaticImage src="../images/tkr.png" />
            </div>
            <div className={footerRight}>
                <ul>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Home">About</Link>
                    </li>
                    <li>
                        <Link to="/Home">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer