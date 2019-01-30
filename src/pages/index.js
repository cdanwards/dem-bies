import React from 'react'
import { graphql } from 'gatsby'
import { typeDefs, resolvers } from 'fpl-api-graphql'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => {
    return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Coming Soon...</h1>
      <p>{data.site.siteMetadata.title}</p>
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata{
        title
      }
    }
  }
`

export default IndexPage
