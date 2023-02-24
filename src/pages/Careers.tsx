import React from 'react'
import HeroSection from 'components/HeroSection';
import styled from '@emotion/styled';
import BG from 'assets/images/career.png';
import COMMENT from 'assets/images/Frame.png';
import COO from 'assets/images/Group 95 (1).png';
import CTO from 'assets/images/Group 88.png';
import funke from 'assets/images/niyo.png';
import solutions from 'assets/images/Group (1).png';
import possibilities from 'assets/images/Group 27.png';
import innovation from 'assets/images/Group 26.png';
import Excellence from 'assets/images/Group 28.png';
import Creativivty from 'assets/images/Group (2).png';
import Inspire from 'assets/icons/career-icon.png';
import Driven from 'assets/icons/careers-icon2.png';
import Focused from 'assets/icons/careers-icon3.png';
import { useState } from 'react';
import dottedBox from 'assets/icons/Group 3.png';
import Learn from 'assets/icons/Group 2222.png';
import Lunch from 'assets/icons/Vector (2).png';
import Flexible from 'assets/icons/Vector (1).png';
import Work from 'assets/icons/Vector (3).png';
import GoldMedal from 'assets/icons/gold-medal-two.jpg';
import Conducive from "assets/icons/Vector.png";
import { CustomButton } from 'reusables/CustomButton';
import Hiring from 'assets/images/we-are-hiring.png';
import Arrow from 'assets/icons/Arrow 1.png';
import Bounce from 'assets/icons/bounce.png';
import Elipse8 from 'assets/images/Ellipse 8.png';
import Group4 from 'assets/images/Group 4.png';
import RectangleWoman from 'assets/images/Rectangle 523.png';
import Elipse1 from 'assets/images/Ellipse 1.png';
import dottedBox2 from 'assets/images/Group 1 (1).png';
import FB from 'assets/icons/Icon Frame (1).png';
import twitter from 'assets/icons/Icon Frame.png';
import Instagram from 'assets/icons/Icon Frame (2).png';
import { Link } from 'react-router-dom';

interface VacantProps {
  id:number;
  job: string;
  type:string;
  location:string;
  details: React.ReactNode;
}

