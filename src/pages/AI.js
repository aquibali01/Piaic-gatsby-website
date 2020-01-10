import React from "react"
import Layout from "../component/layout"
import Styler from "../styles/AI.module.scss"
// import { Link, graphql, useStaticQuery } from "gatsby"

const AiPage = () => {
  return (
    <Layout>
      {/* ------------------------------------------------------------------------------------- */}

      <div className={Styler.heading}>
        <h1>Artificial Intelligence</h1>
        <p>A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.</p>
        <h2>
          GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE
          RISE OF AI.
        </h2>
      </div>

      {/* ------------------------------------------------------------------------------------- */}

      <div className={Styler.page}>
        <h1>Program Structure</h1>
        <p>A four-quarter AI program in Data Science, Machine Learning, </p>
        <h2>and Deep Learning.</h2>
      </div>

      <div className={Styler.flex}>
        <div className={Styler.box1}>
          <h1>Quarter 1</h1>
          <p>AI Foundations</p>
        </div>
        <div className={Styler.box2}>
          <h1>Quarter 2</h1>
          <p>Introduction to Data Science & Deep Learning</p>
        </div>
        <div className={Styler.box3}>
          <h1>Quarter 3</h1>
          <p>Deploying AI Solutions</p>
        </div>
        <div className={Styler.box4}>
          <h1>Quarter 4</h1>
          <p>AI In Practice</p>
        </div>
      </div>

       {/* -------------------------------------------------------------------------------------  */}

      <div className={Styler.line}>
        <p></p>
      </div>
      <div className={Styler.h1}>
        <p>Detailed Program Structure</p>
      </div>

      <div className={Styler.parent}>
        <div className={Styler.parent1}>
          <div className={Styler.child}>
            <h1>Version Control with Git</h1>
            <p>
              <img src = {require("../images/aiim/git.png")} />
              You won't find a top programmer, web developer, or AI engineer who
              doesn't use version control. This is true because version control
              helps developers produce better results and makes collaboration
              easy. Around the world, in teams both large and small, Git is an
              essential part of the toolchain. This module covers Git and
              Github.
            </p>
          </div>
          {/* <div className={Styler.space1}></div> */}
          <div className={Styler.child} id={Styler.sp2}>
            <h1>Introduction to Linear Algebra and Statistics</h1>
            <p>
            <img src = {require("../images/aiim/datas.jpg")} />
              In this module, students will learn the basic mathematical and
              statistical concepts that are needed to practice data science and
              understand deep learning. Students will also implement these
              concepts in Python and TensorFlow.
            </p>
          </div>
          <div className={Styler.child}>
            <h1>Data Science Essentials</h1>
            <p>
             <img src = {require("../images/aiim/datas.png")} height='80px'/>
              In this module, students will learn key concepts and techniques
              used to perform data science; including statistical analysis, data
              cleansing and transformation, and data visualization with Python.
            </p>
          </div>
          <div className={Styler.child5}>
            <h1>Introduction to Linux and Bash</h1>
            <p>
            <img src = {require("../images/aiim/linux.png")} />
              Linux containers are poised to take over the world. In this
              module, students will begin learning with an introduction of Linux
              and the command line interface. For many non-technical people, the
              command line (also referred to as CLI, Terminal, bash, or shell)
              is a place of mystery. However, knowledge of only a handful of
              basic commands is enough to start feeling comfortable. In this
              module, we will cover the basic commands to get you started.
            </p>
          </div>
          <div className={Styler.child}>
            <h1>Python Microservices Development</h1>
            <p>
            <img src = {require("../images/aiim/micro.png")} />
              In recent years, REST (REpresentational State Transfer) has
              emerged as the standard architectural design for web services and
              web APIs. In this module, students will learn how easy it is to
              create a RESTfulweb service using Python and Flask.
            </p>
          </div>
          <div className={Styler.child2}>
            <h1>Artificial Intelligence (AI) in Practice</h1>
            <p>
            <img src = {require("../images/aiim/ai.jpg")} />
              This module is structured around a series of practical code
              examples, demonstrating on real world problems. PIAIC strongly
              believes in the value of teaching using concrete examples,
              anchoring theoretical ideas into actual results and tangible code
              patterns. These examples all rely on Keras, the Python deep
              learning library. Students will learn Deep Learning for computer
              vision, text and sequences, finance, and advanced neural network
              design.
            </p>
          </div>
        </div>

        <div className={Styler.parent3}>
          <div className={Styler.circle_container}>
            <div className={Styler.circle_main1}>
              <div className={Styler.circle_text_container}>
                <div className={Styler.circle_text}>1A</div>
              </div>
            </div>
          </div>

          <div className={Styler.verticalLine1}></div>

          <div className={Styler.circle_container}>
            <div className={Styler.circle_main2}>
              <div className={Styler.circle_text_container}>
                <div className={Styler.circle_text}>1B</div>
              </div>
            </div>
          </div>

          <div className={Styler.verticalLine2}></div>

          <div className={Styler.circle_container}>
            <div className={Styler.circle_main2}>
              <div className={Styler.circle_text_container}>
                <div className={Styler.circle_text}>1C</div>
              </div>
            </div>
          </div>

          <div className={Styler.verticalLine3}></div>

          <div className={Styler.circle_container}>
            <div className={Styler.circle_main3}>
              <div className={Styler.circle_text_container}>
                <div className={Styler.circle_text2}>2A</div>
              </div>
            </div>
          </div>

          <div className={Styler.verticalLine4}></div>

          <div className={Styler.circle_container}>
            <div className={Styler.circle_main3}>
              <div className={Styler.circle_text_container}>
                <div className={Styler.circle_text2}>2B</div>
              </div>
            </div>
          </div>

          <div className={Styler.verticalLine4}></div>

          <div className={Styler.circle_container}>
            <div className={Styler.circle_main3}>
              <div className={Styler.circle_text_container}>
                <div className={Styler.circle_text2}>2C</div>
              </div>
            </div>
          </div>

          <div className={Styler.verticalLine4}></div>

          <div className={Styler.circle_container}>
            <div className={Styler.circle_main4}>
              <div className={Styler.circle_text_container}>
                <div className={Styler.circle_text2}>3A</div>
              </div>
            </div>
          </div>

          <div className={Styler.verticalLine4}></div>

          <div className={Styler.circle_container}>
            <div className={Styler.circle_main4}>
              <div className={Styler.circle_text_container}>
                <div className={Styler.circle_text2}>3B</div>
              </div>
            </div>
          </div>

          <div className={Styler.verticalLine4}></div>

          <div className={Styler.circle_container}>
            <div className={Styler.circle_main4}>
              <div className={Styler.circle_text_container}>
                <div className={Styler.circle_text2}>3C</div>
              </div>
            </div>
          </div>

          <div className={Styler.verticalLine3}></div>

          <div className={Styler.circle_container}>
            <div className={Styler.circle_main4}>
              <div className={Styler.circle_text_container}>
                <div className={Styler.circle_text2}>3D</div>
              </div>
            </div>
          </div>

          <div className={Styler.verticalLine3}></div>

          <div className={Styler.circle_container}>
            <div className={Styler.circle_main5}>
              <div className={Styler.circle_text_container}>
                <div className={Styler.circle_text2}>4</div>
              </div>
            </div>
          </div>
        </div>

        <div className={Styler.parent2}>
          <div className={Styler.child3} id={Styler.sp1}>
            <h1>Object Oriented and Functional Programming using Python</h1>
            <p>
            <img src = {require("../images/aiim/python.jpg")} />
              In the second module of the program, students will learn about
              basic programming concepts such as lists, dictionaries, classes,
              functions and loops, and practice writing clean and readable code
              with exercises for each topic. Students will also learn how to
              make programs interactive and how to test code safely before
              adding it to a project. It is a fast-paced, thorough introduction
              to programming with Python 3.6 that will have students writing
              programs, solving problems, and making things that work in no
              time.
            </p>
          </div>
          <div className={Styler.space1}></div>
          <div className={Styler.child4}>
            <h1>Advanced Python Libraries with Anaconda</h1>
            <p>
            <img src = {require("../images/aiim/anaconda.png")} />
              In this module, students will be introduced to Anaconda, the
              leading open data science platform powered by Python. The open
              source version of Anaconda is a high performance distribution of
              Python and R and includes over 100 of the most popular Python and
              R packages for data science, such as NumPy, Matplotlib, etc.
            </p>
          </div>
          <div className={Styler.child3}>
            <h1>
              The Fundamentals of Deep Learning with Keras with TensorFlow
              Backend
            </h1>
            <p>
            <img src = {require("../images/aiim/keras.png")} />
              Before implementing deep-learning algorithms, students will first
              become familiar with the mathematical blocks of the neural
              networks theory. Students will get a chance to get their hands
              dirty writing some simple Keras code right away! Then they will
              move on to advanced deep learning concepts. This module will also
              cover some essential advantages of Keras to prove it’s the
              deep-learning library of choice.
            </p>
          </div>
          <div className={Styler.child4}>
            <h1>Docker Deep Dive</h1>
            <p>
            <img src = {require("../images/aiim/docker.png")} />
              This module provides a soup-to-nuts learning experience for core
              Docker technologies, including the Docker Engine, Images,
              Containers, Registries, Networking, Storage, and more. All of the
              behind the scenes theory is explained, and all concepts are
              clearly demonstrated on the command line. No prior knowledge of
              Docker or Linux is required.
            </p>
          </div>
          <div className={Styler.child4}>
            <h1>Build AI Microservices for ContainerDeployments</h1>
            <p>              
            <img src = {require("../images/aiim/conmic.png")} />
              In this module, students will learn to use containers to simplify
              AI solution deployments and implement continuous integration and
              deployment strategies.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
} 

export default AiPage
