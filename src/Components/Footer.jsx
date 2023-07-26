import { HStack, Heading, Image, Stack, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";

const Footer = () => {
    const [isLargerThan910] = useMediaQuery("(min-width: 910px)");
  const [direction, setDirection] = useState("row");
  const [gap, setGap] = useState('4.5rem') 

  useEffect(() => {
    if (isLargerThan910) {
      setDirection("row");
      setGap('7rem')
    } else {
        setDirection("column");
        setGap('2rem')
    }
  }, [isLargerThan910]);



  return (
    <>
      <footer>
        <Stack direction={direction} gap={gap} justifyContent={'center'} className="footerr">
            <VStack >
                <Image boxSize={150} src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg" />
                <HStack>
                <AiFillFacebook fontSize={'33px'} />
                <AiFillInstagram fontSize={'33px'}/>
                <AiFillTwitterSquare fontSize={'33px'}/>
                </HStack>
            </VStack>
            <VStack alignItems={'start'}>
                <Heading>TOPRACER RANGE</Heading>
                <Heading>GOLF LESSONS</Heading>
                <Heading>ADVENTURE GOLF</Heading>
            </VStack>
            <VStack alignItems={'start'}>
                <Heading>CAFE</Heading>
                <Heading>EVENTS</Heading>
                <Heading>CONTTACT US</Heading>
            </VStack>
            <VStack alignItems={'start'}>
                <Text>A20, Sidcup Bypass</Text>
                <Text>Chislehurst</Text>
                <Text>Kent</Text>
                <Text>BR7 6RP</Text>
                <Text>Tel: 0208 309 0181</Text>
                <Heading>GET DIRECTIONS</Heading>
            </VStack>
        </Stack>
      </footer>
    </>
  );
};

export default Footer;
