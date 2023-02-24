import HeroSection from 'components/HeroSection';
import React, { useState } from 'react';
import BG from 'assets/images/Group.png';
import styled from '@emotion/styled';
import solutions from 'assets/images/Group (1).png';
import possibilities from 'assets/images/Group 27.png';
import innovation from 'assets/images/Group 26.png';
import Excellence from 'assets/images/Group 28.png';
import Creativivty from 'assets/images/Group (2).png';
import dottedBox from 'assets/icons/Group 3.png';
import { CustomButton } from 'reusables/CustomButton';
import Albert from 'assets/images/Group 54.png';
import Placeholder from 'assets/images/Rectangle 524.png';
import dottedBox2 from 'assets/images/Group 1 (1).png';
import Elipse1 from 'assets/images/Ellipse 1.png';
import COO from 'assets/images/Group 95 (1).png';
import CTO from 'assets/images/Group 88.png';
import niyo from 'assets/images/niyo.png';
import chairman from 'assets/images/chairman.png';
import ceo from 'assets/images/ceo.png';
import titi from 'assets/images/titilayo.png';
import ejembi from 'assets/images/ejembi.png';
import dosumu from 'assets/images/dosumu.png';
import saheed from 'assets/images/saheed.png';
import niyi from 'assets/images/niyi.png';
import arrow from 'assets/images/arrow.png';
import Modal from './Modal';

// const titi = require('assets/images/titilayo.svg') as '*.svg';

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
    text: 'We are continually drawing out the best arrangements in the best innovative manner.',
  },
  {
    image: Creativivty,
    header: 'Creativity',
    text: 'We are continually drawing out the best arrangements in the best innovative manner.',
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
    about:
      'Afolabi is a seasoned Business and Product manager with over 14 years in IT and telecoms(VAS),mobile advertising,product/business strategy and product development. Albert has managed several deployment across10 African countries.',
    gridArea: '1 / 2 / 2 / 3',
    id: 'member2',
  },
  {
    image: CTO,
    title: 'CTO &  Partner',
    name: 'Albert Saheed',
    about:
      'A seasoned Technology consultant with over 14 years experience in building and managing Enterprise Software Solutions, Mobile Application Services and Voiced Based (IVR) Solutions across Africa',
    gridArea: '2 / 1 / 3 / 2',
    id: 'member6',
  },
  {
    image: niyo,
    title: 'COO & Partner',
    name: 'Niyi Adefabi',
    about:
      'Niyi is a high-performing digital products professional with 17 years of extensive experience covering IT ,Telecoms, Business Development, Digital Media ,Product Development and Mobile advertising. Niyi has developed and scaled up several digital businesses as well as numerous large scale telco Integrations across Africa.',
    gridArea: '2 / 3 / 3 / 4',
    id: 'member7',
  },
];

