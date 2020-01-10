import React from "react"
import HIWStyles from "../styles/howItWorks.module.scss"
import { Link,graphql,useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const HowItWorks = () => {

    // const data = useStaticQuery(graphql`
    // query{
    //     allContentfulHowItWorks{
    //       edges{
    //         node{
    //           title
    //           para1{
    //             para1
    //           }
    //           para2a{
    //             para2a
    //           }
    //           para2b{
    //             para2b
    //           }
    //           para3{
    //             para3
    //           }
    //           para4{
    //             para4
    //           }
    //           para5{
    //             para5
    //           }
    //           para6{
    //             para6
    //           }
    //           para7{
    //             para7
    //           }
    //         }
    //       }
    //     }
    //   }
    // `)
    return (
        <Layout>
        <section>
            <div className={HIWStyles.container1}>
            <h1 className={HIWStyles.mainHeading}>
                How It Works
                </h1> 
                {/* {data.allContentfulHowItWorks.edges.map((edge)=>{ */}
                    {/* // return ( */}
                        {/* <> */}
                        {/* <h1 className={HIWStyles.mainHeading}> */}
                        {/* {edge.node.title} */}
                        {/* </h1> */}
                        {/* <hr className={HIWStyles.underline}/> */}
                        {/* <div className={HIWStyles.topContainer}> */}
                            {/* <div className={HIWStyles.bigCircle}> */}
                                {/* <p className={HIWStyles.bigNumber}>1</p> */}
                            {/* </div> */}
                            {/* <div className={HIWStyles.mainText}> */}
                                {/* PIAIC will launch classes in the following locations, one city at a time, in the following order */}
                                {/* {edge.node.para1.content.content.value} */}
                            {/* </div> */}
                        {/* </div> */}
                        {/* </> */}
                    {/* ) */}
                {/*  })} */}
            
             <hr className={HIWStyles.underline}/> 
             <div className={HIWStyles.topContainer}>
                <div className={HIWStyles.bigCircle}>
                    <p className={HIWStyles.bigNumber}>1</p>
                </div>
                <div className={HIWStyles.mainText}>
                PIAIC will launch classes in the following locations, one city at a time, in the following order
                </div>
            </div> 
            <div className={HIWStyles.bottomContainer}>
                <div>
                    <img className={HIWStyles.image}src={require("../images/pakMap.png")} />
                </div>
                <div className={HIWStyles.rightCol}>
                    <p className={HIWStyles.tableHeading}>City by City Roadmap</p>
                    <div className={HIWStyles.table}>
                        <p className={HIWStyles.smallNumber}>1</p>
                        <div className={HIWStyles.smallCircle}></div>
                        <div className={HIWStyles.city}>Karachi</div>
                        <p className={HIWStyles.status}>Classes started</p>
                        <p className={HIWStyles.smallNumber}>2</p>
                        <div className={HIWStyles.smallCircle}></div>
                        <div className={HIWStyles.city}>Islamabad</div>
                        <p className={HIWStyles.status}>Classes started</p>
                        <p className={HIWStyles.smallNumber}>3</p>
                        <div className={HIWStyles.smallCircle}></div>
                        <div className={HIWStyles.city}>Faisalabad</div>
                        <p className={HIWStyles.status}>Classes started</p>
                        <p className={HIWStyles.smallNumber}>4</p>
                        <div className={HIWStyles.activeSmallCircle}></div>
                        <div className={HIWStyles.activeCity}>Sialkot</div>
                        <p className={HIWStyles.status}>Accepting applications in Sialkot</p>
                        <p className={HIWStyles.smallNumber}>5</p>
                        <div className={HIWStyles.smallCircle}></div>
                        <div className={HIWStyles.city}>Lahore</div>
                        <p className={HIWStyles.status}>Comming Soon</p>
                        <p className={HIWStyles.smallNumber}>6</p>
                        <div className={HIWStyles.smallCircle}></div>
                        <div className={HIWStyles.city}>Peshawar</div>
                        <p className={HIWStyles.status}>Comming Soon</p>
                        <p className={HIWStyles.smallNumber}>7</p>
                        <div className={HIWStyles.smallCircle}></div>
                        <div className={HIWStyles.city}>Quetta</div>
                        <p className={HIWStyles.status}>Comming Soon</p>
                    </div>
                </div>
            </div>
        </div>
        

        <div className={HIWStyles.container2}>
            <div className={HIWStyles.topContainer}>
                <div className={HIWStyles.bigCircle}>
                    <p className={HIWStyles.bigNumber}>2</p>
                </div>
                <div className={HIWStyles.mainText2}>
                To participate in the program and become eligible for the most prestigious credentials for AI, Cloud, and Blockchain technologies in the world, students must complete the following process                </div>
                </div>
             
            </div>
            <div className={HIWStyles.container2a}>
                <hr className={HIWStyles.horizontalLine}/>
                <p>1- Signup at PIAIC Portal. <Link className={HIWStyles.link} to="#">Click here</Link></p>
                <p>2- Submit the online application.</p>
                <p>3- Pass the entrance exam which consists of multiple choice English and Mathematics questions. Results are determined based on percentile.</p>
                <p>4- Pass all PIAIC exams with an average score of at least 70%.</p>
            </div>

            <div className={HIWStyles.container3}>
            <div className={HIWStyles.topContainer}>
                <div className={HIWStyles.bigCircle}>
                    <p className={HIWStyles.bigNumber}>3</p>
                </div>
                <div className={HIWStyles.mainText3}>
                 <p>All programs are one year long in duration. Each program is divided into four quarters (12 weeks each). Classes are held once a week. In the initial stages, classes will be held only on Sundays. There will 3 sections of classes available, including Artificial Intelligence, Cloud Native and Mobile Web Computing, and Blockchain. Each class will be 3 hours in duration per week, for a total of 36 hours per quarter or 144 hours for the entire year.</p>
                
                </div>
                </div>
             
            </div>

            <div className={HIWStyles.container4}>
            <div className={HIWStyles.topContainer}>
                <div className={HIWStyles.bigCircle}>
                    <p className={HIWStyles.bigNumber}>4</p>
                </div>
                <div className={HIWStyles.mainText4}>
                    <p>Those students who wish to participate in the program online can check the distance learning option in the application form. Please note that distance learning students must also take proctored exams on site, just like the onsite students.</p>
                    <p>The fee structure for onsite students is PKR 1,000 per month for 12 months, payable in 4 installments of PKR 3,000, before the start of each quarter.</p>
                    <p>The fee structure for distance learning students is PKR 500 per month for 12 months, payable in 4 installments of PKR 1,500, before the start of each quarter.</p>                
                </div>
                </div>
             
            </div>

            <div className={HIWStyles.container5}>
            <div className={HIWStyles.topContainer}>
                <div className={HIWStyles.bigCircle}>
                    <p className={HIWStyles.bigNumber}>5</p>
                </div>
                <div className={HIWStyles.mainText5}>
                <p>Please note, all fees will be collected by Saylani Welfare Trust, the most trusted NGO in Pakistan. Saylani has strict audit processes already in place to ensure proper accountability of funds.</p>         
                </div>
                </div>
             
            </div>

            <div className={HIWStyles.container6}>
            <div className={HIWStyles.topContainer}>
                <div className={HIWStyles.bigCircle}>
                    <p className={HIWStyles.bigNumber}>6</p>
                </div>
                <div className={HIWStyles.mainText6}>
                <p>Please note, this is a highly prestigious program. Due to the high level of difficulty, only 10% of students will be awarded the PIAIC certifications.</p>
            
                </div>
                </div>
             
            </div>

            <div className={HIWStyles.container7}>
            <div className={HIWStyles.topContainer}>
                <div className={HIWStyles.bigCircle}>
                    <p className={HIWStyles.bigNumber}>7</p>
                </div>
                <div className={HIWStyles.mainText7}>
                <p>For questions related to admissions, you may call us on the PIAIC Helpline: +92-308-2220203 between 10 AM - 6 PM.</p>
                <p>Please note we are closed on Fridays.</p>
                <p>For technical questions related to coursework, you may contact us via email at education@piaic.org.</p>
                </div>
                </div>
             
            </div>
            
    </section>
    </Layout>
        
    )
}
export default HowItWorks