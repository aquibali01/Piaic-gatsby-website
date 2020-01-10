import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Styler from "../styles/header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header>
      <ul className={Styler.nav}>
        <li>
          <Link>
            <p></p>
          </Link>
        </li>
        <li>
          <Link to="/wit">
            <p>WIT</p>
          </Link>
        </li>
        <li>
          <p>About</p>
          <ul className={Styler.nav__sub_menu}>
            <li>
              <Link to="/thePresident">
                <p>The President</p>
              </Link>
            </li>
            <li>
              <Link to="/managementComittee">
                <p>Management Comittee</p>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <p>Available Program</p>
          <ul className={Styler.nav__sub_menu}>
            <li>
              <Link to="/AI">
                <p>Artificial Intelligence</p>
              </Link>
            </li>
            <li>
              <Link to="/CNC">
                <p>Cloud Native and Mobile Web Computing</p>
              </Link>
            </li>
            <li>
              <Link to="/BCC">
                <p>Blockchain</p>
              </Link>
            </li>
            <li>
              <Link to="/IOT">
                <p>Internet of Things and AI</p>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://portal.piaic.org/signup" target="_blank">
            {" "}
            <p>Apply</p>
          </a>
        </li>
        <li>
          <Link to="/howItsWork">
            <p>How It Works</p>
          </Link>
        </li>
      </ul>

      <div className={Styler.logo}>
        <Link to="/">
          <img src={require("../images/Logo.fb7de414.svg")} width="120" height="120" alt="" />
        </Link>
      </div>
    </header>
  )
}

export default Header

//     <div>
//         <div className = {Styler.c}>
//             <nav>
//                 <div>
//                     <ul>
//                         <li><Link to="./">How is it Work</Link></li>
//                         <li><a href="https://portal.piaic.org/signup" target="_blank">Apply</a></li>
//                         {/* <li><Link to="./about">Available programs</Link></li> */}
//                         <li><p>Available programs</p>
//                             <ul className={Styler.nL}>
//                                 <li><Link to="./AI">About</Link></li>
//                                 <li><Link to="./about">About</Link></li>
//                                 <li><Link to="./about">About</Link></li>
//                                 <li><Link to="./about">About</Link></li>
//                             </ul>
//                         </li>
//                         <li><Link to="./about">About</Link></li>
//                         <li><Link to="./blog">Blog</Link></li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//         <div class = {Styler.logo}>
//             <Link to="./"><img  src={require('../images/Logo.fb7de414.svg')} height="120px" width= "auto"/></Link>
//         </div>
//     </div>