export const boardMembers = [
  {
    name: 'Agada Apochi',
    position: 'Chairman',
    image: chairman,
    id: 'member1',
    gridArea: '1 / 2 / 2 / 3',
    fullName: 'Agada Apochi',
    info: `is an Organizational Psychologist & Change Leadership Specialist and Practitioner-Scholar in diffusion of innovation and digital financial services. He has over 30 years of professional experience in banking and financial technology. Agada is currently the Managing Director & CEO of Nigeria's premier financial technology company, UP (Unified Payments), which is a group of companies with services including Banking, Payment Scheme, Financial Technology, Digital Commerce, Value Added Service, Payment Solutions, Software Solutions, etc. Agada is the Founder/Director of Hope PSBank. He is also the Founder/Director of the payment scheme and financial technology company, PayAttitude Global and the telecom VAS provider, UP Digital Limited. He is the Chairman of the Board of Directors of TM30, a software company. Agada attained Doctor of Business Administration (DBA) with specialization in diffusion of innovation and digital financial services from SBS Swiss Business School in Switzerland, Master Degree (MA) in Organizational Psychology with specialization in Change Leadership from Columbia University in New York, Master Degree in Law (LL.M.) from Rivers State University, Barrister at Law (BL) from the Nigerian Law School and Bachelor Degree in Law (LLB.B.) from the University of Jos. He is also is an Alumnus of Lagos Business School and Cornell University. He has attended different executive learning programs including programs at Harvard Business School, Insead Business School and Bank Card Business School in Cambridge. Agada holds several academic honours and awards including best graduating student. He was called to the Nigerian Bar in 1992 and has since worked and gained experience in company law & practice, banking and financial services, electronic transactions, retail business, administration, strategy, execution and change leadership.Agada is currently the President of Lagos Business School Alumni Association and a Life Member of the Governing Council of the association. Agada is an Organizational Psychologist, Innovator and Entrepreneur. He is a Fellow, Chartered Institute of Bankers of Nigeria, Fellow, International Academy of Cards & Payments, Fellow, Institute of Credit Administration, Certified International Cards & Payments Professional (CICPP), Certified Associate of Capability Maturity Model Institute, Chartered Mediator & Conciliator, Barrister & Solicitor. He has to his credit, different professional and technical papers. Agada is married with children.`,
  },
  {
    name: 'Afolabi Albert',
    position: 'MD/CEO',
    image: ceo,
    id: 'member2',
    gridArea: '2 / 1 / 3 / 2',
    fullName: 'Albert Afolabi',
    info: 'is a seasoned Business and  Product Manager with over 14years in IT and Telecoms (VAS), mobile advertising, Product /business strategy and product development. Albert has managed several deployment across 10 African countries.',
  },
  {
    name: 'Olubiyi Titilayo',
    position: 'Director',
    image: titi,
    id: 'member3',
    gridArea: '2 / 2 / 3 / 3',
    fullName: 'Olubiyi Titilayo',
    info: 'is the Director, Financial Institutions. She has over two decade hands on experience in Marketing, Sales, Channel management and General management. Titilayo was Group Head, Business Development in Market & Sales Directorate in UP, and the pioneering Group Head for PayAttitude, she also has an excellent track record working with UACN, MTN, Nokia West Africa with several performance awards and Samsung Electronics West Africa. She has an MBA in Marketing and BA Hons English from Obafemi Awolowo University. She is an Affiliate member of Chartered Institute of Marketing (UK) and a Member of Nigeria Institute of Marketing. She has attended several notable trainings within and outside the country including Cornell University, USA, IESE Business School, Barcelona, and Lagos Business School, Nigeria.',
  },
  {
    name: 'Ejembi Emmanuel',
    position: 'Director',
    image: ejembi,
    id: 'member4',
    gridArea: '2 / 3 / 3 / 4',
    fullName: 'Emmanuel Ejembi',
    info: 'is the Director/Group Chief Technology Officer. He was the Group Head of Information Technology and Operations for UP. He is a seasoned technology professional with deep implementation and technology management experience. A Certified Expert in IT Infrastructure Library (ITIL), and Expert Oracle Database Administrator with vast exposure to Information Technology (IT) infrastructure, Databases, Data Center Management, Electronic Payment Systems and Solutions and IT Services Management. Emmanuel joined the services of Unified Payments in 2005 and worked in several roles – as Systems Administrator, Database Administrator, Data Center Manager, Head of Department –Issuing, Group Head Information Technology and Operations. Prior to joining the services of Unified Payments, Emmanuel worked with First Foundation Medical Engineering, and Bentel Networks Ltd as an Engineer. He holds a B.Eng. degree in Electrical/Electronic Engineering from the Federal University of Agriculture, Makurdi - Benue State, Master of Business Administration (MBA) from Obafemi Awolowo University, Ile-Ife and M.Sc. in Information Systems Management from Roehampton University, London. He is also an alumnus of Cornel University, USA and the famous Lagos Business School. Emmanuel is member of the Nigeria Society of Engineers (NSE).',
  },
  {
    name: 'Dosumu Sunday',
    position: 'Director',
    image: dosumu,
    id: 'member5',
    gridArea: '3 / 1 / 4 / 2',
    fullName: 'Sunday Oladipupo Dosumu',
    info: 'joined UP in February 2020 as the Group Head, Finance and Accounts, where he is responsible for finance and account functions - Revenue and Receivables processes, Financial Analysis processes, Expenditure and Payables processes and Accounts Reconciliation processes. He is also responsible for the overall preparation of Management Accounts and Financial Reports. Sunday started his career with Chartered Bank (which later merged with Stanbic IBTC Bank) in 1999 as the officer in charge of payroll and regulatory reporting in the Finance department. He subsequently joined Capital Bank International in 2003 where he handled fixed assets management and regulatory reporting in the Finance department. He is a graduate of Accounting from the University of Lagos and also obtained an MBA degree from the same institution. He is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN) and is also an Associate of the Chartered Institute of Stockbrokers (CIS). He is highly skilled in Financial Analysis, Financial Audit, Financial Reporting, Corporate Finance, Business Strategy and Budgeting.',
  },
  {
    name: 'Olaniyi Adefabi',
    position: 'Director',
    image: niyi,
    id: 'member7',
    gridArea: '3 / 3 / 4 / 4',
    fullName: 'Olaniyi Adefabi',
    info: 'Olaniyi Adefabi is a high-performing digital Products professional with 17 years of extensive experience covering IT, Telecoms, Business Development and  Mobile advertising. Olaniyi has developed and scaled up several digital businesses as well as numerous  large scale telco integrations across Africa.',
  },
  {
    name: 'Albert Saheed',
    position: 'Director',
    image: saheed,
    id: 'member6',
    gridArea: '3 / 2 / 4 / 3',
    fullName: 'Albert Saheed',
    info: 'is a  seasoned Technology consultant with over 14 years experience in building and managing Enterprise Software Solutions, Mobile  Application Services and Voice Based Solutions (IVR) across Africa. ',
  },
];

