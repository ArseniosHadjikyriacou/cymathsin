import { styled } from "styled-components";
import graph from '../assets/CY-MATHS-IN-Graph.jpg';
import { FaLinkedin,FaYoutube } from "react-icons/fa";

const StyledFooter = styled.footer`
  background: rgb(255, 255, 255);
  border-top: 1px solid black;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1vh 1.5vw;
  z-index: 100;
`;

const StyledImg = styled.img`
  height: 100%;
`;

const SocialMedia = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2vh;
  font-size: 4vh;
`;

const UrlLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
`;


export default function Footer() {

  return (
    <StyledFooter>
      <StyledImg src={graph} alt='graph' />
      <span style={{fontSize: '1.7vh',textAlign: 'center',whiteSpace: 'nowrap'}} >© CY-MATHS-IN <br/> All Rights Reserved</span>
      <SocialMedia>
        <UrlLink href="https://cy.linkedin.com/company/cymathsin" target="_blank" rel="noreferrer"> <FaLinkedin color="#0a66c2" /> </UrlLink>
        <UrlLink href="https://www.youtube.com/" target="_blank" rel="noreferrer"> <FaYoutube color="#FF0000" /> </UrlLink>
      </SocialMedia>
    </StyledFooter>
  );
};