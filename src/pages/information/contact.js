import * as React from 'react'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { TextField, Button } from '@material-ui/core';

const ContactPage = () => {
    return(
        <Layout pageTitle="ContactPage">
            <Button variant="contained" color="primary">Primary</Button>
            <p>This is contact</p>
            {/* <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form> */}
            <StaticImage src="../../images/woman1.jpg" />
        </Layout>
    )
}

export default ContactPage