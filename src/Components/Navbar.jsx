import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  Stack,
  HStack,
  VStack,
  Image,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";

const Navbar = () => {
  const [isLargerThan748] = useMediaQuery("(min-width: 767px)");
  const [colorOpacity, setColorOpacity] = useState("0");

  const handler = () => {
    if (window.scrollY > 0) {
      setColorOpacity(window.scrollY / 200);
    } else {
      setColorOpacity(0);
    }
  };

  const cursorHandler = (event) => {
    const cursor = document.getElementById("cursor");
    const blurredCursor = document.getElementById("blurredCursor");
    const cursorSize = 2; // The size of the cursor element
    const lagFactor = 50; // Adjust this value to control the lag amount

    // Getting the coordinates of the real cursor
    const x = event.clientX;
    const y = event.clientY;

    // Setting the position of the cursor element
    cursor.style.left = x - cursorSize / 2 + "px";
    cursor.style.top = y - cursorSize / 2 + "px";

    // Apply the blur effect to the blurredCursor element with a slight lag
    blurredCursor.style.left =
      x - cursorSize / 2 - lagFactor * cursorSize + "px";
    blurredCursor.style.top =
      y - cursorSize / 2 - lagFactor * cursorSize + "px";
  };

  useEffect(() => {
    document.addEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      cursorHandler(event);
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleaning up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <nav>
        <Stack
          p={"0 0 0 40px"}
          direction={"row"}
          bgColor={`rgb(0,0,0, ${colorOpacity})`}
        >
          <Image
            id="logo"
            boxSize={100}
            marginRight={20}
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
          />
          {isLargerThan748 ? (
            <HStack p={"11px 0px 0px 45px"}>
              <h3>Top racer</h3>
              <h3>Golf lessons</h3>
              <h3>Adventure Golf</h3>
              <h3>Cafe</h3>
              <h3>Events</h3>
            </HStack>
          ) : null}
          <AiOutlineMenu color="white" size={30} display={"none"} id="menu" />
        </Stack>
        <Box
          transition={"all 0.2s"}
          position="absolute"
          id="cursor"
          borderRadius={"50%"}
          height={20}
          backgroundColor={"yellow"}
          width={20}
        ></Box>
        <Box
          id="blurredCursor"
          transition={"all 0.2s"}
          position="absolute"
          borderRadius={"50%"}
          height={"220px"}
          backgroundColor={"yellow"}
          width={"220px"}
          filter={"blur(100px)"}
        ></Box>
      </nav>
    </>
  );
};

export default Navbar;
