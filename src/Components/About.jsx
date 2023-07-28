import {
  Box,
  Heading,
  VStack,
  useMediaQuery,
  HStack,
  Image,
  Text,
  Stack,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

const About = () => {
  const [isLargerThan1018] = useMediaQuery("(min-width: 1018px)");
  const [visibility, setVisibility] = useState("none");
  const [padding, setPadding] = useState("100px");
  let disp;
  let direction;
  let cardWidth;

  const controls = useAnimation();
  const handleScroll = () => {
    // Calculate the current scroll position
    const scrollY = window.scrollY;

    // Adjusting the opacity based on the scroll position
    const opacity = Math.min(scrollY / 800);
    const backgroundColor = `rgba(0, 0, 0, ${opacity})`;

    // Updating the opacity using Framer Motion's animation controls
    controls.start({ opacity, backgroundColor });
  };

  useEffect(() => {
    if (isLargerThan1018) {
      setVisibility("block");
      setPadding("100px");
    } else {
      setVisibility("none");
      setPadding("");
    }

    // Adding scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Removes the scroll event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
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
      <motion.div animate={controls}>
        <Box className="about-container">
          <HStack className="scrolling-text">
            <span>TOPTRACER RACER</span>
            <span>Golf ADVENTURES</span>
            <span>Golf LESSONS</span>
            <span>COFFE SHOP</span>
            <span>LEAGUES</span>
          </HStack>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: -50 }}
          >
            <HStack marginTop={80} justifyContent={"center"} p={padding}>
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
                  Home to a 46-bay, multi-tier, floodlit driving range, powered
                  by Toptracer Range technology. Complimented by a practice
                  green and bunker, coffee shop and American Golf Store. There
                  truly is something for everyone as we also boast two outdoor
                  18-hole dinosaur themed crazy golf courses.
                </Text>
              </VStack>
              <Image boxSize={"70%"} src={rightImage} borderRadius={"4%"} />
            </HStack>
          </motion.div>
          {visibility === "none" ? (disp = "block") : (disp = "none")}
          <VStack display={disp} paddingBottom={80}>
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
              something for everyone as we also boast two outdoor 18-hole
              dinosaur themed crazy golf courses.
            </Text>
          </VStack>
          {isLargerThan1018 ? (direction = "row") : (direction = "column")}
          {isLargerThan1018 ? (cardWidth = "26%") : (cardWidth = "100%")}
          <Stack
            direction={direction}
            justifyContent="center"
            gap="4%"
            className="cards"
          >
            <Cards
              cardWidth={cardWidth}
              text={"Topracer Range"}
              image={
                "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-toptracer.jpg?strip=all&lossy=1&sharp=1&fit=1024%2C682&ssl=1"
              }
            />
            <Cards
              text={"Adventure golf"}
              cardWidth={cardWidth}
              image={
                "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-4.jpg?strip=all&lossy=1&sharp=1&fit=1024%2C1024&ssl=1"
              }
            />
            <Cards
              text={"Golf lessons"}
              cardWidth={cardWidth}
              image={
                "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-lessons.jpg?strip=all&lossy=1&sharp=1&fit=1024%2C682&ssl=1"
              }
            />
          </Stack>
        </Box>
      </motion.div>
    </>
  );
};

const Cards = ({ image, cardWidth, text }) => {
  return (
    <>
      <Box
        marginTop="4rem"
        position="relative"
        height="40vh"
        bgSize="cover"
        width={cardWidth}
        textAlign="center"
        className="card-box"
        overflow={"hidden"}
        borderRadius={"10px"}
        sx={{
          "&::before": {
            content: `""`,
            borderRadius: "10px",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            zIndex: 10,
            filter: "brightness(80%)",
            transition: "transform 0.2s ease",
          },
          "&:hover::before": {
            transform: "scale(1.2)",
          },
        }}
      >
        <Heading
          pos={"absolute"}
          zIndex={10}
          textTransform="uppercase"
          bottom={0}
          backgroundColor="transparent"
          color="white"
          padding="10px"
        >
          {text}
        </Heading>
      </Box>
    </>
  );
};

export default About;