const About = () => {
  const [showUserModal, setShowUserModal] = useState(false);
  const [userId, setUserId] = useState('');

  return (
    <About.Wrapper>
      <div>
        <HeroSection
          bg="linear-gradient(178.13deg, #61D0FF 1.56%, rgba(240, 250, 255, 0) 100.8%)"
          h1Text="Who we are"
          pText="We are a software company with strong technical expertise in developing innovative solutions that drive digital transformation in the IT industry. Leveraging our experience, we deliver our solutions with flexibility, responsiveness, efficiency and unmatched performance which has made us one of the most sought after technology company."
          subText=""
          heroImg={BG}
        />
      </div>
      <p className="heading">We embrace the S.P.I.C.E values</p>
      <h1 className="sub-heading">Our Core Values</h1>
      <div className="core_values">
        {values.map((val, idx) => (
          <div className="container" key={idx}>
            <img src={val.image} alt="" />
            <h1>{val.header}</h1>
            <p>{val.text}</p>
          </div>
        ))}
      </div>
      <div className="mission">
        <img src={dottedBox} className="dottedBox" alt="" />
        <div className="text">
          <h1>Our Mission & Vision</h1>
          <p>
            Our Mission is to deliver innovative technology solutions that are
            essential to the way people and businesses work. Our Vision is to be
            a leading software company in Africa.
          </p>
        </div>
      </div>
      <div className="team">
        <img src={dottedBox2} alt="" className="dottedBox2" />

        <div className="header">
          <h1>Board Of Directors</h1>
        </div>

        <div className="memberWrapper">
          {boardMembers.map((member) => {
            return (
              <div
                key={member.id}
                className="member"
                style={{ gridArea: `${member.gridArea}` }}
              >
                <img src={member.image} alt="" className="memberPic" />
                <div className="name">
                  <div className="blip"></div>
                  <p>{member.name}</p>
                </div>
                <p className="position">{member.position}</p>
                <button
                  onClick={() => {
                    setUserId(member.id);
                    setShowUserModal(true);
                  }}
                >
                  View Profile <img src={arrow} alt="" />
                </button>
              </div>
            );
          })}
        </div>
        <img src={Elipse1} alt="" className="ellipse1" />
      </div>
      <div className="team">
        <div className="header">
          <h1 style={{ margin: '70px 0' }}>The Management Team</h1>
        </div>

        <div className="teamWrapper">
          {staffs.map((member, idx) => {
            return (
              <div
                key={member.id}
                className="member"
                style={{ gridArea: `${member.gridArea}` }}
              >
                <img src={member.image} alt="" className="memberPic" />
                <div className="name">
                  <div className="blip"></div>
                  <p>{member.name}</p>
                </div>
                <p className="position">{member.title}</p>
                <button
                  onClick={() => {
                    setUserId(member.id);
                    setShowUserModal(true);
                  }}
                >
                  View Profile <img src={arrow} alt="" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      {showUserModal && (
        <div className="formodal">
          <Modal userId={userId} setShow={setShowUserModal} />
        </div>
      )}
    </About.Wrapper>
  );
};

export default About;

About.Wrapper = styled.div`
  .heading {
    margin-top: 10rem;
    font-weight: bold;
    font-size: 14px;
    line-height: 28px;
    color: rgba(0, 13, 54, 0.45);
    padding: 0 8rem;
  }

  .sub-heading {
    margin-bottom: 3rem;
    font-size: 40px;
    line-height: 49px;
    padding: 0 8rem;
    color: #000d36;
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
  .mission {
    margin: 10rem 0;
    position: relative;
    img {
      position: absolute;
      top: -15%;
    }
    .text {
      width: 40%;
      margin: 2rem auto;
      & > * {
        text-align: center;
        margin: 2rem auto;
      }
      p {
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.45);
      }
      h1 {
        font-size: 40px;
        line-height: 49px;
        color: #000d36;
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
      width: 14%;
      top: 28%;
    }
    .header {
      h1 {
        font-weight: 800;
        text-align: center;
        font-size: 40px;
        line-height: 49px;
        color: #000d36;
        margin: 2rem 0;
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
    .memberWrapper {
      width: 85%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 30px;
      justify-content: center;
      margin: 0 auto;
      align-items: center;

      .member {
        text-align: center;

        .memberPic {
          width: 140px;
          margin-bottom: 1%;
        }

        .name {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          .blip {
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background-color: #61d0ff;
            margin-bottom: 6px;
          }
          p {
            font-weight: 600;
            font-size: 25px;
            margin-bottom: 2%;
          }
        }
        .position {
          margin-bottom: 2%;
          font-size: 17px;
          font-family: 'Karla', sans-serif;
          font-weight: 400;
        }
        button {
          border: none;
          outline: none;
          cursor: pointer;
          background: transparent;
          font-weight: 500;
        }
      }
    }
    .teamWrapper {
      width: 80%;
      display: grid;
      grid-template-columns: repeat(3, 1fr) repeat(2, 0);
      grid-template-rows: repeat(2, 1fr) repeat(3, 0);
      grid-column-gap: 30px;
      grid-row-gap: 30px;
      justify-content: center;
      margin: 0 auto;
      align-items: center;

      .member {
        text-align: center;

        .memberPic {
          width: 180px;
          margin-bottom: 1%;
        }

        .name {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-content: center;
          .blip {
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background-color: #61d0ff;
            margin-bottom: 6px;
          }
          p {
            font-weight: 600;
            font-size: 25px;
            margin-bottom: 2%;
          }
        }
        .position {
          margin-bottom: 2%;
          font-size: 17px;
          font-family: 'Karla', sans-serif;
          font-weight: 400;
        }
        button {
          border: none;
          outline: none;
          cursor: pointer;
          background: transparent;
          font-weight: 500;
        }
      }
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
    .core_values {
      flex-direction: column;
      margin: 0 2rem 16rem;
      & > * {
        width: 100%;
        &.container p {
          width: 100%;
        }
      }
    }
    .mission {
      margin: 3rem auto;
      img {
        top: -60%;
      }
      .text {
        width: 100%;
        h1 {
          font-size: 20px;
        }
      }
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

  @media screen and (max-width: 40em) {
    .team {
      .memberWrapper {
        display: block;

        .member {
          margin-bottom: 30px;
        }
      }
      .teamWrapper {
        display: block;

        .member {
          margin-bottom: 30px;
        }
      }
    }
  }
`;
