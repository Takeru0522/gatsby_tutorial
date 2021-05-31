import * as React from 'react'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const ContactPage = () => {
    return(
        <Layout pageTitle="ContactPage">
            <p>This is contact</p>
            <StaticImage src="../../images/woman1.jpg" />
        </Layout>
    )
}

export default ContactPage