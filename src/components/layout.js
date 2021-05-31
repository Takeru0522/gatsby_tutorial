import * as React from 'react'
import { 
    container,
    heading,
} from './layout.module.css'
import "../index.scss"
import Header from './header'
import Footer from './footer'

const Layout = ({ pageTitle, testText, children }) => {
    return(
        <main className={container}>
            <title>{pageTitle}</title>
            <Header />
            <h1 className={heading}>{pageTitle}</h1>
            {children}
            <p>{testText}</p>
            <Footer />            
        </main>
    )
}

export default Layout