const values = [
    {
      image: solutions,
      header: 'Solutions',
      text: 'We develop solutions for your business everyday needs',
    },
    {
      image: possibilities,
      header: 'Possibilities',
      text: 'Difficulty does not exist in our reality.',
    },
    {
      image: innovation,
      header: 'Innovation',
      text:
        'We are continually drawing out the best arrangements in the best innovative manner.',
    },
    {
      image: Creativivty,
      header: 'Creativity',
      text:
        'We are continually drawing out the best arrangements in the best innovative manner.',
    },
    {
      image: Excellence,
      header: 'Excellence',
      text: 'We do not settle for less. Excellence  is our norm.',
    },
  ];
  
  const staffs = [
    {
      image: COO,
      title: 'CEO & Partner',
      name: 'Albert Afolabi',
      about:'Afolabi is a seasoned Business and Product manager with over 14 years in IT and telecoms(VAS),mobile advertising,product/business strategy and product development. Albert has managed several deployment across10 African countries.'
    },
    {
      image: CTO,
      title: 'CTO &  Partner',
      name: 'Albert Saheed',
      about:'A seasoned Technology consultant with over 14 years experience in building and managing Enterprise Software Solutions, Mobile Application Services and Voiced Based (IVR) Solutions across Africa'
    },
    {
      image: funke,
      title: 'COO & Partner',
      name: 'Niyi Adefabi',
      about:'Niyi is a high-performing digital products professional with 17 years of extensive experience covering IT ,Telecoms, Business Development, Digital Media ,Product Development and Mobile advertising. Niyi has developed and scaled up several digital businesses as well as numerous large scale telco Integrations across Africa.'
    }
  ];




  const vacant = [
    {
      id: 0,
      job: 'SENIOR FRONT-END DEVELOPER',
      type: 'FULL-TIME',
      location: 'LAGOS',
      details: {
        name: "An experienced React developer is needed for a full time role.",
        sub: `As a React.js Developer, you are expected to have Hands on experience developing Web based UI using Javascript/Typescript/ReactJS.  You will be involved from conception to completion with projects that are technologically sound and aesthetically impressive. 
        Duties and responsibilities include but not limited to`,
        list: ["Writing codes to develop highly-responsive, web-based user interface","Collaborate with team members and business partners for problem solving, bug fixes, new feature implementations, work planning and code demonstrations.","	Assist with team-wide validation of functional correctness, architectural compliance, and adherence to applicable industry standards.",
      "Develop a flexible and well-structured front-end architecture, along with the APIs to support it.","Collaborate with other teams to coordinate changes to shared interfaces.",
      "Collaborate with other teams to coordinate changes to shared interfaces.",
      "Adhere to team standards for writing and documenting code.",
      "Requirements and qualifications.",
      "Firm understanding of Object Oriented principles, design patterns, and software design/architecture best practices.",
      "Ability to communicate technical concepts clearly concisely both verbally and in writing.",
      "Ability to collaboratively work through technical issues in a professional manner, making design considerations and trade-offs as needed.",
      "Thrive in and contribute to a collaborative team environment.",
      "Working knowledge on debugging problems using relevant tools.",
      "Experience with JavaScript, Typescript, Redux, RTK Query, Styled Components."
    ]
      }
    },
    {
      id: 1,
      job: 'JUNIOR FRONT-END DEVELOPER',
      type: 'FULL-TIME',
      location: 'LAGOS',
      details: {
        name: "A Junior React developer is needed for a full time role",
        sub: `As a React.js Developer, you will be involved from conception to completion with projects that are technologically sound and aesthetically impressive.`,
        list: [
          "Responsible for development of new highly-responsive, web-based user interface.",
        "Collaborate with team members and business partners for problem solving, bug fixes, new feature implementations, work planning and code demonstrations.",
        "Work and collaborate with the rest of the engineering team.",
      "Work with product team and graphic designers.",
      "Develop a flexible and well-structured front-end architecture, along with the APIs to support it.",
      "Adhere to team standards for writing and documenting code.",
      "Requirements and qualifications.",
      "Minimum of 1yr of experience in React.js.",
      "Experience with JavaScript, Typescript, Redux, RTK Query, Styled Components.",
      "Working knowledge of Git.",
      "Experience of Fintech app is a plus.",
      "Great interpersonal and communication skills.",

    ]
    }
  },
    {
      id: 2,
      job: 'SENIOR BACK-END JAVA DEVELOPER',
      type: 'FULL-TIME',
      location: 'LAGOS',

      details: {
        name: " An experienced Java Back-End developer with at least 3yrs experience is needed for a full time role",
        sub: ` As a back-end Java Developer, your roles and responsibilities include but not limited to:`,
        list: ["Supporting the development of enterprise applications.",
          "Designing and implementing micro-services architectures.",
          "Independently identify technical solutions for business problems, directly contribute to conceptual design, and routinely collaborate with Enterprise/Application architects, Database.",
          "Requirements and qualifications.",
          "Proficiency in Java, with a good understanding of its ecosystems.",
          "Sound knowledge of Object-Oriented Programming (OOP) Patterns and Concepts.",
          "Familiarity with different design and architectural patterns.",
          "Skill for writing reusable Java libraries and know-how of Java concurrency pattern.",
          "Basic Understanding of the concepts of MVC (Model-View-Controller) Pattern, JDBC (Java Database Connectivity), and RESTful web services.",
          "Relevant Knowledge of Java GUI frameworks according to project requirements.",
          "Experience in handling external and embedded databases.",
          "Understanding basic design principles behind a scalable application.",
          "Skilled at creating database schemas that characterize and support business processes.",
          "In-depth knowledge of code versioning tools, for instance, Git.",
          "Expertise in continuous integration."
    ]
    }
    },
    {
      id: 3,
      job:'SENIOR BACK-END NODE JS DEVELOPER',
      type: 'FULL-TIME',
      location: 'LAGOS',

      details: {
        name: "An senior Node-JS Back-End developer with at least 4years of experience is needed for a full time role.",
        sub: `As a backend Java Developer, your roles and responsibilities include but not limited to:`,
        list: ["Using Nodejs server-side framework to implement a robust and scalable.",
          "Supporting  the development of enterprise applications.",
          "Designing and implementing  microservices architectures.",
          "Independently identify technical solutions for business problems, directly contribute to conceptual design, and routinely collaborate with Enterprise/Application architects, Database.",
          "Requirements and qualifications.",
          "Experience in cross-platform development with strong knowledge on Node.js.",
          "Familiarity with REST and integration concepts.",
          "Experience on implementing NFRs but not limited to Performance, Scalability, Availability, Maintainability and Security.",
          "Knowledge of Micro services and respective architecture design principles and scalability best practices.",
          "Experience developing APIs against database technologies (MySQL, Postgres).",
          "Strong background in Logic and Algorithms.",
          "Perform analysis, design, programming, and implementation on systems and procedures to solve complex business problems.",
          "Create review technical design documentation.",
          "Perform periodic code reviews according to programming and development standards and best practice."
    ]
    }
    },
    {
      id: 4,
      job:'SENIOR PRODUCT MANAGER',
      type: 'FULL-TIME',
      location: 'LAGOS',
      details: {
        name: "We are looking for Senior Product Managers to join our growing team.",
        sub: ` Our product Managers own the end-to-end planning and execution of products, develop and execute the product strategy.
        Product managers are responsible for driving product choices and priorities in partnership with all stakeholders.`,
        list: [
          "Roles and Responsibilities includes but not limited to:",
      "Strive to deeply understand user needs by conducting user research and identifying opportunities and pain points. And advocate for user needs through the cycle of building products.",
      "Define, document, and drive roadmaps, project plans, and precise product specifications that consistently deliver quality products for your customers.",
      "Work with a team of engineers and designers to discover solutions to customer pain points, and build and launch products for local and global businesses.",
      "Define and drive roadmaps, project plans, and precise product specifications that consistently deliver quality products.",
      "Ensure successful product launches by working cross-functionally with marketing, merchant success, sales, operations, legal, and compliance teams.",
      
      "Requirements",
      
     "4+ years of experience in product management, with demonstrated experience in successfully building and shipping impactful products.",
      "Strong strategic thinking, and problem-solving abilities.",
      "You have a good understanding of how software is built and operated and experience in building technical software products.",
      "Strong customer empathy and experience shaping product direction and execution based on customer needs.",
      "Excellent ability to bring clarity and focus to complex and ambiguous situations.",
      "Excellent verbal and written communication skills.",
      "Ability to collaborate." ,
      "Great attention to detail and cares about building quality products.",
      "Experience working with both qualitative customer insights and quantitative data to inform decisions."
    ]
    }
    }

  ];

  console.log(vacant.map((vac) => 
 
    Object.values(vac.details)[0]
   ));


