import React, { useState } from 'react'
import styled from 'styled-components';
import { BsCodeSlash } from "react-icons/bs";


export const Navbar = () => {
    const [bar, setBar] = useState(false);

  return (
    
        <DIV bar={bar} id="nav-menu" >
    <Logo>
            <span ><BsCodeSlash/></span>
            <h1>Portfolio</h1>
        </Logo>
       <br />

        <Nav bar={bar} id="nav-menu">
            <span><a class="nav-link home" href="/Home">Home</a></span>
            <span><a class="nav-link about"  href="/About">About Me</a></span>
            <span><a class="nav-link skills" href="/Skills">Skills</a></span>
            <span><a class="nav-link projects" href="/Projects">Projects</a></span>
            <span><a  class="nav-link contact" href="/Contact">Contact</a></span>
            <span><button class="nav-link resume" >Resume</button></span>
        </Nav>
        <div
        onClick={() => setBar(!bar)}
        className="bars">
            <div className="bar"></div>
        </div>
    </DIV>

  
  )
}

const DIV=styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* max-width: 1280px; */
    width: 100%;
    margin:  auto;
    padding: 1rem 0;
    border-bottom:2px solid blue;
    animation: header 500ms ease-in-out;
    position:fixed;
     z-index: 2;
     top:fixed;
     background: linear-gradient(145deg, #e2e8ec, #ffffff);
     box-shadow: 4px 4px 8px #cbcbcb, -4px -4px 8px #ffffff;
     color: blue;
     height: 30px;
     /* position: sticky; */
   
  
    @media(max-width: 840px){
        width: 100%;
    }
    .bars{
        display: none;
        color: blue;
        
    }
    @media(max-width:640px){
        .bars{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;
            .bar{
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "blue"};
                transition: all 400ms ease-in-out;
                :before, :after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: blue;
                    position: absolute;
                }

                :before{
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                :after{
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
    
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        font-size: 1.8rem;
    }

    h1{
        font-weight: 600;
        font-size: 1.5rem;
    }
`
const Nav = styled.div`
    @media(max-width:640px){
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: #4a80b3;
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${props => props.bar ? "100vh" : 0};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
    span{
        margin-left: 1rem;
        a{
            color:blue;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            :before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before{
                transform: scale(1);
                transform-origin: left;
            }
            :hover{
                opacity: 1.7;
                filter: drop-shadow(0px 15px 15px #4a80b3);
            }
        }
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
`