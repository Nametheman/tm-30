import React from 'react';
import styled from '@emotion/styled';
import { CustomButton } from 'reusables/CustomButton';
import phone from 'assets/images/Vector (15).png';
import mail from 'assets/images/Group 58.png';
import location from 'assets/images/Group 60.png';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useEffect } from 'react';

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    user_email: '',
    message: ''
  });
  const [status, setStatus] = useState('');


  const sendEmail = (e:any) => {
    e.preventDefault();
  emailjs.send(
    "service_o3yrw1i",
    "template_rkktbq4",
    values,
    "OpsWMwoR_EF6bZWiK"
  )
  .then(response => {
    console.log('SUCCESS!', response);
    setValues({
      name: '',
      user_email: '',
      message: ''
    });
    setStatus('SUCCESS');
  }, error => { 
    console.log(error);
    
    alert('FAILED...');
  });
  }

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('Success');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e: any) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }
  
  return (
    <Contact.Wrapper>
        <div className="hero">
          <h1>Contact Us</h1>
          <p>
          Are you ready to start your next project, contact us below.
          </p>
        </div>
        {status && renderAlert()}
        <form onSubmit={sendEmail}>
          <div className="inputs">
            <label>
              <p className="label"> Name</p>
              <input type="text"
               name='name' 
               value={values.name}
               onChange={handleChange}
              placeholder="your name" />
            </label>

            <label>
              <p className="label"> Email </p>
              <input type="email"
               name='user_email'
               value={values.user_email}  
               onChange={handleChange} 
               placeholder="youremail@email.com" />
            </label>
          </div>
          <label htmlFor="">
            <p className="label"> Message</p>
            <textarea
              name="message"
              id=""
              value={values.message}
              onChange={handleChange} 
              placeholder="Describe your message for us and we???ll get in touch with you shortly."
            ></textarea>
          </label>
          <div className="button">
            <CustomButton>Submit</CustomButton>
          </div>
        </form>

      <div className="get-in-touch">
        <h1>Get in Touch</h1>
        <div className="devices">
          <div className="header">
            <img src={location} alt="address" />
            <h1>Location</h1>
            <p>22 Berkley Street, Lagos Island, Lagos</p>
          </div>

          <div className="header">
            <img src={phone} alt="phone" />
            <h1>Phone</h1>
            <p>+2348182504430</p>
          </div>

          <div className="header">
            <img src={mail} alt="mail" />
            <h1>Mail</h1>
            <p>assets@tm30.net</p>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5858174284754!2d3.403431414149767!3d6.447188725835955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b36ee3e009b%3A0x58217e054c01fd9c!2sTM30%20Global%20Limited!5e0!3m2!1sen!2sng!4v1608398133318!5m2!1sen!2sng"
          style={{ border: 0, width: '100%', height: '578px' }}
        ></iframe>
      </div>
    </Contact.Wrapper>
  );
};

const renderAlert = () => (
  <div className="sucess">
    <p>Your message submitted successfully</p>
  </div>
)
export default Contact;

Contact.Wrapper = styled.div`
.sucess{
  text-align: center;
  color: rgb(198, 17, 17);
  padding: 20px;
  font-size: 1.5rem;
}
  .bg {
    width: 100%;
    /* height: 484px; */
  }
  .hero {
    background: linear-gradient(180deg, #61D0FF 0%, rgba(240, 250, 255, 0) 151.33%);
    padding: 6rem;
    & > h1 {
      text-align: center;
      font-size: 40px;
      line-height: 49px;
      color: #000d36;
    }
    & > p {
      width: 37%;
      margin: 2rem auto;
      font-weight: bold;
      font-size: 14px;
      line-height: 28px;
      text-align: center;
      color: rgba(0, 13, 54, 0.45);
    }
  }
  form {
    width: 40%;
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .inputs {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      input {
        height: 54px;
      }
    }
    input,
    textarea {
      display: block;
      border: 2px solid rgba(0, 13, 54, 0.2);
      border-radius: 10px;
      padding: 1.2rem;
      &::placeholder {
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.2);
        font-family: Proxima Nova;
      }
      &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.2);
      }

      &::-ms-input-placeholder {
        /* Microsoft Edge */
        font-weight: bold;
        font-size: 14px;
        line-height: 28px;
        color: rgba(0, 13, 54, 0.2);
      }
      &:focus {
        outline: none;
        border: 2px solid #61d0ff;
      }
    }
    textarea {
      width: 100%;
      height: 141px;
    }
    .label {
      font-weight: bold;
      font-size: 14px;
      line-height: 28px;
      color: rgba(0, 13, 54, 0.65);
      margin-left: 1.2rem;
    }
  }
  .button {
    margin-top: 2rem;
    text-align: center;
  }
  .get-in-touch {
    margin: 5rem auto 8rem;
    & > h1 {
      text-align: center;
      font-size: 40px;
      line-height: 49px;
      color: #000d36;
      margin: 3rem auto;
    }
    .devices {
      display: flex;
      width: 50%;
      margin: 2rem auto;
      align-items: center;
      text-align: center;
      justify-content: space-around;
      & > * {
        h1 {
          margin: 1rem auto;
          font-size: 24px;
          line-height: 29px;
          color: #000d36;
          margin-top: 2rem;
        }
        p {
          font-weight: bold;
          font-size: 14px;
          line-height: 28px;
          color: rgba(0, 13, 54, 0.45);
        }
      }
    }
  }
  @media (max-width: 768px) {
    .hero {
      width: 100%;
      padding: 2rem;
      /* margin: 2rem auto; */
      & > p {
        width: 100%;
      }
    }
    form {
      position: static;
      margin-top: 2rem;
      width: 100%;
      padding: 2rem;
      .inputs {
        flex-direction: column;
        & > * {
          margin: 1rem 0;
        }
      }
      input {
        width: 100%;
      }
    }
    .get-in-touch {
      .devices {
        flex-direction: column;
        width: 100%;
        .header {
          margin: 2rem 0;
        }
      }
    }
  }
`;
