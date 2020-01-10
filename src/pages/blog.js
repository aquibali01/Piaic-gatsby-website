import React from "react"
import Layout from "../component/layout"
import Styler from "../styles/blog.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"

const Bloga = () => {
    const data = useStaticQuery(graphql`
    query{
        allContentfulBlogpost{
            edges{
                node{
                    title
                    slug
                }                    
            }
        }
    }
    `)
    return (
        <div>
            <Layout>
                <h1>Blog</h1>
                <ol  className={Styler.lm} >
                    {data.allContentfulBlogpost.edges.map((edge) => {
                    return(
                        <div>
                            <li>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.published}</p>
                                </Link>
                            </li>
                        </div>
                    )
                })}
                </ol>
            </Layout>
        </div>
    )
}

export default Bloga


//         <ol>
//             {data.allMarkdownRemark.edges.map((edge) => {
//                 return (
//                     <li>
//                         <h1>{edge.node.frontmatter.title}</h1>
//                         <p>{edge.node.frontmatter.date}</p>
//                     </li>
//                 )
//                 })}
//         </ol>
//     )
// }
