import React from "react"
import { graphql } from "gatsby"
import Layout from "../component/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


export const query = graphql`
query($slug: String!) {
    contentfulBlogpost(slug: {eq: $slug}) {
        title
    }
}
`





const Blog = (props) => {
    return(
        <Layout>
            <h1>{props.data.contentfulBlogpost.title}</h1>
            <p>{props.data.contentfulBlogpost.published}</p>
        </Layout>
    )
}

export default Blog