export default function Careers() {
    const [hover, setHover] = useState('');

   
    const [current, setCurrent] = React.useState({
      display: false,
      number:0
    })
    // const [show, setShow]  = React.useState<Object>({});

 

    // const [display, setDisplay] = useState('false');
  return (
    <Careers.Wrapper>
        <div>
        <HeroSection
          bg="linear-gradient(178.13deg, #61D0FF 1.56%, rgba(240, 250, 255, 0) 100.8%)"
          h1Text="Join the A-Class team for Go-getter"
          pText="It takes more than mediocrity to change the world. We have put together an amazing team of optimistic and goal-driven Clever Tigers with passion and skill sets.
          We encourage diversity and we are open to meeting just about anyone with the right passion and skills regardless of looks, gender, sexual orientation, color, tribe, nationality, and disability.
          At TM30 GLOBAL, the best minds collaborate to create sustainable solutions. It is more than just a job, it’s a commitment to doing beyond our best, and getting it right the first time. "
          subText=""
          heroImg={BG}
        />
      </div>
      <div className='comment'>
        <img src={COMMENT} alt="comment-img" className='comment-img'/>
        <h1 data-aos="text">Thank you for your interest in joining our team!</h1>
        <p>
        We believe work is more than a desk or a to-do list.
        We believe work should empower a better life.
        </p>
      </div>

      <h1 className="what-we">We are:</h1>
      <div className="services">
        <div className="container">
        <div className="first">
            <img src={Inspire} className="" alt="" />
          </div>
          <h1>Inspired by people</h1>
          <p>
          People are the focal point of everything we do. Our daily task is to deliver transaction solutions that empower modern businesses and people to thrive.
          </p>
        </div>
        <div className="container">
          <div className="first">
            <img src={Driven} alt="" />
          </div>
          <h1>Driven by values</h1>
          <p>
          Values drive our decisions and actions. 
          Everyone is a stakeholder; we do what it takes to get it right the first time and all the time.
          </p>
        </div>

        <div className="container">
          <div className="first">
            <img src={Focused} alt="" />
          </div>
          <h1>Focused on scaling</h1>
          <p>
          Regardless of how large we scale, we retain the agility of a startup and remain focused on creating the best solutions possible for our clients.
          </p>
        </div>
      </div>

      {/* <p className="heading">We embrace the S.P.I.C.E values</p>
      <h1 className="sub-heading">Our Core Values</h1>
      <p className="head">We are deliberate about our culture. At TM30 Global Limited, our values are embedded in our day-to-day processes.
        We go above and beyond to help each other succeed and hold each other accountable to deliver results.
      </p>
      <div className="core_values">
        {values.map((val, idx) => (
          <div className="container"
          onMouseEnter={() => setHover('second')}
          onMouseLeave={() => setHover('')}
          style={{
            background: `${hover === 'second' ? 'white' : '#f5fcff'}`,
          }}
           key={idx}>
            <img src={val.image} alt="" />
            <h1>{val.header}</h1>
            <p>{val.text}</p>
          </div>
        ))}
      </div> */}

      <div className="services-container">
        <div className="dotted-box">
          <img src={dottedBox} alt="" data-aos="shake" />
        </div>
        <div
          className="text"
          data-aos="zoom-out-right"
          data-aos-duration="2000"
          data-aos-easing="ease-in-quad"
        >
          <h1>Benefits and Perks of Joining TM30</h1>
          <p>
          We are dedicated to making the rest of your life as rewarding as your job.
          </p>
          <CustomButton>
            Learn More
          </CustomButton>
        </div>
        <div className="service" data-aos="flip-left" data-aos-duration="2000">
          <div
            className="container"
            onMouseEnter={() => setHover('fourth')}
            onMouseLeave={() => setHover('')}
            style={{
              background: `${hover === 'fourth' ? 'white' : '#f5fcff'}`,
            }}
          >
            <img src={GoldMedal} alt="" style={{ marginBottom: '2rem' }} />
            <h1>
            Competitive <br /> Compensation
            </h1>
          </div>
          <div
            className="container mobile"
            onMouseEnter={() => setHover('fifth')}
            onMouseLeave={() => setHover('')}
            style={{
              background: `${hover === 'fifth' ? 'white' : '#f5fcff'}`,
            }}
          >
            <img
              src={Learn}
              style={{ marginBottom: '2rem' }}
              className=""
              alt=""
            />

            <h1>Learning & <br /> development</h1>
          </div>
          <div
            className="container"
            onMouseEnter={() => setHover('eight')}
            onMouseLeave={() => setHover('')}
            style={{
              background: `${hover === 'eight' ? 'white' : '#f5fcff'}`,
            }}
          >
            <img src={Lunch} style={{ marginBottom: '2rem' }} alt="" />

            <h1>
            Lunch on us
            </h1>
          </div>

          <div
            className="container ui"
            onMouseEnter={() => setHover('sixth')}
            onMouseLeave={() => setHover('')}
            style={{
              background: `${hover === 'sixth' ? 'white' : '#f5fcff'}`,
            }}
          >
            <img src={Flexible} alt="" style={{ marginBottom: '2rem' }} />

            <h1>
            Flexible <br /> work policy
            </h1>
          </div>
          <div
            className="container"
            onMouseEnter={() => setHover('seven')}
            onMouseLeave={() => setHover('')}
            style={{
              background: `${hover === 'seven' ? 'white' : '#f5fcff'}`,
            }}
          >
            <img src={Work} alt="" style={{ marginBottom: '2rem' }} />
            <h1>
            Work with <br /> smart teams
            </h1>
          </div>
          <div
            className="container"
            onMouseEnter={() => setHover('seven')}
            onMouseLeave={() => setHover('')}
            style={{
              background: `${hover === 'seven' ? 'white' : '#f5fcff'}`,
            }}
          >
            <img src={Conducive} alt="" style={{ marginBottom: '2rem' }} />
            <h1>
            Conducive <br /> work environment
            </h1>
          </div>
        </div>
      </div>

      <div className="hiring">
        <div className='hiring-img'></div>
        <div className='sum'>
          <div className='sat'>
            <h1 style={{marginRight:'88px'}}>Position</h1>
            <h1 style={{marginRight:'65px'}}>Job Type</h1>
            <h1 style={{marginRight:'80px'}}>Location</h1>
            <h1>See Description</h1>
          </div>
          <div style={{paddingBottom:'20px'}}>
            {/* {
              vacant.map((vac, index) => (
               <div style={{marginTop:'10px'}} >
                <div style={{display:'flex'}} key={index}>
                  <h4 style={{marginRight:'65px',width:'100px'}}>{vac.job}</h4> 
                  <h4 style={{marginRight:'80px'}}>{vac.type}</h4> 
                  <h4 style={{marginRight:'80px'}}>{vac.location}</h4> 
                  <h4><button style={{backgroundColor:'#6A0DAD',color:'white',borderRadius:'4px',padding:'4px',cursor:'grab'}} onClick={() => displaying(vac)}>See more..</button></h4> 
                </div> 
                {
                  display  && 
                  (
                    <div style={{width: '400px',fontSize:'10px'}}>{vac.details[0]}</div>
                  )
                
                } 
               </div>
              )
              )
            } */}

            {
              vacant.map((vac, index) => {
              
                const {type, location, job, id, details} = vac

                return (
                 <div style={{marginTop:'25px'}}>
                    <div style={{display:'flex'}} key={index}>
                  <h3 style={{marginRight:'65px',width:'100px'}}>{job}</h3> 
                  <h3 style={{marginRight:'100px'}}>{type}</h3> 
                  <h3 style={{marginRight:'130px'}}>{location}</h3> 
                  <h3><button style={{backgroundColor:'#61d0ff',color:'white',borderRadius:'4px',padding:'6px',cursor:'grab',borderStyle: 'none',fontSize:'15px'}} 
                  onClick={() => setCurrent(curr=>({
                    ...curr,
                    display: !curr.display,
                    number:id
                  }))}
                  >See more..</button></h3> 
                </div> 
                {
                  current.display && current.number === id  ?
                  
                  (
                    <>
                    <p style={{width: '100%',fontSize:'13px', marginTop:'20px',fontWeight:100,color: 'darkgrey',wordSpacing: '5px',lineBreak: 'auto',lineHeight: '14px'}}>{details.name}</p>
                    <p style={{width: '100%',fontSize:'13px',fontWeight:100,color: 'darkgrey',wordSpacing: '5px',lineBreak: 'auto',lineHeight: '14px'}}>{details.sub}</p>
                    <ul style={{width: '100%',fontSize:'13px',marginBottom:'20px',fontWeight:100,color: 'darkgrey',wordSpacing: '5px',lineBreak: 'auto',lineHeight: '14px'}}>{
                    details.list.map(
                        (lister) => {
                            return (
                              <li>{lister} </li>
                            )
                        }
                    )
                    }</ul>
                    <div><a href='https://docs.google.com/forms/d/e/1FAIpQLScTciTrhw6yST_XZd4vQSGaZBihSiWyw8lb1VVc1AIWEeDsHQ/viewform?usp=sf_link' style={{textDecoration:'none',backgroundColor:'#61d0ff',color:'white',borderRadius:'4px',padding:'4px',cursor:'grab',borderStyle: 'none'}}>Apply Now</a></div>
                    </>
                  )
                  :
                  ''
                
                } 
                </div>
                )
              })
            }
          </div>
           

          {/* {staffs.map((staff) => (
            <div className="staff" key={staff.name}>
              <img src={staff.image} alt={staff.name} />
              <h1>{staff.name}</h1>
              <p>{staff.title}</p>
              <p style={{marginTop:'4%'}}>{staff.about}</p>
            </div>
          ))} */}
           
        </div>
        {/* <div className="text">
          <h1>Be part of our Creative Community</h1>
          <p>
          We love what we do and we do it with passion.
           Join our Team as we proceed into greatness.
          </p>
          <div className='base-btn'>
          <Link
                to={{ pathname: ' https://www.linkedin.com/company/tm30/' }}
                target="_blank"
              >
                <CustomButton>
            Join us 
            </CustomButton>
            </Link>
          <p className='support'>Support <img src={Arrow} className='support-img' alt=''/></p>
          </div>
        </div> */}
      </div>

      <div className="contact">
        <div className="first">
          <img src={Group4} className="dottedBox" alt="" />
          <img src={RectangleWoman} alt="" className="lady" />
          <img src={Elipse8} alt="" className="Elipse8" />
        </div>
        <div className="text">
          <h1>TM Academy</h1>
          <p>Read and learn more about our engineering academy, and how you can become a software developer</p>
          <div className='sub-section'>
            <h3 className='learn'>Learn</h3>
            <Link
                to={{ pathname: 'https://tmacademy.tm30.net/' }}
                target="_blank"
              >
          <CustomButton>
          Free of Charge
          </CustomButton>
          </Link>
          </div>
        </div>
        <img src={Elipse1} alt="" className="ellipse1" />
      </div>

      <div className="team">
        <img src={dottedBox2} alt="" className="dottedBox2" />
        <div className="header">
          <h1>Meet the our leadership Team</h1>
          </div>
        <div className="body">
        {staffs.map((staff) => (
            <div className="staff" key={staff.name}>
              <img src={staff.image} alt={staff.name} />
              <h1>{staff.name}</h1>
              <p>{staff.title}</p>
              <p style={{marginTop:'4%'}}>{staff.about}</p>
            </div>
          ))}
        </div>
        <img src={Elipse1} alt="" className="ellipse1" />
      </div>
    </Careers.Wrapper>
  )
}

