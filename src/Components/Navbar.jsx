import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Stack, HStack, VStack, Image, useMediaQuery } from "@chakra-ui/react";

const Navbar = () => {
  const [isLargerThan748] = useMediaQuery("(min-width: 767px)");

  return (
    <>
      <nav position={"fixed"}>
        <Stack direction={'row'} marginLeft={'20px'}>
          <Image
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
          <AiOutlineMenu color="white" size={30} display={'none'} id="menu"/>
        </Stack>
      </nav>
    </>
  );
};

export default Navbar;
