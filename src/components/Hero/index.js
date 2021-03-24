import React, { useState } from "react";
import Image from "../../images/imagebg1.jpg";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ImageBg,
} from "./HeroElements";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageBg  src={Image} alt="image" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Put Your Favorites Here</HeroH1>
        <HeroP>
          Create lists of either your favorite movies or actors with ease
        </HeroP>
        <HeroBtnWrapper>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;