Careers.Wrapper = styled.div`
  .heading {
    margin-top: 10rem;
    font-weight: bold;
    font-size: 14px;
    line-height: 28px;
    color: rgba(0, 13, 54, 0.45);
    padding: 0 8rem;
  }
  .head {
    font-weight: bold;
    font-size: 14px;
    line-height: 28px;
    color: rgba(0, 13, 54, 0.45);
    padding: 0 8rem;
  }
  .sub-heading {
    font-size: 40px;
    line-height: 49px;
    padding: 0 8rem;
    color: #000d36;
  }
  .comment {
    margin: 8rem 0 0;
    padding: 1.5rem 8rem;
    background: #99E0FF1A;
    .comment-img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 2rem;
      margin-top: -5rem;
    }
    & > h1 {
      font-weight: 800;
      font-size: 40px;
      line-height: 49px;
      color: #000d36;
      font-style: italic;
      text-align: center;
    }
    & > p {
      font-weight: bold;
      font-size: 14px;
      line-height: 22px;
      text-align: center;
      color: rgba(0, 13, 54, 0.45);
      width: 489px;
      margin: 1rem auto;
    }
}
.what-we {
    font-size: 40px;
    line-height: 49px;
    color: #000d36;
    margin: 7rem 0 0;
    text-align: center;
  }

  .services {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1.5rem 8rem;
    & > * {
      width: 31%;
      background: #fcfeff;
      box-shadow: 15px 25px 40px rgba(64, 64, 64, 0.05);
      border-radius: 30px;
      padding: 3rem;
      margin: 2rem 0.8rem;
      h1 {
        margin: 2rem auto;
      }
      p {
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.45);
        width: 90%;
      }
    }
  }
  .core_values {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 80%;
    margin: 2rem auto;
    margin-left: 24rem;
    /* padding: 0 13rem; */
    & > * {
      width: 33%;
      margin: 2rem 0;
      &.container {
        margin: 2rem 2rem 2rem 0;
        width: 30%;
        border-radius: 30px;
        padding: 2rem 2rem 3rem;
        h1 {
          margin: 2rem 0;
        }
        p {
          font-weight: bold;
          font-size: 14px;
          line-height: 16px;
          color: rgba(0, 13, 54, 0.45);
          width: 50%;
        }
      }
    }
  }
  .services-container {
    display: flex;
    justify-content: space-between;
    padding: 5rem 8rem 8rem;
    position: relative;
    .dotted-box {
      position: absolute;
      left: 0;
      top: 0;
      /* width: 200px; */
      img {
        /* width: 70%; */
      }
    }
    .text {
      width: 30%;
      align-self: center;
      h1 {
        font-size: 40px;
        line-height: 49px;
        color: #000d36;
      }
      p {
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.45);
        margin: 1.5rem 0;
      }
    }
    .service {
      width: 60%;
      display: flex;
      flex-wrap: wrap;
      .container {
        margin: 2rem 2rem 2rem 0;
        width: 30%;
        border-radius: 30px;
        padding: 2rem 2rem 3rem;
        &.mobile {
          .first {
            /* padding: 2rem 3.5rem 2rem 2.5rem;
            img {
              width: 150%;
            } */
          }
        }
        &.ui {
          .first {
            /* padding: 2rem 2rem 2rem 2rem; */
            /* img {
              width: 80%;
            } */
          }
        }
        .first {
          /* padding: 1.9rem 1.9rem; */
          /* background: white; */
          /* border-radius: 35px;
          width: fit-content; */
          text-align: center;
          margin-bottom: 2rem;
          /* padding: 2rem 2.7rem 2rem 2rem; */
          img {
            /* width: 120%; */
          }
          img {
          }
        }
      }
    }
  }
  .hiring {
    // margin: 2rem 0;    
    background: url(${Hiring}) no-repeat center;
    width: 536px;
   min-height: 439px;
    margin-left: 98px;
    background-color: #FCFEFF;
    .sum {
      padding-top: 5%;
      padding-left: 4%;
      width: 650px;
      // height:auto ;
      margin: 2rem auto;
      margin-left: 583px;
      background-color: #FFFFFF;
      .sat{
        display:flex
      
      }
    }
    .text {
      width: 100%;
      margin: 2rem auto;
     margin-left: 553px;
      & > * {
        text-align: flex-start;
        margin: 2rem auto;
      }
      h1{
        font-size: 40px;
      }
      p {
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.45);
      }
      .base-btn{
        display: flex;
      }
      .support{
      font-family: 'Proxima Nova';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      color: #61d0ff;
      margin-left: 3rem;
      margin-top: 2rem;

      .support-img{
        margin-left: 1rem;
      }
      }
    }
  }
  .contact {
    // margin-top: 80px;
    padding: 10rem 10rem 10rem 15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .first {
      position: relative;
      .Elipse8 {
        position: absolute;
        z-index: -2;
        bottom: -10%;
        right: -15%;
      }
      .dottedBox {
        position: absolute;
        z-index: -2;
        bottom: -10%;
        left: -20%;
      }
    }
    .text {
      position: relative;
      z-index: 100;
      width: 45%;
      align-self: center;
      h1 {
        font-size: 40px;
        line-height: 49px;
        color: #000d36;
      }
      p {
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.45);
        margin: 1.5rem 0;
        width: 80%;
      }
      .sub-section{
        display: flex;
        justify-content: flex-start;
        margin-left: 20px;
        margin-top: 2rem;
        h3{
          font-family: 'Proxima Nova';
          font-style: normal;
          font-weight: 700;
          font-size: 46px;
          line-height: 28px;
          margin-right: 20px;
          margin-top: 20px;
        }
      }
    }
    .ellipse1 {
      position: absolute;
      right: 0;
      width: 40%;
      top: 0%;
      height: 911px;
    }
  }
  @media (max-width: 768px) {
    .what-we-do {
      padding: 2rem;
      margin: 3rem 0;
      .details-container {
        margin: 1rem 0;
        flex-direction: column;
        .details {
          width: 100%;
          margin: 2rem 0;
          .text {
            margin-left: 2rem;
          }
        }
      }
    }
    .what-we {
      margin: 1rem 0;
    }
    .contact {
      padding: 2rem;
      flex-direction: column;
      .first {
        .dottedBox {
          display: none;
        }
        .lady {
          width: 100%;
        }
        .Elipse8 {
          display: none;
        }
      }
      .text {
        width: 100%;
        h1 {
          font-size: 20px;
          margin-top: 3rem;
        }
        p {
          width: 100%;
        }
      }
      .ellipse1 {
        display: none;
      }
    }
  }
  .team {
    position: relative;
    padding: 0 8rem;
    margin: 15rem auto 9rem;
    .dottedBox2 {
      position: absolute;
      left: 0;
      width: 9.5%;
      top: 28%;
    }
    .header {
      h1 {
        font-weight: 800;
        font-size: 40px;
        color: #000d36;
        margin: 2rem 0;
        margin-bottom: 8rem;
      } 
    }
    .body {
      width: 82%;
      margin-left: auto;
      margin-top: -50px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      & > * {
        width: 30%;
        margin: 2rem auto;
        h1 {
          font-weight: 800;
          font-size: 24px;
          line-height: 29px;
          color: #000d36;
          margin: 2rem auto;
        }
        p {
          font-size: 16px;
          line-height: 19px;
          color: #000d36;
        }
      }
    }
    .ellipse1 {
      position: absolute;
      right: 0;
      width: 40%;
      top: 10%;
      height: 911px;
      z-index: -1;
    }
  }
  @media (max-width: 768px) {
    .heading {
      padding: 0 2rem;
      margin-top: 2rem;
    }
    .sub-heading {
      font-size: 20px;
      padding: 0 2rem;
    }
    .team {
      margin: 0;
      padding: 2rem;
      .dottedBox2 {
        display: none;
      }
      .ellipse1 {
        display: none;
      }
      .header {
      }
      .body {
        margin-top: 4rem;
        width: 100%;
        flex-direction: column;
        & > * {
          width: 100%;
          margin: 2rem 0;
          text-align: center;
        }
      }
    }
  }
`;