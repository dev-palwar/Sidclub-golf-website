import {
  Box,
  Heading,
  VStack,
  useMediaQuery,
  HStack,
  Image,
  Text,
  Stack,
  color,
} from "@chakra-ui/react";
import { transform } from "framer-motion";
import React, { useEffect, useState } from "react";

const About = () => {
  const [isLargerThan1018] = useMediaQuery("(min-width: 1018px)");
  const [visibility, setVisibility] = useState("none");
  let disp;
  let direction;
  let cardWidth;

  useEffect(() => {
    if (isLargerThan1018) {
      setVisibility("block");
    } else {
      setVisibility("none");
    }
  }, [isLargerThan1018]);

  const leftImage =
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1";
  const rightImage =
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1";

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
        <HStack marginTop={80} justifyContent={"center"}>
          <Image boxSize={"70%"} src={leftImage} borderRadius={"4%"} />
          <VStack display={visibility}>
            <Heading
              textAlign={"center"}
              color={"white"}
              fontSize={"54px"}
              marginBottom={20}
            >
              ABOUT US
            </Heading>
            <Text
              color={"white"}
              fontSize={"20px"}
              textAlign={"center"}
              margin={"0px 20px 0px 40px"}
            >
              Home to a 46-bay, multi-tier, floodlit driving range, powered by
              Toptracer Range technology. Complimented by a practice green and
              bunker, coffee shop and American Golf Store. There truly is
              something for everyone as we also boast two outdoor 18-hole
              dinosaur themed crazy golf courses.
            </Text>
          </VStack>
          <Image boxSize={"70%"} src={rightImage} borderRadius={"4%"} />
        </HStack>
        {visibility === "none" ? (disp = "block") : (disp = "none")}
        <VStack display={disp}>
          <Heading
            textAlign={"center"}
            color={"white"}
            fontSize={"54px"}
            marginBottom={20}
          >
            ABOUT US
          </Heading>
          <Text color={"white"} fontSize={"20px"} textAlign={"center"}>
            Home to a 46-bay, multi-tier, floodlit driving range, powered by
            Toptracer Range technology. Complimented by a practice green and
            bunker, coffee shop and American Golf Store. There truly is
            something for everyone as we also boast two outdoor 18-hole dinosaur
            themed crazy golf courses.
          </Text>
        </VStack>
        {isLargerThan1018 ? (direction = "row") : (direction = "column")}
        {isLargerThan1018 ? (cardWidth = "26%") : (cardWidth = "100%")}
        <Stack
          direction={direction}
          justifyContent="center"
          gap="4%"
          className="cards"
          marginBottom={'3%'}
        >
          <Cards
            cardWidth={cardWidth}
            image={
              "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-toptracer.jpg?strip=all&lossy=1&sharp=1&fit=1024%2C682&ssl=1"
            }
          />
          <Cards
            cardWidth={cardWidth}
            image={
              "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-4.jpg?strip=all&lossy=1&sharp=1&fit=1024%2C1024&ssl=1"
            }
          />
          <Cards
            cardWidth={cardWidth}
            image={
              "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-lessons.jpg?strip=all&lossy=1&sharp=1&fit=1024%2C682&ssl=1"
            }
          />
        </Stack>
      </div>
    </>
  );
};

const Cards = ({ image, cardWidth }) => {
  return (
    <>
      <Box
        marginTop="4rem"
        position="relative"
        borderRadius={15}
        height="40vh"
        bgSize="cover"
        width={cardWidth}
        textAlign="center"
        className="card-box"
        sx={{
          "&::before": {
            borderRadius: "5%",
            content: `""`,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundImage: `url(${image})`,
            zIndex: 1,
            filter: "brightness(80%)",
          },
        }}
      >
        <Heading
          zIndex={1}
          textTransform="uppercase"
          position="absolute"
          bottom={0}
          backgroundColor="transparent"
          color="white"
          padding="10px"
        >
          Toptracer Racer
        </Heading>
      </Box>
    </>
  );
};

export default About;
