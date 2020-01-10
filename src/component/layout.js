import React from "react"
import Header from "./header"
import Footer from "./footer"
import Styler from "../styles/layout.module.scss"
import {graphql , useStaticQuery} from "gatsby"

const Layout = (props) =>{
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
                author
            }
        }
    }`)
    return(
        <div className = {Styler.bgc}>
            <Header />
            <div className = {Styler.layout}>
                {/* <h1>{data.site.siteMetadata.title}</h1> */}
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout


