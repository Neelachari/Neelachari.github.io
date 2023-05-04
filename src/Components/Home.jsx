import React from 'react'
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

export const Home = () => {
  return (
    < >
      <Container id="home" >
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">My Name is</span>
          </h4>
          <h1 className="green">Neelachari N H</h1>
          <h2>
            and <span className="green">I am </span>
          </h2>
          <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Secular+One&size=30&pause=1000&color=429CFFEE&width=435&lines=Full+Stack+Web+Developer" alt="Typing SVG" /></a>
          <div><button>Resume</button></div>
          {/* <p className="Profile">
          A collaborative, team player who is proficient in working with interdisciplinary teams and
          executing goal-oriented projects. With over 1200+ hours of practical coding experience
          in HTML, CSS, Javascript, and React.js. Strongly interested in obtaining a Software
          Developer position to work on enhancing the product experience.
          </p> */}
          
          {/* <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social> */}
        </Texts>
      </Slide>
      <Slide direction="right">
        {/* <Profile>
          <img className="pic"
            src="https://avatars.githubusercontent.com/u/112808279?v=4"
            alt="profile"
          />
        </Profile> */}
      </Slide>
      
    </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
    margin-top:100px
  }
  h1 {
    font-size: 4rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.5rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
   
  }
  .Profile{
    
    
  }

  button {
    padding: 0.7rem 2rem;
    /* margin-top: 3rem; */
    cursor: pointer;
    background-color: #4a80b3;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #9ba1d451);
    :hover {
      filter: drop-shadow(0px 10px 10px #4a80b3);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #4a80b3;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #4a80b3);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }
  img{
    border-radius: 50%;
  }

  :hover img {
    transform: translateY(-10px);
  }
`;