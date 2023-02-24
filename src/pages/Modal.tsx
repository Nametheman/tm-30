import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import closeBtn from 'assets/icons/plus.png';
import dosumu from 'assets/images/dosumu.png';
import { boardMembers } from './About';

// interface props{
//   userId: string
// }

const Modal = ({ userId, setShow }: { userId: string; setShow: any }) => {
  const member = boardMembers.find((user) => user.id === userId);
  console.log(member);
  return ReactDOM.createPortal(
    <Container>
      <Content>
        <img
          src={closeBtn}
          alt=""
          className="closeBtn"
          onClick={() => {
            setShow(false);
          }}
        />

        <div className="userDetails">
          <div className="userAvi">
            <img src={member?.image} alt="" className="userImage" />
            <p className="name">{member?.name}</p>
            <p className="position">{member?.position}</p>
          </div>
          <div className="userInfoWrapper">
            <p>
              <span>{member?.fullName}</span> {member?.info}
            </p>
          </div>
        </div>
      </Content>
    </Container>,
    document.getElementById('modal') as HTMLElement
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
`;

const Content = styled.div`
  position: absolute;
  z-index: 1100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 60px 40px;
  width: 55%;
  height: 70%;
  border-radius: 10px;
  animation: slideDown 0.3s ease-in forwards;

  @keyframes slideDown {
    0% {
      top: 0;
    }

    100% {
      top: 50%;
    }
  }

  .closeBtn {
    position: absolute;
    width: 25px;
    top: 8%;
    right: 6%;
    cursor: pointer;
  }

  .userDetails {
    display: flex;
    height: 100%;
    /* width: 80%; */
    gap: 25px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    padding: 0 40px;

    .userAvi {
      text-align: center;
      .userImage {
        height: 200px;
      }
      .name {
        font-weight: 700 !important;
        font-size: 23px;
      }
      .position {
        font-family: 'Karla', sans-serif;
        font-size: 16px;
        font-weight: 500;
      }
    }

    .userInfoWrapper {
      max-height: 70%;
      overflow-y: scroll;

      p {
        font-family: 'Karla', sans-serif;
        font-weight: 400;
        letter-spacing: 1.4px;
        line-height: 1.9;
        padding: 0 20px;
        font-size: 18px;

        span {
          font-weight: 700;
        }
      }
    }
  }
`;
