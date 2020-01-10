import React from "react"
import Layout from "../component/layout"
import Styler from "../styles/myindex.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const Index = () => {
  //     const data = useStaticQuery(graphql`
  //     query {
  //         contentfulBlogpost {
  //             title
  //         }
  //     }
  //     `)

  return (
    <Layout>
      {/* main heading */}
      <div className={Styler.cv}>
      <div className={Styler.body}>
        <div className={Styler.title}>
          {/* <h1>{data.contentfulBlogpost.title}</h1> */}
          <h1>Presidential Initiative</h1>
          <h2>for Artificial Intelligence & Computing (PIAIC)</h2>
          <p>
            The mission of PIAIC is to reshape Pakistan by revolutionizing
            education, research, and business by adopting latest, cutting-edge
            technologies. Experts are calling this the 4th industrial
            revolution. We want Pakistan to become a global hub for AI, data
            science, cloud native computing, edge computing, blockchain,
            augmented reality, and internet of things.
          </p>
        </div>

        <div className={Styler.button_padding}>
          <div>
            <a href="https://portal.piaic.org/signup" target="_blank">
              <p className={Styler.button}> Apply </p>
            </a>
          </div>
          <div className={Styler.line}> </div>
          <ul>
            <li className={Styler.font_li}>65k+ </li>
            <li className={Styler.font_li2}>Applications Recieved</li>
          </ul>
        </div>
        <div className={Styler.heading}>
          <p>Available Programs</p>
        </div>
      </div>
      </div>

      {/* About program */}
 
      <div className={Styler.parent1}>
        <div className={Styler.parent2}>
          <div className={Styler.child1}>
            <Link to="/AI">
              <button>
                <p>Artificial Intelligence</p>
              </button>
            </Link>
            <h1>
              A one year Artificial Intelligence program desing for absolute
              beginners. Getting Pakistan ready for new era of computing enable
              by the rise of AI.
            </h1>
          </div>
          <div className={Styler.child2}>
            <Link to="/CNC">
              <button>
                <p>Cloud Native</p>
              </button>
            </Link>
            <h1>
              A one year Cloud Computing program desing for absolute beginners.
              Getting Pakistan ready for new era of Microservises and
              Multi-Cloud Native computing.
            </h1>
          </div>
          <div className={Styler.child3}>
            <Link to="/BCC">
              <button>
                <p>Blockchain</p>
              </button>
            </Link>
            <h1>
              A one year Blockchain program desing for absolute beginners.
              Getting Pakistan ready for new era of Blockchain, Fintech and
              smart contracts.
            </h1>
          </div>

          <div className={Styler.child4}>
            <Link to="/IOT">
              <button>
                <p>Internet of Things</p>
              </button>
            </Link>
            <h1>
              A fifteen months IOT & AI program desing for absolute beginners.
              Getting Pakistan ready for new era of Internet of Things and AI.
            </h1>
          </div>
        </div>
      </div>

      {/* Program in Development  */}

      <div>
        <p className={Styler.line2}></p>
      </div>

      <div className={Styler.heading2}>
        <p>Programs in Development</p>
      </div>

      <div className={Styler.parent3}>
        <div className={Styler.box}>
          <p class="hv1">SDN/NFV for 5G</p>
        </div>
        <div className={Styler.box1}>
          <p className={Styler.hv2} class="hv2">
            AUGMENTED REALITY
          </p>
        </div>
        <div className={Styler.box2}>
          <p className={Styler.hv3} class="hv3">
            ENTREPRENEURSHIP
          </p>
        </div>
        <div className={Styler.box3}>
          <p className={Styler.hv4} class="hv4">
            MOBILE WEB SPECIALIST
          </p>
        </div>
        <div className={Styler.box4}>
          <p className={Styler.hv5} class="hv5">
            IOS
          </p>
        </div>
        <div className={Styler.box5}>
          <p className={Styler.hv6} class="hv6">
            ANDROID
          </p>
        </div>
      </div>

      {/* {/* ------------------------video section  -------------------------------------------------- */}

      <div className={Styler.parent4}>
        <div className={Styler.heading3}>
          <h3 className={Styler.vidhead}>VIDEOS</h3>
          <div className={Styler.videos}>
            <div>
              <div className={Styler.videobox}>
                <iframe
                  src="https://www.youtube.com/embed/sqtc7s1KZEg"
                  frameborder="0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className={Styler.vidlistbox}>
                <div className={Styler.PresidentSaysvideolist}>
                  <ul className={Styler.vidllist}>
                    <li className={Styler.vidobject}>
                      <div className={Styler.PresidentSaysVideoflexbox}>
                        <div className={Styler.vidlistimg1}></div>
                        <div className={Styler.vidlistcontent}>
                          <h4>PIAIC Classes Coming Soon!</h4>
                          <p>
                            The mission of PIAIC is to reshape Pakistan by
                            revolutionizing education, research, and business by
                            adopting latest, cutting-edge technologies.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className={Styler.vidobject}>
                      <div className={Styler.PresidentSaysVideoflexbox}>
                        <div className={Styler.vidlistimg2}></div>
                        <div className={Styler.vidlistcontent}>
                          <h4 class="">Teaser 2: PIAIC Classes Coming Soon</h4>
                          <p>
                            The mission of PIAIC is to reshape Pakistan by
                            revolutionizing education, research, and business by
                            adopting latest, cutting-edge technologies.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className={Styler.vidobject}>
                      <div className={Styler.PresidentSaysVideoflexbox}>
                        <div className={Styler.vidlistimg3}></div>

                        <div className={Styler.vidlistcontent}>
                          <h4 class="">PIAIC Intro - Full Version</h4>
                          <p>
                            Official intro video of the PIAIC. Messages from
                            President Dr. Arif Alvi, Kazi Rahat Ali, Hunaid
                            Lakhani, Sulaiman S. Mehdi, and Zia Ullah Khan.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className={Styler.vidobject}>
                      <div className={Styler.PresidentSaysVideoflexbox}>
                        <div className={Styler.vidlistimg4}></div>

                        <div className={Styler.vidlistcontent}>
                          <h4 class="">PTV Coverage of PIAIC Entry Test</h4>
                          <p>
                            PTV News coverage of 1st Entrance Exam of the PIAIC
                            in Karachi
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className={Styler.vidobject}>
                      <div className={Styler.PresidentSaysVideoflexbox}>
                        <div className={Styler.vidlistimg5}></div>

                        <div className={Styler.vidlistcontent}>
                          <h4 class="">
                            PIAIC Launch - President Arif Alvi Address
                          </h4>
                          <p>
                            Presidential address at the launch of the
                            Presidential Initiative for Artificial Intelligence
                            and Computing on December 9, 2018.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className={Styler.vidobject}>
                      <div className={Styler.PresidentSaysVideoflexbox}>
                        <div className={Styler.vidlistimg6}></div>

                        <div className={Styler.vidlistcontent}>
                          <h4 class="">Zia Khan Interview on Bol News</h4>
                          <p>Published on Dec 31, 2018</p>
                        </div>
                      </div>
                    </li>
                    <li className={Styler.vidobject}>
                      <div className={Styler.PresidentSaysVideoflexbox}>
                        <div className={Styler.vidlistimg7}></div>

                        <div className={Styler.vidlistcontent}>
                          <h4 class="">PTV Coverage of PIAIC Launch Event</h4>
                          <p>
                            PTV Coverage of PIAIC Launch Event on December 9,
                            2018
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className={Styler.vidobject}>
                      <div className={Styler.PresidentSaysVideoflexbox}>
                        <div className={Styler.vidlistimg8}></div>

                        <div className={Styler.vidlistcontent}>
                          <h4 class="">
                            LIVE: President of Pakistan Dr Arif Alvi's exclusive
                            interview with Nadeem Malik, October 29, 2018
                          </h4>
                          <p>Streamed live on Oct 29, 2018</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>

     {/* -------------------------------------------------------------------------------  */}

      <div className={Styler.super}>
        <h1>Images</h1>
        <div className={Styler.spotlight2}>
          <div className={Styler.spotlight}>
            <div className={Styler.image}></div>
            <div className={Styler.text}>
              <h2>President launches the PIAIC website</h2>
              <p>
                President Dr. Arif Alvi launching thae official website of PIAIC
                on December 9, 2018.From left to right: Mr. Adil Altaf (Director
                Panacloud), Mr. Zia Ullah Khan (CEO Panacloud), Mr. Hunaid
                Lakhani (Chancellor Iqra University),President Dr. Arif Alvi,
                Mr. Suleman S. Mehdi (Chairman Pakistan Stock Exchange), Mr.
                Zeeshan Hanif (CTO Panacloud), Moulana Bashir Farooqui (Founder
                Saylani Welfare Trust), Mr. Yousuf Lakhani (President Saylani
                Walfare Trust).
              </p>
            </div>
          </div>

          <div className={Styler.spotlight}>
            <div className={Styler.image2}></div>
            <div className={Styler.text}>
              <h2>First meeting with thae president</h2>
              <p>
                {" "}
                First official PIAIC meeting on November 1st, 2018. From left to
                right: Mr. Zia Ullah Khan (CEO Panacloud), Mr. Kazi Rahat Ali
                (General Secretary PIAIC), President Dr. Arif Alvi, Mr. Yousuf
                Lakhani (President Saylani Welfare International Trust), Mr.
                Muhammad Ghazzai (COO Saylani Welfare International Trust).
              </p>
            </div>
          </div>

          <div className={Styler.spotlight}>
            <div className={Styler.image3}></div>
            <div className={Styler.text2}>
              <h2>Meeting with chief secretary sindh</h2>
              <p>
                {" "}
                Meeting with Chief Secretary of Sindh, Mr. Mumtaz Ali Shah o
                December 28th, where assured the PIAIC management team of his
                full support for national caused and offered space at all public
                universities in Sindh.
              </p>
            </div>
          </div>
        </div>
      </div>

       {/* -------------------------------------------------------------------------------  */}

      <div className={Styler.partner}>
        <h1>Strategic Partners</h1>
        <div className={Styler.logos}>
          <div className={Styler.items}>
            <a href="https://www.panacloud.ai/" target="_blank">
              <img
                src={require("../images/1.svg")}
                width="130"
                height="auto"
                alt="klnaznc"
              />
            </a>
          </div>

          <div className={Styler.items}>
            <a href="https://www.psx.com.pk/" target="_blank">
              <img
                src={require("../images/2.png")}
                width="60"
                height="auto"
                alt="klnaznc"
              />
            </a>
          </div>

          <div className={Styler.items}>
            <a href="http://www.saylaniwelfare.com/home" target="_blank">
              <img
                src={require("../images/3.png")}
                width="200"
                height="auto"
                alt="klnaznc"
              />
            </a>
          </div>
        </div>
      </div>

      {/* ----------------------------------------contact details ------------------------------------------   */}

     {/* <div className={Styler.head}>
        <div className={Styler.address}>
          <h1>Navigation</h1>
          <Link to="/">
            <p>Home</p>
          </Link>
          <a href="https://portal.piaic.org/signup" target="_blank">
            {" "}
            <p>Apply</p>
          </a>
          <Link to="/howItsWork">
            <p>How It Works</p>
          </Link>
          <Link to="/artificial_intelligence">
            <p>Artificial Intelligence</p>
          </Link>
          <Link to="/cloud_native">
            <p>Cloud Native and Mobile Web Computing</p>
          </Link>
          <Link to="/blockchain">
            <p>Blockchain</p>
          </Link>
          <Link to="/internet_of_things">
            <p>Internet of Things and AI</p>
          </Link>
          <Link to="/thePresident">
            <p>About The President</p>
          </Link>
          <Link to="/managementComittee">
            <p>Management Comittee</p>
          </Link>
          <Link to="/wit">
            <p>Women Inclusion in Technology (WIT)</p>
          </Link>
        </div>

        <div className={Styler.address2}>
          <h1>Locations</h1>
          <h1>PIAIC Headquarters</h1>
          <div className={Styler.add}>
            <div className={Styler.x}>
              <img
                src={require("../images/12.png")}
                width="auto"
                height="25px"
                bg="rgb(36, 49, 53)"
                alt="klnaznc"
              />
            </div>
            <div className={Styler.x}>
              <a href="https://www.google.com/maps/place/Presidential+Initiative+for+Artificial+Intelligence+and+Computing+(PIAIC)+Headquarters/@24.8613137,67.0711981,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb33ff89c73993d:0x91c53ba630675f8!8m2!3d24.8612787!4d67.0733723">
                <p>
                  Plot 245/2 M, Block 6 PECHS, Karachi, Sindh 75100, Pakistan
                </p>
              </a>
            </div>
          </div>
          <div className={Styler.add}>
            <div className={Styler.x}>
              <img
                src={require("../images/10.png")}
                width="auto"
                height="25px"
                bg="rgb(36, 49, 53)"
                alt="klnaznc"
              />
            </div>
            <div className={Styler.x}>
              <p>+92-308-2220203 (WhatsApp as well)</p>
            </div>
          </div>
          <h1>PIAIC Helpline</h1>
          <div className={Styler.add}>
            <div className={Styler.x}>
              <img
                src={require("../images/10.png")}
                width="auto"
                height="25px"
                bg="rgb(36, 49, 53)"
                alt="klnaznc"
              />
            </div>
            <div className={Styler.x}>
              <p>+92-308-2220203 (WhatsApp as well)</p>
            </div>
          </div>
          <h1>Connect with us</h1>
          <div className={Styler.add}>
            <div className={Styler.x}>
              <a
                href="https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg"
                target="_blank"
              >
                <img
                  src={require("../images/8.png")}
                  width="auto"
                  height="25px"
                  bg="rgb(36, 49, 53)"
                  alt="klnaznc"
                />
              </a>
            </div>
            <div className={Styler.x}>
              <a href="https://www.facebook.com/groups/piaic/" target="_blank">
                <img
                  src={require("../images/4.jpg")}
                  width="auto"
                  height="25px"
                  bg="rgb(36, 49, 53)"
                  alt="klnaznc"
                />
              </a>
            </div>
          </div>
        </div>

        <div className={Styler.address3}>
          <h1>Karachi Field Office</h1>
          <div className={Styler.add}>
            <div className={Styler.x}>
              <img
                src={require("../images/12.png")}
                width="auto"
                height="25px"
                bg="rgb(36, 49, 53)"
                alt="klnaznc"
              />
            </div>
            <div className={Styler.x}>
              <a
                href="https://www.google.com/maps/place/Saylani+Welfare+Head+Office./@24.8827229,67.0659646,17z/data=!3m1!4b1!4m5!3m4!1s0x3eb33eebb56aaaab:0x27ab04809ef5020a!8m2!3d24.8827229!4d67.0681533"
                target="_blank"
              >
                <p>
                  A-25, Bahadurabad Chowrangi, Karachi, Sindh 74800, Pakistan
                </p>
              </a>
            </div>
          </div>
          <div className={Styler.add}>
            <div className={Styler.x}>
              <img
                src={require("../images/10.png")}
                width="auto"
                height="25px"
                bg="rgb(36, 49, 53)"
                alt="klnaznc"
              />
            </div>
            <div className={Styler.x}>
              <p>+92-311-1729526</p>
            </div>
          </div>
          <h1>Rawalpindi Field Office</h1>
          <div className={Styler.add}>
            <div className={Styler.x}>
              <img
                src={require("../images/12.png")}
                width="auto"
                height="25px"
                bg="rgb(36, 49, 53)"
                alt="klnaznc"
              />
            </div>
            <div className={Styler.x}>
              <a
                href="https://www.google.com/maps/place/33%C2%B037'58.2%22N+73%C2%B004'04.2%22E/@33.6328413,73.0656368,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d33.6328413!4d73.0678255?hl=en"
                target="_blank"
              >
                <p>4th-B Rd, Satellite Town, Rawalpindi, Punjab 46300</p>
              </a>
            </div>
          </div>
          <div className={Styler.add}>
            <div className={Styler.x}>
              <img
                src={require("../images/10.png")}
                width="auto"
                height="25px"
                bg="rgb(36, 49, 53)"
                alt="klnaznc"
              />
            </div>
            <div className={Styler.x}>
              <p>051-4940669 / 0336-6660215</p>
            </div>
          </div>
          <h1>Islamabad Field Office</h1>
          <div className={Styler.add}>
            <div className={Styler.x}>
              <img
                src={require("../images/12.png")}
                width="auto"
                height="25px"
                bg="rgb(36, 49, 53)"
                alt="klnaznc"
              />
            </div>
            <div className={Styler.x}>
              <a
                href="https://www.google.com/maps/place/33%C2%B041'47.0%22N+73%C2%B000'43.7%22E/@33.696386,73.0099453,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d33.696386!4d73.012134"
                target="_blank"
              >
                <p>
                  F-10 Markaz F 10/3 F-10, Islamabad, Islamabad Capital
                  Territory
                </p>
              </a>
            </div>
          </div>
          <div className={Styler.add}>
            <div className={Styler.x}>
              <img
                src={require("../images/10.png")}
                width="auto"
                height="25px"
                bg="rgb(36, 49, 53)"
                alt="klnaznc"
              />
            </div>
            <div className={Styler.x}>
              <p>051-2223191 (WhatsApp as well)</p>
            </div>
          </div>
          <h1>Faisalabad Field Office</h1>
          <div className={Styler.add}>
            <div className={Styler.x}>
              <img
                src={require("../images/12.png")}
                width="auto"
                height="25px"
                bg="rgb(36, 49, 53)"
                alt="klnaznc"
              />
            </div>
            <div className={Styler.x}>
              <a
                href="https://www.google.com/maps/place/Saylani+Mass+Training+Faisalabad/@31.411708,73.0865596,17z/data=!3m1!4b1!4m5!3m4!1s0x3922681d444b32e1:0xc3887a0e53e91f7!8m2!3d31.411708!4d73.0887483"
                target="_blank"
              >
                <p>
                  Saylani House, 3rd Floor, Lal Mill Chowk, Factory Area,
                  Faisalabad, Punjab
                </p>
              </a>
            </div>
          </div>
          <div className={Styler.add}>
            <div className={Styler.x}>
              <img
                src={require("../images/10.png")}
                width="auto"
                height="25px"
                bg="rgb(36, 49, 53)"
                alt="klnaznc"
              />
            </div>
            <div className={Styler.x}>
              <p>(041) 2417281 / 0337 8659969 (WhatsApp as well)</p>
            </div>
          </div>
        </div>
      </div> */}
    </Layout> 
  )
} 

export default Index

{
  /* <div className={Styler.bc}>
            <div>
                <img src = {require("../images/pp.png")}  className={Styler.Pimg} />
            </div>
            <div>
                <h2 className = {Styler.hs}>{data.site.siteMetadata.title}</h2>
                <p>best web development tool</p>
                <p>this is testing for layout</p>
            </div>
            <div className={Styler.ab}>
                <p>pakistan zindabad</p>
            </div>
        </div>
        <div className = {Styler.g} ></div> */
}
