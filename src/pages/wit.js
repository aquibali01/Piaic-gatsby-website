import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Photos from "../components/photos"
import WITStyles from"../styles/wit.module.scss"



const WIT = () => {
    const data = useStaticQuery(graphql`
    query{
        allContentfulWit{
          edges{
            node{
              title
              subTitle
              para1{
                para1
              }
              para2{
                para2
              }
              para3{
                para3
              }
              mainImage{
                  fluid{
                      src
                  }
              }
            }
          }
        }
      }
    `)
    return (
        <section>
        {/* <img className={WITStyles.mainImage} src={require("../images/win.jpeg")}/> */}
        {/* <div className={WITStyles.text}> */}
            {data.allContentfulWit.edges.map((edge)=>{
                return (
                    <>
                    <img className={WITStyles.mainImage} src={edge.node.mainImage.fluid.src}/>
                    <div className={WITStyles.text}>
                    <p>{edge.node.para1.para1}</p>
                    <p>{edge.node.para2.para2}</p>
                    <p>{edge.node.para3.para3}</p>
                    </div>
                    </>
                )
            })}
            
        {/* </div> */}
        <div className={WITStyles.galleryContainer}>
            {data.allContentfulWit.edges.map((edge)=>{
                return (
                    <>
                    <p className={WITStyles.galleryHeading}>{edge.node.title}</p>
                    <hr className={WITStyles.horizontalLine}/>
                    <p className={WITStyles.galleryPara}>{edge.node.subTitle}</p>
                    </>
                )
            })}
            
            <Photos/>
        </div>
        </section>
    )
}
export default WIT