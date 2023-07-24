import { HStack, Stack, Image, Text, Heading} from "@chakra-ui/react";
import React from "react";

const About = () => {

    const leftImage = "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1"
    const rightImage = "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1"

  const scrollAnimation = {
    x: ["-100%", "100%"],
    yoyo: Infinity,
    duration: 10,
    ease: "linear",
  };

  return (
    <>
      <div className="about-container">
        <HStack className="scrolling-text">
          <span>TOPTRACER RACER</span>
          <span>Golf ADVENTURES</span>
          <span>Golf LESSONS</span>
          <span>COFFE SHOP</span>
          <span>LEAGUES</span>
        </HStack>
        <HStack justifyContent={'space-evenly'}  marginTop={80} p={20}>
            <Image boxSize={300} src={leftImage} borderRadius={'4%'}/>
            {/* <Heading>ABOUT US</Heading> */}
            <Text color={"white"} width={"50%"} textAlign={'center'}>Home to a 46-bay, multi-tier, floodlit driving range, powered by Toptracer Range technology. Complimented by a practice green and bunker, coffee shop and American Golf Store. There truly is something for everyone as we also boast two outdoor 18-hole dinosaur themed crazy golf courses. </Text>
            <Image boxSize={300} src={rightImage} borderRadius={'4%'}/>
        </HStack>
      </div>
    </>
  );
};

export default About;
