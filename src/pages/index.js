import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page" testText="Hello this is test text.">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/mtfuji.jpg"
      />  
      {/* https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large */}
    </Layout>      
  )
}

export default IndexPage
