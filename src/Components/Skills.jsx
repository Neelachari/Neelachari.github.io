import React from 'react';
import { Slide } from "react-awesome-reveal";
import styled from "styled-components";

export const Skills = () => {
  return (
    <div id="skills" >
       <Container id="service">
      <Slide direction="down">
        {/* <h2>
          My <span >services</span>
        </h2> */}
        <h1>My Skiils</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          {/* <Card
        
            Icon={ImHtmlFive2}
            title={"HTML"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          /> */}
           <img width='60%' src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"  />
        </Slide>
        <Slide direction="down">
          {/* <Card
            Icon={TbBrandCss3}
            title={"CSS"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          /> */}
          <img width='60%' src="https://mitacademys.com/wp-content/uploads/2022/07/logo-2582747_1920.png"  />
        </Slide>
        <Slide direction="right">
          {/* <Card
            Icon={IoLogoJavascript}
            title={"JavaScript"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          /> */}
          <img width='60%' src="https://images.squarespace-cdn.com/content/v1/5aeb78ff36099b2ee08bd6c1/1612966630419-0LK7ZFZ1AEBWDC15NW3P/javascript-736400_1280.png"  />
          
        </Slide>
        <Slide direction="up">
          {/* <Card
            Icon={SiReact}
            title={"React.js"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          /> */}
          <img width='60%' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"  />
        </Slide>
        <Slide direction="left">
          {/* <Card
            Icon={SiMongodb}
            title={"MongoDB"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          /> */}
          <img width='60%' src="https://imgs.search.brave.com/w5Cj0UqGKI-DA7F0Dnm2tVgYZ7o5bmlEUGwSboHAiqY/rs:fit:1014:1024:1/g:ce/aHR0cHM6Ly9sZXJh/YmxvZy5vcmcvd3At/Y29udGVudC91cGxv/YWRzLzIwMTkvMDcv/UkVEVVgtTE9HTy0x/MDE0eDEwMjQucG5n"  />
         
        </Slide>
        <Slide direction="down">
          {/* <Card
            Icon={IoLogoNodejs}
            title={"Node.js"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          /> */}
           
          <img width='60%' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"  />
        </Slide>
        <Slide direction="right">
          {/* <Card
            Icon={IoLogoNodejs}
            title={"Node.js"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          /> */}
           
          <img width='60%' src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png"  />
        </Slide>
        <Slide direction="up">
          {/* <Card
            Icon={SiMongodb}
            title={"MongoDB"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          /> */}
          <img width='60%' src="https://www.tutorialsteacher.com/Content/images/home/mongodb.svg"  />
         
        </Slide>
        <Slide direction="left">
          {/* <Card
        
            Icon={ImHtmlFive2}
            title={"HTML"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          /> */}
           <img width='60%' src="https://portfolio-saravanakumarjn.vercel.app/static/media/github-icon.04ed74f3.svg"  />
        </Slide>
        <Slide direction="down">
          {/* <Card
        
            Icon={ImHtmlFive2}
            title={"HTML"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          /> */}
           <img width='60%' src="https://yt3.ggpht.com/_q52i8bUAEvcb7JR4e-eNTv23y2A_wg5sCz0NC0GrGtcw1CRMWJSOPVHUDh_bngD0q4gMvVeoA=s900-c-k-c0x00ffffff-no-rj"  />
        </Slide>
        <Slide direction="right">
          {/* <Card
        
            Icon={ImHtmlFive2}
            title={"HTML"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          /> */}
           <img width='60%' src="https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-400x400.png"  />
        </Slide>
        <Slide direction="up">
          {/* <Card
        
            Icon={ImHtmlFive2}
            title={"HTML"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          /> */}
           <img width='60%' src="https://authy.com/wp-content/uploads/npm-logo.png"  />
        </Slide>
        <Slide direction="left">
          {/* <Card
        
            Icon={ImHtmlFive2}
            title={"HTML"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          /> */}
           <img width='60%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkoSiXALVlUCkVbUS3VIJPrHufnHETi73wEKiVhuEgdoCPlDaccJazHO8E1PDm7otxQmE&usqp=CAU"  />
        </Slide>
        <Slide direction="down">
          {/* <Card
        
            Icon={ImHtmlFive2}
            title={"HTML"}
            // disc={`Lorem ipsum dolor sit amet consectetur 
            //     adipisicing elit. Commodi et asperiores cum exercitationem officia rem amet minus magnam? Cum, voluptatem?`}
          /> */}
           <img width='60%' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSikSgq8bpeTLKEUj1VPyAndnxLX94nL9_Wrh4wfaL1Q3jM6mGtG_pgpzkTrr5MUoS1xCY&usqp=CAU"  />
        </Slide>
        
      </Cards>
    </Container>
    </div>
  )
}


const Container = styled.div`
  width: 90%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  /* grid-template-columns:repeat(4,1fr); */
  margin-top: 1rem;
  margin-bottom:1rem;
  gap: 1rem;
  
`;