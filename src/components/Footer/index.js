import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  SocialIconLink,
  SocialIcons,
  WebsiteRight,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialLogo onClick={toggleHome}>
          <span style={{ color: "#1dc0e2" }}>f</span>ave
        </SocialLogo>
        <WebsiteRight>
          fave © {new Date().getFullYear()}. All rights reserved.
        </WebsiteRight>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
