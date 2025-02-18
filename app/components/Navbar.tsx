import { useState } from "react";
import { NavLink } from "react-router";
import { styled } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars,FaLinkedin,FaYoutube } from "react-icons/fa";
import logo from '../assets/CY-MATHS-IN-Logo.jpeg';
import graph from '../assets/CY-MATHS-IN-Graph.jpg';


const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: rgb(255, 255, 255);
  border-bottom: 2px solid black;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5vw;
  z-index: 100;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.40), 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
`;

const StyledLogo = styled.img`
  height: 100%;
`;

const NavLinkImg = styled(NavLink)`
  display: flex;
  gap: 5px;
  align-items: center;
  text-decoration: none;
  padding: 0;
  height: 70%;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  height: 100%;
  @media screen and ((orientation: portrait) or (max-width: 900px)) {
    display: none;
  }
`;

const ThreeBars = styled(FaBars)`
  display: none;
  color: #808080;
  transition: 150ms;
  @media screen and ((orientation: portrait) or (max-width: 900px)) {
    display: block;
    font-size: 7vh;
    cursor: pointer;
  }
  &:hover {
    color: #2A74B5;
  }
`;

const NavLinkTxt = styled(NavLink)`
  color:rgb(155, 155, 155);
  font-size: 4vh;
  font-weight: 600;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 4vh;
  height: 100%;
  cursor: pointer;
  transition: 150ms;
  &.active {
    color: black;
    box-sizing: border-box;
    border-bottom: 1.5vh solid black;
  }
  &:hover {
    color: #2A74B5;
    box-sizing: border-box;
    border-bottom: 1.5vh solid #2A74B5;
  }
`;

const SidebarNav = styled.nav<{ $isActive: boolean }>`
  background: white;
  border-left: 2px solid black;
  width: 45vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isActive ? "0" : "-100%")};
  transition: 500ms;
  z-index: 200;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const SidebarClose = styled.div`
  padding: 0 1.5vw;
  height: 12vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const CloseIconWrapper = styled.div`
  background: #2A74B5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 7vh;
  height: 7vh;
  transition: 150ms;
  &:hover {
    background:rgb(240, 47, 47);
  }
`;

const CloseIcon = styled(AiOutlineClose)`
  font-size: 4vh;
  color: white;
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  color: rgb(155, 155, 155);
  justify-content: flex-start;
  align-items: center;
  padding: 2vh 4vw;
  list-style: none;
  height: 4vh;
  text-decoration: none;
  font-size: 3vh;
  font-weight: 600;
  transition: 150ms;
  &.active {
    color: black;
    border-left: 1.5vh solid black;
    cursor: pointer;
  }
  &:hover {
    color: #2A74B5;
    border-left: 1.5vh solid #2A74B5;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin: 0;
  white-space: nowrap;
`;

const SidebarLogo = styled.div`
  margin-top: 2vh;
  margin-left: 4vw;
  padding-top: 4vh;
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 8vh;
`;

const SidebarFooter = styled.div`
  margin-top: 2vh;
  margin-left: 4vw;
  margin-right: 4vw;
  display: flex;
  align-items: center;
  font-size: 1.5vh;
  white-space: nowrap;
`;

const SidebarSocialMedia = styled.div`
  margin-top: 4vh;
  margin-left: 4vw;
  margin-right: 4vw;
  display: flex;
  align-items: center;
  gap: 3vh;
  font-size: 5vh;
`;

const SidebarUrlLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
`;


export default function Navbar() {
  const [sidebar,setSitebar] = useState(false);

  return (
    <>
      <Nav>
        
        <NavLinkImg to="/" onClick={() => {setSitebar(false)}} >
          <StyledLogo src={graph} alt="graph" />
          <StyledLogo src={logo} alt="logo" />
        </NavLinkImg>

        <NavMenu>
          <NavLinkTxt to="/about" >
            About Us
          </NavLinkTxt>
          <NavLinkTxt to="/news" >
            News
          </NavLinkTxt>
          <NavLinkTxt to="/events" >
            Events
          </NavLinkTxt>
          <NavLinkTxt to="/contact" >
            Contact Us
          </NavLinkTxt>
        </NavMenu>

        <ThreeBars onClick={() => {setSitebar(prev => !prev)}} />

        
        <SidebarNav $isActive={sidebar} >
          <SidebarWrap>

            <SidebarClose>
              <CloseIconWrapper onClick={() => {setSitebar(prev => !prev)}}>
                <CloseIcon />
              </CloseIconWrapper>
            </SidebarClose>

            <SidebarLink to="/about" onClick={() => {setSitebar(prev => !prev)}} >
              <SidebarLabel>
                About Us
              </SidebarLabel>
            </SidebarLink>

            <SidebarLink to="/news" onClick={() => {setSitebar(prev => !prev)}} >
              <SidebarLabel>
                News
              </SidebarLabel>
            </SidebarLink>

            <SidebarLink to="/events" onClick={() => {setSitebar(prev => !prev)}} >
              <SidebarLabel>
                Events
              </SidebarLabel>
            </SidebarLink>

            <SidebarLink to="/contact" onClick={() => {setSitebar(prev => !prev)}} >
              <SidebarLabel>
                Contact Us
              </SidebarLabel>
            </SidebarLink>

            <SidebarLogo>
              <StyledLogo src={logo} alt="logo" />
            </SidebarLogo>

            <SidebarFooter>
              Cypriot Service Network of<br /> Mathematical Sciences in<br /> Industry and Innovation <br /><br />
              © CY-MATHS-IN <br /> All Rights Reserved
            </SidebarFooter>

            <SidebarSocialMedia>
              <SidebarUrlLink href="https://cy.linkedin.com/company/cymathsin" target="_blank" rel="noreferrer"> 
                <FaLinkedin color="#0a66c2" /> 
              </SidebarUrlLink>
              <SidebarUrlLink href="https://www.youtube.com/" target="_blank" rel="noreferrer"> 
                <FaYoutube color="#FF0000" /> 
              </SidebarUrlLink>
            </SidebarSocialMedia>

          </SidebarWrap>
        </SidebarNav>

      </Nav>
    </>
  );
};