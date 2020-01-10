import React from "react"
import { useStaticQuery, graphql} from "gatsby"
import Styler from "../styles/footer.module.scss"



const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                author
            }
        }
    }`)
    return(
        <footer className= {Styler.bar}>
            <h1>&copy; 2019 PIAIC. All rights reserved.</h1>
            <div className= {Styler.logo}>
                <p>PoweredBy</p>
                <a to="https://www.panacloud.ai/" target = "_blank" ><img src={require("../images/panacloud.png")} width="80" height="auto"  alt="klnaznc" /></a>
            </div>
        </footer>)
        // <footer>
        //     <p>&copy; 2019 PIAIC.ALL right reserved</p>
        // <div className={Styler.logo}>
        //     <b>Powered By</b><br/>
        //     <img src={require("../images/panacloud.png")} alt="panacloudlogo" />
        // </div>
        //     {/* <p>copy right &copy; reserved by {data.site.siteMetadata.author} </p> */}
        // </footer>)
}
export default Footer