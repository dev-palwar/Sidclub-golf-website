import React from "react";
import ImageArr from "../Assests/Images";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Rest = () => {
  const [isLargerThan910] = useMediaQuery("(min-width: 910px)");
  const [direction, setDirection] = useState("row");
  const [headingSize, setHeadingSize] = useState("4rem");
  const [textWidth, setTextWidth] = useState("");
  // const [footerCardsHeadingSize, ]
  const [src, setSrc] = useState(
    "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu.jpg?strip=all&lossy=1&sharp=1&fit=682%2C1024&ssl=1"
  );

  const handler = () => {
    setSrc(
      "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu.jpg?strip=all&lossy=1&sharp=1&fit=682%2C1024&ssl=1"
    );
  };
  const handler2 = () => {
    setSrc(
      "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&lossy=1&sharp=1&fit=1002%2C1024&ssl=1"
    );
  };
  const handler3 = () => {
    setSrc(
      "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1.jpg?strip=all&lossy=1&sharp=1&fit=682%2C1024&ssl=1"
    );
  };

  useEffect(() => {
    if (isLargerThan910) {
      setDirection("row");
      setHeadingSize("4rem");
      setTextWidth("80%");
    } else {
      setDirection("column");
      setHeadingSize("2.7rem");
      setTextWidth("");
    }
  }, [isLargerThan910]);

  return (
    <>
      <Stack
        p={"7% 30px 0 10%"}
        direction={direction}
        backgroundColor={"black"}
        color={"white"}
        gap={"5%"}
        alignItems={"center"}
      >
        <VStack>
          <div className="rest-image">
            <Image
              objectFit={"cover"}
              position={"relative"}
              borderRadius={15}
              width={"100%"}
              src={src}
            />
          </div>
          <HStack
            marginTop={"-10%"}
            marginBottom={"5%"}
            justifyContent={"center"}
          >
            <div className="circle" onClick={handler}></div>
            <div className="circle" onClick={handler2}></div>
            <div className="circle" onClick={handler3}></div>
          </HStack>
        </VStack>
        <VStack alignItems={"start"}>
          <Heading fontSize={headingSize}>Food and drink</Heading>
          <Text fontSize={"20px"} width={textWidth}>
            Whether youre getting ready to play, just finishing your practice
            session or feeling peckish on the range, we have a variety of food
            and drink options bought directly to your table or bay. We make sure
            that we cater for everyone, offering a range of vegan and gluten
            free options.
          </Text>
        </VStack>
      </Stack>

      <Box backgroundColor={"black"} overflow={"hidden"}>
        <Box
          backgroundColor={"black"}
          height={"40vh"}
          transform={"rotate(-4deg)"}
          position={"relative"}
          overflow={"auto"}
          marginTop={"6%"}
          marginBottom={"10%"}
        >
          <HStack justifyContent={"center"} pos={"absolute"} height={"100%"}>
            {ImageArr.map((value) => {
              return <Cards image={value} />;
            })}
          </HStack>
        </Box>
      </Box>

      <Box
        overflow={"hidden"}
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        backgroundColor={"black"}
        alignItems={"center"}
        textTransform={"uppercase"}
        lineHeight={2}
        letterSpacing={"1px"}
        paddingBottom={100}
      >
        <Box
          width={"60%"}
          className="testimonial"
          position={"relative"}
          textAlign={"center"}
        >
          <Text color={"white"} id="testimonialText" fontWeight={"700"}>
            Excellent couple of hours, relax and enjoy in the fun. Staff were
            accommodating, friendly and very helpful. Café on site for
            refreshments etc. Will keep children enterntained during the
            holidays. Worth a visit if you haven’t been.
          </Text>
        </Box>
      </Box>

      <Box backgroundColor={"black"} p={"0px 20px 0px 20px"}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <h1 id="call">WHAT ARE YOU WAITING FOR?</h1>
        </motion.div>
        <Stack
          textTransform={"uppercase"}
          className="footerCards"
          direction={direction}
          justifyContent={"space-evenly"}
          fontSize={headingSize}
          fontWeight={"700"}
          textAlign={"center"}
          paddingBottom={100}
        >
          <Box
            className="footerCard1"
            display={"flex"}
            alignItems={"end"}
            backgroundColor={"#9fcf20"}
            borderRadius={"7px"}
            height={"200px"}
            marginBottom={10}
            transition={
              "background-image 0.9s ease, background-size 0.3s ease, color 0.3s ease"
            }
          >
            Toptracer Range
          </Box>
          <Box
            className="footerCard2"
            display={"flex"}
            alignItems={"end"}
            backgroundColor={"#9fcf20"}
            borderRadius={"7px"}
            height={"200px"}
            marginBottom={10}
            transition={
              "background-image 0.9s ease, background-size 0.3s ease, color 0.3s ease"
            }
          >
            golf lessons
          </Box>
          <Box
            className="footerCard3"
            transition={
              "background-image 0.9s ease, background-size 0.3s ease, color 0.3s ease"
            }
            display={"flex"}
            alignItems={"end"}
            backgroundColor={"#9fcf20"}
            borderRadius={"7px"}
            height={"200px"}
            marginBottom={10}
          >
            adventure golf
          </Box>
        </Stack>
      </Box>
    </>
  );
};

function Cards({ image }) {
  return (
    <>
      <Box
        height={"30vh"}
        width={"30vh"}
        borderRadius={"4%"}
        backgroundImage={image}
        backgroundSize={"contain"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
      ></Box>
    </>
  );
}

export default Rest;
